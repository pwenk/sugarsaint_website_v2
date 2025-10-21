import type { Metadata } from "next";
import { Crimson_Pro, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/cookie-banner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const crimson = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sugarsaint.com"),
  title: "SugarSaint — Heal Your Metabolism",
  description:
    "Stop blaming sugar. Start trusting your body with the SugarSaint metabolic practice. Take the 2-minute quiz and access Module 1 for free.",
  // Favicon is automatically handled by app/icon.svg (sugar cube only)
  openGraph: {
    title: "SugarSaint — Heal Your Metabolism",
    description:
      "Stop blaming sugar. Start trusting your body with the SugarSaint metabolic practice. Take the 2-minute quiz and access Module 1 for free.",
    url: "https://sugarsaint.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SugarSaint — Heal Your Metabolism",
    description:
      "Discover the metabolic truth that 2,847 people use to reclaim their energy. Quiz-first funnel with Module 1 free.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${crimson.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
