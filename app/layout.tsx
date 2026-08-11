import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";

export const metadata: Metadata = {
  title: {
    default: "Auctrail | Asset Disposition Management",
    template: "%s | Auctrail",
  },
  description:
    "Auctrail is managed asset disposition software for government property intake, approvals, auctions, disposal, documentation, and reporting.",
  keywords: [
    "asset disposition management",
    "municipal surplus management",
    "government surplus software",
    "public agency asset tracking",
    "surplus property management",
  ],
  alternates: {
    canonical: "https://auctrail.com",
  },
  openGraph: {
    title: "Auctrail | Asset Disposition Management",
    description:
      "One clear system for government property intake, approvals, auctions, disposal, documentation, and reporting.",
    url: "https://auctrail.com",
    siteName: "Auctrail",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
