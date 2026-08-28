"use client";

import { FormEvent, useEffect, useState } from "react";

const requestEndpoint = process.env.NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT || "https://demo.auctrail.com/api/demo/access";

export default function DemoForm() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const plan = new URLSearchParams(window.location.search).get("plan")?.toLowerCase();
    // The URL is an external input used once to initialize the controlled plan selector.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (plan === "essential" || plan === "professional") setSelectedPlan(plan);
  }, []);

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");
    const data = new FormData(form);
    try {
      const response = await fetch(requestEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      const result = await response.json().catch(() => ({})) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Your request could not be sent.");
      setStatus("success");
      form.reset();
      setSelectedPlan("");
    } catch {
      setStatus("error");
      setErrorMessage("Your request could not be sent right now. Please try again shortly.");
    }
  }

  return (
    <form className="demo-form" onSubmit={submitRequest} onInvalid={() => setStatus("error")}>
      <div className="demo-form-grid">
        <label>Name <span>Optional</span><input name="name" autoComplete="name" /></label>
        <label>Government agency / organization <span>Optional</span><input name="organization" autoComplete="organization" /></label>
        <label>Job title <span>Optional</span><input name="jobTitle" autoComplete="organization-title" /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required /></label>
        <label>Interested plan <span>Optional</span><select name="plan" value={selectedPlan} onChange={(event) => setSelectedPlan(event.target.value)}><option value="">Not selected</option><option value="essential">Essential</option><option value="professional">Professional</option></select></label>
        <label>Number of departments <span>Optional</span><input name="departments" type="number" min="1" inputMode="numeric" /></label>
        <label>Estimated users <span>Optional</span><input name="users" type="number" min="1" inputMode="numeric" /></label>
      </div>
      <label className="demo-message">Current surplus-sale process or message <span>Optional</span><textarea name="message" rows={6} /></label>
      <p className="demo-privacy">Your email is the only required contact information. We do not ask for a phone number and will not use high-pressure sales tactics. Please do not include confidential case, buyer, or payment information.</p>
      <label className="demo-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <button className="button button-primary" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending request…" : "Request Demo"}</button>
      {status === "success" ? <p className="demo-status success" role="status">Check your email for Administrator and Regular User demo access. Access remains active for 72 hours, and demonstration data resets every 24 hours.</p> : null}
      {status === "error" ? <p className="demo-status error" role="alert">{errorMessage || "Enter a valid email address and try again."}</p> : null}
    </form>
  );
}
