import type { Metadata } from "next";
import Link from "next/link";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about Auctrail government asset disposition software, pricing, setup, GovDeals exports, storage, security, support, labels, QR codes, and records.",
  keywords: ["Auctrail FAQ", "government surplus software FAQ", "municipal asset disposition software", "GovDeals export software", "government surplus management"],
  alternates: { canonical: "https://auctrail.com/faq" },
};

const sections = [
  { title: "About Auctrail", items: [
    ["What is Auctrail?", "Auctrail is a hosted asset disposition management platform for municipalities and public agencies. It keeps property intake, case and asset records, approvals, photos, documents, auction preparation, disposition, pickup, payment, reporting, and closeout history connected in one system."],
    ["Who is Auctrail designed for?", "Auctrail is designed primarily for municipalities, public agencies, authorities, and government departments responsible for surplus property and asset disposition."],
    ["Is Auctrail an auction marketplace?", "No. Auctrail is the agency's operational system of record for surplus and disposition work. It does not require the agency to replace its auction marketplace or make the permanent agency record dependent on one marketplace provider."],
    ["What problem does Auctrail replace?", "Auctrail is intended to reduce the need to manage the same surplus case across spreadsheets, email, paper files, shared drives, photographs, and separate auction records."],
  ]},
  { title: "Plans and pricing", items: [
    ["How much does Auctrail cost?", "Essential is $99 per month and Professional is $199 per month. The annual totals currently shown are twelve months at the published monthly rate: $1,188 for Essential and $2,388 for Professional."],
    ["What is the difference between Essential and Professional?", "Both include the complete Auctrail workflow and unlimited case and asset records. Essential includes up to 5 active users and 5 departments with guided setup. Professional includes up to 20 active users, unlimited departments, assisted onboarding, initial data-import assistance, and priority email support."],
    ["Are important features removed from the $99 plan?", "No. Essential still includes the core intake-to-closeout workflow, photos and documents, permissions and audit history, auction preparation, GovDeals-compatible export, labels, QR access, reporting, exports, hosting, updates, and normal-use storage."],
    ["Is there an annual-payment discount?", "Not currently. The published annual totals are simply twelve months at the regular monthly price."],
    ["What if we need more than 20 users?", "Contact Auctrail before subscribing. A larger deployment can be evaluated individually without requiring Auctrail to advertise or promise a separate enterprise support tier."],
    ["Are auction marketplace fees included?", "No. Any seller, buyer, listing, or transaction fees charged by an auction marketplace are separate from the Auctrail subscription and remain subject to that provider's terms."],
  ]},
  { title: "Storage, records, and data", items: [
    ["Is storage included?", "Yes. Both plans include storage for normal municipal asset-disposition records, photos, and documents. Auctrail does not currently publish a fixed gigabyte allowance or automatic storage overage fee. Accounts with unusually high storage requirements may require a separate arrangement."],
    ["Are cases and assets limited?", "No. Essential and Professional both include unlimited case and asset records. Plan limits apply primarily to active users and, for Essential, the number of departments."],
    ["Can we keep historical disposition records?", "Yes. Auctrail is designed to preserve completed records so the agency can search prior cases and retain the supporting history after property has been disposed."],
    ["Can data be exported?", "Yes. Auctrail supports operational reporting and Excel or CSV exports so agencies can use their information for administration, reconciliation, and records-management needs."],
    ["Can existing data be imported?", "Yes, depending on the source and condition of the data. Essential includes import templates. Professional includes initial data-import assistance. Existing spreadsheets or other records should be reviewed during agency setup."],
  ]},
  { title: "GovDeals and disposition", items: [
    ["Does Auctrail work with GovDeals?", "Auctrail supports a GovDeals-compatible bulk-upload export workflow. The purpose is to reuse information already maintained in Auctrail rather than manually rebuilding the same auction information."],
    ["Can every GovDeals account use bulk upload?", "No. GovDeals Bulk Asset Upload is an account-enabled capability and may not be active by default. The agency's authorized GovDeals account must have Bulk Asset Upload enabled by GovDeals before using an Auctrail GovDeals-compatible export for bulk upload."],
    ["Does Auctrail automatically publish auctions to GovDeals?", "Auctrail should not be described as directly publishing auctions through a GovDeals API unless that integration is specifically available and authorized. The current supported approach is a compatible bulk-upload export for eligible GovDeals accounts."],
    ["Can Auctrail track disposal methods other than auction?", "Yes. Auctrail is intended to preserve the final disposition record whether property is sold, transferred, recycled, destroyed, or handled through another approved method."],
  ]},
  { title: "Labels, QR codes, and devices", items: [
    ["Does Auctrail support asset labels?", "Yes. Auctrail supports printable labels for practical property and case workflows."],
    ["What do the QR codes do?", "QR-based access is intended to let authorized staff scan a label and reach the related Auctrail case or record without manually searching for the identifier."],
    ["Can Auctrail be used on tablets?", "Auctrail is a web-based application and is intended to support modern desktop and tablet workflows through a compatible browser. Specific printers and device workflows should be tested before an agency standardizes its hardware."],
    ["Does Auctrail provide printers or tablets?", "Not as part of the standard software subscription. Agencies can use compatible hardware, and Auctrail documentation can identify supported or recommended workflows as they are validated."],
  ]},
  { title: "Agency setup and users", items: [
    ["What happens during agency setup?", "Setup identifies the agency and department structure, initial users and roles, current surplus process, existing data, label workflow, reporting needs, and any applicable auction-export requirements."],
    ["Can different departments use the same Auctrail account?", "Yes. Auctrail is structured for agency and department use. Essential supports up to 5 departments, while Professional includes unlimited departments."],
    ["Can users have different permissions?", "Yes. Role-based permissions are part of the platform so access can reflect operational responsibilities rather than giving every user the same administrative authority."],
    ["Can we upgrade from Essential to Professional later?", "Yes. An agency can move to Professional as its staff or department needs grow without rebuilding its Auctrail records."],
  ]},
  { title: "Hosting and support", items: [
    ["Is Auctrail hosted?", "Yes. The subscription includes the hosted Auctrail application along with ongoing platform updates and documentation."],
    ["What technical support is included?", "Technical support covers Auctrail account access, application issues, supported exports, labels and QR workflows, and hosted-service issues. Essential includes standard email support; Professional includes priority email support."],
    ["Does Auctrail support our local network, printer, or tablet?", "Auctrail support can help determine whether a problem originates in Auctrail, but agency-managed networks, hardware, browsers, printers, tablets, and third-party marketplace accounts may require assistance from agency IT or the applicable provider."],
    ["Where do we go for help?", "The Auctrail Support Center links to Technical Support for application issues and Agency Setup for onboarding and configuration questions."],
  ]},
];

