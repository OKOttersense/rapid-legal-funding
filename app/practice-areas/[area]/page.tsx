'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PRACTICE_AREAS } from '@/lib/utils';
import { ArrowRight, CheckCircle } from 'lucide-react';

const AREA_INFO: Record<string, any> = {
  'dui-defense': {
    fullTitle: 'DUI/Criminal Defense',
    description: "If you've been arrested for driving under the influence, you need experienced legal representation immediately. Our network of DUI specialists will fight for your rights.",
    benefits: [
      'Immediate representation and legal strategy',
      'Evidence review and case assessment',
      'License suspension defense',
      'Reduced charges or dismissal opportunities',
    ],
    stats: [
      { label: 'Cases Won', value: '92%' },
      { label: 'Avg. Settlement', value: '$3.5K' },
      { label: 'Attorneys Available', value: '12' },
    ],
    faq: [
      {
        q: 'What should I do immediately after arrest?',
        a: 'Contact an attorney immediately. Do not discuss your case with anyone but your lawyer. Invoke your right to remain silent.',
      },
      {
        q: 'Can my charges be reduced?',
        a: 'Yes. Many DUI charges can be reduced or dismissed based on improper testing, procedural errors, or other factors.',
      },
      {
        q: 'Will I lose my license?',
        a: 'Not necessarily. We can file an administrative hearing to contest the license suspension.',
      },
    ],
  },
  'personal-injury': {
    fullTitle: 'Personal Injury',
    description: "If you've been injured due to someone else's negligence—whether in a car accident, slip and fall, or workplace incident—you deserve compensation. We connect you with aggressive personal injury attorneys.",
    benefits: [
      'Full-spectrum injury representation',
      'Medical bill review and negotiation',
      'Insurance claim maximization',
      'Trial-ready if settlement fails',
    ],
    stats: [
      { label: 'Cases Won', value: '87%' },
      { label: 'Avg. Recovery', value: '$85K' },
      { label: 'Attorneys Available', value: '18' },
    ],
    faq: [
      {
        q: 'Do I have to go to trial?',
        a: 'No. Most cases settle. Our attorneys negotiate aggressively to maximize your recovery without the need for trial.',
      },
      {
        q: 'How long does a case take?',
        a: 'Typically 6-18 months depending on severity and complexity. We keep you informed every step.',
      },
      {
        q: 'What if I was partly at fault?',
        a: 'You may still recover. Many states allow recovery even if you are partially at fault, though your recovery may be reduced.',
      },
    ],
  },
  'family-law': {
    fullTitle: 'Family Law',
    description: "Family law matters are deeply personal. Whether it's divorce, custody, or support issues, you need an attorney who understands both the law and the emotional complexity of your situation.",
    benefits: [
      'Divorce and separation representation',
      'Custody and visitation agreements',
      'Child and spousal support negotiation',
      'Protective order assistance',
    ],
    stats: [
      { label: 'Cases Handled', value: '350+' },
      { label: 'Custody Wins', value: '85%' },
      { label: 'Attorneys Available', value: '22' },
    ],
    faq: [
      {
        q: 'How is custody determined?',
        a: 'Courts consider the best interests of the child, including each parent\'s involvement, stability, and relationship with the child.',
      },
      {
        q: 'Can I get alimony?',
        a: 'Yes. Alimony (spousal support) may be available depending on factors like income disparity and length of marriage.',
      },
      {
        q: 'How do I protect my assets?',
        a: 'Our attorneys will help you understand property division laws and develop a strategy to protect your interests.',
      },
    ],
  },
  'bankruptcy': {
    fullTitle: 'Bankruptcy',
    description: "If you're overwhelmed by debt, bankruptcy may be your path to financial relief. We connect you with bankruptcy specialists who will explain your options and find the best solution.",
    benefits: [
      'Chapter 7 and Chapter 13 guidance',
      'Debt elimination evaluation',
      'Asset protection strategies',
      'Fresh financial start planning',
    ],
    stats: [
      { label: 'Debt Resolved', value: '$50M+' },
      { label: 'Fresh Starts', value: '2,000+' },
      { label: 'Attorneys Available', value: '8' },
    ],
    faq: [
      {
        q: 'What\'s the difference between Chapter 7 and 13?',
        a: 'Chapter 7 eliminates debt (for those who qualify). Chapter 13 creates a repayment plan. Your attorney will recommend the best option.',
      },
      {
        q: 'Will I lose my home?',
        a: 'Not necessarily. Many bankruptcy filers keep their home, especially in Chapter 13. It depends on your situation.',
      },
      {
        q: 'How long does bankruptcy take?',
        a: 'Chapter 7 typically takes 3-6 months. Chapter 13 takes 3-5 years. Your attorney will give specific timelines.',
      },
    ],
  },
  'immigration': {
    fullTitle: 'Immigration',
    description: 'Navigating immigration law can be complex and intimidating. Our immigration specialists provide expert guidance on visas, green cards, citizenship, and more.',
    benefits: [
      'Visa and green card applications',
      'Citizenship and naturalization',
      'Deportation defense',
      'Family-based immigration sponsorship',
    ],
    stats: [
      { label: 'Cases Handled', value: '1,200+' },
      { label: 'Approval Rate', value: '89%' },
      { label: 'Attorneys Available', value: '6' },
    ],
    faq: [
      {
        q: 'Can I stay in the US while my case is pending?',
        a: 'Possibly. Your attorney will explore options like Deferred Action for Childhood Arrivals (DACA) or other protections.',
      },
      {
        q: 'How long does green card processing take?',
        a: 'Varies by type and country. Typically 6-24 months. Family-based sponsorship may take longer.',
      },
      {
        q: 'Can my family be with me?',
        a: 'Yes. Many visa and green card options allow spouses and children. We\'ll explore family reunification options.',
      },
    ],
  },
  'workers-compensation': {
    fullTitle: 'Workers Compensation',
    description: "If you've been injured at work, you have rights. We connect you with workers compensation attorneys who will fight to maximize your benefits and medical coverage.",
    benefits: [
      'Maximum benefit calculations',
      'Medical treatment and provider selection',
      'Return-to-work accommodations',
      'Permanent disability evaluation',
    ],
    stats: [
      { label: 'Claims Won', value: '94%' },
      { label: 'Avg. Benefit', value: '$45K' },
      { label: 'Attorneys Available', value: '10' },
    ],
    faq: [
      {
        q: 'How much compensation can I get?',
        a: 'It depends on your injury severity, lost wages, and medical costs. Your attorney will calculate the maximum entitled amount.',
      },
      {
        q: 'Can my employer retaliate against me?',
        a: 'No. Retaliation for filing a workers comp claim is illegal. We protect your rights.',
      },
      {
        q: 'What if my claim was denied?',
        a: 'We can file an appeal and represent you in hearings. Many denied claims are successfully overturned.',
      },
    ],
  },
};

