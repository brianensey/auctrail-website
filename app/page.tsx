import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Surplus intake",
    description:
      "Start each surplus-sale record with the agency, department, item, condition, custody, and sale-preparation details in one place.",
  },
  {
    number: "02",
    title: "Sale-ready records",
    description:
      "Keep surplus items, notes, assignments, dates, identifiers, and status changes connected to the same sale record.",
  },
  {
    number: "03",
    title: "Photos and documents",
    description:
      "Attach photographs, approvals, titles, receipts, sale documents, and supporting files directly to the surplus record.",
  },
  {
    number: "04",
    title: "Approvals and accountability",
    description:
      "Make ownership and next actions visible so staff can see what is waiting, who is responsible, and what comes next before sale.",
  },
  {
    number: "05",
    title: "Auction preparation",
    description:
      "Prepare surplus property for auction or another approved sales channel without rebuilding the same information in multiple systems.",
  },
  {
    number: "06",
    title: "Sale closeout and history",
    description:
      "Record results, payment, pickup, buyer information, and supporting documentation while preserving a searchable completed-sale history.",
  },
];

const workflow = [
  ["01", "Receive", "Create the surplus-sale record, identify the property, and capture the original supporting information."],
  ["02", "Review", "Route the record through the agency's review and approval process for sale."],
  ["03", "Prepare", "Organize photos, descriptions, documents, labels, pricing, and auction or listing details."],
  ["04", "Sell", "Publish or export the sale information through the agency's approved sales channel and track the result."],
  ["05", "Close out", "Preserve payment, pickup, buyer details, proof, notes, and the completed sale record."],
];

