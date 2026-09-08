import type { Metadata } from "next";
import Link from "next/link";
import TestFooter from "../test-footer";
import TestHeader from "../test-header";

export const metadata: Metadata = {
  title: "Pricing — Auctrail",
  description: "A friendly update about Auctrail pricing while the product remains in active development.",
  alternates: { canonical: "https://auctrail.com/pricing" },
  robots: { index: true, follow: true },
};

export default function PricingPage() {
  return (
    <main className="new-site">
      <TestHeader />
      <section className="simple-hero pricing-hero">
        <div className="site-shell narrow">
          <div className="status-pill"><span /> Active development</div>
          <h1>Glad to see you’re interested.</h1>
          <p>Auctrail is still in active development, so final pricing has not been published yet. We’re focused on finishing a dependable product and making sure the plans are clear and fair before launch.</p>
          <div className="button-row centered-row">
            <Link className="site-button" href="/contact">Ask about the product</Link>
            <Link className="text-link" href="/demo">Request a demo <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
      <section className="section compact-section">
        <div className="site-shell narrow">
          <div className="quiet-panel">
            <span className="section-label">What to expect</span>
            <h2>Simple pricing, clearly explained.</h2>
            <p>Before launch, we’ll publish what each plan includes, who it is best for, and what onboarding or support is included. No surprise fees and no pressure to decide before the product is ready.</p>
          </div>
        </div>
      </section>
      <TestFooter />
    </main>
  );
}
