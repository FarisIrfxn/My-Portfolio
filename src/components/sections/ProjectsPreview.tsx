import { PROJECTS } from "@/constants/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";

export default function ProjectsPreview() {
  const featured = PROJECTS.filter(p => p.featured);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Selected Projects</h2>
      <div className="projects-grid">
        {featured.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
      <div className="section-footer">
        <Button href="/projects" variant="outline">View All Projects</Button>
      </div>
    </section>
  );
}
