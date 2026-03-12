'use client';

import { useState, useMemo } from 'react';
import { ACHIEVEMENTS } from '@/constants/achievements';
import {
  Play, Image as ImageIcon, FileText, Star,
  ExternalLink, Instagram, Linkedin, Tv2, Newspaper, Globe
} from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
  { key: 'All', label: 'All' },
  { key: 'video', label: 'Videos' },
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

          {/* Stats bar */}
          <div className="achievements-stats-bar">
            <div className="ach-stat">
              <span className="ach-stat-num">{ACHIEVEMENTS.length}</span>
              <span className="ach-stat-label">Total Entries</span>
            </div>
            <div className="ach-stat">
              <span className="ach-stat-num">{ACHIEVEMENTS.filter(a => a.type === 'post').length}</span>
              <span className="ach-stat-label">Press Features</span>
            </div>
            <div className="ach-stat">
              <span className="ach-stat-num">{ACHIEVEMENTS.filter(a => a.type === 'video').length}</span>
              <span className="ach-stat-label">Video Features</span>
            </div>
            <div className="ach-stat">
              <span className="ach-stat-num">{ACHIEVEMENTS.filter(a => a.type === 'memory').length}</span>
              <span className="ach-stat-label">Milestones</span>
            </div>
          </div>

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
                  <div
                    className="media-preview"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in srgb, ${TYPE_COLORS[item.type] ?? '#5C6BC0'} 18%, var(--bg-secondary)), var(--tag-bg))`,
                    }}
                  >
                    <div className="media-visual" style={{ color: TYPE_COLORS[item.type] ?? 'var(--accent)' }}>
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="achievement-date-tag">{item.date}</div>
                  </div>
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
