import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MACS-HIT | Cyber Threat Intelligence",
  description:
    "Advanced CTI analysis, threat actor tracking, malware research, and intelligence dossiers by Kenneth Helmuth.",
};

const recentReports = [
  {
    id: "apt-lazarus-2025",
    title: "Lazarus Group: Infrastructure Pivot and New TTPs",
    severity: "critical",
    date: "2025-06-08",
    tags: ["APT", "DPRK", "Lazarus", "C2"],
    summary:
      "Analysis of recent infrastructure changes by the Lazarus Group following increased western sanctions.",
  },
  {
    id: "ransomware-lockbit4",
    title: "LockBit 4.0 Builder Leak: Capabilities Assessment",
    severity: "high",
    date: "2025-06-01",
    tags: ["Ransomware", "LockBit", "Builder"],
    summary:
      "Technical breakdown of the leaked LockBit 4.0 builder, new anti-analysis features, and detection guidance.",
  },
  {
    id: "phishing-qr-campaign",
    title: "QR-Code Phishing Campaign Targeting Financial Sector",
    severity: "medium",
    date: "2025-05-24",
    tags: ["Phishing", "QR", "Finance"],
    summary:
      "Widespread QRLjacking campaign observed against US and EU financial institutions via Microsoft 365 lures.",
  },
];

const stats = [
  { label: "Reports Published", value: "47", icon: "📄" },
  { label: "Threat Actors Tracked", value: "18", icon: "🎯" },
  { label: "IOCs Documented", value: "1,240+", icon: "🔍" },
  { label: "Active Campaigns", value: "6", icon: "⚡" },
];

const severityConfig: Record<string, { label: string; cls: string }> = {
  critical: { label: "CRITICAL", cls: "badge-red" },
  high: { label: "HIGH", cls: "badge-yellow" },
  medium: { label: "MEDIUM", cls: "badge-cyan" },
  low: { label: "LOW", cls: "badge-green" },
};

export default function HomePage() {
  return (
    <div className="grid-bg" style={{ minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px 60px",
          position: "relative",
        }}
      >
        {/* Classification banner */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "5px 14px",
            border: "1px solid rgba(0, 212, 255, 0.25)",
            borderRadius: "100px",
            background: "rgba(0, 212, 255, 0.05)",
            marginBottom: "40px",
          }}
        >
          <div className="pulse-dot" />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--cyan)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            TLP:WHITE — Open Source Intelligence
          </span>
        </div>

        <div style={{ maxWidth: "760px" }}>
          <div className="section-label">// MACS-HIT CTI PLATFORM</div>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            Tracking{" "}
            <span
              style={{
                color: "var(--cyan)",
                textShadow: "0 0 30px rgba(0, 212, 255, 0.4)",
              }}
            >
              Adversaries.
            </span>
            <br />
            Exposing{" "}
            <span style={{ color: "var(--text-secondary)" }}>Infrastructure.</span>
            <br />
            Publishing{" "}
            <span
              style={{
                color: "var(--cyan)",
                textShadow: "0 0 30px rgba(0, 212, 255, 0.4)",
              }}
            >
              Intelligence.
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: "36px",
              maxWidth: "600px",
            }}
          >
            MACS-HIT is an independent CTI research platform operated by{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
              Kenneth Helmuth
            </span>
            . We produce open-source threat intelligence covering APT campaigns,
            malware families, actor dossiers, and adversarial infrastructure analysis.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/reports" className="btn-primary">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              View Reports
            </Link>
            <Link href="/dossier" className="btn-ghost">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Actor Dossiers
            </Link>
          </div>
        </div>

        {/* Decorative right side */}
        <div
          style={{
            position: "absolute",
            right: "24px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "300px",
            display: "grid",
            gap: "8px",
          }}
          className="hero-deco"
        >
          {["LAZARUS GROUP — MONITORED", "SANDWORM — ACTIVE ALERT", "SCATTERED SPIDER — TRACKING", "LOCKBIT — INFRASTRUCTURE MAP"].map(
            (text, i) => (
              <div
                key={i}
                style={{
                  padding: "10px 14px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: i === 1 ? "var(--red)" : "var(--text-muted)",
                  letterSpacing: "0.06em",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  opacity: 1 - i * 0.15,
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: i === 1 ? "var(--red)" : "var(--text-muted)",
                    flexShrink: 0,
                  }}
                />
                {text}
              </div>
            )
          )}
          <div
            style={{
              padding: "6px 14px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              color: "var(--text-muted)",
              textAlign: "center",
            }}
          >
            + 14 more tracked actors
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) { .hero-deco { display: none !important; } }
        `}</style>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "32px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "4px" }}>{stat.icon}</div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: "var(--cyan)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: "4px",
                  textShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Reports */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "32px",
          }}
        >
          <div>
            <div className="section-label">// INTELLIGENCE FEED</div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Recent Reports</h2>
          </div>
          <Link
            href="/reports"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--cyan)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              letterSpacing: "0.05em",
            }}
          >
            View All →
          </Link>
        </div>

        <div style={{ display: "grid", gap: "12px" }}>
          {recentReports.map((report) => {
            const sev = severityConfig[report.severity];
            return (
              <Link
                key={report.id}
                href={`/reports/${report.id}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="card"
                  style={{
                    padding: "20px 24px",
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: "20px",
                    alignItems: "start",
                  }}
                >
                  {/* Severity indicator */}
                  <div style={{ paddingTop: "2px" }}>
                    <div className={`badge ${sev.cls}`}>{sev.label}</div>
                  </div>

                  {/* Content */}
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        marginBottom: "6px",
                        color: "var(--text-primary)",
                      }}
                    >
                      {report.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--text-secondary)",
                        marginBottom: "10px",
                        lineHeight: 1.5,
                      }}
                    >
                      {report.summary}
                    </div>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      {report.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Date */}
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--text-muted)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {report.date}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 80px",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, rgba(0, 212, 255, 0.06) 0%, rgba(0, 153, 204, 0.03) 100%)",
            border: "1px solid var(--border-bright)",
            borderRadius: "12px",
            padding: "48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.08) 0%, transparent 60%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <div className="section-label" style={{ marginBottom: "12px" }}>// GET INVOLVED</div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "12px" }}>
              Contribute Intelligence
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "480px", margin: "0 auto 28px", fontSize: "0.9rem" }}>
              Have a tip, indicator, or sample? Reach out via secure channels. All submissions are handled
              confidentially and credited appropriately.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/about" className="btn-primary">Contact Securely</Link>
              <Link href="/tools" className="btn-ghost">View Tools</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
