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
        <div className="site-shell narrow">
          <span className="section-label">About Auctrail</span>
          <h1>A clearer path for surplus property.</h1>
          <p>Auctrail is being built for teams that need one dependable record from surplus intake through sale preparation, payment, pickup, and completed history.</p>
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
