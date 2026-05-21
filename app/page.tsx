import { useEffect, useState } from 'react';

export default function ÇelikhanKuyumculuk() {
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
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-black to-black"></div>

      <header className="relative z-10 border-b border-yellow-500/20 backdrop-blur-md bg-black/70">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-700 flex items-center justify-center shadow-2xl shadow-yellow-500/40">
              <span className="text-black text-3xl font-black">Ç</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-wide text-yellow-400">
                Çelikhan Kuyumculuk
              </h1>
              <p className="text-gray-300 text-sm md:text-base mt-1">
                Güvenli yatırım ve zarafetin doğru adresi
              </p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">İletişim</p>
            <p className="text-yellow-300 font-semibold">Mehmet Dursun — 0530 223 94 91</p>
            <p className="text-yellow-300 font-semibold">Fatih Dursun — 0538 687 16 47</p>
          </div>
        </div>
      </header>

      <div className="relative z-10 bg-yellow-500 text-black py-3 overflow-hidden whitespace-nowrap font-bold text-lg">
        <div className="animate-pulse tracking-widest flex gap-10 whitespace-nowrap">
          <span>Çelikhan Kuyumculuk</span>
          <span>CANLI ALTIN FİYATLARI</span>
          <span>GÜVENLİ YATIRIM</span>
          <span>MALATYA</span>
          <span>7/24 GÜNCEL FİYATLAR</span>
        </div>
      </div>

      <section className="relative z-10 py-16 md:py-24 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Güncel Altın <span className="block text-yellow-400">Fiyatları</span>
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

      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-3xl overflow-hidden shadow-2xl shadow-yellow-500/10 relative">
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

      <footer className="relative z-10 border-t border-yellow-500/20 py-8 text-center text-gray-400">
        <p>© 2026 Çelikhan Kuyumculuk — Tüm Hakları Saklıdır</p>
      </footer>
    </div>
  );
}