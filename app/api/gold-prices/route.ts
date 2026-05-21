import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function GET() {
  try {
    const response = await fetch('https://malatyakuyumcular.net/', { next: { revalidate: 60 } });
    const html = await response.text();
    const $ = cheerio.load(html);
    const prices: any[] = [];

    $('table tr').each((i, el) => {
      const name = $(el).find('td').eq(0).text().trim();
      const buy = $(el).find('td').eq(1).text().trim();
      const sell = $(el).find('td').eq(2).text().trim();
      if (name && buy && sell) prices.push({ name, buy, sell });
    });

    return NextResponse.json(prices);
  } catch (error) {
    return NextResponse.json({ error: 'Veri çekilemedi' }, { status: 500 });
  }
}