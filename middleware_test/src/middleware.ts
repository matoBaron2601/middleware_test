import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get('Authorization')
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json(
      { error: 'Missing or invalid authentication token' },
      { status: 401 }
    )
  }
  
  const token = authHeader.substring(7)
    try {
    if (token === 'token123') {
      return NextResponse.next()
    } else {
      return NextResponse.json(
        { error: 'Invalid authentication token' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Token validation error:', error)
    return NextResponse.json(
      { error: 'Authentication error' },
      { status: 401 }
    )
  }
}

export const config = {
  matcher: '/api/:path*',
}