import type { Metadata } from "next";
import Link from "next/link";
import TestFooter from "../test-footer";
import TestHeader from "../test-header";

export const metadata: Metadata = { title: "FAQ — Auctrail Test Site", robots: { index: false, follow: false } };
const questions = [
  ["What is Auctrail?", "Auctrail is a hosted asset disposition platform that keeps surplus intake, preparation, sale results, payment, pickup, documents, and completed history connected."],
  ["Who is Auctrail for?", "It is designed for public agencies, businesses, nonprofits, schools, healthcare organizations, and other teams responsible for surplus property."],
  ["Is Auctrail an auction marketplace?", "No. Auctrail manages the organization’s internal disposition workflow and prepares information for approved sales channels."],
  ["Can we use it with GovDeals?", "Auctrail can prepare compatible export information. GovDeals Bulk Asset Upload must be enabled on the organization’s authorized account."],
  ["Does it support photos and documents?", "Yes. Photos, approvals, titles, receipts, payment proof, pickup documentation, and other supporting files stay with the record."],
  ["Will there be an iPad app?", "A native iPad experience is planned for field intake, asset lookup, photos, and record updates."],
  ["Is pricing final?", "No. Auctrail is still in active development and final launch pricing has not been published."],
];
export default function TestFaqPage(){return <main className="test-site"><TestHeader/><section className="test-page-hero"><div className="test-shell"><p className="test-kicker">Frequently asked questions</p><h1>Quick answers about Auctrail.</h1><p>What the platform does, who it serves, and how it fits into a surplus-sale workflow.</p></div></section><section className="test-section"><div className="test-shell faq-list">{questions.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}<div className="test-actions"><Link className="test-button" href="/test-site/contact">Still have a question?</Link></div></div></section><TestFooter/></main>}
