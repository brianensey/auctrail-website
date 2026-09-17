import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import "./pricing.css";

export const metadata: Metadata = {
  title: "Pricing and Availability",
  description: "See Auctrail subscription plans, included users, storage, monthly usage limits, and current launch availability.",
  alternates: { canonical: "/pricing/" },
  openGraph: { url: "/pricing/", title: "Pricing and Availability | Auctrail", images: [{ url: "/auctrail-logo-mark.png", width: 512, height: 512, alt: "Auctrail" }] },
};

const plans = [
  {
    name: "Starter",
    price: "$49",
    users: "2 active users",
    storage: "5 GB file storage",
    assets: "50 assets / month",
    property: "50 property records / month",
    summary: "For small teams, entrepreneurs, and organizations beginning to formalize surplus and asset-disposition work.",
  },
  {
    name: "Growth",
    price: "$149",
    users: "5 active users",
    storage: "25 GB file storage",
    assets: "250 assets / month",
    property: "250 property records / month",
    summary: "For growing operations that need more users, more file capacity, and substantially higher monthly record volume.",
    featured: true,
  },
  {
    name: "Professional",
    price: "$249",
    users: "15 active users",
    storage: "100 GB file storage",
    assets: "750 assets / month",
    property: "750 property records / month",
    summary: "For established surplus programs, multi-department teams, refurbishers, and higher-volume organizations.",
  },
  {
    name: "Enterprise",
    price: "$499",
    users: "40 active users",
    storage: "500 GB file storage",
    assets: "2,000 assets / month",
    property: "2,000 property records / month",
    summary: "For large organizations with substantial monthly throughput, larger teams, and heavier operational requirements.",
  },
];

const coreFeatures = [
  "Asset and property intake workflows",
  "Departments and locations",
  "Role-based access and permissions",
  "Approval and disposition workflows",
  "QR-code and asset-label support",
  "Photos and document attachments",
  "Auction and disposition preparation tools",
  "Records retention and audit history",
  "Reports and data exports",
  "Final outcomes including sold, transferred, donated, and destroyed property",
  "Auctrail Help Center and support access",
  "Web application access",
  "Auctrail iPad application when released",
];

export default function PricingPage() {
  return (
    <main className="new-site">
      <SiteHeader />

      <section className="simple-hero pricing-hero">
        <div className="site-shell narrow">
          <div className="status-pill"><span /> Under development</div>
          <h1>Simple plans that grow with your operation.</h1>
          <p className="pricing-development-note">Auctrail is still under active development. The prices and limits below represent the current planned launch structure so organizations can evaluate fit before online purchasing is enabled.</p>
        </div>
      </section>

      <section className="section compact-section">
        <div className="site-shell pricing-shell">
          <div className="pricing-intro">
            <span className="section-label">Planned launch pricing</span>
            <h2>Choose capacity, not a stripped-down product.</h2>
            <p>Every paid plan includes the core Auctrail workflow. Plans scale primarily by active users, file storage, and monthly asset/property usage so a smaller customer can start affordably without creating unlimited infrastructure exposure.</p>
          </div>

          <div className="pricing-cards">
            {plans.map((plan) => (
              <article className={plan.featured ? "plan-card featured" : "plan-card"} key={plan.name}>
                {plan.featured ? <div className="popular-badge">Most Popular</div> : null}
                <span className="section-label">{plan.name}</span>
                <div className="plan-price"><strong>{plan.price}</strong><span>/ month</span></div>
                <p className="plan-summary">{plan.summary}</p>
                <dl className="plan-limits">
                  <div><dt>Users</dt><dd>{plan.users}</dd></div>
                  <div><dt>File storage</dt><dd>{plan.storage}</dd></div>
                  <div><dt>Assets</dt><dd>{plan.assets}</dd></div>
                  <div><dt>Property</dt><dd>{plan.property}</dd></div>
                </dl>
                <div className="plan-actions">
                  <Link className="site-button" href="/demo">Request a demo</Link>
                </div>
              </article>
            ))}
          </div>

          <section className="included-panel">
            <div>
              <span className="section-label">Included with every plan</span>
              <h2>Core Auctrail features stay consistent.</h2>
              <p>The lower-priced plans are capacity-limited, not intentionally crippled. Customers can learn one workflow and upgrade capacity as their organization grows.</p>
            </div>
            <ul className="included-grid">
              {coreFeatures.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </section>

          <section className="usage-panel">
            <div className="usage-copy">
              <span className="section-label">How limits work</span>
              <h2>Usage is controlled before it becomes a surprise bill.</h2>
              <p>Monthly asset and property allowances reset each billing month. Existing records remain accessible if a monthly creation limit is reached. Auctrail will not automatically bill customers for usage overages at launch.</p>
            </div>
            <div className="usage-steps">
              <div><strong>80%</strong><span>Usage warning</span></div>
              <div><strong>90%</strong><span>Higher-priority warning</span></div>
              <div><strong>100%</strong><span>New records in that category are paused until the next cycle or plan change</span></div>
            </div>
          </section>

          <section className="capacity-panel">
            <span className="section-label">Additional capacity</span>
            <h2>Need more than 2,000 records per month?</h2>
            <p>Organizations that exceed the Enterprise monthly allowances can contact Auctrail for additional capacity. Higher-volume pricing will be published before it is offered. Enterprise does not mean unlimited usage.</p>
            <Link className="secondary-button site-button" href="/contact">Contact Auctrail</Link>
          </section>

          <section className="fair-use-panel">
            <span className="section-label">Fair use and infrastructure protection</span>
            <h2>Normal data transfer is included.</h2>
            <p>Auctrail does not currently meter ordinary page views, normal report downloads, or typical customer data transfer as a separate customer-facing quota. File storage and record creation are controlled by plan limits.</p>
            <p><strong>Fair-use clause:</strong> plans are intended for normal interactive use of the Auctrail service by the subscribed organization. Excessive automated traffic, abusive API activity, unusually heavy repeated downloads, intentionally wasteful transfer patterns, or other activity that creates disproportionate infrastructure cost may require usage reduction, an account configuration change, additional capacity, or movement to a higher plan. Auctrail will not impose automatic bandwidth overage charges without first communicating the issue and applicable pricing.</p>
          </section>

          <div className="pricing-footer-note">
            <strong>Under development:</strong> online checkout, Add to Cart, and automatic billing enrollment are not yet enabled. Pricing, limits, and plan details shown here reflect the current planned launch structure and may be refined before general availability. No payment is collected from this page today.
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
