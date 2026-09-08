import type { Metadata } from "next";
import Image from "next/image";
import DemoRequestForm from "./demo-request-form";
import TestFooter from "../test-footer";
import TestHeader from "../test-header";

export const metadata: Metadata = {
  title: "Request a Demo — Auctrail",
  description: "Request temporary access to the current Auctrail product demo.",
  alternates: { canonical: "https://auctrail.com/demo" },
  robots: { index: true, follow: true },
};

export default function DemoPage() {
  return (
    <main className="new-site">
      <TestHeader />
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
      <TestFooter />
    </main>
  );
}
