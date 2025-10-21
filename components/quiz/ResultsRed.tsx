import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { XCircle, BookOpen, Video, Mail, RotateCcw } from "lucide-react"

export function ResultsRed() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="space-y-4 text-center">
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-red-100">
          <XCircle className="size-10 text-red-600" />
        </div>
        <h1 className="text-4xl font-semibold text-[#2c2c2c] sm:text-5xl">
          SugarSaint Isn&apos;t The Right Fit
          <br />
          (And That&apos;s Okay)
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[#6a6258]">
          We&apos;d rather be honest than sell you something that won&apos;t work, sugar.
        </p>
      </div>

      {/* Respectful Explanation */}
      <Card className="border-l-4 border-red-500 bg-red-50/50">
        <CardContent className="space-y-4 pt-6">
          <h2 className="text-xl font-semibold text-[#2c2c2c]">
            Based on your answers, here&apos;s why:
          </h2>
          <p className="text-base text-[#4a4a4a]">
            You indicated you&apos;re not willing to eliminate PUFAs. This is the foundational requirement – without it, nothing else works.
          </p>
          <p className="text-base text-[#4a4a4a]">
            The entire course is built on PUFA elimination as non-negotiable. Without that commitment, the experiments won&apos;t produce the results you&apos;re looking for.
          </p>
        </CardContent>
      </Card>

      {/* Why Honesty Matters */}
      <Card className="border-[#efe4cf] bg-gradient-to-br from-[#fff6e6] to-[#fffbf5]">
        <CardContent className="space-y-4 p-8 text-center">
          <h2 className="text-2xl font-semibold text-[#2c2c2c]">
            Why Honesty Matters
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[#4a4a4a]">
            We could take your $297, but that wouldn&apos;t help you. This approach requires PUFA elimination as the foundation. If you&apos;re not ready for that, this won&apos;t work.
          </p>
          <p className="text-base font-medium text-[#6a6258]">
            Your success matters more than our revenue, honey.
          </p>
        </CardContent>
      </Card>

      {/* What If You Change Your Mind */}
      <Card className="border-[#efe4cf] bg-white">
        <CardContent className="space-y-6 pt-6">
          <div className="flex items-start gap-4">
            <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-[#d4af37]/15">
              <RotateCcw className="size-6 text-[#d4af37]" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-[#2c2c2c]">
                What if you change your mind?
              </h2>
              <p className="text-base text-[#4a4a4a]">
                If you decide later you&apos;re ready to eliminate PUFAs, come back and retake the quiz. We&apos;ll be here, and we&apos;d love to support you then.
              </p>
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <Button size="lg" variant="outline" className="border-2 px-10 text-base" asChild>
              <Link href="/quiz">
                Retake the Quiz
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Alternative Resources */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#2c2c2c]">
          In the meantime, explore these free resources:
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="border-[#efe4cf] bg-white transition-shadow hover:shadow-md">
            <CardContent className="space-y-3 pt-6 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#d4af37]/15">
                <BookOpen className="size-6 text-[#d4af37]" />
              </div>
              <h3 className="font-semibold text-[#2c2c2c]">Read the Blog</h3>
              <p className="text-sm text-[#6a6258]">
                Learn about metabolic health and why PUFAs matter
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#efe4cf] bg-white transition-shadow hover:shadow-md">
            <CardContent className="space-y-3 pt-6 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#d4af37]/15">
                <Video className="size-6 text-[#d4af37]" />
              </div>
              <h3 className="font-semibold text-[#2c2c2c]">Watch YouTube</h3>
              <p className="text-sm text-[#6a6258]">
                Free educational videos on seed oils and metabolism
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
                Weekly tips that might change your mind (no pressure)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* No Hard Feelings */}
      <Card className="border-[#efe4cf] bg-white">
        <CardContent className="space-y-4 p-8 text-center">
          <p className="mx-auto max-w-2xl font-serif text-lg italic text-[#6a6258]">
            No hard feelings, sugar. We respect this isn&apos;t for everyone. If your current approach works for you, keep doing it. Your body knows what it needs.
          </p>
          <p className="text-sm text-[#9a8f7f]">
            — The SugarSaint Team
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
