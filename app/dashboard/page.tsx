'use client';

import { useEffect, useMemo, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useDashboardStore } from '@/lib/store';
import { MOCK_ATTORNEYS } from '@/lib/utils';
import { CASE_TYPES } from '@/lib/site-data';
import type { Lead } from '@/types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Phone, Mail, Users, DollarSign, CheckCircle, Banknote, X } from 'lucide-react';

type DashboardLead = Lead & { requestType?: 'funding' | 'attorney'; attorneyName?: string; amountRequested?: number };

const daysAgo = (d: number, h = 0) => new Date(Date.now() - d * 86400000 - h * 3600000).toISOString();

const MOCK_LEADS: DashboardLead[] = [
  { id: '1', clientName: 'Robert Johnson', email: 'rjohnson@example.com', phone: '(305) 555-0142', caseType: 'auto-accident', description: 'Rear-ended on I-95, herniated disc, 2 months out of work.', estimatedValue: 145000, qualificationScore: 0.92, aiSummary: 'Clear liability, documented injuries, active treatment. Strong funding candidate.', keyFacts: ['Police report assigns fault', '$18K medical bills to date', 'Represented by Miami PI firm'], riskLevel: 'low', riskExplanation: 'Coverage confirmed at $250K.', flags: [{ text: 'High value', severity: 'info' }], status: 'pending', createdAt: daysAgo(0, 2), location: 'Miami, FL', requestType: 'funding', attorneyName: 'Delgado Injury Law', amountRequested: 12000 },
  { id: '2', clientName: 'Maria Sanchez', email: 'msanchez@example.com', phone: '(813) 555-0198', caseType: 'slip-and-fall', description: 'Fell on unmarked wet floor at grocery store, fractured wrist.', estimatedValue: 60000, qualificationScore: 0.78, aiSummary: 'Incident report on file, surgery completed. No attorney yet.', keyFacts: ['Store incident report exists', 'ORIF surgery', 'Witness available'], riskLevel: 'medium', riskExplanation: 'Comparative negligence possible.', flags: [], status: 'pending', createdAt: daysAgo(0, 6), location: 'Tampa, FL', requestType: 'attorney' },
  { id: '3', clientName: 'James Wright', email: 'jwright@example.com', phone: '(407) 555-0177', caseType: 'truck-accident', description: 'Struck by commercial box truck on I-4. Multiple fractures.', estimatedValue: 480000, qualificationScore: 0.95, aiSummary: 'Commercial policy, severe injuries, liability admitted by carrier.', keyFacts: ['$1M commercial policy', 'Liability admitted', '3 weeks hospitalized'], riskLevel: 'low', riskExplanation: 'Case expected to settle within 12 months.', flags: [{ text: 'Priority', severity: 'warning' }], status: 'routed', createdAt: daysAgo(1), location: 'Orlando, FL', requestType: 'funding', attorneyName: 'Kessler & Marsh', amountRequested: 40000, matchedAttorney: '1' },
  { id: '4', clientName: 'Denise Carter', email: 'dcarter@example.com', phone: '(904) 555-0121', caseType: 'workers-compensation', description: 'Warehouse forklift injury, claim denied, appeal pending.', estimatedValue: 35000, qualificationScore: 0.66, aiSummary: 'Denied claim under appeal. Needs counsel before funding.', keyFacts: ['Claim denied', 'Appeal filed pro se'], riskLevel: 'high', riskExplanation: 'No representation yet.', flags: [{ text: 'Needs attorney', severity: 'warning' }], status: 'pending', createdAt: daysAgo(2), location: 'Jacksonville, FL', requestType: 'attorney' },
  { id: '5', clientName: 'Luis Ortega', email: 'lortega@example.com', phone: '(561) 555-0163', caseType: 'medical-malpractice', description: 'Surgical error left permanent nerve damage.', estimatedValue: 650000, qualificationScore: 0.84, aiSummary: 'Expert affidavit obtained. Long timeline expected.', keyFacts: ['Expert affidavit filed', 'Permanent impairment rating'], riskLevel: 'medium', riskExplanation: 'Malpractice cases average 2 to 3 years.', flags: [], status: 'contacted', createdAt: daysAgo(3), location: 'West Palm Beach, FL', requestType: 'funding', attorneyName: 'Palm Beach Medical Law Group', amountRequested: 25000 },
  { id: '6', clientName: 'Angela Reyes', email: 'areyes@example.com', phone: '(239) 555-0110', caseType: 'wrongful-death', description: 'Husband killed by drunk driver. Estate opened.', estimatedValue: 900000, qualificationScore: 0.9, aiSummary: 'Criminal conviction supports civil liability.', keyFacts: ['DUI conviction', 'Estate representative appointed'], riskLevel: 'low', riskExplanation: 'Policy limits likely to be tendered.', flags: [{ text: 'High value', severity: 'info' }], status: 'pending', createdAt: daysAgo(4), location: 'Naples, FL', requestType: 'funding', attorneyName: 'Gulf Coast Trial Lawyers', amountRequested: 30000 },
];

