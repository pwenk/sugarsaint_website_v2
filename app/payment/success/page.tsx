'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle2, Loader2, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

function PaymentSuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [isVerifying, setIsVerifying] = useState(true)

  useEffect(() => {
    // Simulate verification (in production, verify with backend)
    const timer = setTimeout(() => {
      setIsVerifying(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isVerifying) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#fff6e6] via-[#fffbf5] to-[#fff2d8] px-4">
        <div className="text-center">
          <Loader2 className="mx-auto size-12 animate-spin text-[#d4af37]" />
          <p className="mt-4 text-lg text-[#6a6258]">Verifying your payment...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#fff6e6] via-[#fffbf5] to-[#fff2d8] px-4 py-16">
      <div className="mx-auto w-full max-w-2xl space-y-8 text-center">
        {/* Success Icon */}
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="size-12 text-green-600" />
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-[#2c2c2c] sm:text-5xl">
            Welcome to SugarSaint!
          </h1>
          <p className="text-xl text-[#6a6258]">
            Your payment was successful. You&apos;re about to transform your metabolic health.
          </p>
        </div>

        {/* What's Next */}
        <div className="rounded-2xl bg-white/70 p-8 text-left shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-[#2c2c2c]">What happens next?</h2>
          <div className="space-y-4 text-base text-[#6a6258]">
            <div className="flex gap-3">
              <Mail className="mt-1 size-5 flex-shrink-0 text-[#d4af37]" />
              <div>
                <p className="font-medium text-[#2c2c2c]">Check your email</p>
                <p>You&apos;ll receive course access details within 5 minutes.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="mt-1 size-5 flex-shrink-0 text-[#d4af37]" />
              <div>
                <p className="font-medium text-[#2c2c2c]">Access the course</p>
                <p>Click the link in your email to set up your account and start learning.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="mt-1 size-5 flex-shrink-0 text-[#d4af37]" />
              <div>
                <p className="font-medium text-[#2c2c2c]">Start your transformation</p>
                <p>Begin with Module 1: Understanding your metabolic baseline.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Session ID (for support) */}
        {sessionId && (
          <p className="text-sm text-[#9a8f85]">
            Order ID: <span className="font-mono">{sessionId}</span>
          </p>
        )}

        {/* CTA */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="text-base">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>

        {/* Support Note */}
        <div className="text-sm text-[#6a6258]">
          <p>
            Questions? Email us at{' '}
            <a
              href="mailto:[email protected]"
              className="font-medium text-[#d4af37] hover:underline"
            >
              [email protected]
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#fff6e6] via-[#fffbf5] to-[#fff2d8] px-4">
          <div className="text-center">
            <Loader2 className="mx-auto size-12 animate-spin text-[#d4af37]" />
            <p className="mt-4 text-lg text-[#6a6258]">Loading...</p>
          </div>
        </main>
      }
    >
      <PaymentSuccessContent />
    </Suspense>
  )
}
