export interface Profile {
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  portfolio: string;
  resume: string;
}

export const profile: Profile = {
  name: "Uttam Patnaik",

  title: "AI & Full Stack Developer",

  tagline:
    "Building intelligent software with React, FastAPI, TypeScript, Python, Cloud, and Large Language Models.",

  about:
    "I'm a final-year Computer Science undergraduate passionate about AI-powered software engineering. I enjoy building scalable full-stack applications, integrating Large Language Models into practical solutions, and developing cloud-ready systems that solve real-world problems. I'm continuously exploring modern AI, backend architecture, and software engineering best practices.",

  email: "uttampatnaik585@gmail.com",

  location: "Delhi, India",

  github: "https://github.com/UttamPatnaik",

  // Update this if the username has changed
  linkedin: "https://www.linkedin.com/in/uttampatnaik/",

  portfolio: "https://my-portfolio-peach-delta-74.vercel.app/",

  resume:
    "https://drive.google.com/file/d/1iJYHostYe0TWL80YS9tcdi9f3RwJdCB0/view?usp=drive_link",
};