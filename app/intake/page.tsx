import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadIntakeForm } from '@/components/LeadIntakeForm';
import { BRAND } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Apply | Rapid Legal Funding',
  description: 'Apply for pre-settlement funding or a free Florida attorney match in about 3 minutes. No credit check. No obligation.',
};

export default function IntakePage() {
  return (
    <>
      <Header />
      <main className="py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Apply in 3 minutes</h1>
          <p className="text-lg text-navy-700/80 mb-8">
            Tell us what you need and a little about your case. Prefer to talk? Call <a href={BRAND.phoneHref} className="font-semibold underline">{BRAND.phone}</a>.
          </p>
          <Suspense fallback={<p className="text-navy-700/70">Loading application</p>}>
            <LeadIntakeForm />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
