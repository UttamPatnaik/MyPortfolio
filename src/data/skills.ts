export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "C",
      "C++",
      "SQL",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
    ],
  },
  {
    category: "Backend",
    items: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "Llama 3.1",
      "Prompt Engineering",
      "RAG",
      "OCR",
      "NumPy",
      "Pandas",
      "Scikit-learn",
    ],
  },
  {
    category: "Database & Cloud",
    items: [
      "MongoDB",
      "MySQL",
      "AWS",
      "Google Cloud",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "VS Code",
    ],
  },
];