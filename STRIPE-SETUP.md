# Stripe Payment Integration Setup

This guide walks you through setting up Stripe payments for the SugarSaint course ($297 one-time payment).

## Overview

The integration includes:
- Stripe Checkout for secure payment processing
- $297 one-time payment for course enrollment
- Payment success/cancel pages
- Automatic email capture integration
- Test mode and production mode support

## Prerequisites

1. A Stripe account (sign up at https://stripe.com)
2. Stripe CLI installed (optional but recommended for testing)
3. Your `.env.local` file configured with Stripe keys

---

## Step 1: Create Your Stripe Account

1. Go to https://stripe.com and sign up
2. Complete your account setup
3. You'll start in **Test Mode** (recommended for development)

---

## Step 2: Get Your API Keys

1. Go to https://dashboard.stripe.com/apikeys
2. Copy your **Publishable key** (starts with `pk_test_`)
3. Copy your **Secret key** (starts with `sk_test_`)

**IMPORTANT:** Never commit your secret key to git!

---

## Step 3: Create the Course Product & Price

You have two options: **Stripe CLI** (recommended) or **Stripe Dashboard** (manual).

### Option A: Using Stripe CLI (Recommended)

#### Install Stripe CLI

**macOS:**
```bash
brew install stripe/stripe-cli/stripe
```

**Windows:**
```bash
scoop bucket add stripe https://github.com/stripe/scoop-stripe-cli.git
scoop install stripe
```

**Linux:**
Download from https://github.com/stripe/stripe-cli/releases

#### Login to Stripe

```bash
stripe login
```

This will open your browser to authenticate.

#### Create Product

```bash
stripe products create \
  --name="SugarSaint Course" \
  --description="Complete metabolic health transformation course - Lifetime access"
```

Copy the **Product ID** (starts with `prod_`)

#### Create Price

```bash
stripe prices create \
  --product=prod_XXXXXXXXXXXXXX \
  --unit-amount=29700 \
  --currency=usd \
  --nickname="One-time Payment - $297"
```

**Note:** `unit-amount` is in cents, so 29700 = $297.00

Copy the **Price ID** (starts with `price_`)

### Option B: Using Stripe Dashboard (Manual)

1. Go to https://dashboard.stripe.com/products
2. Click **"+ Add product"**
3. Fill in:
   - **Name:** SugarSaint Course
   - **Description:** Complete metabolic health transformation course - Lifetime access
   - **Pricing:** One-time payment
   - **Price:** $297.00 USD
4. Click **"Save product"**
5. Copy the **Price ID** from the product page

---

## Step 4: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

2. Fill in your Stripe credentials in `.env.local`:

```bash
# Stripe Keys
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXX

# Price ID (from Step 3)
STRIPE_COURSE_PRICE_ID=price_XXXXXXXXXXXXXXXXXXXXXX

# Optional: Product ID
STRIPE_COURSE_PRODUCT_ID=prod_XXXXXXXXXXXXXXXXXXXXXX

# Your website URL
NEXT_PUBLIC_URL=http://localhost:3000
```

**IMPORTANT:** Never commit `.env.local` to git! It's already in `.gitignore`.

---

## Step 5: Test the Payment Flow

1. Start your dev server:

```bash
npm run dev
```

2. Complete the quiz at http://localhost:3000/quiz

3. On the GREEN results page, click **"Enroll in SugarSaint Now"**

4. You'll be redirected to Stripe Checkout

5. Use Stripe's test card numbers:
   - **Success:** `4242 4242 4242 4242`
   - **Declined:** `4000 0000 0000 0002`
   - **Requires Auth:** `4000 0027 6000 3184`

6. Use any future expiration date (e.g., 12/34)

7. Use any CVC (e.g., 123)

8. Use any ZIP code (e.g., 12345)

9. After successful payment, you'll be redirected to `/payment/success`

---

## Step 6: Monitor Test Payments

1. Go to https://dashboard.stripe.com/test/payments
2. You'll see all test payments here
3. Click on any payment to see full details

---

## Step 7: Enable Webhooks (Optional)

Webhooks allow you to receive notifications when payments succeed/fail.

### Using Stripe CLI (Local Testing)

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

This will give you a webhook signing secret (starts with `whsec_`)

### In Production

1. Go to https://dashboard.stripe.com/webhooks
2. Click **"Add endpoint"**
3. Enter your URL: `https://sugarsaint.com/api/stripe/webhook`
4. Select events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Copy the **Webhook signing secret**

**Note:** Webhook endpoint (`/api/stripe/webhook`) is not yet implemented. This is optional for MVP.

---

## Step 8: Go Live (Production)

When you're ready to accept real payments:

1. In Stripe Dashboard, click **"Activate your account"**
2. Complete the required business information
3. Switch from **Test Mode** to **Live Mode** (toggle in top-right)
4. Get your **Live API keys** from https://dashboard.stripe.com/apikeys
5. Create the product/price again in **Live Mode** (repeat Step 3)
6. Update your **production** environment variables with live keys

**Production Environment Variables:**

```bash
STRIPE_SECRET_KEY=sk_live_XXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_XXXXXXXXXXXXXXXXXXXXXX
STRIPE_COURSE_PRICE_ID=price_XXXXXXXXXXXXXXXXXXXXXX  # Live mode price ID
NEXT_PUBLIC_URL=https://sugarsaint.com
```

---

## Payment Flow Diagram

```
User completes quiz
  ↓
GREEN result page shows "Enroll Now" button
  ↓
Click button → Fetch `/api/stripe/checkout` (POST)
  ↓
Server creates Stripe Checkout Session
  ↓
Redirect to Stripe Checkout (hosted payment page)
  ↓
User enters payment details
  ↓
Payment succeeds → Redirect to `/payment/success?session_id=XXX`
Payment fails → Redirect to `/payment/cancel`
```

---

## Troubleshooting

### Error: "STRIPE_SECRET_KEY environment variable is not set"

**Fix:** Make sure `.env.local` exists and contains your Stripe secret key.

### Error: "STRIPE_COURSE_PRICE_ID is not configured"

**Fix:** Add the `STRIPE_COURSE_PRICE_ID` to your `.env.local` (from Step 3).

### Payment page doesn't load

**Fix:** Check browser console for errors. Verify your publishable key is correct.

### Redirect loops or errors

**Fix:** Ensure `NEXT_PUBLIC_URL` matches your current environment:
- Development: `http://localhost:3000`
- Production: `https://sugarsaint.com`

### Test card declined

**Fix:** Use test card `4242 4242 4242 4242` (this always succeeds in test mode).

---

## Security Best Practices

1. **Never commit `.env.local` to git** (already in `.gitignore`)
2. **Never expose secret keys client-side** (only `NEXT_PUBLIC_` vars are safe)
3. **Use test mode for development** (avoid real charges)
4. **Validate all inputs** (already implemented in API route)
5. **Use HTTPS in production** (Vercel/Netlify handle this automatically)

---

## Files Reference

### Created Files

- `lib/stripe.ts` - Stripe client configuration
- `app/api/stripe/checkout/route.ts` - Checkout session API
- `app/payment/success/page.tsx` - Payment success page
- `app/payment/cancel/page.tsx` - Payment cancel page
- `components/quiz/ResultsGreen.tsx` - Updated with checkout button
- `.env.local.example` - Environment variables template
- `STRIPE-SETUP.md` - This file

### Environment Variables

See `.env.local.example` for all required variables.

---

## Next Steps (Optional Enhancements)

1. **Webhook Integration:** Handle `checkout.session.completed` events
2. **Supabase Integration:** Store purchase records and grant course access
3. **Email Automation:** Send course access email on payment success
4. **Payment Plans:** Add 3-installment option ($109/month × 3)
5. **Premium Tier:** Add $497 option with extra features
6. **Coupon Codes:** Add discount functionality
7. **Analytics:** Track conversion rates and abandoned checkouts

---

## Support

**Stripe Documentation:** https://stripe.com/docs
**Stripe CLI Docs:** https://stripe.com/docs/stripe-cli

**Questions?** Check:
- Stripe Dashboard: https://dashboard.stripe.com
- Stripe Support: https://support.stripe.com
- SugarSaint Support: [email protected]

---

**Last Updated:** 2025-10-21
**Stripe API Version:** 2024-12-18.acacia
