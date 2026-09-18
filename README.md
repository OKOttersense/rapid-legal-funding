# 🏛️ Rapid Legal Funding

**AI-Powered Legal Lead Generation & Case Management Platform**

An intelligent platform that connects clients with qualified attorneys using AI-driven matching and real-time lead management.

---

## 🚀 Features

### For Clients
- **AI-Powered Lead Matching**: Instant matching with qualified attorneys based on case type, value, and complexity
- **Multi-Step Intake Form**: Intuitive, practice-area-specific questions guide clients through the process
- **Real-Time Qualification**: AI analyzes cases in real-time to assess viability and estimate case value
- **6 Practice Areas**: DUI Defense, Personal Injury, Family Law, Bankruptcy, Immigration, Workers Compensation
- **Free Consultation**: No hidden fees—initial consultations are always free
- **Instant Attorney Connection**: Get connected within 24 hours

### For Attorneys
- **Real-Time Lead Dashboard**: See new leads as they're qualified with match scores
- **Intelligent Routing**: AI matches leads based on practice area, experience, and availability
- **Case Analytics**: Track performance metrics, conversion rates, and revenue
- **Lead Management Tools**: Accept/decline leads, mark cases closed, track status
- **Performance Insights**: AI-generated recommendations to optimize case acceptance
- **Flexible Pricing**: Direct lead purchase or revenue-share models

### Admin/Platform Features
- **Real-Time Analytics**: Dashboard showing leads, conversions, revenue metrics
- **AI-Powered Insights**: Recommendations for lead quality improvement
- **Flexible Payment Processing**: Stripe integration for subscriptions and lead sales
- **Scalable Architecture**: Built for 1,000+ attorneys and unlimited leads

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **React 18**: Component library and hooks
- **TailwindCSS**: Utility-first styling
- **Zustand**: Lightweight state management
- **Recharts**: Data visualization
- **Lucide React**: Icon library

### Backend
- **Next.js API Routes**: Serverless API endpoints
- **Node.js**: Runtime environment

### Data & Services
- **Mock Database**: In-memory storage (replace with PostgreSQL in production)
- **Stripe** (ready for integration): Payment processing
- **Anthropic/OpenAI** (ready for integration): AI qualification engine

---

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn

### Setup

```bash
# 1. Clone and install
cd rapid-legal-funding
npm install

# 2. Set up environment variables (optional)
cp .env.example .env.local

# 3. Run development server
npm run dev

# 4. Open in browser
# Visit http://localhost:3000
```

---

## 📁 Project Structure

```
rapid-legal-funding/
├── app/
│   ├── api/
│   │   ├── leads/
│   │   │   └── route.ts          # Lead creation & retrieval
│   │   └── qualify/
│   │       └── route.ts          # Lead qualification logic
│   ├── practice-areas/
│   │   └── [area]/
│   │       └── page.tsx          # Practice area detail pages
│   ├── dashboard/
│   │   └── page.tsx              # Attorney dashboard
│   ├── intake/
│   │   └── page.tsx              # Lead intake form
│   ├── success/
│   │   └── page.tsx              # Success confirmation page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/
│   ├── Header.tsx                # Navigation header
│   ├── Footer.tsx                # Footer
│   └── LeadIntakeForm.tsx         # Multi-step intake form
├── lib/
│   ├── utils.ts                  # Utilities & constants
│   └── store.ts                  # Zustand stores
├── types/
│   └── index.ts                  # TypeScript interfaces
├── public/                       # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

---

## 🚀 Getting Started

### View Homepage
Navigate to [http://localhost:3000](http://localhost:3000) to see the marketing homepage with practice areas and feature overview.

### Submit a Lead
1. Click "Get Legal Help" or "Start Now"
2. Select a practice area (DUI, Personal Injury, etc.)
3. Answer practice-area-specific questions
4. Provide contact information
5. AI qualifies your case instantly
6. Get matched with attorneys

### Attorney Dashboard
Navigate to [http://localhost:3000/dashboard](http://localhost:3000/dashboard) to see the attorney interface with:
- Incoming leads with match scores
- Case analytics and trends
- Lead filtering and management
- Revenue tracking

---

## 🎯 Core Workflows

### Lead Intake Flow
```
1. Client selects practice area
2. Answer practice-area questions
3. Provide contact info
4. AI qualifies case (calculates score, estimates value)
5. Display qualification results
6. Submit to backend
7. Redirect to success page
8. Attorney receives lead notification
```

### Attorney Matching Algorithm
```
1. Lead submitted with case details
2. AI performs qualification (score: 0-1)
3. Match to attorneys based on:
   - Practice area specialization
   - Current caseload capacity
   - Success rate in similar cases
   - Geographic coverage
