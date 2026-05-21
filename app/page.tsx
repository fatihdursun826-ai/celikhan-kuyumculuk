"use client";

import { useState } from 'react';

export default function FiyatEkrani() {
  return (
    <div className="w-full bg-black text-white font-sans p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-500">Çelikhan Kuyumculuk</h1>
      
      {/* Fiyat Bilgilendirme */}
      <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg mb-10 text-center">
        <p className="text-xl text-yellow-400">Canlı fiyatlar şu an teknik güncelleme aşamasındadır.</p>
        <p className="mt-2 text-gray-400">Lütfen güncel fiyatlar için mağazamızı ziyaret ediniz.</p>
      </div>

      {/* İletişim ve Adres - BU KISIM KESİN GÖRÜNECEK */}
      <div className="max-w-4xl mx-auto text-center space-y-4 border-t border-gray-800 pt-6">
        <p><strong>İletişim:</strong> 0530 223 94 91 - 0538 687 16 47</p>
        <p><strong>Adres:</strong> Küçük Hüseyinbey Mah. Sivas Cad. Girişi, Yeni Kuyumcular Çarşısı No: 87, Malatya</p>
      </div>
    </div>
  );
}