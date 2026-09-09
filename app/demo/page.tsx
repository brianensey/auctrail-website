import type { Metadata } from "next";
import Image from "next/image";
import DemoRequestForm from "./demo-request-form";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: { absolute: "Request an Auctrail Demo | Surplus Asset Software" },
  description: "Request temporary access to explore the current Auctrail surplus asset disposition software demo with sample data and no high-pressure follow-up.",
  alternates: { canonical: "/demo/" },
  openGraph: { url: "/demo/", title: "Request an Auctrail Product Demo", images: [{ url: "/auctrail-logo-mark.png", width: 512, height: 512, alt: "Auctrail" }] },
};

export default function DemoPage() {
  return (
    <main className="new-site">
      <SiteHeader />
      <section className="form-page">
        <div className="site-shell form-layout">
          <div className="form-intro">
            <span className="section-label">Request a demo</span>
            <h1>Explore Auctrail on your own time.</h1>
            <p>Request temporary access to the current demo environment. We’ll send Administrator and Regular User access to your email.</p>
            <ul className="form-benefits">
              <li>72 hours to explore</li>
              <li>Sample data resets every 24 hours</li>
              <li>No phone number and no high-pressure follow-up</li>
            </ul>
            <div className="mini-screen">
              <Image src="/screenshots/iPad/cases.webp" alt="Auctrail cases on iPad" width={2160} height={1620} />
            </div>
          </div>
          <DemoRequestForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
