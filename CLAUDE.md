# CLAUDE.md - SugarSaint Marketing Website

This file provides guidance to Claude Code when working with the SugarSaint marketing website.

## Project Overview

This is the **SugarSaint marketing website** built with Next.js 15, React 19, and Tailwind CSS. The website serves as the landing page and sales funnel for the SugarSaint metabolic health course.

**Purpose:**
- Convert visitors into course customers
- Communicate the SugarSaint philosophy and approach
- Build trust through content and social proof
- Handle course sales and user onboarding

**Tech Stack:**
- Next.js 15.3.3 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Shadcn/ui components
- Supabase (planned for backend)

**URLs:**
- **Canonical URL:** `sugarsaint.bio` (marketing website)
- **Course Platform:** `course.sugarsaint.bio` (course content delivery)

## Project Structure

```
sugarsaint_website_v2/
├── app/                           # Next.js App Router
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles
│   └── privacy/                  # Privacy policy page
├── components/
│   ├── cookie-banner.tsx         # Cookie consent component
│   └── ui/                       # Shadcn/ui components
├── public/
│   ├── images/                   # Hero images, logos, charts
│   └── *.svg                     # SVG assets
├── lib/
│   └── utils.ts                  # Utility functions
├── hooks/
│   └── use-mobile.ts             # Mobile detection hook
├── logov2/                       # Logo variations
├── sugarsaint_logo_v3/           # Latest logo files
├── DESIGN-SYSTEM.md              # Complete SugarSaint design system
├── FRAMER-COPY.md                # Marketing copy and funnel strategy
├── package.json                  # Dependencies
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
└── CLAUDE.md                     # This file
```

## Marketing Website Structure

### Current Pages
1. **Homepage** (`/`) - Hero, problem statement, solution, CTA
2. **Privacy Policy** (`/privacy`) - Cookie consent and privacy information

### Planned Pages (from FRAMER-COPY.md)
1. **Hero Section** - Contrarian hook about sugar not being the enemy
2. **The Real Problem** - PUFA as the hidden metabolic disruptor
3. **The SugarSaint Method** - 3-step system (Eliminate, Experiment, Personalize)
4. **What You'll Get** - Course modules overview with deliverables
5. **Creator Story** - Personal transformation and credibility
6. **Testimonials** - Social proof (when available)
7. **Pricing** - $297-497 options with payment plans
8. **FAQ** - Objection handling
9. **Final CTA** - Conversion section

## SugarSaint Brand Design System

**Full Documentation:** See `DESIGN-SYSTEM.md`

### Core Brand Colors
- **Sacred Gold:** `#D4AF37` (primary CTAs, accents)
- **Pure Cream:** `#FFFBF5` (backgrounds, light sections)
- **Deep Charcoal:** `#2C2C2C` (text, headers, dark sections)
- **Honey Amber:** `#FFB84D` (secondary accents, highlights)

### Typography
- **Font Family:** Inter (Google Fonts)
- **Headings:** Weight 600 (Semi-Bold)
- **Body:** Weight 400 (Regular)

### Type Scale
- Display: 72px / 4.5rem (landing hero)
- H1: 56px / 3.5rem
- H2: 40px / 2.5rem
- H3: 32px / 2rem
- H4: 24px / 1.5rem
- H5: 20px / 1.25rem
- Body Large: 18px / 1.125rem
- Body: 16px / 1rem
- Body Small: 14px / 0.875rem
- Eyebrow: 12px / 0.75rem (uppercase, letter-spacing: 0.05em)

### Spacing System
Base: 8px grid
- xs: 4px (0.25rem)
- sm: 8px (0.5rem)
- md: 16px (1rem)
- lg: 24px (1.5rem)
- xl: 32px (2rem)
- 2xl: 48px (3rem)
- 3xl: 64px (4rem)
- 4xl: 96px (6rem)
- 5xl: 128px (8rem)

### Design Philosophy
"Sacred minimalism meets metabolic science"
- Apple-style minimalism
- Goop wellness aesthetic
- Divine gold accents on pure cream
- Spacious, breathable layouts
- High-quality imagery with subtle grain texture

## Development Workflow

### Local Development

```bash
# Install dependencies (first time)
cd /Users/patrick/documents/vibe/sugarsaint_website_v2
npm install

# Start dev server
npm run dev
# Opens at http://localhost:3000

# Type checking
npm run typecheck

# Build for production
npm run build

# Start production server
npm start

# Run tests
npm run test
```

### Key Dependencies

**UI Framework:**
- Next.js 15 with App Router and Turbopack
- React 19
- TypeScript

**Styling:**
- Tailwind CSS 4 with PostCSS
- Shadcn/ui component library (Radix UI primitives)
- `lucide-react` for icons
- `next-themes` for dark mode

**Form Handling:**
- `react-hook-form` with `zod` validation
- `@hookform/resolvers`

**Additional Features:**
- `embla-carousel-react` for carousels
- `recharts` for data visualization
- `sonner` for toast notifications
- `date-fns` for date formatting

## Component Library (Shadcn/ui)

All UI components are in `components/ui/`. These are Shadcn/ui components:

**IMPORTANT:** Never add custom components to `components/ui/`. Only Shadcn components go here.

