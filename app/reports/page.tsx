import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intelligence Reports",
  description:
    "CTI reports covering APT campaigns, malware analysis, and threat actor activity published by MACS-HIT.",
};

const reports = [
  {
    id: "apt-lazarus-2025",
    title: "Lazarus Group: Infrastructure Pivot and New TTPs",
    severity: "critical",
    date: "2025-06-08",
    tags: ["APT", "DPRK", "Lazarus", "C2", "Infrastructure"],
    summary:
      "Analysis of recent infrastructure changes by the Lazarus Group following increased western sanctions. Includes new C2 patterns, MITRE ATT&CK mapping, and detection rules.",
    tlp: "WHITE",
    iocCount: 48,
    readTime: "12 min",
  },
  {
    id: "ransomware-lockbit4",
    title: "LockBit 4.0 Builder Leak: Capabilities Assessment",
    severity: "high",
    date: "2025-06-01",
    tags: ["Ransomware", "LockBit", "Builder", "Malware"],
    summary:
      "Technical breakdown of the leaked LockBit 4.0 builder, new anti-analysis features, persistence mechanisms, and detection guidance.",
    tlp: "WHITE",
    iocCount: 23,
    readTime: "18 min",
  },
  {
    id: "phishing-qr-campaign",
    title: "QR-Code Phishing Campaign Targeting Financial Sector",
    severity: "medium",
    date: "2025-05-24",
    tags: ["Phishing", "QR", "Finance", "BEC"],
    summary:
      "Widespread QRLjacking campaign observed against US and EU financial institutions via Microsoft 365 lures. Attribution indicators suggest FIN7-adjacent operator.",
    tlp: "WHITE",
    iocCount: 31,
    readTime: "9 min",
  },
  {
    id: "volt-typhoon-ot",
    title: "Volt Typhoon: OT Network Intrusion Patterns",
    severity: "critical",
    date: "2025-05-12",
    tags: ["APT", "China", "Volt Typhoon", "OT", "ICS"],
    summary:
      "Deep dive into Volt Typhoon's living-off-the-land techniques within operational technology environments and pre-positioning for disruptive attacks.",
    tlp: "WHITE",
    iocCount: 67,
    readTime: "22 min",
  },
  {
    id: "scattered-spider-social",
    title: "Scattered Spider: Social Engineering Evolution",
    severity: "high",
    date: "2025-04-30",
    tags: ["Scattered Spider", "Social Engineering", "SIM Swap"],
    summary:
      "Comprehensive review of Scattered Spider's evolving social engineering playbook targeting cloud service providers and managed security services.",
    tlp: "WHITE",
    iocCount: 15,
    readTime: "14 min",
  },
  {
    id: "stealer-malware-2025",
    title: "Infostealer Landscape Q2 2025: Market Analysis",
    severity: "medium",
    date: "2025-04-15",
    tags: ["Infostealer", "Lumma", "RedLine", "Malware"],
    summary:
      "Quarterly overview of the infostealer malware landscape including Lumma Stealer, RedLine variants, and new entrants competing in underground markets.",
    tlp: "WHITE",
    iocCount: 89,
    readTime: "20 min",
  },
];

const severityConfig: Record<string, { label: string; cls: string; color: string }> = {
  critical: { label: "CRITICAL", cls: "badge-red", color: "var(--red)" },
  high: { label: "HIGH", cls: "badge-yellow", color: "var(--yellow)" },
  medium: { label: "MEDIUM", cls: "badge-cyan", color: "var(--cyan)" },
  low: { label: "LOW", cls: "badge-green", color: "var(--green)" },
};

const tlpColors: Record<string, string> = {
  WHITE: "#ddd",
  GREEN: "#00ff88",
  AMBER: "#ffd60a",
  RED: "#ff3b5c",
};

export default function ReportsPage() {
  const critical = reports.filter((r) => r.severity === "critical");
  const rest = reports.filter((r) => r.severity !== "critical");

  return (
    <div className="grid-bg" style={{ minHeight: "100vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <div className="section-label">// INTELLIGENCE FEED</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "12px" }}>
            Reports & Analysis
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "560px", fontSize: "0.9rem" }}>
            Technical CTI reports, malware analyses, and adversary campaign tracking. All reports are
            TLP:WHITE unless otherwise marked.
          </p>
        </div>

        {/* Filter row */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "32px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginRight: "4px",
            }}
          >
            Filter:
          </span>
          {["All", "APT", "Ransomware", "Phishing", "Malware", "OT/ICS"].map((f) => (
            <button
              key={f}
              style={{
                padding: "4px 12px",
                background: f === "All" ? "rgba(0, 212, 255, 0.1)" : "transparent",
                border: f === "All" ? "1px solid rgba(0, 212, 255, 0.3)" : "1px solid var(--border)",
                borderRadius: "100px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: f === "All" ? "var(--cyan)" : "var(--text-muted)",
                cursor: "pointer",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {f}
            </button>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", gap: "8px", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--text-muted)",
              }}
            >
              {reports.length} reports
            </span>
          </div>
        </div>

        {/* Critical reports */}
        {critical.length > 0 && (
          <div style={{ marginBottom: "40px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--red)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--red)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Critical Priority
              </span>
            </div>
            <div style={{ display: "grid", gap: "10px" }}>
              {critical.map((report) => (
                <ReportCard key={report.id} report={report} />
              ))}
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="divider" />

        {/* Other reports */}
        <div style={{ display: "grid", gap: "10px" }}>
          {rest.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ReportCard({ report }: { report: (typeof reports)[0] }) {
  const sev = severityConfig[report.severity];

  return (
    <Link href={`/reports/${report.id}`} style={{ textDecoration: "none" }}>
      <div
        className="card"
        style={{
          padding: "20px 24px",
          display: "grid",
          gridTemplateColumns: "100px 1fr auto",
          gap: "20px",
          alignItems: "start",
        }}
      >
        {/* Left: severity + TLP */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div className={`badge ${sev.cls}`}>{sev.label}</div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              color: tlpColors[report.tlp] ?? "#ddd",
              letterSpacing: "0.1em",
            }}
          >
            TLP:{report.tlp}
          </div>
        </div>

        {/* Center: content */}
        <div>
          <div
            style={{
              fontWeight: 600,
              fontSize: "0.95rem",
              marginBottom: "6px",
              color: "var(--text-primary)",
              lineHeight: 1.3,
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

        {/* Right: meta */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            alignItems: "flex-end",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--text-muted)",
            }}
          >
            {report.date}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              color: "var(--text-muted)",
            }}
          >
            {report.readTime} read
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              color: "var(--cyan)",
            }}
          >
            {report.iocCount} IOCs
          </span>
        </div>
      </div>
    </Link>
  );
}
