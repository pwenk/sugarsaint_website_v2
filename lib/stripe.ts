import Stripe from 'stripe'

// Lazy initialization to avoid build-time errors
let _stripe: Stripe | null = null

export const stripe = new Proxy({} as Stripe, {
  get(target, prop) {
    if (!_stripe) {
      if (!process.env.STRIPE_SECRET_KEY) {
        throw new Error('STRIPE_SECRET_KEY environment variable is not set')
      }
      _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2025-09-30.clover',
        typescript: true,
      })
    }
    return _stripe[prop as keyof Stripe]
  }
})

// Stripe configuration
export const STRIPE_CONFIG = {
  // Price ID for the $297 one-time payment
  // This will be created via Stripe CLI or Dashboard
  COURSE_PRICE_ID: process.env.STRIPE_COURSE_PRICE_ID || '',

  // Product ID (optional, for reference)
  COURSE_PRODUCT_ID: process.env.STRIPE_COURSE_PRODUCT_ID || '',

  // Success and cancel URLs
  SUCCESS_URL: process.env.NEXT_PUBLIC_URL
    ? `${process.env.NEXT_PUBLIC_URL}/payment/success`
    : 'http://localhost:3000/payment/success',
  CANCEL_URL: process.env.NEXT_PUBLIC_URL
    ? `${process.env.NEXT_PUBLIC_URL}/payment/cancel`
    : 'http://localhost:3000/payment/cancel',
}

// Client-side publishable key
export const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
