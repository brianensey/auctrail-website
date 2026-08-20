import type { Metadata } from "next";
import Link from "next/link";
import styles from "./plans.module.css";

export const metadata: Metadata = {
  title: "Plans and Pricing",
  description: "Compare Auctrail Essential and Professional plans for government surplus sales workflows, starting at $149 per month.",
  keywords: ["Auctrail pricing", "government surplus software pricing", "municipal surplus sales software", "public agency surplus sales", "government surplus auction software"],
  alternates: { canonical: "https://auctrail.com/plans" },
  openGraph: { title: "Auctrail Plans and Pricing", description: "Two straightforward plans for government surplus sales workflows, starting at $149 per month.", url: "https://auctrail.com/plans", siteName: "Auctrail", type: "website" },
};

const plans = [
  {
    name: "Essential",
    label: "Complete core platform",
    price: "149",
    annual: "1,788",
    description: "For smaller municipalities, authorities, and focused departments that need the complete Auctrail surplus-sales workflow without advanced automation or management customization.",
    capacity: [
      "Up to 5 active users",
      "Up to 5 departments",
      "Complete surplus-intake-to-sale-closeout workflow",
      "Standard dashboard and reports",
      "GovDeals-compatible export, labels, and QR access",
      "Guided setup materials and import templates",
      "Standard Auctrail workspace",
      "Standard email support",
    ],
  },
  {
    name: "Professional",
    label: "Automation and management tools",
    price: "249",
    annual: "2,988",
    description: "For cities and multi-department operations that want Auctrail to do more of the management work through automation, advanced reporting, customization, and higher-touch service.",
    capacity: [
      "Up to 20 active users",
      "Unlimited departments",
      "Advanced management dashboard and analytics",
      "Automated aging and workflow alerts",
      "Scheduled and advanced department reports",
      "Agency branding and workspace customization",
      "Custom agency domain option",
      "Expanded workflow configuration",
      "Assisted onboarding and initial data-import assistance",
      "Priority email support",
    ],
    featured: true,
  },
];

const coreCapabilities = [
  ["01", "Surplus sale records", "Unlimited surplus-sale records with item details, identifiers, condition, custody, assignments, dates, pricing, and sale-status tracking."],
  ["02", "Documents and accountability", "Photos, approvals, titles, receipts, payment and pickup proof, role-based permissions, audit history, and searchable completed-sale records."],
  ["03", "Auction preparation and closeout", "Auction preparation, GovDeals-compatible export, sale results, buyer information, payment and pickup details, and complete closeout history."],
  ["04", "Labels, reporting, and service", "Printable labels, QR access, search, reports, Excel and CSV exports, included storage for normal agency use, secure hosting, updates, documentation, and support."],
];

const comparisonRows = [
  ["Active users included", "5", "20"],
  ["Departments", "Up to 5", "Unlimited"],
  ["Surplus-sale records", "Unlimited", "Unlimited"],
  ["Storage for normal agency use", "Included", "Included"],
  ["Complete surplus-intake-to-sale-closeout workflow", "Included", "Included"],
  ["Photos, documents, labels, and QR access", "Included", "Included"],
  ["GovDeals-compatible export", "Included", "Included"],
  ["Management dashboard", "Standard", "Advanced analytics"],
  ["Aging and workflow attention", "Standard work visibility", "Automated alerts and work queues"],
  ["Scheduled reports", "—", "Included"],
  ["Department performance reporting", "Standard", "Advanced"],
  ["Workspace customization", "Standard Auctrail workspace", "Agency branding and customization"],
  ["Domain", "Auctrail-hosted domain", "Custom agency domain option"],
  ["Workflow configuration", "Standard", "Expanded"],
  ["Onboarding", "Guided", "Assisted"],
  ["Data import", "Templates", "Initial import assistance"],
  ["Support", "Standard email", "Priority email"],
];

