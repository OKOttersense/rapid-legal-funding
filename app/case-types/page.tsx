import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CASE_TYPES } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Case Types We Fund | Rapid Legal Funding',
  description: 'Pre-settlement funding and attorney matching for auto accidents, truck accidents, slip and fall, medical malpractice, workers comp, wrongful death, and more.',
};

export default function CaseTypesPage() {
  return (
    <>
      <Header />
      <main className="container-x py-16">
        <h1 className="section-title">Case types we fund</h1>
        <p className="section-subtitle">If you have an attorney and a pending Florida personal injury case, you likely qualify. If you do not have an attorney yet, we can match you with one first.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {CASE_TYPES.map((c) => (
            <Link key={c.slug} href={`/case-types/${c.slug}`} className="card hover:border-navy-800 transition-colors">
              <h2 className="text-2xl font-bold">{c.name}</h2>
              <p className="text-navy-700/80 mt-2">{c.short}</p>
              <p className="text-sm mt-4"><span className="font-semibold">Typical funding:</span> {c.typicalRange}</p>
              <span className="inline-block mt-4 font-semibold text-gold-600">Learn more</span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