function Arrow(){return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"/></svg>}
function Header(){return <header className="marketing-header"><div className="marketing-shell header-inner"><Link className="header-logo" href="/"><img src="/auctrail-logo-approved.jpg" alt="Auctrail" width="425" height="115"/></Link><nav className="desktop-nav"><Link href="/">Home</Link><Link href="/plans">Plans</Link><Link href="/agency-setup">Agency setup</Link><Link href="/technical-support">Technical support</Link><Link href="/support">Support</Link></nav><div className="header-actions"><a className="button button-primary button-compact" href="https://app.auctrail.com/login">Client login</a></div></div></header>}

export default function FAQPage(){
 const faqJsonLd={"@context":"https://schema.org","@type":"FAQPage",mainEntity:sections.flatMap(section=>section.items.map(([question,answer])=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}})))};
 return <main className={`marketing-site ${styles.site}`}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqJsonLd)}}/><Header/>
 <section className={styles.hero}><div className={`marketing-shell ${styles.heroInner}`}><p className="section-kicker">Frequently asked questions</p><h1>Common questions about Auctrail, answered clearly.</h1><p>Pricing, storage, GovDeals exports, records, labels, QR codes, agency setup, hosting, and support—all in one place.</p><div className={styles.heroActions}><Link className="button button-primary" href="/plans">View plans <Arrow/></Link><Link className="button button-secondary" href="/support">Support center <Arrow/></Link></div></div></section>
 <section className={styles.content}><div className={`marketing-shell ${styles.layout}`}><aside className={styles.index}><strong>FAQ topics</strong>{sections.map((section,index)=><a key={section.title} href={`#faq-${index+1}`}>{section.title}</a>)}</aside><div className={styles.sections}>{sections.map((section,index)=><section className={styles.group} id={`faq-${index+1}`} key={section.title}><div className={styles.groupHeading}><span>{String(index+1).padStart(2,"0")}</span><h2>{section.title}</h2></div><div className={styles.questions}>{section.items.map(([question,answer])=><details key={question}><summary>{question}<span>+</span></summary><div><p>{answer}</p></div></details>)}</div></section>)}</div></div></section>
 <section className={styles.cta}><div className="marketing-shell"><div><p className="section-kicker light">Still have a question?</p><h2>Use the support path that matches what you need.</h2><p>Technical questions, agency onboarding, plan selection, and client access each have a dedicated next step.</p></div><div className={styles.ctaActions}><Link className="button button-light" href="/technical-support">Technical support <Arrow/></Link><Link className="button button-dark-outline" href="/agency-setup">Agency setup <Arrow/></Link></div></div></section>
 <footer className="marketing-footer"><div className="marketing-shell footer-bottom"><span>© {new Date().getFullYear()} Auctrail. All rights reserved.</span><Link href="/">Return to Auctrail.com</Link></div></footer></main>
}
