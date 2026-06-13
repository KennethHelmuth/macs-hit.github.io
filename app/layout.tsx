import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "MACS-HIT | Cyber Threat Intelligence",
    template: "%s | MACS-HIT",
  },
  description:
    "Advanced Cyber Threat Intelligence, analysis, dossiers, and research by Kenneth Helmuth. Tracking APTs, malware campaigns, and adversarial infrastructure.",
  keywords: ["CTI", "Threat Intelligence", "APT", "Malware", "Cybersecurity", "OSINT", "Dossier"],
  authors: [{ name: "Kenneth Helmuth", url: "https://macs-hit.github.io" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://macs-hit.github.io",
    siteName: "MACS-HIT",
    title: "MACS-HIT | Cyber Threat Intelligence",
    description:
      "Advanced Cyber Threat Intelligence, analysis, dossiers, and research by Kenneth Helmuth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MACS-HIT | Cyber Threat Intelligence",
    description: "Advanced CTI analysis, dossiers, and research by Kenneth Helmuth.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="noise">
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 64px - 80px)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
