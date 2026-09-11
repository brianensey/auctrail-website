// Contact-form endpoint. Credentials are Cloudflare Worker secrets, never browser variables.
const ORIGINS = new Set(['https://auctrail.com', 'https://www.auctrail.com']);
const TOPICS = new Set(['Product question', 'Pricing and availability', 'Onboarding', 'Integration', 'Something else']);
const MAX_BYTES = 32768;
class RequestError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}
function base64(text) {
  return btoa(String.fromCharCode(...new TextEncoder().encode(text)));
}
function reply(status, message, origin) {
  const headers = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', Vary: 'Origin' };
  if (ORIGINS.has(origin)) headers['Access-Control-Allow-Origin'] = origin;
  return new Response(JSON.stringify({ success: status === 200, message }), { status, headers });
}
async function readForm(request) {
  if (!request.body) throw new RequestError(400, 'Missing form.');
  const type = request.headers.get('content-type') || '';
  if (!type.startsWith('multipart/form-data;') && !type.startsWith('application/x-www-form-urlencoded')) {
    throw new RequestError(415, 'Unsupported form format.');
  }
  const reader = request.body.getReader();
  const chunks = [];
  let size = 0;
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BYTES) {
        await reader.cancel();
        throw new RequestError(413, 'Message is too large.');
      }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  try { return await new Response(new Blob(chunks), { headers: { 'Content-Type': type } }).formData(); }
  catch { throw new RequestError(400, 'Invalid form.'); }
}
function field(form, key, max, required = false) {
  const values = form.getAll(key);
  if (values.length > 1 || (values.length && typeof values[0] !== 'string')) {
    throw new RequestError(400, 'Invalid form field.');
  }
  const value = (values[0] || '').trim();
  if (value.length > max || (required && !value)) throw new RequestError(400, 'Check the form fields.');
  return value;
}
async function call(fetcher, url, options) {
  // Workers runtimes can reject redirect: 'error'. Manual keeps credentials on
  // the intended host; callers reject redirect responses through response.ok.
  return await fetcher(url, { ...options, signal: AbortSignal.timeout(15000), redirect: 'manual' });
}
export async function handle(request, env, fetcher = fetch) {
  if (new URL(request.url).pathname === '/api/demo-email') return handleDemoEmail(request, env, fetcher);
  const origin = request.headers.get('origin');
  if (new URL(request.url).pathname !== '/api/contact') return reply(404, 'Not found.', origin);
  if (!ORIGINS.has(origin)) return reply(403, 'Origin not allowed.', origin);
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: {
      'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type', Vary: 'Origin', 'Cache-Control': 'no-store',
    } });
  }
  if (request.method !== 'POST') return reply(405, 'Use POST.', origin);
  try {
    const form = await readForm(request);
    if (field(form, 'website', 2048)) return reply(200, 'Received.', origin);
    const name = field(form, 'name', 150, true);
    const organization = field(form, 'organization', 200);
    const email = field(form, 'email', 254, true);
    const topic = field(form, 'topic', 100, true);
    const message = field(form, 'message', 10000, true);
    const challenge = field(form, 'cf-turnstile-response', 2048, true);
    // Strict ASCII email syntax prevents MIME header injection. User text goes only in the body.
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9.-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/.test(email) || !TOPICS.has(topic)) {
      throw new RequestError(400, 'Check your email address and topic.');
    }
    if (!env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET || !env.GOOGLE_REFRESH_TOKEN || !env.TURNSTILE_SECRET_KEY) {
      throw new RequestError(503, 'Email is temporarily unavailable.');
    }
    const verification = await call(fetcher, 'https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST', body: new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: challenge }),
    });
    if (!verification.ok) throw new RequestError(503, 'Verification is temporarily unavailable.');
    const verified = await verification.json();
    if (!verified.success || !['auctrail.com', 'www.auctrail.com'].includes(verified.hostname) || verified.action !== 'contact') {
      throw new RequestError(400, 'Please complete the spam check again.');
    }
    const tokenResponse = await call(fetcher, 'https://oauth2.googleapis.com/token', {
      method: 'POST', body: new URLSearchParams({
        client_id: env.GOOGLE_CLIENT_ID, client_secret: env.GOOGLE_CLIENT_SECRET,
        refresh_token: env.GOOGLE_REFRESH_TOKEN, grant_type: 'refresh_token',
      }),
    });
    if (!tokenResponse.ok) throw new RequestError(503, 'Email is temporarily unavailable.');
    const token = await tokenResponse.json();
    if (typeof token.access_token !== 'string' || !token.access_token) throw new RequestError(503, 'Email is temporarily unavailable.');
    const body = `Name: ${name}\nOrganization: ${organization || '(not provided)'}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`;
    const mime = [
      'From: Auctrail Website <info@auctrail.com>', 'To: info@auctrail.com',
      `Reply-To: ${email}`, `Subject: Auctrail information request - ${topic}`,
      'MIME-Version: 1.0', 'Content-Type: text/plain; charset=UTF-8',
      'Content-Transfer-Encoding: base64', '', base64(body).match(/.{1,76}/g).join('\r\n'),
    ].join('\r\n');
    // Never automatically retry sends: a timeout can occur after Gmail accepted the email.
    const sent = await call(fetcher, 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST', headers: { Authorization: `Bearer ${token.access_token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ raw: base64(mime).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '') }),
    });
    if (!sent.ok) throw new RequestError(503, 'Email could not be confirmed. Please contact info@auctrail.com.');
    const receipt = await sent.json();
    if (typeof receipt.id !== 'string' || !receipt.id) throw new RequestError(503, 'Email could not be confirmed.');
    return reply(200, 'Your message has been sent.', origin);
  } catch (error) {
    if (error instanceof RequestError) return reply(error.status, error.message, origin);
    // Do not log form contents, Google responses, or secrets.
    console.error(JSON.stringify({ event: 'contact_request_failed', requestId: crypto.randomUUID() }));
    return reply(503, 'Delivery could not be confirmed. Please contact info@auctrail.com.', origin);
  }
}
export default { fetch(request, env) { return handle(request, env); } };

