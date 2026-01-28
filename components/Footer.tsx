import Link from 'next/link';
import { NavItem } from '@/lib/types';

export default function Footer() {
  const navLinks: NavItem[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <footer className="bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4">

          <p className="text-white text-lg font-medium text-center md:text-left">
            © 2025 Tensorminds, Inc
          </p>

          <ul className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="
                    px-4 py-2 text-lg text-white
                    hover:bg-accent-blue transition
                    rounded-md
                  "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </footer>
  );
}
