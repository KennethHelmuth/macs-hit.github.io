"use client";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/kennethhelmuth",
  },
  {
    label: "Medium",
    href: "https://medium.com/@macs-hit",
  },
];

export default function AboutPage() {
  return (
    <div className="page-sm">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <p className="label" style={{ marginBottom: "10px" }}>
            Operator
          </p>
          <h1>Kenneth Helmuth</h1>
        </div>

        {/* Bio */}
        <div style={{ marginBottom: "48px" }}>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              maxWidth: "520px",
              marginBottom: "16px",
            }}
          >
            CTI researcher. MACS-HIT is an independent research platform — not affiliated
            with any vendor, employer, or organization. Research is published when it is
            ready and defensible.
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              maxWidth: "520px",
            }}
          >
            All analysis represents personal opinion based on available evidence at
            the time of publication. Attribution assessments carry inherent uncertainty
            and should be treated as such.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="label" style={{ marginBottom: "16px" }}>
            Links
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {links.map(({ label, href }) => (
              <div key={label} className="item-row" style={{ padding: "14px 0" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                    width: "80px",
                    flexShrink: 0,
                  }}
                >
                  {label}
                </span>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.84rem",
                    color: "var(--text-secondary)",
                    transition: "color 0.15s",
                    wordBreak: "break-all",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--text)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--text-secondary)")
                  }
                >
                  {href.replace("https://", "")}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div
          style={{
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid var(--border)",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              maxWidth: "480px",
            }}
          >
            All content published on this platform is for educational and defensive
            purposes. Do not take action based solely on material published here.
          </p>
        </div>
      </div>
    </div>
  );
}
