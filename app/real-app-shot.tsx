import type { CSSProperties } from "react";

const images: Record<string, { width: number; height: number }> = {
  "dashboard.webp": { width: 1000, height: 506 },
  "assets.webp": { width: 1000, height: 465 },
  "cases-list.webp": { width: 1000, height: 465 },
  "reports.webp": { width: 1000, height: 506 },
  "administration.webp": { width: 1000, height: 465 },
};

const previousSources: Record<string, string> = {
  "/screenshots/dashboard.svg": "dashboard.webp",
  "/screenshots/assets.svg": "assets.webp",
  "/screenshots/cases.svg": "cases-list.webp",
  "/screenshots/reports.svg": "reports.webp",
  "/screenshots/administration.svg": "administration.webp",
};

function normalizeFilename(src: string) {
  const mapped = previousSources[src] ?? src.replace(/^\/screenshots\/approved\//, "");
  return mapped.replace(/\.png$/i, ".webp");
}

export default function RealAppShot({ src, alt, caption, priority = false, compact = false, onDark = false }: {
  src: string; alt: string; caption: string; priority?: boolean; compact?: boolean; onDark?: boolean;
}) {
  if (src === "/screenshots/case-detail.svg" || src === "/screenshots/photos-download.svg") return null;
  const filename = normalizeFilename(src);
  const dimensions = images[filename];
  if (!dimensions) return null;
  const url = `/screenshots/approved/${filename}`;
  const frame: CSSProperties = {
    display: "block",
    overflow: "hidden",
    border: "1px solid #dbe3ea",
    borderRadius: 12,
    background: "#fff",
    boxShadow: "0 12px 32px rgba(13,27,42,.09)",
  };

  return (
    <figure style={{ margin: compact ? 0 : "28px auto 0", width: "100%", maxWidth: 760, minWidth: 0 }}>
      <a href={url} target="_blank" rel="noopener noreferrer" style={frame} aria-label={`Open full-size screenshot: ${caption}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={url}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          style={{ display: "block", width: "100%", height: "auto", objectFit: "contain" }}
        />
      </a>
      <figcaption style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 8, marginTop: 10, color: onDark ? "#d8e2ed" : "#64748b", fontSize: 12, lineHeight: 1.5 }}>
        <strong style={{ color: onDark ? "#fff" : "#0d1b2a" }}>{caption}</strong>
        <span>Click image to view full size</span>
      </figcaption>
    </figure>
  );
}
