"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

interface SearchItem {
  title: string;
  category: "Reports" | "Tools" | "Dossier" | "Navigation" | "Intelligence";
  description: string;
  url: string;
  isExternal?: boolean;
}

const SEARCH_ITEMS: SearchItem[] = [
  // Navigation
  { title: "Home", category: "Navigation", description: "Main overview, core pillars & research ethos", url: "/" },
  { title: "Reports", category: "Navigation", description: "Technical intelligence reports & malware investigations", url: "/reports" },
  { title: "Dossier", category: "Navigation", description: "Threat actor tracker & infrastructure correlation playbooks", url: "/dossier" },
  { title: "Tools", category: "Navigation", description: "Open source triage suites, AST deobfuscator & blockchain TUIs", url: "/tools" },
  { title: "Intelligence", category: "Navigation", description: "Public IOCs, YARA rules, and Sigma detection signatures", url: "/intelligence" },
  { title: "Achievements", category: "Navigation", description: "Bug bounty validations and responsible vulnerability disclosures", url: "/achievements" },
  { title: "Resources", category: "Navigation", description: "33+ IOC pivot chain visual reference maps", url: "/resources" },
  { title: "About", category: "Navigation", description: "Kenneth Helmuth — Operator bio & research methodology", url: "/about" },

  // Tools
  { title: "ChainTrack", category: "Tools", description: "Interactive TUI for blockchain wallet analysis (BTC, ETH, SOL, BNB)", url: "https://github.com/KennethHelmuth/chaintrack", isExternal: true },
  { title: "IOC Triage", category: "Tools", description: "CLI/TUI tool for auto-detecting, defanging & triaging 10+ IOC types", url: "https://github.com/KennethHelmuth/IoC-Triage-tool", isExternal: true },
  { title: "JS Deobfuscator", category: "Tools", description: "Static JavaScript malware deobfuscator using Babel AST transformations", url: "https://github.com/KennethHelmuth/JS-Deobfuscator", isExternal: true },
  { title: "Security Analysis Helper Toolkit", category: "Tools", description: "Python utilities for safe malware sample handling and DFIR triage", url: "https://github.com/KennethHelmuth/Security-Analysis-Helper-Toolkit", isExternal: true },
  { title: "Pivot Chains", category: "Tools", description: "Visual reference mapping 33 distinct IOC types across 6 analytical domains", url: "https://github.com/KennethHelmuth/Pivot-chains", isExternal: true },

  // Reports
  { title: "ClickFix-Delivered Stealc/OverlordRAT Campaign", category: "Reports", description: "Technical analysis and infrastructure attribution (CASE-2026-08-CLICKFIX-STEALC)", url: "https://medium.com/@Real-macs_hit", isExternal: true },
  { title: "Same Wallet, Two Domains: Serial Crypto Scam Operator", category: "Reports", description: "Tracking coordinated celebrity impersonation campaigns on bulletproof infrastructure", url: "https://medium.com/@Real-macs_hit/same-wallet-two-domains-tracking-a-serial-crypto-scam-operator-on-bulletproof-infrastructure-ff122c822c13", isExternal: true },
  { title: "The 21-Month Blind Spot: Why DCRat is Still Evading Defenses", category: "Reports", description: "Reverse engineering multi-stage infection chain & exposed C2 endpoints", url: "https://medium.com/@Real-macs_hit/the-21-month-blind-spot-why-dcrat-is-still-evading-enterprise-defenses-in-2026-b79682925760", isExternal: true },
  { title: "GemStuffer & BufferZoneCorp: Hidden Software Supply Chain Operations", category: "Reports", description: "Technical breakdown of package repository attacks scraping government data", url: "https://medium.com/@Real-macs_hit/gemstuffer-and-bufferzonecorp-two-hidden-operations-that-quietly-targeted-every-developers-329b79eb30dd", isExternal: true },
  { title: "Threat Advisory: The Campaign Triad", category: "Reports", description: "Advisory covering supply chains, Active Directory, and cloud identity vectors", url: "https://medium.com/@Real-macs_hit/threat-advisory-the-campaign-triad-f97fabb5b55f", isExternal: true },

  // Dossier
  { title: "ClickFix Stealc / OverlordRAT Threat Cluster", category: "Dossier", description: "ClickFix Social Engineering / SOCKS5 Overlord Mesh (CASE-2026-08-CLICKFIX-STEALC)", url: "/dossier" },
  { title: "DCRat Commodity Threat Cluster", category: "Dossier", description: "Bulletproof VPS / PHP C2 (/L1nc0In.php)", url: "/dossier" },
  { title: "TOXICSNAKE Threat Cluster", category: "Dossier", description: "Multi-Domain TDS / Obfuscated JS Loaders", url: "/dossier" },
  { title: "MAFFIA / FormBook Threat Group", category: "Dossier", description: "Fileless PowerShell In-Memory Staging", url: "/dossier" },
  { title: "Atomic Stealer (Affiliate xxxblyat)", category: "Dossier", description: "Typosquatted domains & macOS LaunchAgent persistence", url: "/dossier" },
  { title: "Fake Ghidra macOS Campaign Operator", category: "Dossier", description: "Mach-O Stage-2 payload delivery masquerading as Ghidra", url: "/dossier" },
  { title: "BANKOMAT Underground Identity Market", category: "Dossier", description: "Tor hidden services & automated SSN harvesting escrow", url: "/dossier" },
];

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "Reports":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      );
    case "Tools":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );
    case "Dossier":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="22" y1="12" x2="18" y2="12" />
          <line x1="6" y1="12" x2="2" y2="12" />
          <line x1="12" y1="6" x2="12" y2="2" />
          <line x1="12" y1="22" x2="12" y2="18" />
        </svg>
      );
    case "Intelligence":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    default:
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
  }
};

