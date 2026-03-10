'use client';

import { PROJECTS } from "@/constants/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="projects-list-page">
      <section className="projects-hero">
        <div className="container">
          <h1 className="section-title">Technical Projects</h1>
          <p className="subtitle">A deep dive into the AI solutions and full-stack products I've engineered.</p>
        </div>
      </section>

      <section className="projects-grid-container">
        <div className="projects-list">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} layout="list" />
          ))}
        </div>
      </section>
    </main>
  );
}
