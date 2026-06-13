import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports",
  description:
    "Threat intelligence reports published by MACS-HIT. Technical analysis of threats, campaigns, and malware.",
};

// Reports are read from the content/reports directory at build time.
// When reports exist, each will be a .mdx file with frontmatter:
//   title, date, tlp, tags, summary
// Until then, the empty state is shown.

async function getReports() {
  // In production, this would read MDX files from content/reports/
  // Returning empty array until reports are published.
  return [];
}

export default async function ReportsPage() {
  const reports = await getReports();

  return (
    <div className="page-sm">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <p className="label" style={{ marginBottom: "10px" }}>
            Intelligence Reports
          </p>
          <h1>Reports</h1>
        </div>

        {/* Feed */}
        {reports.length === 0 ? (
          <div className="empty-state">
            <p className="empty-state-title">No reports published yet.</p>
            <p className="empty-state-sub">
              Check back later or follow on{" "}
              <a
                href="https://medium.com/@macs-hit"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
              >
                Medium
              </a>{" "}
              for updates.
            </p>
          </div>
        ) : (
          <div>
            {/* Report items will render here once MDX files are added */}
            {/* Each report: title, date, tlp, summary, tags */}
          </div>
        )}
      </div>
    </div>
  );
}
