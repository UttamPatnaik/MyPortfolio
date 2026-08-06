export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  contribution?: string;
  technologies: string[];
  github: string;
  live?: string;
  featured: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Full-Stack AI Resume Analyzer",
    category: "AI Engineering",

    description:
      "An AI-powered ATS Resume Analyzer that extracts resume content, evaluates it using Llama 3.1, and generates structured feedback, ATS scoring, and improvement suggestions.",

    contribution:
      "Designed and developed the complete application, including the React frontend, FastAPI backend, PDF parsing pipeline, prompt engineering, NVIDIA Llama 3.1 integration, and cloud deployment.",

    technologies: [
      "React",
      "JavaScript",
      "FastAPI",
      "Python",
      "Llama 3.1",
      "NVIDIA API",
      "pdfplumber",
      "Vercel",
      "Render",
    ],

    github: "https://github.com/UttamPatnaik/Resume_Analyser",

    live: "https://resume-analyser-black.vercel.app",

    featured: true,

    image: "/projects/resume-analyzer.png",
  },

  {
    id: 2,
    title: "Finboard – Mutual Fund Investor Onboarding Platform",
    category: "FinTech",

    description:
      "A production-style Mutual Fund Investor Onboarding & eKYC platform built during the KFin Technologies Applied FinTech Engineering Program to simulate real-world RTA workflows.",

    contribution:
      "Owned the Backend KYC Service by developing REST APIs, OCR-based PAN extraction using Tesseract.js, document parsing algorithms, and the KYC workflow state machine while collaborating in a 15-member engineering team.",

    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "Tesseract.js",
      "REST API",
      "Git",
    ],

    github: "https://github.com/SaswatBarai/Finboard",

    live: "https://finboard.saswat.app",

    featured: true,

    image: "/projects/finboard.png",
  },

  {
    id: 3,
    title: "DashShield AI",
    category: "AI + Full Stack",

    description:
      "An AI-powered income protection platform for delivery workers featuring dynamic premium pricing, automated claims validation, and weather-risk analysis.",

    contribution:
      "Developed the core pricing algorithm, weather risk calculations, payout logic, and integrated the React dashboard with the Python backend for real-time monitoring.",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "AI/ML",
      "Vite",
    ],

    github: "https://github.com/bharadwajsanket/DashShield",

    live: "https://dash-shield.vercel.app",

    featured: true,

    image: "/projects/dashshield.png",
  },

  {
    id: 4,
    title: "Diabetes Risk Prediction",
    category: "Machine Learning",

    description:
      "A machine learning application that predicts diabetes risk using clinical health data through preprocessing, feature engineering, model training, and evaluation.",

    contribution:
      "Worked on data preprocessing, exploratory data analysis, feature engineering, model training, evaluation, and prediction workflow implementation using Python and Scikit-learn.",

    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Jupyter Notebook",
    ],

    github:
      "https://github.com/Swayam42/diabetes-risk-prediction-ml",

    live: "https://diabetes-risk-ml.streamlit.app",

    featured: true,

    image: "/projects/diabetes.png",
  },
];