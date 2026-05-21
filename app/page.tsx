"use client";

import { useEffect, useState } from 'react';

export default function FiyatEkrani() {
  const [prices, setPrices] = useState([
    { name: 'Gram Altın', buy: '4.215 ₺', sell: '4.265 ₺' },
    { name: 'Çeyrek Altın', buy: '6.920 ₺', sell: '7.080 ₺' },
    { name: 'Yarım Altın', buy: '13.840 ₺', sell: '14.160 ₺' },
    { name: 'Tam Altın', buy: '27.580 ₺', sell: '28.220 ₺' },
    { name: 'Cumhuriyet Altını', buy: '28.400 ₺', sell: '29.050 ₺' },
    { name: '22 Ayar Bilezik', buy: '3.860 ₺', sell: '3.980 ₺' },
    { name: 'Has Altın', buy: '4.250 ₺', sell: '4.310 ₺' },
  ]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch('/api/gold-prices');
        const data = await response.json();
        if (data?.length) {
          setPrices(data);
        }
      } catch (error) {
        console.log('Fiyat verileri alınamadı');
      }
    };
    fetchPrices();
    const interval = setInterval(fetchPrices, 10000);
    return () => clearInterval(interval);
  }, []);

  const currentDate = new Date().toLocaleString('tr-TR');

  return (
    <div className="w-full bg-black text-white font-sans">
      {/* BAŞLIK ALANI */}
      <section className="relative z-10 pt-16 pb-10 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-wide">
            Çelikhan <span className="block text-yellow-400 mt-2">Kuyumculuk</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-ping"></div>
            <span className="text-green-400 font-black tracking-wider">
              CANLI PİYASA VERİSİ AKTİF
            </span>
          </div>
          <p className="text-yellow-400 font-semibold mb-5 text-lg">
            Canlı Veri Güncelleme: {currentDate}
          </p>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
            Çelikhan Kuyumculuk ile canlı altın fiyatlarını anlık takip edin. Modern, hızlı ve güvenilir fiyat ekranı deneyimi.
          </p>
        </div>
      </section>

      {/* ALTIN FİYATLARI TABLOSU */}
      <section className="relative z-10 px-6 pb-12">
        <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-3xl overflow-hidden shadow-2xl shadow-yellow-500/10">
          <div className="grid grid-cols-3 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 text-black font-black text-lg p-5 uppercase tracking-wider">
            <div>Altın Türü</div>
            <div className="text-center">Alış</div>
            <div className="text-center">Satış</div>
          </div>
          {prices.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 p-5 border-b border-white/10 hover:bg-yellow-500/10 transition-all duration-300"
            >
              <div className="font-semibold">{item.name}</div>
              <div className="text-center text-green-400 font-bold">{item.buy}</div>
              <div className="text-center text-yellow-300 font-bold">{item.sell}</div>
            </div>
          ))}
        </div>
      </section>

      {/* YENİ EKLENEN İLETİŞİM, ADRES VE İSİMLER ALANI */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* İSİMLER KARTI */}
          <div className="bg-white/5 backdrop-blur-md border border-yellow-500/10 rounded-2xl p-6 text-center hover:border-yellow-500/30 transition-all">
            <h3 className="text-yellow-400 font-bold text-xl mb-4 uppercase tracking-wider">Mağaza Sorumluları</h3>
            <p className="text-gray-200 text-lg font-medium mb-2">Mehmet Dursun</p>
            <p className="text-gray-200 text-lg font-medium">Fatih Dursun</p>
          </div>

          {/* TELEFON KARTI */}
          <div className="bg-white/5 backdrop-blur-md border border-yellow-500/10 rounded-2xl p-6 text-center hover:border-yellow-500/30 transition-all">
            <h3 className="text-yellow-400 font-bold text-xl mb-4 uppercase tracking-wider">İletişim Numaraları</h3>
            <p className="text-gray-200 text-lg font-semibold mb-2">
              <a href="tel:05302235044" className="hover:text-yellow-400 transition-colors">0530 223 50 44</a>
            </p>
            <p className="text-gray-200 text-lg font-semibold">
              <a href="tel:05386872544" className="hover:text-yellow-400 transition-colors">0538 687 25 44</a>
            </p>
          </div>

          {/* ADRES KARTI */}
          <div className="bg-white/5 backdrop-blur-md border border-yellow-500/10 rounded-2xl p-6 text-center hover:border-yellow-500/30 transition-all">
            <h3 className="text-yellow-400 font-bold text-xl mb-4 uppercase tracking-wider">Mağaza Adresi</h3>
            <p className="text-gray-200 leading-relaxed">
              Dabakhane Mahallesi, Halep Caddesi, <br />
              No: 18 (Kuyumcular Çarşısı) <br />
              <span className="text-yellow-500 font-semibold">Battalgazi / MALATYA</span>
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}