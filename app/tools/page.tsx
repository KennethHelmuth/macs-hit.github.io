"use client";

import Reveal from "@/components/Reveal";

const tools = [
  {
    name: "ChainTrack",
    description:
      "Interactive TUI for blockchain wallet analysis. Track wallets, map transaction history, detect linked addresses across BTC, ETH, USDT, SOL and BNB. Built for CTI analysts.",
    url: "https://github.com/KennethHelmuth/chaintrack",
    language: "Rust",
    badge: "Interactive TUI",
  },
  {
    name: "IOC Triage",
    description:
      "Interactive TUI for parsing and triaging Indicators of Compromise. Auto-detect, defang, and deduplicate 10+ IOC types with one-click lookups across 30+ threat intel platforms. Built for CTI analysts and SOC operators.",
    url: "https://github.com/KennethHelmuth/IoC-Triage-tool",
    language: "Rust",
    badge: "Open Source",
  },
  {
    name: "JS Deobfuscator",
    description:
      "Production-ready CLI tool for purely static JavaScript deobfuscation using Babel AST transformations. Safely unpacks, deobfuscates, and linearizes obfuscated scripts without execution.",
    url: "https://github.com/KennethHelmuth/JS-Deobfuscator",
    language: "JavaScript",
    badge: "Babel AST",
  },
  {
    name: "Security Analysis Helper Toolkit",
    description:
      "Collection of lightweight, standalone Python CLI utilities for safe malware sample handling, static analysis, defensive archive unpacking, and automated audit logging in lab environments.",
    url: "https://github.com/KennethHelmuth/Security-Analysis-Helper-Toolkit",
    language: "Python",
    badge: "DFIR Utilities",
  },
  {
    name: "Pivot Chains",
    description:
      "Visual reference and playbooks mapping 33 distinct Indicator of Compromise (IOC) types to full pivot chains, detailing specific CTI and OSINT toolchains across 6 core analytical domains.",
    url: "https://github.com/KennethHelmuth/Pivot-chains",
    language: "OSINT / CTI",
    badge: "Reference Playbook",
  },
];

export default function ToolsPage() {
  return (
    <div className="page">
      <div className="container-wide">
        <Reveal>
          <header className="page-header">
            <p className="page-eyebrow">Open Source Tooling</p>
            <h1 className="page-title">Tools</h1>
            <p className="page-subtitle">
              Interactive utilities and triage suites built for threat analysts, malware researchers, and SOC operators.
            </p>
          </header>
        </Reveal>

        <div className="tools-grid">
          {tools.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 60}>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tool-card"
              >
                <div className="tool-card-head">
                  <h2 className="tool-card-name">{tool.name}</h2>
                  <span className="tool-card-lang">{tool.language}</span>
                </div>
                <p className="tool-card-desc">{tool.description}</p>
                <div className="tool-card-foot">
                  <span className="tool-card-badge">{tool.badge}</span>
                  <span className="tool-card-arrow">
                    GitHub
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <div style={{ marginTop: "3.5rem", textAlign: "center" }}>
            <a
              href="https://github.com/kennethhelmuth"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-link-btn"
            >
              <span>View all repositories on GitHub</span>
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
