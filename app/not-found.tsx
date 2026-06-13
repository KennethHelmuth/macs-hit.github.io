import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="page"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-3)",
            marginBottom: 24,
          }}
        >
          404
        </p>
        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 64px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: 20,
          }}
        >
          Page not found
        </h1>
        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--text-2)",
            marginBottom: 40,
          }}
        >
          This page does not exist or has been moved.
        </p>
        <Link href="/" className="btn btn-primary">
          Go home
        </Link>
      </div>
    </div>
  );
}
