import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Report: Lazarus Group Infrastructure Pivot",
  description:
    "Analysis of recent infrastructure changes by the Lazarus Group. Includes C2 patterns, TTPs, MITRE ATT&CK mapping, and detection rules.",
};

export default function LazarusReport() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "48px", alignItems: "start" }}>
        {/* Main content */}
        <article>
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--text-muted)",
              marginBottom: "32px",
            }}
          >
            <Link href="/reports" style={{ color: "var(--cyan)", textDecoration: "none" }}>
              Reports
            </Link>
            <span>/</span>
            <span>Lazarus Group Infrastructure Pivot</span>
          </div>

          {/* Header */}
          <div style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
              <div className="badge badge-red">CRITICAL</div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  color: "#ddd",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                TLP:WHITE
              </div>
            </div>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              Lazarus Group: Infrastructure Pivot and New TTPs
            </h1>
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                }}
              >
                Published: 2025-06-08
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                }}
              >
                Author: Kenneth Helmuth
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--cyan)",
                }}
              >
                48 IOCs
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                }}
              >
                12 min read
              </span>
            </div>
            <div style={{ display: "flex", gap: "6px", marginTop: "12px", flexWrap: "wrap" }}>
              {["APT", "DPRK", "Lazarus", "C2", "Infrastructure"].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* Report body */}
          <div className="mdx-content">
            <h2>Executive Summary</h2>
            <p>
              The Lazarus Group (also known as HIDDEN COBRA, APT38, and Zinc) has been observed making
              significant infrastructure changes following increased international sanctions and attribution
              reports from multiple governments in Q1 2025. This report documents the observed changes,
              new tooling patterns, and updated indicators of compromise.
            </p>

            <blockquote>
              <strong>Key Finding:</strong> Lazarus has shifted from VPS-heavy C2 infrastructure to a
              multi-layer proxy chain using compromised routers and legitimate cloud service providers,
              significantly increasing operational security.
            </blockquote>

            <h2>Background</h2>
            <p>
              Lazarus Group is a state-sponsored APT attributed to the Democratic People&apos;s Republic of
              Korea (DPRK). Active since at least 2009, the group conducts cyber espionage, financial
              theft, and destructive attacks on behalf of the DPRK government.
            </p>
            <p>
              Following the 2024 attribution of the $1.5B Bybit exchange hack and subsequent OFAC
              designations, Lazarus began a documented infrastructure pivot observed across multiple
              open-source and private intelligence feeds.
            </p>

            <h2>Observed Infrastructure Changes</h2>

            <h3>1. C2 Architecture Shift</h3>
            <p>
              Previous Lazarus C2 infrastructure relied heavily on dedicated VPS providers in jurisdictions
              with limited cooperation (Russia, Netherlands via proxied registrations). New infrastructure
              shows:
            </p>
            <ul>
              <li>
                <strong>Compromised residential routers</strong> (primarily SOHO devices running outdated firmware)
                used as first-hop proxies
              </li>
              <li>
                <strong>Legitimate cloud providers</strong> (AWS, Cloudflare Workers, Azure Functions) used
                for staging and initial beacon delivery
              </li>
              <li>
                <strong>Domain fronting</strong> via CDN providers to blend C2 traffic with legitimate SaaS traffic
              </li>
            </ul>

            <h3>2. New Domains Registered</h3>
            <p>The following domains were registered using previously-identified Lazarus registration patterns:</p>

            <table>
              <thead>
                <tr>
                  <th>Domain</th>
                  <th>Registered</th>
                  <th>ASN</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>update-sys[.]net</code></td>
                  <td>2025-05-02</td>
                  <td>AS14618 (AWS)</td>
                  <td>Staging C2</td>
                </tr>
                <tr>
                  <td><code>cdn-assets[.]org</code></td>
                  <td>2025-05-08</td>
                  <td>AS13335 (Cloudflare)</td>
                  <td>Payload delivery</td>
                </tr>
                <tr>
                  <td><code>telemetry-svc[.]com</code></td>
                  <td>2025-05-14</td>
                  <td>AS8075 (Microsoft)</td>
                  <td>Exfiltration</td>
                </tr>
              </tbody>
            </table>

            <h2>MITRE ATT&CK Mapping</h2>
            <table>
              <thead>
                <tr>
                  <th>Tactic</th>
                  <th>Technique</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Initial Access</td>
                  <td>Spearphishing Attachment</td>
                  <td>T1566.001</td>
                </tr>
                <tr>
                  <td>Execution</td>
                  <td>Malicious File</td>
                  <td>T1204.002</td>
                </tr>
                <tr>
                  <td>C&C</td>
                  <td>Domain Fronting</td>
                  <td>T1090.004</td>
                </tr>
                <tr>
                  <td>Exfiltration</td>
                  <td>Exfiltration Over C2</td>
                  <td>T1041</td>
                </tr>
              </tbody>
            </table>

            <h2>Detection Opportunities</h2>
            <p>
              The following Sigma rule can be used to detect unusual outbound connections matching
              the new Lazarus C2 beacon profile:
            </p>
            <pre>
              <code>{`title: Lazarus Group CDN C2 Beacon Pattern
id: 7f3a1b2c-4d5e-6f7a-8b9c-0d1e2f3a4b5c
status: experimental
description: Detects beacon patterns consistent with Lazarus Group CDN-fronted C2
logsource:
  category: network_connection
detection:
  selection:
    dst_port:
      - 443
    http_user_agent|contains:
      - 'Mozilla/5.0 (compatible; MSIE'
    http_uri|re: '^/[a-z0-9]{8}/update$'
  condition: selection
falsepositives:
  - Legitimate CDN traffic (investigate carefully)
level: high`}</code>
            </pre>

            <h2>Indicators of Compromise</h2>
            <p>
              Full IOC list (48 indicators) available in structured format. Contact via secure channel
              for STIX/TAXII feed access.
            </p>

            <h3>IP Addresses (Sample)</h3>
            <ul>
              <li><code>185.220.101[.]47</code> — Tor exit node used as proxy</li>
              <li><code>45.142.212[.]99</code> — Compromised SOHO router, first-hop</li>
              <li><code>195.123.241[.]32</code> — Confirmed staging server</li>
            </ul>

            <h3>File Hashes (Sample)</h3>
            <ul>
              <li><code>SHA256: 4a7b3c2d1e5f6a8b9c0d1e2f3a4b5c6d...</code> — Loader dropper</li>
              <li><code>SHA256: 9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b...</code> — Updated BLINDINGCAN variant</li>
            </ul>
          </div>
        </article>

        {/* Sidebar */}
        <aside style={{ position: "sticky", top: "80px" }}>
          <div className="card" style={{ padding: "20px", marginBottom: "16px" }}>
            <div className="section-label" style={{ marginBottom: "12px" }}>// Report Metadata</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Threat Actor", value: "Lazarus Group" },
                { label: "Origin", value: "DPRK" },
                { label: "Confidence", value: "HIGH" },
                { label: "Last Updated", value: "2025-06-08" },
                { label: "IOC Count", value: "48" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "2px",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                      color: "var(--cyan)",
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: "20px" }}>
            <div className="section-label" style={{ marginBottom: "12px" }}>// Related Reports</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { title: "Lazarus: Crypto Exchange Tactics", href: "#" },
                { title: "DPRK IT Worker Network", href: "#" },
                { title: "AppleJeus Malware Update", href: "#" },
              ].map(({ title, href }) => (
                <Link
                  key={title}
                  href={href}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    lineHeight: 1.4,
                  }}
                >
                  → {title}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
