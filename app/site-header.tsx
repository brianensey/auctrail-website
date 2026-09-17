"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./header-dropdown.css";

const links = [
  ["Pricing", "/pricing"],
  ["FAQ", "/faq"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const productActive = pathname === "/" || pathname === "/recommended-equipment";

  return (
    <header className="site-header">
      <div className="site-shell site-nav">
        <Link className="brand" href="/" aria-label="Auctrail home" onClick={() => setOpen(false)}>
          <span className="brand-icon" aria-hidden="true">
            <Image src="/auctrail-logo-mark.png" alt="" width={512} height={512} priority />
          </span>
          <span className="brand-word">Auctrail</span>
        </Link>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(!open)}>
          <span /><span /><span /><span className="sr-only">Menu</span>
        </button>
        <div className={open ? "nav-panel open" : "nav-panel"} id="site-menu">
          <nav className="nav-links" aria-label="Main navigation">
            <details className={productActive ? "nav-product active" : "nav-product"}>
              <summary>Product</summary>
              <div className="nav-product-menu">
                <Link className={pathname === "/" ? "active" : ""} href="/#auction-workflow" onClick={() => setOpen(false)}>
                  Overview
                  <small>See the Auctrail workflow and product experience.</small>
                </Link>
                <Link className={pathname === "/recommended-equipment" ? "active" : ""} href="/recommended-equipment" onClick={() => setOpen(false)}>
                  Recommended Equipment
                  <small>Hardware and supplies that work well with Auctrail.</small>
                </Link>
              </div>
            </details>
            {links.map(([label, href]) => (
              <Link className={pathname === href ? "active" : ""} href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>
            ))}
          </nav>
          <Link className="site-button nav-cta" href="/demo" onClick={() => setOpen(false)}>Request demo</Link>
        </div>
      </div>
    </header>
  );
}
