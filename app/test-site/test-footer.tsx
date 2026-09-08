import Image from "next/image";
import Link from "next/link";

export default function TestFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-main">
        <div>
          <Image src="/auctrail-logo-official.jpeg" alt="Auctrail" width={928} height={901} />
          <p>A clear path from surplus intake to completed sale.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/test-site">Product</Link>
          <Link href="/test-site/pricing">Pricing</Link>
          <Link href="/test-site/faq">FAQ</Link>
          <Link href="/test-site/contact">Contact</Link>
          <Link href="/test-site/demo">Request a demo</Link>
        </nav>
      </div>
      <div className="site-shell footer-bottom">
        <span>© {new Date().getFullYear()} Auctrail</span>
        <span>Asset Disposition Management</span>
      </div>
    </footer>
  );
}
