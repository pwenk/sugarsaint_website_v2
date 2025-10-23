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

const navLinks = [
  { href: "/#problem", label: "Problem" },
  { href: "/#pillars", label: "Principles" },
  { href: "/#testimonials", label: "Results" },
  { href: "/#modules", label: "Modules" },
  { href: "/quiz", label: "Quiz" },
];

// Main content pillars organized by topic
const contentPillars = [
  {
    title: "Understanding PUFAs",
    description: "Why seed oils matter and how they affect metabolism",
    articles: [
      { title: "PUFAs & Metabolism", href: "/blog?cluster=PUFAs+%26+Metabolism" },
      { title: "Sugar & Obesity Myth", href: "/blog?cluster=Sugar+%26+Obesity+Myth" },
    ],
  },
  {
    title: "Hormone Health",
    description: "Thyroid, testosterone, and reproductive hormones",
    articles: [
      { title: "Thyroid Health", href: "/blog?cluster=Thyroid+Health+%26+Hormones" },
      { title: "Women's Hormones", href: "/blog?cluster=Women%27s+Hormones" },
      { title: "Men's Health", href: "/blog?cluster=Testosterone+%26+Men%27s+Health" },
    ],
  },
  {
    title: "Self-Tracking",
    description: "Measure and experiment with your metabolism",
    articles: [
      { title: "Temperature & Pulse", href: "/blog?cluster=Temperature+%26+Pulse+Tracking" },
      { title: "Experiments", href: "/blog?cluster=Experiments+%26+Self-Tracking" },
    ],
  },
  {
    title: "Practical Guide",
    description: "Real-world implementation and food choices",
    articles: [
      { title: "Food Labels", href: "/blog?cluster=Restaurant+Survival+%26+Food+Labeling" },
      { title: "Digestion & Gut", href: "/blog?cluster=Digestion+%26+Gut" },
      { title: "Sleep Quality", href: "/blog?cluster=Sleep" },
    ],
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
                    <div className="w-[340px] p-3">
                      <Link
                        href="/blog"
                        className="mb-2 block rounded-md bg-gradient-to-b from-[#fffbf5] to-[#fff4df] p-3 text-sm font-semibold text-[#2c2c2c] no-underline outline-none transition-colors hover:bg-[#fff4df]"
                      >
                        All Articles →
                      </Link>
                      <div className="space-y-3 pt-2">
                        {contentPillars.map((pillar) => (
                          <div key={pillar.title} className="space-y-1">
                            <div className="px-2 pb-1">
                              <h4 className="text-xs font-semibold uppercase tracking-wide text-[#d4af37]">
                                {pillar.title}
                              </h4>
                            </div>
                            {pillar.articles.map((article) => (
                              <Link
                                key={article.href}
                                href={article.href}
                                className="block rounded-md px-2 py-1 text-xs text-[#4a4a4a] transition-colors hover:bg-[#fff4df] hover:text-[#2c2c2c]"
                              >
                                {article.title}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
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
