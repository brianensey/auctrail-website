import type { Metadata } from "next";
import Link from "next/link";
import styles from "../service-pages.module.css";
import MarketingHeader from "../marketing-header";
import RealAppShot from "../real-app-shot";

export const metadata: Metadata = {
  title: "Organization Setup",
  description: "Auctrail onboarding for public agencies, businesses, nonprofits, and other organizations, including departments or teams, users, roles, surplus-sale data import, labels, reporting, and workflow configuration.",
  alternates: { canonical: "https://auctrail.com/organization-setup" },
};

const setupSteps = [
  ["01", "Organization structure", "Identify the organization, departments, teams or divisions, and the people responsible for surplus-sale work."],
  ["02", "Users and roles", "Establish the initial users and assign access based on each person’s operational responsibilities."],
  ["03", "Current sales workflow", "Review how surplus property is received, approved for sale, prepared, listed, sold, picked up, documented, and closed today."],
  ["04", "Existing sale data", "Determine what active surplus-sale records should be entered or imported and whether completed sale history needs to be retained in Auctrail."],
  ["05", "Labels and field use", "Plan label printing, QR access, browser use, and the practical process staff will follow around property awaiting sale."],
  ["06", "Launch and adoption", "Confirm the initial configuration, onboarding needs, and a controlled operational rollout for the organization."],
];

function Arrow() { return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg>; }
function Footer() { return <footer className="marketing-footer"><div className="marketing-shell footer-bottom"><span>© {new Date().getFullYear()} Auctrail. All rights reserved.</span><span><Link href="/faq">FAQ</Link> · <Link href="/support">Support center</Link></span></div></footer>; }

export default function OrganizationSetupPage() {
  return <main className={`marketing-site ${styles.site}`}><MarketingHeader />
    <section className={styles.hero}><div className={`marketing-shell ${styles.heroInner}`}><p className="section-kicker">Auctrail onboarding</p><h1>Set up Auctrail around the way your organization handles surplus sales.</h1><p>Auctrail setup establishes departments or teams, users, roles, existing sale data, labels, reporting needs, and the organization’s surplus-intake-to-sale-closeout process before routine use begins.</p><div className={styles.actions}><Link className="button button-primary" href="/plans">Pricing status <Arrow /></Link><Link className="button button-secondary" href="/demo">Talk to Auctrail <Arrow /></Link></div><RealAppShot src="/screenshots/administration.svg" alt="Current Auctrail Administration screen" caption="Current Administration area for organization configuration" /></div></section>
    <section className={styles.section}><div className="marketing-shell"><div className={styles.heading}><div><p className="section-kicker">Setup process</p><h2>A controlled path from initial configuration to operational use.</h2></div><p>The goal is not to force an organization into a generic process. Setup maps Auctrail’s structure to the people, teams, records, and surplus-sales practices the organization already has.</p></div><div className={styles.grid}>{setupSteps.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
    <section className={styles.dark}><div className={`marketing-shell ${styles.twoColumn}`}><div><p className="section-kicker light">What to have ready</p><h2>A few decisions make setup substantially faster.</h2><p>Organizations do not need perfect data before beginning. A clear picture of the current surplus-sales process is more useful than trying to redesign everything before Auctrail is configured.</p></div><div className={styles.checkPanel}><strong>Recommended setup information</strong><ul><li>Organization, department, team, or location names</li><li>Initial user list and responsibilities</li><li>Current surplus-sale forms or spreadsheets</li><li>Typical approval-for-sale process</li><li>Auction or sales channels currently used</li><li>Examples of surplus labels or identifiers</li><li>Reporting and export requirements</li><li>GovDeals account status, if applicable</li></ul></div></div></section>
    <section className={styles.section}><div className="marketing-shell"><div className={styles.heading}><div><p className="section-kicker">Development status</p><h2>Onboarding details are being finalized with the product.</h2></div><p>Auctrail is still in active development. The operational setup model is defined, but final commercial packaging, onboarding levels, and launch pricing are not being presented as final yet.</p></div><div className={styles.planPair}><article><span>Current priority</span><h3>Web platform and launch readiness</h3><p>The customer-facing web application, public website, documentation, support workflow, and launch materials are the current development focus.</p></article><article><span>Questions</span><h3>Discuss your organization</h3><p>For setup, availability, integration, or pricing questions, contact Auctrail at info@auctrai.com.</p></article></div></div></section>
    <section className={styles.section}><div className={`marketing-shell ${styles.notice}`}><div><p className="section-kicker">GovDeals users</p><h2>Confirm Bulk Asset Upload before planning the export workflow.</h2><p>GovDeals Bulk Asset Upload is account-enabled and may not be active by default. The organization’s authorized GovDeals account must have that capability enabled by GovDeals before using an Auctrail GovDeals-compatible export for bulk upload.</p></div><Link className="button button-primary" href="/technical-support">Technical support <Arrow /></Link></div></section>
    <Footer /></main>;
}
