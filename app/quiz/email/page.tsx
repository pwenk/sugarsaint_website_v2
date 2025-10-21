'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2, Mail, Shield } from 'lucide-react'
import { calculateScore, determineOutcome } from '@/lib/quiz/scoring'
import type { QuizAnswer } from '@/lib/quiz/types'

export default function EmailCapturePage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Check if quiz answers exist
    const savedAnswers = localStorage.getItem('quizAnswers')
    if (!savedAnswers) {
      // Redirect back to quiz start if no answers
      router.push('/quiz')
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validate email
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    try {
      // Get quiz answers from localStorage
      const savedAnswers = localStorage.getItem('quizAnswers')
      if (!savedAnswers) {
        throw new Error('No quiz answers found')
      }

      const answers: QuizAnswer[] = JSON.parse(savedAnswers)

      // Calculate score and outcome
      const totalScore = calculateScore(answers)
      const outcome = determineOutcome(answers, totalScore)

      // Submit to API
      const response = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          outcome,
          totalScore,
          questionAnswers: answers,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit quiz')
      }

      // Clear localStorage
      localStorage.removeItem('quizAnswers')

      // Redirect to results page
      router.push(`/quiz/results?outcome=${outcome}`)
    } catch (err) {
      console.error('Quiz submission error:', err)
      setError('Something went wrong. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#fff6e6] via-[#fffbf5] to-[#fff2d8] px-4 py-16">
      <div className="mx-auto w-full max-w-md space-y-8">
        {/* Icon */}
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#d4af37]/15">
          <Mail className="size-8 text-[#d4af37]" aria-hidden />
        </div>

        {/* Headline */}
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-semibold text-[#2c2c2c] sm:text-4xl">
            Get Your Personalized Results
          </h1>
          <p className="text-base text-[#6a6258]">
            Enter your email to see your full assessment and recommendations
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-[#2c2c2c]">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              className="h-12 text-base"
              required
            />
          </div>

          {error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-800">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="h-12 w-full text-base"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Processing...
              </>
            ) : (
              'Show My Results'
            )}
          </Button>
        </form>

        {/* Privacy Note */}
        <div className="flex items-start gap-2 rounded-lg bg-white/70 p-4 text-sm text-[#6a6258]">
          <Shield className="mt-0.5 size-4 flex-shrink-0 text-[#d4af37]" aria-hidden />
          <p>
            We&apos;ll never spam you. Unsubscribe anytime. Your data stays private.
          </p>
        </div>
      </div>
    </main>
  )
}
