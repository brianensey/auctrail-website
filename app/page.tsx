import type { Metadata } from "next";
import Link from "next/link";
import MarketingHeader from "./marketing-header";
import RealAppShot from "./real-app-shot";
import styles from "./home-public.module.css";

export const metadata: Metadata = {
  title: "Auctrail | Asset Disposition Management",
  description: "Auctrail helps organizations manage surplus property from intake and approvals through auction preparation, sale, payment, pickup, and closeout.",
  robots: { index: true, follow: true },
};

const capabilities = [
  ["Asset and surplus intake", "Create structured records with identifiers, condition, department, location, notes, and supporting information."],
  ["Photos and documents", "Keep auction photos, PDFs, approvals, titles, receipts, and supporting records with the case."],
  ["Auction preparation", "Organize listing information and photos, download image ZIP files, and prepare supported marketplace exports."],
  ["Workflow and accountability", "Keep status, responsibility, next actions, and case history visible to the people doing the work."],
  ["Sale and closeout", "Record sale results, payment, pickup, dates, and final disposition without losing the original record."],
  ["Reporting and records", "Review operational information, export data, and return to completed records when needed."],
];
const workflow = [
  ["01", "Intake", "Create the asset or surplus record and capture the starting information."],
  ["02", "Review", "Review the information and follow the organization’s approval process."],
  ["03", "Prepare", "Organize descriptions, photos, documents, labels, and auction information."],
  ["04", "Sell or dispose", "Use the approved sale or disposition channel and record the result."],
  ["05", "Close out", "Preserve payment, pickup, proof, notes, and the completed history."],
];

