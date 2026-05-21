import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export const revalidate = 0;

export async function GET() {
  try {
    const response = await fetch('http://malatyaaltinpiyasasi.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    
    const html = await response.text();
    const $ = cheerio.load(html);
    const prices: any[] = [];

    // Sitenin tablo yapısına göre veri çekme
    $('table tr').each((i, el) => {
      const name = $(el).find('td').eq(0).text().trim();
      const buy = $(el).find('td').eq(1).text().trim();
      const sell = $(el).find('td').eq(2).text().trim();
      
      if (name && buy && sell) {
        prices.push({ name, buy, sell });
      }
    });

    return NextResponse.json(prices);
  } catch (error) {
    return NextResponse.json({ error: 'Veri çekilemedi' }, { status: 500 });
  }
}