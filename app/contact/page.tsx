import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./contact-form";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: { absolute: "Contact Auctrail | Product and Availability Questions" },
  description: "Contact Auctrail about surplus asset disposition software, product development, availability, future pricing, onboarding, or your organization’s workflow.",
  alternates: { canonical: "/contact/" },
  openGraph: { url: "/contact/", title: "Contact Auctrail", images: [{ url: "/auctrail-logo-mark.png", width: 512, height: 512, alt: "Auctrail" }] },
};

export default function ContactPage() {
  return (
    <main className="new-site">
      <SiteHeader />
      <section className="form-page">
        <div className="site-shell form-layout">
          <div className="form-intro">
            <span className="section-label">Contact Auctrail</span>
            <h1>How can we help?</h1>
            <p>Use this form for questions about the product, development, availability, future pricing, or your organization’s workflow.</p>
            <div className="form-aside">
              <strong>Looking for a demo?</strong>
              <p>The demo has its own short request form.</p>
              <Link className="text-link" href="/demo">Go to demo request <span aria-hidden="true">→</span></Link>
            </div>
            <div className="form-aside">
              <strong>Mailing Address</strong>
              <p>For physical mail, invoices, Mail-in Payments and legal notices only:<br />Auctrail LLC<br />P.O. Box 1111<br />Choctaw, OK 73020</p>
              <p><strong>Office Location:</strong> We are a fully remote company and do not host visitors or walk-ins at this address. For assistance, please reach out via email.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
