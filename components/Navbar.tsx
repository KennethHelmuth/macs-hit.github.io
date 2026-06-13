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
        <Link href="/" className="nav-logo">
          MACS-HIT
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
