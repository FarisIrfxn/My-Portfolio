'use client';

import { useState, useMemo } from 'react';
import { ACHIEVEMENTS } from '@/constants/achievements';
import { Play, Image as ImageIcon, FileText, Instagram, ExternalLink, Search } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = ["All", "video", "image", "post"];

export default function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredAchievements = useMemo(() => {
    return ACHIEVEMENTS.filter(item => {
      return activeCategory === "All" || item.type === activeCategory;
    });
  }, [activeCategory]);

  return (
    <main className="achievements-page">
      <section className="achievements-hero">
        <div className="section-container">
          <h1 className="projects-page-title">Achievements & <span className="text-gradient">Media</span></h1>
          <p className="projects-page-subtitle">A curated collection of my visual works, technical milestones, and public engagements in the AI space.</p>
          
          {/* Filter Tabs */}
          <div className="category-filters">
             {CATEGORIES.map(cat => (
               <button 
                key={cat} 
                className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
               >
                 {cat.charAt(0).toUpperCase() + cat.slice(1)}s
               </button>
             ))}
          </div>

          <div className="achievements-mega-grid">
            {filteredAchievements.map((item, index) => (
              <div key={index} className="achievement-card-v3">
                <div className="achievement-media-container">
                   <div className="media-preview" style={{ 
                      background: `linear-gradient(135deg, var(--bg-secondary), var(--tag-bg))`
                   }}>
                      <div className="media-visual">
                         {item.type === 'video' ? <Play size={40} /> : item.type === 'image' ? <ImageIcon size={40} /> : <FileText size={40} />}
                      </div>
                      <div className="achievement-date-tag">{item.date}</div>
                   </div>
                </div>

                <div className="achievement-content-box">
                  <div className="achievement-meta-header">
                     <span className="achievement-type-label">{item.type.toUpperCase()}</span>
                     <Instagram size={18} className="social-icon" />
                  </div>
                  
                  <h3 className="achievement-title">{item.title}</h3>
                  <p className="achievement-desc">{item.description}</p>
                  
                  <div className="achievement-footer">
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="view-work-btn"
                    >
                      View on Instagram <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
