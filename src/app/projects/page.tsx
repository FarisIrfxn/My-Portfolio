'use client';

import { useState, useMemo } from "react";
import Link from "next/link";
import { PROJECTS } from "@/constants/projects";
import { Search, Filter, Star, GitFork, Github, ExternalLink, SlidersHorizontal } from "lucide-react";
import Button from "@/components/ui/Button";
import Image from "next/image";

const CATEGORIES = ["All Projects", "Web Development", "AI/ML", "Cloud Native CI/CD", "Backend"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesCategory = activeCategory === "All Projects" || project.category === activeCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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

          {/* Search & Actions Bar */}
          <div className="search-actions-bar">
             <div className="search-input-wrapper">
               <Search size={18} className="search-icon" />
               <input 
                type="text" 
                placeholder="Search projects by name, description, or tags..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
               />
             </div>
             <div className="action-buttons">
                <button className="action-btn"><SlidersHorizontal size={16} /> Sort</button>
                <button className="action-btn"><Filter size={16} /> Filters</button>
             </div>
          </div>

          {/* Stats Bar */}
          <div className="projects-stats-bar">
             <span className="projects-count">Showing {filteredProjects.length} projects</span>
             <span className="projects-sort-label">Sort: Date (Desc)</span>
          </div>

          {/* Projects Grid */}
          <div className="projects-mega-grid">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="project-card-v3">
                <div className="card-top-header">
                   <div className="github-stats">
                      <span className="stat"><Star size={14} /> {project.stars || 0}</span>
                      <span className="stat"><GitFork size={14} /> {project.forks || 0}</span>
                   </div>
                   <div className="github-logo">
                      <Github size={20} />
                   </div>
                </div>

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

                   {/* Language Progress Bar Placeholder */}
                   <div className="language-progress">
                      <div className="progress-bar">
                         <div className="progress-fill" style={{ width: '85%', backgroundColor: project.color }}></div>
                         <div className="progress-fill secondary" style={{ width: '15%', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                      </div>
                      <div className="progress-labels">
                         <span className="label">● {project.tech[0]} 85%</span>
                         <span className="label">● Other 15%</span>
                      </div>
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
               <p>No projects found matching your search. Try different terms!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
