import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Gift } from "lucide-react"

export function ResultsGreen() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="space-y-4 text-center">
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="size-10 text-green-600" />
        </div>
        <h1 className="text-4xl font-semibold text-[#2c2c2c] sm:text-5xl">
          SugarSaint Was Designed For You
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[#6a6258]">
          Based on your answers, you&apos;re an ideal candidate for this metabolic approach, sugar.
        </p>
      </div>

      {/* Personalized Summary */}
      <Card className="border-l-4 border-green-500 bg-green-50/50">
        <CardContent className="space-y-4 pt-6">
          <h2 className="text-xl font-semibold text-[#2c2c2c]">
            Here&apos;s why you&apos;re a great fit:
          </h2>
          <ul className="space-y-3 text-base text-[#4a4a4a]">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 flex-shrink-0 text-green-600" />
              <span>You&apos;re experiencing metabolic symptoms – classic signs this approach addresses</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 flex-shrink-0 text-green-600" />
              <span>You&apos;re willing to eliminate PUFAs – the foundational requirement</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 flex-shrink-0 text-green-600" />
              <span>You&apos;re open to body-signal-based experimentation</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 flex-shrink-0 text-green-600" />
              <span>You trust your body over external rules – exactly what we teach</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* What to Expect */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#2c2c2c]">
          When you join SugarSaint, you&apos;ll get:
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="border-[#efe4cf] bg-white">
            <CardContent className="pt-6">
              <ul className="space-y-3 text-sm text-[#4a4a4a]">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-[#d4af37]" />
                  <span>12 modules teaching Ray Peat metabolic approach</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-[#d4af37]" />
                  <span>20+ experiments to find what works for YOUR body</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-[#d4af37]" />
                  <span>PUFA elimination protocol and safe food lists</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-[#efe4cf] bg-white">
            <CardContent className="pt-6">
              <ul className="space-y-3 text-sm text-[#4a4a4a]">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-[#d4af37]" />
                  <span>Body signal tracking tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-[#d4af37]" />
                  <span>Restaurant survival guide and real-life strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-[#d4af37]" />
                  <span>Lifetime access – yours forever</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Strong CTA */}
      <Card className="overflow-hidden border-[#f0d9ad] bg-gradient-to-br from-[#fff6e6] to-[#fff2d8]">
        <CardContent className="space-y-6 p-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fff4df] px-4 py-2 text-sm font-semibold text-[#9c7a1f] shadow-md">
            <Gift className="size-4" />
            Limited Time: $297 (Lifetime Access)
          </div>
          <h3 className="text-2xl font-semibold text-[#2c2c2c]">
            Ready to heal your metabolism, sugar?
          </h3>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" className="px-10 text-base" asChild>
              <Link href="https://sugarsaint.com/course" target="_blank" rel="noreferrer">
                Enroll in SugarSaint Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-10 text-base" asChild>
              <Link href="https://sugarsaint.com/course" target="_blank" rel="noreferrer">
                See Full Course Overview
              </Link>
            </Button>
          </div>
          <p className="text-sm text-[#6a6258]">
            30-Day Money-Back Guarantee • Join 2,847+ Students • Lifetime Access
          </p>
        </CardContent>
      </Card>

      {/* Social Proof */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#2c2c2c]">
          What students like you are saying:
        </h2>
        <Card className="border-l-4 border-[#d4af37] bg-white/95 shadow-lg">
          <CardContent className="space-y-4 pt-6">
            <p className="font-serif text-lg italic text-[#2c2c2c]">
              &quot;My body temp went from 97.1°F to 98.4°F in three weeks. I&apos;m sleeping through the night for the first time in years, and my afternoon crashes are completely gone. This isn&apos;t a diet—it&apos;s metabolic freedom.&quot;
            </p>
            <div className="text-sm font-medium text-[#5a534a]">
              Marcus T. <span className="text-[#9a8f7f]">— Software Engineer</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
