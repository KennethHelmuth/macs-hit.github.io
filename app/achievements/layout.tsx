import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Milestones, research publications, recognitions, and open-source contributions by Kenneth Helmuth.",
};

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
