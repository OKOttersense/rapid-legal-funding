import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FundingCalculator } from '@/components/FundingCalculator';
import { CheckCircle, Phone } from 'lucide-react';
import { BRAND, CASE_TYPES, getCaseType, FLORIDA_CITIES } from '@/lib/site-data';

type Props = { params: { type: string } };

export function generateStaticParams() {
  return CASE_TYPES.map((c) => ({ type: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const c = getCaseType(params.type);
  if (!c) return { title: 'Case type not found' };
  return {
    title: `${c.name} Pre-Settlement Funding in Florida | Rapid Legal Funding`,
    description: `${c.short} Get funded in as little as 24 hours with no credit check. No attorney yet? We match you with one for free.`,
  };
}

export default function CaseTypePage({ params }: Props) {
  const c = getCaseType(params.type);
  if (!c) notFound();

  return (
    <>
      <Header />
      <main>
        <section className="bg-navy-800 text-white">
          <div className="container-x py-16">
            <p className="text-gold-400 font-semibold">Case type</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2">{c.name} funding in Florida</h1>
            <p className="mt-6 text-lg text-navy-100/90 max-w-3xl leading-relaxed">{c.intro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/intake?path=funding" className="btn-primary">Get funded now</Link>
              <a href={BRAND.phoneHref} className="btn-ghost"><Phone size={18} /> {BRAND.phone}</a>
            </div>
          </div>
        </section>

        <section className="container-x py-16 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold">Who qualifies</h2>
              <ul className="check-list mt-4 space-y-3">
                {c.qualifies.map((q) => (
                  <li key={q}><CheckCircle size={20} className="text-mint-500 mt-0.5 shrink-0" /> {q}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold">What people use the funds for</h2>
              <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                {c.fundingUses.map((u) => (
                  <li key={u} className="rounded-md bg-white border border-navy-100 px-4 py-3">{u}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border-2 border-gold-500 bg-gold-100/40 p-6">
              <h2 className="text-xl font-bold">Need an attorney?</h2>
              <p className="mt-2 text-navy-700/90 leading-relaxed">{c.attorneyNote}</p>
              <Link href="/intake?path=attorney" className="btn-secondary mt-4">Find my attorney</Link>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Typical funding range</h2>
              <p className="text-3xl font-display font-bold text-navy-900 mt-2">{c.typicalRange}</p>
              <p className="text-navy-700/80 mt-2">Actual amounts depend on liability strength, documented damages, and available insurance coverage.</p>
            </div>
          </div>
          <aside>
            <FundingCalculator />
          </aside>
        </section>

        <section className="bg-white border-y border-navy-100">
          <div className="container-x py-12">
            <h2 className="text-xl font-bold">{c.name} funding by city</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {FLORIDA_CITIES.map((city) => (
                <Link key={city.slug} href={`/florida/${city.slug}`} className="px-3 py-1.5 rounded-md border border-navy-100 text-sm hover:border-navy-800">
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
