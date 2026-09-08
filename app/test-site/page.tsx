import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TestFooter from "./test-footer";
import TestHeader from "./test-header";

export const metadata: Metadata = {
  title: "Auctrail — Product Preview",
  description: "Auctrail brings surplus intake, sale preparation, records, and closeout into one clear workflow.",
  robots: { index: false, follow: false },
};

const benefits = [
  ["One connected record", "Keep property details, photos, documents, approvals, sale results, payment, and pickup history together."],
  ["Less repeated work", "Enter information once and carry it through reports, labels, and supported sales-channel exports."],
  ["A clearer next step", "See what is active, who is responsible, and what needs attention without chasing spreadsheets or email."],
];

export default function TestSitePage() {
  return (
    <main className="new-site">
      <TestHeader />

      <section className="hero">
        <div className="site-shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Surplus asset disposition</div>
            <h1>Move surplus property forward with confidence.</h1>
            <p>Auctrail gives your team one clear place to manage the work from intake through completed sale.</p>
            <div className="button-row">
              <Link className="site-button" href="/test-site/demo">Request a demo</Link>
              <Link className="text-link" href="/test-site/contact">Ask a question <span aria-hidden="true">→</span></Link>
            </div>
            <p className="development-note">Currently in active development.</p>
          </div>
          <div className="screen-wrap hero-screen">
            <Image src="/test-site/dashboard.webp" alt="Auctrail web application dashboard" width={1440} height={960} priority />
          </div>
        </div>
      </section>

      <section className="audience-strip">
        <div className="site-shell">
          <span>Built for</span>
          <strong>Public agencies</strong>
          <strong>Businesses</strong>
          <strong>Nonprofits</strong>
          <strong>Schools & institutions</strong>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <div className="section-heading centered">
            <span className="section-label">Why Auctrail</span>
            <h2>A simpler way to manage the whole disposition process.</h2>
            <p>Designed around the work your team already does—without adding unnecessary complexity.</p>
          </div>
          <div className="benefit-grid">
            {benefits.map(([title, copy], index) => (
              <article className="benefit-card" key={title}>
                <span className="card-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="site-shell product-row">
          <div className="product-copy">
            <span className="section-label">Web application</span>
            <h2>Know where every case stands.</h2>
            <p>Give administrators and staff a shared view of active cases, assets, deadlines, documents, and completed work.</p>
            <ul>
              <li>Track intake through closeout</li>
              <li>Keep photos and documents with the record</li>
              <li>Prepare reports, labels, and supported exports</li>
            </ul>
          </div>
          <div className="screen-wrap">
            <Image src="/test-site/cases.webp" alt="Auctrail web application cases list" width={1440} height={960} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell product-row reverse">
          <div className="product-copy">
            <span className="section-label">Auctrail for iPad</span>
            <h2>Bring the workflow to the property.</h2>
            <p>A touch-friendly workspace helps staff review cases, find assets, and move work forward while they are in the field.</p>
            <ul>
              <li>Landscape workspace with clear navigation</li>
              <li>Fast access to assets, cases, and reports</li>
              <li>Real records and workflow actions on the go</li>
            </ul>
          </div>
          <div className="screen-wrap">
            <Image src="/screenshots/iPad/dashboard.webp" alt="Auctrail iPad dashboard" width={1536} height={1152} />
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="site-shell final-cta-inner">
          <div>
            <span className="section-label light">See it for yourself</span>
            <h2>Take a closer look at Auctrail.</h2>
            <p>Explore the current product with temporary demo access.</p>
          </div>
          <Link className="site-button light-button" href="/test-site/demo">Request a demo</Link>
        </div>
      </section>

      <TestFooter />
    </main>
  );
}
