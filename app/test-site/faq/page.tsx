import type { Metadata } from "next";
import Link from "next/link";
import TestFooter from "../test-footer";
import TestHeader from "../test-header";

export const metadata: Metadata = {
  title: "FAQ — Auctrail",
  description: "Answers to common questions about Auctrail and surplus asset disposition.",
  alternates: { canonical: "https://auctrail.com/faq" },
  robots: { index: true, follow: true },
};

const questions = [
  ["What is Auctrail?", "Auctrail is a hosted asset disposition platform that connects surplus intake, review, sale preparation, results, payment, pickup, documents, and completed history."],
  ["Who is it designed for?", "Auctrail is being built for public agencies, businesses, nonprofits, schools, healthcare organizations, and other teams responsible for surplus property."],
  ["Is Auctrail an auction marketplace?", "No. Auctrail manages your organization’s internal disposition workflow and prepares information for supported sales channels."],
  ["Does Auctrail support photos and documents?", "Yes. Photos, approvals, titles, receipts, payment proof, pickup documentation, and other supporting files can stay with the record."],
  ["Will Auctrail integrate with eBay?", "We are working toward integration with eBay and other auction sites. Planned integrations will help reduce duplicate entry by moving approved asset details, photos, and listing information from Auctrail into supported sales channels."],
  ["Is there an iPad experience?", "An iPad experience is being designed for field intake, asset lookup, case review, photos, and record updates."],
  ["Is pricing available?", "Not yet. Auctrail is still in active development, and final launch pricing will be published when plans and included services are ready."],
  ["Can I try the product?", "Yes. Use the demo request form to request temporary access to the current Auctrail demo environment."],
];

export default function FaqPage() {
  return (
    <main className="new-site">
      <TestHeader />
      <section className="simple-hero">
        <div className="site-shell narrow">
          <span className="section-label">Frequently asked questions</span>
          <h1>Helpful answers, without the runaround.</h1>
          <p>Learn what Auctrail does, who it serves, and where the product stands today.</p>
        </div>
      </section>
      <section className="section faq-section">
        <div className="site-shell narrow faq-list">
          {questions.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span aria-hidden="true">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
          <div className="inline-cta">
            <div><strong>Still have a question?</strong><p>Send us a note through the information form.</p></div>
            <Link className="site-button secondary-button" href="/contact">Contact Auctrail</Link>
          </div>
        </div>
      </section>
      <TestFooter />
    </main>
  );
}
