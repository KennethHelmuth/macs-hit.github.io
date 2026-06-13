import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="page"
      style={{ display: "flex", alignItems: "center" }}
    >
      <div className="container">
        <p
          className="label"
          style={{ marginBottom: "12px" }}
        >
          404
        </p>
        <h1 style={{ marginBottom: "12px" }}>Page not found</h1>
        <p
          style={{
            fontSize: "0.88rem",
            color: "var(--text-secondary)",
            marginBottom: "28px",
          }}
        >
          This page does not exist or has been moved.
        </p>
        <Link href="/macs-hit.github.io" className="btn btn-outline">
          Go home
        </Link>
      </div>
    </div>
  );
}
