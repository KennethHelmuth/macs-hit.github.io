"use client";

import Reveal from "@/components/Reveal";

const tools = [
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
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tool-name"
                  style={{ display: "block" }}
                >
                  {tool.name}
                </a>
                <p className="tool-repo">
                  github.com/kennethhelmuth/{tool.name}
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
