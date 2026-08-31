import Link from "next/link";
import MarketingHeader from "./marketing-header";
import styles from "./site-preview.module.css";

type IconName =
  | "building"
  | "dashboard"
  | "documents"
  | "education"
  | "factory"
  | "folder"
  | "heart"
  | "history"
  | "landmark"
  | "network"
  | "qr"
  | "record"
  | "report"
  | "search"
  | "shield"
  | "tag"
  | "truck"
  | "upload"
  | "users";

type Audience = {
  icon: IconName;
  title: string;
  description: string;
  examples: string;
};

type Capability = {
  icon: IconName;
  title: string;
  description: string;
  details: string[];
};

const audiences: Audience[] = [
  {
    icon: "landmark",
    title: "Government and public agencies",
    description: "Accountable surplus-sale workflows for cities, counties, authorities, districts, and public-service organizations.",
    examples: "Municipal · County · Authority · District",
  },
  {
    icon: "building",
    title: "Commercial businesses",
    description: "A consistent process for offices, retailers, hospitality groups, property managers, and service companies disposing of excess property.",
    examples: "Corporate · Retail · Hospitality · Property",
  },
  {
    icon: "factory",
    title: "Industrial and field operations",
    description: "Structured disposition for equipment, fleet, tools, and materials moving out of manufacturing, construction, transportation, and warehouse operations.",
    examples: "Manufacturing · Fleet · Construction · Logistics",
  },
  {
    icon: "education",
    title: "Education and healthcare",
    description: "Coordinate surplus property across schools, campuses, hospitals, clinics, departments, and institutional locations.",
    examples: "Schools · Universities · Hospitals · Clinics",
  },
  {
    icon: "heart",
    title: "Nonprofits and community organizations",
    description: "Clear documentation for charities, associations, foundations, faith-based organizations, and community groups.",
    examples: "Nonprofit · Association · Foundation · Faith-based",
  },
  {
    icon: "network",
    title: "Multi-location organizations",
    description: "One shared disposition process across branches, facilities, warehouses, regional teams, and multiple departments.",
    examples: "Branches · Facilities · Regions · Departments",
  },
];

const capabilities: Capability[] = [
  {
    icon: "record",
    title: "A complete sale record",
    description: "Keep identity, condition, custody, assignments, dates, pricing, status, and sale details connected from the first intake through closeout.",
    details: ["Identifiers", "Condition", "Assignments", "Status history"],
  },
  {
    icon: "documents",
    title: "Photos and documents",
    description: "Attach photographs, approvals, titles, receipts, payment proof, pickup documentation, and supporting files where staff can find them.",
    details: ["Photos", "Approvals", "Titles", "Receipts"],
  },
  {
    icon: "users",
    title: "Ownership and accountability",
    description: "Give administrators and staff a shared view of responsibility, current status, required approvals, and next actions.",
    details: ["Roles", "Departments", "Approvals", "Audit history"],
  },
  {
    icon: "tag",
    title: "Labels and field access",
    description: "Use printable surplus-item labels and QR-based access to connect physical property with its digital sale record.",
    details: ["Labels", "QR access", "Field lookup", "Item IDs"],
  },
  {
    icon: "report",
    title: "Reporting and exports",
    description: "Prepare clean information for administration, finance, reconciliation, records management, and approved sales channels.",
    details: ["Excel", "CSV", "Reports", "GovDeals-compatible"],
  },
  {
    icon: "history",
    title: "Searchable closeout history",
    description: "Preserve the buyer, result, payment, pickup, dates, documents, and notes behind every completed surplus sale.",
    details: ["Buyer", "Payment", "Pickup", "Completed history"],
  },
];

const workflow = [
  { number: "01", title: "Receive", description: "Create the record, identify the property, and capture the original supporting information." },
  { number: "02", title: "Review", description: "Route the property through the organization’s approval and disposition process." },
  { number: "03", title: "Prepare", description: "Organize photos, descriptions, documents, labels, pricing, and listing details." },
  { number: "04", title: "Sell", description: "Move the approved information into the selected sales channel and record the result." },
  { number: "05", title: "Close out", description: "Preserve payment, pickup, buyer details, proof, notes, and the completed history." },
];

const outputs = [
  {
    icon: "upload" as IconName,
    label: "Sales-channel output",
    title: "GovDeals-compatible export",
    description: "Reuse information already maintained in Auctrail when Bulk Asset Upload is enabled on the organization’s authorized GovDeals account.",
  },
  {
    icon: "qr" as IconName,
    label: "Field workflow",
    title: "Labels and QR access",
    description: "Connect physical surplus property with the correct digital record using practical printable labels and scan-based access.",
  },
  {
    icon: "report" as IconName,
    label: "Administrative output",
    title: "Excel and CSV reporting",
    description: "Export clean sale information for reconciliation, management review, finance, and records-retention needs.",
  },
];

