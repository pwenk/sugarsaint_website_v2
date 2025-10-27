import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    // Check if password starts with "SUGAR"
    if (!password || !password.toUpperCase().startsWith('SUGAR')) {
      return NextResponse.json(
        { error: 'Invalid password. Please check your access credentials.' },
        { status: 401 }
      )
    }

    // Create response with success
    const response = NextResponse.json({ success: true })

    // Set HTTP-only cookie for session (expires in 30 days)
    response.cookies.set('course_access', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    })

    return response
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
