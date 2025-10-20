import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Privacy Policy — SugarSaint",
  description: "SugarSaint privacy policy and cookie usage information.",
};

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-[#efe4cf]/70 bg-[#fffbf5]/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-semibold text-[#2c2c2c]">
            SugarSaint
          </Link>
          <Button variant="ghost" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-semibold text-[#2c2c2c] sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-[#4a4a4a]">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-2xl font-semibold text-[#2c2c2c]">Cookie Usage</h2>
            <p className="text-[#4a4a4a]">
              We use cookies to enhance your browsing experience and analyze site traffic. Here&apos;s what you need to know, sugar:
            </p>

            <h3 className="text-xl font-semibold text-[#2c2c2c]">Essential Cookies</h3>
            <p className="text-[#4a4a4a]">
              These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
            </p>

            <h3 className="text-xl font-semibold text-[#2c2c2c]">Analytics Cookies</h3>
            <p className="text-[#4a4a4a]">
              We use analytics cookies to understand how visitors interact with our website. This helps us improve the user experience and create better content for you.
            </p>

            <h2 className="text-2xl font-semibold text-[#2c2c2c]">Information We Collect</h2>
            <p className="text-[#4a4a4a]">
              When you take the quiz or sign up for the course, we collect:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-[#4a4a4a]">
              <li>Email address</li>
              <li>Name (if provided)</li>
              <li>Quiz responses (to personalize your experience)</li>
              <li>Usage data (pages visited, time spent on site)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#2c2c2c]">How We Use Your Information</h2>
            <p className="text-[#4a4a4a]">
              We use your information to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-[#4a4a4a]">
              <li>Provide access to the course materials</li>
              <li>Send you Module 1 and course updates</li>
              <li>Improve our content and user experience</li>
              <li>Respond to your questions and support requests</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#2c2c2c]">Data Protection</h2>
            <p className="text-[#4a4a4a]">
              Your body&apos;s data is yours. Your browser data should be too. We take data protection seriously and use industry-standard security measures to protect your personal information.
            </p>

            <h2 className="text-2xl font-semibold text-[#2c2c2c]">Third-Party Services</h2>
            <p className="text-[#4a4a4a]">
              We may use third-party services for analytics and email delivery. These services have their own privacy policies, and we encourage you to review them.
            </p>

            <h2 className="text-2xl font-semibold text-[#2c2c2c]">Your Rights</h2>
            <p className="text-[#4a4a4a]">
              You have the right to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-[#4a4a4a]">
              <li>Access your personal data</li>
              <li>Request correction of your data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#2c2c2c]">Contact Us</h2>
            <p className="text-[#4a4a4a]">
              If you have questions about this privacy policy or how we handle your data, reach out to us at{" "}
              <a href="mailto:hello@sugarsaint.com" className="font-medium text-[#d4af37] hover:text-[#c29f2f]">
                hello@sugarsaint.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-auto border-t border-[#efe4cf] bg-white/95">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="text-xl font-semibold text-[#2c2c2c] hover:text-[#d4af37]">
              SugarSaint
            </Link>
          </div>
        </div>
        <div className="border-t border-[#efe4cf] bg-[#fffbf5]/90 py-4 text-center text-xs text-[#9a8f7f]">
          © {new Date().getFullYear()} SugarSaint. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