const COLORS = ['#0b2545', '#f2a900', '#1b9c5a', '#1d3a63', '#f6be3a', '#a9bbd3', '#157f49', '#d99500'];

function caseName(slug: string) {
  return CASE_TYPES.find((c) => c.slug === slug)?.name ?? slug;
}

export default function DashboardPage() {
  const { leads, setLeads } = useDashboardStore();
  const [selected, setSelected] = useState<DashboardLead | null>(null);
  const [filter, setFilter] = useState<'all' | 'funding' | 'attorney'>('all');

  useEffect(() => {
    if (leads.length === 0) setLeads(MOCK_LEADS);
  }, [leads.length, setLeads]);

  const all = (leads.length > 0 ? leads : MOCK_LEADS) as DashboardLead[];
  const visible = all.filter((l) => filter === 'all' || l.requestType === filter);

  const stats = useMemo(() => {
    const funding = all.filter((l) => l.requestType === 'funding');
    const requested = funding.reduce((s, l) => s + (l.amountRequested ?? 0), 0);
    return [
      { label: 'Open leads', value: all.length, icon: Users },
      { label: 'Funding requested', value: '$' + requested.toLocaleString(), icon: Banknote },
      { label: 'Avg. case value', value: '$' + Math.round(all.reduce((s, l) => s + l.estimatedValue, 0) / all.length / 1000) + 'K', icon: DollarSign },
      { label: 'Qualified (75%+)', value: all.filter((l) => l.qualificationScore >= 0.75).length, icon: CheckCircle },
    ];
  }, [all]);

  const byType = useMemo(() => {
    const map: Record<string, number> = {};
    all.forEach((l) => { map[l.caseType] = (map[l.caseType] ?? 0) + 1; });
    return Object.entries(map).map(([k, v]) => ({ name: caseName(k), value: v }));
  }, [all]);

  const byDay = useMemo(() => {
    const days = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(Date.now() - (6 - i) * 86400000);
      return { key: d.toISOString().slice(0, 10), label: d.toLocaleDateString('en-US', { weekday: 'short' }), leads: 0 };
    });
    all.forEach((l) => {
      const k = l.createdAt.slice(0, 10);
      const day = days.find((d) => d.key === k);
      if (day) day.leads += 1;
    });
    return days;
  }, [all]);

  const matchedAttorney = selected?.matchedAttorney ? MOCK_ATTORNEYS.find((a) => a.id === selected.matchedAttorney) : null;

  return (
    <>
      <Header />
      <main className="container-x py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-bold">Attorney portal</h1>
            <p className="text-navy-700/80 mt-2">Incoming funding applications and attorney-match requests across Florida.</p>
          </div>
          <div className="inline-flex rounded-md border border-navy-100 bg-white p-1">
            {(['all', 'funding', 'attorney'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded text-sm font-medium ${filter === f ? 'bg-navy-800 text-white' : 'text-navy-700 hover:bg-navy-50'}`}
              >
                {f === 'all' ? 'All' : f === 'funding' ? 'Funding' : 'Attorney match'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="metric-card flex items-center justify-between">
              <div>
                <p className="metric-label mt-0">{s.label}</p>
                <p className="metric-value">{s.value}</p>
              </div>
              <s.icon size={32} className="text-gold-500" />
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <div className="card lg:col-span-2">
            <h2 className="font-bold mb-4">Leads this week</h2>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={byDay}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#d6deea" />
                  <XAxis dataKey="label" stroke="#1d3a63" />
                  <YAxis allowDecimals={false} stroke="#1d3a63" />
                  <Tooltip />
                  <Line type="monotone" dataKey="leads" stroke="#0b2545" strokeWidth={2} dot={{ fill: '#f2a900' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="card">
            <h2 className="font-bold mb-4">By case type</h2>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={byType} dataKey="value" nameKey="name" innerRadius={45} outerRadius={80}>
                    {byType.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="card overflow-x-auto">
          <h2 className="font-bold mb-4">Incoming leads</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-navy-100 text-navy-700/70">
                <th className="py-2 pr-4">Client</th>
                <th className="py-2 pr-4">Request</th>
                <th className="py-2 pr-4">Case type</th>
                <th className="py-2 pr-4">City</th>
                <th className="py-2 pr-4">Score</th>
                <th className="py-2 pr-4">Case value</th>
                <th className="py-2 pr-4">Status</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {visible.map((l) => (
                <tr key={l.id} className="border-b border-navy-50 hover:bg-navy-50/50">
                  <td className="py-3 pr-4 font-semibold">{l.clientName}</td>
                  <td className="py-3 pr-4">{l.requestType === 'funding' ? 'Funding' : 'Attorney match'}</td>
                  <td className="py-3 pr-4">{caseName(l.caseType)}</td>
                  <td className="py-3 pr-4">{l.location}</td>
                  <td className="py-3 pr-4"><span className="badge">{Math.round(l.qualificationScore * 100)}%</span></td>
                  <td className="py-3 pr-4">${l.estimatedValue.toLocaleString()}</td>
                  <td className="py-3 pr-4 capitalize">{l.status}</td>
                  <td className="py-3"><button onClick={() => setSelected(l)} className="font-semibold text-navy-800 underline">View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {selected && (
        <div className="fixed inset-0 z-50 bg-navy-900/60 flex items-end sm:items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 animate-fadeInScale" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h2 className="text-2xl font-bold">{selected.clientName}</h2>
                <p className="text-navy-700/70">{caseName(selected.caseType)} in {selected.location}</p>
              </div>
              <button onClick={() => setSelected(null)} aria-label="Close" className="p-1"><X size={22} /></button>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 mt-6 text-sm">
              <div className="metric-card p-4"><p className="metric-label mt-0">Score</p><p className="text-2xl font-bold">{Math.round(selected.qualificationScore * 100)}%</p></div>
              <div className="metric-card p-4"><p className="metric-label mt-0">Case value</p><p className="text-2xl font-bold">${selected.estimatedValue.toLocaleString()}</p></div>
              <div className="metric-card p-4"><p className="metric-label mt-0">Risk</p><p className="text-2xl font-bold capitalize">{selected.riskLevel}</p></div>
            </div>

            <p className="mt-6 text-navy-700/90 leading-relaxed">{selected.description}</p>
            <div className="mt-4 rounded-md bg-navy-50 p-4 text-sm">
              <p className="font-semibold mb-2">Summary</p>
              <p>{selected.aiSummary}</p>
              <ul className="mt-3 space-y-1">
                {selected.keyFacts.map((k) => <li key={k} className="flex gap-2"><CheckCircle size={16} className="text-mint-500 mt-0.5 shrink-0" /> {k}</li>)}
              </ul>
            </div>

            {selected.requestType === 'funding' && (
              <div className="mt-4 rounded-md border border-gold-500 bg-gold-100/40 p-4 text-sm">
                <p><span className="font-semibold">Attorney of record:</span> {selected.attorneyName}</p>
                <p><span className="font-semibold">Amount requested:</span> ${selected.amountRequested?.toLocaleString()}</p>
              </div>
            )}
            {matchedAttorney && (
              <p className="mt-4 text-sm"><span className="font-semibold">Matched attorney:</span> {matchedAttorney.name}, {matchedAttorney.firm}</p>
            )}

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a href={`tel:${selected.phone.replace(/\D/g, '')}`} className="btn-primary flex-1"><Phone size={18} /> Call client</a>
              <a href={`mailto:${selected.email}`} className="btn-secondary flex-1"><Mail size={18} /> Email client</a>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
