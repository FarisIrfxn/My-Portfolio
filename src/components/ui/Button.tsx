'use client';

import Link from 'next/link';

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'secondary';
  children: React.ReactNode;
  className?: string;
  target?: string;
  download?: string;
  disabled?: boolean;
};

export default function Button({ href, onClick, variant = 'primary', children, className = '', target, download, disabled }: ButtonProps) {
  const baseStyles = 'btn';
  const variantStyles = `btn-${variant}`;
  const fullClassName = `${baseStyles} ${variantStyles} ${className}`;

  const handleDownload = async (e: React.MouseEvent) => {
    if (download && href) {
      e.preventDefault();
      try {
        const response = await fetch(href);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = download;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Download failed:', error);
        // Fallback: just open in new tab if fetch fails
        window.open(href, '_blank');
      }
    }
  };

  if (href) {
    if (download) {
      return (
        <a 
          href={href} 
          className={fullClassName} 
          onClick={handleDownload}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={fullClassName} target={target}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={fullClassName} disabled={disabled}>
      {children}
    </button>
  );
}
