"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { trackLead } from "../analytics";

const leadEndpoint = process.env.NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT || "https://formsubmit.co/ajax/info@auctrail.com";
const demoAccessEndpoint = process.env.NEXT_PUBLIC_DEMO_ACCESS_ENDPOINT || "https://demo.auctrail.com/api/demo/access";

type DemoAccessResponse = {
  ok?: boolean;
  expiresAt?: string;
  error?: string;
};

async function readJson(response: Response): Promise<DemoAccessResponse> {
  try {
    return (await response.json()) as DemoAccessResponse;
  } catch {
    return {};
  }
}

export default function DemoRequestForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("submitting");
    setMessage("");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const accessResponse = await fetch(demoAccessEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const accessPayload = await readJson(accessResponse);

      if (!accessResponse.ok) {
        throw new Error(accessPayload.error || "Demo access could not be prepared right now.");
      }

      // Keep the existing website lead notification, but do not let a third-party
      // notification failure prevent valid Auctrail Demo access from succeeding.
      const leadData = new FormData(form);
      leadData.append("_subject", "New Auctrail demo request");
      leadData.append("_template", "table");
      void fetch(leadEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: leadData,
      }).catch(() => undefined);

      form.reset();
      setStatus("success");
      setMessage("Demo access has been prepared. Check your email for the temporary login credentials.");
      trackLead("demo_request");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Your request could not be completed right now. Please try again shortly.");
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
        {status === "submitting" ? "Preparing access…" : "Request demo access"}
      </button>
      {status === "success" && <p className="form-status success" role="status">{message}</p>}
      {status === "error" && <p className="form-status error" role="alert">{message}</p>}
    </form>
  );
}
