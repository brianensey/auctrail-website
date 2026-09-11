"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { trackLead } from "../analytics";

const useGoogleEmail = process.env.NEXT_PUBLIC_CONTACT_USE_GOOGLE === "true";
const contactEndpoint = useGoogleEmail
  ? "https://auctrail-website-email.brianensey.workers.dev/api/contact"
  : process.env.NEXT_PUBLIC_CONTACT_REQUEST_ENDPOINT || "https://formsubmit.co/ajax/info@auctrail.com";
type Turnstile = {
  render: (element: HTMLElement, options: { sitekey: string; action: string; callback: (token: string) => void; "expired-callback": () => void; "error-callback": () => void }) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
};
declare global { interface Window { turnstile?: Turnstile; } }

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [ready, setReady] = useState(false);
  const [token, setToken] = useState("");
  const [spamError, setSpamError] = useState(false);
  const widget = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);
  const sending = useRef(false);

  useEffect(() => {
    if (!useGoogleEmail || !ready || !widget.current || !window.turnstile) return;
    const api = window.turnstile;
    const id = api.render(widget.current, {
      sitekey: "0x4AAAAAAEvd7BG-w1BMGrHJ", action: "contact",
      callback: (value) => { setToken(value); setSpamError(false); },
      "expired-callback": () => setToken(""),
      "error-callback": () => { setToken(""); setSpamError(true); },
    });
    widgetId.current = id;
    return () => { api.remove(id); widgetId.current = undefined; };
  }, [ready]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current || (useGoogleEmail && !token)) return;
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    if (useGoogleEmail) data.set("cf-turnstile-response", token);
    data.append("_subject", "Auctrail information request — " + String(data.get("topic") || "Product question"));
    data.append("_template", "table");
    setStatus("submitting");
    sending.current = true;

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
        signal: AbortSignal.timeout(55000),
      });
      if (!response.ok) throw new Error();
      if (useGoogleEmail && (await response.json()).success !== true) throw new Error();
      form.reset();
      setStatus("success");
      trackLead("information_request");
    } catch {
      setStatus("error");
    } finally {
      sending.current = false;
      if (useGoogleEmail) {
        setToken("");
        if (widgetId.current !== undefined) window.turnstile?.reset(widgetId.current);
      }
    }
  }

  return (
    <form className="site-form" onSubmit={submit}>
      {useGoogleEmail && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" onReady={() => setReady(true)} onError={() => setSpamError(true)} />}
      <div className="field-grid">
        <label>Name<input name="name" autoComplete="name" maxLength={150} required /></label>
        <label>Organization <span>Optional</span><input name="organization" autoComplete="organization" maxLength={200} /></label>
      </div>
      <label>Email<input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
      <label>What can we help with?
        <select name="topic" defaultValue="Product question">
          <option>Product question</option>
          <option>Pricing and availability</option>
          <option>Onboarding</option>
          <option>Integration</option>
          <option>Something else</option>
        </select>
      </label>
      <label>Message<textarea name="message" rows={6} maxLength={10000} required /></label>
      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <p className="form-note">Please do not include confidential case, buyer, payment, or account information. See our <Link href="/privacy">Privacy Policy</Link>.</p>
      {useGoogleEmail && <div ref={widget} />}
      {useGoogleEmail && <p className="form-note">{spamError ? "Spam verification could not load. Reload this page or " : "Having trouble with the form? "}<a href="mailto:info@auctrail.com">Email info@auctrail.com</a>.</p>}
      <button className="site-button form-button" type="submit" disabled={status === "submitting" || (useGoogleEmail && !token)}>
        {status === "submitting" ? "Sending…" : "Send information request"}
      </button>
      {status === "success" && <p className="form-status success" role="status">Thanks. Your message has been sent.</p>}
      {status === "error" && <p className="form-status error" role="alert">We could not confirm delivery. Please email <a href="mailto:info@auctrail.com">info@auctrail.com</a> if you need help.</p>}
    </form>
  );
}
