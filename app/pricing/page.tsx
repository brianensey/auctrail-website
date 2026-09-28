import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import "./pricing.css";

export const metadata: Metadata = {
  title: "Pricing and Availability",
  description: "Auctrail is finalizing customer plans, included usage and paid add-ons before opening subscriptions.",
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
          <h1>Pricing is being finalized.</h1>
          <p className="pricing-development-note">
            Auctrail is completing separate customer environments, clear usage limits, and paid add-ons before publishing subscription prices. No customer subscriptions are available yet.
          </p>
        </div>
      </section>

      <section className="section compact-section">
        <div className="site-shell pricing-shell">
          <div className="pricing-intro">
            <span className="section-label">Before subscriptions open</span>
            <h2>Know what is included before you sign up.</h2>
            <p>
              Each published plan will state its included capacity, the action taken when a limit is reached, and the price of any additional capacity. Auctrail will publish these terms after the controls are tested.
            </p>
          </div>

          <section className="included-panel">
            <div>
              <span className="section-label">What to expect</span>
              <h2>Clear limits and choices.</h2>
              <p>Customers will be able to review their usage and choose whether to add capacity when it is available.</p>
            </div>
            <ul className="included-grid">
              <li>Published allowances for the resources included in a plan</li>
              <li>Notice before a limit is reached</li>
              <li>A clear explanation when an action is paused at a limit</li>
              <li>Paid add-on terms shown before additional capacity is enabled</li>
            </ul>
          </section>

          <div className="pricing-footer-note">
            <p>Plans, prices, limits, and add-ons are not yet available for purchase. Contact Auctrail if you would like to discuss your organization’s needs or request a product demonstration.</p>
            <Link className="site-button" href="/contact">Contact Auctrail</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
