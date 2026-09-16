// components/NavLinks.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/meetings', label: 'Meetings' },
    { href: '/meetings/current', label: 'Current Meeting' },
  ];

  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={pathname === link.href ? 'text-[var(--color-primary)] font-bold' : 'text-gray-700'}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
