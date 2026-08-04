"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

interface PivotChain {
  id: string;
  category: string;
  title: string;
  iocCount?: string;
  description: string;
  toolsUsed: string[];
  imageName?: string;
  githubAnchor?: string;
}

const CATEGORIES = [
  "All",
  "Network / Infra",
  "File-based",
  "Identity / Human",
  "Financial",
  "Malware / Behavioral",
  "Campaign / Actor",
];

const PIVOT_CHAINS: PivotChain[] = [
  // ── Network / Infra ──────────────────────────────
  {
    id: "ip-address",
    category: "Network / Infra",
    title: "IP Address Pivot Chain",
    description:
      "Pivoting from a single IP address to hosting infrastructure, historical DNS records, passive DNS, SSL/TLS certs, exposed ports, co-hosted domains, and communicating malware.",
    toolsUsed: ["Shodan", "Censys", "VirusTotal", "SecurityTrails", "GreyNoise", "Criminal IP"],
    imageName: "ip_address.png",
    githubAnchor: "ip-address",
  },
  {
    id: "domain-subdomain",
    category: "Network / Infra",
    title: "Domain & Subdomain Pivot Chain",
    description:
      "Mapping registered domains and subdomains to WHOIS registrant data, passive DNS history, SSL certificates (SANs), mail servers, and bulletproof hosting providers.",
    toolsUsed: ["SecurityTrails", "DNSDumpster", "Whoxy", "Crt.sh", "VirusTotal", "AlienVault OTX"],
    imageName: "domain_subdomain.png",
    githubAnchor: "domain--subdomain",
  },
  {
    id: "url",
    category: "Network / Infra",
    title: "URL Pivot Chain",
    description:
      "Detonating and expanding malicious URLs to uncover landing page DOMs, HTTP redirects, hosted payloads, IP destinations, and favicon hashes.",
    toolsUsed: ["URLScan.io", "Any.Run", "Hybrid Analysis", "Shodan", "FavFreak"],
    imageName: "url.png",
    githubAnchor: "url",
  },
  {
    id: "asn",
    category: "Network / Infra",
    title: "ASN (Autonomous System Number)",
    description:
      "Enumerating host network infrastructure, BGP prefixes, IP ranges, hosting provider tenancies, and ASN-wide threat actor concentrations.",
    toolsUsed: ["BGPView", "HE 3D BGP", "Ipinfo.io", "Shodan", "Censys"],
    imageName: "asn.png",
    githubAnchor: "asn-autonomous-system-number",
  },
  {
    id: "cert",
    category: "Network / Infra",
    title: "SSL/TLS Certificate Pivot Chain",
    description:
      "Correlating Certificate Transparency logs, Serial Numbers, JA3/JA3S fingerprints, and Subject Alternative Names (SANs) to cluster infrastructure.",
    toolsUsed: ["Crt.sh", "Censys", "Shodan", "CertSpotter", "VirusTotal"],
    imageName: "cert.png",
    githubAnchor: "ssltls-certificate",
  },
  {
    id: "nameserver-mx",
    category: "Network / Infra",
    title: "Nameserver & MX Records",
    description:
      "Uncovering domain infrastructure clusters, bulletproof hosting providers, and shared mail server configurations by pivoting on authoritative NS and MX records.",
    toolsUsed: ["SecurityTrails", "DNSDumpster", "Whoxy", "SpyOnWeb"],
    imageName: "nameserver_mxrecords.png",
    githubAnchor: "nameserver--mx-records",
  },
  {
    id: "c2-address",
    category: "Network / Infra",
    title: "C2 Address Pivot Chain",
    description:
      "Tracing Command and Control (C2) IP addresses and domain endpoints back to malware beaconing patterns, TLS certificates, and hosting clusters.",
    toolsUsed: ["Shodan", "Censys", "ThreatFox", "Feodo Tracker", "VirusTotal"],
    imageName: "c2_address.png",
    githubAnchor: "c2-address",
  },
  {
    id: "ja3-ja3s",
    category: "Network / Infra",
    title: "JA3 / JA3S Fingerprint",
    description:
      "Fingerprinting TLS client hello and server hello parameters to identify specific C2 frameworks (e.g., Cobalt Strike, Sliver) across unknown IP addresses.",
    toolsUsed: ["Shodan", "Censys", "JA3er", "Abuse.ch Sandbox", "Wireshark"],
    imageName: "ja3_ja3s_fingerprint.png",
    githubAnchor: "ja3--ja3s-fingerprint",
  },
  {
    id: "infrastructure-cluster",
    category: "Network / Infra",
    title: "Infrastructure Cluster Pivot Chain",
    description:
      "Aggregating multiple infrastructure indicators (IPs, Certs, Favicons, ASNs) to define and track full adversary hosting deployments over time.",
    toolsUsed: ["Maltego", "SpiderFoot", "Censys", "Shodan", "VirusTotal Graph"],
    imageName: "infrastructure_cluster.png",
    githubAnchor: "infrastructure-cluster",
  },

  // ── File-based ───────────────────────────────────
  {
    id: "file-hash",
    category: "File-based",
    title: "File Hash (MD5 / SHA1 / SHA256)",
    description:
      "Pivoting on unique file hashes across malware sandboxes, VirusTotal intelligence, static/dynamic execution behavioral logs, and YARA signatures.",
    toolsUsed: ["VirusTotal", "Hybrid Analysis", "Any.Run", "Joe Sandbox", "MalwareBazaar"],
    imageName: "file_hash.png",
    githubAnchor: "file-hash-md5--sha1--sha256",
  },
  {
    id: "file-name",
    category: "File-based",
    title: "File Name Pivot Chain",
    description:
      "Analyzing file naming conventions, phishing attachments, lure patterns, and loader filenames to track campaign distributions.",
    toolsUsed: ["VirusTotal", "MalwareBazaar", "InQuest", "Triage Sandbox"],
    imageName: "file_name.png",
    githubAnchor: "file-name",
  },
  {
    id: "file-path",
    category: "File-based",
    title: "File Path & PDB Debug Path",
    description:
      "Examining hardcoded installation directories, staging paths, persistence folders, and PDB debug paths to identify developer environments.",
    toolsUsed: ["Capa", "PEstudio", "Ghidra", "VirusTotal Graph"],
    imageName: "file_path.png",
    githubAnchor: "file-path",
  },
  {
    id: "imphash",
    category: "File-based",
    title: "Import Hash (ImpHash)",
    description:
      "Grouping compiled PE binaries sharing identical Windows API import tables to identify malware families and common build toolchains.",
    toolsUsed: ["VirusTotal", "PEstudio", "MalwareBazaar", "YARA"],
    imageName: "import_hash.png",
    githubAnchor: "import-hash-imphash",
  },
  {
    id: "code-signing-cert",
    category: "File-based",
    title: "Code Signing Certificate",
    description:
      "Tracking compromised, stolen, or fraudulent digital certificates across signed malware binaries to link disparate developer groups.",
    toolsUsed: ["VirusTotal", "Signcheck", "PEstudio", "Certutil"],
    imageName: "code_signing_cert.png",
    githubAnchor: "code-signing-certificate",
  },
  {
    id: "yara-rule-match",
    category: "File-based",
    title: "YARA Rule Match",
    description:
      "Leveraging custom byte and string pattern signatures to hunt for undetected variants across repository samples.",
    toolsUsed: ["YARA", "VT Hunting", "Unpac.me", "MalwareBazaar"],
    imageName: "yara_rule_match.png",
    githubAnchor: "yara-rule-match",
  },

  // ── Identity / Human ──────────────────────────────
  {
    id: "email-infra",
    category: "Identity / Human",
    title: "Email Address (Infrastructure)",
    description:
      "Tracing administrative and WHOIS registrant email addresses linked to domain registrations, bulletproof hostings, and domain certificates.",
    toolsUsed: ["Whoxy", "SecurityTrails", "Reverse WHOIS", "Hunter.io"],
    imageName: "email.png",
    githubAnchor: "email-address-infrastructure",
  },
  {
    id: "email-identity",
    category: "Identity / Human",
    title: "Email Address (Identity)",
    description:
      "Expanding human threat actor emails into breach records, social media profiles, forum registrations, and associated accounts.",
    toolsUsed: ["HaveIBeenPwned", "EPIEO", "OSINT.rocks", "Holehe"],
    imageName: "email_identity.png",
    githubAnchor: "email-address-identity",
  },
  {
    id: "username-handle",
    category: "Identity / Human",
    title: "Username / Handle Pivot Chain",
    description:
      "Tracking threat actor aliases across underground forums, messaging channels (Telegram), code repos, and gaming platforms.",
    toolsUsed: ["Sherlock", "WhatsMyName", "Maigret", "Telegram Search"],
    imageName: "username_handle.png",
    githubAnchor: "username--handle",
  },
  {
    id: "phone-number",
    category: "Identity / Human",
    title: "Phone Number Pivot Chain",
    description:
      "Correlating registered phone numbers to carrier lookup, messaging accounts, breach records, and WHOIS registrations.",
    toolsUsed: ["Truecaller", "PhoneInfoga", "EyeCon", "Sync.me"],
    imageName: "phone_number.png",
    githubAnchor: "phone-number",
  },
  {
    id: "full-name-alias",
    category: "Identity / Human",
    title: "Full Name / Alias Pivot Chain",
    description:
      "Pivoting from real-name aliases to corporate registry filings, domain ownership records, and cross-platform footprints.",
    toolsUsed: ["OpenCorporates", "Google Dorks", "LinkedIn", "Pipl"],
    imageName: "full_name_alias.png",
    githubAnchor: "full-name--alias",
  },
  {
    id: "social-media-profile",
    category: "Identity / Human",
    title: "Social Media Profile",
    description:
      "Mapping social media footprints (X, Telegram, VK, GitHub) to identify network connections, post history, and linked infrastructure.",
    toolsUsed: ["SocialBlade", "Archive.today", "Wayback Machine", "Osintgram"],
    imageName: "social_media_profile.png",
    githubAnchor: "social-media-profile",
  },
  {
    id: "pgp-key",
    category: "Identity / Human",
    title: "PGP Key / Key ID",
    description:
      "Pivoting on public PGP key IDs, key signatures, creation dates, and embedded email addresses across keyservers.",
    toolsUsed: ["Keybase", "MIT Keyserver", "OpenPGP.org", "GitHub Gists"],
    imageName: "pgp_key_id.png",
    githubAnchor: "pgp-key--key-id",
  },

  // ── Financial ─────────────────────────────────────
  {
    id: "crypto-wallet",
    category: "Financial",
    title: "Crypto Wallet Address",
    description:
      "Tracking cryptocurrency wallet addresses across BTC, ETH, USDT, SOL, and BNB. Mapping incoming ransomware payments and scam cashouts.",
    toolsUsed: ["ChainTrack", "Chainalysis", "Blockchain.com", "Etherscan", "TRONSCAN"],
    imageName: "crypto_wallet.png",
    githubAnchor: "crypto-wallet-address",
  },
  {
    id: "transaction-hash",
    category: "Financial",
    title: "Transaction Hash (TX-HASH)",
    description:
      "Analyzing blockchain transaction flows, input/output wallet clusters, smart contract interactions, and mixer activity.",
    toolsUsed: ["Etherscan", "Blockchair", "Tornado Cash Trackers", "Metasleuth"],
    imageName: "transaction_hash.png",
    githubAnchor: "transaction-hash-tx-hash",
  },
  {
    id: "bank-account-iban",
    category: "Financial",
    title: "Bank Account / IBAN",
    description:
      "Pivoting on wire transfer parameters, IBAN BIC/SWIFT routing details, and mule accounts linked to financial fraud campaigns.",
    toolsUsed: ["IBAN Calculator", "Bank Code Lookup", "SWIFT Directory"],
    imageName: "bank_account_iban.png",
    githubAnchor: "bank-account--iban",
  },
  {
    id: "payment-processor-id",
    category: "Financial",
    title: "Payment Processor ID",
    description:
      "Identifying merchant IDs, Stripe/PayPal merchant tokens, and gateway accounts used by scam platforms.",
    toolsUsed: ["BuiltWith", "DOM Inspector", "URLScan.io"],
    imageName: "payment_processor_id.png",
    githubAnchor: "payment-processor-id",
  },

  // ── Malware / Behavioral ──────────────────────────
  {
    id: "mutex-name",
    category: "Malware / Behavioral",
    title: "Mutex Name Pivot Chain",
    description:
      "Correlating hardcoded Windows mutex names created by malware instances to uniquely identify malware family deployments.",
    toolsUsed: ["VirusTotal", "Any.Run", "Triage", "Joe Sandbox"],
    imageName: "mutex_name.png",
    githubAnchor: "mutex-name",
  },
  {
    id: "registry-key-value",
    category: "Malware / Behavioral",
    title: "Registry Key / Value",
    description:
      "Tracing persistence mechanisms (Run keys, Services, COM Hijacking) across execution logs to classify campaign behaviors.",
    toolsUsed: ["Sysmon Logs", "Procmon", "Capa", "VirusTotal"],
    imageName: "registry_key_value.png",
    githubAnchor: "registry-key--value",
  },
  {
    id: "user-agent-string",
    category: "Malware / Behavioral",
    title: "User-Agent String",
    description:
      "Fingerprinting unique or hardcoded C2 beacon HTTP User-Agent strings across proxy and SIEM log telemetry.",
    toolsUsed: ["Shodan", "GreyNoise", "VirusTotal", "Splunk"],
    imageName: "user_agent_string.png",
    githubAnchor: "user-agent-string",
  },
  {
    id: "cve-exploit-reference",
    category: "Malware / Behavioral",
    title: "CVE / Exploit Reference",
    description:
      "Mapping public vulnerability identifiers (CVEs) to active exploit kits, initial access broker activity, and proof-of-concept repos.",
    toolsUsed: ["NVD", "Exploit-DB", "VulnCheck", "Shodan"],
    imageName: "cve_exploit_reference.png",
    githubAnchor: "cve--exploit-reference",
  },

  // ── Campaign / Actor-level ────────────────────────
  {
    id: "ttp-mitre-attack",
    category: "Campaign / Actor",
    title: "TTP (MITRE ATT&CK)",
    description:
      "Aggregating adversary Tactics, Techniques, and Procedures to build behavioral signatures and track long-term threat groups.",
    toolsUsed: ["MITRE ATT&CK Navigator", "Tidal Cyber", "Mandiant Intel"],
    imageName: "ttp_mitre_attack.png",
    githubAnchor: "ttp-mitre-attck",
  },
  {
    id: "threat-actor-alias",
    category: "Campaign / Actor",
    title: "Threat Actor Alias / Group Name",
    description:
      "Mapping nation-state and cybercrime group nomenclature across vendor tracking designations (e.g. APT29, Midnight Blizzard, Cozy Bear).",
    toolsUsed: ["Malpedia", "ETDA (External Threat Actor Database)", "MISP"],
    imageName: "threat_actor_alias_group_name.png",
    githubAnchor: "threat-actor-alias--group-name",
  },
  {
    id: "malware-family-name",
    category: "Campaign / Actor",
    title: "Malware Family Name",
    description:
      "Pivoting across malware strain designations to track loader evolution, C2 framework shifts, and shared threat actor toolkits.",
    toolsUsed: ["Malpedia", "VirusTotal Graph", "Unpac.me", "MalwareBazaar"],
    imageName: "malware_family_name.png",
    githubAnchor: "malware-family-name",
  },
];

