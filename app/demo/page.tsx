import type { Metadata } from "next";
import MarketingHeader from "../marketing-header";
import DemoForm from "./demo-form";
import "./demo.css";

export const metadata: Metadata = {
  title: "Request a Demo",
  description: "Request an Auctrail demonstration for a government agency evaluating surplus intake, auction preparation, sale tracking, payment, pickup, and completed-sale documentation.",
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
            <h1>See how Auctrail supports your government surplus-sale workflow.</h1>
            <p>Tell us a little about your agency and current process. We’ll use that context to focus the conversation on surplus intake, auction preparation, sale tracking, payment, pickup, and completed-sale documentation.</p>
            <ul><li>Built specifically for government surplus sales</li><li>Essential and Professional plan guidance</li><li>No obligation or unnecessary personal information</li></ul>
          </div>
          <DemoForm />
        </div>
      </section>
    </main>
  );
}
