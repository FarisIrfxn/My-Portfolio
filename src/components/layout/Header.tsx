'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const getLink = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <header className="main-header">
      <nav className="nav-container">
        <div className="logo">
          <Link href="/">FARIS</Link>
        </div>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href={getLink('#chat-ai')}>AI Assistant</Link></li>
          <li><Link href={getLink('#expertise')}>Expertise</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href={getLink('#contact')}>Contact</Link></li>
          <li className="flex items-center gap-4">
            <ThemeToggle />
            <a href="/resume.pdf" target="_blank" className="nav-resume-btn">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
