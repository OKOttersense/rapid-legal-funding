export const PRACTICE_AREAS = [
  {
    id: 'dui',
    name: 'DUI Defense',
    slug: 'dui-defense',
    description: 'Defend against DUI charges with experienced attorneys',
    icon: '⚖️',
    avgCaseValue: 5000,
  },
  {
    id: 'personal-injury',
    name: 'Personal Injury',
    slug: 'personal-injury',
    description: 'Get compensation for injuries caused by negligence',
    icon: '🏥',
    avgCaseValue: 25000,
  },
  {
    id: 'family-law',
    name: 'Family Law',
    slug: 'family-law',
    description: 'Handle divorce, custody, and family matters',
    icon: '👨‍👩‍👧‍👦',
    avgCaseValue: 8000,
  },
  {
    id: 'bankruptcy',
    name: 'Bankruptcy',
    slug: 'bankruptcy',
    description: 'Get a fresh start with bankruptcy protection',
    icon: '💳',
    avgCaseValue: 3000,
  },
  {
    id: 'immigration',
    name: 'Immigration',
    slug: 'immigration',
    description: 'Navigate immigration law with experienced counsel',
    icon: '🌍',
    avgCaseValue: 4000,
  },
  {
    id: 'workers-comp',
    name: 'Workers Compensation',
    slug: 'workers-compensation',
    description: 'Recover benefits for work-related injuries',
    icon: '👷',
    avgCaseValue: 15000,
  },
];

export const PRACTICE_AREA_QUESTIONS: Record<string, any[]> = {
  'dui': [
    {
      id: 'arrest_date',
      text: 'When were you arrested?',
      type: 'date',
      required: true,
    },
    {
      id: 'bac_result',
      text: 'What was your BAC (Blood Alcohol Content)?',
      type: 'number',
      required: false,
      placeholder: 'e.g., 0.08',
    },
    {
      id: 'injuries',
      text: 'Were there any injuries in the incident?',
      type: 'select',
      options: ['No', 'Minor injuries', 'Serious injuries', 'Property damage only'],
      required: true,
    },
  ],
  'personal-injury': [
    {
      id: 'incident_date',
      text: 'When did the incident occur?',
      type: 'date',
      required: true,
    },
    {
      id: 'injury_type',
      text: 'Type of injury:',
      type: 'select',
      options: ['Vehicle accident', 'Slip and fall', 'Workplace injury', 'Medical malpractice', 'Product liability', 'Other'],
      required: true,
    },
    {
      id: 'damages',
      text: 'Estimated damages (medical bills, lost wages, etc.):',
      type: 'number',
      required: false,
      placeholder: '$',
    },
  ],
  'family-law': [
    {
      id: 'matter_type',
      text: 'What family law matter do you need help with?',
      type: 'select',
      options: ['Divorce', 'Custody', 'Child support', 'Alimony', 'Prenup/Postnup', 'Adoption', 'Other'],
      required: true,
    },
    {
      id: 'marital_status',
      text: 'Current marital status:',
      type: 'select',
      options: ['Married', 'Separated', 'Dating', 'Already divorced'],
      required: true,
    },
    {
      id: 'children',
      text: 'Number of minor children:',
      type: 'number',
      required: false,
    },
  ],
  'bankruptcy': [
    {
      id: 'bankruptcy_type',
      text: 'Which chapter are you considering?',
      type: 'select',
      options: ['Chapter 7', 'Chapter 13', 'Not sure'],
      required: true,
    },
    {
      id: 'debt_amount',
      text: 'Approximate total debt:',
      type: 'number',
      required: false,
      placeholder: '$',
    },
    {
      id: 'has_assets',
      text: 'Do you have significant assets?',
      type: 'select',
      options: ['Yes', 'No', 'Unsure'],
      required: true,
    },
  ],
  'immigration': [
    {
      id: 'visa_status',
      text: 'Current visa/immigration status:',
      type: 'select',
      options: ['Undocumented', 'Visa holder', 'Green card holder', 'Citizen', 'Other'],
      required: true,
    },
    {
      id: 'matter_type',
      text: 'Type of immigration matter:',
      type: 'select',
      options: ['Visa application', 'Green card', 'Citizenship', 'Deportation defense', 'Family sponsorship', 'Other'],
      required: true,
    },
  ],
  'workers-comp': [
    {
      id: 'injury_date',
      text: 'When did the injury occur?',
      type: 'date',
      required: true,
    },
    {
      id: 'injury_type',
      text: 'Type of workplace injury:',
      type: 'textarea',
      required: true,
      placeholder: 'Describe your injury...',
    },
    {
      id: 'claim_status',
      text: 'What is your claim status?',
      type: 'select',
      options: ['Not filed yet', 'Recently filed', 'Claim denied', 'In dispute'],
      required: true,
    },
  ],
};

