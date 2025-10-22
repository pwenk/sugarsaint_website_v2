"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#problem", label: "Problem" },
  { href: "/#pillars", label: "Principles" },
  { href: "/#testimonials", label: "Results" },
  { href: "/#modules", label: "Modules" },
  { href: "/quiz", label: "Quiz" },
];

const contentPillars = [
  {
    title: "PUFAs & Metabolism",
    href: "/blog?cluster=PUFAs+%26+Metabolism",
    description: "How seed oils suppress metabolic rate and energy production",
  },
  {
    title: "Thyroid Health",
    href: "/blog?cluster=Thyroid+Health+%26+Hormones",
    description: "Understanding thyroid function and metabolic signals",
  },
  {
    title: "Temperature & Pulse",
    href: "/blog?cluster=Temperature+%26+Pulse+Tracking",
    description: "Master body signal tracking for metabolic health",
  },
  {
    title: "Women's Hormones",
    href: "/blog?cluster=Women%27s+Hormones",
    description: "How PUFAs affect estrogen, progesterone, and cycles",
  },
  {
    title: "Men's Health",
    href: "/blog?cluster=Testosterone+%26+Men%27s+Health",
    description: "Testosterone optimization and metabolic function",
  },
  {
    title: "Food & Labeling",
    href: "/blog?cluster=Restaurant+Survival+%26+Food+Labeling",
    description: "Identify hidden PUFAs and navigate real-world eating",
  },
  {
    title: "Digestion & Gut",
    href: "/blog?cluster=Digestion+%26+Gut",
    description: "How seed oils damage gut lining and microbiome",
  },
  {
    title: "Sleep",
    href: "/blog?cluster=Sleep",
    description: "Temperature rhythm and metabolic effects on sleep",
  },
  {
    title: "Sugar & Obesity",
    href: "/blog?cluster=Sugar+%26+Obesity+Myth",
    description: "The real cause of obesity (hint: it's not sugar)",
  },
  {
    title: "Experiments",
    href: "/blog?cluster=Experiments+%26+Self-Tracking",
    description: "Practical protocols for self-experimentation",
  },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#efe4cf]/70 bg-[#fffbf5]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-[#2c2c2c]">
          <Image
            src="/images/sugarsaint-logo.png"
            alt="SugarSaint logo"
            width={170}
            height={60}
            priority
          />
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-6 text-sm font-medium text-[#4a4a4a]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#d4af37]"
              >
                {link.label}
              </Link>
            ))}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-[#4a4a4a] hover:bg-transparent hover:text-[#d4af37]">
                    Blog
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      <Link
                        href="/blog"
                        className="group col-span-2 flex flex-col justify-end rounded-md bg-gradient-to-b from-[#fffbf5] to-[#fff4df] p-6 no-underline outline-none transition-colors hover:bg-[#fff4df] focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-semibold text-[#2c2c2c]">
                          All Articles
                        </div>
                        <p className="text-sm leading-tight text-[#4a4a4a]">
                          Browse all blog posts about metabolic health, PUFAs, and
                          self-experimentation
                        </p>
                      </Link>
                      {contentPillars.map((pillar) => (
                        <Link
                          key={pillar.href}
                          href={pillar.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#fff4df] focus:bg-[#fff4df]"
                          )}
                        >
                          <div className="text-sm font-semibold leading-none text-[#2c2c2c]">
                            {pillar.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-[#4a4a4a]">
                            {pillar.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="px-5 text-sm font-semibold text-[#2c2c2c]"
              asChild
            >
              <Link href="/quiz">Free Quiz</Link>
            </Button>
            <Button
              size="sm"
              className="bg-[#2c2c2c] px-5 text-sm font-semibold text-white hover:bg-[#433c36]"
              asChild
            >
              <Link
                href="https://buy.polar.sh/polar_cl_8P7Z3TGPlCzXSgbJ0MNkG3HrYyVlcumvIjDMu3YLrwH"
                target="_blank"
                rel="noreferrer"
              >
                Buy for $297
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <Button size="sm" className="px-4" asChild>
            <Link href="/quiz">Quiz</Link>
          </Button>
          <Button size="sm" variant="outline" className="px-4" asChild>
            <Link href="/blog">Blog</Link>
          </Button>
          <Button size="sm" variant="outline" className="px-4" asChild>
            <Link
              href="https://buy.polar.sh/polar_cl_8P7Z3TGPlCzXSgbJ0MNkG3HrYyVlcumvIjDMu3YLrwH"
              target="_blank"
              rel="noreferrer"
            >
              Buy
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
