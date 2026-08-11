import Link from "next/link";

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

export default function SupportPage() {
  return (
    <main className="support-site">
      <header className="marketing-header">
        <div className="marketing-shell header-inner">
          <Link className="header-logo" href="/" aria-label="Auctrail home">
            <img src="/auctrail-logo-approved.jpg" alt="Auctrail — Asset Disposition Management" width="425" height="115" />
          </Link>
          <div className="header-actions support-header-actions" style={{ marginLeft: "auto", display: "flex" }}>
            <a className="button button-primary button-compact" href="https://app.auctrail.com/login">Client login</a>
          </div>
        </div>
      </header>

      <section className="support-main">
        <div className="marketing-shell">
          <div className="support-intro">
            <p className="section-kicker">Support and access</p>
            <h1>Start with the type of help you need.</h1>
            <p>
              Access the Auctrail application, review onboarding information, or find the correct
              path for platform support and agency setup.
            </p>
          </div>

          <div className="support-card-grid">
            <article className="support-card-new">
              <span>01</span>
              <h2>Client access</h2>
              <p>Sign in to your agency workspace to manage cases, assets, departments, reports, and disposition records.</p>
              <a className="button button-primary" href="https://app.auctrail.com/login">Open client login <ArrowIcon /></a>
            </article>

            <article className="support-card-new">
              <span>02</span>
              <h2>Technical support</h2>
              <p>Use your approved Auctrail support channel for application issues, account access, and hosted-environment assistance.</p>
              <span className="button button-secondary" aria-disabled="true">Support contact pending</span>
            </article>

            <article className="support-card-new">
              <span>03</span>
              <h2>Agency setup</h2>
              <p>Discuss onboarding, departments, user roles, data import, label workflows, reporting, and the agency's current surplus process.</p>
              <span className="button button-secondary" aria-disabled="true">Contact details pending</span>
            </article>
          </div>

          <div className="support-note">
            <CheckIcon />
            <div>
              <strong>GovDeals bulk-upload prerequisite</strong><br />
              GovDeals Bulk Asset Upload is an account-enabled feature and may not be active by default.
              The agency's authorized GovDeals account must have that capability enabled by GovDeals before
              using an Auctrail GovDeals-compatible export.
            </div>
          </div>
        </div>
      </section>

      <footer className="marketing-footer">
        <div className="marketing-shell footer-bottom">
          <span>© {new Date().getFullYear()} Auctrail. All rights reserved.</span>
          <Link href="/">Return to Auctrail.com</Link>
        </div>
      </footer>
    </main>
  );
}
