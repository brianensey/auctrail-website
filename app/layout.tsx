import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CivicSurplus | Municipal Surplus Management",
  description:
    "A managed municipal surplus platform for intake, approvals, documentation, auctions, disposal, and reporting.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