export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value);
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();
}

export function getPracticeAreaById(id: string) {
  return PRACTICE_AREAS.find(pa => pa.id === id);
}

export function getPracticeAreaQuestions(practiceAreaId: string) {
  return PRACTICE_AREA_QUESTIONS[practiceAreaId] || [];
}

export function calculateLeadScore(factors: {
  caseValue: number;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  clarity: 'unclear' | 'mixed' | 'strong';
  hasDocument: boolean;
}): number {
  let score = 0;

  // Case value (max 40%)
  if (factors.caseValue > 50000) score += 40;
  else if (factors.caseValue > 25000) score += 30;
  else if (factors.caseValue > 10000) score += 20;
  else if (factors.caseValue > 1000) score += 10;

  // Urgency (max 30%)
  if (factors.urgency === 'critical') score += 30;
  else if (factors.urgency === 'high') score += 20;
  else if (factors.urgency === 'medium') score += 10;

  // Clarity (max 20%)
  if (factors.clarity === 'strong') score += 20;
  else if (factors.clarity === 'mixed') score += 10;

  // Documentation (max 10%)
  if (factors.hasDocument) score += 10;

  return Math.min(100, score) / 100;
}

export const MOCK_ATTORNEYS = [
  {
    id: '1',
    name: 'Sarah Martinez',
    email: 'sarah@legalpros.com',
    firm: 'Legal Pros',
    title: 'Senior Attorney',
    practiceAreas: ['personal-injury', 'workers-comp'],
    yearsExperience: 15,
    successRate: 87,
    subscriptionTier: 'pro',
    paymentModel: 'revenue_share',
    revenueSharePercentage: 15,
    acceptingLeads: true,
    currentCaseload: 8,
    maxCaseload: 15,
    location: 'Oklahoma City, OK',
    leadsReceived: 45,
    casesClosed: 12,
  },
  {
    id: '2',
    name: 'James Chen',
    email: 'james@defensegroup.com',
    firm: 'Defense Group',
    title: 'Criminal Defense Specialist',
    practiceAreas: ['dui'],
    yearsExperience: 20,
    successRate: 92,
    subscriptionTier: 'enterprise',
    paymentModel: 'direct_purchase',
    acceptingLeads: true,
    currentCaseload: 12,
    maxCaseload: 20,
    location: 'Oklahoma City, OK',
    leadsReceived: 78,
    casesClosed: 32,
  },
  {
    id: '3',
    name: 'Amanda Johnson',
    email: 'amanda@familylawOK.com',
    firm: 'Family Law Solutions',
    title: 'Family Law Attorney',
    practiceAreas: ['family-law'],
    yearsExperience: 12,
    successRate: 85,
    subscriptionTier: 'basic',
    paymentModel: 'revenue_share',
    revenueSharePercentage: 10,
    acceptingLeads: true,
    currentCaseload: 5,
    maxCaseload: 10,
    location: 'Oklahoma City, OK',
    leadsReceived: 23,
    casesClosed: 8,
  },
];
