'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavItem } from '@/lib/types';

export default function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const navItems: NavItem[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const solutions = [
    { href: '/solutions/embedded', label: 'Embedded Systems' },
    { href: '/solutions/hardware', label: 'Hardware Design' },
    { href: '/solutions/firmware', label: 'Firmware & Software' },
    ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-primary shadow-md">
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/assets/icon.jpg"
                alt="Tensorminds Logo"
                width={40}
                height={40}
                priority
              />
              <span className="text-2xl md:text-4xl font-extrabold text-white">
                Tensorminds
              </span>
            </div>

            {/* ================= DESKTOP NAV ================= */}
            <nav className="hidden md:flex items-center gap-4">

              <Link href="/" className={navLink('/', isActive)}>
                Home
              </Link>

              <Link href="/about" className={navLink('/about', isActive)}>
                About Us
              </Link>

              <Link href="/products" className={navLink('/products', isActive)}>
                Products
              </Link>

              {/* SOLUTIONS DROPDOWN (STABLE HOVER) */}
              <div
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  className="px-4 py-2 text-lg rounded-md text-white
                             hover:bg-accent-blue transition
                             flex items-center gap-1"
                >
                  Solutions <ChevronDown size={18} />
                </button>

                {solutionsOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2
                               w-64 bg-white rounded-xl shadow-2xl
                               border-2 border-primary py-2"
                  >
                    {solutions.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`
                          mx-2 my-1 px-4 py-3 rounded-md font-medium
                          transition-all duration-200 block
                          ${
                            pathname === item.href
                              ? 'bg-primary text-white ring-2 ring-primary/40'
                              : 'bg-white text-gray-800 hover:bg-primary hover:text-white'
                          }
                        `}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/blogs" className={navLink('/blogs', isActive)}>
                Blogs
              </Link>

              <Link href="/contact" className={navLink('/contact', isActive)}>
                Contact Us
              </Link>
            </nav>

            {/* ================= MOBILE TOGGLER ================= */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* ================= MOBILE MENU ================= */}
          {menuOpen && (
            <div className="md:hidden bg-primary border-t border-white/20">
              <nav className="flex flex-col py-2">

                {navItems.slice(0, 3).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={mobileLink(item.href, isActive)}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* MOBILE SOLUTIONS */}
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="px-4 py-3 text-white text-lg flex items-center justify-between"
                >
                  Solutions
                  <ChevronDown
                    className={`transition-transform ${
                      mobileSolutionsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {mobileSolutionsOpen && (
                  <div className="bg-primary-light/10">
                    {solutions.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block px-6 py-3 text-white text-base
                                   hover:bg-accent-blue transition"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}

                {navItems.slice(3).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={mobileLink(item.href, isActive)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[88px]" />
    </>
  );
}

/* ================= HELPERS ================= */

function navLink(path: string, isActive: (p: string) => boolean) {
  return `
    px-4 py-2 text-lg rounded-md text-white
    hover:bg-accent-blue transition
    ${isActive(path) ? 'bg-accent-blue' : ''}
  `;
}

function mobileLink(path: string, isActive: (p: string) => boolean) {
  return `
    px-4 py-3 text-white text-lg
    hover:bg-accent-blue transition
    ${isActive(path) ? 'bg-accent-blue' : ''}
  `;
}
