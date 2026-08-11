import Link from "next/link";

export default function SupportPage() {
  return (
    <main>
      <header className="site-header">
        <div className="shell nav-wrap">
          <Link className="brand" href="/">
            <span className="brand-mark">A</span>
            <span>Auctrail</span>
          </Link>
          <nav aria-label="Support navigation">
            <Link href="/">Home</Link>
            <a className="button button-small button-ghost" href="https://app.auctrail.com/login">Client Login</a>
          </nav>
        </div>
      </header>

      <section className="support-hero">
        <div className="shell">
          <p className="eyebrow">Support and documentation</p>
          <h1>Help for Auctrail users.</h1>
          <p className="hero-copy">Access the client application or get information about Auctrail account setup, onboarding, and platform support.</p>
          <div className="support-grid">
            <article className="support-card">
              <h3>Client access</h3>
              <p>Sign in to your agency workspace to manage cases, reports, users, departments, and asset disposition records.</p>
              <a className="button" href="https://app.auctrail.com/login">Open Client Login</a>
            </article>
            <article className="support-card">
              <h3>Technical support</h3>
              <p>Auctrail support contact information will be published here before customer launch.</p>
            </article>
            <article className="support-card">
              <h3>Sales and setup</h3>
              <p>Sales and onboarding contact information will be published here before customer launch.</p>
            </article>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div><div className="brand footer-brand"><span className="brand-mark">A</span><span>Auctrail</span></div><p>Asset disposition management and hosted government solutions.</p></div>
          <div><strong>Website</strong><Link href="/">Home</Link></div>
          <div><strong>Application</strong><a href="https://app.auctrail.com/login">Client Login</a></div>
        </div>
        <div className="shell copyright">© {new Date().getFullYear()} Auctrail. All rights reserved.</div>
      </footer>
    </main>
  );
}
