'use client';

import { useState, useMemo } from 'react';
import { ACHIEVEMENTS } from '@/constants/achievements';
import {
  Play, Image as ImageIcon, FileText, Star,
  ExternalLink, Instagram, Linkedin, Tv2, Newspaper, Globe,
  ChevronLeft, ChevronRight, X, Maximize2, Facebook, Youtube
} from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
  { key: 'All', label: 'All' },
  { key: 'socmed', label: 'SocMed' },
  { key: 'news', label: 'News' },
  { key: 'personal', label: 'Personal' },
];

function getSourceIcon(achievement: any) {
  if (achievement.icon === 'facebook') return <Facebook size={12} />;
  if (achievement.icon === 'youtube') return <Youtube size={12} />;
  
  const source = achievement.source;
  if (!source) return <Globe size={11} />;
  const s = source.toLowerCase();
  if (s.includes('instagram')) return <Instagram size={11} />;
  if (s.includes('linkedin')) return <Linkedin size={11} />;
  if (s.includes('tv') || s.includes('television')) return <Tv2 size={11} />;
  if (s.includes('amanz') || s.includes('kosmo') || s.includes('buletin') || s.includes('blog') || s.includes('politeknik') || s.includes('tech samana') || s.includes('ikiim')) return <Newspaper size={11} />;
  return <Globe size={11} />;
}

function getTypeIcon(type: string) {
  if (type === 'video') return <Play size={36} />;
  if (type === 'image') return <ImageIcon size={36} />;
  if (type === 'memory') return <Star size={36} />;
  return <FileText size={36} />;
}

function getLinkLabel(achievement: any) {
  if (achievement.buttonText) return achievement.buttonText;

  const source = achievement.source;
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

function ImageGallery({
  images,
  type,
  previewStyle,
  isModal = false,
  galleryDetails,
  defaultAspectRatio,
  defaultMaxWidth,
  onOpenModal
}: {
  images: string[],
  type: string,
  previewStyle?: React.CSSProperties,
  isModal?: boolean,
  galleryDetails?: { maxWidth?: string; aspectRatio?: string; flex?: string; }[],
  defaultAspectRatio?: string,
  defaultMaxWidth?: string,
  onOpenModal?: () => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="achievement-media-side">
        <div className="achievement-media-container">
          <div className="media-preview" style={previewStyle}>
            <div className="media-visual" style={{ color: TYPE_COLORS[type] ?? 'var(--accent)' }}>
              {getTypeIcon(type)}
            </div>
          </div>
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
    <div className="achievement-media-side">
      <div className="achievement-media-container" onClick={onOpenModal}>
        <div className="media-preview" style={previewStyle}>
          <div className="gallery-main-container" style={{ width: '100%', height: '100%', position: 'relative' }}>
            <div className="gallery-image-wrapper" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Achievement Detail"
                className="gallery-image"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: isModal ? 'contain' : 'cover',
                  animation: 'fadeIn 0.6s ease-out'
                }}
              />
            </div>
            {!isModal && (
              <div className="media-expand-icon">
                <Maximize2 size={14} />
              </div>
            )}
          </div>
        </div>
      </div>

      {!isModal && images.length > 1 && (
        <div className="gallery-dots-nav">
          <button className="dot-nav-btn prev" onClick={prev} aria-label="Previous image">
            <span className="nav-arrows">&lt;</span>
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
            <span className="nav-arrows">&gt;</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedAchievement, setSelectedAchievement] = useState<any>(null);

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
                <ImageGallery
                  images={item.images || []}
                  type={item.type}
                  galleryDetails={item.galleryDetails}
                  defaultAspectRatio={item.aspectRatio}
                  defaultMaxWidth={item.maxWidth}
                  onOpenModal={() => setSelectedAchievement(item)}
                  previewStyle={{
                    background: `linear-gradient(135deg, color-mix(in srgb, ${TYPE_COLORS[item.type] ?? '#5C6BC0'} 18%, var(--bg-secondary)), var(--card-bg))`,
                  }}
                />

                {/* Content box */}
                <div className="achievement-content-box">
                  <div className="achievement-header-meta">
                    {item.source && (
                      <span className="achievement-source-badge">
                        {getSourceIcon(item)}
                        {item.source}
                      </span>
                    )}
                    <span className="achievement-date-pill">{item.date}</span>
                  </div>

                  <h3 className="achievement-title" onClick={() => setSelectedAchievement(item)} style={{ cursor: 'pointer' }}>{item.title}</h3>
                  <p className="achievement-desc">{item.description}</p>

                  <div className="achievement-footer">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-work-btn"
                      >
                        {getLinkLabel(item)} <ExternalLink size={18} style={{ marginLeft: '10px' }} />
                      </a>
                    ) : (
                      <span className="view-work-btn view-work-btn--muted">
                        <Star size={18} style={{ marginRight: '10px' }} /> Personal Milestone
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Modal Overlay */}
      {selectedAchievement && (
        <AchievementModal
          achievement={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
        />
      )}
    </main>
  );
}

function AchievementModal({ achievement, onClose }: { achievement: any, onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const images = achievement.images || [];

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="achievement-modal-overlay">
      <button className="modal-close-btn" onClick={onClose}>
        <X size={24} />
      </button>

      <div className="modal-main-viewer">
        {images.length > 1 && (
          <button className="modal-nav-arrow prev" onClick={prev}>
            <ChevronLeft size={32} />
          </button>
        )}

        <div className="modal-image-container">
          <img
            key={index}
            src={images[index]}
            alt={achievement.title}
            className="modal-image"
          />

          {images.length > 1 && (
            <div className="dots-container">
              {images.map((_: any, i: number) => (
                <span
                  key={i}
                  className={`nav-dot ${i === index ? 'active' : ''}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          )}
        </div>

        {images.length > 1 && (
          <button className="modal-nav-arrow next" onClick={next}>
            <ChevronRight size={32} />
          </button>
        )}
      </div>

      <div className="modal-info-panel">
        <div className="modal-info-left">
          <div className="modal-meta-row">
            {achievement.source && (
              <div className="achievement-source-badge">
                {getSourceIcon(achievement)}
                {achievement.source}
              </div>
            )}
            <div className="achievement-date-pill">{achievement.date}</div>
          </div>

          <h2 className="modal-title">{achievement.title}</h2>
          <p className="modal-desc">{achievement.description}</p>
        </div>

        <div className="modal-button-wrap">
          {achievement.link ? (
            <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="modal-action-btn">
              {getLinkLabel(achievement)}
            </a>
          ) : (
            <div className="modal-action-btn" style={{ opacity: 0.5, cursor: 'default' }}>
              Personal Milestone
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
