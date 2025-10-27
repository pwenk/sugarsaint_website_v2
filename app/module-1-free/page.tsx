import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Clock, Star, CheckCircle2, Download, ArrowRight } from "lucide-react"

export default function FreeModule1Page() {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-[#D4AF37] hover:underline">
            ← Back to SugarSaint
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Module Header */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFB84D]/10 px-3 py-1 font-medium text-[#FFB84D]">
              <Clock className="h-4 w-4" />
              30 minutes
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D4AF37]/10 px-3 py-1 font-medium text-[#D4AF37]">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              Very Important
            </span>
          </div>

          <h1 className="text-4xl font-semibold text-[#2C2C2C] md:text-5xl">
            Module 1: Take Stock + Why Everything You Know Is Wrong
          </h1>

          <p className="text-xl text-gray-600">
            Document your current state and understand how nutrition science got hijacked
          </p>
        </div>

        {/* Learning Objectives */}
        <Card className="mb-8 border-l-4 border-[#D4AF37]">
          <CardContent className="pt-6">
            <h2 className="mb-4 text-xl font-semibold text-[#2C2C2C]">
              What You&apos;ll Learn
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4AF37]" />
                <span className="text-gray-700">Document eating habits without judgment</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4AF37]" />
                <span className="text-gray-700">Understand scientific misconceptions in nutrition</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4AF37]" />
                <span className="text-gray-700">Examine sugar/obesity correlation data</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4AF37]" />
                <span className="text-gray-700">Adopt experimental mindset over certainty</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none">
          {/* The Problem */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-[#2C2C2C]">
              The Problem: What You Already &quot;Know&quot;
            </h2>
            <p className="mb-4 text-gray-700">
              Your existing knowledge is blocking you from learning. We all have beliefs about nutrition we take as fact:
            </p>
            <Card className="bg-red-50/50 border-red-200">
              <CardContent className="pt-6">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>&quot;Fat (especially saturated fat) causes heart disease&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>&quot;Sugar makes you fat&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>&quot;Calories in, calories out&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>&quot;Eat less, move more&quot;</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Sugar/Obesity Chart */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-[#2C2C2C]">
              The Data Doesn&apos;t Lie
            </h2>
            <Card className="bg-[#D4AF37]/5 border-[#D4AF37]/20">
              <CardContent className="pt-6">
                <p className="mb-4 text-lg font-semibold text-[#2C2C2C]">
                  Sugar/Obesity Correlation Analysis
                </p>
                <p className="mb-4 text-gray-700">
                  Between 1980-2013, sugar consumption <strong className="text-green-600">declined 15-23%</strong> while obesity rates <strong className="text-red-600">rose dramatically</strong>.
                  After 1999, sweetened beverage consumption decreased significantly, yet obesity continued climbing.
                </p>
                <p className="text-sm text-gray-600">
                  Data source: US Department of Agriculture food availability records
                </p>
              </CardContent>
            </Card>
          </section>

          {/* The Actual Culprit */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-[#2C2C2C]">
              The Actual Culprit
            </h2>
            <p className="mb-4 text-gray-700">
              Seed oil consumption has increased <strong className="text-red-600">1000% since 1970</strong>, correlating directly with the obesity epidemic.
            </p>
            <Card className="bg-orange-50/50 border-orange-200">
              <CardContent className="pt-6">
                <p className="mb-2 font-semibold text-[#2C2C2C]">Industrial Canola Oil Processing:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hexane extraction</li>
                  <li>• Chemical bleaching</li>
                  <li>• High-temperature deodorizing</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Mindset Shift */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-[#2C2C2C]">
              The Mindset Shift
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="bg-red-50/50 border-red-200">
                <CardContent className="pt-6">
                  <p className="mb-2 font-semibold text-red-600">Old Mindset:</p>
                  <p className="text-gray-700">&quot;I know...&quot;</p>
                  <p className="text-sm text-gray-600">Blocks learning and discovery</p>
                </CardContent>
              </Card>
              <Card className="bg-green-50/50 border-green-200">
                <CardContent className="pt-6">
                  <p className="mb-2 font-semibold text-green-600">New Mindset:</p>
                  <p className="text-gray-700">&quot;What if I&apos;m experimenting?&quot;</p>
                  <p className="text-sm text-gray-600">Opens possibility and truth</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Why Modern Nutrition Science Fails */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-[#2C2C2C]">
              Why Modern Nutrition Science Fails
            </h2>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-start gap-2">
                <span className="text-[#D4AF37]">•</span>
                <span><strong>Credentials provide false authority</strong> - Letters after a name don&apos;t guarantee truth</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#D4AF37]">•</span>
                <span><strong>Academic system incentivizes conformity</strong> - Not truth-seeking</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#D4AF37]">•</span>
                <span><strong>Meta-analyses average mediocre studies</strong> - Garbage in, garbage out</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#D4AF37]">•</span>
                <span><strong>Historical failures</strong> - Ancel Keys cherry-picked fat research in the 1960s</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#D4AF37]">•</span>
                <span><strong>Funding biases</strong> - Can&apos;t get grants to challenge established narratives</span>
              </p>
            </div>
          </section>
        </div>

        {/* Assignments */}
        <div className="mt-12 space-y-6">
          <h2 className="text-3xl font-semibold text-[#2C2C2C]">
            Your Assignments
          </h2>

          {/* Assignment 1 */}
          <Card className="border-2 border-[#D4AF37]/50">
            <CardContent className="pt-6">
              <div className="mb-4 inline-block rounded-full bg-[#D4AF37] px-3 py-1 text-sm font-semibold text-white">
                Assignment 1
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#2C2C2C]">
                Food & Feeling Journal (3 Days)
              </h3>
              <p className="mb-4 text-gray-700">
                Document your current eating patterns without judgment. Track for three days:
              </p>
              <ul className="mb-6 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4AF37]" />
                  <span>Everything you eat and drink</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4AF37]" />
                  <span>Meal timing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4AF37]" />
                  <span>How you feel after eating (energy 1-10, mood, digestion)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4AF37]" />
                  <span>Body signals (temperature, sleep quality, mental clarity, physical energy)</span>
                </li>
              </ul>
              <div className="space-y-3">
                <p className="font-semibold text-[#2C2C2C]">Tracking Options:</p>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                    <p className="font-medium text-[#2C2C2C]">📄 PDF Tracking Sheet</p>
                    <p className="text-sm text-gray-600">Download and print</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                    <p className="font-medium text-[#2C2C2C]">📱 Notes App</p>
                    <p className="text-sm text-gray-600">Use template provided</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                    <p className="font-medium text-[#2C2C2C]">📊 Cronometer</p>
                    <p className="text-sm text-gray-600">Tracking app</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                    <p className="font-medium text-[#2C2C2C]">🍎 MyFitnessPal</p>
                    <p className="text-sm text-gray-600">Alternative app</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  💡 Tip: Set 3 daily reminder notifications to help you track consistently
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Assignment 2 */}
          <Card className="border-2 border-[#FFB84D]/50">
            <CardContent className="pt-6">
              <div className="mb-4 inline-block rounded-full bg-[#FFB84D] px-3 py-1 text-sm font-semibold text-white">
                Assignment 2
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#2C2C2C]">
                &quot;Everything I Thought I Knew&quot; Worksheet
              </h3>
              <p className="mb-4 text-gray-700">
                Document your current nutrition beliefs and examine where they came from:
              </p>
              <div className="mb-4 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">The Belief</th>
                      <th className="border border-gray-300 p-2 text-left">Where I Learned It</th>
                      <th className="border border-gray-300 p-2 text-left">Evidence For</th>
                      <th className="border border-gray-300 p-2 text-left">Evidence Against</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 text-gray-600">Example: &quot;Sugar is bad&quot;</td>
                      <td className="border border-gray-300 p-2 text-gray-600">Doctor, media</td>
                      <td className="border border-gray-300 p-2 text-gray-600">Everyone says so</td>
                      <td className="border border-gray-300 p-2 text-gray-600">Data shows decline</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="mt-12 border-2 border-[#D4AF37] bg-gradient-to-br from-[#D4AF37]/5 to-transparent">
          <CardContent className="space-y-6 p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#2C2C2C]">
              Ready for the Complete Course?
            </h3>
            <p className="mx-auto max-w-2xl text-gray-700">
              This is just Module 1. Get lifetime access to all 13 modules, 20+ experiments, tracking tools,
              and the complete SugarSaint metabolic transformation system.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C49F27]" asChild>
                <Link href="/">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Get Full Course Access
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/quiz">
                  Take the Quiz
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Next Module Preview */}
        <div className="mt-12 rounded-lg bg-gray-100 p-6">
          <p className="text-sm font-semibold text-[#D4AF37]">NEXT MODULE</p>
          <h3 className="mt-2 text-xl font-semibold text-[#2C2C2C]">
            Module 2: PUFAs & Seed Oils&apos; Metabolic Effects
          </h3>
          <p className="mt-2 text-gray-600">
            Unlock in the full course to continue your metabolic transformation →
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 text-center text-sm text-gray-600 sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} SugarSaint. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
