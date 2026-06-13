import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "MACS-HIT",
    template: "%s — MACS-HIT",
  },
  description:
    "Independent threat intelligence research by Kenneth Helmuth. No vendor. No agenda.",
  metadataBase: new URL("https://kennethhelmuth.github.io/macs-hit.github.io"),
  openGraph: {
    siteName: "MACS-HIT",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/macs-hit.github.io/favicon.ico' },
      { url: '/macs-hit.github.io/favicon.svg', type: 'image/svg+xml' },
      { url: '/macs-hit.github.io/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/macs-hit.github.io/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
