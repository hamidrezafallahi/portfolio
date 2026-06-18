import { NextResponse } from 'next/server';

const url = process.env.NEXT_PUBLIC_BASE_URL 
export async function GET() {
  return NextResponse.redirect(
    new URL("/documents/hamidrezafalahi.pdf", url)
  );
}