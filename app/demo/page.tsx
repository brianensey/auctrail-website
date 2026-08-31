import type { Metadata } from "next";
import MarketingHeader from "../marketing-header";
import DemoForm from "./demo-form";
import "./demo.css";

export const metadata: Metadata = {
  title: "Request a Demo",
  description: "Request an Auctrail demonstration for a public agency, business, nonprofit, or other organization evaluating surplus intake, sale preparation, tracking, payment, pickup, and completed-sale documentation.",
  alternates: { canonical: "https://auctrail.com/demo" },
};

export default function DemoPage() {
  return (
    <main className="marketing-site demo-page">
      <MarketingHeader />
      <section className="demo-hero">
        <div className="marketing-shell demo-layout">
          <div className="demo-copy">
            <p className="section-kicker">Request an Auctrail demo</p>
            <h1>See how Auctrail supports your organization’s surplus-sale workflow.</h1>
            <p>Feel free to look around with no pressure. If Auctrail looks useful for your organization, share your email and we’ll follow up. Everything else is optional, and we do not ask for your phone number.</p>
            <ul><li>Built for public agencies, businesses, nonprofits, and other organizations</li><li>Essential and Professional plan guidance</li><li>No phone number required and no high-pressure follow-up</li></ul>
          </div>
          <DemoForm />
        </div>
      </section>
    </main>
  );
}
