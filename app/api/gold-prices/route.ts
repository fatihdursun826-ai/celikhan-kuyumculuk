import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function GET() {
  try {
    // Tarayıcı gibi davranmak için headers ekliyoruz
    const response = await fetch('https://malatyakuyumcular.net/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      next: { revalidate: 0 }
    });

    const html = await response.text();
    const $ = cheerio.load(html);
    const prices: any[] = [];

    // Web sitesindeki tablo yapısını tekrar hedefliyoruz
    $('table tbody tr').each((i, el) => {
      const tds = $(el).find('td');
      if (tds.length >= 3) {
        const name = tds.eq(0).text().trim();
        const buy = tds.eq(1).text().trim();
        const sell = tds.eq(2).text().trim();
        if (name) prices.push({ name, buy, sell });
      }
    });

    return NextResponse.json(prices);
  } catch (error) {
    return NextResponse.json({ error: 'Veri çekilemedi' }, { status: 500 });
  }
}