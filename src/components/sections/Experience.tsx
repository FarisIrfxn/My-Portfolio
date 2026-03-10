import { TIMELINE_DATA } from "@/constants/timeline";
import { Briefcase, GraduationCap, ChevronDown } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="timeline-section">
      <div className="section-container">
        <h2 className="section-title">Experience & <span className="text-gradient">Education</span></h2>
        
        <div className="timeline-wrapper">
          {/* Vertical Line */}
          <div className="timeline-line"></div>

          <div className="timeline-items">
            {TIMELINE_DATA.map((item, index) => {
              const isLeft = index % 2 === 0;
              const year = item.duration.split(' ').pop();
              
              return (
                <div key={index} className={`timeline-row ${isLeft ? 'left' : 'right'}`}>
                  {/* The Timeline Dot/Icon */}
                  <div className={`timeline-node ${item.type}`}>
                    <div className="node-icon">
                      {item.type === 'experience' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                    </div>
                    <span className="node-year">{year}</span>
                  </div>

                  {/* The Actual Content Card */}
                  <div className={`timeline-card-v2 ${item.type}`}>
                    <h3 className="timeline-card-title">{item.title}</h3>
                    <div className="timeline-card-org">{item.organization}</div>
                    <div className="timeline-card-date">{item.duration}</div>
                    
                    <div className="timeline-card-description">
                       {item.description}
                    </div>

                    <button className="timeline-read-more">
                        Read More <ChevronDown size={14} />
                    </button>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="timeline-spacer"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
