"use client";
import { useEffect, useState } from 'react';

export default function FiyatEkrani() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/gold-prices')
      .then(res => res.json())
      .then(d => setData(d));
  }, []);

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">Çelikhan Kuyumculuk</h1>
      {data.map((item, i) => (
        <div key={i} className="mt-4">
          {item.name}: Alış {item.buy} - Satış {item.sell}
        </div>
      ))}
    </div>
  );
}