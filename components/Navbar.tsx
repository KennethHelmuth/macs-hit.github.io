"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import SpotlightCommand from "@/components/SpotlightCommand";

const links = [
  { href: "/reports", label: "Reports" },
  { href: "/dossier", label: "Dossier" },
  { href: "/intelligence", label: "Intelligence" },
  { href: "/tools", label: "Tools" },
  { href: "/resources", label: "Resources" },
  { href: "/achievements", label: "Achievements" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`apple-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="apple-nav-inner container-wide">
          {/* Logo */}
          <Link href="/" className="apple-nav-logo" aria-label="MACS-HIT Home">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="apple-logo-icon"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span className="apple-logo-text">MACS-HIT</span>
          </Link>

          {/* Nav Links (Desktop) */}
          <div className="apple-nav-links">
            {links.map(({ href, label }) => {
              const active =
                pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`apple-nav-link ${active ? "active" : ""}`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Right Action / Command Palette & Mobile Toggle */}
          <div className="apple-nav-right">
            <SpotlightCommand />

            <Link href="/reports" className="apple-nav-btn">
              Research
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`apple-burger-btn ${mobileMenuOpen ? "open" : ""}`}
              aria-label="Toggle navigation menu"
            >
              <span className="burger-bar" />
              <span className="burger-bar" />
            </button>
          </div>
        </div>
      </nav>

      {/* Apple-style Mobile Menu Dropdown */}
      <div className={`apple-mobile-menu ${mobileMenuOpen ? "is-open" : ""}`}>
        <div className="apple-mobile-menu-inner container">
          {links.map(({ href, label }) => {
            const active =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`apple-mobile-link ${active ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
