import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CheckCircle, Phone } from 'lucide-react';
import { BRAND } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'For Attorneys | Rapid Legal Funding',
  description: 'Qualified personal injury leads plus fast, attorney-friendly pre-settlement funding for your clients. No fees to your firm.',
};

const FIRM_BENEFITS = [
  'Clients who are not desperate for cash negotiate from strength and settle for more',
  'Funding partners work with you, never around you; repayment comes from settlement proceeds only',
  'Simple document request: a case summary and your acknowledgment, nothing more',
  'Dedicated attorney line with same-day responses',
];

const LEAD_BENEFITS = [
  'Every lead is screened for case type, liability, injury, and Florida venue before it reaches you',
  'AI scoring surfaces the strongest cases first with a plain-language summary',
  'Real-time portal to review, accept, and contact leads',
  'Pay only for accepted leads in your practice area and territory',
];

export default function AttorneysPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-navy-800 text-white">
          <div className="container-x py-16">
            <h1 className="text-4xl md:text-5xl font-bold">For attorneys</h1>
            <p className="mt-6 text-lg text-navy-100/90 max-w-3xl leading-relaxed">
              Two things every personal injury practice needs: clients who can afford to wait for full value, and a steady flow of qualified new cases. We provide both.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard" className="btn-primary">Open the attorney portal</Link>
              <a href={BRAND.phoneHref} className="btn-ghost"><Phone size={18} /> {BRAND.phone}</a>
            </div>
          </div>
        </section>

        <section className="container-x py-16 grid md:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="text-2xl font-bold">Funding for your clients</h2>
            <p className="text-navy-700/80 mt-2">Non-recourse advances that keep your clients afloat during litigation.</p>
            <ul className="check-list mt-6 space-y-3 text-sm">
              {FIRM_BENEFITS.map((b) => (
                <li key={b}><CheckCircle size={18} className="text-mint-500 mt-0.5 shrink-0" /> {b}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2 className="text-2xl font-bold">Qualified leads for your firm</h2>
            <p className="text-navy-700/80 mt-2">Screened Florida injury cases routed to your practice area.</p>
            <ul className="check-list mt-6 space-y-3 text-sm">
              {LEAD_BENEFITS.map((b) => (
                <li key={b}><CheckCircle size={18} className="text-mint-500 mt-0.5 shrink-0" /> {b}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container-x pb-16">
          <div className="rounded-lg bg-white border border-navy-100 p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold">Join the attorney network</h2>
              <p className="text-navy-700/80 mt-2">Tell us your practice areas and counties. We will set up your portal access and walk you through the funding acknowledgment process.</p>
            </div>
            <a href={`mailto:attorneys@${BRAND.domain}?subject=Attorney%20network%20inquiry`} className="btn-primary">Email the attorney desk</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
