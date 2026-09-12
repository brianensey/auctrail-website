"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["Product", "/#auction-workflow"],
  ["Pricing", "/pricing"],
  ["FAQ", "/faq"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
            {links.map(([label, href]) => (
              <Link className={label === "Product" ? (pathname === "/" ? "active" : "") : (pathname === href ? "active" : "")} href={href} key={href} onClick={(event) => { setOpen(false); if (label === "Product") { event.preventDefault(); window.location.assign(href); } }}>{label}</Link>
            ))}
          </nav>
          <Link className="site-button nav-cta" href="/demo" onClick={() => setOpen(false)}>Request demo</Link>
        </div>
      </div>
    </header>
  );
}
