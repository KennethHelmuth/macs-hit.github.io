import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import InteractiveScrollbar from "@/components/InteractiveScrollbar";
import CardSpotlightEffect from "@/components/CardSpotlightEffect";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: {
    default: "MACS-HIT — Cyber Threat Intelligence",
    template: "%s — MACS-HIT",
  },
  description:
    "Independent threat intelligence research platform by Kenneth Helmuth. Tracking adversaries, malware campaigns, and infrastructure. No vendor. No agenda.",
  metadataBase: new URL("https://kennethhelmuth.github.io/macs-hit.github.io"),
  openGraph: {
    siteName: "MACS-HIT",
    title: "MACS-HIT — Cyber Threat Intelligence",
    description:
      "Independent threat intelligence research by Kenneth Helmuth. No vendor. No agenda.",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preconnect"
          href="https://cdn-images-1.medium.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://miro.medium.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://cdn-images-1.medium.com" />
        <link rel="dns-prefetch" href="https://miro.medium.com" />
      </head>
      <body>
        <SmoothScroll>
          <CardSpotlightEffect />
          <Navbar />
          <main style={{ position: "relative", zIndex: 1 }}>
            <PageTransition>{children}</PageTransition>
          </main>
          <InteractiveScrollbar />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
