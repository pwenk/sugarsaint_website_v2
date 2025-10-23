import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TimeCapsuleCTA } from "@/components/time-capsule-cta";
import { SiteHeader } from "@/components/site-header";
import {
  type LucideIcon,
  Activity,
  ArrowRight,
  Brain,
  CheckCircle2,
  ClipboardList,
  FlaskConical,
  Gift,
  RefreshCcw,
  Search,
  Thermometer,
  Zap,
} from "lucide-react";

const pillars: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Thermometer,
    title: "Body Signals as Authority",
    description:
      "Learn to read temperature, pulse, and energy levels. Your body knows more than any study—you just need to listen. No experts. No gurus. Just you and your metabolic signals.",
  },
  {
    icon: FlaskConical,
    title: "Experimentation Over Dogma",
    description:
      "No rules, no restrictions, no food police. Just 20+ guided experiments to discover what your metabolism responds to. Test everything. Trust nothing until you’ve tried it yourself.",
  },
  {
    icon: RefreshCcw,
    title: "Practice, Not Perfection",
    description:
      "The 90/10 rule keeps you sane. This isn’t a 30-day transformation—it’s a sustainable practice for life. Built for real humans living real lives, not influencers.",
  },
];

const testimonials = [
  {
    quote:
      "My body temp went from 97.1°F to 98.4°F in three weeks. I’m sleeping through the night for the first time in years, and my afternoon crashes are completely gone. This isn’t a diet—it’s metabolic freedom.",
    name: "Marcus T.",
    role: "Software Engineer",
  },
  {
    quote:
      "I was terrified of carbs for a decade. Now I eat fruit, honey, and rice daily—and my energy is stable. No more brain fog, no more cold hands. My body finally makes sense.",
    name: "Sarah K.",
    role: "Yoga Instructor",
  },
  {
    quote:
      "My testosterone went from borderline low to optimal range in 8 weeks. My doctor was shocked. I just eliminated seed oils and started listening to my body signals instead of experts.",
    name: "James R.",
    role: "Entrepreneur",
  },
  {
    quote:
      "Hair regrowth in thinning areas after 6 months. My dermatologist asked what I was doing. I told her: stopped the “heart-healthy” oils, added carbs back. She thought I was insane. My hair disagrees.",
    name: "David M.",
    role: "42",
  },
];

const benefits: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Thermometer,
    title: "Read Your Body Signals",
    description:
      "Master temperature tracking, pulse interpretation, energy patterns, and digestion awareness. Connect food choices to how you actually feel.",
  },
  {
    icon: Search,
    title: "Eliminate Hidden PUFAs",
    description:
      "Spot seed oils in restaurants, decode ingredient labels, and navigate packaged foods. Includes the complete PUFA database with 1,000+ foods rated.",
  },
  {
    icon: FlaskConical,
    title: "Run Personal Experiments",
    description:
      "Access 20 pre-designed n=1 experiments, from easy to advanced, then design your own tests and track the results systematically.",
  },
  {
    icon: ClipboardList,
    title: "Build Your Protocol",
    description:
      "Create a sustainable eating approach that fits your life, social calendar, and goals. It’s not dogma—it’s what works for your metabolism.",
  },
  {
    icon: Brain,
    title: "Question Everything",
    description:
      "Understand why nutrition science got it wrong, how to evaluate studies critically, and why your body’s data beats population studies.",
  },
  {
    icon: Activity,
    title: "Optimize Hormones Naturally",
    description:
      "Support thyroid function, boost testosterone, and balance hormones by removing metabolic blocks and giving your body what it needs.",
  },
];

const stats: { value: string; label: string; subLabel?: string }[] = [
  {
    value: "2,847",
    label: "Students Worldwide",
  },
  {
    value: "98.2°F",
    subLabel: "36.8°C",
    label: "Average Body Temp After 30 Days (°F / °C)",
  },
  {
    value: "94%",
    label: "Report Higher Energy",
  },
];

const modulePhases = [
  {
    eyebrow: "MODULES 1-3",
    title: "Destroy The Old Beliefs",
    items: [
      "Why everything you know is wrong (the sugar/obesity chart revelation)",
      "The PUFA problem (complete seed oil elimination guide)",
      "The sugar truth—and why glucose isn’t the enemy",
      "PUFA database with 1,000+ foods rated",
      "“Everything I Thought I Knew” reflection worksheet",
    ],
  },
  {
    eyebrow: "MODULES 4-7",
    title: "Learn By Doing",
    items: [
      "Reading temperature, pulse, and energy tracking",
      "7-day PUFA purge protocol",
      "The Experiment Library (20 pre-designed tests)",
      "Restaurant survival scripts",
      "30-day body signal tracking sheet",
      "Experiment tracker template",
    ],
  },
  {
    eyebrow: "MODULES 8-12",
    title: "Make It Sustainable",
    items: [
      "Build your personal protocol",
      "Navigate social situations and real life",
      "Supplements: what matters and what doesn’t",
      "The meditative practice of awareness",
      "The 90/10 rule for long-term maintenance",
      "Personal protocol template",
    ],
  },
];

