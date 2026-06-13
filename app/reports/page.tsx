import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reports",
  description:
    "Threat intelligence reports published by MACS-HIT.",
};

async function getReports() {
  // Reads from content/reports/ at build time when reports exist.
  return [];
}

export default async function ReportsPage() {
  const reports = await getReports();

  return (
    <div className="page">
      <div className="container">
        <Reveal>
          <header className="page-header">
            <p className="page-eyebrow">Intelligence Reports</p>
            <h1 className="page-title">Reports</h1>
          </header>
        </Reveal>

        {reports.length === 0 ? (
          <Reveal delay={120}>
            <div className="empty">
              <p className="empty-headline">No reports published yet.</p>
              <p className="empty-sub">
                Follow on{" "}
                <a
                  href="https://medium.com/@macs-hit"
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
          <div>
            {/* Report list renders here when MDX files exist */}
          </div>
        )}
      </div>
    </div>
  );
}
