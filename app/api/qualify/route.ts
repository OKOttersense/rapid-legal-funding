import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Extract case information
    const {
      caseType,
      description,
      damages,
      incidentDate,
      severity,
      liabilityClarityLevel,
      estimatedValue,
    } = body;

    // Simulate AI qualification using heuristics
    const qualification = performQualification({
      caseType,
      description,
      damages,
      incidentDate,
      severity,
      liabilityClarityLevel,
      estimatedValue,
    });

    return NextResponse.json({
      success: true,
      qualification,
    });
  } catch (error) {
    console.error('Error qualifying lead:', error);
    return NextResponse.json(
      { error: 'Failed to qualify lead' },
      { status: 500 }
    );
  }
}

function performQualification(caseData: any) {
  let score = 0.5; // Base score

  // Increase score based on case value
  if (caseData.estimatedValue > 50000) score += 0.3;
  else if (caseData.estimatedValue > 25000) score += 0.2;
  else if (caseData.estimatedValue > 10000) score += 0.1;

  // Increase score based on clear liability
  if (caseData.liabilityClarityLevel === 'strong') score += 0.2;
  else if (caseData.liabilityClarityLevel === 'mixed') score += 0.1;

  // Increase score if damages are documented
  if (caseData.damages) score += 0.1;

  // Cap score at 1.0
  score = Math.min(score, 1.0);

  // Generate key strengths based on case
  const keyStrengths = [];
  if (caseData.liabilityClarityLevel === 'strong') keyStrengths.push('Clear liability');
  if (caseData.damages) keyStrengths.push('Documented damages');
  if (caseData.estimatedValue > 25000) keyStrengths.push('Significant case value');
  if (!keyStrengths.length) keyStrengths.push('Viable legal claim');

  // Generate risks
  const risks = [];
  if (caseData.liabilityClarityLevel === 'unclear') risks.push('Liability assessment needed');
  if (!caseData.damages) risks.push('Damages documentation incomplete');
  if (caseData.estimatedValue < 5000) risks.push('Lower value case');

  // Determine case value estimate
  let caseValueEstimate = '$15,000';
  let estimatedRange = '$10,000 - $30,000';

  if (caseData.caseType === 'personal-injury') {
    if (caseData.estimatedValue > 50000) {
      caseValueEstimate = caseData.estimatedValue.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      estimatedRange = `$${caseData.estimatedValue - 10000} - $${caseData.estimatedValue + 50000}`;
    } else {
      caseValueEstimate = '$25,000';
      estimatedRange = '$15,000 - $50,000';
    }
  } else if (caseData.caseType === 'dui') {
    caseValueEstimate = '$3,500';
    estimatedRange = '$2,000 - $8,000';
  } else if (caseData.caseType === 'family-law') {
    caseValueEstimate = '$8,000';
    estimatedRange = '$3,000 - $25,000';
  } else if (caseData.caseType === 'bankruptcy') {
    caseValueEstimate = '$2,500';
    estimatedRange = '$1,500 - $5,000';
  } else if (caseData.caseType === 'workers-comp') {
    caseValueEstimate = '$20,000';
    estimatedRange = '$10,000 - $50,000';
  }

  const severity = score > 0.8 ? 'high' : score > 0.6 ? 'medium' : 'low';

  return {
    score: Math.round(score * 100) / 100,
    caseValueEstimate,
    estimatedRange,
    severity,
    liabilityClarityLevel: caseData.liabilityClarityLevel || 'unclear',
    keyStrengths: keyStrengths.length > 0 ? keyStrengths : ['Legal claim identified'],
    risks: risks.length > 0 ? risks : ['None identified'],
    recommendedAttorneyType:
      score > 0.8
        ? 'experienced_trial_lawyer'
        : 'settlement_negotiator',
    summary:
      score > 0.7
        ? `Your case qualifies for immediate attorney matching. Strong potential for positive outcome.`
        : `Your case meets our criteria. We'll connect you with an appropriate attorney for consultation.`,
    confidence: score,
  };
}
