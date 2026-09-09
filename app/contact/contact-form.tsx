"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { trackLead } from "../analytics";

const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_REQUEST_ENDPOINT || "https://formsubmit.co/ajax/info@auctrail.com";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    data.append("_subject", "Auctrail information request — " + String(data.get("topic") || "Product question"));
    data.append("_template", "table");
    setStatus("submitting");

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error();
      form.reset();
      setStatus("success");
      trackLead("information_request");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="site-form" onSubmit={submit}>
      <div className="field-grid">
        <label>Name<input name="name" autoComplete="name" required /></label>
        <label>Organization <span>Optional</span><input name="organization" autoComplete="organization" /></label>
      </div>
      <label>Email<input name="email" type="email" autoComplete="email" required /></label>
      <label>What can we help with?
        <select name="topic" defaultValue="Product question">
          <option>Product question</option>
          <option>Pricing and availability</option>
          <option>Onboarding</option>
          <option>Integration</option>
          <option>Something else</option>
        </select>
      </label>
      <label>Message<textarea name="message" rows={6} required /></label>
      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <p className="form-note">Please do not include confidential case, buyer, payment, or account information. See our <Link href="/privacy">Privacy Policy</Link>.</p>
      <button className="site-button form-button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send information request"}
      </button>
      {status === "success" && <p className="form-status success" role="status">Thanks. Your message has been sent.</p>}
      {status === "error" && <p className="form-status error" role="alert">Your message could not be sent. Please try again.</p>}
    </form>
  );
}
