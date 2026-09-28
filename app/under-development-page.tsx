import type { Metadata } from "next";
import Image from "next/image";
import "./under-development.css";

export const metadata: Metadata = {
  title: { absolute: "Under Development | Auctrail" },
  description: "Auctrail is currently under development.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Under Development | Auctrail",
    description: "Auctrail is currently under development.",
    url: "/",
  },
  twitter: {
    title: "Under Development | Auctrail",
    description: "Auctrail is currently under development.",
  },
};

export default function UnderDevelopmentPage() {
  return (
    <main className="under-development-page">
      <div className="under-development-content">
        <div className="under-development-brand">
          <Image src="/auctrail-logo-mark.png" alt="" width={512} height={512} priority />
          <span>Auctrail</span>
        </div>
        <div className="under-development-rule" aria-hidden="true" />
        <h1>Auctrail is currently under development.</h1>
      </div>
    </main>
  );
}
