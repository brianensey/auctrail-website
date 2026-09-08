import type { Metadata } from "next";
import Link from "next/link";
import MarketingHeader from "../marketing-header";
import RealAppShot from "../real-app-shot";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about Auctrail surplus asset disposition software, supported industries, development status, organization setup, GovDeals exports, storage, support, labels, QR codes, and completed sale records.",
  keywords: ["Auctrail FAQ", "surplus asset disposition software FAQ", "surplus sales management software", "business surplus software", "industrial surplus software", "nonprofit surplus software", "government surplus sales software", "GovDeals export software"],
  alternates: { canonical: "https://auctrail.com/faq" },
};

const sections = [
  { title: "About Auctrail", items: [
    ["What is Auctrail?", "Auctrail is a hosted surplus asset disposition platform for public agencies, businesses, nonprofits, and other organizations. It keeps surplus intake, approvals, item records, photos, documents, auction preparation, sale results, payment, pickup, and completed-sale history connected in one system."],
    ["Who is Auctrail designed for?", "Auctrail is designed for organizations across industries that prepare and sell surplus property. Examples include government and public agencies, commercial businesses, industrial and field operations, education and healthcare institutions, nonprofits and community organizations, and multi-location organizations."],
    ["Is Auctrail only for government organizations?", "No. Government and public agencies are one supported segment, but Auctrail is not government-exclusive. Businesses, nonprofits, institutions, industrial operations, and other organizations can use the same structured surplus-sale workflow."],
    ["Is Auctrail a general asset-management system?", "No. Auctrail is specifically for property that has entered an organization’s surplus sales process. It is not intended to manage the organization’s complete fleet, equipment inventory, facilities, or other in-service assets."],
    ["Is Auctrail an auction marketplace?", "No. Auctrail organizes and tracks an organization’s surplus-sale work while allowing the organization to continue using its approved auction or sales channels."],
    ["What problem does Auctrail replace?", "Auctrail is intended to reduce the need to manage the same surplus sale across spreadsheets, email, paper files, shared drives, photographs, and separate auction records."],
  ]},
  { title: "Development and pricing", items: [
    ["How much does Auctrail cost?", "Final pricing has not been published yet. Auctrail is still in active development, and pricing will be finalized as the web application, integrations, onboarding, and launch scope are completed. Current status is posted on the Pricing page."],
    ["Are the plan names and limits final?", "No. The commercial plan structure is still being refined and should not be treated as final until Auctrail publishes the launch pricing and terms."],
    ["Can our organization ask about expected pricing or availability now?", "Yes. General product, pricing, availability, integration, and early-access questions can be sent to info@auctrai.com."],
    ["Is the iPad app available?", "Not yet. Native iPad development is paused while the web application, public website, documentation, support workflow, and launch readiness are completed first."],
    ["Are auction marketplace fees included in Auctrail?", "No. Any seller, buyer, listing, or transaction fees charged by an auction marketplace are separate from Auctrail and remain subject to that provider’s terms."],
  ]},
  { title: "Storage, records, and data", items: [
    ["Can Auctrail store photos and documents?", "Yes. Auctrail is designed to keep surplus-sale records, photos, PDFs, approvals, titles, receipts, and other supporting documents with the related case."],
    ["Are surplus-sale records limited?", "The application is designed around maintaining the organization’s surplus-sale records without forcing staff to split active work across disconnected systems. Final commercial limits, if any, will be published with final pricing."],
    ["Can we keep historical sale records?", "Yes. Auctrail is designed to preserve completed sale records so the organization can search prior surplus sales and retain supporting history after property has been sold and picked up."],
    ["Can data be exported?", "Yes. Auctrail supports operational reporting and Excel or CSV exports so organizations can use their surplus-sale information for administration, reconciliation, and records-management needs."],
    ["Can existing data be imported?", "Yes, depending on the source and condition of the data. Existing surplus-sale spreadsheets or records should be reviewed during organization setup so the appropriate import approach can be determined."],
  ]},
  { title: "GovDeals and sales channels", items: [
    ["Does Auctrail work with GovDeals?", "Auctrail supports a GovDeals-compatible bulk-upload export workflow. The purpose is to reuse surplus-sale information already maintained in Auctrail rather than manually rebuilding the same auction information."],
    ["Can every GovDeals account use bulk upload?", "No. GovDeals Bulk Asset Upload is an account-enabled capability and may not be active by default. The organization’s authorized GovDeals account must have Bulk Asset Upload enabled by GovDeals before using an Auctrail GovDeals-compatible export for bulk upload."],
    ["Does Auctrail automatically publish auctions to GovDeals?", "Auctrail should not be described as directly publishing auctions through a GovDeals API unless that integration is specifically available and authorized. The current supported approach is a compatible bulk-upload export for eligible GovDeals accounts."],
    ["Can Auctrail keep the sale history after the auction ends?", "Yes. Auctrail is intended to preserve sale results, payment, pickup, buyer information, supporting documents, and closeout notes after the surplus property is sold."],
  ]},
  { title: "Photos, labels, QR codes, and devices", items: [
    ["Can auction photos be downloaded together?", "Yes. The case photo manager includes a Download Images action that prepares uploaded case photos as a ZIP file in saved photo order, using sequential JPG files for easier transfer to auction sites."],
    ["Does Auctrail support surplus-item labels?", "Yes. Auctrail supports printable labels for surplus property and sale-record workflows."],
    ["What do the QR codes do?", "QR-based access is intended to let authorized staff scan a label and reach the related Auctrail surplus record without manually searching for the identifier."],
    ["Can Auctrail be used on tablets?", "The current priority is the web application, which can be accessed through supported browsers. A separate native iPad application is planned but its development is paused until the web platform and launch materials are further along."],
  ]},
  { title: "Organization setup and users", items: [
    ["What happens during organization setup?", "Setup identifies the organization and department, team, or location structure; initial users and roles; the current surplus-sales process; existing sale records; label workflow; reporting needs; and any applicable auction-export requirements."],
    ["Can different departments or teams use the same Auctrail organization?", "Yes. Auctrail is structured for organization-wide use across departments, teams, and locations with role-based access and responsibility."],
    ["Can users have different permissions?", "Yes. Role-based permissions are part of the platform so access can reflect operational responsibilities rather than giving every user the same administrative authority."],
    ["Are onboarding details final?", "Not yet. The onboarding and commercial packaging are still being finalized during active development. The Organization Setup page describes the operational information Auctrail expects to configure."],
  ]},
  { title: "Hosting and support", items: [
    ["Is Auctrail hosted?", "Yes. Auctrail is being developed as a hosted web application with ongoing platform updates and customer documentation."],
    ["What technical support is available?", "The Support Center covers Auctrail account access, application issues, supported exports, labels and QR workflows, and hosted-service issues. Support processes are continuing to be refined before launch."],
    ["Does Auctrail support our local network, printer, or tablet?", "Auctrail support can help determine whether a problem originates in Auctrail, but organization-managed networks, hardware, browsers, printers, tablets, and third-party marketplace accounts may require assistance from internal IT or the applicable provider."],
    ["Where do we go for help?", "The Auctrail Support Center links to Technical Support for application issues and Organization Setup for onboarding and configuration questions."],
  ]},
];

