"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, type SyntheticEvent } from "react";

const previewBase = "/";

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18">
      <path d="M3.5 9h10M10 5.5 13.5 9 10 12.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18">
      <path d="M3 5h12M3 9h12M3 13h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

function NavCard({ href, number, title, description, onNavigate }: { href: string; number: string; title: string; description: string; onNavigate: () => void }) {
  return (
    <Link className="nav-panel-link" href={href} onClick={onNavigate}>
      <span className="nav-link-number">{number}</span>
      <span>
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
      <ArrowIcon />
    </Link>
  );
}

export default function MarketingHeader({ logoHref = "/" }: { logoHref?: string }) {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const currentPage = (href: string) => pathname === href;

  function closeAllMenus(except?: HTMLDetailsElement) {
    navRef.current?.querySelectorAll("details[open]").forEach((element) => {
      if (element !== except) (element as HTMLDetailsElement).open = false;
    });
  }

  function handleToggle(event: SyntheticEvent<HTMLDetailsElement>) {
    const details = event.currentTarget;
    if (details.open) closeAllMenus(details);
  }

  function handleNavigate() {
    closeAllMenus();
  }

  return (
    <header className="marketing-header" ref={navRef}>
      <div className="marketing-shell header-inner">
        <Link className="header-logo" href={logoHref} aria-label="Auctrail home" onClick={handleNavigate}>
          <img src="/auctrail-logo-approved.jpg" alt="Auctrail — Asset Disposition Management" width="425" height="115" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <details className="desktop-nav-menu" onToggle={handleToggle}>
            <summary>Product <ChevronIcon /></summary>
            <div className="desktop-nav-panel nav-panel-wide">
              <div className="nav-panel-intro">
                <span>Product</span>
                <strong>One controlled record for every surplus sale.</strong>
                <p>See how Auctrail connects intake, approvals, sale preparation, payment, pickup, and closeout.</p>
              </div>
              <div className="nav-panel-links">
                <NavCard href={`${previewBase}#platform`} number="01" title="Platform overview" description="The complete sale record and core capabilities." onNavigate={handleNavigate} />
                <NavCard href={`${previewBase}#workflow`} number="02" title="Workflow" description="A clear path from receipt through closeout." onNavigate={handleNavigate} />
                <NavCard href={`${previewBase}#operations`} number="03" title="Reporting and records" description="Operational reporting, exports, and completed history." onNavigate={handleNavigate} />
                <NavCard href={`${previewBase}#integrations`} number="04" title="Photos and auction prep" description="Photo ordering, image ZIPs, documents, and sales outputs." onNavigate={handleNavigate} />
              </div>
            </div>
          </details>

          <details className="desktop-nav-menu" onToggle={handleToggle}>
            <summary>Industries <ChevronIcon /></summary>
            <div className="desktop-nav-panel nav-panel-medium">
              <div className="nav-panel-intro">
                <span>Who Auctrail serves</span>
                <strong>Built for organizations across industries.</strong>
                <p>The same accountable disposition process works across public, commercial, nonprofit, and institutional operations.</p>
              </div>
              <div className="nav-panel-links nav-panel-links-compact">
                <NavCard href={`${previewBase}#industries`} number="01" title="Public agencies" description="Cities, counties, authorities, and districts." onNavigate={handleNavigate} />
                <NavCard href={`${previewBase}#industries`} number="02" title="Business and industry" description="Commercial, fleet, manufacturing, and field operations." onNavigate={handleNavigate} />
                <NavCard href={`${previewBase}#industries`} number="03" title="Nonprofits and institutions" description="Education, healthcare, charities, and community organizations." onNavigate={handleNavigate} />
                <NavCard href={`${previewBase}#industries`} number="04" title="Multi-location teams" description="One process across departments, facilities, and regions." onNavigate={handleNavigate} />
              </div>
            </div>
          </details>

          <Link href="/plans" aria-current={currentPage("/plans") ? "page" : undefined} onClick={handleNavigate}>Pricing</Link>

          <details className="desktop-nav-menu" onToggle={handleToggle}>
            <summary>Resources <ChevronIcon /></summary>
            <div className="desktop-nav-panel nav-panel-compact">
              <div className="nav-panel-resource-links">
                <Link href="/faq" onClick={handleNavigate}><strong>Frequently asked questions</strong><small>Product, development status, records, exports, and support.</small></Link>
                <Link href="/organization-setup" onClick={handleNavigate}><strong>Organization setup</strong><small>Prepare users, teams, data, and workflows.</small></Link>
                <Link href="/support" onClick={handleNavigate}><strong>Support center</strong><small>Client access, documentation, and help.</small></Link>
                <Link href="/technical-support" onClick={handleNavigate}><strong>Technical support</strong><small>Application, access, labels, and export issues.</small></Link>
              </div>
            </div>
          </details>
        </nav>

        <div className="header-actions">
          <a className="text-link" href="https://app.auctrail.com/login" onClick={handleNavigate}>Client login</a>
          <Link className="button button-primary button-compact" href="/demo" aria-current={currentPage("/demo") ? "page" : undefined} onClick={handleNavigate}>Request demo</Link>
        </div>

        <details className="mobile-nav" onToggle={handleToggle}>
          <summary aria-label="Open navigation"><MenuIcon /><span>Menu</span></summary>
          <div className="mobile-nav-panel">
            <div className="mobile-nav-section">
              <strong>Product</strong>
              <Link href={`${previewBase}#platform`} onClick={handleNavigate}>Platform overview</Link>
              <Link href={`${previewBase}#workflow`} onClick={handleNavigate}>How it works</Link>
              <Link href={`${previewBase}#operations`} onClick={handleNavigate}>Reporting and records</Link>
              <Link href={`${previewBase}#integrations`} onClick={handleNavigate}>Photos and auction prep</Link>
            </div>
            <div className="mobile-nav-section">
              <strong>Explore</strong>
              <Link href={`${previewBase}#industries`} onClick={handleNavigate}>Industries</Link>
              <Link href="/plans" aria-current={currentPage("/plans") ? "page" : undefined} onClick={handleNavigate}>Pricing</Link>
              <Link href="/faq" aria-current={currentPage("/faq") ? "page" : undefined} onClick={handleNavigate}>FAQ</Link>
              <Link href="/organization-setup" onClick={handleNavigate}>Organization setup</Link>
              <Link href="/support" aria-current={currentPage("/support") ? "page" : undefined} onClick={handleNavigate}>Support center</Link>
            </div>
            <div className="mobile-nav-actions">
              <a className="button button-secondary" href="https://app.auctrail.com/login" onClick={handleNavigate}>Client login</a>
              <Link className="button button-primary" href="/demo" aria-current={currentPage("/demo") ? "page" : undefined} onClick={handleNavigate}>Request demo</Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
