import { ACHIEVEMENTS } from "@/constants/achievements";
import Button from "../ui/Button";

// left = Syahril Hamdan (index 13), center = TV Appearance (index 12), right = Google HQ (index 15)
const PREVIEW_INDEXES = [13, 12, 15];

function getIcon(type: string) {
  if (type === 'video') return '🎬';
  if (type === 'image') return '📸';
  if (type === 'memory') return '⭐';
  return '🔗';
}

export default function Achievements() {
  const previewItems = PREVIEW_INDEXES.map(i => ACHIEVEMENTS[i]);

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title">Achievements &amp; Media</h2>
        <p className="section-subtitle">Press features, viral moments, TV appearances, and personal milestones from my journey in AI &amp; tech.</p>
        
        <div className="achievements-deck">
          {previewItems.map((item, index) => {
            const positions = ['left', 'center', 'right'];
            const position = positions[index];
            return (
              <div key={index} className={`achievement-card-floating ${position}`}>
                <div className="achievement-media-placeholder">
                  <span className="media-icon">
                    {getIcon(item.type)}
                  </span>
                </div>
                <div className="achievement-info">
                  <span className="achievement-type">{item.source ?? item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="achievement-actions">
                    {item.link ? (
                      <Button 
                        href={item.link} 
                        variant="outline" 
                        target="_blank" 
                        className="achievement-btn"
                      >
                        {item.type === 'video' ? 'View Clip' : 'View Coverage'}
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

        <div className="section-footer" style={{ marginTop: '50px', textAlign: 'center' }}>
          <Button href="/achievements" variant="outline">
            View All Achievements
          </Button>
        </div>

      </div>
    </section>
  );
}
