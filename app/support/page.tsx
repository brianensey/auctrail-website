import Link from "next/link";
import MarketingHeader from "../marketing-header";

function ArrowIcon() { return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg>; }
function CheckIcon() { return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="m4 10 4 4 8-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>; }

export default function SupportPage() {
  return <main className="support-site"><MarketingHeader />
  <section className="support-main"><div className="marketing-shell"><div className="support-intro"><p className="section-kicker">Client support and access</p><h1>Help for organizations already using Auctrail.</h1><p>Access your organization’s workspace, get technical assistance, or find documentation for the Auctrail surplus asset disposition platform.</p></div><div className="support-card-grid">
  <article className="support-card-new"><span>01</span><h2>Client access</h2><p>Sign in to your organization’s workspace to manage surplus-sale records, departments or teams, reports, auction preparation, and completed sale history.</p><a className="button button-primary" href="https://app.auctrail.com/login">Open client login <ArrowIcon /></a></article>
  <article className="support-card-new"><span>02</span><h2>Technical support</h2><p>Application issues, account access, exports, labels, QR workflows, and hosted-environment assistance.</p><Link className="button button-secondary" href="/technical-support">Technical support <ArrowIcon /></Link></article>
  <article className="support-card-new"><span>03</span><h2>Documentation and FAQ</h2><p>Review common questions about surplus-sale workflows, exports, labels, QR access, hosting, plans, and supported features.</p><Link className="button button-secondary" href="/faq">View FAQ <ArrowIcon /></Link></article></div>
  <div className="support-note"><CheckIcon /><div><strong>GovDeals bulk-upload prerequisite</strong><br />GovDeals Bulk Asset Upload is an account-enabled feature and may not be active by default. The organization’s authorized GovDeals account must have that capability enabled by GovDeals before using an Auctrail GovDeals-compatible export.</div></div></div></section>
  <footer className="marketing-footer"><div className="marketing-shell footer-bottom"><span>© {new Date().getFullYear()} Auctrail. All rights reserved.</span><span><Link href="/faq">FAQ</Link> · <Link href="/">Return to Auctrail.com</Link></span></div></footer></main>;
}
