"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/reports", label: "Reports" },
  { href: "/dossier", label: "Dossier" },
  { href: "/tools",   label: "Tools"   },
  { href: "/about",   label: "About"   },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * 0.6;

    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Run once on mount to handle direct-load on interior pages
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Interior pages (non-home) always show frosted nav
  const isHome = pathname === "/" || pathname === "";
  const frosted = scrolled || !isHome;

  return (
    <nav className={`nav${frosted ? " scrolled" : ""}`}>
      <div className="container-wide nav-inner">
        <Link href="/" className="nav-logo" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "#ffffff" }}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span>MACS-HIT</span>
        </Link>
        <div className="nav-links">
          {links.map(({ href, label }) => {
            const active =
              pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`nav-link${active ? " active" : ""}`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
