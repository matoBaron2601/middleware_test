import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function GET(request: Request) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return NextResponse.json(data);
}
