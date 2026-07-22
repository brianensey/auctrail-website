import Link from "next/link";

export default function SupportPage() {
  return (
    <main>
      <header className="site-header">
        <div className="shell nav-wrap">
          <Link className="brand" href="/">
            <span className="brand-mark">CS</span>
            <span>CivicSurplus</span>
          </Link>
          <nav aria-label="Support navigation">
            <Link href="/">Home</Link>
            <a className="button button-small button-ghost" href="https://app.civicsurplus.com/login">Client Login</a>
          </nav>
        </div>
      </header>

      <section className="support-hero">
        <div className="shell">
          <p className="eyebrow">Support and documentation</p>
          <h1>Help for CivicSurplus users.</h1>
          <p className="hero-copy">Access the client application, request assistance, or contact CivicSurplus about account setup and platform questions.</p>
          <div className="support-grid">
            <article className="support-card">
              <h3>Client access</h3>
              <p>Sign in to your agency workspace to manage cases, reports, users, departments, and surplus records.</p>
              <a className="button" href="https://app.civicsurplus.com/login">Open Client Login</a>
            </article>
            <article className="support-card">
              <h3>Technical support</h3>
              <p>Report an application problem or request help with your hosted CivicSurplus environment.</p>
              <a className="button button-secondary" href="mailto:support@civicsurplus.com?subject=CivicSurplus%20Support%20Request">Email Support</a>
            </article>
            <article className="support-card">
              <h3>Sales and setup</h3>
              <p>Ask about managed hosting, agency onboarding, pricing, customization, or future add-ons.</p>
              <a className="button button-secondary" href="mailto:sales@civicsurplus.com?subject=CivicSurplus%20Agency%20Inquiry">Contact Sales</a>
            </article>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div><div className="brand footer-brand"><span className="brand-mark">CS</span><span>CivicSurplus</span></div><p>Municipal surplus management and hosted agency solutions.</p></div>
          <div><strong>Website</strong><Link href="/">Home</Link><a href="mailto:sales@civicsurplus.com">Contact Sales</a></div>
          <div><strong>Application</strong><a href="https://app.civicsurplus.com/login">Client Login</a><a href="mailto:support@civicsurplus.com">Technical Support</a></div>
        </div>
        <div className="shell copyright">© {new Date().getFullYear()} CivicSurplus. All rights reserved.</div>
      </footer>
    </main>
  );
}
