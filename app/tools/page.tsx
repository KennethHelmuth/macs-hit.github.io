import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools & Resources",
  description:
    "CTI tools, OSINT resources, detection utilities, and analyst references curated by MACS-HIT.",
};

const toolCategories = [
  {
    id: "threat-intel",
    label: "Threat Intelligence Platforms",
    icon: "🧠",
    tools: [
      {
        name: "MITRE ATT&CK",
        url: "https://attack.mitre.org",
        description: "Globally-accessible knowledge base of adversary tactics and techniques based on real-world observations.",
        tags: ["Framework", "TTP Mapping", "ATT&CK"],
        free: true,
      },
      {
        name: "VirusTotal",
        url: "https://virustotal.com",
        description: "Analyze suspicious files, domains, IPs, and URLs to detect malware and other security breaches.",
        tags: ["Malware Analysis", "Hash Lookup", "IOC"],
        free: true,
      },
      {
        name: "Shodan",
        url: "https://shodan.io",
        description: "Search engine for internet-connected devices. Essential for infrastructure analysis and exposure mapping.",
        tags: ["Infrastructure", "OSINT", "Scanning"],
        free: false,
      },
      {
        name: "OTX AlienVault",
        url: "https://otx.alienvault.com",
        description: "Open threat exchange platform for sharing and consuming threat intelligence indicators.",
        tags: ["IOC Sharing", "Community", "Feeds"],
        free: true,
      },
    ],
  },
  {
    id: "malware-analysis",
    label: "Malware Analysis",
    icon: "🔬",
    tools: [
      {
        name: "ANY.RUN",
        url: "https://any.run",
        description: "Interactive online malware sandbox with real-time analysis, network monitoring, and behavioral reporting.",
        tags: ["Sandbox", "Dynamic Analysis", "Interactive"],
        free: true,
      },
      {
        name: "Hybrid Analysis",
        url: "https://hybrid-analysis.com",
        description: "Free malware analysis service powered by Falcon Sandbox. Supports multiple file types.",
        tags: ["Sandbox", "Static Analysis", "Reports"],
        free: true,
      },
      {
        name: "Ghidra",
        url: "https://ghidra-sre.org",
        description: "NSA-developed open-source reverse engineering framework for analyzing malicious code.",
        tags: ["Reverse Engineering", "NSA", "Open Source"],
        free: true,
      },
      {
        name: "CAPE Sandbox",
        url: "https://capesandbox.com",
        description: "Malware analysis system with automated config extraction for common malware families.",
        tags: ["Sandbox", "Config Extraction", "Open Source"],
        free: true,
      },
    ],
  },
  {
    id: "osint",
    label: "OSINT & Reconnaissance",
    icon: "🔍",
    tools: [
      {
        name: "Maltego",
        url: "https://maltego.com",
        description: "Visual link analysis tool for OSINT investigations. Maps relationships between people, domains, and infrastructure.",
        tags: ["Link Analysis", "Graph", "OSINT"],
        free: false,
      },
      {
        name: "SecurityTrails",
        url: "https://securitytrails.com",
        description: "Historical DNS and IP data for tracking infrastructure changes and passive reconnaissance.",
        tags: ["DNS", "Historical", "Infrastructure"],
        free: false,
      },
      {
        name: "Censys",
        url: "https://censys.io",
        description: "Attack surface management platform with comprehensive internet-wide scanning data.",
        tags: ["Scanning", "ASM", "Research"],
        free: false,
      },
      {
        name: "theHarvester",
        url: "https://github.com/laramies/theHarvester",
        description: "Passive reconnaissance tool for gathering emails, names, subdomains, IPs, and URLs.",
        tags: ["Recon", "Open Source", "CLI"],
        free: true,
      },
    ],
  },
  {
    id: "detection",
    label: "Detection & Hunting",
    icon: "🛡️",
    tools: [
      {
        name: "Sigma HQ",
        url: "https://github.com/SigmaHQ/sigma",
        description: "Generic signature format for SIEM systems. Huge repository of community detection rules.",
        tags: ["SIEM", "Detection Rules", "Open Source"],
        free: true,
      },
      {
        name: "YARA Rules",
        url: "https://virustotal.github.io/yara/",
        description: "Pattern matching tool for malware research and threat hunting. Industry standard for file signatures.",
        tags: ["Malware Hunting", "Signatures", "CLI"],
        free: true,
      },
      {
        name: "Velociraptor",
        url: "https://www.rapid7.com/products/velociraptor/",
        description: "Advanced DFIR platform for endpoint monitoring, forensic analysis, and rapid incident response.",
        tags: ["DFIR", "Endpoint", "Hunting"],
        free: true,
      },
      {
        name: "Elastic SIEM",
        url: "https://www.elastic.co/security",
        description: "Open source security analytics with pre-built detection rules and threat intelligence integration.",
        tags: ["SIEM", "Detection", "Open Source"],
        free: true,
      },
    ],
  },
  {
    id: "ioc-management",
    label: "IOC & Intelligence Management",
    icon: "📋",
    tools: [
      {
        name: "MISP",
        url: "https://www.misp-project.org",
        description: "Open source threat intelligence platform for sharing, storing, and correlating IOCs.",
        tags: ["IOC Sharing", "STIX/TAXII", "Open Source"],
        free: true,
      },
      {
        name: "OpenCTI",
        url: "https://opencti.io",
        description: "Open cyber threat intelligence platform enabling organizations to manage and share threat intel.",
        tags: ["CTI Platform", "Graph", "STIX"],
        free: true,
      },
      {
        name: "Cortex XSOAR",
        url: "https://xsoar.pan.dev",
        description: "SOAR platform for automating threat intelligence workflows and incident response playbooks.",
        tags: ["SOAR", "Automation", "Playbooks"],
        free: false,
      },
    ],
  },
  {
    id: "references",
    label: "Reference & Standards",
    icon: "📚",
    tools: [
      {
        name: "STIX/TAXII",
        url: "https://oasis-open.github.io/cti-documentation/",
        description: "Industry standards for sharing threat intelligence. STIX for structure, TAXII for transport.",
        tags: ["Standard", "STIX", "TAXII"],
        free: true,
      },
      {
        name: "CVE / NVD",
        url: "https://nvd.nist.gov",
        description: "NIST National Vulnerability Database — canonical source for CVE details and CVSS scoring.",
        tags: ["CVE", "Vulnerabilities", "CVSS"],
        free: true,
      },
      {
        name: "CISA KEV",
        url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
        description: "CISA's catalog of known exploited vulnerabilities requiring immediate patching action.",
        tags: ["Vulnerabilities", "CISA", "Patching"],
        free: true,
      },
      {
        name: "TLP Standard",
        url: "https://www.cisa.gov/tlp",
        description: "Traffic Light Protocol — standard for marking and handling sensitive information in CTI sharing.",
        tags: ["Standard", "Sharing", "Classification"],
        free: true,
      },
    ],
  },
];

