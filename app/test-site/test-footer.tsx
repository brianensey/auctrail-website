import Image from "next/image";
import Link from "next/link";

export default function TestFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-main">
        <div>
          <div className="footer-brand" aria-label="Auctrail">
            <span className="brand-icon" aria-hidden="true">
              <Image src="/auctrail-logo-mark.png" alt="" width={512} height={512} />
            </span>
            <span className="brand-word">Auctrail</span>
          </div>
          <p>A clear path from surplus intake to completed sale.</p>
        </div>
        <nav aria-label="Footer navigation">
          {/* A native anchor guarantees the workflow hash loads from every route. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/#auction-workflow">Product</a>
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/demo">Request a demo</Link>
        </nav>
      </div>
      <div className="site-shell footer-bottom">
        <span>© {new Date().getFullYear()} Auctrail</span>
        <span>Asset Disposition Management</span>
      </div>
    </footer>
  );
}
