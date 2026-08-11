import Link from "next/link";

const features = [
  { number: "01", title: "Property Intake", description: "Import cases, capture asset details, assign departments, attach documentation, and keep every record organized from the start." },
  { number: "02", title: "Approvals & Tracking", description: "Track each item through review, approval, auction, pickup, disposal, and closeout with a clear operational history." },
  { number: "03", title: "Photos & Proof", description: "Store case photos, disposal proof, notes, and supporting documents directly with the asset disposition record." },
  { number: "04", title: "Auction Management", description: "Prepare auction information, maintain sale details, and preserve buyer, payment, and pickup documentation." },
  { number: "05", title: "Reports & Exports", description: "Search records, review department activity, and export clean Excel or CSV reports for administration and auditing." },
  { number: "06", title: "Hosted & Supported", description: "A managed software package with hosting, updates, support, documentation, and onboarding for public agencies." },
];

const process = [
  ["01", "Receive", "Enter or import property and supporting details."],
  ["02", "Review", "Route the case through department and administrative review."],
  ["03", "Dispose", "Sell, transfer, recycle, destroy, or otherwise dispose of the asset."],
  ["04", "Document", "Preserve sale records, photos, proof, notes, and final reporting."],
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="shell nav-wrap">
          <Link href="/" className="brand" aria-label="Auctrail home"><span className="brand-mark">A</span><span>Auctrail</span></Link>
          <nav aria-label="Primary navigation"><a href="#features">Features</a><a href="#workflow">Workflow</a><a href="#hosting">Hosting</a><Link href="/support">Support</Link><a href="#contact" className="button button-small">Request Information</a></nav>
        </div>
      </header>
      <main>
        <section className="hero"><div className="shell hero-grid">
          <div>
            <img src="/auctrail-logo.svg" alt="Auctrail — Asset Disposition Management" style={{width:"min(500px,100%)",height:"auto",display:"block",marginBottom:"38px"}} />
            <p className="eyebrow">Asset disposition management</p><h1>Control every asset from intake to final disposition.</h1>
            <p className="hero-copy">Auctrail gives government agencies one secure system for property intake, approvals, auctions, disposal, documentation, and reporting.</p>
            <div className="hero-actions"><a href="#features" className="button">Explore the Platform</a><Link href="/support" className="button button-ghost">View Support</Link></div>
            <div className="trust-row"><span>Built for government workflows</span><span>Hosted and managed</span><span>Documentation included</span></div>
          </div>
          <div className="product-card" aria-label="Auctrail dashboard preview"><div className="product-topbar"><span className="mini-brand">Auctrail Operations</span><span className="status-dot">System active</span></div><div className="metric-grid"><article><small>Total cases</small><strong>284</strong><span>Current inventory</span></article><article><small>In review</small><strong>37</strong><span>Awaiting action</span></article><article><small>Disposed</small><strong>119</strong><span>Fully documented</span></article></div><div className="workflow-card"><div><strong>Case 2026-0148</strong><span>Public Works vehicle</span></div><div className="workflow-steps"><span className="done">Received</span><span className="done">Reviewed</span><span className="active">Auction</span><span>Closeout</span></div></div></div>
        </div></section>
        <section id="features" className="section"><div className="shell"><div className="section-heading"><p className="eyebrow">One connected system</p><h2>Everything needed to manage asset disposition.</h2><p>Replace scattered spreadsheets, email chains, shared folders, and paper records with a consistent operational process.</p></div><div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.number}><span className="feature-number">{feature.number}</span><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div></div></section>
        <section id="hosting" className="section section-dark"><div className="shell hosting-grid"><div className="section-heading left"><p className="eyebrow eyebrow-light">Managed software package</p><h2>Software, hosting, updates, and support together.</h2><p>Auctrail is designed as a complete hosted service. Agencies receive the application, secure cloud hosting, updates, onboarding, documentation, and ongoing support without managing infrastructure internally.</p></div><aside className="package-card"><p className="package-label">Full-service package</p><h3>Ready for agency operations</h3><ul><li>Secure hosted Auctrail application</li><li>Agency branding and configuration</li><li>User and department setup</li><li>Data import assistance</li><li>Documentation and training materials</li><li>Ongoing updates and support</li></ul><a href="#contact" className="button button-full">Request Information</a></aside></div></section>
        <section id="workflow" className="section"><div className="shell workflow-grid"><div className="section-heading left"><p className="eyebrow">Operational workflow</p><h2>A clear record from receipt through closeout.</h2><p>Each case follows a traceable process, giving staff and administrators a shared view of status, responsibility, documents, and next actions.</p></div><ol className="process-list">{process.map(([number,title,description]) => <li key={number}><span>{number}</span><div><strong>{title}</strong><p>{description}</p></div></li>)}</ol></div></section>
        <section id="contact" className="cta"><div className="shell cta-inner"><div><p className="eyebrow" style={{color:"white"}}>Built for public service</p><h2>Bring your asset disposition process into one managed system.</h2></div><Link href="/support" className="button button-light">Contact Auctrail</Link></div></section>
      </main>
      <footer><div className="shell"><div className="footer-grid"><div><Link href="/" className="brand footer-brand"><span className="brand-mark">A</span><span>Auctrail</span></Link><p>Hosted asset disposition management software for intake, approvals, auctions, disposal, documentation, and reporting.</p></div><div><strong>Platform</strong><a href="#features">Features</a><a href="#workflow">Workflow</a><a href="#hosting">Hosting</a></div><div><strong>Resources</strong><Link href="/support">Support</Link></div></div><div className="copyright">© {new Date().getFullYear()} Auctrail. Asset Disposition Management.</div></div></footer>
    </>
  );
}
