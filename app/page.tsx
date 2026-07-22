import Link from "next/link";

const features = [
  ["Centralized intake", "Import or enter surplus cases, assign departments, and keep each asset record organized from the first step."],
  ["Complete documentation", "Store photos, notes, approvals, disposition history, and supporting records in one auditable workflow."],
  ["Auction readiness", "Prepare clean listings, track sale status, and preserve the information agencies need before and after auction."],
  ["Operational reporting", "Give administrators a clear view of open cases, disposed assets, department activity, and process status."],
  ["Role-based access", "Provide the right level of access for surplus staff, departments, administrators, and approved users."],
  ["Managed hosting", "CivicSurplus can be delivered as a hosted service with maintenance, updates, support, and client-specific add-ons."],
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="shell nav-wrap">
          <Link className="brand" href="/" aria-label="CivicSurplus home">
            <span className="brand-mark">CS</span>
            <span>CivicSurplus</span>
          </Link>
          <nav aria-label="Primary navigation">
            <a href="#platform">Platform</a>
            <a href="#hosting">Hosting</a>
            <Link href="/support">Support</Link>
            <a className="button button-small button-ghost" href="https://app.civicsurplus.com/login">Client Login</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <p className="eyebrow">Municipal surplus, managed properly</p>
            <h1>One platform for the full surplus property workflow.</h1>
            <p className="hero-copy">
              CivicSurplus helps public agencies organize intake, approvals, documentation, disposal, auctions, and reporting without relying on scattered spreadsheets and email chains.
            </p>
            <div className="hero-actions">
              <a className="button" href="mailto:sales@civicsurplus.com?subject=CivicSurplus%20Demo%20Request">Request a Demo</a>
              <a className="button button-secondary" href="#platform">Explore the Platform</a>
            </div>
            <div className="trust-row">
              <span>Built for public-sector operations</span>
              <span>Managed hosting available</span>
              <span>Expandable by agency</span>
            </div>
          </div>

          <div className="product-card" aria-label="CivicSurplus product preview">
            <div className="product-topbar">
              <span className="mini-brand">CivicSurplus</span>
              <span className="status-dot">Live workspace</span>
            </div>
            <div className="metric-grid">
              <article><small>Open cases</small><strong>48</strong><span>Across 7 departments</span></article>
              <article><small>Ready for review</small><strong>12</strong><span>Awaiting approval</span></article>
              <article><small>Disposed this month</small><strong>31</strong><span>Records complete</span></article>
            </div>
            <div className="workflow-card">
              <div><span>Asset 610302</span><strong>2005 GMC C5500</strong></div>
              <div className="workflow-steps">
                <span className="done">Received</span>
                <span className="done">Documented</span>
                <span className="active">Auction</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="platform">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">The platform</p>
            <h2>Designed around the work agencies already do.</h2>
            <p>CivicSurplus provides structure without forcing staff into an overly complicated enterprise system.</p>
          </div>
          <div className="feature-grid">
            {features.map(([title, copy], index) => (
              <article className="feature-card" key={title}>
                <span className="feature-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="hosting">
        <div className="shell hosting-grid">
          <div>
            <p className="eyebrow eyebrow-light">Managed service</p>
            <h2>Software, hosting, updates, and support in one package.</h2>
            <p>
              Agencies do not need to build internal infrastructure or manage deployments. CivicSurplus can be provided as a complete hosted service with secure access, ongoing updates, technical support, and optional agency-specific enhancements.
            </p>
          </div>
          <div className="package-card">
            <p className="package-label">CivicSurplus Managed</p>
            <h3>Full hosting package</h3>
            <ul>
              <li>Hosted CivicSurplus workspace</li>
              <li>Agency setup and branding</li>
              <li>User and department configuration</li>
              <li>Maintenance and software updates</li>
              <li>Documentation and support</li>
              <li>Optional add-ons as needs grow</li>
            </ul>
            <a className="button button-full" href="mailto:sales@civicsurplus.com?subject=CivicSurplus%20Managed%20Hosting">Discuss Your Agency</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell workflow-grid">
          <div className="section-heading left">
            <p className="eyebrow">A clearer process</p>
            <h2>From department request to final disposition.</h2>
            <p>Each stage stays visible, documented, and connected to the same case record.</p>
          </div>
          <ol className="process-list">
            <li><span>01</span><div><strong>Receive</strong><p>Import or create the surplus case and identify the asset.</p></div></li>
            <li><span>02</span><div><strong>Document</strong><p>Add photos, notes, condition details, ownership records, and approvals.</p></div></li>
            <li><span>03</span><div><strong>Dispose</strong><p>Prepare auction, transfer, recycle, or other authorized disposition.</p></div></li>
            <li><span>04</span><div><strong>Report</strong><p>Close the record while preserving the full history for future review.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="cta">
        <div className="shell cta-inner">
          <div>
            <p className="eyebrow eyebrow-light">Move beyond spreadsheets</p>
            <h2>Give your surplus operation a system built for the job.</h2>
          </div>
          <a className="button button-light" href="mailto:sales@civicsurplus.com?subject=CivicSurplus%20Information">Contact CivicSurplus</a>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div><div className="brand footer-brand"><span className="brand-mark">CS</span><span>CivicSurplus</span></div><p>Municipal surplus management and hosted agency solutions.</p></div>
          <div><strong>Product</strong><a href="#platform">Platform</a><a href="#hosting">Managed Hosting</a><Link href="/support">Support</Link></div>
          <div><strong>Access</strong><a href="https://app.civicsurplus.com/login">Client Login</a><a href="mailto:sales@civicsurplus.com">Contact Sales</a></div>
        </div>
        <div className="shell copyright">© {new Date().getFullYear()} CivicSurplus. All rights reserved.</div>
      </footer>
    </main>
  );
}
