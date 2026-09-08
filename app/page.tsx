import type { Metadata } from "next";
import Link from "next/link";
import MarketingHeader from "./marketing-header";
import styles from "./home-public.module.css";

export const metadata: Metadata = {
  title: "Auctrail | Asset Disposition Management",
  description: "Auctrail helps organizations manage surplus property from intake and approvals through auction preparation, sale, payment, pickup, and closeout.",
  robots: { index: true, follow: true },
};

const capabilities = [
  ["Asset and surplus intake", "Create structured records for property entering the disposition process, including identifiers, condition, ownership, department, location, notes, and supporting information."],
  ["Photos and documents", "Upload and manage auction photos, PDFs, approvals, titles, receipts, payment proof, pickup proof, and related documents on the same case record."],
  ["Auction preparation", "Prepare listing information, organize photos in the intended order, download auction-ready image ZIP files, and produce supported marketplace exports."],
  ["Workflow and accountability", "Track status, assignments, approvals, next actions, aging, and case history so staff can see what is waiting and who owns the next step."],
  ["Sale and closeout", "Record sale source, buyer, amount, payment, pickup, dates, proof, and final disposition details without losing the original record."],
  ["Reporting and records", "Search completed cases, export operational data, print labels, use QR access, and preserve an auditable history for administration and records management."],
];

const workflow = [
  ["01", "Intake", "Create the asset or surplus record and capture the starting information."],
  ["02", "Review", "Route it through the organization’s approval and disposition process."],
  ["03", "Prepare", "Organize descriptions, photos, documents, labels, pricing, and auction information."],
  ["04", "Sell or dispose", "Move approved property to the selected sale or disposition channel and record the result."],
  ["05", "Close out", "Preserve payment, pickup, proof, buyer details, notes, and completed history."],
];

function ProductShot({ src, alt, caption, compact = false }: { src: string; alt: string; caption: string; compact?: boolean }) {
  return (
    <figure className={`${styles.productShot} ${compact ? styles.productShotCompact : ""}`}>
      <div className={styles.productShotFrame}><img src={src} alt={alt} /></div>
      <figcaption>{caption}<span>Actual Auctrail staging interface</span></figcaption>
    </figure>
  );
}

