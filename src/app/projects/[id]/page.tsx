'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';

import { PROJECTS } from '@/constants/projects';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, CheckCircle2, Workflow, Cpu, Database, Zap, PlayCircle, Lightbulb, AlertTriangle, TrendingUp, Code, Image as ImageIcon, ArrowRight, Terminal, ChevronRight, ChevronLeft, LayoutList, Monitor, Smartphone, X } from 'lucide-react';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import Image from 'next/image';

// Extract YouTube ID for embedding (supports regular and shorts)
function getYouTubeId(url: string) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

// Check if URL is a YouTube Short
function isShort(url: string) {
  return url?.includes('shorts/');
}

export default function ProjectDetail() {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const params = useParams();
  const id = params?.id;
  const router = useRouter();

  const project = PROJECTS.find(p => p.id === id);
  const selectedImage = (selectedIndex !== null && project?.gallery) ? project.gallery[selectedIndex] : null;

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
      <div className="section-container" style={{ padding: '100px 20px 40px', maxWidth: '1100px', margin: '0 auto' }}>
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
                aspectRatio: '21/9',
                maxHeight: '350px',
                borderRadius: '24px',
                backgroundColor: project.color || 'var(--tag-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '30px',
                border: '1px solid var(--border-color)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {project.thumbnail ? (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              ) : (
                <>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3))' }}></div>
                  <span style={{ zIndex: 1, position: 'relative', fontSize: '4rem' }}>
                    {project.category === 'AI/ML' ? '🧠' : project.category === 'Web Development' ? '🌐' : '⚙️'}
                  </span>
                </>
              )}
            </div>

            <h1 style={{ fontSize: '2.5rem', fontWeight: '950', letterSpacing: '-1px', textAlign: 'left', marginBottom: '16px' }}>{project.title}</h1>
            
            <div className="detail-tags" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
               <span className="tech-chip" style={{ background: 'var(--accent-color)', color: 'var(--btn-text)', border: 'none' }}>{project.tag}</span>
               <span className="tech-chip">{project.category}</span>
            </div>

            <div className="detail-section" style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '900', marginBottom: '16px' }}>Overview</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                {project.description}
              </p>
            </div>
          </div>

          {/* Right Column: Stats & Meta */}
          <div className="detail-sidebar">
            <div className="sidebar-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: '900', marginBottom: '24px' }}>Project Info</h3>

              <div className="sidebar-meta">
                <div className="meta-item">
                  <Calendar size={18} style={{ color: 'var(--accent-color)' }} />
                  <div>
                    <div className="meta-label">Year</div>
                    <div className="meta-value">{project.year || "2024"}</div>
                  </div>
                </div>
                <div className="meta-item">
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-color)' }} />
                  <div>
                    <div className="meta-label">Status</div>
                    <div className="meta-value" style={{ 
                        color: project.status === 'Discontinued' ? '#EF4444' : 
                               (project.status === 'Active' || project.status === 'Completed' ? '#10B981' : 'var(--text-primary)'), 
                        fontWeight: 'bold' 
                    }}>
                        {project.status || "Completed"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar-tech-list" style={{ marginTop: '32px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Code size={16} /> Tech Stack
                </h4>
                <div className="tech-chips-wrapper" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {project.tech.map((t, i) => (
                    <div key={i} className="tech-stack-card" style={{
                      background: 'var(--bg-color)',
                      border: '1px solid var(--border-color)',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: project.color || 'var(--accent-color)',
                        marginRight: '8px'
                      }}></span>
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-actions-detail" style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {(project.link || project.github) ? (
                  <>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                      >
                        <button className="view-details-btn" style={{ width: '100%', justifyContent: 'center', backgroundColor: 'var(--accent-color)', color: 'var(--btn-text)', border: 'none' }}>
                          Visit Project <PlayCircle size={18} />
                        </button>
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                      >
                        <button className="view-details-btn" style={{ width: '100%', justifyContent: 'center', backgroundColor: 'var(--text-primary)', color: 'var(--bg-color)', border: 'none' }}>
                          View Source <Github size={18} />
                        </button>
                      </a>
                    )}
                  </>
                ) : (
                  <div style={{ padding: '16px', borderRadius: '12px', border: '1px dashed var(--border-color)', textAlign: 'center', opacity: 0.6 }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700' }}>INTERNAL PROJECT</span>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* System Architecture Section (Flow Chart Style) */}
        {project.workflow && (
            <div className="detail-workflow-section detail-section-responsive" style={{ borderTop: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', justifyContent: 'center' }}>
                    <Workflow size={28} style={{ color: 'var(--accent-color)' }} />
                    <h2 style={{ fontSize: '1.75rem', fontWeight: '950', letterSpacing: '-1px' }}>System Architecture</h2>
                </div>
                
                <div className="workflow-flowchart" style={{ 
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    gap: '32px',
                    padding: '20px 0'
                }}>
                    {project.workflow.map((item, idx) => (
                        <div key={idx} className="flow-step-node" style={{
                            background: 'var(--card-bg)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '20px',
                            padding: '32px 24px',
                            width: '280px',
                            textAlign: 'center',
                            position: 'relative',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            transition: 'transform 0.3s ease'
                        }}>
                            <div style={{ 
                                background: 'var(--accent-color)',
                                color: 'var(--btn-text)',
                                width: '36px',
                                height: '36px',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.9rem',
                                fontWeight: '900',
                                marginBottom: '16px'
                            }}>
                                {idx + 1}
                            </div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '900', marginBottom: '12px', color: 'var(--text-primary)' }}>{item.step}</h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        )}


        {/* Challenges & Lessons Learned Section */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="detail-challenges-section detail-section-responsive" style={{ borderTop: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
              <AlertTriangle size={28} style={{ color: '#F59E0B' }} />
              <h2 style={{ fontSize: '1.75rem', fontWeight: '950', letterSpacing: '-1px' }}>Challenges & Solutions</h2>
            </div>

            <div style={{ display: 'grid', gap: '24px' }}>
              {project.challenges.map((item, idx) => (
                <div key={idx} style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '16px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    padding: '20px 24px',
                    borderBottom: '1px solid var(--border-color)',
                    background: 'rgba(245, 158, 11, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <AlertTriangle size={20} style={{ color: '#F59E0B' }} />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: 0 }}>{item.challenge}</h3>
                  </div>
                  <div style={{
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <Lightbulb size={20} style={{ color: 'var(--text-secondary)', marginTop: '2px' }} />
                    <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Gallery & Showcase Section */}
        <div className="detail-showcase-section detail-section-responsive" style={{ borderTop: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', justifyContent: 'center' }}>
            <ImageIcon size={28} style={{ color: 'var(--accent-color)' }} />
            <h2 style={{ fontSize: '1.75rem', fontWeight: '950', letterSpacing: '-1px' }}>Project Gallery</h2>
          </div>
          
          <div className="project-gallery-grid" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              justifyContent: 'center',
              alignItems: 'start',
              maxWidth: '1200px',
              margin: '0 auto'
          }}>
              {(project.gallery || ["", "", ""]).map((imgUrl, idx) => {
                  const ytId = getYouTubeId(imgUrl);
                  return (
                  <div
                    key={idx}
                    className="gallery-item-card"
                    onClick={() => !ytId && imgUrl && setSelectedIndex(idx)}
                    style={{
                      background: 'var(--card-bg)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 15px 45px rgba(0,0,0,0.1)',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      flexShrink: 0,
                      cursor: (!ytId && imgUrl) ? 'zoom-in' : 'default',
                      maxWidth: project.galleryDetails?.[idx]?.maxWidth || (ytId
                        ? (isShort(imgUrl) ? '320px' : '650px')
                        : '320px'),
                      flex: project.galleryDetails?.[idx]?.flex || '0 1 auto',
                      width: '100%',
                      margin: '0'
                    }}>
                      <div style={{
                          position: 'relative',
                          aspectRatio: project.galleryDetails?.[idx]?.aspectRatio || (ytId
                            ? (isShort(imgUrl) ? '9/16' : '16/9')
                            : 'auto'),
                          background: `linear-gradient(135deg, ${project.color || 'var(--accent-color)'}22 0%, ${project.color || 'var(--accent-color)'}05 100%)`,
                          display: 'block',
                          overflow: 'hidden'
                      }}>
                          {/* Artistic Background Shapes (only for dummy/video overlays) */}
                          {(!imgUrl || ytId) && (
                            <div style={{
                                position: 'absolute',
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                background: project.color || 'var(--accent-color)',
                                opacity: 0.1,
                                filter: 'blur(40px)',
                                top: '-20px',
                                right: '-20px',
                                zIndex: 0
                            }}></div>
                          )}

                          {(() => {
                              if (ytId) {
                                  return (
                                      <iframe
                                          width="100%"
                                          height="100%"
                                          src={`https://www.youtube.com/embed/${ytId}?rel=0&showinfo=0`}
                                          title={`${project.title} Video Showcase`}
                                          frameBorder="0"
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                          allowFullScreen
                                          style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                      ></iframe>
                                  );
                              }
                              
                              if (imgUrl && imgUrl !== "") {
                                  return (
                                      <img 
                                          src={imgUrl} 
                                          alt={`${project.title} Screenshot ${idx + 1}`} 
                                          style={{ width: '100%', height: 'auto', display: 'block' }}
                                      />
                                  );
                              }
                              
                              return (
                                  <div style={{ textAlign: 'center', zIndex: 1, padding: '60px 0' }}>
                                      <div style={{ 
                                          width: '60px', 
                                          height: '60px', 
                                          borderRadius: '16px', 
                                          background: 'rgba(255,255,255,0.05)', 
                                          display: 'flex', 
                                          alignItems: 'center', 
                                          justifyContent: 'center',
                                          margin: '0 auto 12px',
                                          border: '1px solid rgba(255,255,255,0.1)'
                                      }}>
                                          {idx === 0 ? <Monitor size={28} style={{ color: project.color }} /> : 
                                           idx === 1 ? <Database size={28} style={{ color: project.color }} /> : 
                                           <Smartphone size={28} style={{ color: project.color }} />}
                                      </div>
                                      <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-secondary)', opacity: 0.5 }}>DUMMY PREVIEW</span>
                                  </div>
                              );
                          })()}

                          {/* Gradient Overlay Caption */}
                          <div style={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              right: 0,
                              padding: '80px 16px 16px',
                              background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0.1) 85%, transparent 100%)',
                              pointerEvents: 'none',
                              zIndex: 2,
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'flex-end'
                          }}>
                              <div style={{
                                  fontSize: '0.9rem',
                                  fontWeight: '800',
                                  color: '#fff',
                                  marginBottom: '4px',
                                  textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                              }}>
                                  {project.galleryDetails?.[idx]?.title || (ytId ? 'Video Showcase' : `Screenshot 0${idx + 1}`)}
                              </div>
                              <div style={{
                                  fontSize: '0.8rem',
                                  color: 'rgba(255,255,255,0.9)',
                                  lineHeight: '1.5',
                                  fontWeight: '400',
                                  textShadow: '0 1px 5px rgba(0,0,0,0.5)',
                                  display: '-webkit-box',
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: 'vertical',
                                  overflow: 'hidden'
                              }}>
                                  {project.galleryDetails?.[idx]?.description || (ytId ? 'Watch the full video demonstration on YouTube.' :
                                   idx === 0 ? 'Main interface overview and primary user workflow.' :
                                   idx === 1 ? 'Detailed breakdown of system components and features.' :
                                   'Technical implementation and backend architecture.')}
                              </div>
                          </div>
                      </div>
                  </div>
                  );
              })}
          </div>
        </div>

        {/* Impact Section - Compact Monochrome Style */}
        {project.impact && (
          <div className="detail-impact-section" style={{ 
            marginTop: '60px', 
            paddingBottom: '20px'
          }}>
              <div style={{ 
                  background: 'var(--card-bg)', 
                  padding: '32px 32px', // More compact padding
                  borderRadius: '20px', 
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
              }}>
                  {/* Subtle Decorative Quote Icon - Smaller */}
                  <div style={{ 
                    fontSize: '10rem', 
                    position: 'absolute', 
                    top: '-30px', 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    opacity: 0.05, 
                    color: 'var(--text-primary)',
                    fontFamily: 'serif',
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}>
                    &ldquo;
                  </div>

                  {/* Subtle Trending Icon (Monochrome) - Smaller */}
                  <TrendingUp size={110} style={{ 
                      position: 'absolute', 
                      right: '-15px', 
                      bottom: '-15px', 
                      opacity: 0.04, 
                      color: 'var(--text-primary)',
                      transform: 'rotate(-10deg)',
                      zIndex: 0
                  }} />

                  <div style={{ 
                    fontSize: '0.8rem', 
                    fontWeight: '900', 
                    color: 'var(--text-primary)', 
                    opacity: 0.4,
                    textTransform: 'uppercase', 
                    letterSpacing: '5px',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <span style={{ height: '1px', width: '25px', background: 'var(--border-color)' }}></span>
                    Impact
                    <span style={{ height: '1px', width: '25px', background: 'var(--border-color)' }}></span>
                  </div>

                  <div style={{ position: 'relative', maxWidth: '650px', margin: '0 auto', zIndex: 1 }}>
                      <h2 style={{ 
                          fontSize: '1.2rem', // Reduced for better balance
                          fontWeight: '700', // Slightly lower for clarity
                          color: 'var(--text-primary)', 
                          lineHeight: '1.6', // Better line height for smaller text
                          letterSpacing: '0', // Standard spacing
                          margin: 0
                      }}>
                          "{project.impact}"
                      </h2>
                  </div>
              </div>
          </div>
        )}


        {/* Project Navigation (Next/Prev) */}
        <div className="project-navigation-footer" style={{ 
            marginTop: '100px', 
            paddingTop: '60px', 
            borderTop: '2px solid var(--border-color)',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px'
        }}>
            {PROJECTS[PROJECTS.findIndex(p => p.id === id) - 1] ? (
              <button onClick={() => router.push(`/projects/${PROJECTS[PROJECTS.findIndex(p => p.id === id) - 1].id}`)} style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                padding: '24px',
                borderRadius: '20px',
                flex: 1,
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }} className="nav-footer-btn">
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ChevronLeft size={16} /> PREVIOUS PROJECT
                </span>
                <span style={{ fontSize: '1.2rem', fontWeight: '900' }}>{PROJECTS[PROJECTS.findIndex(p => p.id === id) - 1].title}</span>
              </button>
            ) : <div style={{ flex: 1 }}></div>}

            {PROJECTS[PROJECTS.findIndex(p => p.id === id) + 1] ? (
              <button onClick={() => router.push(`/projects/${PROJECTS[PROJECTS.findIndex(p => p.id === id) + 1].id}`)} style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                padding: '24px',
                borderRadius: '20px',
                flex: 1,
                textAlign: 'right',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }} className="nav-footer-btn">
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  NEXT PROJECT <ChevronRight size={16} />
                </span>
                <span style={{ fontSize: '1.2rem', fontWeight: '900' }}>{PROJECTS[PROJECTS.findIndex(p => p.id === id) + 1].title}</span>
              </button>
            ) : <div style={{ flex: 1 }}></div>}
        </div>

        {/* Floating Vertical Quick Navigation (Jump-to Menu) */}
        <div className="floating-jump-menu hide-on-mobile" style={{
            position: 'fixed',
            right: '25px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
        }}>
            <div className="jump-menu-container" style={{
                background: 'rgba(30, 30, 30, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '30px',
                padding: '12px 6px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                alignItems: 'center'
            }}>
                <button className="jump-tool-v" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} title="Top">
                  <LayoutList size={18} />
                </button>
                <div style={{ width: '20px', height: '1px', background: 'rgba(255,255,255,0.1)', margin: '4px 0' }}></div>
                
                <button className="jump-tool-v" onClick={() => document.querySelector('.detail-workflow-section')?.scrollIntoView({ behavior: 'smooth' })} title="Architecture">
                   <Workflow size={18} />
                </button>

                <button className="jump-tool-v" onClick={() => document.querySelector('.detail-challenges-section')?.scrollIntoView({ behavior: 'smooth' })} title="Challenges">
                   <AlertTriangle size={18} />
                </button>
                
                <button className="jump-tool-v" onClick={() => document.querySelector('.detail-showcase-section')?.scrollIntoView({ behavior: 'smooth' })} title="Gallery">
                   <ImageIcon size={18} />
                </button>
                
                <button className="jump-tool-v" onClick={() => document.querySelector('.detail-impact-section')?.scrollIntoView({ behavior: 'smooth' })} title="Impact">
                   <TrendingUp size={18} />
                </button>
            </div>
        </div>

      </div>

      {/* Image Lightbox Modal */}
      {selectedIndex !== null && selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedIndex(null)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(10px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            cursor: 'zoom-out'
          }}
        >
          <button
            className="modal-close-btn-v2"
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
            style={{
              position: 'absolute',
              top: '24px', right: '24px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              borderRadius: '50%',
              width: '48px', height: '48px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10000
            }}
          >
            <X size={22} />
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            style={{ 
                maxHeight: '90vh', 
                maxWidth: '900px', 
                width: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
            }}
          >
            <img
              src={selectedImage}
              alt="Gallery Fullscreen"
              style={{
                maxHeight: '75vh',
                maxWidth: '100%',
                objectFit: 'contain',
                borderRadius: '16px',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                display: 'block'
              }}
            />
            
            {/* Modal Image Info */}
            <div style={{
                textAlign: 'center',
                color: '#fff',
                maxWidth: '600px'
            }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '8px' }}>
                    {project.galleryDetails?.[selectedIndex]?.title || `Screenshot 0${selectedIndex + 1}`}
                </h3>
                <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                    {project.galleryDetails?.[selectedIndex]?.description || "Detailed view of the project component."}
                </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
