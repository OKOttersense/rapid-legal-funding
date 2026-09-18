'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BRAND } from '@/lib/site-data';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/case-types', label: 'Case types' },
  { href: '/florida', label: 'Florida cities' },
  { href: '/resources', label: 'Resources' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/attorneys', label: 'For attorneys' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-navy-100 sticky top-0 z-50">
      <div className="bg-navy-800 text-white text-sm">
        <div className="container-x flex justify-between items-center py-2">
          <span className="hidden sm:inline">Funded in as little as 24 hours. No credit check. No risk.</span>
          <a href={BRAND.phoneHref} className="inline-flex items-center gap-2 font-semibold hover:text-gold-400">
            <Phone size={14} /> {BRAND.phone}
          </a>
        </div>
      </div>

      <nav className="container-x py-3 flex justify-between items-center gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Rapid Legal Funding home">
          <span className="w-9 h-9 rounded-md bg-navy-800 text-gold-500 font-display font-bold text-xl flex items-center justify-center">R</span>
          <span className="font-display font-bold text-lg leading-tight text-navy-900">
            Rapid Legal<br className="sm:hidden" /> Funding
          </span>
        </Link>

        <div className="hidden lg:flex gap-6 items-center">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-navy-700 hover:text-navy-900 font-medium text-sm">
              {item.label}
            </Link>
          ))}
          <Link href="/intake" className="btn-primary py-2">
            Get funded now
          </Link>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-navy-100">
          <div className="container-x py-4 space-y-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-navy-800 font-medium py-1"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/intake" onClick={() => setIsOpen(false)} className="btn-primary w-full">
              Get funded now
            </Link>
            <Link href="/dashboard" onClick={() => setIsOpen(false)} className="block text-sm text-navy-700/70 py-1">
              Attorney portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