// Only the demo server can sign a delivery request. No Google secrets enter Render.
export async function handleDemoEmail(request, env, fetcher = fetch) {
  if (request.method !== 'POST') return reply(405, 'Use POST.', null);
  const timestamp = request.headers.get('x-auctrail-timestamp') || '';
  const signature = request.headers.get('x-auctrail-signature') || '';
  if (!env.DEMO_EMAIL_SIGNING_SECRET || !env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET || !env.GOOGLE_REFRESH_TOKEN) return reply(503, 'Email unavailable.', null);
  if (!/^\d{10}$/.test(timestamp) || Math.abs(Date.now() / 1000 - Number(timestamp)) > 300 || !/^[a-f0-9]{64}$/.test(signature)) return reply(401, 'Unauthorized.', null);
  try {
    if (!request.body) return reply(400, 'Missing message.', null);
    const reader = request.body.getReader();
    const chunks = [];
    let size = 0;
    try {
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > 65536) { await reader.cancel(); return reply(413, 'Message too large.', null); }
        chunks.push(value);
      }
    } finally { reader.releaseLock(); }
    const body = await new Blob(chunks).text();
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey('raw', encoder.encode(env.DEMO_EMAIL_SIGNING_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
    const valid = await crypto.subtle.verify('HMAC', key, Uint8Array.from(signature.match(/../g), hex => parseInt(hex, 16)), encoder.encode(`${timestamp}.${body}`));
    if (!valid) return reply(401, 'Unauthorized.', null);
    const input = JSON.parse(body);
    if (typeof input.email !== 'string' || input.email.length > 254 || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9.-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/.test(input.email) || typeof input.html !== 'string' || !input.html || input.html.length > 50000) return reply(400, 'Invalid message.', null);
    const tokenResponse = await call(fetcher, 'https://oauth2.googleapis.com/token', {
      method: 'POST', body: new URLSearchParams({ client_id: env.GOOGLE_CLIENT_ID, client_secret: env.GOOGLE_CLIENT_SECRET, refresh_token: env.GOOGLE_REFRESH_TOKEN, grant_type: 'refresh_token' }),
    });
    if (!tokenResponse.ok) return reply(503, 'Email unavailable.', null);
    const token = await tokenResponse.json();
    if (typeof token.access_token !== 'string' || !token.access_token) return reply(503, 'Email unavailable.', null);
    const mime = ['From: Auctrail <info@auctrail.com>', `To: ${input.email}`, 'Bcc: info@auctrail.com', 'Reply-To: info@auctrail.com', 'Subject: Your Auctrail demo login information', 'MIME-Version: 1.0', 'Content-Type: text/html; charset=UTF-8', 'Content-Transfer-Encoding: base64', '', base64(input.html).match(/.{1,76}/g).join('\r\n')].join('\r\n');
    const sent = await call(fetcher, 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST', headers: { Authorization: `Bearer ${token.access_token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ raw: base64(mime).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '') }),
    });
    if (!sent.ok) return reply(503, 'Delivery could not be confirmed.', null);
    const receipt = await sent.json();
    return typeof receipt.id === 'string' && receipt.id ? reply(200, 'Sent.', null) : reply(503, 'Delivery could not be confirmed.', null);
  } catch {
    console.error(JSON.stringify({ event: 'demo_email_failed', requestId: crypto.randomUUID() }));
    return reply(503, 'Delivery could not be confirmed.', null);
  }
}
