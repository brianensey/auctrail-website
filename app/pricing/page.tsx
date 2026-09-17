import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import "./pricing.css";

export const metadata: Metadata = {
  title: "Pricing and Availability",
  description: "See Auctrail starting subscription pricing, what is included, and current launch availability for the asset disposition management platform.",
  alternates: { canonical: "/pricing/" },
  openGraph: { url: "/pricing/", title: "Pricing and Availability | Auctrail", images: [{ url: "/auctrail-logo-mark.png", width: 512, height: 512, alt: "Auctrail" }] },
};

export default function PricingPage() {
  return (
    <main className="new-site">
      <SiteHeader />
      <section className="simple-hero pricing-hero">
        <div className="site-shell narrow">
          <div className="status-pill"><span /> Under development</div>
          <h1>Simple pricing for a clearer surplus workflow.</h1>
          <p>Auctrail is still in active development. We are publishing the current starting subscription now so organizations can plan ahead while we finish the product and prepare for launch.</p>
        </div>
      </section>

      <section className="section compact-section">
        <div className="site-shell narrow">
          <span className="section-label">Current starting subscription</span>
          <div className="pricing-grid">
            <article className="pricing-card">
              <span className="section-label">Standard</span>
              <h2>Auctrail Standard</h2>
              <div className="pricing-amount"><strong>$199</strong><span>/ month</span></div>
              <p className="pricing-summary">A complete starting plan for organizations that need a structured way to intake, manage, document, and dispose of surplus assets.</p>

              <ul className="pricing-list">
                <li>Asset and property intake workflows</li>
                <li>Department and role-based controls</li>
                <li>Approval and disposition workflows</li>
                <li>QR-code and asset-label support</li>
                <li>Auction and disposition export tools</li>
                <li>Records retention and audit history</li>
                <li>Reporting and data exports</li>
                <li>Final outcomes including sold, destroyed, and transferred property</li>
                <li>Access to Auctrail support resources</li>
              </ul>

              <div className="pricing-actions">
                <Link className="site-button" href="/demo">Request a demo</Link>
                <Link className="secondary-button site-button" href="/contact">Ask a question</Link>
              </div>
            </article>

            <aside className="pricing-note">
              <span className="section-label">Still being finalized</span>
              <h3>Plan limits and additional options</h3>
              <p>The starting subscription price is published, but Auctrail is still finalizing usage limits, additional plan levels, and larger-organization options before checkout is enabled.</p>
              <ul>
                <li>No online checkout or Add to Cart yet</li>
                <li>No automatic purchase or billing enrollment yet</li>
                <li>Usage limits will be clearly shown before launch</li>
                <li>Any higher-volume or enterprise options will be published here when finalized</li>
                <li>No surprise fees will be introduced without being shown on the pricing page first</li>
              </ul>
            </aside>
          </div>

          <p className="pricing-disclaimer">Auctrail is under active development. The $199 monthly starting subscription reflects the current planned launch price for the Standard plan. Product scope, usage limits, and additional plan options may be refined before general availability. No payment is collected from this page today.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
