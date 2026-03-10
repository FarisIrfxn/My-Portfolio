import Button from '@/components/ui/Button';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p>Interested in collaborating or need help architecting your next AI solution? Let's talk.</p>
        <div className="contact-actions">
          <Button href="mailto:your@email.com">Send an Email</Button>
          <Button href="https://linkedin.com" variant="outline" target="_blank">LinkedIn</Button>
        </div>
      </div>
    </section>
  );
}