const valuePoints = [
  { icon: "record" as IconName, title: "One record per sale", description: "No fragmented paper, email, and spreadsheet trail." },
  { icon: "users" as IconName, title: "Clear responsibility", description: "Staff can see ownership, status, and next action." },
  { icon: "upload" as IconName, title: "Sale-ready information", description: "Prepare clean output without rebuilding the record." },
  { icon: "history" as IconName, title: "Documented closeout", description: "Preserve the result after payment and pickup." },
];

function Icon({ name }: { name: IconName }) {
  const common = { fill: "none", stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 1.7 };

  switch (name) {
    case "landmark":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="M3 9h18M5 9v9m4-9v9m6-9v9m4-9v9M3 20h18M12 3l9 4H3l9-4Z" /></svg>;
    case "building":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="M4 21V5h10v16M14 9h6v12M7 8h4M7 12h4M7 16h4M17 12h1M17 16h1M2 21h20" /></svg>;
    case "factory":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="M3 21V10l6 4v-4l6 4V6h4l2 15H3ZM7 18h2m3 0h2m3 0h2" /></svg>;
    case "education":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="m2 9 10-5 10 5-10 5L2 9Zm4 2v5c3 3 9 3 12 0v-5m4-2v7" /></svg>;
    case "heart":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="M20.8 4.9a5.5 5.5 0 0 0-7.8 0L12 6l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.3a5.5 5.5 0 0 0 0-7.8Z" /></svg>;
    case "network":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="M12 8V5m0 3-6 4m6-4 6 4M6 12v4m12-4v4M3 21h6v-5H3v5Zm12 0h6v-5h-6v5ZM9 5h6V2H9v3Z" /></svg>;
    case "record":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="M7 3h8l4 4v14H7V3Zm8 0v5h4M10 12h6m-6 4h6M4 7v14h11" /></svg>;
    case "documents":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="M8 3h8l4 4v14H8V3Zm8 0v5h4M4 7v14h12M11 12h6m-6 4h6" /></svg>;
    case "users":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.9m-2-12a4 4 0 0 1 0 7.8" /></svg>;
    case "tag":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="m20 13-7 7L3 10V3h7l10 10ZM7.5 7.5h.01" /></svg>;
    case "report":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="M4 20V10m5 10V4m6 16v-7m5 7V7M2 20h20" /></svg>;
    case "history":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="M3 12a9 9 0 1 0 3-6.7L3 8m0-5v5h5m4-1v5l3 2" /></svg>;
    case "upload":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="M12 16V3m0 0L7 8m5-5 5 5M5 14v6h14v-6" /></svg>;
    case "qr":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="M3 3h7v7H3V3Zm11 0h7v7h-7V3ZM3 14h7v7H3v-7Zm11 0h3v3h-3v-3Zm4 0h3v7h-3m-4-1h3m-3-3v3" /></svg>;
    case "dashboard":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="M4 13h6V4H4v9Zm10 7h6v-9h-6v9ZM4 20h6v-3H4v3Zm10-13h6V4h-6v3Z" /></svg>;
    case "search":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><circle {...common} cx="11" cy="11" r="7" /><path {...common} d="m20 20-4-4" /></svg>;
    case "folder":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="M3 6h7l2 2h9v11H3V6Z" /></svg>;
    case "truck":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="M3 5h11v12H3V5Zm11 5h4l3 3v4h-7v-7ZM7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></svg>;
    case "shield":
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6l-8-3Zm-3 9 2 2 4-5" /></svg>;
    default:
      return <svg aria-hidden="true" viewBox="0 0 24 24"><path {...common} d="M5 12h14M12 5l7 7-7 7" /></svg>;
  }
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="m4 10 4 4 8-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function ProductDashboard() {
  const stages = [
    ["Received", "complete"],
    ["Reviewed", "complete"],
    ["Prepared", "current"],
    ["Sold", "pending"],
    ["Closed", "pending"],
  ];

  return (
    <div className={styles.productStage} aria-label="Example Auctrail application dashboard">
      <div className={styles.stageGlow} aria-hidden="true" />
      <div className={styles.applicationWindow}>
        <div className={styles.applicationTopbar}>
          <div className={styles.applicationIdentity}>
            <span>A</span>
            <div><strong>Auctrail</strong><small>Asset disposition management</small></div>
          </div>
          <div className={styles.applicationSearch}><Icon name="search" /><span>Search records, buyers, or item IDs</span></div>
          <span className={styles.applicationAvatar}>BE</span>
        </div>

        <div className={styles.applicationBody}>
          <aside className={styles.applicationSidebar} aria-label="Application preview navigation">
            <span className={styles.sidebarActive}><Icon name="dashboard" /> Dashboard</span>
            <span><Icon name="record" /> Sale records</span>
            <span><Icon name="folder" /> Documents</span>
            <span><Icon name="report" /> Reports</span>
            <span><Icon name="users" /> Organization</span>
          </aside>

          <div className={styles.applicationWorkspace}>
            <div className={styles.workspaceHeader}>
              <div><small>CASE 2026-0148</small><h2>Fleet vehicle disposition</h2><p>Example Organization · Operations</p></div>
              <span className={styles.workspaceStatus}><i /> Auction preparation</span>
            </div>

            <div className={styles.metricGrid}>
              <article><span>Sale readiness</span><strong>72%</strong><small>12 of 17 requirements</small></article>
              <article><span>Documents</span><strong>8</strong><small>All required files attached</small></article>
              <article><span>Assigned to</span><strong>Admin</strong><small>Next review due today</small></article>
            </div>

            <div className={styles.workspaceGrid}>
              <section className={styles.workflowCard}>
                <div className={styles.cardHeading}><div><span>Disposition workflow</span><strong>Current sale progress</strong></div><small>Updated 8:42 AM</small></div>
                <ol>
                  {stages.map(([title, state], index) => (
                    <li className={styles[state]} key={title}>
                      <span>{state === "complete" ? <CheckIcon /> : index + 1}</span>
                      <div><strong>{title}</strong><small>{state === "current" ? "In progress" : state === "complete" ? "Complete" : "Pending"}</small></div>
                    </li>
                  ))}
                </ol>
              </section>

              <section className={styles.activityCard}>
                <div className={styles.cardHeading}><div><span>Next actions</span><strong>Required before listing</strong></div></div>
                <ul>
                  <li><span className={styles.actionDone}><CheckIcon /></span><div><strong>Ownership documents</strong><small>Verified by Administration</small></div></li>
                  <li><span className={styles.actionCurrent}>2</span><div><strong>Review auction photos</strong><small>Assigned to Operations</small></div></li>
                  <li><span>3</span><div><strong>Confirm reserve details</strong><small>Waiting for approval</small></div></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.floatingInsight} ${styles.floatingInsightLeft}`}>
        <span><Icon name="report" /></span><div><strong>12 records ready</strong><small>Prepared for sale-channel export</small></div>
      </div>
      <div className={`${styles.floatingInsight} ${styles.floatingInsightRight}`}>
        <span><Icon name="shield" /></span><div><strong>Complete history</strong><small>Payment and pickup documented</small></div>
      </div>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`marketing-shell ${styles.footerGrid}`}>
        <div className={styles.footerBrand}>
          <img src="/auctrail-logo-approved.jpg" alt="Auctrail" width="425" height="115" />
          <p>One controlled surplus-sale record from intake and preparation through payment, pickup, and completed history.</p>
          <span>ASSET DISPOSITION MANAGEMENT</span>
        </div>
        <div>
          <strong>Platform</strong>
          <a href="#platform">Capabilities</a>
          <a href="#workflow">Workflow</a>
          <a href="#operations">Managed service</a>
          <a href="#integrations">Outputs and integrations</a>
        </div>
        <div>
          <strong>Explore</strong>
          <a href="#industries">Industries</a>
          <Link href="/plans">Plans and pricing</Link>
          <Link href="/demo">Request a demo</Link>
          <Link href="/organization-setup">Organization setup</Link>
        </div>
        <div>
          <strong>Client resources</strong>
          <Link href="/faq">Frequently asked questions</Link>
          <Link href="/support">Support center</Link>
          <Link href="/technical-support">Technical support</Link>
          <a href="https://app.auctrail.com/login">Client login</a>
        </div>
      </div>
      <div className={`marketing-shell ${styles.footerBottom}`}>
        <span>© {new Date().getFullYear()} Auctrail. All rights reserved.</span>
        <span>Surplus asset disposition software for organizations across industries.</span>
      </div>
    </footer>
  );
}

export default function SitePreview() {
  return (
    <main className={`marketing-site ${styles.home}`}>
      <MarketingHeader logoHref="/preview-progress/" />

      <section className={styles.hero} id="overview">
        <div className={styles.heroPattern} aria-hidden="true" />
        <div className={`marketing-shell ${styles.heroLayout}`}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}><span /> Asset disposition management</p>
            <h1>Move surplus assets from <em>decision</em> to completed sale.</h1>
            <p className={styles.heroLead}>
              Auctrail gives public agencies, businesses, nonprofits, institutions, and industrial operations one controlled record for intake, approvals, sale preparation, results, payment, pickup, and closeout.
            </p>
            <div className={styles.heroActions}>
              <Link className={`button button-primary ${styles.primaryAction}`} href="/demo">Request a demo <ArrowIcon /></Link>
              <a className={`button ${styles.secondaryAction}`} href="#workflow">Explore the workflow <ArrowIcon /></a>
            </div>
            <div className={styles.heroAssurances} aria-label="Auctrail platform assurances">
              <span><CheckIcon /> Unlimited sale records</span>
              <span><CheckIcon /> Role-based workflows</span>
              <span><CheckIcon /> Hosted and supported</span>
            </div>
            <div className={styles.heroAudience}>
              <small>Designed for</small>
              <span>Public agencies</span><i />
              <span>Businesses</span><i />
              <span>Nonprofits</span><i />
              <span>Institutions</span>
            </div>
          </div>

          <ProductDashboard />
        </div>
      </section>

      <section className={styles.valueStrip} aria-label="Core Auctrail outcomes">
        <div className={`marketing-shell ${styles.valueGrid}`}>
          {valuePoints.map((point) => (
            <article key={point.title}>
              <span><Icon name={point.icon} /></span>
              <div><strong>{point.title}</strong><p>{point.description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="industries">
        <div className="marketing-shell">
          <div className={styles.sectionIntro}>
            <div><p className={styles.sectionLabel}>Who Auctrail serves</p><h2>One disposition process, adapted to the way your organization operates.</h2></div>
            <p>Auctrail is not government-exclusive. It supports any organization that needs surplus property to move through a clear review, sale-preparation, payment, pickup, and closeout process.</p>
          </div>
          <div className={styles.audienceGrid}>
            {audiences.map((audience) => (
              <article className={styles.audienceCard} key={audience.title}>
                <span className={styles.cardIcon}><Icon name={audience.icon} /></span>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
                <small>{audience.examples}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.platformSection}`} id="platform">
        <div className="marketing-shell">
          <div className={styles.centeredIntro}>
            <p className={styles.sectionLabel}>The Auctrail platform</p>
            <h2>Everything required to prepare, sell, and close out surplus property.</h2>
            <p>The software centers every task, person, document, and result on the same sale record—without becoming a general inventory system or an auction marketplace.</p>
          </div>
          <div className={styles.capabilityGrid}>
            {capabilities.map((capability, index) => (
              <article className={`${styles.capabilityCard} ${index === 0 || index === 5 ? styles.capabilityWide : ""}`} key={capability.title}>
                <div className={styles.capabilityTopline}><span className={styles.cardIcon}><Icon name={capability.icon} /></span><small>0{index + 1}</small></div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className={styles.capabilityDetails}>{capability.details.map((detail) => <span key={detail}>{detail}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.workflowSection} id="workflow">
        <div className="marketing-shell">
          <div className={styles.workflowIntro}>
            <div><p className={styles.sectionLabel}>A consistent sales workflow</p><h2>Every step stays visible from intake through closeout.</h2></div>
            <p>Staff see a process that is easy to follow. Administrators retain the detail, accountability, and completed record required behind each sale.</p>
          </div>
          <ol className={styles.workflowTimeline}>
            {workflow.map((step, index) => (
              <li key={step.number}>
                <div className={styles.workflowNumber}><span>{step.number}</span>{index < workflow.length - 1 ? <i /> : null}</div>
                <small>Step {index + 1}</small>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.operationsSection}`} id="operations">
        <div className={`marketing-shell ${styles.operationsLayout}`}>
          <div className={styles.operationsCopy}>
            <p className={styles.sectionLabel}>Built for actual operations</p>
            <h2>Support the process your team already owns—without adding another disconnected process.</h2>
            <p>Auctrail keeps routine work direct for the people creating and updating records while giving management the structure and visibility needed to keep property moving.</p>
            <ul>
              <li><CheckIcon /><span><strong>Flexible organizational structure</strong><small>Configure departments, teams, locations, roles, and responsibilities.</small></span></li>
              <li><CheckIcon /><span><strong>Clear attention management</strong><small>See current status, ownership, pending work, and required next action.</small></span></li>
              <li><CheckIcon /><span><strong>Consistent records without rigid sameness</strong><small>Standardize the process while preserving the detail each sale requires.</small></span></li>
              <li><CheckIcon /><span><strong>History that remains useful</strong><small>Search prior sales after the property has been paid for and picked up.</small></span></li>
            </ul>
          </div>

          <aside className={styles.managedCard}>
            <div className={styles.managedHeader}><span><Icon name="shield" /></span><div><small>Managed subscription</small><h3>Application, hosting, updates, and support together.</h3></div></div>
            <div className={styles.managedList}>
              <span><CheckIcon /> Secure hosted Auctrail application</span>
              <span><CheckIcon /> Organization and workflow configuration</span>
              <span><CheckIcon /> User setup and onboarding assistance</span>
              <span><CheckIcon /> Data-import guidance and assistance</span>
              <span><CheckIcon /> Documentation and training materials</span>
              <span><CheckIcon /> Ongoing updates and platform support</span>
            </div>
            <Link className={`button button-primary ${styles.managedAction}`} href="/organization-setup">Review organization setup <ArrowIcon /></Link>
          </aside>
        </div>
      </section>

      <section className={styles.section} id="integrations">
        <div className="marketing-shell">
          <div className={styles.sectionIntro}>
            <div><p className={styles.sectionLabel}>Practical outputs and integrations</p><h2>Use the information already in the record.</h2></div>
            <p>Reduce duplicate entry by turning structured Auctrail data into the files, labels, reports, and field access your operation needs.</p>
          </div>
          <div className={styles.outputGrid}>
            {outputs.map((output) => (
              <article className={styles.outputCard} key={output.title}>
                <div className={styles.outputTopline}><span className={styles.cardIcon}><Icon name={output.icon} /></span><small>{output.label}</small></div>
                <h3>{output.title}</h3>
                <p>{output.description}</p>
              </article>
            ))}
          </div>
          <div className={styles.govDealsNotice}><span><Icon name="shield" /></span><div><strong>GovDeals prerequisite</strong><p>Bulk Asset Upload is account-enabled and may not be active by default. The organization’s authorized GovDeals account must have the capability enabled before using the compatible export for bulk upload.</p></div></div>
        </div>
      </section>

      <section className={styles.pricingSection}>
        <div className={`marketing-shell ${styles.pricingLayout}`}>
          <div className={styles.pricingIntro}>
            <p className={styles.sectionLabel}>Straightforward plans</p>
            <h2>The complete core workflow starts at $149 per month.</h2>
            <p>Essential runs the complete surplus-intake-to-sale-closeout process. Professional adds automation, advanced management reporting, customization, and higher-touch service.</p>
            <Link className={`button ${styles.pricingLink}`} href="/plans">Compare all plan details <ArrowIcon /></Link>
          </div>
          <div className={styles.planCards}>
            <article>
              <div><small>Complete core platform</small><h3>Essential</h3></div>
              <p><strong>$149</strong><span>/month</span></p>
              <ul><li><CheckIcon /> Up to 5 active users</li><li><CheckIcon /> Up to 5 departments or teams</li><li><CheckIcon /> Full intake-to-closeout workflow</li></ul>
              <Link href="/demo?plan=essential">Request Essential demo <ArrowIcon /></Link>
            </article>
            <article className={styles.featuredPlan}>
              <div><small>Automation and management tools</small><h3>Professional</h3><em>Recommended</em></div>
              <p><strong>$249</strong><span>/month</span></p>
              <ul><li><CheckIcon /> Up to 20 active users</li><li><CheckIcon /> Unlimited departments or teams</li><li><CheckIcon /> Automation and advanced reporting</li></ul>
              <Link href="/demo?plan=professional">Request Professional demo <ArrowIcon /></Link>
            </article>
          </div>
        </div>
        <p className={styles.pricingFootnote}>Both plans include unlimited surplus-sale records, hosting, updates, documentation, and storage for normal organizational use.</p>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalCtaPattern} aria-hidden="true" />
        <div className={`marketing-shell ${styles.finalCtaInner}`}>
          <div><p className={styles.sectionLabel}>A clearer disposition process</p><h2>See how Auctrail fits the way your organization manages surplus property.</h2><p>Start with the process you use today and identify where one controlled sale record can remove duplicate work.</p></div>
          <div><Link className={`button button-primary ${styles.primaryAction}`} href="/demo">Request a demo <ArrowIcon /></Link><a className={`button ${styles.finalLogin}`} href="https://app.auctrail.com/login">Client login</a></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
