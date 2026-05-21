import { NextResponse } from 'next/server';

export async function GET() {
  // Test verisi
  const testData = [
    { name: "Test Altın", buy: "2000", sell: "2100" }
  ];
  return NextResponse.json(testData);
}