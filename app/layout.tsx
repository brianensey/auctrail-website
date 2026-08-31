import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";

export const metadata: Metadata = {
  title: {
    default: "Auctrail | Surplus Asset Disposition Software",
    template: "%s | Auctrail",
  },
  description:
    "Auctrail is surplus asset disposition software for public agencies, businesses, nonprofits, and other organizations preparing property for sale, organizing records, tracking listings, documenting payment and pickup, and preserving completed sale history.",
  keywords: [
    "surplus asset disposition software",
    "surplus sales management software",
    "business surplus asset software",
    "nonprofit surplus property software",
    "government surplus sales software",
    "surplus auction management",
    "GovDeals export software",
  ],
  alternates: {
    canonical: "https://auctrail.com",
  },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Auctrail | Surplus Asset Disposition Software",
    description:
      "One clear system for public agencies, businesses, nonprofits, and other organizations managing surplus property from intake and sale preparation through payment, pickup, and completed sale history.",
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
