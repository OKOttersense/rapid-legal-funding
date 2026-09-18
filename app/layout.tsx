import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rapid Legal Funding | Pre-Settlement Funding and Attorney Matching in Florida',
  description:
    'Get pre-settlement funding in as little as 24 hours with no credit check and no risk. No attorney yet? We match Florida injury victims with qualified attorneys for free.',
  keywords: ['pre-settlement funding Florida', 'lawsuit funding Florida', 'legal funding Florida', 'personal injury attorney Florida'],
  openGraph: {
    title: 'Rapid Legal Funding | Pre-Settlement Funding Florida',
    description: 'Get pre-settlement funding in as little as 24 hours. No credit check. No risk. Free attorney matching.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Rapid Legal Funding',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
