import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://www.auctrail.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/pricing/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/faq/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contact/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/about/`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/privacy/`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
