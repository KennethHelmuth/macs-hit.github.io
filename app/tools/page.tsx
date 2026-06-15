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
    name: "IoC-Triage-tool",
    description:
      "Tool for triaging indicators of compromise. Designed to reduce time spent on the manual analysis stage of threat investigations.",
    url: "https://github.com/kennethhelmuth/IoC-Triage-tool",
  },
  {
    name: "JS-Deobfuscator",
    description:
      "JavaScript deobfuscation utility for analyzing obfuscated malicious scripts encountered during investigations.",
    url: "https://github.com/kennethhelmuth/JS-Deobfuscator",
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
