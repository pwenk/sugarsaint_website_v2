'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, MessageSquare, Sparkles } from 'lucide-react'

export function TimeCapsuleCTA() {
  const [selectedOption, setSelectedOption] = useState<'regret' | 'success' | null>(null)

  // Calculate date 30 days from now
  const futureDate = new Date()
  futureDate.setDate(futureDate.getDate() + 30)
  const formattedDate = futureDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <div className="space-y-8">
      {/* Main Headline */}
      <div className="space-y-4 text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#d4af37]/15">
          <Calendar className="size-8 text-[#d4af37]" aria-hidden />
        </div>
        <h2 className="text-3xl font-semibold text-[#2c2c2c] sm:text-4xl">
          What Will You Text Yourself on {formattedDate.split(',')[0]}?
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-[#4a4a4a]">
          30 days from today, you&apos;ll either thank yourself or regret ignoring this, sugar.
        </p>
      </div>

      {/* Two Options */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Option A - Regret */}
        <Card
          className={`cursor-pointer border-2 transition-all ${
            selectedOption === 'regret'
              ? 'border-red-400 bg-red-50/50'
              : 'border-[#efe4cf] bg-white hover:border-red-300'
          }`}
          onClick={() => setSelectedOption('regret')}
        >
          <CardContent className="space-y-4 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#2c2c2c]">Option A: Regret Text</h3>
              <MessageSquare className="size-6 text-red-500" aria-hidden />
            </div>
            <div className="space-y-3 rounded-lg bg-white/80 p-4 font-mono text-sm text-[#4a4a4a] shadow-inner">
              <p className="text-[#6a6258]">From: Past You</p>
              <p className="text-[#6a6258]">To: Future You</p>
              <div className="border-t border-[#efe4cf] pt-3 text-[#2c2c2c]">
                <p>Hey,</p>
                <p className="mt-2">
                  30 days ago you learned about PUFAs and what they&apos;re doing to your body.
                </p>
                <p className="mt-2">
                  You didn&apos;t take action.
                </p>
                <p className="mt-2">
                  Still tired by 3pm? Still struggling through your day? Still feeling like life is harder than it should be?
                </p>
                <p className="mt-2 font-semibold">
                  I told you so.
                </p>
                <p className="mt-2">— Past You</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Option B - Success */}
        <Card
          className={`cursor-pointer border-2 transition-all ${
            selectedOption === 'success'
              ? 'border-[#d4af37] bg-[#fff6e6]'
              : 'border-[#efe4cf] bg-white hover:border-[#d4af37]/50'
          }`}
          onClick={() => setSelectedOption('success')}
        >
          <CardContent className="space-y-4 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#2c2c2c]">Option B: Success Text</h3>
              <Sparkles className="size-6 text-[#d4af37]" aria-hidden />
            </div>
            <div className="space-y-3 rounded-lg bg-white/80 p-4 font-mono text-sm text-[#4a4a4a] shadow-inner">
              <p className="text-[#6a6258]">From: Past You</p>
              <p className="text-[#6a6258]">To: Future You</p>
              <div className="border-t border-[#efe4cf] pt-3 text-[#2c2c2c]">
                <p>Hey,</p>
                <p className="mt-2">
                  30 days ago I invested $297 in fixing my metabolism.
                </p>
                <p className="mt-2">
                  Best decision I ever made.
                </p>
                <p className="mt-2">
                  I wake up with energy now. No afternoon crashes. Work feels easier. Life feels easier. Everything just... flows.
                </p>
                <p className="mt-2 font-semibold">
                  Thank you for trusting me.
                </p>
                <p className="mt-2">— Past You</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA */}
      <div className="space-y-4 text-center">
        <p className="text-lg font-medium text-[#4a4a4a]">
          Which text are you sending yourself, sugar?
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" className="w-full px-10 text-base sm:w-auto" asChild>
            <Link href="https://buy.polar.sh/polar_cl_8P7Z3TGPlCzXSgbJ0MNkG3HrYyVlcumvIjDMu3YLrwH" target="_blank" rel="noreferrer">
              I Choose Option B - Start Now ($297)
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full px-10 text-base sm:w-auto" asChild>
            <Link href="/quiz">
              Take The Free Quiz First
            </Link>
          </Button>
        </div>
        <p className="text-sm text-[#6a6258]">
          Your future self is watching, honey. Make the choice you won&apos;t regret.
        </p>
      </div>
    </div>
  )
}
