export const BRAND = {
  name: 'Rapid Legal Funding',
  tagline: 'Legal help and pre-settlement cash, in one place',
  phone: '(732) 881-0893',
  phoneHref: 'tel:+17328810893',
  domain: 'rapidlegalfunding.com',
  logoUrl: 'https://rapidlegalfunding.com/wp-content/themes/rapid-legal-funding-now/images/logo_rlfn.png',
};

export const TRUST_STATS = [
  { value: '24hrs', label: 'Average funding time' },
  { value: '98%', label: 'Approval rate' },
  { value: '0%', label: 'Risk if you lose' },
  { value: '$50M+', label: 'Funding deployed' },
];

export const HOW_IT_WORKS = [
  {
    title: 'Apply free online',
    body: 'Fill out our 3-minute application. No credit check, no income verification required.',
  },
  {
    title: 'We review your case',
    body: 'Our team evaluates your case strength and connects you with the best funding partner, or an attorney if you do not have one yet.',
  },
  {
    title: 'Get approved fast',
    body: 'Most applicants receive approval within hours. Your attorney is notified immediately.',
  },
  {
    title: 'Receive your cash',
    body: 'Funds are wired directly to you, often the same day or within 24 hours of approval.',
  },
];

export const WHY_CHOOSE = [
  {
    title: 'Direct funding partners',
    body: 'We broker direct connections with our network of funding partners, eliminating middlemen and getting you funded faster.',
  },
  {
    title: '100% non-recourse',
    body: 'If you lose your case, you owe absolutely nothing. Pre-settlement funding is not a loan; there is zero personal financial risk.',
  },
  {
    title: '24-hour funding',
    body: 'Most applicants receive funding within 24 hours. In some cases we can fund you the same day you apply.',
  },
  {
    title: 'No credit check',
    body: 'Your credit score, employment history, and income are irrelevant. We only evaluate the strength of your case.',
  },
  {
    title: 'Transparent terms',
    body: 'No hidden fees, no compound interest surprises. You will know exactly what you owe before you sign anything.',
  },
  {
    title: 'Dedicated case manager',
    body: 'A dedicated specialist is assigned to your application from start to finish. Real people, real support, real fast.',
  },
];

export interface CaseType {
  slug: string;
  name: string;
  short: string;
  intro: string;
  typicalRange: string;
  qualifies: string[];
  fundingUses: string[];
  attorneyNote: string;
}

