import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
          <Image className="founder-portrait" src="/brian-ensey-portrait.webp" alt="Brian Ensey, founder of Auctrail" width={900} height={900} />
          </div>
          <article className="about-founder" aria-labelledby="founder-heading">
            <span className="section-label">Our story</span>
            <h2 id="founder-heading">About Auctrail</h2>
            <p>My name is <strong>Brian Ensey</strong>, and Auctrail was built from firsthand experience.</p>
            <p>While working in the surplus department of a small municipality, I saw how much of the work depended on paper. Tracking property from the moment it was declared surplus until its final disposition was time-consuming and difficult to manage. I knew there had to be a better way.</p>
            <p>What started as an effort to improve one department’s workflow grew into a business with a broader purpose: helping governments, nonprofits, businesses, entrepreneurs, and independent surplus and refurbished equipment sellers manage their surplus property with confidence.</p>
            <p>From the beginning, my goal was to build software that people could actually afford. Auctrail’s mission is to provide enterprise-quality asset disposition management at an affordable price, making professional tools accessible to organizations of every size and entrepreneurs working on their own.</p>
            <p>From intake and approvals to inventory tracking, auction preparation, reporting, and final disposition, Auctrail is being built to keep the entire process organized and accountable—so people can spend less time managing paperwork and more time serving their communities and customers.</p>
            <footer className="founder-signoff">
              <Image className="founder-signature" src="/brian-ensey-signature.png" alt="Brian Ensey" width={1920} height={800} />
              <span className="founder-title">Founder</span>
              <a className="founder-linkedin" href="https://www.linkedin.com/in/brian-ensey-863527432/" target="_blank" rel="noopener noreferrer" aria-label="Brian Ensey on LinkedIn (opens in a new tab)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            </footer>
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
