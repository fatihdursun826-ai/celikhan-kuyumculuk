"use client";

export default function FiyatEkrani() {
  // Fiyatları buraya manuel yazın, istediğiniz zaman güncelleyebilirsiniz
  const prices = [
    { name: "Gram Altın", buy: "2450", sell: "2480" },
    { name: "Çeyrek Altın", buy: "4000", sell: "4100" },
    { name: "Yarım Altın", buy: "8000", sell: "8200" }
  ];

  return (
    <div className="bg-black text-white min-h-screen p-6 font-sans">
      <h1 className="text-3xl font-bold text-center text-yellow-500 mb-8">Çelikhan Kuyumculuk</h1>
      <div className="max-w-2xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
        {prices.map((p, i) => (
          <div key={i} className="flex justify-between py-3 border-b border-gray-700">
            <span className="font-semibold text-lg">{p.name}</span>
            <div className="flex gap-6">
              <span className="text-green-400">Alış: {p.buy} TL</span>
              <span className="text-yellow-400 font-bold">Satış: {p.sell} TL</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10 text-gray-500 text-sm">
        <p>İletişim: 0530 223 94 91 - 0538 687 16 47</p>
        <p>Adres: Küçük Hüseyinbey Mah. Sivas Cad. Girişi, Yeni Kuyumcular Çarşısı No: 87, Malatya</p>
      </div>
    </div>
  );
}