import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FundingCalculator } from '@/components/FundingCalculator';
import { CheckCircle, Phone } from 'lucide-react';
import { BRAND, FLORIDA_CITIES, getCity, CASE_TYPES, HOW_IT_WORKS } from '@/lib/site-data';

type Props = { params: { city: string } };

export function generateStaticParams() {
  return FLORIDA_CITIES.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const c = getCity(params.city);
  if (!c) return { title: 'City not found' };
  return {
    title: `Pre-Settlement Funding in ${c.name}, FL | Rapid Legal Funding`,
    description: `Get pre-settlement funding in ${c.name}, ${c.county} in as little as 24 hours. No credit check, no risk. Free attorney matching available.`,
  };
}

export default function CityPage({ params }: Props) {
  const c = getCity(params.city);
  if (!c) notFound();
  const nearby = FLORIDA_CITIES.filter((x) => x.region === c.region && x.slug !== c.slug).slice(0, 8);

  return (
    <>
      <Header />
      <main>
        <section className="bg-navy-800 text-white">
          <div className="container-x py-16">
            <p className="text-gold-400 font-semibold">{c.county}, {c.region}</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2">Pre-settlement funding in {c.name}, Florida</h1>
            <p className="mt-6 text-lg text-navy-100/90 max-w-3xl leading-relaxed">
              Injured in {c.name} and waiting on a settlement? We connect {c.county} residents with direct funding partners for risk-free cash advances, and with local attorneys if you need representation. {c.note}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/intake?path=funding" className="btn-primary">Get funded now</Link>
              <a href={BRAND.phoneHref} className="btn-ghost"><Phone size={18} /> {BRAND.phone}</a>
            </div>
          </div>
        </section>

        <section className="container-x py-16 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold">How funding works in {c.name}</h2>
              <ol className="mt-4 space-y-4">
                {HOW_IT_WORKS.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="w-8 h-8 shrink-0 rounded-full bg-navy-800 text-gold-400 font-bold text-sm flex items-center justify-center">{i + 1}</span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="text-navy-700/80 text-sm mt-1">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Cases we fund in {c.county}</h2>
              <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                {CASE_TYPES.map((t) => (
                  <li key={t.slug}>
                    <Link href={`/case-types/${t.slug}`} className="flex gap-3 items-start rounded-md bg-white border border-navy-100 px-4 py-3 hover:border-navy-800">
                      <CheckCircle size={18} className="text-mint-500 mt-0.5 shrink-0" /> {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border-2 border-gold-500 bg-gold-100/40 p-6">
              <h2 className="text-xl font-bold">No attorney yet?</h2>
              <p className="mt-2 text-navy-700/90">We match {c.name} injury victims with vetted local attorneys at no cost, usually within 24 hours. Once your case is underway, funding is one click away.</p>
              <Link href="/intake?path=attorney" className="btn-secondary mt-4">Find a {c.name} attorney</Link>
            </div>
          </div>
          <aside>
            <FundingCalculator />
          </aside>
        </section>

        {nearby.length > 0 && (
          <section className="bg-white border-y border-navy-100">
            <div className="container-x py-12">
              <h2 className="text-xl font-bold">Also serving nearby</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {nearby.map((n) => (
                  <Link key={n.slug} href={`/florida/${n.slug}`} className="px-3 py-1.5 rounded-md border border-navy-100 text-sm hover:border-navy-800">
                    {n.name}
                  </Link>
                ))}
                <Link href="/florida" className="px-3 py-1.5 rounded-md text-sm font-semibold text-gold-600">All Florida cities</Link>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
