"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { trackLead } from "../analytics";

const requestEndpoint = process.env.NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT || "https://formsubmit.co/ajax/info@auctrail.com";

export default function DemoRequestForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("submitting");
    const data = new FormData(form);
    data.append("_subject", "New Auctrail demo request");
    data.append("_template", "table");

    try {
      const response = await fetch(requestEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error();
      form.reset();
      setStatus("success");
      trackLead("demo_request");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="site-form" onSubmit={submit}>
      <div className="field-grid">
        <label>Name <span>Optional</span><input name="name" autoComplete="name" /></label>
        <label>Organization <span>Optional</span><input name="organization" autoComplete="organization" /></label>
      </div>
      <label>Email<input name="email" type="email" autoComplete="email" required /></label>
      <label>Your role <span>Optional</span><input name="jobTitle" autoComplete="organization-title" /></label>
      <label>What would you like to see? <span>Optional</span><textarea name="message" rows={5} /></label>
      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <p className="form-note">Your email is the only required information. Please do not enter confidential records or account details. See our <Link href="/privacy">Privacy Policy</Link>.</p>
      <button className="site-button form-button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Request demo access"}
      </button>
      {status === "success" && <p className="form-status success" role="status">Thanks. Your demo request has been sent. We’ll follow up by email.</p>}
      {status === "error" && <p className="form-status error" role="alert">Your request could not be sent right now. Please try again shortly.</p>}
    </form>
  );
}
