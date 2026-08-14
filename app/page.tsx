import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "MACS-HIT — Cyber Threat Intelligence",
  description:
    "Independent threat intelligence research by Kenneth Helmuth. No vendor. No agenda. Grounded in observable evidence.",
};

const FEATURED_REPORTS = [
  {
    title: "Same Wallet, Two Domains: Tracking a Serial Crypto Scam Operator",
    summary:
      "A serial crypto scam operator running coordinated celebrity impersonation campaigns across two domains on bulletproof hosting infrastructure, with confirmed collections.",
    date: "June 14, 2026",
    tlp: "TLP:WHITE",
    tags: ["Cryptocurrency", "Bulletproof Hosting", "SOCINT"],
    link: "https://medium.com/@Real-macs_hit/same-wallet-two-domains-tracking-a-serial-crypto-scam-operator-on-bulletproof-infrastructure-ff122c822c13",
  },
  {
    title: "The 21-Month Blind Spot: Why DCRat is Still Evading Defenses in 2026",
    summary:
      "A live technical investigation into an active DCRat commodity malware campaign, reverse-engineering the multi-stage infection chain, Stealer plugins, and exposed C2 endpoints.",
    date: "May 7, 2026",
    tlp: "TLP:CLEAR",
    tags: ["Malware Analysis", "DCRat", "Reverse Engineering"],
    link: "https://medium.com/@Real-macs_hit/the-21-month-blind-spot-why-dcrat-is-still-evading-enterprise-defenses-in-2026-b79682925760",
  },
  {
    title: "GemStuffer & BufferZoneCorp: Hidden Software Supply Chain Operations",
    summary:
      "Technical breakdown of two covert supply chain attacks targeting package repositories: GemStuffer scraping UK government data and BufferZoneCorp targeting developer environments.",
    date: "May 22, 2026",
    tlp: "TLP:CLEAR",
    tags: ["Supply Chain", "RubyGems", "PyPI", "DevSecOps"],
    link: "https://medium.com/@Real-macs_hit/gemstuffer-and-bufferzonecorp-two-hidden-operations-that-quietly-targeted-every-developers-329b79eb30dd",
  },
  {
    title: "Threat Advisory: The Campaign Triad",
    summary:
      "Comprehensive threat advisory covering three concurrent cyber campaigns targeting software supply chains, Windows enterprise infrastructure, and cloud identity vectors.",
    date: "May 21, 2026",
    tlp: "TLP:CLEAR",
    tags: ["Threat Advisory", "Active Directory", "Cloud Security"],
    link: "https://medium.com/@Real-macs_hit/threat-advisory-the-campaign-triad-f97fabb5b55f",
  },
];

