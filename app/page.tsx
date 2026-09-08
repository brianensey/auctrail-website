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
  ["05", "Close out", "Preserve payment, pickup, proof, notes, and completed history."],
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
          <RealAppShot src="dashboard.webp" alt="Auctrail Dashboard showing case totals, priority work, and intake activity" caption="Dashboard and work overview" priority compact />
        </div>
      </section>

      <section className={styles.section} id="platform"><div className={styles.shell}>
        <div className={styles.sectionIntro}><div><p className={styles.kicker}>What Auctrail does</p><h2>Keep the entire disposition record connected.</h2></div><p>Move property from an internal decision to a documented result without rebuilding the same information in separate files.</p></div>
        <div className={styles.grid}>{capabilities.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
        <div className={styles.screenshotPair}>
          <RealAppShot src="assets.webp" alt="Auctrail Assets screen with the asset register and filters" caption="Assets and property records" compact />
          <RealAppShot src="cases-list.webp" alt="Auctrail Cases screen with filters, statuses, photo counts, and row actions" caption="Case management and work queues" compact />
        </div>
      </div></section>

      <section className={`${styles.section} ${styles.workflowSection}`} id="workflow"><div className={styles.shell}>
        <div className={styles.sectionIntro}><div><p className={styles.kicker}>Workflow</p><h2>A clear path from intake to completed record.</h2></div><p>Auctrail keeps the work visible from the first record through preparation, sale or disposition, and closeout.</p></div>
        <div className={styles.workflow}>{workflow.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        <div className={styles.workflowScreenshot}><RealAppShot src="cases-list.webp" alt="Auctrail Cases work queue" caption="Active cases, filters, and next actions" onDark /></div>
      </div></section>

      <section className={styles.section} id="integrations"><div className={styles.shell}>
        <div className={styles.sectionIntro}><div><p className={styles.kicker}>Photos and auction preparation</p><h2>Keep auction media with the case.</h2></div><p>Organize photos in the intended sequence and use Download Images to take the case photos with you in one ZIP file. Supporting PDFs stay with the record and are not included in the image ZIP.</p></div>
        <div className={styles.grid}>
          <article><h3>Upload photos and PDFs</h3><p>Use the case upload area to add JPG, PNG, WebP, and PDF files.</p></article>
          <article><h3>Save the photo order</h3><p>Arrange auction photos in the sequence needed for the listing.</p></article>
          <article><h3>Download Images</h3><p>Export case photos together as sequential JPG files in a ZIP, in saved order.</p></article>
        </div>
      </div></section>

      <section className={`${styles.section} ${styles.reportSection}`} id="operations"><div className={styles.shell}>
        <div className={styles.featureBand}>
          <RealAppShot src="reports.webp" alt="Auctrail Reports screen with totals, filters, and operational metrics" caption="Reporting and operational visibility" compact />
          <div><p className={styles.kicker}>Reporting and completed history</p><h2>See the work that is moving and preserve the work that is finished.</h2><p>Reporting stays connected to the underlying records so organizations can review active work, sold items, filtered totals, and completed history without maintaining a separate reporting system.</p><ul><li>Operational reports</li><li>Excel and CSV exports</li><li>Searchable completed records</li><li>Sale, payment, pickup, and closeout history</li></ul></div>
        </div>
      </div></section>

      <section className={styles.section}><div className={styles.shell}>
        <div className={`${styles.featureBand} ${styles.featureBandReverse}`}>
          <div><p className={styles.kicker}>Administration</p><h2>Configure people, organization structure, workflows, and settings in one place.</h2><p>The Administration area brings together users, departments, workflow controls, permissions, integrations, and system configuration.</p><ul><li>Users and roles</li><li>Departments and locations</li><li>Workflow and permission settings</li><li>Organization-level configuration</li></ul></div>
          <RealAppShot src="administration.webp" alt="Auctrail Administration screen with people, workflow, sales, and system configuration" caption="Administration and organization setup" compact />
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
