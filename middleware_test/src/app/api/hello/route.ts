import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const responseData = { message: "Hello, World!" };
  return NextResponse.json(responseData, { status: 200 });
}
