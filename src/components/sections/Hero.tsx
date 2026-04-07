import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-tag">AI Generalist | AI Lead | Full-Stack Developer</div>
          <h1>Faris</h1>
          <p>
            Building impact-driven AI solutions since before it was a trend.
            Bridging the gap between complex production pipelines and production-ready AI systems.
          </p>
          <div className="hero-actions">
            <Button href="/resume.pdf" target="_blank">Download Resume</Button>
          </div>
        </div>
        <div className="hero-visual-wrapper">
          <div className="hero-visual-bg"></div>
          <div className="hero-character-container">
            <Image
              src="https://pub-bf3dd0628431475b81d6b32415920dc5.r2.dev/Home/character.png"
              alt="Character"
              fill
              priority
              style={{ objectFit: 'contain', objectPosition: 'bottom' }}
            />

          </div>
        </div>
      </div>
    </section>
  );
}
