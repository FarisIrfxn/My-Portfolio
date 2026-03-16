'use client';

import { useState } from "react";
import { ACHIEVEMENTS } from "@/constants/achievements";
import Button from "../ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Initial focus on TV Appearance (Index 1)
// We'll show [Viral (0), TV (1), Google (3)] as requested.
// To keep it simple, we'll use a carousel of specific featured indexes or the whole list.
const FEATURED_INDEXES = [0, 1, 3, 5, 6, 13, 16, 19]; // Selected high-quality achievements

function getIcon(type: string) {
  if (type === 'video') return '🎬';
  if (type === 'image') return '📸';
  if (type === 'memory') return '⭐';
  return '🔗';
}

export default function Achievements() {
  const [activeIndex, setActiveIndex] = useState(1); // Index of the 'center' item in FEATURED_INDEXES

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % FEATURED_INDEXES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + FEATURED_INDEXES.length) % FEATURED_INDEXES.length);
  };

  const getDisplayItems = () => {
    const prevIdx = (activeIndex - 1 + FEATURED_INDEXES.length) % FEATURED_INDEXES.length;
    const centerIdx = activeIndex;
    const nextIdx = (activeIndex + 1) % FEATURED_INDEXES.length;

    return [
      { data: ACHIEVEMENTS[FEATURED_INDEXES[prevIdx]], pos: 'left' },
      { data: ACHIEVEMENTS[FEATURED_INDEXES[centerIdx]], pos: 'center' },
      { data: ACHIEVEMENTS[FEATURED_INDEXES[nextIdx]], pos: 'right' }
    ];
  };

  const displayItems = getDisplayItems();

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '100px' }}>Achievements &amp; Media</h2>
        
        <div className="achievements-deck-wrapper">
          <button className="deck-nav-btn prev" onClick={handlePrev} aria-label="Previous achievement">
            <ChevronLeft size={32} />
          </button>

          <div className="achievements-deck">
            {displayItems.map((item, index) => {
              const { data, pos } = item;
              return (
                <div key={`${data.title}-${pos}`} className={`achievement-card-floating ${pos}`}>
                  <div className="achievement-media-placeholder">
                    {data.images && data.images.length > 0 ? (
                      <img 
                        src={data.images[0]} 
                        alt={data.title} 
                        className="achievement-card-img"
                      />
                    ) : (
                      <span className="media-icon">
                        {getIcon(data.type)}
                      </span>
                    )}
                  </div>
                  <div className="achievement-info">
                    <span className="achievement-type">{data.source ?? data.type}</span>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                    <div className="achievement-actions">
                      {data.link ? (
                        <Button 
                          href={data.link} 
                          variant="outline" 
                          target="_blank" 
                          className="achievement-btn"
                        >
                          {data.type === 'video' ? 'View Clip' : 'View Coverage'}
                        </Button>
                      ) : (
                        <span className="achievement-milestone-tag">⭐ Personal Milestone</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="deck-nav-btn next" onClick={handleNext} aria-label="Next achievement">
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="section-footer" style={{ marginTop: '120px', textAlign: 'center' }}>
          <Button href="/achievements" variant="outline">
            View All Achievements
          </Button>
        </div>

      </div>
    </section>
  );
}
