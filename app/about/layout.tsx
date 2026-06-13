import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kenneth Helmuth — independent CTI researcher and operator of MACS-HIT.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
