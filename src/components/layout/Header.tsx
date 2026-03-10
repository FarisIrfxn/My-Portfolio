'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLink = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <header className={`header-floating ${scrolled ? 'scrolled' : ''}`}>
      {/* Left: Resume */}
      <div className="header-island island-left">
        <a href="/resume.pdf" target="_blank" className="nav-resume-btn">
          <FileText size={16} />
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
  );
}
