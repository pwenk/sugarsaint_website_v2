import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  // Only protect /course routes (except /course/login)
  const path = request.nextUrl.pathname

  if (path.startsWith('/course') && path !== '/course/login') {
    // Check for authentication cookie
    const hasAccess = request.cookies.get('course_access')

    if (!hasAccess) {
      // Redirect to login page
      const loginUrl = new URL('/course/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/course/:path*',
}
