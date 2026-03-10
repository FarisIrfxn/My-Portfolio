'use client';

import { Mail, Linkedin, Twitter, Github, Send, MessageSquare } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="section-container">
          <h1 className="projects-page-title">Get In <span className="text-gradient">Touch</span></h1>
          <p className="projects-page-subtitle">
            Interested in collaborating, need help architecting your next AI solution, 
            or just want to talk about the future of tech? I'm always open to new connections.
          </p>
          
          <div className="contact-grid-v3">
            <div className="contact-card-v3">
              <div className="contact-icon-box">
                <Mail size={24} />
              </div>
              <div className="contact-info">
                <h3>Email</h3>
                <p>The best way to reach me for professional inquiries.</p>
                <div className="contact-action-wrapper">
                  <a href="mailto:your@email.com" className="contact-link-btn">
                    Send an Email <Send size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-card-v3">
              <div className="contact-icon-box">
                <Linkedin size={24} />
              </div>
              <div className="contact-info">
                <h3>LinkedIn</h3>
                <p>Let's connect and stay updated on our professional journeys.</p>
                <div className="contact-action-wrapper">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link-btn">
                    View Profile <MessageSquare size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-card-v3">
              <div className="contact-icon-box">
                <Twitter size={24} />
              </div>
              <div className="contact-info">
                <h3>X (Twitter)</h3>
                <p>Follow me for thoughts on AI, Vibe Coding, and more.</p>
                <div className="contact-action-wrapper">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-link-btn">
                    Follow Me <Twitter size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card-v3">
              <div className="contact-icon-box">
                <Github size={24} />
              </div>
              <div className="contact-info">
                <h3>GitHub</h3>
                <p>Check out my open source repositories and contributions.</p>
                <div className="contact-action-wrapper">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link-btn">
                    Open GitHub <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
