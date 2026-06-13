import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dossier — Threat Actor Tracker",
  description:
    "Comprehensive investigation dossiers on tracked threat actors, APT groups, and criminal organizations. MACS-HIT CTI platform.",
};

const actors = [
  {
    id: "lazarus-group",
    alias: "Lazarus Group",
    aliases: ["HIDDEN COBRA", "APT38", "Zinc", "Bluenoroff"],
    origin: "DPRK",
    type: "Nation-State",
    status: "active",
    since: "2009",
    motivation: ["Financial", "Espionage", "Disruption"],
    lastSeen: "2025-06-08",
    campaigns: 12,
    iocCount: 248,
    threatLevel: 95,
    description:
      "DPRK-sponsored APT conducting large-scale financial theft from cryptocurrency exchanges and traditional banking systems to fund state programs.",
    sectors: ["Finance", "Crypto", "Defense", "Healthcare"],
    tlp: "WHITE",
  },
  {
    id: "sandworm",
    alias: "Sandworm",
    aliases: ["VOODOO BEAR", "APT44", "Seashell Blizzard"],
    origin: "Russia (GRU Unit 74455)",
    type: "Nation-State",
    status: "active",
    since: "2009",
    motivation: ["Disruption", "Espionage", "Sabotage"],
    lastSeen: "2025-05-30",
    campaigns: 8,
    iocCount: 167,
    threatLevel: 98,
    description:
      "Elite Russian GRU unit responsible for NotPetya, BlackEnergy attacks on Ukraine power grid, and Olympic Destroyer. Specializes in destructive attacks on critical infrastructure.",
    sectors: ["Energy", "Government", "Industrial", "Telecom"],
    tlp: "WHITE",
  },
  {
    id: "scattered-spider",
    alias: "Scattered Spider",
    aliases: ["UNC3944", "Octo Tempest", "ALPHV Affiliate"],
    origin: "Western (UK/US)",
    type: "eCrime",
    status: "active",
    since: "2022",
    motivation: ["Financial"],
    lastSeen: "2025-06-02",
    campaigns: 5,
    iocCount: 89,
    threatLevel: 82,
    description:
      "Native English-speaking threat actor with sophisticated social engineering capabilities. Known for SIM swapping, SMS phishing, and ransomware deployment via cloud service provider targeting.",
    sectors: ["Retail", "Hospitality", "Cloud MSPs", "Gaming"],
    tlp: "WHITE",
  },
  {
    id: "volt-typhoon",
    alias: "Volt Typhoon",
    aliases: ["BRONZE SILHOUETTE", "Vanguard Panda"],
    origin: "China (MSS)",
    type: "Nation-State",
    status: "active",
    since: "2021",
    motivation: ["Pre-positioning", "Espionage"],
    lastSeen: "2025-05-12",
    campaigns: 6,
    iocCount: 134,
    threatLevel: 90,
    description:
      "Chinese state-sponsored actor pre-positioning in US critical infrastructure networks, particularly OT environments. Focused on living-off-the-land to evade detection.",
    sectors: ["Energy", "Water", "Transportation", "Communications"],
    tlp: "WHITE",
  },
  {
    id: "fin7",
    alias: "FIN7",
    aliases: ["Carbanak", "Carbon Spider", "Sangria Tempest"],
    origin: "Russia/Ukraine",
    type: "eCrime",
    status: "active",
    since: "2015",
    motivation: ["Financial"],
    lastSeen: "2025-04-20",
    campaigns: 9,
    iocCount: 312,
    threatLevel: 78,
    description:
      "Prolific financially-motivated threat actor targeting retail, hospitality, and restaurant sectors with sophisticated POS malware and spearphishing campaigns.",
    sectors: ["Retail", "Restaurant", "Hospitality", "Finance"],
    tlp: "WHITE",
  },
  {
    id: "apt29",
    alias: "Cozy Bear",
    aliases: ["APT29", "NOBELIUM", "Midnight Blizzard", "The Dukes"],
    origin: "Russia (SVR)",
    type: "Nation-State",
    status: "active",
    since: "2008",
    motivation: ["Espionage"],
    lastSeen: "2025-05-18",
    campaigns: 7,
    iocCount: 198,
    threatLevel: 88,
    description:
      "Russian SVR intelligence unit conducting long-term espionage operations against government, think tanks, and NGOs. Responsible for SolarWinds/SUNBURST and Microsoft corporate network breach.",
    sectors: ["Government", "NGO", "Think Tanks", "Technology"],
    tlp: "WHITE",
  },
];

