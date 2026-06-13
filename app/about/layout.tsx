import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Kenneth Helmuth | MACS-HIT",
  description:
    "About Kenneth Helmuth and the MACS-HIT Cyber Threat Intelligence platform. Research background, methodology, and secure contact.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