Available components:
- accordion, alert-dialog, alert, aspect-ratio, avatar
- badge, breadcrumb, button, calendar, card, carousel
- checkbox, collapsible, command, context-menu
- dialog, drawer, dropdown-menu, form
- hover-card, input-otp, input, label
- menubar, navigation-menu, pagination, popover
- progress, radio-group, resizable, scroll-area
- select, separator, sheet, sidebar, skeleton
- slider, sonner, switch, table, tabs
- textarea, toggle-group, toggle, tooltip

**Adding new Shadcn components:**
```bash
npx shadcn-ui@latest add [component-name]
```

## Marketing Copy Strategy

See `FRAMER-COPY.md` for complete funnel strategy.

**Key Messaging:**
1. **Contrarian Hook:** "Sugar isn't the enemy—this is"
2. **Real Problem:** PUFAs (seed oils) are the metabolic disruptor
3. **Solution:** Elimination + experimentation + personalization
4. **Authority:** Evidence-based but practical, anti-dogma
5. **Trust:** Body signals > studies, self-experimentation

**Tone:**
- Direct, conversational, no BS
- Contrarian but evidence-based
- Empowering (you're your own authority)
- Practical > theoretical
- Anti-dogma, anti-perfectionism

## Conversion Funnel

**Primary Funnel (from FRAMER-COPY.md):**
1. **Awareness:** Contrarian hook (sugar isn't the problem)
2. **Interest:** Introduce PUFA as real enemy
3. **Desire:** Show the method (eliminate, experiment, personalize)
4. **Action:** Course sale ($297-497)

**CTAs:**
- Primary: "Get the Course" / "Start Your Transformation"
- Secondary: "Download Free Guide" (lead magnet)
- Tertiary: "Watch Free Training" (video sales letter)

## GitHub & Deployment

**GitHub Repository:** `https://github.com/pwenk/sugarsaint_website_v2`
**Git User:** patrick.k.wenk@gmail.com (Patrick Wenk)

**Deployment Options:**
- Vercel (recommended for Next.js)
- Netlify
- Custom hosting

```bash
# Standard git workflow
git add .
git commit -m "Description of changes"
git push
```

## Backend (Planned)

**Supabase Integration:**
- User authentication
- Course access management
- Progress tracking
- Payment processing (via Stripe)

Configuration in `supabase/config.toml`

## What We've Built

### ✅ Completed
1. **Next.js Setup** - App Router with TypeScript
2. **Shadcn/ui Components** - Full component library installed
3. **Brand Design System** - Complete design documentation
4. **Marketing Copy Strategy** - Funnel and messaging framework
5. **Basic Pages** - Homepage structure, privacy policy
6. **Cookie Banner** - GDPR-compliant consent component

### 🔨 To Be Built
1. **Complete Homepage Sections** (from FRAMER-COPY.md):
   - Hero with contrarian hook
   - Problem section (PUFA reveal)
   - Solution section (3-step method)
   - Course overview with modules
   - Creator story
   - Testimonials
   - Pricing section
   - FAQ
   - Final CTA

2. **Additional Pages:**
   - Sales page (long-form)
   - Course access portal (after purchase)
   - Quiz/assessment tool
   - Blog (content marketing)

3. **Backend Features:**
   - User authentication
   - Payment processing
   - Course content delivery
   - Progress tracking

4. **Marketing:**
   - Email sequence integration
   - Lead magnet (free guide)
   - Video sales letter
   - Social proof collection

## Design Implementation Notes

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl), 1536px (2xl)
- Test all sections on mobile, tablet, desktop

### Performance
- Image optimization with Next.js `<Image>`
- Lazy loading for below-fold content
- Minimize JavaScript bundle size
- Use server components where possible

### Accessibility
- Semantic HTML
- ARIA labels for interactive elements
- Keyboard navigation
- Color contrast ratio 4.5:1 minimum
- Alt text for all images

### SEO
- Meta tags in layout.tsx
- Open Graph tags for social sharing
- JSON-LD structured data
- Sitemap and robots.txt

## Common Commands

```bash
# Development
npm run dev              # Start dev server with Turbopack
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint
npm run typecheck       # TypeScript type checking

# Testing
npm run test            # Run Playwright tests

# Component Management
npx shadcn-ui@latest add [component]  # Add new Shadcn component

# Git
git status
git add .
git commit -m "message"
git push
```

## Project Relationship

This website works alongside the **SugarSaint Course Documentation** (Mintlify project):

- **Website (this project):** Marketing, sales, user onboarding
- **Mintlify Docs:** Course content delivery, student learning experience

Both projects share:
- `DESIGN-SYSTEM.md` - Brand consistency
- Logo files - Visual identity
- Course philosophy and messaging

## Notes for Future Development

### When Building New Pages:
1. Follow design system colors and typography
2. Use Shadcn/ui components for consistency
3. Implement responsive design from the start
4. Add proper TypeScript types
5. Test on mobile, tablet, desktop

### When Adding Components:
1. Check if Shadcn/ui has it first
2. If custom, put in `components/` (NOT `components/ui/`)
3. Use Tailwind for styling (avoid CSS modules)
4. Make components reusable and typed

### When Integrating Backend:
1. Set up Supabase project
2. Configure environment variables
3. Create database schema
4. Implement authentication flow
5. Add protected routes

---

**Last Updated:** 2025-10-20
**Project Status:** Initial setup complete, homepage build in progress
**Next Steps:** Implement complete homepage sections per FRAMER-COPY.md strategy
