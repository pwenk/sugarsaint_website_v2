# SugarSaint Quiz - Migration Guide

This package contains the complete qualification quiz feature. Follow these steps to migrate it to your v2 project.

---

## 📦 What's Included

```
quiz-feature-migration/
├── lib/
│   ├── quiz/                # Quiz logic (questions, scoring, types)
│   └── resend.ts           # Resend client config
├── components/
│   └── quiz/               # Quiz UI components (6 components)
├── app/
│   ├── quiz/               # Quiz pages (landing, questions, email, results)
│   └── api/quiz/           # API route for submission
├── tests/                  # 5 E2E test files
├── docs/
│   └── IMPLEMENTATION_SUMMARY.md  # Full technical documentation
├── .env.local.example      # Environment variables template
└── MIGRATION_GUIDE.md      # This file
```

---

## 🚀 Migration Steps

### Step 1: Copy Files to v2 Project

```bash
# Navigate to your v2 project
cd /path/to/sugarsaint-v2

# Copy quiz library files
cp -r /path/to/quiz-feature-migration/lib/quiz ./lib/
cp /path/to/quiz-feature-migration/lib/resend.ts ./lib/

# Copy quiz components
cp -r /path/to/quiz-feature-migration/components/quiz ./components/

# Copy quiz pages
cp -r /path/to/quiz-feature-migration/app/quiz ./app/
mkdir -p ./app/api
cp -r /path/to/quiz-feature-migration/app/api/quiz ./app/api/

# Copy tests (optional but recommended)
cp -r /path/to/quiz-feature-migration/tests/* ./tests/

# Copy docs
cp -r /path/to/quiz-feature-migration/docs ./quiz-docs
```

**OR use this single command from your v2 project root:**

```bash
# Set source path
SOURCE="/Users/patrick/Library/CloudStorage/Dropbox/Mac/Documents/vibe/sugarsaint/quiz-feature-migration"

# Copy everything
cp -r "$SOURCE/lib/quiz" ./lib/
cp "$SOURCE/lib/resend.ts" ./lib/
cp -r "$SOURCE/components/quiz" ./components/
cp -r "$SOURCE/app/quiz" ./app/
mkdir -p ./app/api
cp -r "$SOURCE/app/api/quiz" ./app/api/
cp "$SOURCE/tests/"* ./tests/ 2>/dev/null || true
```

---

### Step 2: Install Dependencies

```bash
npm install resend
```

**Note:** All other dependencies (React Hook Form, Zod, shadcn/ui components) should already be in your v2 project. If not, check `package.json` and install as needed.

---

### Step 3: Set Up Environment Variables

Copy `.env.local.example` to your v2 project:

```bash
cp .env.local.example /path/to/sugarsaint-v2/.env.local
```

Then add your Resend credentials:

```bash
RESEND_API_KEY=re_your_api_key_here
RESEND_AUDIENCE_ID=aud_your_audience_id_here
```

---

### Step 4: Update Homepage Links (v2 Project)

Find all quiz CTAs in your v2 homepage and update links to `/quiz`:

**Search for:**
- `#quiz`
- `forms.sugarsaint.com/quiz`
- Any external quiz links

**Replace with:**
- `/quiz`

**Example:**
```tsx
// Before
<Link href="#quiz">Take the Quiz</Link>

// After
<Link href="/quiz">Take the Quiz</Link>
```

---

### Step 5: Update Sender Email in API Route

Edit `app/api/quiz/submit/route.ts` line 50:

```typescript
from: 'SugarSaint <[email protected]>',
```

Change to your verified Resend sender email.

---

### Step 6: Verify shadcn/ui Components

The quiz uses these shadcn/ui components:
- Button
- Card
- Input
- Label
- RadioGroup
- Checkbox

**Check they exist in your v2 project:**
```bash
ls components/ui/{button,card,input,label,radio-group,checkbox}.tsx
```

**If any are missing, add them:**
```bash
npx shadcn@latest add button card input label radio-group checkbox
```

---

### Step 7: Test in v2 Project

```bash
# Start dev server
npm run dev

# Visit quiz
open http://localhost:3000/quiz

# Run validations
npm run lint
npm run typecheck
npm run build

# Run E2E tests (optional)
npx playwright test
```

---

## 🎨 Brand Consistency Check

The quiz uses these SugarSaint brand colors:
- Sacred Gold: `#d4af37`
- Pure Cream: `#fffbf5`
- Deep Charcoal: `#2c2c2c`
- Honey Amber: `#FFB84D`

**Verify these match your v2 project's theme** in `app/globals.css`:

```css
:root {
  --primary: #d4af37;        /* Sacred Gold */
  --background: #fffbf5;     /* Pure Cream */
  --foreground: #2c2c2c;     /* Deep Charcoal */
}
```

If colors differ, update quiz components to match v2 branding.

---

## 🔧 Configuration Differences to Check

### 1. TypeScript Config
If you get import errors, verify `tsconfig.json` has:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### 2. Tailwind Config
Verify Tailwind v4 is configured in `app/globals.css`:
```css
@import "tailwindcss";
```

### 3. Next.js Version
Quiz was built with Next.js 15.3.3. If v2 uses different version, test thoroughly.

---

## 📋 Post-Migration Checklist

- [ ] Files copied to correct locations
- [ ] `resend` package installed
- [ ] Environment variables set in `.env.local`
- [ ] Sender email updated in API route
- [ ] Homepage links updated to `/quiz`
- [ ] shadcn/ui components verified
- [ ] Lint/typecheck/build passes
- [ ] Quiz tested in browser (all 3 outcomes)
- [ ] Test email sent and received
- [ ] Mobile responsive verified

---

## 🚨 Common Issues

**Issue: TypeScript errors on imports**
- Check `@/` path alias in `tsconfig.json`
- Verify file structure matches exactly

**Issue: Styles look different**
- Check if v2 uses same Tailwind v4 setup
- Verify CSS variables in `globals.css`
- Check if shadcn/ui theme matches

**Issue: API route not found**
- Verify `app/api/quiz/submit/route.ts` exists
- Check Next.js App Router is enabled
- Restart dev server

**Issue: Email not sending**
- Check Resend API key in `.env.local`
- Verify sender email is verified in Resend
- Check browser console for errors

---

## 📖 Full Documentation

See `docs/IMPLEMENTATION_SUMMARY.md` for:
- Complete technical architecture
- Scoring algorithm details
- Testing procedures
- Deployment guide

---

## ✅ Success Criteria

Quiz is successfully migrated when:
- ✅ `/quiz` loads without errors
- ✅ All 7 questions can be completed
- ✅ Email capture works
- ✅ All 3 result pages display correctly
- ✅ Test email received in inbox
- ✅ Build passes without errors
- ✅ Mobile responsive

---

## 🆘 Need Help?

If you encounter issues:
1. Check `IMPLEMENTATION_SUMMARY.md` for troubleshooting
2. Verify all files copied correctly
3. Check browser console for errors
4. Run `npm run build` to see build errors

---

**Migration Time Estimate:** 15-30 minutes
**Difficulty:** Easy (mostly copy/paste)

Good luck with the migration, sugar! 🎉
