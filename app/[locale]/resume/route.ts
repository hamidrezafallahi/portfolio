import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect(
    new URL("/documents/hamidrezafalahi.pdf", "http://localhost:3001")
  );
}