4. Route to top 3 matched attorneys
5. Attorneys notified of new lead
```

### Lead Qualification Scoring
- **Case Value**: 30% weight (higher value = higher score)
- **Liability Clarity**: 20% weight (clear liability = higher score)
- **Documentation**: 10% weight (documented damages = higher score)
- **Urgency**: 30% weight (time-sensitive cases = higher score)
- **Risk Factors**: 10% weight (fewer risks = higher score)

---

## 🔌 API Endpoints

### POST /api/leads
Create a new lead
```json
{
  "clientName": "John Doe",
  "email": "john@example.com",
  "phone": "(555) 123-4567",
  "caseType": "personal-injury",
  "description": "Car accident...",
  "estimatedValue": 25000,
  "location": "Oklahoma City, OK"
}
```

### GET /api/leads
Retrieve leads (with filters)
```
GET /api/leads?attorneyId=123&status=pending
```

### POST /api/qualify
Qualify a lead
```json
{
  "caseType": "personal-injury",
  "description": "...",
  "damages": 15000,
  "liabilityClarityLevel": "strong"
}
```

---

## 🎨 Customization

### Practice Areas
Edit `/lib/utils.ts`:
```typescript
const PRACTICE_AREAS = [
  // Add new practice areas here
  {
    id: 'criminal-defense',
    name: 'Criminal Defense',
    slug: 'criminal-defense',
    // ...
  }
];
```

### Attorney Questions
Edit practice area questions in `PRACTICE_AREA_QUESTIONS`:
```typescript
'your-area': [
  {
    id: 'question_id',
    text: 'Your question here?',
    type: 'text | select | date | number | textarea',
    required: true,
    options: ['Option 1', 'Option 2'] // if select
  }
]
```

### Styling
Tailwind classes are configured in `tailwind.config.js`. Global styles are in `app/globals.css`.

---

## 🔐 Security Considerations

### Before Production Deployment:
1. **Environment Variables**: Add API keys to `.env.local`
2. **Authentication**: Implement attorney/admin login
3. **Database**: Replace mock in-memory storage with PostgreSQL/MongoDB
4. **Payment Processing**: Complete Stripe integration for subscriptions
5. **SSL/HTTPS**: Deploy on production domain with SSL certificate
6. **Data Privacy**: Implement proper data encryption and GDPR compliance
7. **Rate Limiting**: Add API rate limiting to prevent abuse
8. **Input Validation**: Validate and sanitize all form inputs

---

## 📊 Analytics & Metrics

The dashboard tracks:
- **Lead Volume**: New leads by day/week/month
- **Conversion Rates**: Leads → Cases closed
- **Revenue**: Total, by attorney, by practice area
- **Practice Area Performance**: Which areas generate most revenue
- **Attorney Performance**: Top performing attorneys by close rate
- **Lead Quality**: Average qualification score

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
# Push to GitHub
git push origin main

# Import to Vercel at vercel.com
# Auto-deployed on every push
```

### Deploy to Other Platforms
```bash
# Build for production
npm run build

# Start production server
npm start

# Or use Docker
docker build -t rapid-legal .
docker run -p 3000:3000 rapid-legal
```

---

## 🔮 Roadmap

### Phase 1 (Current)
- ✅ Homepage and practice areas
- ✅ Lead intake form
- ✅ AI qualification
- ✅ Attorney dashboard
- ✅ Basic analytics

### Phase 2 (Next)
- OAuth authentication for attorneys
- Real database (PostgreSQL)
- Payment processing (Stripe)
- Email notifications
- SMS notifications
- Attorney mobile app

### Phase 3 (Future)
- Advanced AI matching with vector embeddings
- Predictive lead scoring
- White-label platform
- Mobile app for clients
- Video consultation tools
- Case document automation
- Integration with legal practice management systems

---

## 📞 Support

For questions or issues:
1. Check the README and documentation
2. Review code comments
3. Open an issue on GitHub
4. Contact: support@rapidlegalfunding.com

---

## 📄 License

This project is proprietary and confidential.

---

## 🎉 Getting Help

### Useful Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS](https://tailwindcss.com)
- [Zustand Documentation](https://github.com/pmndrs/zustand)

### Common Issues

**Port 3000 already in use:**
```bash
# Use different port
npm run dev -- -p 3001
```

**Build errors:**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

---

**Built with ❤️ by Rapid Legal Funding Team**
