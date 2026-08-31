"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const previewBase = "/preview-progress/";

export default function MarketingHeader({ logoHref = "/" }: { logoHref?: string }) {
  const pathname = usePathname();
  const currentPage = (href: string) => pathname === href;

  return (
    <header className="marketing-header">
      <div className="marketing-shell header-inner">
        <Link className="header-logo" href={logoHref} aria-label="Auctrail home">
          <img src="/auctrail-logo-approved.jpg" alt="Auctrail — Surplus Asset Disposition Software" width="425" height="115" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <details className="desktop-nav-menu">
            <summary>Product</summary>
            <div className="desktop-nav-panel">
              <Link href={`${previewBase}#platform`}>Platform capabilities</Link>
              <Link href={`${previewBase}#integrations`}>Integrations</Link>
            </div>
          </details>
          <Link href={`${previewBase}#workflow`}>How It Works</Link>
          <Link href="/plans" aria-current={currentPage("/plans") ? "page" : undefined}>Pricing</Link>
          <details className="desktop-nav-menu">
            <summary>Resources</summary>
            <div className="desktop-nav-panel">
              <Link href="/faq" aria-current={currentPage("/faq") ? "page" : undefined}>FAQ</Link>
              <Link href="/support" aria-current={currentPage("/support") ? "page" : undefined}>Support</Link>
            </div>
          </details>
        </nav>

        <div className="header-actions">
          <a className="text-link" href="https://app.auctrail.com/login">Client Login</a>
          <Link className="button button-primary button-compact" href="/demo" aria-current={currentPage("/demo") ? "page" : undefined}>Request Demo</Link>
        </div>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <div className="mobile-nav-panel">
            <strong>Product</strong>
            <Link href={`${previewBase}#platform`}>Platform capabilities</Link>
            <Link href={`${previewBase}#integrations`}>Integrations</Link>
            <Link className="mobile-nav-primary" href={`${previewBase}#workflow`}>How It Works</Link>
            <Link className="mobile-nav-primary" href="/plans" aria-current={currentPage("/plans") ? "page" : undefined}>Pricing</Link>
            <strong>Resources</strong>
            <Link href="/faq" aria-current={currentPage("/faq") ? "page" : undefined}>FAQ</Link>
            <Link href="/support" aria-current={currentPage("/support") ? "page" : undefined}>Support</Link>
            <a className="mobile-client-login" href="https://app.auctrail.com/login">Client Login</a>
            <Link className="mobile-request-demo" href="/demo" aria-current={currentPage("/demo") ? "page" : undefined}>Request Demo</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
