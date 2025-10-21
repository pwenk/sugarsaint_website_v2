'use client'

import Link from 'next/link'
import { XCircle, ArrowLeft, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PaymentCancelPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#fff6e6] via-[#fffbf5] to-[#fff2d8] px-4 py-16">
      <div className="mx-auto w-full max-w-2xl space-y-8 text-center">
        {/* Cancel Icon */}
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-orange-100">
          <XCircle className="size-12 text-orange-600" />
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-[#2c2c2c] sm:text-5xl">
            Payment Cancelled
          </h1>
          <p className="text-xl text-[#6a6258]">
            No worries—your payment was not processed.
          </p>
        </div>

        {/* Reassurance */}
        <div className="rounded-2xl bg-white/70 p-8 text-left shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-[#2c2c2c]">What now?</h2>
          <div className="space-y-4 text-base text-[#6a6258]">
            <div className="flex gap-3">
              <ArrowLeft className="mt-1 size-5 flex-shrink-0 text-[#d4af37]" />
              <div>
                <p className="font-medium text-[#2c2c2c]">Try again</p>
                <p>You can go back to the quiz results and complete your purchase anytime.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <HelpCircle className="mt-1 size-5 flex-shrink-0 text-[#d4af37]" />
              <div>
                <p className="font-medium text-[#2c2c2c]">Have questions?</p>
                <p>
                  Email us at{' '}
                  <a
                    href="mailto:[email protected]"
                    className="font-medium text-[#d4af37] hover:underline"
                  >
                    [email protected]
                  </a>
                  {' '}and we&apos;ll help you out.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="text-base">
            <Link href="/quiz/results?outcome=green">Back to Results</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>

        {/* Additional Help */}
        <div className="rounded-lg bg-[#d4af37]/10 p-4 text-sm text-[#6a6258]">
          <p>
            <strong className="text-[#2c2c2c]">Payment issues?</strong> We accept all major
            credit cards. If you&apos;re having trouble, please contact us.
          </p>
        </div>
      </div>
    </main>
  )
}
