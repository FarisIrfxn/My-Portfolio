import { TechCategory } from "../types";

export const TECH_STACK: TechCategory[] = [
  {
    name: "Frontend",
    items: [
      { name: "Next.js", icon: "/images/skills/nextjs.svg" },
      { name: "React", icon: "/images/skills/react.svg" },
      { name: "JavaScript", icon: "/images/skills/javascript.svg" },
      { name: "Tailwind CSS", icon: "/images/skills/tailwind.svg" },
      { name: "Expo", icon: "/images/skills/expo.svg" }
    ]
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", icon: "/images/skills/nodejs.svg" },
      { name: "Python", icon: "/images/skills/python.svg" },
      { name: "FastAPI", icon: "/images/skills/fastapi.svg" }
    ]
  },
  {
    name: "Database",
    items: [
      { name: "Firebase", icon: "/images/skills/firebase.svg" },
      { name: "Supabase", icon: "/images/skills/supabase.svg" },
      { name: "Neon", icon: "/images/skills/neon.svg" },
      { name: "MongoDB", icon: "/images/skills/mongodb.svg" },
      { name: "SQLite", icon: "/images/skills/sqlite.svg" }
    ]
  },
  {
    name: "AI & Automation",
    items: [
      { name: "OpenAI API", icon: "/images/skills/openai.svg" },
      { name: "Gemini API", icon: "/images/skills/gemini.svg" },
      { name: "n8n", icon: "/images/skills/n8n.svg" },
      { name: "Elevenlabs API", icon: "/images/skills/elevenlabs.svg" }
    ]
  },
  {
    name: "Cloud & Hosting",
    items: [
      { name: "GCP", icon: "/images/skills/gcp.svg" },
      { name: "Hostinger (VPS)", icon: "/images/skills/hostinger.svg" },
      { name: "Vercel", icon: "/images/skills/vercel.svg" },
      { name: "Docker", icon: "/images/skills/docker.svg" },
      { name: "GitHub", icon: "/images/skills/github.svg" }
    ]
  },
  {
    name: "Design & Video",
    items: [
      { name: "Adobe Premiere Pro", icon: "/images/skills/premiere.svg" },
      { name: "Adobe After Effects", icon: "/images/skills/aftereffects.svg" },
      { name: "Adobe Photoshop", icon: "/images/skills/photoshop.svg" }
    ]
  }
];
