import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FLORIDA_CITIES } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Pre-Settlement Funding Across Florida | Rapid Legal Funding',
  description: 'Fast pre-settlement funding and attorney matching in Miami, Tampa, Orlando, Jacksonville, West Palm Beach, and 24 more Florida cities.',
};

export default function FloridaPage() {
  const regions = Array.from(new Set(FLORIDA_CITIES.map((c) => c.region)));
  return (
    <>
      <Header />
      <main className="container-x py-16">
        <h1 className="section-title">Florida cities we serve</h1>
        <p className="section-subtitle">Local pre-settlement funding and attorney matching in {FLORIDA_CITIES.length} cities, backed by statewide funding partners.</p>
        <div className="space-y-12 mt-12">
          {regions.map((region) => (
            <div key={region}>
              <h2 className="text-2xl font-bold">{region}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {FLORIDA_CITIES.filter((c) => c.region === region).map((c) => (
                  <Link key={c.slug} href={`/florida/${c.slug}`} className="card hover:border-navy-800 transition-colors">
                    <h3 className="text-lg font-bold">{c.name}</h3>
                    <p className="text-sm text-navy-700/70">{c.county}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
