export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "32px",
        overflow: "hidden",
        color: "white",
        background:
          "radial-gradient(circle at 82% 18%, rgba(102,149,65,.28), transparent 26%), linear-gradient(125deg, #081a2d 0%, #0c1f36 52%, #173b5d 100%)",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: "auto -10vw -32vh auto",
          width: "62vw",
          height: "62vw",
          border: "1px solid rgba(255,255,255,.09)",
          transform: "rotate(-16deg)",
        }}
      />

      <section
        style={{
          position: "relative",
          width: "min(980px, 100%)",
          borderTop: "6px solid #669541",
          padding: "clamp(32px, 7vw, 78px)",
          background: "rgba(12,31,54,.84)",
          boxShadow: "0 34px 90px rgba(0,0,0,.30)",
          backdropFilter: "blur(8px)",
        }}
      >
        <img
          src="/auctrail-logo.svg"
          alt="Auctrail — Asset Disposition Management"
          style={{
            display: "block",
            width: "min(560px, 100%)",
            height: "auto",
            background: "white",
            padding: "10px 14px",
          }}
        />

        <p
          style={{
            margin: "clamp(48px, 8vw, 86px) 0 18px",
            color: "#c7dfa9",
            fontSize: "12px",
            fontWeight: 900,
            letterSpacing: ".18em",
            textTransform: "uppercase",
          }}
        >
          Asset disposition management
        </p>

        <h1
          style={{
            maxWidth: "850px",
            margin: 0,
            color: "white",
            fontSize: "clamp(48px, 9vw, 92px)",
            lineHeight: ".94",
            letterSpacing: "-.06em",
            textTransform: "uppercase",
          }}
        >
          Built for public service.
        </h1>

        <p
          style={{
            maxWidth: "680px",
            margin: "30px 0 0",
            color: "#d8e4ec",
            fontSize: "clamp(16px, 2.2vw, 20px)",
            lineHeight: 1.65,
          }}
        >
          Auctrail is developing a complete asset disposition management platform for government agencies to manage property intake, approvals, documentation, disposal, and auctions from one secure system.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "42px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              minHeight: "50px",
              alignItems: "center",
              padding: "0 24px",
              background: "#669541",
              color: "white",
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: ".08em",
              textTransform: "uppercase",
            }}
          >
            In development
          </span>
          <span
            style={{
              color: "#b9c9d4",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: ".07em",
              textTransform: "uppercase",
            }}
          >
            Hosted government software
          </span>
        </div>
      </section>
    </main>
  );
}
