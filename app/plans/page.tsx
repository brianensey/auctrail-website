import type { Metadata } from "next";
import Link from "next/link";
import styles from "./plans.module.css";

export const metadata: Metadata = {
  title: "Plans and Pricing",
  description:
    "Compare Auctrail Essential, Professional, and Enterprise plans for government asset disposition management, starting at $99 per month.",
  keywords: [
    "Auctrail pricing",
    "government surplus software pricing",
    "municipal asset disposition software",
    "public agency surplus management",
    "government asset management plans",
  ],
  alternates: {
    canonical: "https://auctrail.com/plans",
  },
  openGraph: {
    title: "Auctrail Plans and Pricing",
    description:
      "Three managed plans for government asset disposition workflows, starting at $99 per month.",
    url: "https://auctrail.com/plans",
    siteName: "Auctrail",
    type: "website",
  },
};

const plans = [
  {
    name: "Essential",
    label: "For smaller teams",
    price: "99",
    annual: "1,188",
    description:
      "For small municipalities, authorities, and focused departments that need the complete disposition workflow with a smaller staff footprint.",
    capacity: [
      "Up to 5 active users",
      "Up to 5 departments",
      "Guided setup materials",
      "Import templates",
      "Standard email support",
    ],
  },
  {
    name: "Professional",
    label: "Most popular",
    price: "199",
    annual: "2,388",
    description:
      "For most cities and multi-department operations that need broader access, assisted setup, and faster support.",
    capacity: [
      "Up to 20 active users",
      "Unlimited departments",
      "Assisted onboarding session",
      "Initial data-import assistance",
      "Priority email support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    label: "For larger agencies",
    price: "399",
    annual: "4,788",
    description:
      "For larger cities and complex multi-division operations that need greater user capacity and a managed implementation.",
    capacity: [
      "Up to 50 active users",
      "Unlimited departments and divisions",
      "Dedicated implementation planning",
      "Historical data-migration assistance",
      "Priority support with a named contact",
    ],
  },
];

const coreCapabilities = [
  {
    number: "01",
    title: "Cases and assets",
    description:
      "Unlimited case and asset records with intake details, identifiers, condition, custody, assignments, dates, and status tracking.",
  },
  {
    number: "02",
    title: "Documents and accountability",
    description:
      "Photos, approvals, titles, receipts, disposal proof, role-based permissions, audit history, and searchable completed records.",
  },
  {
    number: "03",
    title: "Auction and disposition",
    description:
      "Auction preparation, GovDeals-compatible export, final outcomes, payment and pickup details, and complete closeout history.",
  },
  {
    number: "04",
    title: "Labels, reporting, and service",
    description:
      "Printable labels, QR access, search, reports, Excel and CSV exports, secure hosting, updates, documentation, and support.",
  },
];

const comparisonRows = [
  ["Active users included", "5", "20", "50"],
  ["Departments", "Up to 5", "Unlimited", "Unlimited"],
  ["Case and asset records", "Unlimited", "Unlimited", "Unlimited"],
  ["Complete intake-to-closeout workflow", "Included", "Included", "Included"],
  ["Photos, documents, labels, and QR access", "Included", "Included", "Included"],
  ["Permissions, audit history, and reporting", "Included", "Included", "Included"],
  ["GovDeals-compatible export", "Included", "Included", "Included"],
  ["Onboarding", "Guided", "Assisted", "Dedicated"],
  ["Data import", "Templates", "Initial import assistance", "Historical migration assistance"],
  ["Support", "Standard email", "Priority email", "Priority with named contact"],
];

const frequentlyAskedQuestions = [
  {
    question: "What makes the plans different?",
    answer:
      "The core Auctrail workflow is included in every plan. Pricing changes according to active-user capacity, department scale, onboarding, data-import assistance, and support level.",
  },
  {
    question: "Are cases or assets limited by plan?",
    answer:
      "No. Essential, Professional, and Enterprise all include unlimited case and asset records. The plan limits apply to active users and, on Essential, the number of departments.",
  },
  {
    question: "Can an agency change plans later?",
    answer:
      "Yes. An agency can move to a larger plan as its staff, departments, or implementation needs grow without rebuilding its Auctrail records.",
  },
  {
    question: "Is hosting included?",
    answer:
      "Yes. Every plan includes the hosted Auctrail application, platform updates, documentation, and the support level listed for that plan.",
  },
  {
    question: "Are auction marketplace fees included?",
    answer:
      "No. Seller, buyer, listing, or transaction fees charged by an auction marketplace are separate from the Auctrail subscription and remain subject to that provider's terms.",
  },
  {
    question: "Can every GovDeals account use bulk upload immediately?",
    answer:
      "Not necessarily. GovDeals Bulk Asset Upload is an account-enabled capability. The agency's authorized GovDeals account must have it enabled before using an Auctrail GovDeals-compatible export for bulk upload.",
  },
  {
    question: "Do annual prices include a discount?",
    answer:
      "The annual totals shown are twelve months at the published monthly rate. A separate annual-payment discount is not currently applied.",
  },
  {
    question: "What if an agency needs more than 50 users?",
    answer:
      "Larger deployments can be scoped from the Enterprise plan based on user count, implementation requirements, data migration, and support needs.",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path
        d="M4 10h11M11 5l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path
        d="m4 10 4 4 8-9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function SiteHeader() {
  return (
    <header className="marketing-header">
      <div className="marketing-shell header-inner">
        <Link className="header-logo" href="/" aria-label="Auctrail home">
          <img
            src="/auctrail-logo-approved.jpg"
            alt="Auctrail — Asset Disposition Management"
            width="425"
            height="115"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/#platform">Platform</Link>
          <Link href="/#workflow">Workflow</Link>
          <Link href="/plans" aria-current="page">Plans</Link>
          <Link href="/#integrations">Integrations</Link>
          <Link href="/support">Support</Link>
        </nav>

        <div className="header-actions">
          <a className="text-link" href="https://app.auctrail.com/login">Client login</a>
          <Link className="button button-primary button-compact" href="/support">
            Request information
          </Link>
        </div>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <div className="mobile-nav-panel">
            <Link href="/#platform">Platform</Link>
            <Link href="/#workflow">Workflow</Link>
            <Link href="/plans" aria-current="page">Plans</Link>
            <Link href="/#integrations">Integrations</Link>
            <Link href="/support">Support</Link>
            <a href="https://app.auctrail.com/login">Client login</a>
          </div>
        </details>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="marketing-footer">
      <div className="marketing-shell footer-grid">
        <div className="footer-intro">
          <img src="/auctrail-logo-approved.jpg" alt="Auctrail" width="425" height="115" />
          <p>
            Managed asset disposition software for government property intake, approvals,
            auctions, disposal, documentation, and reporting.
          </p>
        </div>
        <div>
          <strong>Platform</strong>
          <Link href="/#platform">Capabilities</Link>
          <Link href="/#workflow">Workflow</Link>
          <Link href="/plans">Plans</Link>
          <Link href="/#integrations">Integrations</Link>
        </div>
        <div>
          <strong>Access</strong>
          <Link href="/support">Support</Link>
          <a href="https://app.auctrail.com/login">Client login</a>
        </div>
      </div>
      <div className="marketing-shell footer-bottom">
        <span>© {new Date().getFullYear()} Auctrail. All rights reserved.</span>
        <span>Asset Disposition Management</span>
      </div>
    </footer>
  );
}

export default function PlansPage() {
  const pricingJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Auctrail",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Managed asset disposition software for government property intake, approvals, auctions, disposal, documentation, and reporting.",
    audience: {
      "@type": "Audience",
      audienceType: "Government agencies and municipalities",
    },
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: `Auctrail ${plan.name}`,
      url: "https://auctrail.com/plans",
      price: plan.price,
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: plan.price,
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    })),
  };

  return (
    <main className={`marketing-site ${styles.plansSite}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <SiteHeader />

      <section className={styles.hero}>
        <div className={`marketing-shell ${styles.heroInner}`}>
          <p className="section-kicker">Regular Auctrail plans</p>
          <h1>Choose the capacity and support level that fits your agency.</h1>
          <p className={styles.heroLead}>
            Every plan includes the complete intake-to-closeout platform. The price changes with
            team size, department scale, onboarding, data-import assistance, and support.
          </p>
          <div className={styles.heroActions}>
            <a className="button button-primary" href="#plans">
              Compare plans <ArrowIcon />
            </a>
            <Link className="button button-secondary" href="/support">
              Discuss your agency <ArrowIcon />
            </Link>
          </div>
          <div className={styles.assurances} aria-label="Included with every plan">
            <span><CheckIcon /> Full workflow in every plan</span>
            <span><CheckIcon /> Unlimited cases and assets</span>
            <span><CheckIcon /> Hosted, updated, and supported</span>
          </div>
        </div>
      </section>

      <section className={styles.pricingSection} id="plans">
        <div className="marketing-shell">
          <div className={styles.sectionHeading}>
            <div>
              <p className="section-kicker">Monthly plan pricing</p>
              <h2>Three regular plans, with clear operating differences.</h2>
            </div>
            <p>
              Core records and disposition capabilities are never removed from a lower plan.
              Agencies select a plan based on staff access and the service required for rollout.
            </p>
          </div>

          <div className={styles.planGrid}>
            {plans.map((plan) => (
              <article
                className={`${styles.planCard} ${plan.featured ? styles.featuredPlan : ""}`}
                key={plan.name}
              >
                <div className={styles.planTopline}>
                  <span>{plan.label}</span>
                  {plan.featured ? <strong>Recommended</strong> : null}
                </div>
                <h2>{plan.name}</h2>
                <p className={styles.planDescription}>{plan.description}</p>
                <div className={styles.priceLine}>
                  <strong>${plan.price}</strong>
                  <span>per month</span>
                </div>
                <p className={styles.annualPrice}>${plan.annual} annual total</p>
                <div className={styles.planDivider} />
                <strong className={styles.capacityLabel}>Plan capacity and service</strong>
                <ul className={styles.planList}>
                  {plan.capacity.map((item) => (
                    <li key={item}><CheckIcon /> {item}</li>
                  ))}
                </ul>
                <Link
                  className={`button ${plan.featured ? "button-primary" : "button-secondary"} button-full`}
                  href="/support"
                >
                  Request {plan.name} information <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>

          <p className={styles.pricingNote}>
            Prices are for the Auctrail subscription. Auction marketplace charges, if any, are
            separate and remain subject to the marketplace provider's terms.
          </p>
        </div>
      </section>

      <section className={styles.comparisonSection}>
        <div className="marketing-shell">
          <div className={styles.comparisonHeading}>
            <p className="section-kicker light">Plan comparison</p>
            <h2>See exactly what changes as an agency moves up.</h2>
            <p>
              All three plans preserve the same government asset-disposition record. Higher plans
              add operating capacity and more hands-on implementation and support.
            </p>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th scope="col">Plan detail</th>
                  <th scope="col">Essential<br /><span>$99/month</span></th>
                  <th scope="col">Professional<br /><span>$199/month</span></th>
                  <th scope="col">Enterprise<br /><span>$399/month</span></th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([detail, essential, professional, enterprise]) => (
                  <tr key={detail}>
                    <th scope="row">{detail}</th>
                    <td>{essential}</td>
                    <td>{professional}</td>
                    <td>{enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={styles.includedSection} id="included">
        <div className="marketing-shell">
          <div className={styles.centeredHeading}>
            <p className="section-kicker">Included in Essential, Professional, and Enterprise</p>
            <h2>The complete operational record remains intact at every price.</h2>
            <p>
              Auctrail does not remove the core intake, documentation, auction, disposition, and
              reporting workflow from smaller agencies.
            </p>
          </div>

          <div className={styles.capabilityGrid}>
            {coreCapabilities.map((capability) => (
              <article key={capability.number}>
                <span>{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.govDealsNote}>
            <CheckIcon />
            <div>
              <strong>GovDeals bulk-upload prerequisite</strong>
              <p>
                GovDeals Bulk Asset Upload must be enabled on the agency's authorized GovDeals
                account before an Auctrail GovDeals-compatible export can be used for bulk upload.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valueSection}>
        <div className="marketing-shell">
          <div className={styles.centeredHeading}>
            <p className="section-kicker">What every subscription protects</p>
            <h2>A permanent agency record—not just an auction listing.</h2>
            <p>
              Auctrail remains useful before, during, and after a sale because the agency keeps
              the complete operational and disposition history independent of any marketplace.
            </p>
          </div>
          <div className={styles.valueGrid}>
            <article><span>01</span><h3>Independent system of record</h3><p>Keep agency history organized even when marketplace vendors or disposition methods change.</p></article>
            <article><span>02</span><h3>Marketplace choice</h3><p>Prepare supported exports without making the agency's permanent records dependent on one marketplace.</p></article>
            <article><span>03</span><h3>Predictable operating cost</h3><p>Select a published plan based on agency scale rather than paying separate charges for each core workflow.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="marketing-shell">
          <div className={styles.faqHeading}>
            <p className="section-kicker">Plan questions</p>
            <h2>What agencies need to know before selecting a plan.</h2>
          </div>
          <div className={styles.faqGrid}>
            {frequentlyAskedQuestions.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="marketing-shell final-cta-inner">
          <div>
            <p className="section-kicker light">A plan matched to agency scale</p>
            <h2>Review Auctrail against your current surplus process.</h2>
            <p>Start with your active users, departments, data, and onboarding requirements.</p>
          </div>
          <div className="final-cta-actions">
            <Link className="button button-light" href="/support">
              Request plan information <ArrowIcon />
            </Link>
            <a className="button button-dark-outline" href="https://app.auctrail.com/login">
              Client login
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
