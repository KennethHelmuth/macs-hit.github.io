"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0, 212, 255, 0.08)",
        background: "var(--bg-secondary)",
        padding: "32px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "24px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--cyan)",
              letterSpacing: "0.15em",
              marginBottom: "4px",
            }}
          >
            MACS-HIT // CYBER THREAT INTELLIGENCE
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--text-muted)",
            }}
          >
            © {year} Kenneth Helmuth — All intelligence is for educational and defensive purposes only.
          </div>
        </div>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          {[
            { href: "/reports", label: "Reports" },
            { href: "/dossier", label: "Dossier" },
            { href: "/tools", label: "Tools" },
            { href: "/about", label: "About" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--cyan)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "24px auto 0",
          paddingTop: "16px",
          borderTop: "1px solid rgba(0, 212, 255, 0.05)",
          display: "flex",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <div className="pulse-dot" style={{ width: "6px", height: "6px" }} />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            color: "var(--text-muted)",
            letterSpacing: "0.1em",
          }}
        >
          SYSTEMS OPERATIONAL // TLP:WHITE // MACS-HIT CTI PLATFORM
        </span>
      </div>
    </footer>
  );
}
