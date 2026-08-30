import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reports",
  description: "Threat intelligence reports published by MACS-HIT.",
};

interface ReportItem {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
  tlp?: string;
  tags?: string[];
}

function optimizeMediumImageUrl(url: string, targetWidth = 720): string {
  if (!url) return url;
  // Replace large /max/XXXX/ or /resize:fit:XXXX/ with optimal card resolution (60-70% payload reduction)
  return url
    .replace(/\/max\/\d+\//, `/max/${targetWidth}/`)
    .replace(/\/resize:fit:\d+\//, `/resize:fit:${targetWidth}/`);
}

const REPORT_OVERRIDES: Record<string, Partial<ReportItem>> = {
  "deconstructing-majinahanashi-ransomware": {
    title: "“We Entered. We Looked Around. We Took What Was There”: Deconstructing Majinahanashi Ransomware",
    link: "https://medium.com/@Real-macs_hit/we-entered-we-looked-around-we-took-what-was-there-deconstructing-majinahanashi-ransomware-1367f4b0c952",
    tlp: "CLEAR",
    tags: ["Ransomware", "Majinahanashi", "Reverse Engineering", "Threat Intelligence", "Double Extortion", "Tor Infrastructure"],
    description: "Technical analysis and forensic deconstruction of the Majinahanashi ransomware operation, reverse-engineering custom C++ encryptor mechanics, anti-recovery automation, and multi-onion Tor infrastructure.",
    pubDate: "August 30, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*Ki6NxZT1vGg57MvI7ggeqg.png",
  },
  "clickfix-delivered-stealc-overlordrat": {
    title: "ClickFix-Delivered Stealc/OverlordRAT Campaign: Technical Analysis and Infrastructure Attribution",
    link: "https://medium.com/@Real-macs_hit/clickfix-delivered-stealc-overlordrat-campaign-technical-analysis-and-infrastructure-attribution-a6c6e7f8d9b0",
    tlp: "CLEAR",
    tags: ["Stealc", "OverlordRAT", "ClickFix", "Threat Intelligence", "Reverse Engineering", "C2 Infrastructure"],
    description: "Technical analysis and infrastructure attribution of a ClickFix-delivered campaign deploying Stealc InfoStealer and OverlordRAT. Case Reference: CASE-2026–08-CLICKFIX-STEALC.",
    pubDate: "August 13, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*Qu5hUZlI_QtPkD7xtsfFQQ.png",
  },
  "same-wallet-two-domains": {
    link: "https://medium.com/@Real-macs_hit/same-wallet-two-domains-tracking-a-serial-crypto-scam-operator-on-bulletproof-infrastructure-ff122c822c13",
    tlp: "WHITE",
    tags: ["Cryptocurrency", "Fraud", "Bulletproof Hosting", "X Platform", "SOCINT"],
    description: "A serial crypto scam operator running coordinated celebrity impersonation campaigns across two domains on bulletproof hosting infrastructure, with ~$1,056 USD confirmed collected in 18 days.",
    pubDate: "June 14, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*He8gf-ypeUaDNlbRf9xsfg.png",
  },
  "the-21-month-blind-spot": {
    link: "https://medium.com/@Real-macs_hit/the-21-month-blind-spot-why-dcrat-is-still-evading-enterprise-defenses-in-2026-b79682925760",
    tlp: "CLEAR",
    tags: ["Malware Analysis", "DCRat", "Threat Hunting", "C2 Infrastructure", "Reverse Engineering"],
    description: "A live technical investigation into an active DCRat commodity malware campaign, reverse-engineering the multi-stage infection chain, Stealer plugins, and exposed C2 endpoints.",
    pubDate: "May 7, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*Qu5hUZlI_QtPkD7xtsfFQQ.png",
  },
  "gemstuffer-and-bufferzonecorp": {
    title: "GemStuffer and BufferZoneCorp: Two Hidden Operations That Quietly Targeted Every Developer’s Environment",
    link: "https://medium.com/@Real-macs_hit/gemstuffer-and-bufferzonecorp-two-hidden-operations-that-quietly-targeted-every-developers-329b79eb30dd",
    tlp: "CLEAR",
    tags: ["Supply Chain", "RubyGems", "PyPI", "Threat Intelligence", "DevSecOps"],
    description: "Technical breakdown of two covert supply chain attacks targeting package repositories: GemStuffer scraping UK government data and BufferZoneCorp targeting developer environments.",
    pubDate: "May 22, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*9CxtAIK6-fIQ3wxiiuQAyA.png",
  },
  "threat-advisory-the-campaign-triad": {
    link: "https://medium.com/@Real-macs_hit/threat-advisory-the-campaign-triad-f97fabb5b55f",
    tlp: "CLEAR",
    tags: ["Threat Advisory", "Supply Chain", "Active Directory", "Cloud Security"],
    description: "Comprehensive threat advisory covering three concurrent cyber campaigns targeting software supply chains, Windows enterprise infrastructure, and cloud identity vectors.",
    pubDate: "May 21, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*gUx8k-njiaeC355tvy-m_w.png",
  },
  "ghidra-themed-macos-campaign": {
    link: "https://medium.com/@Real-macs_hit/ghidra-themed-macos-campaign-full-incident-report-a-technical-analysis-9010c33f40b5",
    tlp: "WHITE",
    tags: ["macOS Malware", "Ghidra", "Reverse Engineering", "Incident Response", "Mach-O"],
    description: "Full incident triage and technical analysis of a macOS malware campaign leveraging fake Ghidra reverse engineering installers to deliver second-stage payloads.",
    pubDate: "January 30, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*6-zCCocaw7sCfijP5_lblw.png",
  },
  "unmasking-the-maffia": {
    link: "https://medium.com/@Real-macs_hit/unmasking-the-maffia-a-deep-dive-into-the-5-stage-formbook-fileless-kill-chain-24a18b9f7732",
    tlp: "WHITE",
    tags: ["FormBook", "Fileless Malware", "PowerShell", "Memory Injection", "Stealer"],
    description: "In-depth reverse engineering of a 5-stage fileless loader kill chain (CU.ps1) deploying FormBook infostealer through encrypted PowerShell and MAFFIA memory loaders.",
    pubDate: "January 18, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*zSX6d476SbnfyF1fp6hmXA.png",
  },
  "threat-intelligence-dossier-toxicsnake": {
    link: "https://themalwarefiles.com/threat-intelligence-dossier-toxicsnake-b3e954bd644b",
    tlp: "WHITE",
    tags: ["TDS", "Traffic Distribution", "JavaScript Loader", "Infrastructure Tracking"],
    description: "Threat intelligence dossier tracking the TOXICSNAKE multi-domain traffic distribution system (TDS) and obfuscated JavaScript delivery infrastructure.",
    pubDate: "January 27, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*81Lx8tC1OSfCNK73wD67yQ.jpeg",
  },
  "inside-bankomat": {
    link: "https://medium.com/@Real-macs_hit/inside-bankomat-a-case-study-of-an-undergroundidentity-market-threat-summary-public-warning-2bff9752b781",
    tlp: "WHITE",
    tags: ["Darknet", "Identity Theft", "Underground Markets", "Cybercrime", "OSINT"],
    description: "Investigation into 'BANKOMAT', a commercialized darknet identity marketplace trading fullz, SSNs, and compromised personal records with SaaS-style infrastructure.",
    pubDate: "January 25, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*5CIMn2z6XrTSEabISVCiSQ.png",
  },
  "intelligence-report-transnational-page-laundering": {
    title: "Intelligence Report: Transnational Page Laundering & Dual-Fraud Network",
    link: "https://medium.com/@Real-macs_hit/intelligence-report-transnational-page-laundering-dual-fraud-network-823dfb19589d",
    tlp: "WHITE",
    tags: ["Social Media Fraud", "Page Laundering", "Phishing", "OSINT", "SOCINT"],
    description: "Investigation exposing a multi-million follower organized crime network operating transnational page laundering across Meta pages, running concurrent IP phishing and health fraud schemes managed out of Vietnam.",
    pubDate: "January 15, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*gik388zuUf60pncn432QWA.png",
  },
  "2026-amos-variant": {
    title: "2026 AMOS-Variant (Affiliate xxxblyat)",
    link: "https://medium.com/@Real-macs_hit/2026-amos-variant-affiliate-xxxblyat-2653a79d2cd8",
    tlp: "WHITE",
    tags: ["Atomic Stealer", "AMOS", "macOS Malware", "ClickFix", "AppleScript", "C2"],
    description: "Technical analysis of an advanced 2026 Atomic Stealer (AMOS) variant distributed via typosquatted domains (ptython[.]com) and ClickFix lures, featuring persistent LaunchAgent RAT capabilities and SOCKS5 proxying.",
    pubDate: "January 13, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*rLFuMnMWYUKt50A36W3L4Q.png",
  },
  "mass-youtube-livestream-hijacking": {
    title: "Mass YouTube Livestream Hijacking & Cryptocurrency Giveaway Scam",
    link: "https://medium.com/@Real-macs_hit/mass-youtube-livestream-hijacking-cryptocurrency-giveaway-scam-using-impersonation-and-fake-959a9c4824a1",
    tlp: "WHITE",
    tags: ["YouTube Hijacking", "Crypto Scam", "Account Takeover", "Fraud", "OSINT"],
    description: "Investigation documenting coordinated mass account takeovers of legitimate YouTube channels running looped livestreams, fake giveaway websites (trump25.us), and fabricated blockchain transaction telemetry.",
    pubDate: "January 8, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*EjZOfq-eYVmN3l7J-EdyHQ.png",
  },
};

const FALLBACK_REPORTS: ReportItem[] = [
  {
    title: "“We Entered. We Looked Around. We Took What Was There”: Deconstructing Majinahanashi Ransomware",
    link: "https://medium.com/@Real-macs_hit/we-entered-we-looked-around-we-took-what-was-there-deconstructing-majinahanashi-ransomware-1367f4b0c952",
    pubDate: "August 30, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*Ki6NxZT1vGg57MvI7ggeqg.png",
    description: "Technical analysis and forensic deconstruction of the Majinahanashi ransomware operation, reverse-engineering custom C++ encryptor mechanics, anti-recovery automation, and multi-onion Tor infrastructure.",
    tlp: "CLEAR",
    tags: ["Ransomware", "Majinahanashi", "Reverse Engineering", "Threat Intelligence", "Double Extortion", "Tor Infrastructure"],
  },
  {
    title: "ClickFix-Delivered Stealc/OverlordRAT Campaign: Technical Analysis and Infrastructure Attribution",
    link: "https://medium.com/@Real-macs_hit/clickfix-delivered-stealc-overlordrat-campaign-technical-analysis-and-infrastructure-attribution-a6c6e7f8d9b0",
    pubDate: "August 13, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*Qu5hUZlI_QtPkD7xtsfFQQ.png",
    description: "Technical analysis and infrastructure attribution of a ClickFix-delivered campaign deploying Stealc InfoStealer and OverlordRAT. Case Reference: CASE-2026–08-CLICKFIX-STEALC.",
    tlp: "CLEAR",
    tags: ["Stealc", "OverlordRAT", "ClickFix", "Threat Intelligence", "Reverse Engineering", "C2 Infrastructure"],
  },
  {
    title: "The 21-Month Blind Spot: Why DCRat is still Evading Enterprise Defenses in 2026",
    link: "https://medium.com/@Real-macs_hit/the-21-month-blind-spot-why-dcrat-is-still-evading-enterprise-defenses-in-2026-b79682925760",
    pubDate: "May 7, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*Qu5hUZlI_QtPkD7xtsfFQQ.png",
    description: "A live technical investigation into an active DCRat commodity malware campaign, reverse-engineering the multi-stage infection chain, Stealer plugins, and exposed C2 endpoints.",
    tlp: "CLEAR",
    tags: ["Malware Analysis", "DCRat", "Threat Hunting", "C2 Infrastructure", "Reverse Engineering"],
  },
  {
    title: "Same Wallet, Two Domains: Tracking a Serial Crypto Scam Operator on Bulletproof Infrastructure",
    link: "https://medium.com/@Real-macs_hit/same-wallet-two-domains-tracking-a-serial-crypto-scam-operator-on-bulletproof-infrastructure-ff122c822c13",
    pubDate: "June 14, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*He8gf-ypeUaDNlbRf9xsfg.png",
    description: "A serial crypto scam operator running coordinated celebrity impersonation campaigns across two domains on bulletproof hosting infrastructure, with ~$1,056 USD confirmed collected in 18 days.",
    tlp: "WHITE",
    tags: ["Cryptocurrency", "Fraud", "Bulletproof Hosting", "X Platform", "SOCINT"],
  },
  {
    title: "GemStuffer and BufferZoneCorp: Two Hidden Operations That Quietly Targeted Every Developer’s Environment",
    link: "https://medium.com/@Real-macs_hit/gemstuffer-and-bufferzonecorp-two-hidden-operations-that-quietly-targeted-every-developers-329b79eb30dd",
    pubDate: "May 22, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*9CxtAIK6-fIQ3wxiiuQAyA.png",
    description: "Technical breakdown of two covert supply chain attacks targeting package repositories: GemStuffer scraping UK government data and BufferZoneCorp targeting developer environments.",
    tlp: "CLEAR",
    tags: ["Supply Chain", "RubyGems", "PyPI", "Threat Intelligence", "DevSecOps"],
  },
  {
    title: "Threat Advisory: The Campaign Triad",
    link: "https://medium.com/@Real-macs_hit/threat-advisory-the-campaign-triad-f97fabb5b55f",
    pubDate: "May 21, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*gUx8k-njiaeC355tvy-m_w.png",
    description: "Comprehensive threat advisory covering three concurrent cyber campaigns targeting software supply chains, Windows enterprise infrastructure, and cloud identity vectors.",
    tlp: "CLEAR",
    tags: ["Threat Advisory", "Supply Chain", "Active Directory", "Cloud Security"],
  },
  {
    title: "Ghidra-themed macOS campaign — full incident report (A Technical Analysis)",
    link: "https://medium.com/@Real-macs_hit/ghidra-themed-macos-campaign-full-incident-report-a-technical-analysis-9010c33f40b5",
    pubDate: "January 30, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*6-zCCocaw7sCfijP5_lblw.png",
    description: "Full incident triage and technical analysis of a macOS malware campaign leveraging fake Ghidra reverse engineering installers to deliver second-stage payloads.",
    tlp: "WHITE",
    tags: ["macOS Malware", "Ghidra", "Reverse Engineering", "Incident Response", "Mach-O"],
  },
  {
    title: "Unmasking the MAFFIA: A Deep Dive into the 5-Stage FormBook Fileless Kill-Chain",
    link: "https://medium.com/@Real-macs_hit/unmasking-the-maffia-a-deep-dive-into-the-5-stage-formbook-fileless-kill-chain-24a18b9f7732",
    pubDate: "January 18, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*zSX6d476SbnfyF1fp6hmXA.png",
    description: "In-depth reverse engineering of a 5-stage fileless loader kill chain (CU.ps1) deploying FormBook infostealer through encrypted PowerShell and MAFFIA memory loaders.",
    tlp: "WHITE",
    tags: ["FormBook", "Fileless Malware", "PowerShell", "Memory Injection", "Stealer"],
  },
  {
    title: "Threat Intelligence Dossier: TOXICSNAKE",
    link: "https://themalwarefiles.com/threat-intelligence-dossier-toxicsnake-b3e954bd644b",
    pubDate: "January 27, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*81Lx8tC1OSfCNK73wD67yQ.jpeg",
    description: "Threat intelligence dossier tracking the TOXICSNAKE multi-domain traffic distribution system (TDS) and obfuscated JavaScript delivery infrastructure.",
    tlp: "WHITE",
    tags: ["TDS", "Traffic Distribution", "JavaScript Loader", "Infrastructure Tracking"],
  },
  {
    title: "Inside “BANKOMAT”: A Case Study of an UndergroundIdentity Market-Threat Summary & Public Warning.",
    link: "https://medium.com/@Real-macs_hit/inside-bankomat-a-case-study-of-an-undergroundidentity-market-threat-summary-public-warning-2bff9752b781",
    pubDate: "January 25, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*5CIMn2z6XrTSEabISVCiSQ.png",
    description: "Investigation into 'BANKOMAT', a commercialized darknet identity marketplace trading fullz, SSNs, and compromised personal records with SaaS-style infrastructure.",
    tlp: "WHITE",
    tags: ["Darknet", "Identity Theft", "Underground Markets", "Cybercrime", "OSINT"],
  },
  {
    title: "Intelligence Report: Transnational Page Laundering & Dual-Fraud Network",
    link: "https://medium.com/@Real-macs_hit/intelligence-report-transnational-page-laundering-dual-fraud-network-823dfb19589d",
    pubDate: "January 15, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*gik388zuUf60pncn432QWA.png",
    description: "Investigation exposing a multi-million follower organized crime network operating transnational page laundering across Meta pages, running concurrent IP phishing and health fraud schemes managed out of Vietnam.",
    tlp: "WHITE",
    tags: ["Social Media Fraud", "Page Laundering", "Phishing", "OSINT", "SOCINT"],
  },
  {
    title: "2026 AMOS-Variant (Affiliate xxxblyat)",
    link: "https://medium.com/@Real-macs_hit/2026-amos-variant-affiliate-xxxblyat-2653a79d2cd8",
    pubDate: "January 13, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*rLFuMnMWYUKt50A36W3L4Q.png",
    description: "Technical analysis of an advanced 2026 Atomic Stealer (AMOS) variant distributed via typosquatted domains (ptython[.]com) and ClickFix lures, featuring persistent LaunchAgent RAT capabilities and SOCKS5 proxying.",
    tlp: "WHITE",
    tags: ["Atomic Stealer", "AMOS", "macOS Malware", "ClickFix", "AppleScript", "C2"],
  },
  {
    title: "Mass YouTube Livestream Hijacking & Cryptocurrency Giveaway Scam",
    link: "https://medium.com/@Real-macs_hit/mass-youtube-livestream-hijacking-cryptocurrency-giveaway-scam-using-impersonation-and-fake-959a9c4824a1",
    pubDate: "January 8, 2026",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/1*EjZOfq-eYVmN3l7J-EdyHQ.png",
    description: "Investigation documenting coordinated mass account takeovers of legitimate YouTube channels running looped livestreams, fake giveaway websites (trump25.us), and fabricated blockchain transaction telemetry.",
    tlp: "WHITE",
    tags: ["YouTube Hijacking", "Crypto Scam", "Account Takeover", "Fraud", "OSINT"],
  },
];

async function getReports(): Promise<ReportItem[]> {
  try {
    const res = await fetch("https://medium.com/feed/@Real-macs_hit", {
      next: { revalidate: 3600 }, // Fetch at build time and cache
    });
    if (!res.ok) {
      console.warn(`Failed to fetch Medium RSS: ${res.statusText}`);
      return [];
    }
    const xml = await res.text();
    const items = xml.split("<item>");
    items.shift(); // remove channel info

    const parsedReports: ReportItem[] = items.map((item) => {
      const titleMatch = item.match(/<title>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/title>/);
      let title = titleMatch ? (titleMatch[1] || titleMatch[2]).trim() : "";

      const linkMatch = item.match(/<link>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/link>/);
      let link = linkMatch ? (linkMatch[1] || linkMatch[2]).trim() : "";

      const pubDateMatch = item.match(/<pubDate>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/pubDate>/);
      let pubDate = pubDateMatch ? (pubDateMatch[1] || pubDateMatch[2]).trim() : "";

      const contentMatch = item.match(/<content:encoded>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/content:encoded>/);
      const content = contentMatch ? (contentMatch[1] || contentMatch[2]) : "";

      // Extract first img src from content and optimize thumbnail URL
      const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/);
      let thumbnail = imgMatch ? imgMatch[1] : "";
      if (thumbnail) {
        thumbnail = optimizeMediumImageUrl(thumbnail, 720);
      }

      // Extract paragraphs
      const pMatches = [...content.matchAll(/<p>([\s\S]*?)<\/p>/g)].map((m) => m[1]);
      const cleanParagraphs = pMatches
        .map((p) => p.replace(/<[^>]+>/g, "").trim())
        .filter((p) => p && !p.startsWith("Published by") && !p.includes("────"));
      let description = cleanParagraphs[0] || "";

      let tlp: string | undefined = undefined;
      let tags: string[] | undefined = undefined;

      const overrideKey = Object.keys(REPORT_OVERRIDES).find(key =>
        link.includes(key) || title.toLowerCase().includes(key.replace(/-/g, " "))
      );
      if (overrideKey) {
        const override = REPORT_OVERRIDES[overrideKey];
        if (override.title) title = override.title;
        if (override.link) link = override.link;
        if (override.description) description = override.description;
        if (override.pubDate) pubDate = override.pubDate;
        if (override.thumbnail && !thumbnail) thumbnail = override.thumbnail;
        if (override.tlp) tlp = override.tlp;
        if (override.tags) tags = override.tags;
      }

      return {
        title,
        link,
        pubDate,
        thumbnail,
        description,
        tlp,
        tags,
      };
    });

    // Deduplicate cross-posted reports (e.g. personal account vs publication account)
    const seen = new Set<string>();
    const uniqueReports: ReportItem[] = [];

    for (const report of parsedReports) {
      if (!report.title) continue;
      // Normalize title for cross-post collision detection
      const normalizedTitle = report.title
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

      if (seen.has(normalizedTitle)) {
        continue;
      }
      seen.add(normalizedTitle);
      uniqueReports.push(report);
    }

    // Merge any published reports from FALLBACK_REPORTS that may have rolled out of the 10-item RSS window
    for (const fallback of FALLBACK_REPORTS) {
      const normalizedTitle = fallback.title
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
      if (!seen.has(normalizedTitle)) {
        seen.add(normalizedTitle);
        uniqueReports.push(fallback);
      }
    }

    return uniqueReports;
  } catch (error) {
    console.error("Error fetching Medium RSS feed:", error);
    return FALLBACK_REPORTS;
  }
}

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default async function ReportsPage() {
  const reports = await getReports();

  return (
    <div className="page">
      <div className="container-wide">
        <Reveal>
          <header className="page-header">
            <p className="page-eyebrow">Intelligence Reports</p>
            <h1 className="page-title">Reports</h1>
            <p className="page-subtitle">
              Technical analysis of malware campaigns, adversary infrastructure, and supply chain operations.
            </p>
          </header>
        </Reveal>

        {reports.length === 0 ? (
          <Reveal delay={120}>
            <div className="empty">
              <p className="empty-headline">No reports published yet.</p>
              <p className="empty-sub">
                Follow on{" "}
                <a
                  href="https://medium.com/@Real-macs_hit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medium
                </a>{" "}
                for updates when research is ready.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="reports-grid">
            {reports.map((report, index) => (
              <Reveal key={report.link} delay={100 + index * 80}>
                <a
                  href={report.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="report-card"
                >
                  {report.thumbnail && (
                    <div className="report-img-wrapper">
                      <img
                        src={report.thumbnail}
                        alt={report.title}
                        className="report-img"
                        loading={index < 2 ? "eager" : "lazy"}
                        decoding="async"
                        fetchPriority={index === 0 ? "high" : "auto"}
                        width={720}
                        height={405}
                      />
                    </div>
                  )}
                  <div className="report-info">
                    <div className="report-meta-row">
                      <span className="report-date">{formatDate(report.pubDate)}</span>
                      {report.tlp && (
                        <span className={`tlp-badge tlp-${report.tlp.toLowerCase()}`}>
                          TLP:{report.tlp}
                        </span>
                      )}
                    </div>
                    <h2 className="report-title">{report.title}</h2>
                    <p className="report-desc">{report.description}</p>
                    {report.tags && report.tags.length > 0 && (
                      <div className="report-tags">
                        {report.tags.map((tag) => (
                          <span key={tag} className="report-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <span className="report-footer-link" style={{ marginTop: report.tags && report.tags.length > 0 ? "16px" : "auto" }}>
                      Read Report <span>→</span>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
