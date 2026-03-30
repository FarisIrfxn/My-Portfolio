'use client';

import { useState, useMemo } from 'react';
import { ACHIEVEMENTS } from '@/constants/achievements';
import {
  Play, Image as ImageIcon, FileText, Star,
  ExternalLink, Instagram, Linkedin, Tv2, Newspaper, Globe,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
  { key: 'All', label: 'All' },
  { key: 'video', label: 'SocMed' },
  { key: 'post', label: 'Press' },
  { key: 'memory', label: 'Milestones' },
];

function getSourceIcon(source?: string) {
  if (!source) return <Globe size={15} />;
  const s = source.toLowerCase();
  if (s.includes('instagram')) return <Instagram size={15} />;
  if (s.includes('linkedin')) return <Linkedin size={15} />;
  if (s.includes('tv') || s.includes('television')) return <Tv2 size={15} />;
  if (s.includes('amanz') || s.includes('kosmo') || s.includes('buletin') || s.includes('blog') || s.includes('politeknik') || s.includes('tech samana') || s.includes('ikiim')) return <Newspaper size={15} />;
  return <Globe size={15} />;
}

function getTypeIcon(type: string) {
  if (type === 'video') return <Play size={36} />;
  if (type === 'image') return <ImageIcon size={36} />;
  if (type === 'memory') return <Star size={36} />;
  return <FileText size={36} />;
}

function getLinkLabel(source?: string) {
  if (!source) return 'View Post';
  const s = source.toLowerCase();
  if (s.includes('instagram')) return 'View on Instagram';
  if (s.includes('linkedin')) return 'View on LinkedIn';
  if (s.includes('tv9') || s.includes('tv3') || s.includes('television')) return 'Watch Segment';
  if (s.includes('facebook') || s.includes('tech samana') || s.includes('politeknik')) return 'View on Facebook';
  if (s.includes('amanz')) return 'Read on Amanz';
  if (s.includes('kosmo')) return 'Read on Kosmo';
  if (s.includes('buletin') || s.includes('tv3')) return 'Read on TV3';
  if (s.includes('blog') || s.includes('azlinda')) return 'Read Article';
  return 'View Coverage';
}

const TYPE_COLORS: Record<string, string> = {
  video: '#E91E63',
  post: '#5C6BC0',
  image: '#00ACC1',
  memory: '#FF9800',
};

function ImageGallery({ images, type, previewStyle }: { images: string[], type: string, previewStyle?: React.CSSProperties }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="media-preview" style={previewStyle}>
        <div className="media-visual" style={{ color: TYPE_COLORS[type] ?? 'var(--accent)' }}>
          {getTypeIcon(type)}
        </div>
      </div>
    );
  }

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="media-preview" style={previewStyle}>
        <div className="gallery-main-container">
          <div className="gallery-image-wrapper">
            <img 
              src={images[currentIndex]} 
              alt="Achievement Detail" 
              className="gallery-image"
            />
          </div>
        </div>
      </div>
      
      {images.length > 1 && (
        <div className="gallery-dots-nav">
          <button className="dot-nav-btn prev" onClick={prev} aria-label="Previous image">
            <ChevronLeft size={18} />
          </button>
          
          <div className="dots-container">
            {images.map((_, i) => (
              <span 
                key={i} 
                className={`nav-dot ${i === currentIndex ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
              />
            ))}
          </div>

          <button className="dot-nav-btn next" onClick={next} aria-label="Next image">
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </>
  );
}

export default function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredAchievements = useMemo(() => {
    return ACHIEVEMENTS.filter(item =>
      activeCategory === 'All' || item.type === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="achievements-page">
      <section className="achievements-hero">
        <div className="section-container">
          <h1 className="projects-page-title">
            Achievements &amp; <span className="text-gradient">Media</span>
          </h1>
          <p className="projects-page-subtitle">
            Real press features, viral moments, TV appearances, and personal milestones from my journey in AI &amp; technology.
          </p>


          {/* Filter Tabs */}
          <div className="category-filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                className={`filter-chip ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="achievements-mega-grid">
            {filteredAchievements.map((item, index) => (
              <div key={index} className="achievement-card-v3">
                {/* Media top section */}
                <div className="achievement-media-container">
                  <ImageGallery 
                    images={item.images || []} 
                    type={item.type} 
                    previewStyle={{
                      background: `linear-gradient(135deg, color-mix(in srgb, ${TYPE_COLORS[item.type] ?? '#5C6BC0'} 18%, var(--bg-secondary)), var(--tag-bg))`,
                    }}
                  />
                  <div className="achievement-date-tag">{item.date}</div>
                </div>

                {/* Content box */}
                <div className="achievement-content-box">
                  <div className="achievement-meta-header">
                    <span
                      className="achievement-type-label"
                      style={{ background: `color-mix(in srgb, ${TYPE_COLORS[item.type] ?? '#5C6BC0'} 20%, transparent)`, color: TYPE_COLORS[item.type] ?? 'var(--accent)' }}
                    >
                      {item.type.toUpperCase()}
                    </span>
                    {item.source && (
                      <span className="achievement-source-badge">
                        {getSourceIcon(item.source)}
                        {item.source}
                      </span>
                    )}
                  </div>

                  <h3 className="achievement-title">{item.title}</h3>
                  <p className="achievement-desc">{item.description}</p>

                  <div className="achievement-footer">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-work-btn"
                      >
                        {getLinkLabel(item.source)} <ExternalLink size={15} />
                      </a>
                    ) : (
                      <span className="view-work-btn view-work-btn--muted">
                        <Star size={15} /> Personal Milestone
                      </span>
                    )}
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