function Arrow(){return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"/></svg>}

export default function FAQPage(){
 const faqJsonLd={"@context":"https://schema.org","@type":"FAQPage",mainEntity:sections.flatMap(section=>section.items.map(([question,answer])=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}})))};
 return <main className={`marketing-site ${styles.site}`}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqJsonLd)}}/><MarketingHeader />
 <section className={styles.hero}><div className={`marketing-shell ${styles.heroInner}`}><p className="section-kicker">Frequently asked questions</p><h1>Common questions about Auctrail, answered clearly.</h1><p>Supported industries, surplus asset disposition, development status, storage, GovDeals exports, records, labels, QR codes, organization setup, hosting, and support—all in one place.</p><div className={styles.heroActions}><Link className="button button-primary" href="/plans">Pricing status <Arrow/></Link><Link className="button button-secondary" href="/support">Support center <Arrow/></Link></div><RealAppShot src="/screenshots/cases.svg" alt="Current Auctrail Cases screen" caption="The current case list and work queue" /></div></section>
 <section className={styles.content}><div className={`marketing-shell ${styles.layout}`}><aside className={styles.index}><strong>FAQ topics</strong>{sections.map((section,index)=><a key={section.title} href={`#faq-${index+1}`}>{section.title}</a>)}</aside><div className={styles.sections}>{sections.map((section,index)=><section className={styles.group} id={`faq-${index+1}`} key={section.title}><div className={styles.groupHeading}><span>{String(index+1).padStart(2,"0")}</span><h2>{section.title}</h2></div><div className={styles.questions}>{section.items.map(([question,answer])=><details key={question}><summary>{question}<span>+</span></summary><div><p>{answer}</p></div></details>)}</div></section>)}</div></div></section>
 <section className={styles.cta}><div className="marketing-shell"><div><p className="section-kicker light">Still have a question?</p><h2>Use the support path that matches what you need.</h2><p>Technical questions, organization onboarding, product questions, and client access each have a dedicated next step.</p></div><div className={styles.ctaActions}><Link className="button button-light" href="/technical-support">Technical support <Arrow/></Link><Link className="button button-dark-outline" href="/organization-setup">Organization setup <Arrow/></Link></div></div></section>
 <footer className="marketing-footer"><div className="marketing-shell footer-bottom"><span>© {new Date().getFullYear()} Auctrail. All rights reserved.</span><span><Link href="/faq">FAQ</Link> · <Link href="/support">Support center</Link> · <Link href="/">Auctrail.com</Link></span></div></footer></main>
}
