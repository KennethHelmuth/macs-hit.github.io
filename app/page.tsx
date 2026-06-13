import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MACS-HIT",
  description:
    "Independent threat intelligence research by Kenneth Helmuth. No vendor. No agenda.",
};

export default function HomePage() {
  return (
    <div className="page">
      <div className="container">
        {/* Hero */}
        <section style={{ marginBottom: "64px" }}>
          <p
            className="label label-accent"
            style={{ marginBottom: "20px" }}
          >
            CTI Research
          </p>
          <h1 style={{ marginBottom: "16px" }}>MACS-HIT</h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              marginBottom: "36px",
              maxWidth: "480px",
              lineHeight: 1.65,
            }}
          >
            Independent threat intelligence research.
            <br />
            No vendor. No agenda.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link href="/macs-hit.github.io/reports" className="btn btn-solid">
              Reports
            </Link>
            <Link href="/macs-hit.github.io/dossier" className="btn btn-outline">
              Dossier
            </Link>
          </div>
        </section>

        {/* What this is */}
        <section>
          <div className="divider" style={{ margin: "0 0 40px" }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "32px",
            }}
          >
            <div>
              <p className="label" style={{ marginBottom: "8px" }}>
                Reports
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                Technical analysis of threats, campaigns, and malware. Published
                when research is complete, not on a schedule.
              </p>
            </div>
            <div>
              <p className="label" style={{ marginBottom: "8px" }}>
                Dossier
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                Actor and campaign tracking. Profiles are built incrementally as
                investigation develops.
              </p>
            </div>
            <div>
              <p className="label" style={{ marginBottom: "8px" }}>
                Tools
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                Open-source utilities built for threat triage and analysis work.
                All code is on GitHub.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
