import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Intelligence",
  description: "Public threat intelligence repository and data categories.",
};

const categories = [
  {
    title: "IOCs",
    description:
      "Indicators of compromise including malicious domains, C2 IPs, cryptographic file hashes, and active payload URLs.",
    url: "https://github.com/KennethHelmuth/threat-intelligence/tree/main/IOCs",
  },
  {
    title: "YARA Rules",
    description:
      "Precision detection rules for malware identification, binary string matching, and hunting active implants.",
    url: "https://github.com/KennethHelmuth/threat-intelligence/tree/main/YARA",
  },
  {
    title: "Sigma Rules",
    description:
      "Generic signature format for SIEM detection rules targeting adversary tactics, techniques, and procedures (TTPs).",
    url: "https://github.com/KennethHelmuth/threat-intelligence/tree/main/Sigma",
  },
  {
    title: "Reports",
    description:
      "Index of published threat intelligence technical reports, incident breakdowns, and campaign analyses.",
    url: "https://github.com/KennethHelmuth/threat-intelligence/tree/main/Reports",
  },
];

export default function IntelligencePage() {
  return (
    <div className="page">
      <div className="container-wide">
        <Reveal>
          <header className="page-header">
            <p className="page-eyebrow">Data Repository</p>
            <h1 className="page-title">Intelligence</h1>
            <p className="page-subtitle">
              Publicly available indicators of compromise, hunting signatures, and defensive rules.
            </p>
          </header>
        </Reveal>

        <div className="intel-grid">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 80}>
              <a
                href={cat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="intel-card"
              >
                <h2 className="intel-card-title">{cat.title}</h2>
                <p className="intel-card-desc">{cat.description}</p>
                <span className="intel-card-link">
                  Browse Files
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "3.5rem" }}>
            <a
              href="https://github.com/KennethHelmuth/threat-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-link-btn"
            >
              <span>View full repository on GitHub</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
