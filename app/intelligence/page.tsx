import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Intelligence",
  description: "Public threat intelligence repository and data categories.",
};

const categories = [
  {
    title: "IOCs",
    description: "Indicators of compromise including domains, IPs, hashes and URLs.",
    url: "https://github.com/KennethHelmuth/threat-intelligence/tree/main/IOCs",
  },
  {
    title: "YARA Rules",
    description: "Detection rules for malware identification and hunting.",
    url: "https://github.com/KennethHelmuth/threat-intelligence/tree/main/YARA",
  },
  {
    title: "Sigma Rules",
    description: "Generic signature format for SIEM detection rules.",
    url: "https://github.com/KennethHelmuth/threat-intelligence/tree/main/Sigma",
  },
  {
    title: "Reports",
    description: "Index of published threat intelligence reports.",
    url: "https://github.com/KennethHelmuth/threat-intelligence/tree/main/Reports",
  },
];

export default function IntelligencePage() {
  return (
    <div className="page">
      <div className="container-mid">
        <Reveal>
          <header className="page-header">
            <p className="page-eyebrow">Data Repository</p>
            <h1 className="page-title">Intelligence</h1>
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
                  Browse Files <span>→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
            <a
              href="https://github.com/KennethHelmuth/threat-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View Full Repository
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
