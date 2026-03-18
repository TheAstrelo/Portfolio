// ============================================
// PORTFOLIO CONTENT - Edit this file to customize your portfolio
// ============================================

// Your personal information
export const personalInfo = {
  initials: "JF",
  name: "James Freeborn",
  title: "Full-Stack Developer & AI Engineer",
  headline: "I build web applications and AI-powered developer tools.",
  subtitle: "Full-stack engineer specializing in TypeScript, C#/.NET, and React. Currently focused on AI tooling that helps developers ship faster.",
  email: "JimFreebron@outlook.com",
  github: "https://github.com/TheAstrelo",
  linkedin: "https://www.linkedin.com/in/james-freeborn-242332239/",
  resume: "/resume.pdf",
  available: true // Set to false to hide availability badge
};

// About section content
export const aboutContent = {
  intro: "Full-stack developer with a focus on building practical tools that solve real problems.",
  paragraphs: [
    "I work across the stack—from React and Next.js on the frontend to C#/.NET and SQL Server on the backend. My recent focus has been on AI-assisted development tooling.",
    "My open-source project Claude-Pipeline has been adopted by developers looking to bring structure and quality control to AI-assisted coding workflows."
  ]
};

// Projects data - Focus on outcomes
export const projects = [
  {
    id: 1,
    title: "Claude-Pipeline",
    category: "AI",
    description: "12-phase development workflow for AI coding tools. Enforces design reviews, security audits, and QA checks.",
    outcome: "21+ GitHub stars • 8 forks • Used by developers at multiple companies",
    tech: ["Shell", "JavaScript", "Git"],
    github: "https://github.com/TheAstrelo/Claude-Pipeline"
  },
  {
    id: 2,
    title: "Daily Briefing",
    category: "Frontend",
    description: "Personal dashboard with weather-reactive UI, calendar sync, news aggregation, and stock tracking.",
    outcome: "Real-time data from 5 APIs • OAuth integration • PWA-ready",
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/TheAstrelo/daily-briefing"
  },
  {
    id: 3,
    title: "MissionLog",
    category: "Backend",
    description: "Enterprise work-order platform with approval workflows, inspired by aerospace MRO systems.",
    outcome: "JWT auth • Real-time SignalR updates • Role-based access control",
    tech: ["C#", ".NET 8", "Blazor", "SQL Server"],
    github: "https://github.com/TheAstrelo/MissionLog"
  }
];

// Tech stack - grouped by category (no percentages)
export const techStack = {
  "Languages": ["TypeScript", "C#", "JavaScript", "SQL", "Shell"],
  "Frontend": ["React", "Next.js", "Blazor", "Tailwind CSS"],
  "Backend": [".NET 8", "Node.js", "SignalR", "REST APIs"],
  "Data": ["SQL Server", "PostgreSQL", "Entity Framework"],
  "Tools": ["Git", "Docker", "GitHub Actions", "VS Code"]
};

// Navigation links
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

// Project filter categories
export const projectCategories = ["All", "AI", "Frontend", "Backend"];
