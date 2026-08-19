import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";

export const metadata: Metadata = {
  title: {
    default: "Auctrail | Government Surplus Sales Software",
    template: "%s | Auctrail",
  },
  description:
    "Auctrail is government surplus sales software for agencies preparing property for auction, organizing sale records, tracking listings, documenting pickup and payment, and preserving completed sale history.",
  keywords: [
    "government surplus sales software",
    "municipal surplus sales",
    "government surplus property software",
    "surplus auction management",
    "public agency surplus sales",
    "GovDeals export software",
  ],
  alternates: {
    canonical: "https://auctrail.com",
  },
  openGraph: {
    title: "Auctrail | Government Surplus Sales Software",
    description:
      "One clear system for government surplus property from sale intake and auction preparation through payment, pickup, and completed sale history.",
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
