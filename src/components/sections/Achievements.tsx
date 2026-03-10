import { ACHIEVEMENTS } from "@/constants/achievements";
import Button from "../ui/Button";

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title">Achievements & Media</h2>
        <p className="section-subtitle">Visual highlights, clips, and AI experiments shared on social media.</p>
        
        <div className="achievements-deck">
          {ACHIEVEMENTS.slice(0, 3).map((item, index) => {
            const positions = ['left', 'center', 'right'];
            const position = positions[index];
            return (
              <div key={index} className={`achievement-card-floating ${position}`}>
                <div className="achievement-media-placeholder">
                  <span className="media-icon">
                    {item.type === 'video' ? '🎬' : item.type === 'image' ? '📸' : '🔗'}
                  </span>
                </div>
                <div className="achievement-info">
                  <span className="achievement-type">{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="achievement-actions">
                     <Button 
                      href={item.link} 
                      variant="outline" 
                      target="_blank" 
                      className="achievement-btn"
                    >
                      View {item.type === 'video' ? 'Clip' : 'Work'}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="section-footer" style={{ marginTop: '50px', textAlign: 'center' }}>
          <Button href="/achievements" variant="outline">
            View More Achievements
          </Button>
        </div>

      </div>
    </section>
  );
}