const TOOLS = [
  {
    name: "ChainTrack",
    language: "Rust",
    badge: "Interactive TUI",
    description:
      "Interactive Terminal UI for blockchain wallet analysis. Track wallets, map transaction history, and detect linked clusters across BTC, ETH, USDT, SOL, and BNB.",
    url: "https://github.com/KennethHelmuth/chaintrack",
  },
  {
    name: "IOC Triage",
    language: "Rust",
    badge: "Open Source",
    description:
      "Interactive TUI for parsing and triaging Indicators of Compromise. Auto-detect, defang, and deduplicate 10+ IOC types with one-click lookups across 30+ threat intel platforms.",
    url: "https://github.com/KennethHelmuth/IoC-Triage-tool",
  },
  {
    name: "JS Deobfuscator",
    language: "JavaScript",
    badge: "Babel AST",
    description:
      "Production-ready CLI tool for purely static JavaScript malware deobfuscation using Babel AST transforms. Defeats control flow flattening and string array encryption without execution.",
    url: "https://github.com/KennethHelmuth/JS-Deobfuscator",
  },
  {
    name: "Security Analysis Helper",
    language: "Python",
    badge: "DFIR Utilities",
    description:
      "Collection of standalone Python CLI utilities for safe malware sample handling, static triage, defensive archive unpacking, and automated audit logging in lab environments.",
    url: "https://github.com/KennethHelmuth/Security-Analysis-Helper-Toolkit",
  },
  {
    name: "Pivot Chains",
    language: "OSINT / CTI",
    badge: "Reference",
    description:
      "Visual reference and analytical playbooks mapping 33 distinct Indicator of Compromise (IOC) types to full pivot chains across 6 core analytical domains.",
    url: "https://github.com/KennethHelmuth/Pivot-chains",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section (Apple Aesthetic) ────────────────── */}
      <section id="hero" className="apple-hero">
        <div className="container-mid">
          <p className="hero-eyebrow anim-hero-1">Cyber Threat Intelligence</p>
          <h1 className="hero-headline anim-hero-2">MACS-HIT</h1>
          <p className="hero-tagline anim-hero-3">
            Independent threat intelligence research.{" "}
            <em>No vendor. No agenda.</em>
          </p>

          <div className="hero-actions anim-hero-4">
            <Link href="/reports" className="apple-btn apple-btn-primary">
              Reports
            </Link>
            <Link href="/dossier" className="apple-btn apple-btn-secondary">
              Dossier
            </Link>
            <Link href="/tools" className="apple-btn apple-btn-secondary">
              Tools
            </Link>
          </div>
        </div>
      </section>

      {/* ── Research Pillars (Apple Bento Grid) ───────────── */}
      <section id="pillars" className="apple-section">
        <div className="container-wide">
          <Reveal>
            <div className="pillar-grid">
              <div className="pillar-card">
                <span className="pillar-number">01</span>
                <h2 className="pillar-title">Reports</h2>
                <p className="pillar-body">
                  Technical analysis of threats, campaigns, and malware.
                  Published when research is complete, never on a vendor
                  schedule.
                </p>
                <Link href="/reports" className="pillar-link">
                  <span>Browse reports</span>
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
                </Link>
              </div>

              <div className="pillar-card">
                <span className="pillar-number">02</span>
                <h2 className="pillar-title">Dossier</h2>
                <p className="pillar-body">
                  Actor and campaign tracking. Detailed profiles and MITRE
                  ATT&CK playbooks built incrementally as investigations
                  develop.
                </p>
                <Link href="/dossier" className="pillar-link">
                  <span>Explore dossier</span>
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
                </Link>
              </div>

              <div className="pillar-card">
                <span className="pillar-number">03</span>
                <h2 className="pillar-title">Tools</h2>
                <p className="pillar-body">
                  Open-source utilities for threat triage, blockchain forensics,
                  and static deobfuscation. All code is public on GitHub.
                </p>
                <Link href="/tools" className="pillar-link">
                  <span>View utilities</span>
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
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Featured Research Reports ──────────────────────── */}
      <section id="reports" className="apple-section">
        <div className="container-wide">
          <Reveal>
            <div className="section-head">
              <span className="section-eyebrow">Publications</span>
              <h2 className="section-title">Featured Research</h2>
            </div>
          </Reveal>

          <div className="reports-grid">
            {FEATURED_REPORTS.map((report, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <a
                  href={report.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="report-card"
                >
                  <div className="report-meta">
                    <span className="report-tlp">{report.tlp}</span>
                    <span className="report-date">{report.date}</span>
                  </div>

                  <h3 className="report-title">{report.title}</h3>
                  <p className="report-summary">{report.summary}</p>

                  <div className="report-tags">
                    {report.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="report-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <Link href="/reports" className="apple-link-btn">
                <span>View all research reports</span>
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
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Open Source Tool Suite ─────────────────────────── */}
      <section id="tools" className="apple-section">
        <div className="container-wide">
          <Reveal>
            <div className="section-head">
              <span className="section-eyebrow">Tactical Tooling</span>
              <h2 className="section-title">Open Source Utilities</h2>
            </div>
          </Reveal>

          <div className="tools-grid">
            {TOOLS.map((tool, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tool-card"
                >
                  <div className="tool-card-head">
                    <h3 className="tool-card-name">{tool.name}</h3>
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
        </div>
      </section>

      {/* ── Closing Statement (Apple Manifesto) ───────────── */}
      <section id="manifesto" className="apple-manifesto">
        <div className="container">
          <Reveal>
            <p className="manifesto-text">
              Research is only useful if it is honest. Everything published here
              is grounded in observable evidence.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
