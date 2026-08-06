export interface Experience {
  id: number;
  role: string;
  organization: string;
  duration: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    id: 1,
    role: "Applied Fintech Engineering & Mutual Fund Technology Intern",
    organization: "KFin Technologies Ltd. × Siksha 'O' Anusandhan (SOA) University",
    duration: "2026",

    description:
      "Completed a one-month industry internship program focused on Full Stack Development, Cloud Computing, DevOps, and Mutual Fund Technology. Participated in a 10-day capstone sprint to develop a production-style fintech platform.",

    highlights: [
      "Developed the Backend KYC Service for the Finboard platform.",
      "Built REST APIs for secure document upload and KYC workflows.",
      "Integrated OCR-based PAN extraction using Tesseract.js.",
      "Implemented custom document parsing algorithms for Name and DOB extraction.",
      "Managed KYC workflow state transitions from Draft to Pending Admin Review.",
        "Collaborated in a 15-member engineering team to build and deploy a production-style fintech platform."
    ],

    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "AWS",
      "Tesseract.js",
      "REST APIs",
      "Git",
    ],
  },

  {
    id: 2,
    role: "Open Source Contributor",
    organization: "GirlScript Summer of Code",

    duration: "2025",

    description:
      "Contributed to open-source projects by fixing issues, improving code quality, and collaborating with maintainers using Git and GitHub.",

    highlights: [
      "Worked on collaborative development workflows.",
      "Submitted pull requests and resolved project issues.",
      "Strengthened Git and GitHub collaboration skills.",
    ],

    technologies: [
      "Git",
      "GitHub",
      "Open Source",
    ],
  },
];