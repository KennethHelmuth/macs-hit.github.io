"use client";

import Reveal from "@/components/Reveal";

interface Achievement {
  title: string;
  category: string;
  year?: string;
  description: string;
  link?: {
    label: string;
    href: string;
  };
}

const achievements: Achievement[] = [
  {
    title: "OSINT & CTI Pivot Chain Reference Library",
    category: "Research & Methodology",
    year: "2026",
    description:
      "Authored a comprehensive playbook mapping 33 distinct Indicator of Compromise (IOC) types to full pivot chains, detailing specific CTI and OSINT toolchains across 6 core analytical domains.",
    link: {
      label: "View Reference",
      href: "https://github.com/KennethHelmuth/Pivot-chains",
    },
  },
  {
    title: "ChainTrack — Blockchain CTI TUI",
    category: "Security Tooling",
    year: "2026",
    description:
      "Engineered an interactive Rust-based terminal interface for crypto wallet tracking, transaction graph mapping, and entity clustering across BTC, ETH, USDT, SOL, and BNB.",
    link: {
      label: "View Tool",
      href: "https://github.com/KennethHelmuth/chaintrack",
    },
  },
  {
    title: "IOC Triage — Threat Intel Triaging Engine",
    category: "Security Tooling",
    year: "2026",
    description:
      "Developed an open-source Rust TUI for parsing, auto-defanging, deduplicating, and running one-click intelligence lookups across 30+ threat intel platforms.",
    link: {
      label: "View Tool",
      href: "https://github.com/KennethHelmuth/IoC-Triage-tool",
    },
  },
  {
    title: "JS Deobfuscator — AST-Based Static Deobfuscation",
    category: "Reverse Engineering",
    year: "2026",
    description:
      "Built a purely static deobfuscation CLI tool using Babel AST transformations to unpack and linearize obfuscated malicious JavaScript payloads without dynamic execution.",
    link: {
      label: "View Tool",
      href: "https://github.com/KennethHelmuth/JS-Deobfuscator",
    },
  },
];

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const MediumIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const links = [
  {
    label: "GitHub",
    display: "github.com/kennethhelmuth",
    href: "https://github.com/kennethhelmuth",
    icon: <GitHubIcon />,
  },
  {
    label: "X",
    display: "x.com/MacsHitX",
    href: "https://x.com/MacsHitX",
    icon: <XIcon />,
  },
  {
    label: "Medium",
    display: "medium.com/@Real-macs_hit",
    href: "https://medium.com/@Real-macs_hit",
    icon: <MediumIcon />,
  },
];

export default function AboutPage() {
  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <Reveal>
          <header className="page-header">
            <p className="page-eyebrow">Operator</p>
            <h1 className="page-title">Kenneth Helmuth</h1>
          </header>
        </Reveal>

        {/* Bio */}
        <Reveal delay={100}>
          <div style={{ marginBottom: 64 }}>
            <p className="about-bio">
              CTI researcher. <strong>MACS-HIT</strong> is an independent
              research platform — not affiliated with any vendor, employer,
              or organization.
            </p>
            <p className="about-bio">
              Research is published when it is ready and defensible.
              Attribution assessments carry inherent uncertainty and should
              be treated as such.
            </p>
          </div>
        </Reveal>

        {/* Achievements */}
        <Reveal delay={160}>
          <section className="achievements-section">
            <p className="page-eyebrow" style={{ marginBottom: 16 }}>
              Track Record
            </p>
            <h2
              style={{
                fontSize: "1.35rem",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "var(--text)",
                marginBottom: 24,
              }}
            >
              Achievements
            </h2>

            <div>
              {achievements.map((item, idx) => (
                <div key={item.title} className="achievement-card">
                  <div className="achievement-header">
                    <h3 className="achievement-title">{item.title}</h3>
                    <div className="achievement-meta">
                      {item.category && (
                        <span className="tool-badge">{item.category}</span>
                      )}
                      {item.year && (
                        <span className="achievement-date">{item.year}</span>
                      )}
                    </div>
                  </div>
                  <p className="achievement-desc">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievement-link"
                    >
                      {item.link.label} <span>&rarr;</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Links */}
        <Reveal delay={220}>
          <div style={{ marginBottom: 80 }}>
            {links.map(({ label, display, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="about-link-row"
              >
                <span className="about-link-left">
                  <span className="about-link-icon">{icon}</span>
                  <span className="about-link-label">{label}</span>
                </span>
                <span className="about-link-url">{display}</span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Disclaimer */}
        <Reveal delay={280}>
          <p
            style={{
              fontSize: "0.82rem",
              color: "var(--text-3)",
              lineHeight: 1.65,
              maxWidth: 440,
              letterSpacing: "-0.005em",
            }}
          >
            All content published on this platform is for educational and
            defensive purposes. Do not take action based solely on material
            published here.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
