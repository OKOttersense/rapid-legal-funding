'use client';

import { useState } from 'react';
import Link from 'next/link';

const MIN = 10000;
const MAX = 2000000;

function money(n: number) {
  return '$' + Math.round(n).toLocaleString();
}

export function FundingCalculator() {
  const [value, setValue] = useState(100000);
  const low = value * 0.1;
  const high = value * 0.2;

  return (
    <div className="bg-white rounded-lg border border-navy-100 p-6 md:p-8">
      <label htmlFor="case-value" className="block text-sm font-semibold text-navy-700 mb-2">
        Estimated case value
      </label>
      <p className="text-4xl font-display font-bold text-navy-900 mb-4">
        {value >= MAX ? '$2,000,000+' : money(value)}
      </p>
      <input
        id="case-value"
        type="range"
        min={MIN}
        max={MAX}
        step={5000}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-gold-500"
      />
      <div className="flex justify-between text-xs text-navy-700/70 mt-1">
        <span>$10K</span><span>$500K</span><span>$1M</span><span>$2M+</span>
      </div>

      <div className="mt-8 rounded-lg bg-navy-800 text-white p-6">
        <p className="text-sm text-navy-100/80">Estimated funding range</p>
        <p className="text-3xl md:text-4xl font-display font-bold text-gold-400 mt-1">
          {money(low)} to {money(high)}
        </p>
        <p className="text-sm text-navy-100/80 mt-2">10% to 20% of estimated case value. Final amounts are set by our funding partners after case review.</p>
      </div>

      <Link href="/intake?path=funding" className="btn-primary w-full mt-6">
        Get funded now
      </Link>
    </div>
  );
}
