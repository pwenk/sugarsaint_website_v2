import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Target } from "lucide-react";

export default function QuizLandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#fff6e6] via-[#fffbf5] to-[#fff2d8] px-4 py-16">
      <div className="mx-auto w-full max-w-2xl space-y-8 text-center">
        {/* Eyebrow */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#d4af37]">
          IS SUGARSAINT RIGHT FOR YOU?
        </p>

        {/* Headline */}
        <h1 className="text-4xl font-semibold leading-tight text-[#2c2c2c] sm:text-5xl">
          Find Out If This Metabolic Approach Is Your Fit
        </h1>

        {/* Description */}
        <p className="mx-auto max-w-xl text-lg text-[#4a4a4a]">
          Take this 2-minute quiz to see if this metabolic approach matches your situation. We&apos;ll be honest – this isn&apos;t for everyone, sugar.
        </p>

        {/* Trust Elements */}
        <div className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-6 text-sm text-[#6a6258]">
          <div className="flex items-center gap-2">
            <Target className="size-5 text-[#d4af37]" aria-hidden />
            <span>7 questions</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-5 text-[#d4af37]" aria-hidden />
            <span>2 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-5 text-[#d4af37]" aria-hidden />
            <span>Honest results</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Button size="lg" className="px-12 text-base" asChild>
            <Link href="/quiz/questions">Start Quiz</Link>
          </Button>
        </div>

        {/* Privacy Note */}
        <p className="text-xs text-[#9a8f7f]">
          Your results stay between us. No spam. Unsubscribe anytime.
        </p>
      </div>
    </main>
  );
}
