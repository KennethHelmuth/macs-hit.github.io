import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reports",
  description: "Threat intelligence reports published by MACS-HIT.",
};

interface ReportItem {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
}

async function getReports(): Promise<ReportItem[]> {
  try {
    const res = await fetch("https://medium.com/feed/@Real-macs_hit", {
      next: { revalidate: 3600 }, // Fetch at build time and cache
    });
    if (!res.ok) {
      console.warn(`Failed to fetch Medium RSS: ${res.statusText}`);
      return [];
    }
    const xml = await res.text();
    const items = xml.split("<item>");
    items.shift(); // remove channel info

    return items.map((item) => {
      const titleMatch = item.match(/<title>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/title>/);
      const title = titleMatch ? (titleMatch[1] || titleMatch[2]).trim() : "";

      const linkMatch = item.match(/<link>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/link>/);
      const link = linkMatch ? (linkMatch[1] || linkMatch[2]).trim() : "";

      const pubDateMatch = item.match(/<pubDate>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/pubDate>/);
      const pubDate = pubDateMatch ? (pubDateMatch[1] || pubDateMatch[2]).trim() : "";

      const contentMatch = item.match(/<content:encoded>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/content:encoded>/);
      const content = contentMatch ? (contentMatch[1] || contentMatch[2]) : "";

      // Extract first img src from content
      const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/);
      const thumbnail = imgMatch ? imgMatch[1] : "";

      // Extract paragraphs
      const pMatches = [...content.matchAll(/<p>([\s\S]*?)<\/p>/g)].map((m) => m[1]);
      const cleanParagraphs = pMatches
        .map((p) => p.replace(/<[^>]+>/g, "").trim())
        .filter((p) => p && !p.startsWith("Published by") && !p.includes("────"));
      const description = cleanParagraphs[0] || "";

      return {
        title,
        link,
        pubDate,
        thumbnail,
        description,
      };
    });
  } catch (error) {
    console.error("Error fetching Medium RSS feed:", error);
    return [];
  }
}

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch (e) {
    return dateStr;
  }
}

export default async function ReportsPage() {
  const reports = await getReports();

  return (
    <div className="page">
      <div className="container-mid">
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
                  href="https://medium.com/@Real-macs_hit"
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
          <div className="reports-grid">
            {reports.map((report, index) => (
              <Reveal key={report.link} delay={100 + index * 80}>
                <a
                  href={report.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="report-card"
                >
                  {report.thumbnail && (
                    <div className="report-img-wrapper">
                      <img
                        src={report.thumbnail}
                        alt={report.title}
                        className="report-img"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="report-info">
                    <span className="report-date">{formatDate(report.pubDate)}</span>
                    <h2 className="report-title">{report.title}</h2>
                    <p className="report-desc">{report.description}</p>
                    <span className="report-footer-link">
                      Read Report <span>→</span>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
