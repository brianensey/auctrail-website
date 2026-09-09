import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Auctrail",
    short_name: "Auctrail",
    description: "Surplus asset disposition management from intake through completed pickup.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1b2a",
    theme_color: "#0d1b2a",
    icons: [
      {
        src: "/auctrail-logo-mark.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
