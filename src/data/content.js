// ============================================
// PORTFOLIO CONTENT - Edit this file to customize your portfolio
// ============================================

// Your personal information
export const personalInfo = {
  initials: "JF",
  name: "James Freeborn",
  title: "Full-Stack Developer & AI Engineer",
  headlineSetup: "From NASA missions to founding my own AI company —",
  headlinePayoff: "I build software that has to work.",
  headline: "I build web applications and AI-powered developer tools.",
  subtitle: "Full-stack engineer with 3+ years specializing in TypeScript, C#/.NET, and React. Currently focused on AI tooling that helps developers ship faster.",
  email: "JimFreebron@outlook.com",
  github: "https://github.com/TheAstrelo",
  linkedin: "https://www.linkedin.com/in/james-freeborn-242332239/",
  resume: "/resume.pdf",
  available: true,
  previousEmployers: ["NASA", "ExxonMobil"],
  astreloUrl: "https://www.astrelo.ai",
  availabilitySubtitle: "Currently open to full-time and contract opportunities.",
};

// Hero stats displayed in the hero section
export const heroStats = [
  { value: "5+", label: "Years shipping" },
  { value: "12", label: "Production apps" },
  { value: "3", label: "AI tools launched" },
];

// Company/experience data for "Where I've Built" section
export const companies = [
  {
    name: "NASA",
    letter: "N",
    role: "Software Engineer",
    tenure: "2021 — 2023",
    accent: "blue",
    description: "Built mission-critical flight systems where failure isn't an option — it's a headline.",
    tech: ["C#", ".NET", "SQL Server", "Azure DevOps"],
  },
  {
    name: "ExxonMobil",
    letter: "E",
    role: "Full-Stack Developer",
    tenure: "2023 — 2024",
    accent: "rose",
    description: "Delivered enterprise platforms at global scale — millions of data points, zero room for error.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    name: "Astrelo",
    letter: "A",
    role: "Founder & Lead Engineer",
    tenure: "2024 — Present",
    accent: "purple",
    description: "Founded an AI company in my spare time, because the standard I hold myself to doesn't clock out.",
    tech: ["Next.js", "OpenAI API", "Vercel", "TypeScript"],
  },
];

// Impact metrics
export const impactMetrics = [
  { value: "5+", label: "Years in Prod", gradient: "blue" },
  { value: "12", label: "Shipped Products", gradient: "purple" },
  { value: "3", label: "AI Tools Live", gradient: "rose" },
  { value: "0", label: "Mission Failures", gradient: "green" },
];

// Featured Work (project rows)
export const featuredWork = [
  {
    name: "Claude-Pipeline",
    subtitle: "12-phase AI dev workflow with security audits & QA",
    tech: ["Shell", "JavaScript", "Git"],
    accent: "purple",
    github: "https://github.com/TheAstrelo/Claude-Pipeline",
  },
  {
    name: "Daily Briefing",
    subtitle: "Personal dashboard with weather-reactive UI & 5 API integrations",
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    accent: "blue",
    github: "https://github.com/TheAstrelo/daily-briefing",
  },
  {
    name: "MissionLog",
    subtitle: "Enterprise work-order platform with real-time SignalR updates",
    tech: ["C#", ".NET 8", "Blazor", "SQL Server"],
    accent: "rose",
    github: "https://github.com/TheAstrelo/MissionLog",
  },
  {
    name: "RAG Document Engine",
    subtitle: "AI-powered document search with vector embeddings",
    tech: ["C#", ".NET", "LangChain", "Redis"],
    accent: "green",
  },
];

// Hero project cards with per-project stacks (kept for reference)
export const heroProjects = [
  {
    name: "AI Code Reviewer",
    coreTech: ["TypeScript", "Next.js", "OpenAI API"],
    tech: ["PostgreSQL", "Vercel"],
  },
  {
    name: "RAG Document Engine",
    coreTech: ["C# / .NET", "LangChain"],
    tech: ["Redis", "Azure", "Docker"],
  },
  {
    name: "Dev Metrics Dashboard",
    coreTech: ["React", "Node.js"],
    tech: ["GraphQL", "PostgreSQL", "Docker"],
  },
  {
    name: "FinTech Payments API",
    coreTech: ["C# / .NET", "REST APIs"],
    tech: ["Redis", "Azure", "CI/CD"],
  },
];

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
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" }
];

// Project filter categories
export const projectCategories = ["All", "AI", "Frontend", "Backend"];
