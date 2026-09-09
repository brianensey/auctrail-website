import type { Metadata } from "next";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read how Auctrail handles information submitted through its product information and demo request forms.",
  alternates: { canonical: "/privacy/" },
  openGraph: { url: "/privacy/", title: "Auctrail Privacy Policy", images: [{ url: "/auctrail-logo-mark.png", width: 512, height: 512, alt: "Auctrail" }] },
};

export default function PrivacyPage() {
  return (
    <main className="new-site">
      <SiteHeader />
      <section className="simple-hero legal-hero">
        <div className="site-shell narrow">
          <span className="section-label">Privacy</span>
          <h1>Privacy, explained clearly.</h1>
          <p>Effective September 9, 2026. This policy covers information submitted through the public Auctrail website.</p>
        </div>
      </section>
      <section className="section content-section">
        <div className="site-shell narrow legal-copy">
          <h2>Information you provide</h2>
          <p>When you use the contact or demo request forms, Auctrail receives the information you choose to provide, such as your name, organization, email address, role, topic, and message.</p>

          <h2>How information is used</h2>
          <p>We use submitted information to answer questions, provide requested demo access, understand product interest, and communicate about Auctrail. We do not ask you to submit confidential case, buyer, payment, or account information through the public forms.</p>

          <h2>Service providers</h2>
          <p>Auctrail may use service providers to transmit form submissions, host the website, deliver email, and maintain business records. These providers process information only as needed to provide those services.</p>

          <h2>Sharing and retention</h2>
          <p>We do not sell personal information. Information may be retained for as long as reasonably necessary to respond to a request, maintain business records, comply with legal obligations, or protect the service.</p>

          <h2>Your choices</h2>
          <p>You may ask a privacy question or request correction or deletion of information you submitted by using the Auctrail contact form.</p>

          <h2>Policy updates</h2>
          <p>If this policy changes, the updated version and effective date will be published on this page.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