const statusConfig: Record<string, { label: string; cls: string; color: string }> = {
  active: { label: "ACTIVE", cls: "badge-red", color: "var(--red)" },
  monitoring: { label: "MONITORING", cls: "badge-yellow", color: "var(--yellow)" },
  dormant: { label: "DORMANT", cls: "badge-gray", color: "var(--text-muted)" },
};

const typeConfig: Record<string, { color: string }> = {
  "Nation-State": { color: "var(--red)" },
  eCrime: { color: "var(--yellow)" },
  Hacktivist: { color: "var(--cyan)" },
};

const motivationColors: Record<string, string> = {
  Financial: "var(--yellow)",
  Espionage: "var(--cyan)",
  Disruption: "var(--red)",
  Sabotage: "var(--red)",
  "Pre-positioning": "#ff6b2b",
};

export default function DossierPage() {
  const active = actors.filter((a) => a.status === "active");

  return (
    <div className="grid-bg" style={{ minHeight: "100vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <div className="section-label">// THREAT ACTOR REGISTRY</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "12px" }}>
            Investigation Dossiers
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "560px", fontSize: "0.9rem" }}>
            Deep-dive profiles on tracked threat actors. Includes attribution assessment, historical
            campaigns, tooling, and infrastructure patterns.
          </p>
        </div>

        {/* Summary stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          {[
            { label: "Total Tracked", value: actors.length.toString(), color: "var(--text-primary)" },
            { label: "Active Actors", value: active.length.toString(), color: "var(--red)" },
            {
              label: "Nation-State",
              value: actors.filter((a) => a.type === "Nation-State").length.toString(),
              color: "var(--cyan)",
            },
            {
              label: "eCrime Groups",
              value: actors.filter((a) => a.type === "eCrime").length.toString(),
              color: "var(--yellow)",
            },
          ].map(({ label, value, color }) => (
            <div
              key={label}
              className="card"
              style={{ padding: "16px 20px", textAlign: "center" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color,
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Actor grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(520px, 1fr))", gap: "16px" }}>
          {actors.map((actor) => {
            const status = statusConfig[actor.status];
            const type = typeConfig[actor.type] ?? { color: "var(--cyan)" };

            return (
              <Link key={actor.id} href={`/dossier/${actor.id}`} style={{ textDecoration: "none" }}>
                <div className="card" style={{ padding: "24px", height: "100%" }}>
                  {/* Top row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "14px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          marginBottom: "4px",
                        }}
                      >
                        {actor.alias}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        {actor.aliases.slice(0, 2).join(" · ")}
                        {actor.aliases.length > 2 && ` · +${actor.aliases.length - 2} more`}
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "flex-end" }}>
                      <div className={`badge ${status.cls}`}>{status.label}</div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6rem",
                          color: type.color,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {actor.type}
                      </div>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      marginBottom: "16px",
                    }}
                  >
                    {actor.description}
                  </p>

                  {/* Threat meter */}
                  <div style={{ marginBottom: "16px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "6px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6rem",
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        Threat Level
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem",
                          color: actor.threatLevel >= 90 ? "var(--red)" : actor.threatLevel >= 75 ? "var(--yellow)" : "var(--cyan)",
                        }}
                      >
                        {actor.threatLevel}/100
                      </span>
                    </div>
                    <div className="meter-bar">
                      <div
                        className="meter-fill"
                        style={{
                          width: `${actor.threatLevel}%`,
                          background:
                            actor.threatLevel >= 90
                              ? "linear-gradient(90deg, var(--red), #ff6b6b)"
                              : actor.threatLevel >= 75
                              ? "linear-gradient(90deg, #ff6b2b, var(--yellow))"
                              : "linear-gradient(90deg, var(--cyan), #00ff88)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Meta row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: "1px solid var(--border)",
                      paddingTop: "12px",
                    }}
                  >
                    <div style={{ display: "flex", gap: "16px" }}>
                      {[
                        { label: "Origin", value: actor.origin.split(" ")[0] },
                        { label: "Active Since", value: actor.since },
                        { label: "IOCs", value: actor.iocCount.toString() },
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <div
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.55rem",
                              color: "var(--text-muted)",
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                            }}
                          >
                            {label}
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.72rem",
                              color: "var(--text-primary)",
                            }}
                          >
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", justifyContent: "flex-end", maxWidth: "140px" }}>
                      {actor.motivation.map((m) => (
                        <span
                          key={m}
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.55rem",
                            color: motivationColors[m] ?? "var(--text-muted)",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
