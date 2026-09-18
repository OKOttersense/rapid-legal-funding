import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Phone } from 'lucide-react';
import { BRAND, TRUST_STATS } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'About | Rapid Legal Funding',
  description: 'Rapid Legal Funding brokers direct connections between Florida injury victims, funding partners, and qualified attorneys.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-navy-800 text-white">
          <div className="container-x py-16">
            <h1 className="text-4xl md:text-5xl font-bold">About Rapid Legal Funding</h1>
            <p className="mt-6 text-lg text-navy-100/90 max-w-3xl leading-relaxed">
              Insurance companies know that injured people run out of money before they run out of case. We exist to take that leverage away from them.
            </p>
          </div>
        </section>

        <section className="container-x py-16 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8 text-navy-700/90 leading-relaxed text-lg">
            <p>
              Rapid Legal Funding started as a Florida pre-settlement funding brokerage with one rule: no middlemen. We connect applicants directly with funding partners so approvals happen in hours, not weeks, and the terms are the terms.
            </p>
            <p>
              Along the way we kept hearing the same thing from callers: &ldquo;I don&rsquo;t have a lawyer yet.&rdquo; Funding requires representation, so we built a free attorney-matching service on top of the funding platform. Now one application can get you counsel, cash, or both.
            </p>
            <p>
              We are not a law firm and we do not give legal advice. We are the people who make sure a good case is not lost because rent came due first.
            </p>
            <Link href="/intake" className="btn-primary">Start my application</Link>
          </div>
          <aside className="space-y-4">
            {TRUST_STATS.map((s) => (
              <div key={s.label} className="metric-card">
                <p className="metric-value">{s.value}</p>
                <p className="metric-label">{s.label}</p>
              </div>
            ))}
            <a href={BRAND.phoneHref} className="btn-secondary w-full"><Phone size={18} /> {BRAND.phone}</a>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