export const CASE_TYPES: CaseType[] = [
  {
    slug: 'auto-accident',
    name: 'Auto Accident',
    short: 'Car, SUV, and motorcycle accidents on Florida roads.',
    intro:
      'Auto accident claims are the most common type of case we fund. If another driver was at fault and you are represented by an attorney, you likely qualify for funding while your case moves toward settlement.',
    typicalRange: '$1,000 to $100,000+',
    qualifies: [
      'You were injured in a car, SUV, rideshare, or motorcycle crash',
      'Another driver was fully or partially at fault',
      'You have an attorney handling your claim',
      'There is insurance coverage available',
    ],
    fundingUses: ['Rent and mortgage', 'Medical bills and co-pays', 'Vehicle repair or replacement', 'Everyday living costs while you cannot work'],
    attorneyNote: 'Do not have an attorney yet? We can match you with a Florida auto accident attorney at no cost, then fund your case once it is filed.',
  },
  {
    slug: 'truck-accident',
    name: 'Truck Accident',
    short: 'Commercial truck and 18-wheeler accident cases.',
    intro:
      'Commercial truck collisions often involve severe injuries, multiple liable parties, and large insurance policies. These cases can take longer to resolve, which is exactly when pre-settlement funding helps most.',
    typicalRange: '$5,000 to $250,000+',
    qualifies: [
      'You were struck by a commercial truck, semi, or delivery vehicle',
      'The driver, trucking company, or maintenance contractor was negligent',
      'You have retained counsel',
      'Your injuries required medical treatment',
    ],
    fundingUses: ['Extended medical care', 'Lost income during recovery', 'Household bills', 'Transportation while your vehicle is out of service'],
    attorneyNote: 'Truck cases require attorneys who understand federal trucking regulations. We can connect you with one.',
  },
  {
    slug: 'slip-and-fall',
    name: 'Slip and Fall',
    short: 'Premises liability and slip and fall injury cases.',
    intro:
      'If you were hurt on someone else\u2019s property because of a hazard the owner should have fixed, you may have a premises liability claim. Funding helps you avoid settling early for less than your case is worth.',
    typicalRange: '$1,000 to $75,000',
    qualifies: [
      'You fell on wet floors, broken stairs, uneven pavement, or another hazard',
      'The property owner knew or should have known about the danger',
      'You have an attorney',
      'Your injuries were documented by a medical provider',
    ],
    fundingUses: ['Physical therapy', 'Rent and utilities', 'Childcare', 'Replacement income'],
    attorneyNote: 'Premises cases hinge on evidence gathered quickly. If you need an attorney, apply now and we will match you within 24 hours.',
  },
  {
    slug: 'medical-malpractice',
    name: 'Medical Malpractice',
    short: 'Negligent medical care and surgical error cases.',
    intro:
      'Medical malpractice cases are complex and frequently take years to resolve. Pre-settlement funding gives you financial breathing room so your attorney can pursue full value rather than a quick settlement.',
    typicalRange: '$10,000 to $500,000+',
    qualifies: [
      'A doctor, nurse, or facility deviated from the standard of care',
      'That deviation caused a new injury or worsened your condition',
      'You have a malpractice attorney and an expert review',
      'The case is within Florida\u2019s statute of limitations',
    ],
    fundingUses: ['Ongoing corrective treatment', 'Living expenses during a multi-year case', 'Home modifications', 'Lost wages'],
    attorneyNote: 'Malpractice claims require specialized counsel. We work with experienced Florida malpractice attorneys.',
  },
  {
    slug: 'workers-compensation',
    name: 'Workers\u2019 Comp',
    short: 'Workplace injury and workers\u2019 compensation cases.',
    intro:
      'Workers\u2019 compensation benefits often arrive slowly and cover only part of your lost income. Funding against a pending workers\u2019 comp or third-party injury claim helps bridge the gap.',
    typicalRange: '$500 to $50,000',
    qualifies: [
      'You were injured on the job in Florida',
      'You have a pending workers\u2019 comp claim or a third-party lawsuit',
      'You are represented by an attorney',
      'Your claim is disputed, delayed, or under appeal',
    ],
    fundingUses: ['Mortgage and rent', 'Groceries and utilities', 'Medical costs not covered by comp', 'Vehicle payments'],
    attorneyNote: 'Denied claims are common and appealable. We can match you with a workers\u2019 comp attorney if you need one.',
  },
  {
    slug: 'wrongful-death',
    name: 'Wrongful Death',
    short: 'Fatal accident and wrongful death claims.',
    intro:
      'Losing a family member to someone else\u2019s negligence brings grief and sudden financial strain. Pre-settlement funding lets surviving family members cover expenses without pressure to accept a low offer.',
    typicalRange: '$10,000 to $500,000+',
    qualifies: [
      'A loved one died due to negligence or misconduct',
      'You are the personal representative or a qualifying survivor',
      'A wrongful death claim has been filed or is being prepared by an attorney',
      'Liability and coverage have been identified',
    ],
    fundingUses: ['Funeral and burial costs', 'Household income replacement', 'Outstanding medical bills', 'Living expenses for dependents'],
    attorneyNote: 'Wrongful death claims in Florida must be filed by the estate\u2019s representative. We can connect you with counsel who handles these cases with care.',
  },
  {
    slug: 'product-liability',
    name: 'Product Liability',
    short: 'Injuries caused by defective or dangerous products.',
    intro:
      'Defective products, from vehicle parts to medical devices to consumer goods, injure thousands of Floridians every year. These claims are often defended aggressively by manufacturers, so patience pays.',
    typicalRange: '$5,000 to $250,000+',
    qualifies: [
      'You were hurt by a product that was defectively designed, made, or labeled',
      'You used the product as intended',
      'You have an attorney',
      'The product or evidence of the defect has been preserved',
    ],
    fundingUses: ['Medical treatment', 'Lost income', 'Rent and bills', 'Replacement of damaged property'],
    attorneyNote: 'Product cases may become part of larger litigation. We can match you with attorneys experienced in both individual and mass tort claims.',
  },
  {
    slug: 'personal-injury',
    name: 'Personal Injury',
    short: 'General personal injury claims of every kind.',
    intro:
      'Dog bites, boating accidents, assaults on negligent premises, pedestrian and bicycle crashes: if someone else\u2019s carelessness injured you and an attorney is pursuing your claim, we can likely help.',
    typicalRange: '$500 to $100,000+',
    qualifies: [
      'You suffered a physical injury caused by another party',
      'You have retained a personal injury attorney',
      'Your case is pending in Florida',
      'There is a source of recovery such as insurance',
    ],
    fundingUses: ['Any pressing bill', 'Medical care', 'Housing', 'Transportation'],
    attorneyNote: 'No attorney yet? Start with our free attorney match and we will handle funding once your case is underway.',
  },
];

