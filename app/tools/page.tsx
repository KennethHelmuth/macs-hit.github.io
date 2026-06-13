"use client";

// Tools page uses client-side event handlers (onMouseEnter/onMouseLeave)
// The layout exports metadata for this route instead.

const tools = [
  {
    name: "IoC-Triage-tool",
    description:
      "Tool for triaging indicators of compromise. Designed to speed up the manual analysis stage of threat investigations.",
    url: "https://github.com/kennethhelmuth/IoC-Triage-tool",
    slug: "IoC-Triage-tool",
  },
  {
    name: "JS-Deobfuscator",
    description:
      "JavaScript deobfuscation utility for analyzing obfuscated malicious scripts encountered during investigations.",
    url: "https://github.com/kennethhelmuth/JS-Deobfuscator",
    slug: "JS-Deobfuscator",
  },
  {
    name: "Security-Analysis-Helper-Toolkit",
    description:
      "Collection of helper scripts and utilities assembled for common tasks in security analysis workflows.",
    url: "https://github.com/kennethhelmuth/Security-Analysis-Helper-Toolkit",
    slug: "Security-Analysis-Helper-Toolkit",
  },
];

export default function ToolsPage() {
  return (
    <div className="page-sm">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <p className="label" style={{ marginBottom: "10px" }}>
            Open Source
          </p>
          <h1>Tools</h1>
        </div>

        {/* Tool list */}
        <div>
          {tools.map((tool) => (
            <div key={tool.slug} className="item-row">
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "12px",
                    marginBottom: "6px",
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "var(--text)")
                    }
                  >
                    {tool.name}
                  </a>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    github.com/kennethhelmuth
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.84rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                  }}
                >
                  {tool.description}
                </p>
              </div>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${tool.name} on GitHub`}
                style={{
                  flexShrink: 0,
                  color: "var(--text-muted)",
                  transition: "color 0.15s",
                  paddingTop: "2px",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--text-muted)")
                }
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* GitHub link */}
        <div style={{ marginTop: "40px" }}>
          <a
            href="https://github.com/kennethhelmuth"
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary"
          >
            All repositories on GitHub
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
