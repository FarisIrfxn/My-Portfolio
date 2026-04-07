'use client';

import dynamic from 'next/dynamic';
import Button from '../ui/Button';

const SkillsGlobe = dynamic(() => import('./SkillsGlobe'), {
  ssr: false,
  loading: () => <div style={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading World of Skills...</div>
});

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2 className="section-title">My Skills</h2>
      </div>

      <div className="skills-globe-wrapper">
        <SkillsGlobe />
      </div>

      <div className="section-footer" style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button href="/skills" variant="outline">
          View All Skills
        </Button>
      </div>
    </section>
  );
}
