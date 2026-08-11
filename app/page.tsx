import Link from "next/link";

const highlights = [
  ["▣", "Streamlined Workflow", "Manage every step of the surplus process in one intuitive platform."],
  ["◆", "Maximize Value", "Reach more buyers and get the best return on your assets."],
  ["▥", "Data & Reporting", "Powerful reports and insights for better decisions."],
  ["◇", "Transparency & Trust", "Build public confidence with clear, accessible asset information."],
  ["⚙", "Easy to Use", "Designed for municipalities and built for real-world use."],
];

export default function HomePage() {
  return <main className="ref-site">
    <header className="ref-header"><div className="ref-wide ref-nav">
      <Link href="/" className="ref-logo" aria-label="Auctrail home"><span className="ref-logo-ring"><span className="ref-logo-a">A</span><span className="ref-logo-road">➚</span></span><span className="ref-wordmark"><b><span>Auc</span><i>trail</i></b><small>ASSET DISPOSITION MANAGEMENT</small></span></Link>
      <nav className="ref-links"><a className="active" href="#home">Home</a><a href="#platform">Platform⌄</a><a href="#features">Features⌄</a><a href="#how">How It Works</a><a href="#hosting">Hosting</a><a href="#about">About Us</a><a href="#resources">Resources⌄</a><a href="#contact">Contact</a></nav>
      <a className="ref-login" href="https://app.auctrail.com/login">▢ &nbsp; CLIENT LOGIN</a>
    </div></header>

    <section id="home" className="ref-hero"><div className="ref-wide ref-hero-grid">
      <div className="ref-hero-copy"><h1>Smarter Surplus.<br/><span>Stronger Communities.</span></h1><p>Auctrail helps municipalities and organizations efficiently manage surplus assets from intake to disposition. Increase transparency, maximize value, and build public trust—all in one platform.</p><div className="ref-actions"><a className="ref-primary" href="#contact">REQUEST A DEMO <b>→</b></a><a className="ref-secondary" href="#features">EXPLORE FEATURES <b>→</b></a></div></div>
      <div className="ref-devices" aria-label="Auctrail application preview"><div className="ref-laptop"><div className="ref-screen"><div className="ref-app-side"><strong>◉ Auctrail</strong><span className="selected">⌂ Dashboard</span><span>▣ Cases</span><span>◆ Assets</span><span>⚒ Auctions</span><span>▥ Reports</span><span>⚙ Administration</span></div><div className="ref-app-main"><div className="ref-app-top"><b>Welcome back, Administration</b><small>City of Example⌄</small></div><div className="ref-metrics"><article><small>Open Cases</small><b>24</b></article><article><small>Assets</small><b>1,248</b></article><article><small>Auctions</small><b>12</b></article><article><small>Sold This Month</small><b>$45,680</b></article></div><div className="ref-app-panels"><article><b>Recent Activity</b><p>Case #24-1035 created</p><p>Asset 100245 updated</p><p>Auction #A-25-009 published</p><p>Invoice #INV-1001 paid</p></article><article><b>Assets by Status</b><div className="ref-donut"></div><p>Available &nbsp; 642</p><p>Auction &nbsp; 128</p><p>Sold &nbsp; 356</p></article></div></div></div></div><div className="ref-phone"><div className="ref-phone-logo">◉ <b>Auc<span>trail</span></b></div><div className="ref-phone-grid"><b>▣<small>Cases</small></b><b>◆<small>Assets</small></b><b>⚒<small>Auctions</small></b><b>▥<small>Reports</small></b></div><strong>▣ &nbsp; Scan QR</strong></div></div>
    </div></section>

    <section id="features" className="ref-feature-strip"><div className="ref-wide ref-feature-grid">{highlights.map(([icon,title,text])=><article key={title}><span>{icon}</span><div><b>{title}</b><p>{text}</p></div></article>)}</div></section>

    <section id="platform" className="ref-municipal"><div className="ref-wide ref-muni-grid"><div className="ref-muni-copy"><small>BUILT FOR MUNICIPALITIES</small><h2>Complete Asset Disposition<br/>Management</h2><p>Auctrail provides the tools you need to manage assets efficiently and responsibly.</p><div className="ref-checks"><span>● &nbsp; Intake & asset tracking</span><span>● &nbsp; Public portal for buyers</span><span>● &nbsp; Auction management</span><span>● &nbsp; Reporting & audit history</span></div><a href="#features">VIEW ALL FEATURES &nbsp; →</a></div><div className="ref-city"><div className="ref-city-sky"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div><div className="ref-stat-grid"><article><b>▥ &nbsp; 500+</b><small>Municipalities</small></article><article><b>⚒ &nbsp; 250K+</b><small>Assets Managed</small></article><article><b>◎ &nbsp; 1M+</b><small>Auction Participants</small></article><article><b>ⓢ &nbsp; $250M+</b><small>Assets Sold</small></article></div></div></div></section>

    <section id="contact" className="ref-bottom"><div className="ref-wide"><div><span>◉</span><p><b>Ready to see Auctrail in action?</b><small>Our team is here to help you get started.</small></p></div><Link href="/support">CONTACT US TODAY &nbsp; →</Link></div></section>
  </main>;
}
