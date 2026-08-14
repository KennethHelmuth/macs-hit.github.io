"use client";

import Reveal from "@/components/Reveal";

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
    label: "X (Twitter)",
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
      <div className="container-mid">
        <Reveal>
          <header className="page-header">
            <p className="page-eyebrow">Operator & Platform</p>
            <h1 className="page-title">Kenneth Helmuth</h1>
            <p className="page-subtitle">
              Independent cyber threat intelligence researcher. Tracking malware, threat actors, and infrastructure.
            </p>
          </header>
        </Reveal>

        {/* Bio Card */}
        <Reveal delay={80}>
          <div className="dossier-card" style={{ marginBottom: "2rem" }}>
            <h2 className="dossier-name" style={{ marginBottom: "1rem" }}>
              Research Mission
            </h2>
            <p className="about-bio">
              <strong>MACS-HIT</strong> is an independent CTI research platform — not affiliated with any vendor, employer, or commercial organization.
            </p>
            <p className="about-bio" style={{ marginBottom: 0 }}>
              All findings are published when investigations are complete, defensible, and grounded in observable artifacts. Attribution assessments carry inherent analytical uncertainty and are documented with clear evidentiary thresholds.
            </p>
          </div>
        </Reveal>

        {/* Links Card */}
        <Reveal delay={160}>
          <div className="dossier-card" style={{ marginBottom: "2rem" }}>
            <h2 className="dossier-name" style={{ marginBottom: "1rem" }}>
              Profiles & Channels
            </h2>
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
        <Reveal delay={240}>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--text-3)",
              lineHeight: 1.6,
              textAlign: "center",
              marginTop: "2rem",
            }}
          >
            All content published on this platform is for educational and defensive purposes.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
