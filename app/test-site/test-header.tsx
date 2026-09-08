import Link from "next/link";

export default function TestHeader() {
  return <header className="test-header"><div className="test-shell test-nav">
    <Link className="test-logo" href="/test-site" aria-label="Auctrail test site home"><img src="/auctrail-logo-approved.jpg" alt="Auctrail" width="425" height="115" /></Link>
    <nav className="test-links" aria-label="Test site navigation"><Link href="/test-site">Product</Link><Link href="/test-site/faq">FAQ</Link><Link href="/test-site/contact">Contact</Link></nav>
    <Link className="test-button" href="/test-site/contact">Talk to us</Link>
  </div></header>;
}
