import { TIMELINE_DATA } from "@/constants/timeline";

export default function Experience() {
  return (
    <section id="experience" className="timeline-section">
      <h2 className="section-title">Experience & Education</h2>
      <div className="timeline-container">
        {TIMELINE_DATA.map((item, index) => (
          <div key={index} className={`timeline-item ${item.type}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-duration">{item.duration}</span>
              <h3>{item.title}</h3>
              <div className="timeline-org">{item.organization}</div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
