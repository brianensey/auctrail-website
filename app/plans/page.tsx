import type { Metadata } from "next";
import Link from "next/link";
import styles from "./plans.module.css";

export const metadata: Metadata = {
  title: "Plans and Pricing",
  description:
    "Auctrail provides one complete, managed asset disposition platform for government agencies for $199 per month or $2,388 per year.",
  keywords: [
    "Auctrail pricing",
    "government surplus software pricing",
    "municipal asset disposition software",
    "public agency surplus management",
  ],
  alternates: {
    canonical: "https://auctrail.com/plans",
  },
  openGraph: {
    title: "Auctrail Plans and Pricing",
    description:
      "One complete asset disposition platform for government agencies, hosted and managed for $199 per month.",
    url: "https://auctrail.com/plans",
    siteName: "Auctrail",
    type: "website",
  },
};

const includedGroups = [
  {
    number: "01",
    title: "Cases and assets",
    description: "Keep the full operational record together from receipt through closeout.",
    items: [
      "Property intake and case creation",
      "Asset details, identifiers, condition, and custody",
      "Departments, assignments, dates, and status tracking",
      "Sold, transferred, recycled, destroyed, and other disposition outcomes",
    ],
  },
  {
    number: "02",
    title: "Documents and accountability",
    description: "Preserve the proof and history administrators need without splitting the record.",
    items: [
      "Photos and supporting documents",
      "Approvals, titles, receipts, and disposal proof",
      "Role-based permissions and responsibility tracking",
      "Audit history and searchable completed records",
    ],
  },
  {
    number: "03",
    title: "Auction and field workflows",
    description: "Prepare property for sale or disposal using information already stored in Auctrail.",
    items: [
      "Auction preparation and disposition workflow",
      "GovDeals-compatible bulk-upload export",
      "Printable asset and case labels",
      "QR-based access to the related case record",
    ],
  },
  {
    number: "04",
    title: "Administration and managed service",
    description: "The subscription includes the hosted platform and the assistance required to operate it.",
    items: [
      "Search, reports, Excel, and CSV exports",
      "Agency, department, role, and user configuration",
      "Onboarding, data-import assistance, and training materials",
      "Hosting, platform updates, documentation, and ongoing support",
    ],
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Is Auctrail priced by feature tier?",
    answer:
      "No. Auctrail uses one standard subscription that includes the complete operational platform listed on this page. Agencies do not have to choose between stripped-down feature bundles.",
  },
  {
    question: "Does Auctrail replace an auction marketplace?",
    answer:
      "No. Auctrail is the agency's independent system of record for intake, approvals, preparation, disposition, and closeout. The agency can retain its marketplace choice and use supported exports when available.",
  },
  {
    question: "Are marketplace fees included in the subscription?",
    answer:
      "No. Any seller, buyer, listing, or transaction fees charged by an auction marketplace remain separate from the Auctrail subscription and are governed by that provider.",
  },
  {
    question: "Is hosting included?",
    answer:
      "Yes. The standard plan includes the secure hosted Auctrail application, ongoing platform updates, documentation, and support.",
  },
  {
    question: "Can every GovDeals account use the bulk-upload export immediately?",
    answer:
      "Not necessarily. GovDeals Bulk Asset Upload is an account-enabled capability. The agency's authorized GovDeals account must have it enabled by GovDeals before using an Auctrail GovDeals-compatible export.",
  },
  {
    question: "What happens during agency setup?",
    answer:
      "Auctrail can assist with agency and department configuration, roles, users, current workflows, data import, label processes, reporting, documentation, and onboarding materials.",
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
    offers: {
      "@type": "Offer",
      url: "https://auctrail.com/plans",
      price: "199",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "199",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    },
  };

  return (
    <main className={`marketing-site ${styles.plansSite}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <SiteHeader />

      <section className={styles.hero}>
        <div className={`marketing-shell ${styles.heroLayout}`}>
          <div className={styles.heroCopy}>
            <p className="section-kicker">Straightforward agency pricing</p>
            <h1>The complete Auctrail platform. One predictable subscription.</h1>
            <p className={styles.heroLead}>
              Auctrail keeps intake, approvals, auctions, disposal, documentation, and reporting
              in one managed system without dividing essential workflows across separate tiers.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button-primary" href="/support">
                Request plan information <ArrowIcon />
              </Link>
              <a className="button button-secondary" href="#included">
                Review everything included <ArrowIcon />
              </a>
            </div>
            <div className={styles.assurances} aria-label="Subscription assurances">
              <span><CheckIcon /> Hosted and managed</span>
              <span><CheckIcon /> Onboarding assistance</span>
              <span><CheckIcon /> Updates and support included</span>
            </div>
          </div>

          <aside className={styles.priceCard} aria-label="Auctrail Standard pricing">
            <span className={styles.planLabel}>Standard plan</span>
            <h2>Auctrail Standard</h2>
            <p className={styles.planSummary}>
              The full asset disposition platform for municipalities and public agencies.
            </p>
            <div className={styles.priceLine}>
              <strong>$199</strong>
              <span>per month</span>
            </div>
            <p className={styles.annualPrice}>or $2,388 billed annually</p>
            <div className={styles.priceDivider} />
            <ul className={styles.priceHighlights}>
              <li><CheckIcon /> Complete intake-to-closeout workflow</li>
              <li><CheckIcon /> Hosted agency workspace</li>
              <li><CheckIcon /> Configuration, onboarding, and support</li>
              <li><CheckIcon /> Ongoing platform updates</li>
            </ul>
            <Link className="button button-primary button-full" href="/support">
              Discuss your agency <ArrowIcon />
            </Link>
            <p className={styles.marketplaceNote}>
              Auction marketplace charges, if any, are separate and are billed under the
              marketplace provider's terms.
            </p>
          </aside>
        </div>
      </section>

      <section className={styles.includedSection} id="included">
        <div className="marketing-shell">
          <div className={styles.sectionHeading}>
            <div>
              <p className="section-kicker">Included with Auctrail Standard</p>
              <h2>Everything needed to manage the complete disposition record.</h2>
            </div>
            <p>
              The standard subscription combines the operational platform, hosted service,
              agency setup, and ongoing support in one price.
            </p>
          </div>

          <div className={styles.includedGrid}>
            {includedGroups.map((group) => (
              <article className={styles.includedCard} key={group.number}>
                <div className={styles.cardHeading}>
                  <span>{group.number}</span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>
                <ul className={styles.featureList}>
                  {group.items.map((item) => (
                    <li key={item}><CheckIcon /> {item}</li>
                  ))}
                </ul>
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

      <section className={styles.foundingSection}>
        <div className={`marketing-shell ${styles.foundingLayout}`}>
          <div className={styles.foundingCopy}>
            <p className="section-kicker light">Limited launch program</p>
            <h2>Founding-municipality pricing for selected early partners.</h2>
            <p>
              Auctrail's founding program provides a structured introductory rate before the
              municipality moves to the standard subscription.
            </p>
            <Link className="button button-light" href="/support">
              Ask about availability <ArrowIcon />
            </Link>
          </div>

          <div className={styles.foundingTimeline} aria-label="Founding municipality pricing schedule">
            <article>
              <span>Years 1–2</span>
              <strong>$0</strong>
              <small>per month</small>
            </article>
            <article>
              <span>Years 3–7</span>
              <strong>$99.50</strong>
              <small>per month</small>
            </article>
            <article>
              <span>Year 8 onward</span>
              <strong>$199</strong>
              <small>per month</small>
            </article>
            <div className={styles.foundingTotal}>
              <span>First seven years</span>
              <strong>$5,970 total subscription cost</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valueSection}>
        <div className="marketing-shell">
          <div className={styles.centeredHeading}>
            <p className="section-kicker">What the subscription protects</p>
            <h2>A permanent agency record—not just an auction listing.</h2>
            <p>
              Auctrail remains useful before, during, and after a sale because the agency keeps
              the complete operational and disposition history independent of any marketplace.
            </p>
          </div>
          <div className={styles.valueGrid}>
            <article><span>01</span><h3>Independent system of record</h3><p>Keep agency history organized even when marketplace vendors or disposition methods change.</p></article>
            <article><span>02</span><h3>Marketplace choice</h3><p>Prepare supported exports without making the agency's permanent records dependent on one marketplace.</p></article>
            <article><span>03</span><h3>Predictable operating cost</h3><p>Budget around one published subscription instead of assembling the core workflow from multiple feature tiers.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="marketing-shell">
          <div className={styles.faqHeading}>
            <p className="section-kicker">Plan questions</p>
            <h2>What agencies usually need to know before setup.</h2>
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
            <p className="section-kicker light">A complete managed platform</p>
            <h2>Review the plan against your agency's current process.</h2>
            <p>Start with the workflow you use today and identify where Auctrail can remove duplicate work.</p>
          </div>
          <div className="final-cta-actions">
            <Link className="button button-light" href="/support">
              Request information <ArrowIcon />
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
