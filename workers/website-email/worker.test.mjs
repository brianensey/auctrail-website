import test from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import { handle } from './worker.mjs';
const env = { GOOGLE_CLIENT_ID: 'fake-id', GOOGLE_CLIENT_SECRET: 'fake-secret', GOOGLE_REFRESH_TOKEN: 'fake-refresh', TURNSTILE_SECRET_KEY: 'fake-turnstile' };
function request(overrides = {}, origin = 'https://auctrail.com') {
  const form = new URLSearchParams();
  const values = { name: 'Test Person', organization: 'Test org', email: 'test@example.com', topic: 'Product question', message: 'Hello — café', 'cf-turnstile-response': 'fake-token', ...overrides };
  for (const [key, value] of Object.entries(values)) form.set(key, value);
  return new Request('https://email.example/api/contact', { method: 'POST', headers: { origin }, body: form });
}
const json = (body, status = 200) => Response.json(body, { status });
function signedDemo(body, secret = 'test-signing-secret', timestamp = Math.floor(Date.now() / 1000).toString()) {
  const text = JSON.stringify(body);
  return new Request('https://email.example/api/demo-email', { method: 'POST', headers: {
    'x-auctrail-timestamp': timestamp, 'x-auctrail-signature': createHmac('sha256', secret).update(`${timestamp}.${text}`).digest('hex'),
  }, body: text });
}
test('demo delivery rejects invalid signatures, expired requests, and injected recipients without sending', async () => {
  const demoEnv = { ...env, DEMO_EMAIL_SIGNING_SECRET: 'test-signing-secret' };
  const noSend = () => { throw new Error('Must not send'); };
  assert.equal((await handle(signedDemo({ email: 'a@example.com', html: '<p>Test</p>' }, 'wrong'), demoEnv, noSend)).status, 401);
  assert.equal((await handle(signedDemo({ email: 'a@example.com', html: '<p>Test</p>' }, 'test-signing-secret', '1000000000'), demoEnv, noSend)).status, 401);
  assert.equal((await handle(signedDemo({ email: 'a@example.com\r\nBcc: other@example.com', html: '<p>Test</p>' }), demoEnv, noSend)).status, 400);
});
test('signed demo delivery sends HTML with fixed sender and owner copy', async () => {
  let sends = 0;
  const response = await handle(signedDemo({ email: 'visitor@example.com', html: '<p>Login — test</p>' }), { ...env, DEMO_EMAIL_SIGNING_SECRET: 'test-signing-secret' }, async (url, init) => {
    assert.equal(init.redirect, 'manual');
    if (url.includes('oauth2')) return json({ access_token: 'fake-access' });
    sends++;
    const mime = Buffer.from(JSON.parse(init.body).raw, 'base64url').toString();
    assert.match(mime, /To: visitor@example.com\r\nBcc: info@auctrail.com/);
    assert.match(mime, /From: Auctrail <info@auctrail.com>/);
    assert.equal(Buffer.from(mime.split('\r\n\r\n')[1], 'base64').toString(), '<p>Login — test</p>');
    return json({ id: 'confirmed' });
  });
  assert.equal(response.status, 200);
  assert.equal(sends, 1);
});
test('successful submission preserves UTF-8 and fixes recipient regardless of client fields', async () => {
  const calls = [];
  const response = await handle(request({ to: 'attacker@example.com' }), env, async (url, init) => {
    calls.push(url);
    if (url.includes('siteverify')) return json({ success: true, hostname: 'auctrail.com', action: 'contact' });
    if (url.includes('oauth2')) return json({ access_token: 'fake-access' });
    const mime = Buffer.from(JSON.parse(init.body).raw, 'base64url').toString();
    assert.match(mime, /To: info@auctrail.com/);
    assert.doesNotMatch(mime, /attacker@example.com/);
    assert.match(Buffer.from(mime.split('\r\n\r\n')[1], 'base64').toString(), /Hello — café/);
    return json({ id: 'fake-message-id' });
  });
  assert.equal(response.status, 200);
  assert.equal(calls.length, 3);
});
test('foreign origin, header injection, oversized body, and missing challenge never contact Gmail', async () => {
  const forbiddenFetch = () => { throw new Error('Unexpected external request'); };
  assert.equal((await handle(request({}, 'https://evil.example'), env, forbiddenFetch)).status, 403);
  assert.equal((await handle(request({ email: 'x@example.com\r\nBcc: x@evil.example' }), env, forbiddenFetch)).status, 400);
  assert.equal((await handle(request({ message: 'x'.repeat(40000) }), env, forbiddenFetch)).status, 413);
  assert.equal((await handle(request({ 'cf-turnstile-response': '' }), env, forbiddenFetch)).status, 400);
});
test('challenge from another hostname is rejected before Google authorization', async () => {
  let calls = 0;
  const result = await handle(request(), env, async () => { calls++; return json({ success: true, hostname: 'evil.example', action: 'contact' }); });
  assert.equal(result.status, 400);
  assert.equal(calls, 1);
});
test('missing secrets fails closed', async () => {
  assert.equal((await handle(request(), {}, () => { throw new Error('Unexpected request'); })).status, 503);
});
test('Gmail rejection is not reported as success or automatically retried', async () => {
  let sends = 0;
  const result = await handle(request(), env, async url => {
    if (url.includes('siteverify')) return json({ success: true, hostname: 'auctrail.com', action: 'contact' });
    if (url.includes('oauth2')) return json({ access_token: 'fake-access' });
    sends++; return json({ error: 'fake rejection' }, 429);
  });
  assert.equal(result.status, 503);
  assert.equal(sends, 1);
});
