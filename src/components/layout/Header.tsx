'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import ResumeModal from '../ui/ResumeModal';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleHashChange = () => {
      if (window.location.hash === '#resume') {
        setIsResumeOpen(true);
      } else {
        setIsResumeOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const closeResume = () => {
    setIsResumeOpen(false);
    if (window.location.hash === '#resume') {
      window.history.pushState(null, '', window.location.pathname + (window.location.search || ''));
    }
  };

  const getLink = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <>
      <header className={`header-floating ${scrolled ? 'scrolled' : ''}`}>
        {/* Left: Resume */}
        <div className="header-island island-left">
          <a href="#resume" className="nav-resume-btn">
            <img src="/favicon.png" alt="Faris" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
            <span>Resume</span>
          </a>
        </div>

        {/* Center: Navigation */}
        <nav className="header-island island-center">
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href={getLink('#about')}>About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/achievements">Achievement</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Right: Theme Toggle */}
        <div className="header-island island-right">
          <ThemeToggle />
        </div>
      </header>

      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={closeResume} 
        imageUrl={`${process.env.NEXT_PUBLIC_R2_BASE_URL}/Resume/resume.jpg`} 
      />
    </>
  );
}
