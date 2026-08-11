import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auctrail | Asset Disposition Management",
  description:
    "Auctrail is a managed asset disposition platform for government agencies, covering property intake, approvals, documentation, auctions, disposal, and reporting.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
