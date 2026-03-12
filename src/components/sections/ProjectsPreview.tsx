import { PROJECTS } from "@/constants/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import Image from "next/image";

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
                <div className={`project-mockup-placeholder ${['ChatBot', 'DuriooGPT'].includes(project.id) ? 'combo-mode' : project.id === 'DuriImageGen' ? 'triple-mobile-mode' : ''}`}>
                  {['ChatBot', 'DuriooGPT'].includes(project.id) ? (
                    <>
                      <div className="mockup-frame desktop combo-desktop">
                        <div className="mockup-dots">
                          <span></span><span></span><span></span>
                        </div>
                        <div className="mockup-screen" style={{ position: 'relative', overflow: 'hidden' }}>
                            {project.mockups?.desktop && (
                                <Image src={project.mockups.desktop} alt={`${project.title} Desktop`} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                            )}
                        </div>
                      </div>
                      <div className="mockup-frame mobile combo-mobile iphone-mockup">
                        <div className="notch"></div>
                        <div className="mockup-screen" style={{ position: 'relative', overflow: 'hidden' }}>
                            {project.mockups?.mobile && (
                                <Image src={project.mockups.mobile} alt={`${project.title} Mobile`} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                            )}
                        </div>
                      </div>
                    </>
                  ) : project.id === 'DuriImageGen' ? (
                    <>
                      <div className="mockup-frame mobile triple-mobile-left iphone-mockup">
                        <div className="notch"></div>
                        <div className="mockup-screen" style={{ position: 'relative', overflow: 'hidden' }}>
                            {project.mockups?.mobileLeft && (
                                <Image src={project.mockups.mobileLeft} alt={`${project.title} Left`} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                            )}
                        </div>
                      </div>
                      <div className="mockup-frame mobile triple-mobile-right iphone-mockup">
                        <div className="notch"></div>
                        <div className="mockup-screen" style={{ position: 'relative', overflow: 'hidden' }}>
                            {project.mockups?.mobileRight && (
                                <Image src={project.mockups.mobileRight} alt={`${project.title} Right`} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                            )}
                        </div>
                      </div>
                      <div className="mockup-frame mobile triple-mobile-center iphone-mockup">
                        <div className="notch"></div>
                        <div className="mockup-screen" style={{ position: 'relative', overflow: 'hidden' }}>
                            {project.mockups?.mobile && (
                                <Image src={project.mockups.mobile} alt={`${project.title} Center`} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                            )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className={`mockup-frame ${project.tag.includes('MOBILE') ? 'mobile iphone-mockup' : 'desktop'}`}>
                      {project.tag.includes('MOBILE') ? <div className="notch"></div> : (
                        <div className="mockup-dots">
                          <span></span><span></span><span></span>
                        </div>
                      )}
                      <div className="mockup-screen" style={{ position: 'relative', overflow: 'hidden' }}>
                            {project.tag.includes('MOBILE') ? (
                                project.mockups?.mobile && (
                                    <Image src={project.mockups.mobile} alt={`${project.title} Preview`} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                                )
                            ) : (
                                project.mockups?.desktop && (
                                    <Image src={project.mockups.desktop} alt={`${project.title} Preview`} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                                )
                            )}
                      </div>
                    </div>
                  )}
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