export function getCaseType(slug: string) {
  return CASE_TYPES.find((c) => c.slug === slug);
}

export interface FloridaCity {
  slug: string;
  name: string;
  county: string;
  region: string;
  note: string;
}

export const FLORIDA_CITIES: FloridaCity[] = [
  { slug: 'boca-raton', name: 'Boca Raton', county: 'Palm Beach County', region: 'South Florida', note: 'Heavy I-95 and Glades Road traffic makes rear-end and intersection collisions common.' },
  { slug: 'boynton-beach', name: 'Boynton Beach', county: 'Palm Beach County', region: 'South Florida', note: 'Congress Avenue and Boynton Beach Boulevard see frequent multi-vehicle crashes.' },
  { slug: 'coral-springs', name: 'Coral Springs', county: 'Broward County', region: 'South Florida', note: 'Suburban arterials like University Drive carry high volumes of commuter and school traffic.' },
  { slug: 'daytona-beach', name: 'Daytona Beach', county: 'Volusia County', region: 'Central Florida', note: 'Event traffic and tourism drive a high rate of motorcycle and pedestrian injuries.' },
  { slug: 'deerfield-beach', name: 'Deerfield Beach', county: 'Broward County', region: 'South Florida', note: 'The I-95 and Hillsboro Boulevard corridor is a regular site of serious collisions.' },
  { slug: 'delray-beach', name: 'Delray Beach', county: 'Palm Beach County', region: 'South Florida', note: 'Atlantic Avenue nightlife contributes to late-night pedestrian and rideshare accidents.' },
  { slug: 'fort-lauderdale', name: 'Fort Lauderdale', county: 'Broward County', region: 'South Florida', note: 'One of the busiest injury litigation markets in the state, with I-595, I-95, and the port.' },
  { slug: 'fort-pierce', name: 'Fort Pierce', county: 'St. Lucie County', region: 'Treasure Coast', note: 'US-1 and the Florida Turnpike interchange are frequent crash locations.' },
  { slug: 'gainesville', name: 'Gainesville', county: 'Alachua County', region: 'North Central Florida', note: 'University traffic, scooters, and bicycles create a high volume of pedestrian and cyclist claims.' },
  { slug: 'hobe-sound', name: 'Hobe Sound', county: 'Martin County', region: 'Treasure Coast', note: 'Rural US-1 stretches with high speeds produce severe single and multi-vehicle collisions.' },
  { slug: 'jacksonville', name: 'Jacksonville', county: 'Duval County', region: 'Northeast Florida', note: 'Florida\u2019s largest city by area, with I-95, I-10, and I-295 all converging downtown.' },
  { slug: 'jupiter', name: 'Jupiter', county: 'Palm Beach County', region: 'South Florida', note: 'Indiantown Road and US-1 congestion, plus boating injuries on the Loxahatchee River.' },
  { slug: 'lake-worth-beach', name: 'Lake Worth Beach', county: 'Palm Beach County', region: 'South Florida', note: 'Dense residential streets and Dixie Highway traffic lead to pedestrian and bicycle injuries.' },
  { slug: 'miami', name: 'Miami', county: 'Miami-Dade County', region: 'South Florida', note: 'The highest volume of personal injury filings in Florida, with complex multi-party cases.' },
  { slug: 'naples', name: 'Naples', county: 'Collier County', region: 'Southwest Florida', note: 'Seasonal population surges on US-41 and I-75 sharply increase collision rates.' },
  { slug: 'ocala', name: 'Ocala', county: 'Marion County', region: 'North Central Florida', note: 'I-75 trucking traffic through Marion County produces serious commercial vehicle cases.' },
  { slug: 'orlando', name: 'Orlando', county: 'Orange County', region: 'Central Florida', note: 'Tourism, I-4, and theme park traffic make Orlando a top market for injury and premises claims.' },
  { slug: 'palm-beach-gardens', name: 'Palm Beach Gardens', county: 'Palm Beach County', region: 'South Florida', note: 'PGA Boulevard and Military Trail intersections are recurring crash sites.' },
  { slug: 'palm-city', name: 'Palm City', county: 'Martin County', region: 'Treasure Coast', note: 'Turnpike and I-95 access routes carry heavy through-traffic at high speeds.' },
  { slug: 'pensacola', name: 'Pensacola', county: 'Escambia County', region: 'Northwest Florida', note: 'Military and tourism traffic on I-10 and US-98 contribute to frequent serious collisions.' },
  { slug: 'pompano-beach', name: 'Pompano Beach', county: 'Broward County', region: 'South Florida', note: 'Federal Highway and Atlantic Boulevard see high rates of intersection crashes.' },
  { slug: 'port-st-lucie', name: 'Port St. Lucie', county: 'St. Lucie County', region: 'Treasure Coast', note: 'Rapid growth has outpaced road capacity, increasing crash frequency on major arterials.' },
  { slug: 'riviera-beach', name: 'Riviera Beach', county: 'Palm Beach County', region: 'South Florida', note: 'Port of Palm Beach commercial traffic and Blue Heron Boulevard congestion.' },
  { slug: 'stuart', name: 'Stuart', county: 'Martin County', region: 'Treasure Coast', note: 'The Roosevelt Bridge and US-1 corridor are the county\u2019s most common accident locations.' },
  { slug: 'tallahassee', name: 'Tallahassee', county: 'Leon County', region: 'North Florida', note: 'Two universities and state government traffic create dense commuter and pedestrian activity.' },
  { slug: 'tampa', name: 'Tampa', county: 'Hillsborough County', region: 'Tampa Bay', note: 'I-275, I-4, and the Howard Frankland Bridge are among the most crash-prone roads in Florida.' },
  { slug: 'vero-beach', name: 'Vero Beach', county: 'Indian River County', region: 'Treasure Coast', note: 'US-1 and A1A carry seasonal traffic with a high share of older drivers.' },
  { slug: 'wellington', name: 'Wellington', county: 'Palm Beach County', region: 'South Florida', note: 'Equestrian season brings heavy traffic to Southern Boulevard and Forest Hill Boulevard.' },
  { slug: 'west-palm-beach', name: 'West Palm Beach', county: 'Palm Beach County', region: 'South Florida', note: 'The county seat and courthouse city, with I-95 and Okeechobee Boulevard congestion.' },
];

