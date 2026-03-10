import { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    title: "AI Content Guard",
    tag: "AI & Animation",
    description: "An automated solution for modesty coverage in 2D animation production. Developed a system to identify and mask specific areas across thousands of frames, eliminating the need for manual frame-by-frame redrawing or expensive re-renders.",
    tech: ["Python", "OpenCV", "Custom AI Models"],
    impact: "Saved the company 90% in manual labor costs and months of production time.",
    featured: true
  },
  {
    title: "Autonomous Enterprise Agent",
    tag: "Full-Stack AI",
    description: "A production-ready AI agent integrated with corporate databases. It handles complex internal data retrieval and automates routine reporting processes using natural language interfaces.",
    tech: ["Next.js", "FastAPI", "Neon PostgreSQL", "LangChain"],
    impact: "Enabled real-time, conversational access to complex business data for non-technical stakeholders.",
    featured: true
  },
  {
    title: "VibeCode Architecture",
    tag: "Internal Tool",
    description: "A framework designed to bridge the gap between AI-generated code and production standards. It ensures that 'vibe coding' doesn't sacrifice security, scalability, or code quality.",
    tech: ["Node.js", "Docker", "GCP", "OpenAI"],
    impact: "Standardized AI development workflows across the department, increasing output speed by 4x.",
    featured: false
  }
];
