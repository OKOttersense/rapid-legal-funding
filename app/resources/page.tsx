import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FAQS } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Resources | Rapid Legal Funding',
  description: 'Plain-language guides to pre-settlement funding, Florida injury claims, and working with your attorney.',
};

const GUIDES = [
  {
    title: 'Pre-settlement funding versus a personal loan',
    body: 'A loan must be repaid whether or not you win, accrues interest monthly, and depends on your credit. Pre-settlement funding is repaid only from a settlement or verdict, requires no credit check, and costs you nothing if your case fails. The tradeoff is that funding fees are higher than bank interest, so borrow only what you need.',
  },
  {
    title: 'How funding affects your settlement',
    body: 'Your attorney repays the advance plus the agreed fee from the settlement proceeds before you receive your share. Reputable funding partners cap total repayment. Ask for the payoff schedule in writing before signing and share it with your attorney.',
  },
  {
    title: 'Florida statute of limitations basics',
    body: 'Most Florida negligence claims arising after March 24, 2023 must be filed within two years of the injury. Medical malpractice, wrongful death, and claims against government entities follow different rules. Confirm your deadline with an attorney as early as possible.',
  },
  {
    title: 'What to gather before you apply',
    body: 'Your attorney\u2019s name and contact information, the date and location of the incident, a brief description of your injuries and treatment, and any insurance information you have. You do not need pay stubs, tax returns, or a credit report.',
  },
  {
    title: 'Questions to ask any funding company',
    body: 'Is this non-recourse? What is the total repayment cap? Are there application or origination fees? How quickly can you fund after my attorney responds? Do you fund my case type in Florida? If the answers are vague, walk away.',
  },
  {
    title: 'Working with your attorney during funding',
    body: 'Funding requires your attorney\u2019s acknowledgment, not their approval of your finances. Most attorneys respond the same day. If your attorney has concerns, we are happy to speak with them directly.',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="container-x py-16">
        <h1 className="section-title">Resources</h1>
        <p className="section-subtitle">Short, plain-language guides to help you make a confident decision. Nothing here is legal advice; always confirm specifics with your attorney.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {GUIDES.map((g) => (
            <article key={g.title} className="card">
              <h2 className="text-xl font-bold">{g.title}</h2>
              <p className="text-navy-700/80 mt-3 leading-relaxed">{g.body}</p>
            </article>
          ))}
        </div>

        <section className="mt-20 max-w-3xl">
          <h2 className="text-2xl font-bold">Quick answers</h2>
          <div className="mt-6 divide-y divide-navy-100 border-y border-navy-100">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-semibold">
                  {f.q}
                  <span className="text-gold-600 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="text-navy-700/80 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <Link href="/intake" className="btn-primary mt-8">Start my application</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