export default function HomePage() {
  return (
    <main className={styles.site}>
      <MarketingHeader />

      <section className={styles.hero}>
        <div className={`${styles.shell} ${styles.heroLayout}`}>
          <div>
            <p className={styles.kicker}>Asset disposition management</p>
            <h1>One place to manage surplus property from intake through closeout.</h1>
            <p className={styles.lead}>Auctrail is being built for public agencies, businesses, nonprofits, institutions, and other organizations that need a controlled process for preparing, selling, documenting, and closing out surplus property.</p>
            <div className={styles.actions}>
              <a className={styles.primary} href="#platform">Explore the platform</a>
              <Link className={styles.secondary} href="/plans">Pricing status</Link>
            </div>
            <div className={styles.status}><strong>Current status:</strong> Auctrail is still in active development. The web application, public website, documentation, support workflow, and launch readiness are the current priority.</div>
          </div>
          <ProductShot src="/screenshots/dashboard.svg" alt="Current Auctrail dashboard and profile interface" caption="Current web application dashboard" compact />
        </div>
      </section>

      <section className={styles.section} id="platform">
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <div><p className={styles.kicker}>What Auctrail does</p><h2>Keep the entire disposition record connected.</h2></div>
            <p>The platform is designed around the actual work required to move property from an internal decision to a documented final result.</p>
          </div>
          <div className={styles.grid}>
            {capabilities.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}
          </div>
          <div className={styles.screenshotPair}>
            <ProductShot src="/screenshots/assets.svg" alt="Current Auctrail Assets screen" caption="Assets and property records" />
            <ProductShot src="/screenshots/cases.svg" alt="Current Auctrail Cases screen" caption="Case management and work queues" />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.workflowSection}`} id="workflow">
        <div className={styles.shell}>
          <div className={styles.sectionIntro}><div><p className={styles.kicker}>Workflow</p><h2>A clear path from intake to completed record.</h2></div><p>Auctrail keeps each stage visible without forcing organizations to rebuild the same information in separate spreadsheets, emails, and folders.</p></div>
          <div className={styles.workflow}>
            {workflow.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
          <div className={styles.workflowScreenshot}>
            <ProductShot src="/screenshots/case-detail.svg" alt="Current Auctrail individual case detail screen" caption="A real case record with its workflow and details" />
          </div>
        </div>
      </section>

      <section className={styles.section} id="integrations">
        <div className={styles.shell}>
          <div className={`${styles.featureBand} ${styles.featureBandReverse}`}>
            <div>
              <p className={styles.kicker}>Photos and auction preparation</p>
              <h2>Keep auction images with the case and take them with you.</h2>
              <p>Photos and PDFs are managed directly on the case. Auction photos can be placed in the intended order and downloaded together as an image ZIP for use on supported auction sites.</p>
              <ul><li>Drag-and-drop photo and PDF upload</li><li>Saved photo ordering</li><li>Download Images ZIP action</li><li>Case documents stay connected to the record</li></ul>
            </div>
            <ProductShot src="/screenshots/photos-download.svg" alt="Current Auctrail photo upload and Download Images interface" caption="Photos, documents, and Download Images" />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.reportSection}`} id="operations">
        <div className={styles.shell}>
          <div className={styles.featureBand}>
            <ProductShot src="/screenshots/reports.svg" alt="Current Auctrail reports screen" caption="Operational reporting in the current app" />
            <div>
              <p className={styles.kicker}>Reporting and completed history</p>
              <h2>See the work that is moving and preserve the work that is finished.</h2>
              <p>Reporting is part of the operating workflow, not a separate spreadsheet exercise. Auctrail is designed to keep management visibility and completed-sale history connected to the underlying records.</p>
              <ul><li>Operational reports</li><li>Excel and CSV exports</li><li>Searchable completed records</li><li>Sale, payment, pickup, and closeout history</li></ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.audienceSection}`} id="industries">
        <div className={styles.shell}>
          <div className={styles.sectionIntro}><div><p className={styles.kicker}>Built for organizations with surplus property</p><h2>Not limited to one industry.</h2></div><p>Auctrail is intended for organizations that need responsibility, documentation, and repeatable disposition workflows across departments, locations, or teams.</p></div>
          <div className={styles.audienceGrid}><span>Government & public agencies</span><span>Commercial businesses</span><span>Nonprofits</span><span>Education</span><span>Healthcare</span><span>Industrial & field operations</span><span>Multi-location organizations</span><span>Associations & institutions</span></div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={`${styles.featureBand} ${styles.featureBandReverse}`}>
            <div>
              <p className={styles.kicker}>Administration</p>
              <h2>Configure people, organization structure, workflows, and integrations in one place.</h2>
              <p>The Administration area provides the settings used to manage users, departments, locations, workflow rules, permissions, and supported sales integrations.</p>
              <ul><li>Users and roles</li><li>Departments and locations</li><li>Workflow and permission settings</li><li>Auction integrations and operating configuration</li></ul>
            </div>
            <ProductShot src="/screenshots/administration.svg" alt="Current Auctrail Administration screen" caption="Administration and organization configuration" />
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.shell}><div><p className={styles.kicker}>Development and availability</p><h2>Questions about Auctrail?</h2><p>Pricing and release details are still being finalized while development continues.</p></div><a className={styles.primary} href="mailto:info@auctrai.com">info@auctrai.com</a></div>
      </section>

      <footer className={styles.footer}><div className={styles.shell}><span>© {new Date().getFullYear()} Auctrail</span><span>Asset Disposition Management</span></div></footer>
    </main>
  );
}
