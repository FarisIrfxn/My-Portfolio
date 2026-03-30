'use client';

import { useState, useMemo } from "react";
import Link from "next/link";
import { PROJECTS } from "@/constants/projects";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const CATEGORIES = ["All Projects", "Web Development", "AI/ML", "Mobile Development", "Media Production", "Automation"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => activeCategory === "All Projects" || project.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="projects-list-page">
      <section className="projects-hero">
        <div className="section-container">
          <div>
            <h1 className="projects-page-title">Latest <span className="text-gradient">Projects</span></h1>
            <p className="projects-page-subtitle">
              Explore my recent work showcasing my skills in software engineering, design, and problem-solving.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="category-filters">
             {CATEGORIES.map(cat => (
               <button 
                key={cat} 
                className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
               >
                 {cat}
               </button>
             ))}
          </div>

          {/* Stats Bar */}
          <div className="projects-stats-bar" style={{ justifyContent: 'center', marginBottom: '32px' }}>
             <span className="projects-count">Displaying {filteredProjects.length} projects</span>
          </div>

          {/* Projects Grid */}
          <div className="projects-mega-grid">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="project-card-v3">
                {/* Removed GitHub stats and logo for private company projects */}


                <div className="card-visual-header" style={{ borderColor: project.color || 'var(--accent-color)' }}>
                   {project.thumbnail ? (
                     <div className="card-thumbnail-wrapper">
                       <Image 
                         src={project.thumbnail} 
                         alt={project.title} 
                         fill 
                         style={{ objectFit: 'cover' }}
                         className="project-thumbnail-img"
                       />
                     </div>
                   ) : (
                     <>
                       <div className="visual-overlay" style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}></div>
                       <div className="visual-icon">
                          {project.category === 'AI/ML' ? '🧠' : project.category === 'Web Development' ? '🌐' : '⚙️'}
                       </div>
                     </>
                   )}
                </div>

                <div className="card-body">
                   <h3 className="card-title">{project.title}</h3>
                   <p className="card-description">{project.description}</p>
                   
                   <div className="card-tech-list">
                      {project.tech.map((t, i) => (
                        <span key={i} className="tech-chip">{t}</span>
                      ))}
                   </div>


                   <div className="card-footer">
                      <Link href={`/projects/${project.id}`}>
                        <button className="view-details-btn">
                          View Details <ExternalLink size={16} />
                        </button>
                      </Link>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-results">
               <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
