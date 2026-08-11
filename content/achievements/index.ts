import zabbixBugBounty from "./zabbix-bug-bounty/index.json";

export interface AchievementProof {
  organization?: string;
  handler?: string;
  updatedAt?: string;
  message?: string;
}

export interface Achievement {
  id: string;
  slug: string;
  title: string;
  program?: string;
  platform?: string;
  reward?: string;
  date: string;
  year: string;
  category: string;
  recipient?: string;
  badge?: string;
  description: string;
  proofImage?: string;
  proofDetails?: AchievementProof;
  link?: {
    label: string;
    url: string;
  };
}

export const ACHIEVEMENTS: Achievement[] = [
  zabbixBugBounty,
];

export const ACHIEVEMENT_CATEGORIES: string[] = [
  "All",
  ...Array.from(new Set(ACHIEVEMENTS.map((a) => a.category))),
];
