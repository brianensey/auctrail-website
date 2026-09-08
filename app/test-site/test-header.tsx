"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["Product", "/test-site"],
  ["Pricing", "/test-site/pricing"],
  ["FAQ", "/test-site/faq"],
  ["Contact", "/test-site/contact"],
];

export default function TestHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-shell site-nav">
        <Link className="brand" href="/test-site" aria-label="Auctrail home" onClick={() => setOpen(false)}>
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
              <Link className={pathname === href ? "active" : ""} href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>
            ))}
          </nav>
          <Link className="site-button nav-cta" href="/test-site/demo" onClick={() => setOpen(false)}>Request a demo</Link>
        </div>
      </div>
    </header>
  );
}
