import type { Metadata } from "next";
import Link from "next/link";
import styles from "../service-pages.module.css";
import MarketingHeader from "../marketing-header";

export const metadata: Metadata = { title: "Technical Support", description: "Auctrail technical support for client access, surplus-sale workflows, exports, labels, QR workflows, and hosted service assistance.", alternates: { canonical: "https://auctrail.com/technical-support" } };

const supportAreas = [
  ["01", "Account and access", "Help with sign-in problems, user access, permissions, and questions about an organization’s workspace."],
  ["02", "Application issues", "Report unexpected behavior in surplus-sale records, auction preparation, reports, documents, payment, pickup, or administrative functions."],
  ["03", "Labels and QR workflows", "Troubleshoot supported label-printing and QR-based record-access workflows used by authorized staff."],
  ["04", "Exports and integrations", "Get assistance with Auctrail sales-channel exports, including GovDeals-compatible bulk-upload files when the organization’s account is enabled for that capability."],
  ["05", "Hosted service", "Report availability, performance, or other hosted-environment issues affecting normal use of Auctrail."],
  ["06", "How-to guidance", "Get direction on standard Auctrail surplus-sales workflows and locate the appropriate documentation for routine application tasks."],
];

function Arrow() { return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg>; }
function Footer() { return <footer className="marketing-footer"><div className="marketing-shell footer-bottom"><span>© {new Date().getFullYear()} Auctrail. All rights reserved.</span><span><Link href="/faq">FAQ</Link> · <Link href="/support">Support center</Link></span></div></footer>; }

export default function TechnicalSupportPage() {
  return <main className={`marketing-site ${styles.site}`}><MarketingHeader />
    <section className={styles.hero}><div className={`marketing-shell ${styles.heroInner}`}><p className="section-kicker">Auctrail client support</p><h1>Technical support for your organization’s surplus-sales platform.</h1><p>Use Auctrail technical support for application access, unexpected behavior, exports, labels, QR workflows, sale-record issues, and hosted-service problems.</p><div className={styles.actions}><Link className="button button-primary" href="/support">Open support center <Arrow /></Link><a className="button button-secondary" href="https://app.auctrail.com/login">Client login <Arrow /></a></div></div></section>
    <section className={styles.section}><div className="marketing-shell"><div className={styles.heading}><div><p className="section-kicker">What technical support covers</p><h2>Start with the problem you are experiencing.</h2></div><p>Providing the affected page, sale record or case number when applicable, what you expected to happen, and a screenshot can make troubleshooting substantially faster.</p></div><div className={styles.grid}>{supportAreas.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
    <section className={styles.dark}><div className={`marketing-shell ${styles.twoColumn}`}><div><p className="section-kicker light">Before requesting help</p><h2>Include enough information to reproduce the issue.</h2><p>Auctrail support does not need confidential information that is unrelated to the problem. Send only what is necessary to identify the affected surplus-sales workflow.</p></div><div className={styles.checkPanel}><strong>Useful support details</strong><ul><li>Organization name and affected user</li><li>Page or function where the issue occurred</li><li>Sale record, case, or surplus-item number when relevant</li><li>Approximate date and time</li><li>Screenshot of the error or unexpected result</li><li>What action was attempted immediately before the issue</li></ul></div></div></section>
    <section className={styles.section}><div className={`marketing-shell ${styles.notice}`}><div><p className="section-kicker">Support scope</p><h2>Auctrail support covers Auctrail.</h2><p>Third-party auction marketplace accounts, local networks, printers, tablets, browsers, and organization-managed hardware may require assistance from the applicable provider or internal IT staff. Auctrail can help determine whether the issue originates in the Auctrail application.</p></div><Link className="button button-primary" href="/organization-setup">Organization setup information <Arrow /></Link></div></section>
    <Footer /></main>;
}
