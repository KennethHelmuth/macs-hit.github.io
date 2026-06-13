import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dossier",
  description:
    "Threat actor and campaign investigation tracker. Profiles built incrementally as research develops.",
};

// Dossier entries are read from content/dossier/ at build time.
// Each entry is an MDX file with frontmatter:
//   subject, type, status, last_updated, summary
// Until entries exist, the empty state is shown.

async function getEntries() {
  // Returning empty array until dossier entries are published.
  return [];
}

export default async function DossierPage() {
  const entries = await getEntries();

  return (
    <div className="page-sm">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <p className="label" style={{ marginBottom: "10px" }}>
            Investigation Tracker
          </p>
          <h1>Dossier</h1>
        </div>

        {/* Entries */}
        {entries.length === 0 ? (
          <div className="empty-state">
            <p className="empty-state-title">No investigations published yet.</p>
            <p className="empty-state-sub">
              Profiles and actor trackers will appear here as research develops.
            </p>
          </div>
        ) : (
          <div>
            {/* Dossier items will render here once MDX files are added */}
          </div>
        )}
      </div>
    </div>
  );
}
