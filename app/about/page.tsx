import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "About",
  description: "Learn why Auctrail is being built to give organizations a clearer, more accountable process for managing surplus property from intake through closeout.",
  alternates: { canonical: "/about/" },
  openGraph: { url: "/about/", title: "About Auctrail", images: [{ url: "/auctrail-logo-mark.png", width: 512, height: 512, alt: "Auctrail" }] },
};

export default function AboutPage() {
  return (
    <main className="new-site">
      <SiteHeader />
      <section className="simple-hero">
        <div className="site-shell about-hero-grid">
          <div className="about-intro">
          <span className="section-label">About Auctrail</span>
          <h1>A clearer path for surplus property.</h1>
          <p>Auctrail is being built for teams that need one dependable record from surplus intake through sale preparation, payment, pickup, and completed history.</p>
          </div>
          <article className="about-founder" aria-labelledby="founder-heading">
            <span className="section-label">Our story</span>
            <h2 id="founder-heading">About Auctrail</h2>
            <p>My name is <strong>Brian Ensey</strong>, and Auctrail was built from firsthand experience.</p>
            <p>While working in the surplus department of a small municipality, I saw how much of the work depended on paper. Tracking property from the moment it was declared surplus until its final disposition was time-consuming and difficult to manage. I knew there had to be a better way.</p>
            <p>What started as an effort to improve one department’s workflow grew into a business with a broader purpose: helping governments, nonprofits, businesses, entrepreneurs, and independent surplus and refurbished equipment sellers manage their surplus property with confidence.</p>
            <p>From the beginning, my goal was to build software that people could actually afford. Auctrail’s mission is to provide enterprise-quality asset disposition management at an affordable price, making professional tools accessible to organizations of every size and entrepreneurs working on their own.</p>
            <p>From intake and approvals to inventory tracking, auction preparation, reporting, and final disposition, Auctrail is being built to keep the entire process organized and accountable—so people can spend less time managing paperwork and more time serving their communities and customers.</p>
          </article>
        </div>
      </section>
      <section className="section content-section">
        <div className="site-shell narrow content-copy">
          <article>
            <span className="section-label">Why Auctrail</span>
            <h2>Keep the work and the record together.</h2>
            <p>Surplus property often moves through spreadsheets, email, shared drives, auction websites, and paper files. Auctrail connects those steps so staff can see what happened, what comes next, and what belongs in the permanent disposition record.</p>
          </article>
          <article>
            <span className="section-label">Who it serves</span>
            <h2>Built around accountable organizations.</h2>
            <p>The product is designed for public agencies, businesses, nonprofits, schools, healthcare organizations, and other institutions responsible for reviewing and disposing of property they no longer need.</p>
          </article>
          <div className="inline-cta">
            <div><strong>Have a question about the product?</strong><p>Use the information form and tell us about your current process.</p></div>
            <Link className="site-button secondary-button" href="/contact">Contact Auctrail</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