export default function ToolsPage() {
  return (
    <div className="grid-bg" style={{ minHeight: "100vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <div className="section-label">// ANALYST TOOLKIT</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "12px" }}>
            Tools & Resources
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "560px", fontSize: "0.9rem" }}>
            Curated collection of platforms, frameworks, and utilities used in CTI operations.
            Includes free and commercial tools across threat intel, malware analysis, and detection engineering.
          </p>
        </div>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginBottom: "40px",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Legend:
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div className="badge badge-green">FREE</div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)" }}>
              Free or Open Source
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div className="badge badge-yellow">PAID</div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)" }}>
              Commercial / Requires subscription
            </span>
          </div>
        </div>

        {/* Categories */}
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {toolCategories.map((category) => (
            <section key={category.id} id={category.id}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>{category.icon}</span>
                <h2
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {category.label}
                </h2>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {category.tools.length} tools
                </span>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "12px",
                }}
              >
                {category.tools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="card"
                      style={{
                        padding: "18px 20px",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      {/* Tool header */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            fontWeight: 600,
                            fontSize: "0.9rem",
                            color: "var(--text-primary)",
                          }}
                        >
                          {tool.name}
                        </div>
                        <div className={`badge ${tool.free ? "badge-green" : "badge-yellow"}`}>
                          {tool.free ? "FREE" : "PAID"}
                        </div>
                      </div>

                      <div
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.5,
                          flex: 1,
                        }}
                      >
                        {tool.description}
                      </div>

                      {/* Tags */}
                      <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                        {tool.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Link indicator */}
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6rem",
                          color: "var(--cyan)",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {tool.url.replace("https://", "").split("/")[0]}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Submit a tool */}
        <div
          style={{
            marginTop: "60px",
            padding: "32px",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            display: "flex",
            gap: "24px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: "240px" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--cyan)",
                marginBottom: "6px",
                letterSpacing: "0.08em",
              }}
            >
              // SUGGEST A TOOL
            </div>
            <div style={{ fontWeight: 600, marginBottom: "6px" }}>
              Missing something from the list?
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
              Reach out with tool suggestions, corrections, or additions. Community contributions are welcomed.
            </div>
          </div>
          <a href="/about" className="btn-ghost">
            Contact →
          </a>
        </div>
      </div>
    </div>
  );
}
