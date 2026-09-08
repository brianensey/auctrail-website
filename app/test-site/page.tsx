import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TestFooter from "./test-footer";
import TestHeader from "./test-header";

export const metadata: Metadata = {
  title: "Auctrail | Asset Disposition Management",
  description: "Auctrail brings surplus intake, sale preparation, records, and closeout into one clear workflow.",
  alternates: { canonical: "https://auctrail.com" },
  robots: { index: true, follow: true },
};

const stages = [
  ["01", "Intake", "Capture the property, ownership, condition, and supporting files."],
  ["02", "Review", "Route approvals and make responsibility clear."],
  ["03", "Prepare", "Build complete listing information without re-entering the work."],
  ["04", "Sell", "Move clean information to your approved sales channel."],
  ["05", "Close", "Document results, payment, pickup, and the permanent record."],
];

export default function TestSitePage() {
  return (
    <main className="new-site editorial-site">
      <div className="dark-stage">
        <TestHeader />
        <section className="editorial-hero">
          <div className="site-shell hero-editorial-grid">
            <div className="hero-index" aria-hidden="true">01</div>
            <div className="hero-editorial-copy">
              <p className="signal"><span /> Asset disposition, organized</p>
              <h1>Surplus moves.<br /><em>Your records follow.</em></h1>
              <p className="hero-lede">Auctrail keeps every step—from first intake to final pickup—on one clear, accountable trail.</p>
              <div className="button-row">
                <Link className="site-button" href="/demo">Explore the demo</Link>
                <Link className="dark-text-link" href="/contact">Ask a product question <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
            <div className="hero-product">
              <div className="product-stamp">Live product view</div>
              <div className="raw-screen">
                <Image src="/test-site/dashboard.webp" alt="Auctrail web application dashboard" width={1440} height={960} priority />
              </div>
            </div>
          </div>
          <div className="site-shell build-line"><span>Currently in active development</span><span>Web + iPad</span><span>Hosted and supported</span></div>
        </section>
      </div>

      <section className="manifesto">
        <div className="site-shell manifesto-grid">
          <p className="vertical-label">THE PROBLEM</p>
          <div>
            <h2>Property should not disappear into spreadsheets, inboxes, and shared drives.</h2>
            <p>Auctrail gives the people doing the work a common record, a visible next step, and a history that stays intact.</p>
          </div>
        </div>
      </section>

      <section className="trail-section">
        <div className="site-shell trail-grid" id="auction-workflow">
          <div className="trail-intro">
            <p className="signal green-signal"><span /> The Auctrail workflow</p>
            <h2>One trail.<br />Five clear stages.</h2>
            <p>Follow the work without building a second process around the software.</p>
          </div>
          <div className="stage-list">
            {stages.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-band web-band">
        <div className="site-shell band-grid">
          <div className="band-copy">
            <p className="band-number">02 / WEB</p>
            <h2>See the work.<br />Move the work.</h2>
            <p>Cases, assets, photos, documents, deadlines, reports, and completed history stay connected for the whole team.</p>
            <ul><li>Shared case visibility</li><li>Complete supporting records</li><li>Reports, labels, and supported exports</li></ul>
          </div>
          <div className="offset-screen"><Image src="/test-site/cases.webp" alt="Auctrail web application cases list" width={1440} height={960} /></div>
        </div>
      </section>

      <section className="product-band ipad-band">
        <div className="site-shell band-grid ipad-grid">
          <div className="ipad-device"><div className="ipad-camera" /><Image src="/screenshots/iPad/dashboard.webp" alt="Auctrail iPad dashboard" width={1536} height={1152} /></div>
          <div className="band-copy">
            <p className="band-number">03 / IPAD</p>
            <h2>Take the trail into the field.</h2>
            <p>A wide, touch-friendly workspace brings cases, assets, and actions to the property—not the other way around.</p>

          </div>
        </div>
      </section>

      <section className="who-section">
        <div className="site-shell who-grid">
          <p className="vertical-label">BUILT FOR</p>
          <div className="who-list"><span>Public agencies</span><span>Businesses</span><span>Nonprofits</span><span>Schools & institutions</span></div>
          <p>For organizations responsible for turning no-longer-needed property into a documented, completed outcome.</p>
        </div>
      </section>

      <section className="editorial-cta">
        <div className="site-shell editorial-cta-grid">
          <span className="cta-mark" aria-hidden="true">A</span>
          <div><p className="signal green-signal"><span /> Take the next step</p><h2>See where Auctrail could take your process.</h2></div>
          <div className="cta-actions"><Link className="site-button" href="/demo">Request a demo</Link><Link className="ink-link" href="/contact">Contact us →</Link></div>
        </div>
      </section>

      <TestFooter />
    </main>
  );
}
