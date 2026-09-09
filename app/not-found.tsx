import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="new-site">
      <SiteHeader />
      <section className="simple-hero error-hero">
        <div className="site-shell narrow">
          <span className="section-label">404</span>
          <h1>That page is no longer on the trail.</h1>
          <p>The page may have moved or been retired. Return to the Auctrail homepage or send us a product question.</p>
          <div className="button-row">
            <Link className="site-button" href="/">Return home</Link>
            <Link className="text-link" href="/contact">Contact Auctrail <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
