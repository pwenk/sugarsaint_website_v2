import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, CheckCircle2, BookOpen, Video, Mail } from "lucide-react"

export function ResultsYellow() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="space-y-4 text-center">
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-amber-100">
          <AlertTriangle className="size-10 text-amber-600" />
        </div>
        <h1 className="text-4xl font-semibold text-[#2c2c2c] sm:text-5xl">
          SugarSaint Could Work For You, But...
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[#6a6258]">
          You&apos;re willing to do the work, but there are some considerations, honey.
        </p>
      </div>

      {/* Honest Assessment */}
      <Card className="border-l-4 border-amber-500 bg-amber-50/50">
        <CardContent className="space-y-4 pt-6">
          <h2 className="text-xl font-semibold text-[#2c2c2c]">
            Here&apos;s what we noticed:
          </h2>
          <ul className="space-y-3 text-base text-[#4a4a4a]">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 flex-shrink-0 text-green-600" />
              <span>You&apos;re willing to eliminate PUFAs (most important)</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 size-5 flex-shrink-0 text-amber-600" />
              <span>You don&apos;t have strong metabolic symptoms yet</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 size-5 flex-shrink-0 text-amber-600" />
              <span>OR you might be looking for more structure than this experiment-based approach provides</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Why This Matters */}
      <Card className="border-[#efe4cf] bg-white">
        <CardContent className="space-y-4 pt-6">
          <h2 className="text-xl font-semibold text-[#2c2c2c]">
            Why This Matters
          </h2>
          <p className="text-base text-[#4a4a4a]">
            This course is designed for people with clear symptoms who are ready to experiment. You might get more value from free resources first, then come back when you&apos;re experiencing metabolic issues.
          </p>
          <p className="text-base text-[#4a4a4a]">
            That said – you&apos;re welcome to enroll if you want to get ahead of problems. The 30-day money-back guarantee applies, sugar.
          </p>
        </CardContent>
      </Card>

      {/* Alternative Path */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#2c2c2c]">
          Your options:
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="border-[#efe4cf] bg-white transition-shadow hover:shadow-md">
            <CardContent className="space-y-3 pt-6 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#d4af37]/15">
                <BookOpen className="size-6 text-[#d4af37]" />
              </div>
              <h3 className="font-semibold text-[#2c2c2c]">Explore Free Blog</h3>
              <p className="text-sm text-[#6a6258]">
                Learn the basics of metabolic health and PUFA elimination
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#efe4cf] bg-white transition-shadow hover:shadow-md">
            <CardContent className="space-y-3 pt-6 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#d4af37]/15">
                <Video className="size-6 text-[#d4af37]" />
              </div>
              <h3 className="font-semibold text-[#2c2c2c]">Watch Videos</h3>
              <p className="text-sm text-[#6a6258]">
                Free educational content on YouTube about body signals
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#efe4cf] bg-white transition-shadow hover:shadow-md">
            <CardContent className="space-y-3 pt-6 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#d4af37]/15">
                <Mail className="size-6 text-[#d4af37]" />
              </div>
              <h3 className="font-semibold text-[#2c2c2c]">Join Newsletter</h3>
              <p className="text-sm text-[#6a6258]">
                Weekly tips on metabolic health and experimentation
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Soft CTA */}
      <Card className="border-[#efe4cf] bg-white">
        <CardContent className="space-y-6 p-8 text-center">
          <h3 className="text-2xl font-semibold text-[#2c2c2c]">
            Still want to enroll?
          </h3>
          <p className="text-base text-[#6a6258]">
            You&apos;re welcome to join. The course is here when you&apos;re ready, and the 30-day guarantee means there&apos;s no risk.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" variant="outline" className="border-2 px-10 text-base" asChild>
              <Link href="https://sugarsaint.com/course" target="_blank" rel="noreferrer">
                I Still Want to Enroll ($297)
              </Link>
            </Button>
          </div>
          <p className="text-sm text-[#9a8f7f]">
            30-day money-back guarantee • No questions asked
          </p>
        </CardContent>
      </Card>

      {/* What to Expect (Honest Version) */}
      <Card className="border-l-4 border-[#d4af37] bg-[#fffdf8]">
        <CardContent className="space-y-4 pt-6">
          <h2 className="text-xl font-semibold text-[#2c2c2c]">
            If you do enroll, here&apos;s what to expect:
          </h2>
          <ul className="space-y-3 text-base text-[#4a4a4a]">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-[#d4af37]" />
              <span>This is experiment-based, not a rigid meal plan</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-[#d4af37]" />
              <span>You&apos;ll need to track body signals (temp, pulse, energy)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-[#d4af37]" />
              <span>Results come from consistent practice, not quick fixes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-2 flex-shrink-0 rounded-full bg-[#d4af37]" />
              <span>You trust your body, not experts or studies</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
