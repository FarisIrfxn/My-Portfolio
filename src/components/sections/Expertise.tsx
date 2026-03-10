export default function Expertise() {
  return (
    <section className="services" id="expertise">
      <h2 className="section-title">What I Bring to the Table</h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">🛠️</div>
          <h3>Full-Stack AI Products</h3>
          <p>I build complete systems, not just prototypes. Experienced in architecting backends, managing databases, and crafting intuitive frontends for AI-powered apps.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">💡</div>
          <h3>Solution Architecting</h3>
          <p>Specialized in identifying high-ROI AI integrations. I transform complex production bottleneck issues into automated, cost-saving workflows.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🚀</div>
          <h3>Agile Development</h3>
          <p>Utilizing modern AI tools to accelerate development cycles without sacrificing security, scalability, or maintainability. I know when to build, and when to automate.</p>
        </div>
      </div>
    </section>
  );
}