const faqs = [
  {
    question: "Is this just another keto/low-carb diet?",
    answer:
      "No. Low-carb diets damage your thyroid and metabolism long-term. SugarSaint teaches you to use glucose strategically because your thyroid needs carbs to function. You’ll relearn the difference between strategic carbs (fruit, rice, potatoes) and processed junk (HFCS plus seed oils).",
  },
  {
    question: "Do I need to buy supplements?",
    answer:
      "No. Module 10 covers supplements, but the core message is food first. Most supplements are a waste of money. We focus on eliminating what’s damaging you (PUFAs) and adding what your body actually needs.",
  },
  {
    question: "What if I’m already eating “healthy”?",
    answer:
      "Most “healthy” diets include seed oils marketed as “heart-healthy”, fear of carbs, and restriction-based thinking. If your body temperature is below 98°F, if you have afternoon crashes, or if you’re cold all the time—your current approach isn’t working. SugarSaint helps you understand why.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most students report higher energy within 7-14 days of eliminating PUFAs. Body temperature increases typically show up in 3-4 weeks. Hormonal improvements take 6-12 weeks. Hair regrowth and other long-term benefits appear over months—this is healing, not a quick fix.",
  },
  {
    question: "Is this backed by science?",
    answer:
      "Yes—and we teach you to question “the science”. Most nutrition research is funded by food companies and designed to produce garbage results. We reference bioenergetic principles from Ray Peat PhD and real-world cellular biology, then help you run your own experiments. Your body’s response matters most.",
  },
  {
    question: "What if I have a specific health condition?",
    answer:
      "SugarSaint is educational, not medical advice. We teach principles—eliminate PUFAs, support thyroid, track body signals—not protocols for specific diseases. Work with your doctor if you have serious health issues, and remember: they probably told you to eat seed oils and avoid carbs. Question that, sugar.",
  },
];

const finalChecklist = [
  "Your personalized metabolic archetype",
  "Instant access to Module 1 (normally $47)",
  "Food & Feeling Journal template",
  "The sugar/obesity chart that changes everything",
  "Custom roadmap for your metabolism",
];

const navLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#pillars", label: "Principles" },
  { href: "#testimonials", label: "Results" },
  { href: "#modules", label: "Modules" },
  { href: "/quiz", label: "Quiz" },
];

