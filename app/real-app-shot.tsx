export default function RealAppShot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure style={{ margin: "34px auto 0", width: "100%", maxWidth: 1120 }}>
      <div
        style={{
          overflow: "hidden",
          border: "1px solid #dbe3ea",
          borderRadius: 16,
          background: "#f7f9fb",
          boxShadow: "0 18px 50px rgba(13, 27, 42, 0.10)",
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </div>
      <figcaption
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 8,
          marginTop: 10,
          color: "#64748b",
          fontSize: 12,
          lineHeight: 1.5,
        }}
      >
        <strong style={{ color: "#0d1b2a" }}>{caption}</strong>
        <span>Actual Auctrail staging interface</span>
      </figcaption>
    </figure>
  );
}
