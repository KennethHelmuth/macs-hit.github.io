"use client";

import Reveal from "@/components/Reveal";

const links = [
  {
    label: "GitHub",
    display: "github.com/kennethhelmuth",
    href: "https://github.com/kennethhelmuth",
  },
  {
    label: "Medium",
    display: "medium.com/@macs-hit",
    href: "https://medium.com/@macs-hit",
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
          <div style={{ marginBottom: 80 }}>
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

        {/* Links */}
        <Reveal delay={180}>
          <div style={{ marginBottom: 80 }}>
            {links.map(({ label, display, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="about-link-row"
                style={{ display: "flex" }}
              >
                <span className="about-link-label">{label}</span>
                <span className="about-link-url">{display}</span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Disclaimer */}
        <Reveal delay={240}>
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
