import { NextRequest, NextResponse } from 'next/server';

// Mock database - in production, use real database
const leads: any[] = [];
let leadIdCounter = 1;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.clientName || !body.email || !body.phone || !body.caseType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate lead ID
    const id = `lead_${leadIdCounter++}`;

    // Create lead object
    const lead = {
      id,
      ...body,
      createdAt: new Date().toISOString(),
      status: body.status || 'pending',
    };

    // Store lead (in production: save to database)
    leads.push(lead);

    // Simulate routing to attorney
    const routedAttorney = await matchLeadToAttorney(lead);

    return NextResponse.json({
      success: true,
      lead: {
        ...lead,
        matchedAttorney: routedAttorney,
      },
    });
  } catch (error) {
    console.error('Error creating lead:', error);
    return NextResponse.json(
      { error: 'Failed to create lead' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const attorneyId = searchParams.get('attorneyId');
    const status = searchParams.get('status');

    let filteredLeads = leads;

    if (attorneyId) {
      filteredLeads = filteredLeads.filter(l => l.matchedAttorney === attorneyId);
    }

    if (status) {
      filteredLeads = filteredLeads.filter(l => l.status === status);
    }

    return NextResponse.json({
      success: true,
      leads: filteredLeads,
      total: filteredLeads.length,
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}

// Helper: Match lead to attorney based on practice area
async function matchLeadToAttorney(lead: any) {
  // Simulate AI matching logic
  // In production: use vector embeddings and intelligent matching
  
  const attorneys = [
    { id: '1', name: 'Sarah Martinez', practiceAreas: ['personal-injury', 'workers-comp'] },
    { id: '2', name: 'James Chen', practiceAreas: ['dui'] },
    { id: '3', name: 'Amanda Johnson', practiceAreas: ['family-law'] },
  ];

  const matchedAttorney = attorneys.find(a => 
    a.practiceAreas.includes(lead.caseType)
  );

  return matchedAttorney || attorneys[0];
}