export function getCity(slug: string) {
  return FLORIDA_CITIES.find((c) => c.slug === slug);
}

export const FAQS = [
  {
    q: 'What is pre-settlement funding?',
    a: 'Pre-settlement funding (also called lawsuit funding or legal funding) is a non-recourse cash advance against your future settlement. It is not a loan. You only repay if you win your case. If you lose, you owe nothing.',
  },
  {
    q: 'How quickly can I get funded?',
    a: 'Most applicants receive funding within 24 hours of approval. When your attorney responds quickly, same-day funding is possible. We work directly with our funding partners to eliminate delays.',
  },
  {
    q: 'Do I need good credit to qualify?',
    a: 'No. Funding is based entirely on the strength of your case, not your credit score, employment status, or income. There is no credit check involved.',
  },
  {
    q: 'How much can I get?',
    a: 'Funding amounts typically range from 10% to 20% of your estimated case value. For a $150,000 case, you might qualify for $15,000 to $30,000. Use the calculator on this page to estimate your range.',
  },
  {
    q: 'What if I lose my case?',
    a: 'Nothing. Pre-settlement funding is 100% risk-free. If you lose your case or receive no settlement, you owe absolutely nothing. This is what makes it fundamentally different from a personal loan.',
  },
  {
    q: 'Does this affect my attorney or my case?',
    a: 'No. Funding is a private financial arrangement. It does not change your attorney\u2019s strategy, your case value, or the outcome. Your attorney repays the advance from the settlement proceeds when your case resolves.',
  },
  {
    q: 'What if I do not have an attorney yet?',
    a: 'Start with our free attorney match. We connect you with a qualified Florida attorney in your case type, usually within 24 hours. Once your case is underway, you can apply for funding through the same account.',
  },
  {
    q: 'What types of cases qualify?',
    a: 'We fund virtually all personal injury case types: auto accidents, truck accidents, slip and fall, medical malpractice, workers\u2019 compensation, wrongful death, product liability, and general personal injury.',
  },
  {
    q: 'Is there a minimum or maximum funding amount?',
    a: 'Minimum funding is typically $500. Maximum funding can exceed $250,000 for high-value cases. The amount depends on your case\u2019s estimated value, liability strength, and available insurance coverage.',
  },
];

export const DISCLAIMER =
  'Rapid Legal Funding is not a law firm and does not provide legal advice. Pre-settlement funding is a non-recourse cash advance against your future settlement, not a loan. You only repay if you win your case. Funding is subject to approval and case evaluation. Results may vary. All funding decisions are made by our independent funding partners. Attorney matching is a free referral service; we do not endorse any specific attorney.';
