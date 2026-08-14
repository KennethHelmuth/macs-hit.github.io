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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`apple-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="apple-nav-inner container-wide">
          {/* Logo */}
          <Link
            href="/"
            className="apple-nav-logo"
            aria-label="MACS-HIT Home"
            onClick={() => setMobileMenuOpen(false)}
          >
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
          <nav className="apple-nav-links" aria-label="Main Navigation">
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
          </nav>

          {/* Right Controls */}
          <div className="apple-nav-right">
            <SpotlightCommand />

            <Link href="/reports" className="apple-nav-btn hidden md:inline-flex">
              Research
            </Link>

            {/* Mobile Hamburger / Close Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`apple-burger-btn ${mobileMenuOpen ? "open" : ""}`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span className="burger-bar" />
              <span className="burger-bar" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Pure Black Apple Mobile Drawer */}
      <div
        className={`apple-mobile-menu ${mobileMenuOpen ? "is-open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="apple-mobile-menu-inner">
          {/* Mobile Nav Links */}
          <div className="apple-mobile-links-container">
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
                  <span>{label}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="apple-mobile-arrow"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
              );
            })}
          </div>

          {/* Quick External Links on Mobile */}
          <div className="apple-mobile-footer">
            <a
              href="https://medium.com/@Real-macs_hit"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-mobile-sublink"
            >
              Medium ↗
            </a>
            <a
              href="https://github.com/KennethHelmuth"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-mobile-sublink"
            >
              GitHub ↗
            </a>
            <a
              href="https://x.com/MacsHitX"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-mobile-sublink"
            >
              X.com ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