function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 md:py-28 lg:py-32", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.32em] text-[#d4af37]",
        className,
      )}
    >
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const titleLines = title.split("\\n");

  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "mx-auto max-w-3xl text-center",
        align === "left" && "text-left",
      )}
    >
      {eyebrow && (
        <Eyebrow className={cn("mb-2", align === "center" && "mx-auto")}>{eyebrow}</Eyebrow>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-[#2c2c2c] sm:text-4xl">
        {titleLines.map((line, index) => (
          <span key={`${line}-${index}`} className={index > 0 ? "block" : undefined}>
            {line}
          </span>
        ))}
      </h2>
      {description && <p className="text-lg text-[#4a4a4a]">{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <SiteHeader />

      <Section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-36 md:pb-28 md:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/sugarsaint-hero-v2.png"
            alt="SugarSaint hero"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,251,245,0.88)_0%,_rgba(255,248,231,0.82)_35%,_rgba(255,243,212,0.72)_60%,_rgba(246,228,188,0.55)_82%,_rgba(214,173,55,0.32)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(255,255,255,0.72)_0%,_rgba(255,248,226,0.48)_38%,_rgba(255,236,194,0.32)_62%,_rgba(255,228,169,0.22)_100%)]" />
        </div>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:gap-14 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="max-w-xl space-y-7 sm:space-y-9">
            <Eyebrow className="text-[#b48f2a]">WHAT IF EVERYTHING WAS BACKWARDS?</Eyebrow>
            <h1 className="text-[2.5rem] font-semibold leading-[1.05] text-[#221d18] sm:text-5xl lg:text-6xl">
              Stop Blaming Sugar.
              <br />
              Start Trusting Your Body.
            </h1>
            <p className="text-lg text-[#3f3a33] sm:text-xl">
              The real enemy isn&apos;t carbs, sugar. It&apos;s the PUFAs they never warned you about. Discover the metabolic truth that 2,847 people use to reclaim their energy—and learn to trust your body over experts.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="px-10 text-base" asChild>
                <Link href="/quiz">Take The 2-Minute Quiz</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-10 text-base border-[#2c2c2c]/10 bg-white/70 text-[#2c2c2c] backdrop-blur hover:bg-white/90"
                asChild
              >
                <Link href="https://buy.polar.sh/polar_cl_8P7Z3TGPlCzXSgbJ0MNkG3HrYyVlcumvIjDMu3YLrwH" target="_blank" rel="noreferrer">
                  Buy The Full Course — $297
                </Link>
              </Button>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-sm text-[#4a4a4a] ring-1 ring-[#d4af37]/40 backdrop-blur">
              <Zap className="size-4 text-[#d4af37]" aria-hidden />
              <span>94% report higher energy within 30 days</span>
            </div>
          </div>
          <div className="hidden h-[420px] flex-1 lg:block" />
        </div>
      </Section>

      <Section id="problem" className="bg-white">
        <div className="space-y-10">
          <div className="mx-auto max-w-full overflow-hidden rounded-[32px] border border-[#efe4cf] bg-white shadow-[0_22px_60px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/sugar-obesity-chart.svg"
              alt="Sugar consumption falling while obesity rates climb"
              width={1600}
              height={720}
              className="h-full w-full object-cover"
            />
            <div className="w-full px-6 pb-6 pt-3">
              <p className="text-center text-xs uppercase tracking-[0.32em] text-[#9a8f7f]">
                Source: USDA Food Availability Data · Analysis by Stephan Guyenet, PhD
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <SectionHeading
              eyebrow="THE OLD GOSPEL WAS WRONG"
              title={`They told you sugar was poison.\\nThey sold you "heart-healthy" oils.\\nThey destroyed your metabolism.`}
              description="For 50 years, the nutrition establishment blamed sugar and carbs for metabolic disease—while seed oil consumption increased 1,000% in the American diet. The data tells a different story, honey."
            />
            <div className="space-y-5 text-base text-[#403930] sm:text-lg">
              <p>
                From 1999 to 2013, sugar consumption decreased by 23%. Obesity rates kept climbing. If sugar causes obesity, how do we explain that, sugar?
              </p>
              <p>
                In 1970, the American Heart Association told everyone to stop eating saturated fat—ditch butter, lard, and coconut oil. Replace it with &ldquo;heart-healthy&rdquo; vegetable oils. That&apos;s when the obesity epidemic started.
              </p>
              <p>
                The real enemy isn&apos;t glucose. It&apos;s the PUFAs—polyunsaturated fatty acids in seed oils—that damage your mitochondria and wreck thyroid function at the cellular level. Your body knows this. Time to listen.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="pillars" className="bg-[#fff8eb]">
        <div className="space-y-12 sm:space-y-16">
          <SectionHeading
            title="The Three Principles That Change Everything"
            description="This isn't another diet, sugar. It's a practice—a way of developing awareness and trust in your own body. Your body is the authority. Not experts. Not studies. Not gurus."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Card
                key={pillar.title}
                className="h-full border-[#efe4cf] bg-white/90 shadow-[0_16px_40px_rgba(26,16,4,0.08)] backdrop-blur"
              >
                <CardHeader className="space-y-6">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#d4af37]/15 text-[#d4af37]">
                    <pillar.icon className="size-6" aria-hidden />
                  </div>
                  <CardTitle className="text-xl text-[#2c2c2c]">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-[#4a4a4a]">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="testimonials">
        <div className="space-y-12 sm:space-y-16">
          <SectionHeading
            title="What Happens When You Heal Your Metabolism"
            align="center"
            description="Real students. Tangible results. No before-and-after body shots—just data your doctor can't ignore. This is what happens when you listen to your body instead of experts."
          />
          <div className="grid gap-6 sm:gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="relative h-full border-l-4 border-[#d4af37] bg-white/95 shadow-[0_18px_50px_rgba(159,121,29,0.12)]"
              >
                <CardContent className="space-y-5 pt-6">
                  <div className="flex items-center gap-3 text-[#d4af37]">
                    <Image
                      src="/gold-quote.svg"
                      alt="Gold decorative quote"
                      width={28}
                      height={28}
                      className="size-7"
                    />
                    <span className="text-sm uppercase tracking-[0.32em] text-[#b48f2a]">
                      SugarSaint
                    </span>
                  </div>
                  <p className="font-serif text-lg italic text-[#2c2c2c]">
                    “{testimonial.quote}”
                  </p>
                  <div className="text-sm font-medium text-[#5a534a]">
                    {testimonial.name} <span className="text-[#9a8f7f]">— {testimonial.role}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="modules" className="bg-white">
        <div className="space-y-12 sm:space-y-16">
          <SectionHeading
            title="What You'll Learn in 12 Modules"
            description="52,000 words of metabolic education. 42 downloadable resources. A complete system for reading your body, eliminating PUFAs, and building a protocol that actually works for YOU, sugar."
            align="center"
          />
          <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                className="h-full border-[#efe4cf] bg-[#fffdf8] shadow-[0_16px_40px_rgba(26,16,4,0.08)]"
              >
                <CardHeader className="space-y-4">
                  <div className="flex size-11 items-center justify-center rounded-full bg-[#d4af37]/12 text-[#d4af37]">
                    <benefit.icon className="size-5" aria-hidden />
                  </div>
                  <CardTitle className="text-lg text-[#2c2c2c]">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#4a4a4a]">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-10 sm:space-y-12">
            <SectionHeading
              eyebrow="WHAT'S INSIDE THE SUGARSAINT COURSE"
              title="12 modules. 52,000 words. 42 downloadable resources."
              description="Self-paced learning you can complete in 8-12 weeks—with guided experiments, trackers, and protocols ready for immediate implementation. Learn by doing, honey. Not by believing."
              align="center"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {modulePhases.map((phase) => (
                <Card
                  key={phase.title}
                  className="h-full border-[#efe4cf] bg-white/95 shadow-[0_16px_45px_rgba(26,16,4,0.08)]"
                >
                  <CardHeader className="space-y-3">
                    <Eyebrow className="text-[10px] text-[#b48f2a]">
                      {phase.eyebrow}
                    </Eyebrow>
                    <CardTitle className="text-xl text-[#2c2c2c]">{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-[#4a4a4a]">
                      {phase.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="relative mt-1.5 size-2 rounded-full bg-[#d4af37]" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-[32px] border border-[#f0d9ad] bg-white p-8 shadow-[0_28px_70px_rgba(198,150,39,0.16)] sm:p-10">
              <div className="space-y-6 text-center sm:space-y-7">
                <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#fff4df] px-4 py-2 text-sm font-semibold text-[#9c7a1f] shadow-[0_6px_18px_rgba(198,150,39,0.25)]">
                  <Gift className="size-4" aria-hidden />
                  Course investment: $297
                </div>
                <h3 className="text-2xl font-semibold text-[#2c2c2c]">
                  Take the 2-minute quiz and unlock Module 1 instantly.
                </h3>
                <p className="text-base text-[#4a4a4a]">
                  Start with Module 1 of the full $297 SugarSaint course—&ldquo;Take Stock + Why Everything You Know Is Wrong.&rdquo; Inside you&apos;ll get the Food &amp; Feeling Journal, the sugar/obesity chart, and a guided mindset reset from &ldquo;I know&rdquo; to &ldquo;I&apos;m experimenting.&rdquo;
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button size="lg" className="px-8 text-base" asChild>
                    <Link href="/quiz">Take The Quiz &amp; Get Module 1 Free</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 text-base"
                    asChild
                  >
                    <Link href="https://buy.polar.sh/polar_cl_8P7Z3TGPlCzXSgbJ0MNkG3HrYyVlcumvIjDMu3YLrwH" target="_blank" rel="noreferrer">
                      See Everything In The Course
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="results" className="bg-[#fff4df]">
        <div className="space-y-12 sm:space-y-16">
          <SectionHeading
            title="Proof That Metabolism Heals When You Remove PUFAs"
            description="Data from the community—not hypotheticals. Track your own numbers, add them to the scoreboard, and watch your physiology respond. Your body knows what to do when you stop damaging it."
            align="center"
          />
          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#f0d9ad] bg-white p-8 text-center shadow-[0_18px_45px_rgba(212,175,55,0.18)]"
              >
                <p className="text-5xl font-semibold text-[#2c2c2c]">{stat.value}</p>
                {stat.subLabel && (
                  <p className="text-sm font-medium text-[#9c7a1f]">{stat.subLabel}</p>
                )}
                <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[#6a6258]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="philosophy" className="bg-[#e8f0e8]">
        <div className="space-y-6 sm:space-y-8">
          <SectionHeading
            title="The SugarSaint Philosophy"
            description="Sacred minimalism meets metabolic science. Warm, credible, and grounded."
            align="center"
          />
          <blockquote className="mx-auto max-w-4xl space-y-3 rounded-3xl border border-[#ced9ce] bg-white/80 p-8 text-center font-serif text-lg text-[#2c2c2c] shadow-[0_18px_50px_rgba(37,56,34,0.12)] sm:space-y-4 sm:p-10 sm:text-xl">
            <p>
              “This isn’t a diet. It’s a practice—a way of developing awareness and trust in your own body.
            </p>
            <p>
              Your body is the authority. Not experts. Not studies. Not gurus.
            </p>
            <p>
              When you eliminate PUFAs and provide adequate glucose, your metabolism can finally do what it’s designed to do: produce optimal thyroid hormones, synthesize testosterone, maintain healthy body temperature, and support every cell in your body.
            </p>
            <p>This isn’t biohacking. It’s removing the blocks.”</p>
            <footer className="text-sm uppercase tracking-[0.3em] text-[#9a8f7f]">
              — The SugarSaint Philosophy
            </footer>
          </blockquote>
        </div>
      </Section>

      <Section id="faq">
        <div className="space-y-12 sm:space-y-16">
          <SectionHeading
            title="Questions You Probably Have"
            description="Click to expand, sugar. Each answer is direct, contrarian, and grounded in cellular biology—not population studies or corporate-funded research."
            align="center"
          />
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="rounded-2xl border border-[#efe4cf] bg-white px-6"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-medium text-[#2c2c2c]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm text-[#4a4a4a]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      <Section id="time-capsule" className="bg-gradient-to-br from-[#fff6e6] via-[#fffbf5] to-[#fff2d8]">
        <TimeCapsuleCTA />
      </Section>

      <Section id="quiz" className="py-14 sm:py-16 md:py-20">
        <div className="relative overflow-hidden rounded-[24px] border border-[#efe4cf] bg-gradient-to-br from-[#fff6e6] via-[#fffbf5] to-[#fff2d8] p-8 shadow-[0_28px_80px_rgba(198,150,39,0.16)] sm:rounded-[32px] sm:p-10 md:p-14">
          <div className="absolute -top-20 right-[-60px] hidden size-[220px] rounded-full bg-[#d4af37]/25 blur-3xl sm:block" aria-hidden />
          <div className="space-y-6 text-center sm:space-y-7">
            <Eyebrow className="mx-auto">READY TO HEAL YOUR METABOLISM?</Eyebrow>
            <h2 className="text-3xl font-semibold text-[#2c2c2c] sm:text-4xl md:text-5xl">
              Start with the 2-minute quiz, honey.
            </h2>
            <p className="mx-auto max-w-2xl text-base text-[#4a4a4a] sm:text-lg">
              Discover your metabolic archetype and get Module 1 completely free. No credit card required. Just your email and 2 minutes. Your body is waiting, sugar.
            </p>
            <div className="mx-auto max-w-md space-y-2 text-left text-sm text-[#4a4a4a] sm:space-y-3 sm:text-base">
              {finalChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 text-[#d4af37]" aria-hidden />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button size="lg" className="w-full px-8 text-sm sm:w-auto sm:px-10 sm:text-base" asChild>
                  <Link href="/quiz">
                    Take The Free Quiz Now
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full px-8 text-sm sm:w-auto sm:px-10 sm:text-base"
                  asChild
                >
                  <Link href="https://buy.polar.sh/polar_cl_8P7Z3TGPlCzXSgbJ0MNkG3HrYyVlcumvIjDMu3YLrwH" target="_blank" rel="noreferrer">
                    Buy The Full Course ($297)
                  </Link>
                </Button>
              </div>
              <p className="text-center text-xs text-[#6a6258] sm:text-sm">
                Join 2,847 people healing their metabolism • 12,847 quizzes taken • No spam, ever
              </p>
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-[#efe4cf] bg-white/95">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2 text-center lg:text-left">
            <Link href="#top" className="text-xl font-semibold text-[#2c2c2c]">
              SugarSaint
            </Link>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-[#4a4a4a]">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-[#d4af37]">
                {link.label}
              </Link>
            ))}
            <Link href="mailto:hello@sugarsaint.com" className="transition-colors hover:text-[#d4af37]">
              hello@sugarsaint.com
            </Link>
          </nav>
        </div>
        <div className="border-t border-[#efe4cf] bg-[#fffbf5]/90 py-4 text-center text-xs text-[#9a8f7f]">
          © {new Date().getFullYear()} SugarSaint. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