const frequentlyAskedQuestions = [
  ["What makes the plans different?", "Essential is the complete core Auctrail surplus-sales system. Professional adds automation, advanced management analytics and reporting, workspace customization, expanded workflow configuration, assisted onboarding, initial data-import assistance, and priority support."],
  ["Does Essential remove core Auctrail functions?", "No. Essential includes the complete surplus-intake-to-sale-closeout workflow, unlimited surplus-sale records, documents, labels, QR access, reporting, GovDeals-compatible export, hosting, updates, and normal-use storage. Professional is designed to save additional management time rather than make the core workflow usable."],
  ["Are surplus-sale records limited by plan?", "No. Essential and Professional both include unlimited surplus-sale records. Essential is limited to five active users and five departments; Professional expands to twenty active users and unlimited departments."],
  ["What automation is included with Professional?", "Professional is designed to add automated aging and workflow alerts, management work queues, scheduled reporting, and advanced dashboard visibility so administrators can identify stalled property and required follow-up more quickly."],
  ["Is storage included?", "Yes. Both plans include storage for normal government surplus-sale records, photos, and documents. Auctrail does not currently publish a fixed gigabyte allowance or automatic storage overage fee. Accounts with unusually high storage requirements may require a separate arrangement."],
  ["Can an agency change plans later?", "Yes. An Essential customer can move to Professional as its staff, departments, reporting, automation, or customization needs grow without rebuilding its Auctrail surplus-sale records."],
  ["Is hosting included?", "Yes. Both plans include the hosted Auctrail application, platform updates, documentation, and the support level listed for the plan."],
  ["Are auction marketplace fees included?", "No. Seller, buyer, listing, or transaction fees charged by an auction marketplace are separate from the Auctrail subscription and remain subject to that provider's terms."],
  ["Can every GovDeals account use bulk upload immediately?", "Not necessarily. GovDeals Bulk Asset Upload is an account-enabled capability. The agency's authorized GovDeals account must have it enabled before using an Auctrail GovDeals-compatible export for bulk upload."],
  ["Do annual prices include a discount?", "The annual totals shown are twelve months at the published monthly rate. A separate annual-payment discount is not currently applied."],
  ["What if an agency needs more than 20 users?", "Contact Auctrail before subscribing. Larger deployments can be evaluated individually."],
];

