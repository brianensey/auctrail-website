"use client";

import { FormEvent, useState } from "react";

const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_REQUEST_ENDPOINT;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "email" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");

    if (!contactEndpoint) {
      const subject = encodeURIComponent("Auctrail information request — " + String(data.topic || "Product question"));
      const body = encodeURIComponent(
        "Name: " + String(data.name || "") + "\n" +
        "Organization: " + String(data.organization || "") + "\n" +
        "Email: " + String(data.email || "") + "\n" +
        "Topic: " + String(data.topic || "") + "\n\n" +
        String(data.message || "")
      );
      window.location.href = "mailto:info@auctrail.com?subject=" + subject + "&body=" + body;
      setStatus("email");
      return;
    }

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, requestType: "information" }),
      });
      if (!response.ok) throw new Error();
      form.reset();
      setStatus("success");
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
      <p className="form-note">Please do not include confidential case, buyer, payment, or account information.</p>
      <button className="site-button form-button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send information request"}
      </button>
      {status === "success" && <p className="form-status success" role="status">Thanks. Your message has been sent.</p>}
      {status === "email" && <p className="form-status" role="status">Your email app should open with your message ready to send.</p>}
      {status === "error" && <p className="form-status error" role="alert">Your message could not be sent. Please try again.</p>}
    </form>
  );
}
