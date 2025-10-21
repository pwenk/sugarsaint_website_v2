import { NextRequest, NextResponse } from 'next/server'
import { resend, AUDIENCE_ID } from '@/lib/resend'
import { getSubjectLine, getEmailTemplate } from '@/lib/quiz/email-templates'
import type { QuizResponse } from '@/lib/quiz/types'

export async function POST(request: NextRequest) {
  try {
    const body: QuizResponse = await request.json()
    const { email, outcome, totalScore } = body

    // Validate input
    if (!email || !outcome) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // 1. Add contact to Resend Audience with tags
    try {
      await resend.contacts.create({
        email,
        audienceId: AUDIENCE_ID,
        unsubscribed: false,
      })

      // Tag the contact (Resend API requires separate tag operation)
      // Note: Resend doesn't support tags in the contacts.create call
      // Tags would need to be managed separately or via a different approach
      // For now, we'll log them for manual processing if needed
      console.log('Contact created with metadata:', {
        email,
        outcome,
        totalScore,
        date: new Date().toISOString().split('T')[0],
      })
    } catch (contactError: unknown) {
      // If contact already exists, that's okay - continue with email
      // Type guard for error handling
      if (contactError && typeof contactError === 'object' && 'message' in contactError) {
        const errorMessage = (contactError as { message: string }).message
        if (!errorMessage.includes('already exists')) {
          throw contactError
        }
      }
      console.log('Contact may already exist, continuing...')
    }

    // 2. Send result email
    const emailResult = await resend.emails.send({
      from: 'SugarSaint <[email protected]>',
      to: email,
      subject: getSubjectLine(outcome),
      html: getEmailTemplate(outcome),
    })

    if (emailResult.error) {
      console.error('Email send error:', emailResult.error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // 3. Return success
    return NextResponse.json({
      success: true,
      outcome,
      emailId: emailResult.data?.id,
    })
  } catch (error) {
    console.error('Quiz submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