const RAW_IMG_BASE = "https://raw.githubusercontent.com/KennethHelmuth/Pivot-chains/main/pivot-chains/";
const REPO_URL = "https://github.com/KennethHelmuth/Pivot-chains";

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalImage, setActiveModalImage] = useState<{
    title: string;
    url: string;
  } | null>(null);

  const filteredChains = PIVOT_CHAINS.filter((chain) => {
    const matchesCategory =
      selectedCategory === "All" || chain.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      chain.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chain.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chain.toolsUsed.some((tool) =>
        tool.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page">
      <div className="container-wide">
        {/* ── Page Header ──────────────────────── */}
        <Reveal>
          <header className="page-header" style={{ marginBottom: 48 }}>
            <p className="page-eyebrow">Playbooks & Reference Maps</p>
            <h1 className="page-title">Resources</h1>
          </header>
        </Reveal>

        {/* ── Featured Pivot Chains Callout ────── */}
        <Reveal delay={60}>
          <div className="tool-item" style={{ marginBottom: 40, padding: "32px" }}>
            <div className="tool-header" style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <h2 className="tool-name" style={{ fontSize: "1.35rem" }}>
                  OSINT / CTI Pivot Chain Reference
                </h2>
                <span className="tool-badge">33 IOC Types</span>
              </div>
              <span className="tool-lang">Reference Playbook</span>
            </div>
            <p className="tool-repo">github.com/KennethHelmuth/Pivot-chains</p>
            <p className="tool-desc" style={{ maxWidth: "780px", marginBottom: 20 }}>
              An actionable reference mapping each Indicator of Compromise (IOC) type to its full pivot chain, detailing the specific Cyber Threat Intelligence (CTI) and Open Source Intelligence (OSINT) tool used at every hop. Built for threat hunters, incident responders, and security analysts.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: "0.82rem", minHeight: "38px", padding: "8px 20px" }}
              >
                View Repository on GitHub &rarr;
              </a>
            </div>
          </div>
        </Reveal>

        {/* ── Search & Filter Bar ──────────────── */}
        <Reveal delay={120}>
          <div style={{ marginBottom: 36 }}>
            <div className="spotlight-wrapper" style={{ margin: "0 0 24px" }}>
              <div className="spotlight-bar" style={{ maxWidth: "100%" }}>
                <svg
                  className="spotlight-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Filter by IOC, category, or tool (e.g. Shodan, VirusTotal, Crypto Wallet)..."
                  className="spotlight-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--text-3)",
                      cursor: "pointer",
                      fontSize: "0.85rem",
                    }}
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Category Pill Filters */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "980px",
                    fontSize: "0.8rem",
                    fontWeight: selectedCategory === cat ? 600 : 400,
                    fontFamily: "var(--sans)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    border:
                      selectedCategory === cat
                        ? "1px solid rgba(58, 134, 255, 0.4)"
                        : "1px solid var(--glass-border)",
                    background:
                      selectedCategory === cat
                        ? "rgba(58, 134, 255, 0.15)"
                        : "rgba(255, 255, 255, 0.03)",
                    color:
                      selectedCategory === cat ? "#ffffff" : "var(--text-2)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Pivot Chains Grid ────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
            marginTop: 24,
          }}
        >
          {filteredChains.map((chain, index) => (
            <Reveal key={chain.id} delay={(index % 6) * 60}>
              <div
                className="intel-card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "24px",
                }}
              >
                {/* Header */}
                <div style={{ marginBottom: 12 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 8,
                    }}
                  >
                    <span className="tool-badge" style={{ fontSize: "0.6rem" }}>
                      {chain.category}
                    </span>
                  </div>
                  <h3 className="intel-card-title" style={{ fontSize: "1.1rem" }}>
                    {chain.title}
                  </h3>
                </div>

                <p className="intel-card-desc" style={{ fontSize: "0.88rem" }}>
                  {chain.description}
                </p>

                {/* Diagram Preview Image (if available) */}
                {chain.imageName && (
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "10px",
                      overflow: "hidden",
                      border: "1px solid var(--border)",
                      background: "rgba(10, 10, 15, 0.8)",
                      marginBottom: "16px",
                      cursor: "pointer",
                      aspectRatio: "16/9",
                    }}
                    onClick={() =>
                      setActiveModalImage({
                        title: chain.title,
                        url: `${RAW_IMG_BASE}${chain.imageName}`,
                      })
                    }
                  >
                    <img
                      src={`${RAW_IMG_BASE}${chain.imageName}`}
                      alt={chain.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      loading="lazy"
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 8,
                        right: 8,
                        background: "rgba(0, 0, 0, 0.75)",
                        backdropFilter: "blur(4px)",
                        color: "var(--text-2)",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        fontSize: "0.65rem",
                        fontFamily: "var(--mono)",
                      }}
                    >
                      Click to Expand 🔍
                    </div>
                  </div>
                )}

                {/* Tools Tags */}
                <div style={{ marginTop: "auto", paddingTop: 12 }}>
                  <p
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "0.65rem",
                      color: "var(--text-3)",
                      marginBottom: 6,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Primary Tools
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "4px",
                      marginBottom: 16,
                    }}
                  >
                    {chain.toolsUsed.map((tool) => (
                      <span key={tool} className="report-tag" style={{ fontSize: "0.68rem" }}>
                        {tool}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`${REPO_URL}#${chain.githubAnchor}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="intel-card-link"
                  >
                    View Playbook <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {filteredChains.length === 0 && (
          <div className="empty">
            <p className="empty-headline">No matching pivot chains found</p>
            <p className="empty-sub">
              Try adjusting your search query or selected category filter.
            </p>
          </div>
        )}
      </div>

      {/* ── Image Modal / Lightbox ───────────── */}
      {activeModalImage && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0, 0, 0, 0.88)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
          onClick={() => setActiveModalImage(null)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "92vw",
              maxHeight: "88vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginBottom: 12,
                color: "#ffffff",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                {activeModalImage.title}
              </h3>
              <button
                onClick={() => setActiveModalImage(null)}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                &times;
              </button>
            </div>
            <img
              src={activeModalImage.url}
              alt={activeModalImage.title}
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: "12px",
                border: "1px solid var(--border-mid)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.8)",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
