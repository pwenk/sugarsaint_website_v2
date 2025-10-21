import { NextRequest, NextResponse } from 'next/server'
import { stripe, STRIPE_CONFIG } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, outcome } = body

    // Validate input
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate price ID is configured
    if (!STRIPE_CONFIG.COURSE_PRICE_ID) {
      console.error('STRIPE_COURSE_PRICE_ID is not configured')
      return NextResponse.json(
        { error: 'Payment system not configured' },
        { status: 500 }
      )
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      mode: 'payment',
      line_items: [
        {
          price: STRIPE_CONFIG.COURSE_PRICE_ID,
          quantity: 1,
        },
      ],
      success_url: `${STRIPE_CONFIG.SUCCESS_URL}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: STRIPE_CONFIG.CANCEL_URL,
      metadata: {
        email,
        outcome: outcome || 'unknown',
        product: 'sugarsaint-course',
      },
      // Auto-send receipt email
      payment_intent_data: {
        receipt_email: email,
      },
    })

    // Return the checkout session URL
    return NextResponse.json({
      url: session.url,
      sessionId: session.id,
    })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
