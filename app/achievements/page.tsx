"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { ACHIEVEMENTS, ACHIEVEMENT_CATEGORIES } from "@/content/achievements";

const BASE_PATH = "/macs-hit.github.io";
const getImgSrc = (path: string) =>
  path.startsWith("http") ? path : `${BASE_PATH}${path}`;

export default function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalImage, setActiveModalImage] = useState<{
    title: string;
    url: string;
  } | null>(null);

  const filteredAchievements = ACHIEVEMENTS.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === "" ||
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.program && item.program.toLowerCase().includes(q)) ||
      (item.platform && item.platform.toLowerCase().includes(q)) ||
      (item.reward && item.reward.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page">
      <div className="container-wide">
        {/* Header */}
        <Reveal>
          <header className="page-header" style={{ marginBottom: 48 }}>
            <p className="page-eyebrow">Track Record & Validations</p>
            <h1 className="page-title">Achievements</h1>
            <p className="page-subtitle">
              Public bug bounty validations, responsible vulnerability disclosures, and certified research milestones.
            </p>
          </header>
        </Reveal>

        {/* Search & Category Filter */}
        <Reveal delay={80}>
          <div style={{ marginBottom: 40 }}>
            {/* Spotlight search */}
            <div className="spotlight-wrapper" style={{ margin: "0 0 24px" }}>
              <div className="spotlight-bar" style={{ maxWidth: "100%" }}>
                <svg
                  className="spotlight-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search achievements (e.g. Zabbix, Bug Bounty, HackerOne)..."
                  className="spotlight-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--text-3)",
                      cursor: "pointer",
                      fontSize: "0.85rem",
                    }}
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Category Pills */}
            {ACHIEVEMENT_CATEGORIES.length > 1 && (
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                {ACHIEVEMENT_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "980px",
                      fontSize: "0.8rem",
                      fontWeight: selectedCategory === cat ? 600 : 400,
                      fontFamily: "var(--sans)",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      border:
                        selectedCategory === cat
                          ? "1px solid rgba(58, 134, 255, 0.4)"
                          : "1px solid var(--glass-border)",
                      background:
                        selectedCategory === cat
                          ? "rgba(58, 134, 255, 0.15)"
                          : "rgba(255, 255, 255, 0.03)",
                      color:
                        selectedCategory === cat ? "#ffffff" : "var(--text-2)",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        {/* Achievement Cards */}
        <div>
          {filteredAchievements.map((item, index) => (
            <Reveal key={item.id} delay={120 + index * 70}>
              <div
                className="achievement-card"
                style={{
                  padding: "32px",
                  marginBottom: "24px",
                }}
              >
                {/* Top header row */}
                <div className="achievement-header" style={{ marginBottom: 12 }}>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: 8,
                        flexWrap: "wrap",
                      }}
                    >
                      {item.badge && (
                        <span className="tool-badge">{item.badge}</span>
                      )}
                      {item.category && (
                        <span className="tool-lang">{item.category}</span>
                      )}
                      {item.platform && (
                        <span
                          style={{
                            fontFamily: "var(--mono)",
                            fontSize: "0.65rem",
                            color: "var(--text-3)",
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                          }}
                        >
                          Platform: {item.platform}
                        </span>
                      )}
                    </div>
                    <h2 className="achievement-title" style={{ fontSize: "1.25rem" }}>
                      {item.title}
                    </h2>
                  </div>

                  <div className="achievement-meta">
                    {item.date && (
                      <span className="achievement-date">{item.date}</span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p
                  className="achievement-desc"
                  style={{
                    fontSize: "0.94rem",
                    marginBottom: item.proofImage ? "20px" : "0",
                  }}
                >
                  {item.description}
                </p>

                {/* Proof Image / Screenshot */}
                {item.proofImage && (
                  <div style={{ marginTop: "16px", marginBottom: "16px" }}>
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: "1px solid var(--border)",
                        background: "rgba(10, 10, 15, 0.8)",
                        cursor: "pointer",
                        maxWidth: "100%",
                      }}
                      onClick={() =>
                        setActiveModalImage({
                          title: item.title,
                          url: getImgSrc(item.proofImage!),
                        })
                      }
                    >
                      <img
                        src={getImgSrc(item.proofImage)}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                          transition: "transform 0.4s ease",
                        }}
                        loading="lazy"
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(1.02)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 8,
                          right: 8,
                          background: "rgba(0, 0, 0, 0.8)",
                          backdropFilter: "blur(6px)",
                          color: "var(--text-2)",
                          padding: "4px 10px",
                          borderRadius: "6px",
                          fontSize: "0.68rem",
                          fontFamily: "var(--mono)",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span>Click to Expand</span> 🔍
                      </div>
                    </div>
                  </div>
                )}

                {/* Proof Details summary if present */}
                {item.proofDetails && (
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid var(--glass-border)",
                      borderRadius: "10px",
                      padding: "14px 18px",
                      marginTop: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "8px",
                      }}
                    >
                      {item.recipient && (
                        <span
                          style={{
                            fontFamily: "var(--mono)",
                            fontSize: "0.72rem",
                            color: "var(--text-3)",
                          }}
                        >
                          Disclosed By:{" "}
                          <strong style={{ color: "var(--text)" }}>
                            {item.recipient}
                          </strong>
                        </span>
                      )}
                      {item.proofDetails.updatedAt && (
                        <span
                          style={{
                            fontFamily: "var(--mono)",
                            fontSize: "0.7rem",
                            color: "var(--text-3)",
                          }}
                        >
                          Timestamp: {item.proofDetails.updatedAt}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Outbound link if available */}
                {item.link && (
                  <div style={{ marginTop: "16px" }}>
                    <a
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievement-link"
                    >
                      {item.link.label} <span>&rarr;</span>
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Empty search results */}
        {filteredAchievements.length === 0 && (
          <Reveal delay={100}>
            <div className="empty">
              <p className="empty-headline">No matching achievements found</p>
              <p className="empty-sub">
                Try clearing your search query or selecting a different category.
              </p>
            </div>
          </Reveal>
        )}
      </div>

      {/* ── Image Lightbox Modal ───────────── */}
      {activeModalImage && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
          onClick={() => setActiveModalImage(null)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "92vw",
              maxHeight: "88vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginBottom: 12,
                color: "#ffffff",
              }}
            >
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600 }}>
                {activeModalImage.title}
              </h3>
              <button
                onClick={() => setActiveModalImage(null)}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                &times;
              </button>
            </div>
            <img
              src={activeModalImage.url}
              alt={activeModalImage.title}
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: "12px",
                border: "1px solid var(--border-mid)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.8)",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