function ArrowIcon() { return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg>; }
function CheckIcon() { return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="m4 10 4 4 8-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>; }

function SiteHeader() { return <header className="marketing-header"><div className="marketing-shell header-inner"><Link className="header-logo" href="/" aria-label="Auctrail home"><img src="/auctrail-logo-approved.jpg" alt="Auctrail — Government Surplus Sales Software" width="425" height="115" /></Link><nav className="desktop-nav" aria-label="Primary navigation"><Link href="/#platform">Platform</Link><Link href="/#workflow">Workflow</Link><Link href="/plans" aria-current="page">Plans</Link><Link href="/#integrations">Integrations</Link><Link href="/faq">FAQ</Link><Link href="/support">Support</Link></nav><div className="header-actions"><a className="text-link" href="https://app.auctrail.com/login">Client login</a><Link className="button button-primary button-compact" href="/support">Request information</Link></div><details className="mobile-nav"><summary aria-label="Open navigation">Menu</summary><div className="mobile-nav-panel"><Link href="/#platform">Platform</Link><Link href="/#workflow">Workflow</Link><Link href="/plans">Plans</Link><Link href="/#integrations">Integrations</Link><Link href="/faq">FAQ</Link><Link href="/support">Support</Link><a href="https://app.auctrail.com/login">Client login</a></div></details></div></header>; }
function SiteFooter() { return <footer className="marketing-footer"><div className="marketing-shell footer-grid"><div className="footer-intro"><img src="/auctrail-logo-approved.jpg" alt="Auctrail" width="425" height="115" /><p>Government surplus sales software for auction preparation, sale tracking, payment, pickup, documentation, and completed-sale history.</p></div><div><strong>Platform</strong><Link href="/#platform">Capabilities</Link><Link href="/#workflow">Workflow</Link><Link href="/plans">Plans</Link><Link href="/#integrations">Integrations</Link></div><div><strong>Resources</strong><Link href="/faq">Frequently Asked Questions</Link><Link href="/support">Support</Link><a href="https://app.auctrail.com/login">Client login</a></div></div><div className="marketing-shell footer-bottom"><span>© {new Date().getFullYear()} Auctrail. All rights reserved.</span><span>Government Surplus Sales Software</span></div></footer>; }

export default function PlansPage() {
  const pricingJsonLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Auctrail", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: plans.map((plan) => ({ "@type": "Offer", name: `Auctrail ${plan.name}`, url: "https://auctrail.com/plans", price: plan.price, priceCurrency: "USD" })) };
  return <main className={`marketing-site ${styles.plansSite}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }} /><SiteHeader />
    <section className={styles.hero}><div className={`marketing-shell ${styles.heroInner}`}><p className="section-kicker">Auctrail plans</p><h1>A complete core system, with more automation when you need it.</h1><p className={styles.heroLead}>Essential includes the complete surplus-intake-to-sale-closeout platform. Professional adds automation, advanced management reporting, customization, and higher-touch service for agencies that want Auctrail to do more of the administrative work.</p><div className={styles.heroActions}><a className="button button-primary" href="#plans">Compare plans <ArrowIcon /></a><Link className="button button-secondary" href="/support">Discuss your agency <ArrowIcon /></Link></div><div className={styles.assurances}><span><CheckIcon /> Full surplus-sales workflow in both plans</span><span><CheckIcon /> Unlimited surplus-sale records</span><span><CheckIcon /> Storage included for normal agency use</span></div></div></section>
    <section className={styles.pricingSection} id="plans"><div className="marketing-shell"><div className={styles.sectionHeading}><div><p className="section-kicker">Monthly plan pricing</p><h2>Essential runs the complete workflow. Professional reduces management work.</h2></div><p>Both plans include Auctrail's core surplus-sale recordkeeping, auction preparation, labels, QR access, reporting, hosting, and updates. Professional adds automation, deeper management visibility, customization, assisted setup, and priority service.</p></div><div className={styles.planGrid}>{plans.map((plan) => <article className={`${styles.planCard} ${plan.featured ? styles.featuredPlan : ""}`} key={plan.name}><div className={styles.planTopline}><span>{plan.label}</span>{plan.featured ? <strong>Recommended</strong> : null}</div><h2>{plan.name}</h2><p className={styles.planDescription}>{plan.description}</p><div className={styles.priceLine}><strong>${plan.price}</strong><span>per month</span></div><p className={styles.annualPrice}>${plan.annual} annual total</p><div className={styles.planDivider} /><strong className={styles.capacityLabel}>Plan capacity and service</strong><ul className={styles.planList}>{plan.capacity.map((item) => <li key={item}><CheckIcon /> {item}</li>)}</ul><Link className={`button ${plan.featured ? "button-primary" : "button-secondary"} button-full`} href="/support">Request {plan.name} information <ArrowIcon /></Link></article>)}</div><p className={styles.pricingNote}>Storage is included for normal government surplus-sale records, photos, and documents. Accounts with unusually high storage requirements may require a separate arrangement. Auction marketplace charges, if any, are separate.</p></div></section>
    <section className={styles.comparisonSection}><div className="marketing-shell"><div className={styles.comparisonHeading}><p className="section-kicker light">Plan comparison</p><h2>Professional is built around time savings, visibility, and service.</h2><p>Essential remains a complete operating system for surplus sales. Professional adds tools that help administrators identify what needs attention and reduce recurring manual follow-up.</p></div><div className={styles.tableWrap}><table className={styles.comparisonTable}><thead><tr><th>Plan detail</th><th>Essential<br /><span>$149/month</span></th><th>Professional<br /><span>$249/month</span></th></tr></thead><tbody>{comparisonRows.map(([detail, essential, professional]) => <tr key={detail}><th scope="row">{detail}</th><td>{essential}</td><td>{professional}</td></tr>)}</tbody></table></div></div></section>
    <section className={styles.includedSection}><div className="marketing-shell"><div className={styles.centeredHeading}><p className="section-kicker">Included in both plans</p><h2>The complete surplus-sale record remains intact at either price.</h2><p>Auctrail does not remove core surplus intake, documentation, auction preparation, sale closeout, reporting, GovDeals-compatible export, or normal-use storage from Essential.</p></div><div className={styles.capabilityGrid}>{coreCapabilities.map(([number,title,description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div><div className={styles.govDealsNote}><CheckIcon /><div><strong>GovDeals bulk-upload prerequisite</strong><p>GovDeals Bulk Asset Upload must be enabled on the agency's authorized GovDeals account before an Auctrail GovDeals-compatible export can be used for bulk upload.</p></div></div></div></section>
    <section className={styles.faqSection}><div className="marketing-shell"><div className={styles.faqHeading}><p className="section-kicker">Plan questions</p><h2>What agencies need to know before selecting a plan.</h2></div><div className={styles.faqGrid}>{frequentlyAskedQuestions.map(([question,answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></div></section>
    <section className="final-cta"><div className="marketing-shell final-cta-inner"><div><p className="section-kicker light">A plan matched to agency needs</p><h2>Choose the core platform or add management automation.</h2><p>Start with the way your agency operates today, then decide whether advanced automation, reporting, customization, and assisted service justify Professional.</p></div><div className="final-cta-actions"><Link className="button button-light" href="/support">Request plan information <ArrowIcon /></Link><a className="button button-dark-outline" href="https://app.auctrail.com/login">Client login</a></div></div></section><SiteFooter /></main>;
}
