import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Dossier",
  description:
    "Threat actor and campaign investigation tracker. Profiles built as research develops.",
};

async function getEntries() {
  // Reads from content/dossier/ at build time when entries exist.
  return [];
}

export default async function DossierPage() {
  const entries = await getEntries();

  return (
    <div className="page">
      <div className="container">
        <Reveal>
          <header className="page-header">
            <p className="page-eyebrow">Investigation Tracker</p>
            <h1 className="page-title">Dossier</h1>
          </header>
        </Reveal>

        {entries.length === 0 ? (
          <Reveal delay={120}>
            <div className="empty">
              <p className="empty-headline">No investigations published yet.</p>
              <p className="empty-sub">
                Profiles and actor trackers will appear here as research develops.
              </p>
            </div>
          </Reveal>
        ) : (
          <div>
            {/* Dossier entries render here when MDX files exist */}
          </div>
        )}
      </div>
    </div>
  );
}
