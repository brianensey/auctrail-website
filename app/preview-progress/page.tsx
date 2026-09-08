import type { Metadata } from "next";
import SitePreview from "../site-preview";

export const metadata: Metadata = {
  title: "Auctrail Platform",
  description: "See the current Auctrail web application and asset disposition workflow using real staging screenshots.",
  robots: { index: false, follow: true },
};

export default SitePreview;