export default function SpotlightCommand() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMac, setIsMac] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMac(/(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent || ""));
    }
  }, []);

  const shortcutKey = isMac ? "⌘K" : "Ctrl+K";

  const filtered = SEARCH_ITEMS.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "/" && !isOpen && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 60);
      setSelectedIndex(0);
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSelect = (item: SearchItem) => {
    setIsOpen(false);
    if (item.isExternal) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.url);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev - 1 < 0 ? Math.max(0, filtered.length - 1) : prev - 1
      );
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    }
  };

  return (
    <>
      {/* Search Trigger Button in Navbar (Responsive) */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Spotlight search"
        className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1.5 text-[12px] font-medium text-[#a1a1a6] hover:text-[#f5f5f7] bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] hover:border-white/[0.2] rounded-full transition-all duration-200"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#a1a1a6]"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className="hidden sm:inline">Spotlight</span>
        <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white/10 rounded text-[#f5f5f7]">
          {shortcutKey}
        </kbd>
      </button>

      {/* Centered Pixel-Perfect Spotlight Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-[660px] bg-[#1a1a1e]/95 border border-white/15 rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.85),inset_0_1px_1px_0_rgba(255,255,255,0.2)] backdrop-blur-3xl overflow-hidden flex flex-col -translate-y-6"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
          >
            {/* Spotlight Search Header Bar */}
            <div className="flex items-center gap-3.5 px-5 py-3.5 border-b border-white/10 bg-white/[0.02]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#2997ff] shrink-0"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Spotlight Search..."
                className="w-full bg-transparent text-[18px] font-normal tracking-[-0.01em] text-white placeholder-[#6e6e73] outline-none font-sans leading-none"
              />
              <kbd
                onClick={() => setIsOpen(false)}
                className="px-2 py-0.5 text-[10px] font-mono text-[#86868b] bg-white/5 hover:bg-white/15 rounded border border-white/10 cursor-pointer transition-colors shrink-0"
              >
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="max-h-[390px] overflow-y-auto p-2 divide-y divide-transparent">
              {filtered.length === 0 ? (
                <div className="py-12 text-center text-[13.5px] text-[#86868b]">
                  No results found for &ldquo;{query}&rdquo;
                </div>
              ) : (
                filtered.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <div
                      key={item.title + item.url}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-100 ${
                        isSelected
                          ? "bg-[#2997ff]/20 text-white border border-[#2997ff]/40 shadow-sm"
                          : "text-[#a1a1a6] hover:bg-white/[0.04] border border-transparent"
                      }`}
                    >
                      {/* Left: Icon & Text Info (Vertically Centered) */}
                      <div className="flex items-center gap-3 min-w-0 pr-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? "bg-[#2997ff] text-white"
                              : "bg-white/[0.06] text-[#86868b]"
                          }`}
                        >
                          <CategoryIcon category={item.category} />
                        </div>

                        <div className="flex flex-col justify-center min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`text-[14px] font-medium leading-tight truncate ${
                                isSelected ? "text-white font-semibold" : "text-[#f5f5f7]"
                              }`}
                            >
                              {item.title}
                            </span>
                            {item.isExternal && (
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="text-[#86868b] shrink-0"
                              >
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                              </svg>
                            )}
                          </div>
                          <span className="text-[12px] text-[#86868b] truncate leading-normal mt-0.5">
                            {item.description}
                          </span>
                        </div>
                      </div>

                      {/* Right: Category Tag */}
                      <span
                        className={`shrink-0 text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                          isSelected
                            ? "bg-white/20 text-white font-semibold"
                            : "bg-white/[0.05] text-[#86868b] border border-white/[0.05]"
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer Telemetry Bar with Proper Alignment & Padding */}
            <div className="px-5 py-2.5 border-t border-white/10 bg-black/40 flex items-center justify-between text-[11px] font-mono text-[#86868b]">
              <div className="flex items-center gap-3.5">
                <span>↑↓ Navigate</span>
                <span>↵ Open</span>
                <span>ESC Close</span>
              </div>
              <span className="text-[#6e6e73]">{shortcutKey} or /</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
