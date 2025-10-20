"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-5 duration-500">
      <div className="mx-auto max-w-7xl p-4 sm:p-6">
        <div className="relative overflow-hidden rounded-2xl border border-[#efe4cf] bg-[#fffbf5]/95 p-6 shadow-[0_20px_60px_rgba(212,175,55,0.25)] backdrop-blur-lg sm:p-8">
          {/* Decorative background gradient */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#d4af37]/5 to-transparent" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#2c2c2c] sm:text-xl">
                    We use cookies, sugar
                  </h3>
                  <p className="mt-2 text-sm text-[#4a4a4a] sm:text-base">
                    We use cookies to improve your experience and analyze site traffic. Your body&apos;s data is yours—your browser data should be too. Choose what works for you.
                  </p>
                </div>
                <button
                  onClick={declineCookies}
                  className="shrink-0 rounded-full p-1 text-[#9a8f7f] transition-colors hover:bg-[#efe4cf] hover:text-[#2c2c2c] sm:hidden"
                  aria-label="Decline cookies"
                >
                  <X className="size-5" />
                </button>
              </div>

              <Link
                href="/privacy"
                className="inline-flex text-sm font-medium text-[#d4af37] transition-colors hover:text-[#c29f2f]"
              >
                View our Privacy Policy
              </Link>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                variant="outline"
                onClick={declineCookies}
                className="order-2 border-[#efe4cf] bg-white/70 text-[#2c2c2c] hover:bg-white/90 sm:order-1"
              >
                Decline
              </Button>
              <Button
                onClick={acceptCookies}
                className="order-1 bg-[#d4af37] text-[#2c2c2c] hover:bg-[#c29f2f] sm:order-2"
              >
                Accept All Cookies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
