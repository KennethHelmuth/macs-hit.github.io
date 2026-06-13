"use client";


const skills = [
  { name: "Threat Intelligence", level: 95 },
  { name: "Malware Analysis", level: 88 },
  { name: "Digital Forensics", level: 82 },
  { name: "Incident Response", level: 85 },
  { name: "OSINT", level: 90 },
  { name: "Detection Engineering", level: 78 },
  { name: "Reverse Engineering", level: 72 },
  { name: "Network Forensics", level: 80 },
];

const certs = [
  { name: "GIAC CTI", full: "GIAC Cyber Threat Intelligence", issuer: "SANS Institute", color: "var(--cyan)" },
  { name: "GCFE", full: "GIAC Certified Forensic Examiner", issuer: "SANS Institute", color: "var(--cyan)" },
  { name: "CEH", full: "Certified Ethical Hacker", issuer: "EC-Council", color: "var(--yellow)" },
  { name: "CompTIA Security+", full: "Security+", issuer: "CompTIA", color: "var(--green)" },
];

const timeline = [
  {
    year: "2025",
    event: "Founded MACS-HIT CTI platform",
    desc: "Launched independent threat intelligence research platform focusing on APT tracking and adversary infrastructure analysis.",
  },
  {
    year: "2023",
    event: "Senior Threat Analyst",
    desc: "Led threat intelligence team covering nation-state APT groups and cybercriminal ecosystems across financial and critical infrastructure sectors.",
  },
  {
    year: "2021",
    event: "Incident Response Consultant",
    desc: "Specialized in post-intrusion forensics and adversary attribution for enterprise and government clients.",
  },
  {
    year: "2019",
    event: "SOC Analyst → Threat Hunter",
    desc: "Transitioned from tier-2 SOC analysis to proactive threat hunting using behavioral analytics and IOC enrichment pipelines.",
  },
  {
    year: "2018",
    event: "B.S. Computer Security",
    desc: "Graduated with focus on network security, cryptography, and digital forensics.",
  },
];

export default function AboutPage() {
  return (
    <div className="grid-bg" style={{ minHeight: "100vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: "60px" }}>
          <div className="section-label">// OPERATOR PROFILE</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "8px" }}>About</h1>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "60px", alignItems: "start" }}>
          {/* Left column */}
          <div>
            {/* Bio */}
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "32px",
                marginBottom: "32px",
              }}
            >
              <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", marginBottom: "24px" }}>
                {/* Avatar */}
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #00d4ff 0%, #0055aa 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    fontWeight: 900,
                    color: "#000",
                    fontFamily: "var(--font-mono)",
                    flexShrink: 0,
                    boxShadow: "0 0 30px rgba(0, 212, 255, 0.2)",
                  }}
                >
                  KH
                </div>
                <div>
                  <div style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "4px" }}>
                    Kenneth Helmuth
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--cyan)",
                      letterSpacing: "0.05em",
                      marginBottom: "4px",
                    }}
                  >
                    MACS-HIT // CTI Researcher & Analyst
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    Independent · macs-hit.github.io
                  </div>
                </div>
              </div>

              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "16px", fontSize: "0.9rem" }}>
                I am a Cyber Threat Intelligence researcher and analyst operating under the alias{" "}
                <span style={{ color: "var(--cyan)", fontFamily: "var(--font-mono)" }}>MACS-HIT</span>.
                My work focuses on tracking advanced persistent threat (APT) groups, analyzing malware
                campaigns, and producing actionable intelligence for defenders.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "16px", fontSize: "0.9rem" }}>
                MACS-HIT was created to fill a gap in publicly accessible, practitioner-quality CTI.
                All reports are produced independently with a focus on technical depth, attribution
                rigor, and practical detection guidance.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, fontSize: "0.9rem" }}>
                My research specializations include DPRK-attributed threat groups, Russian GRU
                operations, and the evolving ransomware-as-a-service ecosystem. I am particularly
                interested in adversary infrastructure analysis and tracking operational security failures.
              </p>
            </div>

            {/* Skills */}
            <div style={{ marginBottom: "32px" }}>
              <div className="section-label" style={{ marginBottom: "20px" }}>// SKILL PROFILE</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "6px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem",
                          color: skill.level >= 90 ? "var(--cyan)" : "var(--text-muted)",
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="meter-bar">
                      <div
                        className="meter-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, var(--cyan) 0%, rgba(0, 212, 255, 0.5) 100%)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <div className="section-label" style={{ marginBottom: "24px" }}>// BACKGROUND</div>
              <div style={{ position: "relative" }}>
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    left: "44px",
                    top: 0,
                    bottom: 0,
                    width: "1px",
                    background: "linear-gradient(180deg, var(--border-bright), transparent)",
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  {timeline.map((item, i) => (
                    <div key={i} style={{ display: "grid", gridTemplateColumns: "88px 1fr", gap: "20px" }}>
                      <div style={{ textAlign: "right" }}>
                        <div
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            color: "var(--cyan)",
                          }}
                        >
                          {item.year}
                        </div>
                      </div>
                      <div
                        style={{
                          background: "var(--bg-card)",
                          border: "1px solid var(--border)",
                          borderRadius: "8px",
                          padding: "14px 16px",
                        }}
                      >
                        <div
                          style={{
                            fontWeight: 600,
                            fontSize: "0.85rem",
                            marginBottom: "4px",
                          }}
                        >
                          {item.event}
                        </div>
                        <div
                          style={{
                            fontSize: "0.78rem",
                            color: "var(--text-secondary)",
                            lineHeight: 1.5,
                          }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", position: "sticky", top: "80px" }}>
            {/* Certifications */}
            <div className="card" style={{ padding: "24px" }}>
              <div className="section-label" style={{ marginBottom: "16px" }}>// Certifications</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {certs.map((cert) => (
                  <div
                    key={cert.name}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                      padding: "10px 12px",
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        color: cert.color,
                        minWidth: "60px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {cert.name}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.78rem", fontWeight: 500 }}>{cert.full}</div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        {cert.issuer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="card" style={{ padding: "24px" }}>
              <div className="section-label" style={{ marginBottom: "16px" }}>// Secure Contact</div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "16px",
                }}
              >
                For intelligence tips, sample submissions, or collaboration inquiries. All
                communications handled confidentially. PGP preferred.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  {
                    label: "Email",
                    value: "intel@macs-hit.dev",
                    icon: "✉",
                    href: "mailto:intel@macs-hit.dev",
                  },
                  {
                    label: "GitHub",
                    value: "github.com/macs-hit",
                    icon: "⌗",
                    href: "https://github.com/macs-hit",
                  },
                  {
                    label: "Keybase",
                    value: "keybase.io/macs-hit",
                    icon: "🔑",
                    href: "https://keybase.io",
                  },
                ].map(({ label, value, icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 12px",
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      textDecoration: "none",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-bright)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
                    }
                  >
                    <span style={{ fontSize: "0.9rem" }}>{icon}</span>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.58rem",
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: "var(--cyan)",
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* TLP Notice */}
            <div
              style={{
                padding: "16px 18px",
                background: "rgba(0, 212, 255, 0.04)",
                border: "1px solid rgba(0, 212, 255, 0.15)",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  color: "var(--cyan)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                ⚠ Disclaimer
              </div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                All intelligence published on this platform is for educational and defensive
                purposes only. Attribution assessments carry inherent uncertainty. Do not take
                offensive action based solely on this content.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 380px"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
