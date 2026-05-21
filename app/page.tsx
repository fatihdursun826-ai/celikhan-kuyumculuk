"use client";
import { useEffect, useState } from 'react';

export default function FiyatEkrani() {
  const [prices, setPrices] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/gold-prices')
      .then(res => res.json())
      .then(data => setPrices(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-6 font-sans">
      <h1 className="text-3xl font-bold text-center text-yellow-500 mb-8">Çelikhan Kuyumculuk</h1>
      <div className="max-w-2xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
        {prices.length > 0 ? (
          prices.map((p, i) => (
            <div key={i} className="flex justify-between py-3 border-b border-gray-700">
              <span className="font-semibold">{p.name}</span>
              <div className="flex gap-4">
                <span className="text-green-400">Alış: {p.buy}</span>
                <span className="text-yellow-400">Satış: {p.sell}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">Fiyatlar güncelleniyor...</p>
        )}
      </div>
      <div className="text-center mt-10 text-gray-500">
        <p>İletişim: 0530 223 94 91 - 0538 687 16 47</p>
        <p>Adres: Küçük Hüseyinbey Mah. Sivas Cad. Girişi, Yeni Kuyumcular Çarşısı No: 87, Malatya</p>
      </div>
    </div>
  );
}