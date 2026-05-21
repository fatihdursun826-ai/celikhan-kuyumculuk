import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    { name: "Gram Altın", buy: "2450", sell: "2480" },
    { name: "Çeyrek Altın", buy: "4000", sell: "4100" }
  ]);
}