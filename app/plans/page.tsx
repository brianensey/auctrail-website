import type { Metadata } from "next";
import Link from "next/link";
import MarketingHeader from "../marketing-header";
import RealAppShot from "../real-app-shot";
import styles from "./plans.module.css";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Auctrail pricing is still being finalized while the platform is in active development.",
  alternates: { canonical: "https://auctrail.com/plans" },
};

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg>;
}

function SiteFooter() {
  return <footer className="marketing-footer"><div className="marketing-shell footer-grid"><div className="footer-intro"><img src="/auctrail-logo-approved.jpg" alt="Auctrail" width="425" height="115" /><p>Asset disposition management for organizations that need a clearer way to intake, prepare, sell, document, and close out surplus property.</p></div><div><strong>Platform</strong><Link href="/#platform">Capabilities</Link><Link href="/#workflow">Workflow</Link><Link href="/plans">Pricing</Link></div><div><strong>Resources</strong><Link href="/faq">FAQ</Link><Link href="/support">Support</Link><a href="https://app.auctrail.com/login">Client login</a></div></div><div className="marketing-shell footer-bottom"><span>© {new Date().getFullYear()} Auctrail. All rights reserved.</span><span>Asset Disposition Management</span></div></footer>;
}

export default function PlansPage() {
  return <main className={`marketing-site ${styles.plansSite}`}>
    <MarketingHeader />
    <section className={styles.hero}>
      <div className={`marketing-shell ${styles.heroInner}`}>
        <p className="section-kicker">Pricing</p>
        <h1>Auctrail is still in active development.</h1>
        <p className={styles.heroLead}>We are continuing to develop and refine the platform before publishing final plans and pricing. The website will be updated as features, integrations, onboarding, and commercial terms are finalized.</p>
        <div className={styles.heroActions}>
          <a className="button button-primary" href="mailto:info@auctrai.com">Pricing questions <ArrowIcon /></a>
          <Link className="button button-secondary" href="/#platform">See what Auctrail does <ArrowIcon /></Link>
        </div>
        <RealAppShot src="/screenshots/dashboard.svg" alt="Current Auctrail dashboard" caption="Current Auctrail dashboard while development continues" />
      </div>
    </section>

    <section className={styles.pricingSection}>
      <div className="marketing-shell">
        <div className={styles.sectionHeading}>
          <div>
            <p className="section-kicker">Development status</p>
            <h2>We are building the product first and finalizing pricing as the platform takes shape.</h2>
          </div>
          <p>Auctrail is not presenting the current pricing structure as final. Organizations interested in the platform can contact us directly with questions about expected availability, features, integrations, or future pricing.</p>
        </div>

        <div className={styles.planGrid}>
          <article className={styles.planCard}>
            <div className={styles.planTopline}><span>Current status</span></div>
            <h2>In development</h2>
            <p className={styles.planDescription}>The web platform is being completed and documented now. Native iPad development is paused while we focus on the customer-facing web application, website, documentation, and launch readiness.</p>
          </article>
          <article className={`${styles.planCard} ${styles.featuredPlan}`}>
            <div className={styles.planTopline}><span>Questions</span><strong>Contact us</strong></div>
            <h2>Talk with Auctrail</h2>
            <p className={styles.planDescription}>For pricing, availability, product, integration, or early-access questions, email us directly.</p>
            <a className="button button-primary button-full" href="mailto:info@auctrai.com">info@auctrai.com <ArrowIcon /></a>
          </article>
        </div>
      </div>
    </section>

    <section className="final-cta">
      <div className="marketing-shell final-cta-inner">
        <div><p className="section-kicker light">Follow development</p><h2>See the platform we are building.</h2><p>Review Auctrail’s current workflow and capabilities while we continue toward release.</p></div>
        <div className="final-cta-actions"><Link className="button button-light" href="/#platform">Explore Auctrail <ArrowIcon /></Link></div>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
