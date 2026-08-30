import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Dossier",
  description:
    "Threat actor and campaign investigation tracker. Profiles built as research develops.",
};

interface DossierEntry {
  name: string;
  infrastructure: string;
  campaigns: string[];
  reportUrl?: string;
}

async function getEntries(): Promise<DossierEntry[]> {
  return [
    {
      name: "Majinahanashi Ransomware Threat Cluster",
      infrastructure: "Tor Hidden Services / Multi-Onion Storage Topology",
      campaigns: ["CASE-2026-08-MAJINAHANASHI", "Double-Extortion DLS Operations", "Autonomous C++ Encryptor", "Anti-Recovery Automation"],
      reportUrl: "https://medium.com/@Real-macs_hit/we-entered-we-looked-around-we-took-what-was-there-deconstructing-majinahanashi-ransomware-1367f4b0c952",
    },
    {
      name: "ClickFix Stealc / OverlordRAT Threat Cluster",
      infrastructure: "ClickFix Social Engineering / SOCKS5 Overlord Mesh",
      campaigns: ["CASE-2026-08-CLICKFIX-STEALC", "Stealc InfoStealer Delivery", "OverlordRAT Multi-Stage Staging", "In-Memory PowerShell Execution"],
      reportUrl: "https://medium.com/@Real-macs_hit",
    },
    {
      name: "Unnamed Crypto Giveaway Operator",
      infrastructure: "AS26383/Baxet Group",
      campaigns: ["elon2x.com", "xcoinwallet.net"],
      reportUrl: "https://medium.com/@Real-macs_hit/same-wallet-two-domains-tracking-a-serial-crypto-scam-operator-on-bulletproof-infrastructure-ff122c822c13",
    },
    {
      name: "DCRat Commodity Threat Cluster",
      infrastructure: "Bulletproof VPS / PHP C2 (/L1nc0In.php)",
      campaigns: ["DCRat 2026 Distribution", "Crystal Stealer Plug-in"],
      reportUrl: "https://medium.com/@Real-macs_hit/the-21-month-blind-spot-why-dcrat-is-still-evading-enterprise-defenses-in-2026-b79682925760",
    },
    {
      name: "GemStuffer & BufferZoneCorp Operators",
      infrastructure: "RubyGems & PyPI Package Repositories",
      campaigns: ["GemStuffer UK Gov Scrape", "BufferZoneCorp Dev Infiltration"],
      reportUrl: "https://medium.com/@Real-macs_hit/gemstuffer-and-bufferzonecorp-two-hidden-operations-that-quietly-targeted-every-developers-329b79eb30dd",
    },
    {
      name: "TOXICSNAKE Threat Cluster",
      infrastructure: "Multi-Domain TDS / Obfuscated JS Loaders",
      campaigns: ["TOXICSNAKE Traffic Distribution", "Stage-1 JS Dropper"],
      reportUrl: "https://themalwarefiles.com/threat-intelligence-dossier-toxicsnake-b3e954bd644b",
    },
    {
      name: "MAFFIA / FormBook Threat Group",
      infrastructure: "Fileless PowerShell In-Memory Staging",
      campaigns: ["CU.ps1 Fileless Chain", "MAFFIA Memory Loader", "FormBook Stealer"],
      reportUrl: "https://medium.com/@Real-macs_hit/unmasking-the-maffia-a-deep-dive-into-the-5-stage-formbook-fileless-kill-chain-24a18b9f7732",
    },
    {
      name: "Fake Ghidra macOS Campaign Operator",
      infrastructure: "Masqueraded Reverse Engineering Portals",
      campaigns: ["Ghidra macOS Lure", "Mach-O Stage-2 Payload Delivery"],
      reportUrl: "https://medium.com/@Real-macs_hit/ghidra-themed-macos-campaign-full-incident-report-a-technical-analysis-9010c33f40b5",
    },
    {
      name: "BANKOMAT Underground Identity Market",
      infrastructure: "Tor Hidden Services / Automated Identity Escrow",
      campaigns: ["BANKOMAT Fullz Trading", "Automated SSN Harvesting"],
      reportUrl: "https://medium.com/@Real-macs_hit/inside-bankomat-a-case-study-of-an-undergroundidentity-market-threat-summary-public-warning-2bff9752b781",
    },
    {
      name: "Vietnam-Managed Page Laundering Network",
      infrastructure: "Meta High-Follower Page Laundering / Phishing Hub",
      campaigns: ["Transnational Dual-Fraud Network", "Meta Page Assembly Line", "Vietnam Admin Ring"],
      reportUrl: "https://medium.com/@Real-macs_hit/intelligence-report-transnational-page-laundering-dual-fraud-network-823dfb19589d",
    },
    {
      name: "Atomic Stealer (Affiliate xxxblyat)",
      infrastructure: "Typosquatted Domains (ptython[.]com) / C2: 217.119.139.117",
      campaigns: ["AMOS ClickFix Distribution", "LaunchAgent Persistence RAT", "Affiliate xxxblyat Campaign"],
      reportUrl: "https://medium.com/@Real-macs_hit/2026-amos-variant-affiliate-xxxblyat-2653a79d2cd8",
    },
    {
      name: "Mass YouTube Livestream Hijacking Ring",
      infrastructure: "Compromised YouTube Channels / trump25.us",
      campaigns: ["Looped Stream Impersonation", "Fake Giveaway BTC (12QTXE...)", "#trumpcrypto2025 Lures"],
      reportUrl: "https://medium.com/@Real-macs_hit/mass-youtube-livestream-hijacking-cryptocurrency-giveaway-scam-using-impersonation-and-fake-959a9c4824a1",
    },
  ];
}

export default async function DossierPage() {
  const entries = await getEntries();

  return (
    <div className="page">
      <div className="container-wide">
        <Reveal>
          <header className="page-header">
            <p className="page-eyebrow">Investigation Tracker</p>
            <h1 className="page-title">Dossier</h1>
            <p className="page-subtitle">
              Threat actor profiles, infrastructure clusters, and campaign correlation playbooks.
            </p>
          </header>
        </Reveal>

        <div className="dossier-grid">
          {entries.map((entry, index) => (
            <Reveal key={entry.name} delay={index * 50}>
              <a
                href={entry.reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dossier-card"
              >
                <div className="dossier-header">
                  <h2 className="dossier-name">{entry.name}</h2>
                </div>

                <div className="dossier-details">
                  <div className="dossier-detail-group">
                    <span className="dossier-label">Infrastructure</span>
                    <span className="dossier-value">{entry.infrastructure}</span>
                  </div>

                  <div className="dossier-detail-group">
                    <span className="dossier-label">Campaigns</span>
                    <div className="dossier-campaigns">
                      {entry.campaigns.map((camp) => (
                        <span key={camp} className="dossier-campaign">
                          {camp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {entry.reportUrl && (
                  <span className="dossier-card-link">
                    Read Investigation Report
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
