'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CheckCircle, Clock, Phone, AlertCircle } from 'lucide-react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const leadId = searchParams.get('leadId');

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Success Icon */}
          <div className="mb-8 animate-fadeInScale">
            <CheckCircle className="w-24 h-24 mx-auto text-green-500 mb-4" />
            <h1 className="text-4xl font-bold mb-4">Case Submitted Successfully!</h1>
            <p className="text-lg text-gray-600">
              We've received your information and our AI is finding the perfect attorney match for you.
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-left">What Happens Next</h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-brand-100">
                    <span className="text-brand-600 font-bold">1</span>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">AI Case Analysis (2-5 mins)</h3>
                  <p className="text-gray-600 mt-1">
                    Our advanced AI system analyzes your case details, estimates case value, and identifies key factors.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-brand-100">
                    <span className="text-brand-600 font-bold">2</span>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">Attorney Matching (5-15 mins)</h3>
                  <p className="text-gray-600 mt-1">
                    We match you with 2-3 qualified attorneys in your area who specialize in your type of case.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-brand-100">
                    <span className="text-brand-600 font-bold">3</span>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">Attorney Contact (Within 24 hrs)</h3>
                  <p className="text-gray-600 mt-1">
                    Your matched attorney(s) will reach out to you via phone or email to discuss your case.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-brand-100">
                    <span className="text-brand-600 font-bold">4</span>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">Free Consultation</h3>
                  <p className="text-gray-600 mt-1">
                    Meet with your attorney to discuss your case in detail. This initial consultation is always free.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reference Number */}
          {leadId && (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8 text-left">
              <p className="text-sm text-gray-600 font-medium">Your Case Reference Number</p>
              <p className="text-2xl font-mono font-bold text-brand-600 mt-2">{leadId}</p>
              <p className="text-sm text-gray-600 mt-2">
                Keep this number for your records. You can use it to track your case status.
              </p>
            </div>
          )}

          {/* Important Notes */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Privacy */}
            <div className="card text-left">
              <div className="flex gap-3 mb-3">
                <AlertCircle className="text-brand-600 flex-shrink-0" size={24} />
                <h3 className="font-bold">Your Privacy is Protected</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Your information is secure and never shared with third parties without your consent. All communications are confidential.
              </p>
            </div>

            {/* Timeline */}
            <div className="card text-left">
              <div className="flex gap-3 mb-3">
                <Clock className="text-brand-600 flex-shrink-0" size={24} />
                <h3 className="font-bold">Fast Response Time</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Most clients hear from an attorney within 24 hours. High-urgency cases may receive contact within 2-4 hours.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-secondary">
              Return to Home
            </Link>
            <a href="tel:+1234567890" className="btn-primary flex items-center justify-center gap-2">
              <Phone size={20} />
              Call Us for Status
            </a>
          </div>

          {/* FAQ Teaser */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="font-bold text-lg mb-4">Common Questions?</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-brand-600 mb-2">How much does this cost?</p>
                <p className="text-gray-600">It's free! Attorneys pay us directly. No hidden charges.</p>
              </div>
              <div>
                <p className="font-medium text-brand-600 mb-2">What if I don't like my match?</p>
                <p className="text-gray-600">You can always consult with multiple attorneys or decline a match.</p>
              </div>
              <div>
                <p className="font-medium text-brand-600 mb-2">What happens if I get multiple offers?</p>
                <p className="text-gray-600">You can interview multiple attorneys and choose the best fit for you.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={null}>
      <SuccessContent />
    </Suspense>
  );
}
