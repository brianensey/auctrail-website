import type { CSSProperties } from "react";

const images: Record<string, { width: number; height: number }> = {
  "dashboard.png": { width: 2688, height: 1360 },
  "assets.png": { width: 2924, height: 1360 },
  "cases-list.png": { width: 2924, height: 1360 },
  "intake.png": { width: 2924, height: 1360 },
  "disposition.png": { width: 2924, height: 1360 },
  "reports.png": { width: 2688, height: 1360 },
  "administration.png": { width: 2924, height: 1360 },
  "branding.png": { width: 2688, height: 1360 },
  "pickup-deadline.png": { width: 2688, height: 1360 },
  "import-history.png": { width: 2688, height: 1360 },
  "qr-label.png": { width: 1200, height: 900 },
};

const previousSources: Record<string, string> = {
  "/screenshots/dashboard.svg": "dashboard.png",
  "/screenshots/assets.svg": "assets.png",
  "/screenshots/cases.svg": "cases-list.png",
  "/screenshots/reports.svg": "reports.png",
  "/screenshots/administration.svg": "administration.png",
};

export default function RealAppShot({ src, alt, caption, priority = false, compact = false, onDark = false }: {
  src: string; alt: string; caption: string; priority?: boolean; compact?: boolean; onDark?: boolean;
}) {
  // Do not substitute an unrelated approved image for an unapproved detail/photo capture.
  if (src === "/screenshots/case-detail.svg" || src === "/screenshots/photos-download.svg") return null;
  const filename = previousSources[src] ?? src.replace(/^\/screenshots\/approved\//, "");
  const dimensions = images[filename];
  if (!dimensions) throw new Error(`Unapproved product screenshot: ${src}`);
  const url = `/screenshots/approved/${filename}`;
  const frame: CSSProperties = { display: "block", overflow: "hidden", border: "1px solid #dbe3ea", borderRadius: 12, background: "#fff", boxShadow: "0 12px 32px rgba(13,27,42,.09)" };
  return (
    <figure style={{ margin: compact ? 0 : "28px auto 0", width: "100%", maxWidth: filename === "qr-label.png" ? 560 : 1120, minWidth: 0 }}>
      <a href={url} target="_blank" rel="noopener noreferrer" style={frame} aria-label={`Open full-size screenshot: ${caption}`}>
        {/* Preserve original PNG pixels and aspect ratio instead of enlarging a compressed thumbnail. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={url} alt={alt} width={dimensions.width} height={dimensions.height}
          loading={priority ? "eager" : "lazy"} decoding="async" fetchPriority={priority ? "high" : "auto"}
          style={{ display: "block", width: "100%", maxWidth: "100%", height: "auto", maxHeight: "none", objectFit: "contain" }} />
      </a>
      <figcaption style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 8, marginTop: 10, color: onDark ? "#d8e2ed" : "#64748b", fontSize: 12, lineHeight: 1.5 }}>
        <strong style={{ color: onDark ? "#fff" : "#0d1b2a" }}>{caption}</strong>
        <span>Click image to view full size</span>
      </figcaption>
    </figure>
  );
}
