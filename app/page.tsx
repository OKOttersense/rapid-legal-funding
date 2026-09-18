import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FundingCalculator } from '@/components/FundingCalculator';
import { CheckCircle, Phone, ArrowRight, Scale, Banknote } from 'lucide-react';
import { BRAND, TRUST_STATS, HOW_IT_WORKS, WHY_CHOOSE, CASE_TYPES, FLORIDA_CITIES, FAQS } from '@/lib/site-data';

const HERO_CHECKS = ['100% risk-free', 'No credit check', '24-hour funding', 'No monthly payments'];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy-800 text-white">
          <div className="container-x py-16 md:py-24 grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-gold-500" /> Funded in as little as 24 hours
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.05]">
                Your bills won&rsquo;t wait.<br />Neither should you.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-navy-100/90 max-w-2xl leading-relaxed">
                Rapid Legal Funding connects you directly with funding partners for pre-settlement cash, and with qualified Florida attorneys if you don&rsquo;t have one yet. No credit check, no monthly payments. If you lose your case, you owe nothing.
              </p>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm md:text-base">
                {HERO_CHECKS.map((c) => (
                  <li key={c} className="inline-flex items-center gap-2">
                    <CheckCircle size={18} className="text-gold-400" /> {c}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/intake?path=funding" className="btn-primary text-base">
                  Get funded now
                </Link>
                <a href={BRAND.phoneHref} className="btn-ghost text-base">
                  <Phone size={18} /> Call {BRAND.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white text-navy-900 rounded-lg p-7 shadow-2xl">
                <h2 className="text-2xl font-bold">Apply in 3 minutes</h2>
                <p className="text-navy-700/80 mt-1">Free, no-obligation funding review</p>
                <ul className="check-list mt-6 space-y-3 text-sm">
                  <li><CheckCircle size={18} className="text-mint-500 mt-0.5 shrink-0" /> Funding in as little as 24 hours</li>
                  <li><CheckCircle size={18} className="text-mint-500 mt-0.5 shrink-0" /> No credit check and no income verification</li>
                  <li><CheckCircle size={18} className="text-mint-500 mt-0.5 shrink-0" /> You owe nothing if you lose your case</li>
                  <li><CheckCircle size={18} className="text-mint-500 mt-0.5 shrink-0" /> Free attorney match if you need representation</li>
                </ul>
                <Link href="/intake" className="btn-primary w-full mt-6">
                  Start my application
                </Link>
                <p className="text-xs text-navy-700/70 text-center mt-3">
                  Free. No obligation. Checking will not affect your credit score.
                </p>
                <p className="text-sm text-center mt-4">
                  Prefer to talk? <a href={BRAND.phoneHref} className="font-semibold underline">{BRAND.phone}</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust stats */}
        <section className="border-b border-navy-100 bg-white">
          <div className="container-x py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {TRUST_STATS.map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-display font-bold text-navy-900">{s.value}</p>
                <p className="text-sm text-navy-700/70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Two paths */}
        <section className="container-x py-20">
          <h2 className="section-title">Two ways we can help</h2>
          <p className="section-subtitle">Most people need one or the other. Some need both. Either way, it starts with one short application.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="rounded-lg border-2 border-navy-800 bg-white p-8">
              <Banknote size={36} className="text-gold-600" />
              <h3 className="text-2xl font-bold mt-4">I have an attorney and need cash now</h3>
              <p className="text-navy-700/80 mt-3 leading-relaxed">
                Get a non-recourse cash advance against your pending settlement. Cover rent, medical bills, and daily expenses so you never have to accept a lowball offer out of desperation.
              </p>
              <Link href="/intake?path=funding" className="btn-primary mt-6">
                Apply for funding <ArrowRight size={18} />
              </Link>
            </div>
            <div className="rounded-lg border-2 border-navy-100 bg-white p-8">
              <Scale size={36} className="text-navy-800" />
              <h3 className="text-2xl font-bold mt-4">I need an attorney first</h3>
              <p className="text-navy-700/80 mt-3 leading-relaxed">
                Tell us about your case and we match you with a vetted Florida attorney in your case type, free of charge. Once your case is filed, funding is one click away.
              </p>
              <Link href="/intake?path=attorney" className="btn-secondary mt-6">
                Find my attorney <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="bg-white border-y border-navy-100">
          <div className="container-x py-20">
            <h2 className="section-title">Get funded in 4 easy steps</h2>
            <p className="section-subtitle">From application to cash in your account, often in less than 24 hours.</p>
            <ol className="grid md:grid-cols-4 gap-8 mt-12">
              {HOW_IT_WORKS.map((step, i) => (
                <li key={step.title} className="relative">
                  <span className="w-10 h-10 rounded-full bg-navy-800 text-gold-400 font-bold flex items-center justify-center">{i + 1}</span>
                  <h3 className="text-xl font-bold mt-4">{step.title}</h3>
                  <p className="text-navy-700/80 mt-2 leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Why choose */}
        <section className="container-x py-20">
          <h2 className="section-title">Why choose Rapid Legal Funding?</h2>
          <p className="section-subtitle">We are not just another funding company. We are your direct connection to the best funding partners in the industry.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {WHY_CHOOSE.map((w) => (
              <div key={w.title} className="card">
                <h3 className="text-lg font-bold">{w.title}</h3>
                <p className="text-navy-700/80 mt-2 text-sm leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case types */}
        <section className="bg-navy-800 text-white">
          <div className="container-x py-20">
            <h2 className="section-title text-white">We fund all personal injury cases</h2>
            <p className="section-subtitle text-navy-100/80">If you have an attorney and a pending case, you likely qualify for pre-settlement funding.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              {CASE_TYPES.map((c) => (
                <Link key={c.slug} href={`/case-types/${c.slug}`} className="rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 p-5 transition-colors">
                  <h3 className="font-bold text-lg">{c.name}</h3>
                  <p className="text-sm text-navy-100/80 mt-1">{c.short}</p>
                  <span className="inline-block mt-3 text-sm font-semibold text-gold-400">Learn more</span>
                </Link>
              ))}
            </div>
            <Link href="/case-types" className="btn-ghost mt-8">View all case types</Link>
          </div>
        </section>

        {/* Calculator */}
        <section className="container-x py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">How much can I get?</h2>
            <p className="section-subtitle">Use the calculator to estimate your pre-settlement funding range based on your case value. Funding partners typically advance 10% to 20% of what your case is expected to settle for.</p>
            <ul className="check-list mt-6 space-y-3 text-navy-700/90">
              <li><CheckCircle size={18} className="text-mint-500 mt-1 shrink-0" /> Minimum funding is typically $500</li>
              <li><CheckCircle size={18} className="text-mint-500 mt-1 shrink-0" /> Maximum funding can exceed $250,000 for high-value cases</li>
              <li><CheckCircle size={18} className="text-mint-500 mt-1 shrink-0" /> No repayment unless you win</li>
            </ul>
          </div>
          <FundingCalculator />
        </section>

        {/* Florida coverage */}
        <section className="bg-white border-y border-navy-100">
          <div className="container-x py-20">
            <h2 className="section-title">We serve injury victims across Florida</h2>
            <p className="section-subtitle">Local funding and attorney matching in {FLORIDA_CITIES.length} Florida cities.</p>
            <div className="flex flex-wrap gap-2 mt-8">
              {FLORIDA_CITIES.map((c) => (
                <Link key={c.slug} href={`/florida/${c.slug}`} className="px-3 py-1.5 rounded-md border border-navy-100 text-sm font-medium hover:border-navy-800 hover:bg-navy-50">
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="container-x py-20 max-w-3xl">
          <h2 className="section-title">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-navy-100 border-y border-navy-100">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-semibold text-lg">
                  {f.q}
                  <span className="text-gold-600 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="text-navy-700/80 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="container-x pb-8">
          <div className="rounded-lg bg-navy-800 text-white p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Don&rsquo;t let financial pressure force a bad settlement</h2>
            <p className="text-navy-100/80 mt-4 text-lg">Apply in 3 minutes. Get funded in as little as 24 hours. Zero risk if you lose.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/intake" className="btn-primary text-base">Get funded now</Link>
              <a href={BRAND.phoneHref} className="btn-ghost text-base"><Phone size={18} /> {BRAND.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
