import { TECH_STACK } from "@/constants/tech-stack";

export default function TechStack() {
  return (
    <section id="tech-stack" className="tech-stack-section">
      <h2 className="section-title">Technical Arsenal</h2>
      <div className="stack-grid">
        {TECH_STACK.map((category, idx) => (
          <div key={idx} className="stack-category">
            <h4>{category.name}</h4>
            <div className="stack-tags">
              {category.items.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
