import Link from 'next/link';
import { BRAND, CASE_TYPES, FLORIDA_CITIES, DISCLAIMER } from '@/lib/site-data';

export function Footer() {
  const half = Math.ceil(FLORIDA_CITIES.length / 2);
  const cityCols = [FLORIDA_CITIES.slice(0, half), FLORIDA_CITIES.slice(half)];

  return (
    <footer className="bg-navy-900 text-white mt-24">
      <div className="bg-gold-500 text-navy-900">
        <div className="container-x py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p className="font-semibold">Free funding review. Call {BRAND.phone} or apply online in 3 minutes.</p>
          <Link href="/intake" className="px-5 py-2 rounded-md bg-navy-900 text-white font-semibold hover:bg-navy-800">
            Start my application
          </Link>
        </div>
      </div>

      <div className="container-x py-14">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <p className="font-display font-bold text-2xl mb-3">{BRAND.name}</p>
            <p className="text-navy-100/80 text-sm leading-relaxed max-w-sm">
              Connecting injury victims with direct funding partners and qualified Florida attorneys. Fast, risk-free pre-settlement cash advances with no credit check.
            </p>
            <a href={BRAND.phoneHref} className="inline-block mt-4 font-semibold text-gold-400 hover:text-gold-100">
              {BRAND.phone}
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold-400">Quick links</h4>
            <ul className="space-y-2 text-sm text-navy-100/80">
              <li><Link href="/intake" className="hover:text-white">Apply for funding</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-white">How it works</Link></li>
              <li><Link href="/case-types" className="hover:text-white">Case types</Link></li>
              <li><Link href="/florida" className="hover:text-white">Florida cities</Link></li>
              <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
              <li><Link href="/#faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/attorneys" className="hover:text-white">For attorneys</Link></li>
              <li><Link href="/about" className="hover:text-white">About us</Link></li>
              <li><Link href="/dashboard" className="hover:text-white">Attorney portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold-400">Case types</h4>
            <ul className="space-y-2 text-sm text-navy-100/80">
              {CASE_TYPES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/case-types/${c.slug}`} className="hover:text-white">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold-400">Florida cities</h4>
            <div className="grid grid-cols-2 gap-x-4">
              {cityCols.map((col, i) => (
                <ul key={i} className="space-y-2 text-sm text-navy-100/80">
                  {col.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/florida/${c.slug}`} className="hover:text-white">{c.name}</Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-xs text-navy-100/60 leading-relaxed">
          <p className="mb-4"><strong className="text-navy-100/80">Important disclaimer:</strong> {DISCLAIMER}</p>
          <p>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved. {BRAND.domain}</p>
        </div>
      </div>
    </footer>
  );
}
