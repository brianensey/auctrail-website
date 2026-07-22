export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "32px",
        background:
          "radial-gradient(circle at 75% 20%, rgba(23,105,224,.14), transparent 30%), linear-gradient(180deg, #f7faff 0%, #ffffff 100%)",
      }}
    >
      <section
        style={{
          width: "min(720px, 100%)",
          textAlign: "center",
        }}
      >
        <div
          aria-label="CivicSurplus"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "14px",
            color: "#071b33",
            fontSize: "24px",
            fontWeight: 800,
            letterSpacing: "-.04em",
          }}
        >
          <span
            style={{
              display: "grid",
              placeItems: "center",
              width: "52px",
              height: "52px",
              background: "#1769e0",
              color: "white",
              fontSize: "16px",
              letterSpacing: "-.02em",
            }}
          >
            CS
          </span>
          <span>CivicSurplus</span>
        </div>

        <p
          style={{
            margin: "56px 0 18px",
            color: "#1769e0",
            fontSize: "12px",
            fontWeight: 850,
            letterSpacing: ".16em",
            textTransform: "uppercase",
          }}
        >
          Municipal surplus management
        </p>

        <h1
          style={{
            margin: 0,
            color: "#071b33",
            fontSize: "clamp(48px, 9vw, 82px)",
            lineHeight: ".98",
            letterSpacing: "-.065em",
          }}
        >
          In development.
        </h1>

        <p
          style={{
            maxWidth: "580px",
            margin: "28px auto 0",
            color: "#5d6b7a",
            fontSize: "18px",
            lineHeight: 1.7,
          }}
        >
          CivicSurplus is building a modern platform for public agencies to manage surplus property, documentation, disposal, and auctions.
        </p>

        <div
          style={{
            width: "72px",
            height: "3px",
            margin: "46px auto 0",
            background: "#1769e0",
          }}
        />
      </section>
    </main>
  );
}
