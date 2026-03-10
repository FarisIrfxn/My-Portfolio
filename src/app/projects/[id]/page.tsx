'use client';

import { useParams, useRouter } from 'next/navigation';
import { PROJECTS } from '@/constants/projects';
import { ArrowLeft, ExternalLink, Github, Star, GitFork, Calendar, Tag, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function ProjectDetail() {
  const params = useParams();
  const id = params?.id;
  const router = useRouter();
  
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="section-container" style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h1 className="projects-page-title">Project Not Found</h1>
        <p className="projects-page-subtitle">The project you're looking for doesn't exist.</p>
        <div style={{ marginTop: '40px' }}>
             <Button href="/projects">Back to Projects</Button>
        </div>
      </div>
    );
  }

  return (
    <main className="project-detail-page">
      <div className="section-container" style={{ padding: '120px 20px 60px' }}>
        {/* Back Button */}
        <button 
            onClick={() => router.back()}
            className="back-btn"
            style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                background: 'none', 
                border: 'none', 
                color: 'var(--text-secondary)',
                fontWeight: '700',
                cursor: 'pointer',
                marginBottom: '40px',
                padding: '0'
            }}
        >
          <ArrowLeft size={20} /> Back
        </button>

        <div className="project-detail-layout">
          {/* Left Column: Cover & Description */}
          <div className="detail-main">
            <div 
                className="detail-cover" 
                style={{ 
                    width: '100%', 
                    aspectRatio: '16/9', 
                    borderRadius: '32px', 
                    backgroundColor: project.color || 'var(--tag-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '5rem',
                    marginBottom: '40px',
                    border: '1px solid var(--border-color)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
               <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3))' }}></div>
               <span style={{ zIndex: 1, position: 'relative' }}>{project.category === 'AI/ML' ? '🧠' : project.category === 'Web Development' ? '🌐' : '⚙️'}</span>
            </div>

            <h1 className="projects-page-title" style={{ textAlign: 'left', marginBottom: '24px' }}>{project.title}</h1>
            
            <div className="detail-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
               <span className="tech-chip" style={{ background: 'var(--accent-color)', color: 'var(--btn-text)', border: 'none' }}>{project.tag}</span>
               <span className="tech-chip">{project.category}</span>
            </div>

            <div className="detail-section">
                <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '20px' }}>Overview</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    {project.description}
                </p>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '20px' }}>
                    <p>This project was built to address complex challenges in {project.category?.toLowerCase()}. 
                    Focused on high-performance architecture and user-centric design, it implements cutting-edge 
                    technologies like {project.tech.slice(0, 2).join(' and ')}.</p>
                </div>
            </div>
          </div>

          {/* Right Column: Stats & Meta */}
          <div className="detail-sidebar">
             <div className="sidebar-card">
                <h3 style={{ fontSize: '1.25rem', fontWeight: '900', marginBottom: '24px' }}>Project Stats</h3>
                
                <div className="sidebar-stats-grid">
                   <div className="stat-box-detail">
                      <Star size={20} style={{ marginBottom: '8px', color: 'var(--text-secondary)' }} />
                      <div className="stat-value">{project.stars || 0}</div>
                      <div className="stat-label">Stars</div>
                   </div>
                   <div className="stat-box-detail">
                      <GitFork size={20} style={{ marginBottom: '8px', color: 'var(--text-secondary)' }} />
                      <div className="stat-value">{project.forks || 0}</div>
                      <div className="stat-label">Forks</div>
                   </div>
                </div>

                <div className="sidebar-meta">
                   <div className="meta-item">
                      <Calendar size={18} style={{ color: 'var(--accent-color)' }} />
                      <div>
                         <div className="meta-label">Timeline</div>
                         <div className="meta-value">2024 - 2025</div>
                      </div>
                   </div>
                   <div className="meta-item">
                      <Tag size={18} style={{ color: 'var(--accent-color)' }} />
                      <div>
                         <div className="meta-label">Impact</div>
                         <div className="meta-value" style={{ fontSize: '0.85rem' }}>{project.impact}</div>
                      </div>
                   </div>
                </div>

                <div className="sidebar-tech-list">
                   <h4>Built With</h4>
                   <div className="tech-chips-wrapper">
                      {project.tech.map((t, i) => (
                        <span key={i} className="tech-chip" style={{ fontSize: '0.75rem' }}>{t}</span>
                      ))}
                   </div>
                </div>

                <div className="sidebar-actions-detail">
                   <button className="view-details-btn">
                      Live Project <ExternalLink size={16} />
                   </button>
                   <button className="action-btn" style={{ width: '100%', justifyContent: 'center' }}>
                      <Github size={18} /> Source Code
                   </button>
                </div>
             </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="detail-impact-section">
            <div className="impact-header">
                <CheckCircle2 size={32} />
                <h2>Key Achievements</h2>
            </div>
            <p>
                {project.impact}. This project pushed the boundaries of what's possible with {project.tech[0]} 
                integration and set a new standard for our internal development benchmarks.
            </p>
        </div>
      </div>
    </main>
  );
}
