export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p className="about-narrative">
            I'm an <strong>AI Lead and Full-Stack Vibe Coder</strong> with a unique background that bridges the gap between high-end 2D animation and production-ready AI systems. My journey started in the creative industry, where I learned to solve real-world production bottlenecks using automation. 
          </p>
          <p className="about-narrative">
            Today, I focus on building impact-driven AI solutions that don't just exist as prototypes but actually solve business problems. Whether it's architecting autonomous agents or building scalable full-stack products, I bring a mix of creative problem-solving and technical autority to every project.
          </p>
        </div>

        <div className="bring-to-table">
          <h3 className="sub-section-title">What I Bring to the Table</h3>
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
        </div>
      </div>
    </section>
  );
}
