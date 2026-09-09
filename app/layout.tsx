import type { Metadata } from "next";
import "./globals.css";
import "./site.css";

const siteUrl = "https://www.auctrail.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Surplus Asset Disposition Software | Auctrail",
    template: "%s | Auctrail",
  },
  description:
    "Auctrail organizes surplus property from intake and review through sale preparation, payment, pickup, and completed history for public agencies, businesses, nonprofits, and institutions.",
  applicationName: "Auctrail",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/auctrail-logo-mark.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/auctrail-logo-mark.png", type: "image/png", sizes: "512x512" }],
  },
  openGraph: {
    title: "Surplus Asset Disposition Software | Auctrail",
    description:
      "One clear, accountable trail from surplus intake and sale preparation through payment, pickup, and completed history.",
    url: siteUrl,
    siteName: "Auctrail",
    locale: "en_US",
    type: "website",
    images: [{ url: "/auctrail-logo-mark.png", width: 512, height: 512, alt: "Auctrail" }],
  },
  twitter: {
    card: "summary",
    title: "Surplus Asset Disposition Software | Auctrail",
    description: "One clear, accountable trail from surplus intake through completed pickup.",
    images: ["/auctrail-logo-mark.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
