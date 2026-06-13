"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/macs-hit.github.io/reports", label: "Reports" },
  { href: "/macs-hit.github.io/dossier", label: "Dossier" },
  { href: "/macs-hit.github.io/tools", label: "Tools" },
  { href: "/macs-hit.github.io/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <div className="container-wide nav-inner">
        <Link href="/macs-hit.github.io" className="nav-logo">
          MACS-HIT
        </Link>
        <div className="nav-links">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
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