export default function HomePage() {
  return (
    <main className={styles.site}>
      <MarketingHeader />
      <section className={styles.hero}>
        <div className={`${styles.shell} ${styles.heroLayout}`}>
          <div>
            <p className={styles.kicker}>Asset disposition management</p>
            <h1>One place to manage surplus property from intake through closeout.</h1>
            <p className={styles.lead}>Auctrail is being built for public agencies, businesses, nonprofits, and institutions that need a clear process for preparing, selling, documenting, and closing out surplus property.</p>
            <div className={styles.actions}><a className={styles.primary} href="#platform">Explore the platform</a><Link className={styles.secondary} href="/plans">Pricing status</Link></div>
            <div className={styles.status}><strong>In active development.</strong> We are completing the web application, website, documentation, and support workflow. Final pricing and availability are still being established.</div>
          </div>
          <RealAppShot src="dashboard.png" alt="Auctrail Dashboard showing case totals, a priority queue, and monthly intake" caption="Dashboard and work overview" priority compact />
        </div>
      </section>
      <section className={styles.section} id="platform"><div className={styles.shell}>
        <div className={styles.sectionIntro}><div><p className={styles.kicker}>What Auctrail does</p><h2>Keep the entire disposition record connected.</h2></div><p>Move property from an internal decision to a documented result without rebuilding the same information in separate files.</p></div>
        <div className={styles.grid}>{capabilities.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
        <div className={styles.screenshotPair}>
          <RealAppShot src="assets.png" alt="Auctrail Assets screen with the asset register and department and condition filters" caption="Assets and property records" compact />
          <RealAppShot src="cases-list.png" alt="Auctrail Cases list with search, status, department, photo filters, and row actions" caption="Case management and work queues" compact />
        </div>
      </div></section>
      <section className={`${styles.section} ${styles.workflowSection}`} id="workflow"><div className={styles.shell}>
        <div className={styles.sectionIntro}><div><p className={styles.kicker}>Workflow</p><h2>A clear path from intake to completed record.</h2></div><p>Bring new records into Auctrail individually or in batches, then keep each stage of the work visible.</p></div>
        <div className={styles.workflow}>{workflow.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        <div className={styles.screenshotPair}>
          <RealAppShot src="intake.png" alt="Auctrail Intake options for single and bulk property and asset records" caption="Single and bulk intake" compact onDark />
          <RealAppShot src="import-history.png" alt="Auctrail Import History with batch totals, filters, and imported record details" caption="Import history and batch tracking" compact onDark />
        </div>
      </div></section>
      <section className={styles.section} id="integrations"><div className={styles.shell}>
        <div className={styles.sectionIntro}><div><p className={styles.kicker}>Photos and auction preparation</p><h2>Keep auction media with the case.</h2></div><p>Organize photos in the intended sequence and use Download Images to take the case photos with you in one ZIP file. Supporting PDFs stay with the record and are not included in the image ZIP.</p></div>
        <div className={styles.grid}>
          <article><h3>Upload photos and PDFs</h3><p>Use the case’s drag-and-drop area or browse for JPG, PNG, WebP, and PDF files.</p></article>
          <article><h3>Save the photo order</h3><p>Arrange auction photos in the sequence you need for the listing.</p></article>
          <article><h3>Download Images</h3><p>Export photos together as sequential JPG files in a ZIP, in their saved order.</p></article>
        </div>
      </div></section>
      <section className={`${styles.section} ${styles.reportSection}`} id="operations"><div className={styles.shell}>
        <div className={styles.sectionIntro}><div><p className={styles.kicker}>Reporting and completed history</p><h2>See active work and preserve the finished record.</h2></div><p>Review operational totals and filters in Reports. Use Disposition to return to completed outcomes without adding them back to the active case workload.</p></div>
        <div className={styles.screenshotPair}>
          <RealAppShot src="reports.png" alt="Auctrail Reports with sales totals, open and sold records, department filters, and date filters" caption="Reporting and exports" compact />
          <RealAppShot src="disposition.png" alt="Auctrail Disposition showing completed outcomes, sale details, and case links" caption="Completed sales and disposition records" compact />
        </div>
      </div></section>
      <section className={styles.section}><div className={styles.shell}>
        <div className={styles.featureBand}>
          <div><p className={styles.kicker}>Pickup and closeout</p><h2>Make pickup expectations clear.</h2><p>Set the pickup period used after a case is marked Sold, so the team can follow up on items awaiting collection.</p></div>
          <RealAppShot src="pickup-deadline.png" alt="Auctrail Pickup Deadline settings with the calendar-day period and timer rule" caption="Sold-item pickup deadline settings" compact />
        </div>
      </div></section>
      <section className={`${styles.section} ${styles.reportSection}`}><div className={styles.shell}>
        <div className={styles.sectionIntro}><div><p className={styles.kicker}>Administration</p><h2>Configure your organization and its workspace.</h2></div><p>Manage people, departments, workflow settings, and appearance from the Administration area.</p></div>
        <div className={styles.screenshotPair}>
          <RealAppShot src="administration.png" alt="Auctrail Administration with people, organization, workflow, permissions, and configuration sections" caption="Administration and organization setup" compact />
          <RealAppShot src="branding.png" alt="Auctrail Branding settings showing the organization name, color schemes, and icon choices" caption="Organization branding and appearance" compact />
        </div>
      </div></section>
      <section className={styles.section} id="labels"><div className={styles.shell}>
        <div className={styles.featureBand}>
          <RealAppShot src="qr-label.png" alt="Auctrail printed label with a case number, property description, and QR code" caption="Auctrail case label and QR access" compact />
          <div><p className={styles.kicker}>Labels and field access</p><h2>Connect the item to its record.</h2><p>Case labels display the identifier and property description with a QR code that authorized staff can use to open the related record.</p></div>
        </div>
      </div></section>
      <section className={`${styles.section} ${styles.audienceSection}`} id="industries"><div className={styles.shell}>
        <div className={styles.sectionIntro}><div><p className={styles.kicker}>Built for organizations with surplus property</p><h2>Not limited to one industry.</h2></div><p>A repeatable disposition process for departments, locations, and teams that need responsibility and documentation.</p></div>
        <div className={styles.audienceGrid}><span>Government & public agencies</span><span>Commercial businesses</span><span>Nonprofits</span><span>Education</span><span>Healthcare</span><span>Industrial & field operations</span><span>Multi-location organizations</span><span>Associations & institutions</span></div>
      </div></section>
      <section className={styles.cta}><div className={styles.shell}><div><p className={styles.kicker}>Development and availability</p><h2>Questions about Auctrail?</h2><p>Pricing and release details are still being finalized while development continues.</p></div><a className={styles.primary} href="mailto:info@auctrai.com">info@auctrai.com</a></div></section>
      <footer className={styles.footer}><div className={styles.shell}><span>© {new Date().getFullYear()} Auctrail</span><span>Asset Disposition Management</span></div></footer>
    </main>
  );
}
