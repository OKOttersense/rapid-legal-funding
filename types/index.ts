export interface Lead {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  caseType: string;
  description: string;
  estimatedValue: number;
  qualificationScore: number;
  aiSummary: string;
  keyFacts: string[];
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  riskExplanation: string;
  flags: Flag[];
  matchedAttorney?: string;
  attorneyMatchScore?: number;
  status: 'pending' | 'routed' | 'contacted' | 'closed' | 'declined';
  createdAt: string;
  location?: string;
  incidentDate?: string;
  damages?: string;
  insurance?: string;
}

export interface Flag {
  text: string;
  severity: 'info' | 'warning' | 'error';
}

export interface Attorney {
  id: string;
  name: string;
  email: string;
  firm: string;
  title: string;
  practiceAreas: string[];
  yearsExperience: number;
  successRate: number;
  subscriptionTier: 'basic' | 'pro' | 'enterprise';
  paymentModel: 'direct_purchase' | 'revenue_share';
  revenueSharePercentage?: number;
  acceptingLeads: boolean;
  currentCaseload: number;
  maxCaseload: number;
  location?: string;
  bio?: string;
  avatar?: string;
  createdAt: string;
  leadsReceived?: number;
  casesClosed?: number;
}

export interface PracticeArea {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  questions: IntakeQuestion[];
  avgCaseValue: number;
  successRate: number;
  leadsThisMonth: number;
}

export interface IntakeQuestion {
  id: string;
  text: string;
  type: 'text' | 'textarea' | 'select' | 'date' | 'number';
  options?: string[];
  required: boolean;
  placeholder?: string;
}

export interface QualificationResult {
  score: number; // 0 to 1
  caseValueEstimate: string;
  estimatedRange: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  liabilityClarityLevel: 'unclear' | 'mixed' | 'strong';
  keyStrengths: string[];
  risks: string[];
  recommendedAttorneyType: string;
  summary: string;
  confidence: number;
}

export interface Dashboard {
  totalLeads: number;
  todaysLeads: number;
  monthlyLeads: number;
  attorneyConversionRate: number;
  avgLeadQuality: number;
  leadSourcesData: any[];
  practiceAreaData: any[];
  topAttorneys: Attorney[];
  aiInsights: Insight[];
}

export interface Insight {
  insight: string;
  metric: string;
  recommendation: string;
  potentialImpact: string;
  urgency: 'low' | 'medium' | 'high';
}

export interface VisitorPersonalization {
  location: string;
  device: 'mobile' | 'tablet' | 'desktop';
  referrer: string;
  practiceAreaIntent?: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  heroImage: string;
  backgroundColor: string;
  variantId: string;
}
