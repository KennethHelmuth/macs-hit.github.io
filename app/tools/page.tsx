"use client";

import Reveal from "@/components/Reveal";

const tools = [
  {
    name: "ChainTrack",
    description:
      "Interactive TUI for blockchain wallet analysis. Track wallets, map transaction history, detect linked addresses across BTC, ETH, USDT, SOL and BNB. Built for CTI analysts.",
    url: "https://github.com/KennethHelmuth/chaintrack",
    language: "Rust",
    badge: "Open Source",
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
      "Production-ready CLI tool for purely static JavaScript deobfuscation using Babel AST transformations. Safely unpacks, deobfuscates, and linearizes obfuscated scripts (defeating control flow flattening, proxy functions, and string array encoding) without execution.",
    url: "https://github.com/KennethHelmuth/JS-Deobfuscator",
    language: "JavaScript",
    badge: "Open Source",
  },
  {
    name: "Security-Analysis-Helper-Toolkit",
    description:
      "Collection of helper scripts assembled for common tasks in security analysis workflows.",
    url: "https://github.com/kennethhelmuth/Security-Analysis-Helper-Toolkit",
  },
];

export default function ToolsPage() {
  return (
    <div className="page">
      <div className="container">
        <Reveal>
          <header className="page-header">
            <p className="page-eyebrow">Open Source</p>
            <h1 className="page-title">Tools</h1>
          </header>
        </Reveal>

        <div>
          {tools.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 80}>
              <div className="tool-item">
                <div className="tool-header">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tool-name"
                  >
                    {tool.name}
                  </a>
                  <div className="tool-meta">
                    {tool.language && <span className="tool-lang">{tool.language}</span>}
                    {tool.badge && <span className="tool-badge">{tool.badge}</span>}
                  </div>
                </div>
                <p className="tool-repo">
                  {tool.url.replace("https://", "")}
                </p>
                <p className="tool-desc">{tool.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <div style={{ marginTop: 56 }}>
            <a
              href="https://github.com/kennethhelmuth"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.9rem",
                color: "var(--text-3)",
                letterSpacing: "-0.01em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-3)")
              }
            >
              All repositories &rarr;
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
