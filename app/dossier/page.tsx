import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Dossier",
  description:
    "Threat actor and campaign investigation tracker. Profiles built as research develops.",
};

interface DossierEntry {
  name: string;
  status: string;
  infrastructure: string;
  campaigns: string[];
}

async function getEntries(): Promise<DossierEntry[]> {
  return [
    {
      name: "Unnamed Crypto Giveaway Operator",
      status: "Active",
      infrastructure: "AS26383/Baxet Group",
      campaigns: ["elon2x.com", "xcoinwallet.net"],
    },
  ];
}

export default async function DossierPage() {
  const entries = await getEntries();

  return (
    <div className="page">
      <div className="container-mid">
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
          <div className="dossier-grid">
            {entries.map((entry, index) => (
              <Reveal key={entry.name} delay={100 + index * 80}>
                <div className="dossier-card">
                  <div className="dossier-header">
                    <h2 className="dossier-name">{entry.name}</h2>
                    <span className={`status-badge status-${entry.status.toLowerCase()}`}>
                      {entry.status}
                    </span>
                  </div>

                  <div className="dossier-details">
                    <div className="dossier-detail-group">
                      <span className="dossier-label">Infrastructure</span>
                      <span className="dossier-value">{entry.infrastructure}</span>
                    </div>

                    <div className="dossier-detail-group">
                      <span className="dossier-label">Campaigns</span>
                      <div className="dossier-campaigns">
                        {entry.campaigns.map((camp) => (
                          <span key={camp} className="dossier-campaign">
                            {camp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
