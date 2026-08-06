export interface Achievement {
  title: string;
  organization: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    title: "Applied FinTech Engineering Program",
    organization: "KFin Technologies Ltd.",
    description:
      "Completed an intensive industry training program on Mutual Fund Technology, Full Stack Development, Cloud Computing and DevOps."
  },

  {
    title: "Guidewire DevTrails Hackathon",
    organization: "Guidewire",
    description:
      "Participated in a team-based hackathon focused on building innovative InsurTech solutions."
  },

  {
    title: "Open Source Connect India",
    organization: "Open Source Connect India",
    description:
      "Contributed to open-source projects and collaborated with developers during the national open-source event."
  },

  {
    title: "HackerRank Java (3★)",
    organization: "HackerRank",
    description:
      "Earned a 3-Star Java badge by solving algorithmic and language-specific programming challenges."
  },

  {
    title: "Google Cloud Skill Badges",
    organization: "Google Cloud Skills Boost",
    description:
      "Completed multiple hands-on cloud labs covering Google Cloud services, AI and cloud infrastructure."
  },

  {
    title: "21-Day SQL Challenge",
    organization: "Self Learning",
    description:
      "Completed a structured SQL challenge covering joins, aggregations, subqueries and advanced querying."
  }
];