export default function PracticeAreaPage() {
  const params = useParams();
  const area = params.area as string;
  const practiceArea = PRACTICE_AREAS.find(pa => pa.slug === area);
  const areaInfo = AREA_INFO[area] || {};

  if (!practiceArea) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Practice Area Not Found</h1>
            <Link href="/" className="btn-primary">Go Home</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-brand-600 to-brand-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-5xl mb-4">{practiceArea.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{areaInfo.fullTitle || practiceArea.name}</h1>
            <p className="text-xl text-brand-100 max-w-3xl mx-auto mb-8">
              {areaInfo.description}
            </p>
            <Link href="/intake" className="btn-primary bg-white text-brand-600 hover:bg-gray-100">
              Start Your Free Consultation
            </Link>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-12">What Our Attorneys Will Help With</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {areaInfo.benefits?.map((benefit: string, idx: number) => (
                <div key={idx} className="card flex gap-4">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={28} />
                  <div className="text-left">
                    <p className="font-semibold">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-white/50 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {areaInfo.stats?.map((stat: any, idx: number) => (
                <div key={idx} className="metric-card text-center">
                  <div className="metric-value text-brand-600">{stat.value}</div>
                  <div className="metric-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {areaInfo.faq && (
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {areaInfo.faq.map((item: any, idx: number) => (
                  <details key={idx} className="card cursor-pointer group">
                    <summary className="font-bold text-lg flex items-center justify-between">
                      {item.q}
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <p className="text-gray-600 mt-4 pt-4 border-t border-gray-200">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-brand-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Help?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Connect with a {areaInfo.fullTitle || practiceArea.name} specialist today. Free consultation, no obligation.
            </p>
            <Link href="/intake" className="btn-primary inline-flex items-center gap-2">
              Start Your Case <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
