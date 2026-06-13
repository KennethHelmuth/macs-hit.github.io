import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Open-source tools for threat triage and analysis built by Kenneth Helmuth.",
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
