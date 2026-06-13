import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "MACS-HIT",
  description:
    "Independent threat intelligence research by Kenneth Helmuth. No vendor. No agenda.",
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────── */}
      <section className="hero">
        <p className="hero-eyebrow anim-hero-1">
          Cyber Threat Intelligence
        </p>

        <h1 className="hero-headline anim-hero-2">
          MACS-HIT
        </h1>

        <p className="hero-tagline anim-hero-3">
          Independent threat intelligence research.{" "}
          <em>No vendor. No agenda.</em>
        </p>

        <div className="hero-actions anim-hero-4">
          <Link href="/reports" className="btn btn-primary">
            Reports
          </Link>
          <Link href="/dossier" className="btn btn-ghost">
            Dossier
          </Link>
        </div>

        <span className="hero-scroll">scroll</span>
      </section>

      {/* ── Feature grid ──────────────────────── */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="container-mid">
          <Reveal>
            <div className="feature-grid">
              <div className="feature-cell">
                <p className="feature-label">Reports</p>
                <p className="feature-body">
                  Technical analysis of threats, campaigns, and malware.
                  Published when research is complete, not on a schedule.
                </p>
              </div>
              <div className="feature-cell">
                <p className="feature-label">Dossier</p>
                <p className="feature-body">
                  Actor and campaign tracking. Profiles built incrementally
                  as investigation develops.
                </p>
              </div>
              <div className="feature-cell">
                <p className="feature-label">Tools</p>
                <p className="feature-body">
                  Open-source utilities for threat triage and analysis.
                  All code is on GitHub.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Closing statement ─────────────────── */}
      <section style={{ padding: "0 24px 160px" }}>
        <Reveal>
          <div
            style={{
              maxWidth: 560,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "clamp(19px, 2.5vw, 23px)",
                color: "var(--text-2)",
                lineHeight: 1.7,
                letterSpacing: "-0.015em",
              }}
            >
              Research is only useful if it is honest.
              Everything published here is grounded in
              observable evidence.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
