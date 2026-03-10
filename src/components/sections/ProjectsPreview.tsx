import { PROJECTS } from "@/constants/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";

export default function ProjectsPreview() {
  const featured = PROJECTS.filter(p => p.featured).slice(0, 4);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="selected-projects-grid">
          {featured.map((project, idx) => (
            <div key={idx} className="project-feature-card">
              <div className="project-feature-header">
                <span className="project-number">0{idx + 1} — </span>
                <span className="project-platform">{project.tag}</span>
              </div>
              <h3 className="project-feature-title">{project.title}</h3>
              
              <div 
                className="project-feature-visual" 
                style={{ backgroundColor: project.color || 'var(--card-bg)' }}
              >
                <p className="project-feature-desc">{project.description}</p>
                <div className="project-mockup-placeholder">
                  {/* Mockup visual */}
                  <div className={`mockup-frame ${project.tag.includes('MOBILE') ? 'mobile' : 'desktop'}`}>
                    <div className="mockup-dots">
                      <span></span><span></span><span></span>
                    </div>
                    <div className="mockup-screen">
                        {/* Placeholder for project image/visual */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-feature-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge-minimal">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="section-footer">
          <Button href="/projects" variant="outline">View All Projects</Button>
        </div>
      </div>
    </section>
  );
}
