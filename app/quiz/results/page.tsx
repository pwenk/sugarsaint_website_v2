import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ResultsGreen } from '@/components/quiz/ResultsGreen'
import { ResultsYellow } from '@/components/quiz/ResultsYellow'
import { ResultsRed } from '@/components/quiz/ResultsRed'
import type { Outcome } from '@/lib/quiz/types'

interface ResultsPageProps {
  searchParams: Promise<{ outcome?: string }>
}

export default async function ResultsPage({ searchParams }: ResultsPageProps) {
  const params = await searchParams
  const outcome = params.outcome as Outcome | undefined

  // Validate outcome parameter
  if (!outcome || !['green', 'yellow', 'red'].includes(outcome)) {
    redirect('/quiz')
  }

  return (
    <main className="min-h-screen bg-[#fffbf5] px-4 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-4xl">
        {/* Render appropriate result component based on outcome */}
        {outcome === 'green' && <ResultsGreen />}
        {outcome === 'yellow' && <ResultsYellow />}
        {outcome === 'red' && <ResultsRed />}

        {/* Back to Home Link */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-[#d4af37] transition-colors hover:text-[#b48f2a]"
          >
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </main>
  )
}
