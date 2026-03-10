import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-tag">AI Generalist | Tech Lead | Full-Stack Builder</div>
          <h1>Faris</h1>
          <p>
            Building impact-driven AI solutions since before it was a trend. 
            Bridging the gap between creative animation and production-ready AI systems.
          </p>
          <div className="hero-actions">
            <Button href="#chat-ai">Ask My AI</Button>
            <Button href="/resume.pdf" variant="outline" target="_blank">Download Resume</Button>
          </div>
        </div>
        <div className="hero-image-placeholder">
          <span>Image Placeholder</span>
        </div>
      </div>
    </section>
  );
}
