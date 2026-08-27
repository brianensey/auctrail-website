"use client";

import { FormEvent, useEffect, useState } from "react";

const destination = "demo1@civicsurplus.com";
const planNames = { essential: "Essential", professional: "Professional" } as const;

export default function DemoForm() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [status, setStatus] = useState<"idle" | "opening" | "success" | "error">("idle");

  useEffect(() => {
    const plan = new URLSearchParams(window.location.search).get("plan")?.toLowerCase();
    // The URL is an external input used once to initialize the controlled plan selector.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (plan === "essential" || plan === "professional") setSelectedPlan(plan);
  }, []);

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("error");
      return;
    }

    setStatus("opening");
    const data = new FormData(form);
    const plan = String(data.get("plan") || "");
    const lines = [
      `Name: ${data.get("name")}`,
      `Government agency / organization: ${data.get("organization")}`,
      `Job title: ${data.get("jobTitle")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "Not provided"}`,
      `Number of departments: ${data.get("departments") || "Not provided"}`,
      `Estimated users: ${data.get("users") || "Not provided"}`,
      `Interested plan: ${plan && plan in planNames ? planNames[plan as keyof typeof planNames] : "Not selected"}`,
      "",
      "Current surplus-sale process or message:",
      String(data.get("message")),
    ];

    try {
      const subject = plan && plan in planNames ? `Auctrail demo request — ${planNames[plan as keyof typeof planNames]}` : "Auctrail demo request";
      window.location.href = `mailto:${destination}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="demo-form" onSubmit={submitRequest} onInvalid={() => setStatus("error")}>
      <div className="demo-form-grid">
        <label>Name<input name="name" autoComplete="name" required /></label>
        <label>Government agency / organization<input name="organization" autoComplete="organization" required /></label>
        <label>Job title<input name="jobTitle" autoComplete="organization-title" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required /></label>
        <label>Phone <span>Optional</span><input name="phone" type="tel" autoComplete="tel" /></label>
        <label>Interested plan <span>Optional</span><select name="plan" value={selectedPlan} onChange={(event) => setSelectedPlan(event.target.value)}><option value="">Not selected</option><option value="essential">Essential</option><option value="professional">Professional</option></select></label>
        <label>Number of departments <span>Optional</span><input name="departments" type="number" min="1" inputMode="numeric" /></label>
        <label>Estimated users <span>Optional</span><input name="users" type="number" min="1" inputMode="numeric" /></label>
      </div>
      <label className="demo-message">Current surplus-sale process or message<textarea name="message" rows={6} required /></label>
      <p className="demo-privacy">Please include only information needed to discuss your agency’s surplus-sale workflow. Do not include confidential case, buyer, or payment information.</p>
      <button className="button button-primary" type="submit" disabled={status === "opening"}>{status === "opening" ? "Opening email…" : "Request Demo"}</button>
      {status === "success" ? <p className="demo-status success" role="status">Your email application should now be open with the request prepared. Review it and send when ready.</p> : null}
      {status === "error" ? <p className="demo-status error" role="alert">Complete the required fields with a valid email address and try again.</p> : null}
    </form>
  );
}
