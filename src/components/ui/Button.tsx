import Link from 'next/link';

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'secondary';
  children: React.ReactNode;
  className?: string;
  target?: string;
  disabled?: boolean;
};

export default function Button({ href, onClick, variant = 'primary', children, className = '', target, disabled }: ButtonProps) {
  const baseStyles = 'btn';
  const variantStyles = `btn-${variant}`;
  const fullClassName = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
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
