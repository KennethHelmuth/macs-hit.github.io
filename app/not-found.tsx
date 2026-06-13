import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="grid-bg"
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 24px",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "6rem",
            fontWeight: 900,
            color: "var(--border-bright)",
            lineHeight: 1,
            marginBottom: "16px",
            letterSpacing: "-0.04em",
          }}
        >
          404
        </div>
        <div className="section-label" style={{ marginBottom: "16px" }}>
          // RECORD NOT FOUND
        </div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "12px" }}>
          Intelligence Asset Not Located
        </h1>
        <p style={{ color: "var(--text-secondary)", maxWidth: "360px", margin: "0 auto 32px", fontSize: "0.88rem" }}>
          The requested document, report, or dossier does not exist or has been
          classified. Return to the main platform.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
          <Link href="/reports" className="btn-ghost">
            View Reports
          </Link>
        </div>
      </div>
    </div>
  );
}
