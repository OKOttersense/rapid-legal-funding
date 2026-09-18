'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChevronRight, ChevronLeft, CheckCircle, Banknote, Scale } from 'lucide-react';
import { CASE_TYPES, FLORIDA_CITIES, BRAND } from '@/lib/site-data';
import { PRACTICE_AREAS, calculateLeadScore } from '@/lib/utils';

type Path = 'funding' | 'attorney';

interface FormData {
  path: Path | null;
  caseType: string;
  clientName: string;
  email: string;
  phone: string;
  city: string;
  incidentDate: string;
  description: string;
  hasAttorney: 'yes' | 'no' | '';
  attorneyName: string;
  attorneyPhone: string;
  estimatedValue: string;
  amountRequested: string;
}

const EMPTY: FormData = {
  path: null,
  caseType: '',
  clientName: '',
  email: '',
  phone: '',
  city: '',
  incidentDate: '',
  description: '',
  hasAttorney: '',
  attorneyName: '',
  attorneyPhone: '',
  estimatedValue: '',
  amountRequested: '',
};

const STEPS = ['Need', 'Case', 'Details', 'Review'];

export function LeadIntakeForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const p = searchParams.get('path');
    if (p === 'funding' || p === 'attorney') {
      setData((d) => ({ ...d, path: p, hasAttorney: p === 'funding' ? 'yes' : 'no' }));
      setStep(2);
    }
  }, [searchParams]);

  const update = (patch: Partial<FormData>) => {
    setData((d) => ({ ...d, ...patch }));
    setError(null);
  };

  const isFunding = data.path === 'funding';
  const caseOptions = isFunding
    ? CASE_TYPES.map((c) => ({ id: c.slug, name: c.name, description: c.short }))
    : [
        ...CASE_TYPES.map((c) => ({ id: c.slug, name: c.name, description: c.short })),
        ...PRACTICE_AREAS.filter((p) => !['personal-injury', 'workers-comp'].includes(p.id)).map((p) => ({ id: p.id, name: p.name, description: p.description })),
      ];
  const selectedCase = caseOptions.find((c) => c.id === data.caseType);

  const estValue = Number(data.estimatedValue) || 25000;
  const score = calculateLeadScore({
    caseValue: estValue,
    urgency: isFunding ? 'high' : 'medium',
    clarity: data.description.length > 80 ? 'strong' : 'mixed',
    hasDocument: false,
  });

  const next = () => {
    if (step === 1 && !data.path) return setError('Choose what you need help with.');
    if (step === 2 && !data.caseType) return setError('Select your case type.');
    if (step === 3) {
      if (!data.clientName || !data.email || !data.phone) return setError('Name, email, and phone are required.');
      if (!data.description) return setError('Please describe what happened.');
      if (isFunding && !data.attorneyName) return setError('Funding requires an attorney. Enter your attorney\u2019s name, or go back and choose "I need an attorney".');
    }
    setError(null);
    setStep(step + 1);
  };

  const submit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: data.clientName,
          email: data.email,
          phone: data.phone,
          caseType: data.caseType,
          description: data.description,
          estimatedValue: estValue,
          location: data.city,
          incidentDate: data.incidentDate,
          requestType: data.path,
          hasAttorney: data.hasAttorney === 'yes',
          attorneyName: data.attorneyName,
          attorneyPhone: data.attorneyPhone,
          amountRequested: Number(data.amountRequested) || undefined,
          qualificationScore: score,
          status: 'pending',
          createdAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error('bad response');
      const lead = await res.json();
      window.location.href = `/success?leadId=${lead.id}&path=${data.path}`;
    } catch {
      setError(`We could not submit your application. Please try again or call ${BRAND.phone}.`);
      setSubmitting(false);
    }
  };

  return (
    <div>
      <ol className="grid grid-cols-4 gap-2 mb-8">
        {STEPS.map((label, i) => {
          const n = i + 1;
          const state = n < step ? 'done' : n === step ? 'current' : 'todo';
          return (
            <li key={label} className="text-center text-sm">
              <div className={`h-1.5 rounded-full mb-2 ${state === 'todo' ? 'bg-navy-100' : 'bg-gold-500'}`} />
              <span className={state === 'todo' ? 'text-navy-700/50' : 'font-semibold text-navy-900'}>{label}</span>
            </li>
          );
        })}
      </ol>

      {error && (
        <div role="alert" className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">
          {error}
        </div>
      )}

      {step === 1 && (
        <div className="animate-slideUp">
          <h2 className="text-2xl font-bold mb-6">What do you need right now?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => update({ path: 'funding', hasAttorney: 'yes' })}
              className={`p-6 rounded-lg border-2 text-left transition-colors ${data.path === 'funding' ? 'border-navy-800 bg-navy-50' : 'border-navy-100 hover:border-navy-600'}`}
            >
              <Banknote size={32} className="text-gold-600" />
              <h3 className="font-bold text-lg mt-3">Pre-settlement funding</h3>
              <p className="text-sm text-navy-700/80 mt-1">I already have an attorney and a pending case. I need cash before it settles.</p>
            </button>
            <button
              type="button"
              onClick={() => update({ path: 'attorney', hasAttorney: 'no' })}
              className={`p-6 rounded-lg border-2 text-left transition-colors ${data.path === 'attorney' ? 'border-navy-800 bg-navy-50' : 'border-navy-100 hover:border-navy-600'}`}
            >
              <Scale size={32} className="text-navy-800" />
              <h3 className="font-bold text-lg mt-3">Find an attorney</h3>
              <p className="text-sm text-navy-700/80 mt-1">I do not have a lawyer yet. Match me with one for free, then help with funding later.</p>
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-slideUp">
          <h2 className="text-2xl font-bold mb-6">{isFunding ? 'What kind of case is it?' : 'What do you need help with?'}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {caseOptions.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => update({ caseType: c.id })}
                className={`p-4 rounded-lg border-2 text-left transition-colors ${data.caseType === c.id ? 'border-navy-800 bg-navy-50' : 'border-navy-100 hover:border-navy-600'}`}
              >
                <h3 className="font-bold">{c.name}</h3>
                <p className="text-sm text-navy-700/80 mt-1">{c.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <form className="animate-slideUp space-y-5" onSubmit={(e) => { e.preventDefault(); next(); }}>
          <h2 className="text-2xl font-bold">Your details</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="clientName" className="block text-sm font-medium mb-1">Full name</label>
              <input id="clientName" className="input-field" value={data.clientName} onChange={(e) => update({ clientName: e.target.value })} autoComplete="name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input id="email" type="email" className="input-field" value={data.email} onChange={(e) => update({ email: e.target.value })} autoComplete="email" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
              <input id="phone" type="tel" className="input-field" value={data.phone} onChange={(e) => update({ phone: e.target.value })} autoComplete="tel" />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
              <select id="city" className="input-field" value={data.city} onChange={(e) => update({ city: e.target.value })}>
                <option value="">Select a city</option>
                {FLORIDA_CITIES.map((c) => (
                  <option key={c.slug} value={`${c.name}, FL`}>{c.name}, FL</option>
                ))}
                <option value="Other Florida">Other Florida city</option>
                <option value="Outside Florida">Outside Florida</option>
              </select>
            </div>
            <div>
              <label htmlFor="incidentDate" className="block text-sm font-medium mb-1">Date of incident</label>
              <input id="incidentDate" type="date" className="input-field" value={data.incidentDate} onChange={(e) => update({ incidentDate: e.target.value })} />
            </div>
            <div>
              <label htmlFor="estimatedValue" className="block text-sm font-medium mb-1">Estimated case value (optional)</label>
              <input id="estimatedValue" type="number" min={0} className="input-field" placeholder="100000" value={data.estimatedValue} onChange={(e) => update({ estimatedValue: e.target.value })} />
            </div>
          </div>

          {isFunding && (
            <div className="rounded-lg border border-navy-100 bg-white p-5 space-y-4">
              <p className="font-semibold">Your attorney</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="attorneyName" className="block text-sm font-medium mb-1">Attorney or law firm name</label>
                  <input id="attorneyName" className="input-field" value={data.attorneyName} onChange={(e) => update({ attorneyName: e.target.value })} />
                </div>
                <div>
                  <label htmlFor="attorneyPhone" className="block text-sm font-medium mb-1">Attorney phone (optional)</label>
                  <input id="attorneyPhone" type="tel" className="input-field" value={data.attorneyPhone} onChange={(e) => update({ attorneyPhone: e.target.value })} />
                </div>
                <div>
                  <label htmlFor="amountRequested" className="block text-sm font-medium mb-1">Amount you need (optional)</label>
                  <input id="amountRequested" type="number" min={500} className="input-field" placeholder="5000" value={data.amountRequested} onChange={(e) => update({ amountRequested: e.target.value })} />
                </div>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">What happened?</label>
            <textarea id="description" className="input-field min-h-32" placeholder="Describe the incident, your injuries, and where things stand." value={data.description} onChange={(e) => update({ description: e.target.value })} />
          </div>
        </form>
      )}

      {step === 4 && (
        <div className="animate-slideUp">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <CheckCircle className="text-mint-500" size={28} /> Ready to submit
          </h2>
          <p className="text-navy-700/80 mb-6">Review your answers. Nothing is sent until you press the button below.</p>
          <dl className="card grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <div><dt className="text-navy-700/60">Request</dt><dd className="font-semibold">{isFunding ? 'Pre-settlement funding' : 'Attorney match'}</dd></div>
            <div><dt className="text-navy-700/60">Case type</dt><dd className="font-semibold">{selectedCase?.name}</dd></div>
            <div><dt className="text-navy-700/60">Name</dt><dd className="font-semibold">{data.clientName}</dd></div>
            <div><dt className="text-navy-700/60">Contact</dt><dd className="font-semibold">{data.phone} / {data.email}</dd></div>
            {data.city && <div><dt className="text-navy-700/60">City</dt><dd className="font-semibold">{data.city}</dd></div>}
            {isFunding && <div><dt className="text-navy-700/60">Attorney</dt><dd className="font-semibold">{data.attorneyName}</dd></div>}
            {data.amountRequested && <div><dt className="text-navy-700/60">Amount requested</dt><dd className="font-semibold">${Number(data.amountRequested).toLocaleString()}</dd></div>}
          </dl>
          <div className="mt-6 rounded-lg bg-navy-800 text-white p-5">
            <p className="text-sm text-navy-100/80">Preliminary case strength</p>
            <p className="text-3xl font-display font-bold text-gold-400">{Math.round(score * 100)}%</p>
            <p className="text-sm text-navy-100/80 mt-2">
              {isFunding
                ? 'A case manager will contact your attorney for acknowledgment, then a funding partner will issue terms. Most applicants hear back within hours.'
                : 'We will match you with a qualified attorney in your case type and city, usually within 24 hours.'}
            </p>
          </div>
        </div>
      )}

      <div className="flex justify-between gap-4 mt-8">
        <button
          type="button"
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
          className="btn-secondary disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} /> Back
        </button>
        <button
          type="button"
          onClick={step === 4 ? submit : next}
          disabled={submitting}
          className="btn-primary disabled:opacity-50"
        >
          {submitting ? 'Submitting' : step === 4 ? (isFunding ? 'Submit funding application' : 'Match me with an attorney') : 'Continue'}
          {!submitting && <ChevronRight size={20} />}
        </button>
      </div>
      <p className="text-xs text-navy-700/60 text-center mt-4">Free. No obligation. No credit check. Checking will not affect your credit score.</p>
    </div>
  );
}
