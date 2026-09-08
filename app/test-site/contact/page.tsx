import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./contact-form";
import TestFooter from "../test-footer";
import TestHeader from "../test-header";

export const metadata: Metadata = {
  title: "Contact — Auctrail",
  description: "Ask Auctrail a product, availability, pricing, or onboarding question.",
  robots: { index: false, follow: false },
};

export default function ContactPage() {
  return (
    <main className="new-site">
      <TestHeader />
      <section className="form-page">
        <div className="site-shell form-layout">
          <div className="form-intro">
            <span className="section-label">Contact Auctrail</span>
            <h1>How can we help?</h1>
            <p>Use this form for questions about the product, development, availability, future pricing, or your organization’s workflow.</p>
            <div className="form-aside">
              <strong>Looking for a demo?</strong>
              <p>The demo has its own short request form.</p>
              <Link className="text-link" href="/test-site/demo">Go to demo request <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <TestFooter />
    </main>
  );
}
