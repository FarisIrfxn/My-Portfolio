'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import ResumeModal from '../ui/ResumeModal';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const closeResume = () => {
    setIsResumeOpen(false);
    if (window.location.hash === '#resume') {
      window.history.pushState(null, '', window.location.pathname + (window.location.search || ''));
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const getLink = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <>
      <header className={`header-floating ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        {/* Left: Resume */}
        <div className="header-island island-left">
          <a href="#resume" className="nav-resume-btn">
            <img src="/favicon.png" alt="Faris" className="nav-resume-icon" />
            <span className="hide-mobile">Resume</span>
          </a>
        </div>

        {/* Center: Navigation (Desktop) / Full Screen Menu (Mobile) */}
        <nav className={`header-island island-center ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><Link href="/" onClick={closeMenu}>Home</Link></li>
            <li><Link href={getLink('#about')} onClick={closeMenu}>About</Link></li>
            <li><Link href="/projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link href="/skills" onClick={closeMenu}>Skills</Link></li>
            <li><Link href="/achievements" onClick={closeMenu}>Achievement</Link></li>
            <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>

        {/* Right: Theme Toggle & Mobile Menu Btn */}
        <div className="header-island island-right">
          <ThemeToggle />
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={closeResume} 
        previewUrls={[
          `${process.env.NEXT_PUBLIC_R2_BASE_URL}/Resume/Resume_ATS-1.png`,
          `${process.env.NEXT_PUBLIC_R2_BASE_URL}/Resume/Resume_ATS-2.png`,
          `${process.env.NEXT_PUBLIC_R2_BASE_URL}/Resume/Resume_ATS-3.png`
        ]} 
        downloadUrl={`${process.env.NEXT_PUBLIC_R2_BASE_URL}/Resume/Resume_ATS.pdf`}
      />
    </>
  );
}