const integrations = [
  {
    title: "GovDeals-compatible export",
    description:
      "Prepare bulk-upload files for GovDeals when Bulk Asset Upload has been enabled on the agency's authorized GovDeals account.",
  },
  {
    title: "Labels and QR access",
    description:
      "Support practical field workflows with printable surplus-item labels and QR-based access to the related sale record.",
  },
  {
    title: "Excel and CSV reporting",
    description:
      "Export clean surplus-sale data for administration, finance, reconciliation, and records-management needs.",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="m4 10 4 4 8-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function SiteHeader() {
  return (
    <header className="marketing-header">
      <div className="marketing-shell header-inner">
        <Link className="header-logo" href="/" aria-label="Auctrail home">
          <img src="/auctrail-logo-approved.jpg" alt="Auctrail — Government Surplus Sales Software" width="425" height="115" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#platform">Platform</a>
          <a href="#workflow">Workflow</a>
          <Link href="/plans">Plans</Link>
          <a href="#integrations">Integrations</a>
          <Link href="/faq">FAQ</Link>
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
            <a href="#platform">Platform</a>
            <a href="#workflow">Workflow</a>
            <Link href="/plans">Plans</Link>
            <a href="#integrations">Integrations</a>
            <Link href="/faq">FAQ</Link>
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
            Government surplus sales software for preparing property for auction, tracking sale activity,
            documenting payment and pickup, and preserving completed sale history.
          </p>
        </div>
        <div>
          <strong>Platform</strong>
          <a href="#platform">Capabilities</a>
          <a href="#workflow">Workflow</a>
          <Link href="/plans">Plans</Link>
          <a href="#integrations">Integrations</a>
        </div>
        <div>
          <strong>Resources</strong>
          <Link href="/faq">Frequently Asked Questions</Link>
          <Link href="/support">Support</Link>
          <a href="https://app.auctrail.com/login">Client login</a>
        </div>
      </div>
      <div className="marketing-shell footer-bottom">
        <span>© {new Date().getFullYear()} Auctrail. All rights reserved.</span>
        <span>Government Surplus Sales Software</span>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main className="marketing-site">
      <SiteHeader />

      <section className="hero-section">
        <div className="marketing-shell hero-layout">
          <div className="hero-content">
            <p className="section-kicker">Government surplus sales software</p>
            <h1>One clear system from surplus intake to completed sale.</h1>
            <p className="hero-lead">
              Auctrail gives government teams a consistent way to prepare surplus property for sale,
              organize auction information, track results, document payment and pickup, and preserve the complete sale history.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/support">
                Request information <ArrowIcon />
              </Link>
              <a className="button button-secondary" href="#workflow">
                See how it works <ArrowIcon />
              </a>
            </div>
            <div className="hero-assurances" aria-label="Platform benefits">
              <span><CheckIcon /> Built for government surplus sales</span>
              <span><CheckIcon /> Hosted and managed</span>
              <span><CheckIcon /> Complete sale history</span>
            </div>
          </div>

          <div className="product-preview" aria-label="Example Auctrail surplus sale workflow">
            <div className="preview-topbar">
              <div>
                <span className="preview-brand-mark">A</span>
                <strong>Auctrail Operations</strong>
              </div>
              <span className="preview-status"><i /> Active sale record</span>
            </div>

            <div className="preview-heading">
              <div>
                <small>CASE 2026-0148</small>
                <h2>Public Works vehicle</h2>
                <p>City of Example · Public Works</p>
              </div>
              <span className="status-pill">Auction preparation</span>
            </div>

            <div className="preview-facts">
              <article><small>Surplus type</small><strong>Fleet vehicle</strong></article>
              <article><small>Assigned to</small><strong>Administration</strong></article>
              <article><small>Documents</small><strong>8 attached</strong></article>
            </div>

            <div className="preview-progress">
              <div className="progress-line" />
              {[
                ["Received", "Complete"],
                ["Reviewed", "Complete"],
                ["Prepared", "Current"],
                ["Sold", "Pending"],
                ["Closed", "Pending"],
              ].map(([title, state], index) => (
                <article className={state === "Current" ? "current" : state === "Complete" ? "complete" : ""} key={title}>
                  <span>{index + 1}</span>
                  <strong>{title}</strong>
                  <small>{state}</small>
                </article>
              ))}
            </div>

            <div className="preview-note">
              <span><CheckIcon /></span>
              <div>
                <strong>Next action</strong>
                <p>Verify auction details and supporting photographs before publication.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefit-bar" aria-label="Core Auctrail benefits">
        <div className="marketing-shell benefit-grid">
          <article><span>01</span><div><strong>Centralized sale records</strong><p>Stop splitting the same surplus sale across spreadsheets, email, paper, and shared drives.</p></div></article>
          <article><span>02</span><div><strong>Clear accountability</strong><p>Give staff and administrators a shared view of sale status, responsibility, and next actions.</p></div></article>
          <article><span>03</span><div><strong>Complete sale history</strong><p>Preserve the documents, payment, pickup, dates, and notes behind every completed surplus sale.</p></div></article>
        </div>
      </section>

      <section className="content-section" id="platform">
        <div className="marketing-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">The platform</p>
              <h2>Everything connected to the same surplus-sale record.</h2>
            </div>
            <p>
              Auctrail is designed specifically for government surplus property being prepared for sale,
              listed, sold, picked up, and closed out—not for managing an agency's general asset inventory.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <span className="feature-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="marketing-shell">
          <div className="section-heading workflow-heading">
            <div>
              <p className="section-kicker light">A consistent sales workflow</p>
              <h2>Every step stays visible from surplus intake through sale closeout.</h2>
            </div>
            <p>
              The process is easy to understand at a glance while the underlying record keeps
              the detail administrators need for each surplus sale.
            </p>
          </div>

          <ol className="workflow-list">
            {workflow.map(([number, title, description]) => (
              <li key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="content-section operations-section" id="operations">
        <div className="marketing-shell operations-layout">
          <div className="operations-copy">
            <p className="section-kicker">Built for actual surplus-sale operations</p>
            <h2>Software that supports the sale process instead of adding another process.</h2>
            <p>
              Auctrail keeps routine surplus-sale work straightforward for the people entering records while
              giving administrators the structure, visibility, and documentation they need.
            </p>
            <ul className="check-list">
              <li><CheckIcon /> Organization, department, and role-based sales workflows</li>
              <li><CheckIcon /> Consistent surplus records without forcing every sale to be identical</li>
              <li><CheckIcon /> Clear current status and next-action visibility</li>
              <li><CheckIcon /> Searchable sale history after the property is picked up</li>
            </ul>
          </div>

          <aside className="service-card">
            <p className="section-kicker">Managed service</p>
            <h3>Application, hosting, updates, and support together.</h3>
            <div className="service-list">
              <span>Secure hosted Auctrail application</span>
              <span>Agency and department configuration</span>
              <span>User setup and onboarding assistance</span>
              <span>Data import assistance</span>
              <span>Documentation and training materials</span>
              <span>Ongoing updates and platform support</span>
            </div>
            <Link className="button button-primary button-full" href="/plans">
              View plans and pricing <ArrowIcon />
            </Link>
          </aside>
        </div>
      </section>

      <section className="integration-section" id="integrations">
        <div className="marketing-shell">
          <div className="section-heading centered-heading">
            <p className="section-kicker">Practical outputs and integrations</p>
            <h2>Move surplus property toward sale without rebuilding the same information.</h2>
            <p>
              Auctrail is designed to reduce duplicate entry and make the sale information already in
              the record useful outside the platform.
            </p>
          </div>

          <div className="integration-grid">
            {integrations.map((integration, index) => (
              <article key={integration.title}>
                <span>0{index + 1}</span>
                <h3>{integration.title}</h3>
                <p>{integration.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="marketing-shell final-cta-inner">
          <div>
            <p className="section-kicker light">A clearer surplus sales process</p>
            <h2>See whether Auctrail fits your agency's surplus-sale workflow.</h2>
            <p>Start with the process you use today and identify where Auctrail can remove duplicate work.</p>
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
