import { TECH_STACK } from '@/constants/tech-stack';
import Image from 'next/image';

export default function SkillsPage() {
  return (
    <main className="skills-page">
      <section className="skills-hero">
        <div className="section-container">
          <h1 className="projects-page-title">My <span className="text-gradient">Skills</span></h1>
          <p className="projects-page-subtitle">
            A comprehensive overview of the technologies and tools I master 
            to build AI-driven solutions and high-performance applications.
          </p>
          
          <div className="skills-detailed-grid">
            {TECH_STACK.map((category, idx) => (
              <div key={idx} className="skill-category-card">
                <h3>{category.name}</h3>
                <div className="skill-item-tags">
                  {category.items.map((item, i) => (
                    <span 
                        key={i} 
                        className="skill-badge" 
                        style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                      {item.icon && (
                        <div style={{ position: 'relative', width: '16px', height: '16px' }}>
                          <Image src={item.icon} alt={item.name} fill style={{ objectFit: 'contain' }} />
                        </div>
                      )}
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
