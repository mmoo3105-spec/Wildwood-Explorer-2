/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onRent: () => void;
}

export default function ProductDetail({ product, onBack, onRent }: ProductDetailProps) {
  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Top Nav */}
      <nav className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-green-deep/5 flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 -ml-2 text-brand-green-deep hover:bg-brand-green-light/20 rounded-full transition-colors active:scale-95">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-lg font-black tracking-tight">{product.category} 탐색</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-brand-green-deep hover:bg-brand-green-light/20 rounded-full transition-all">
            <span className="material-symbols-outlined ring-1 ring-brand-green-deep/10 p-1 rounded-full">favorite</span>
          </button>
          <button className="p-2 text-brand-green-deep hover:bg-brand-green-light/20 rounded-full">
            <span className="material-symbols-outlined ring-1 ring-brand-green-deep/10 p-1 rounded-full">shopping_bag</span>
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-32 max-w-7xl mx-auto px-6">
        {/* Editorial Hero Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          {/* Main Visual */}
          <div className="md:col-span-8 rounded-[2rem] overflow-hidden relative aspect-[4/3] md:aspect-auto shadow-2xl group">
            <img 
              src={product.image} 
              className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" 
              alt={product.name} 
            />
            {product.tags && (
              <div className="absolute bottom-8 left-8 flex gap-3">
                {product.tags.map(t => (
                  <span key={t} className="bg-white/90 backdrop-blur-md text-brand-green-deep px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Secondary Visual & Key Details */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="rounded-[2rem] overflow-hidden h-72 shadow-xl">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZroj9dRcUL12d2jTCp95B4OJcr56LyV01Q0TWMc3T9WTxtD96pRnPjamlUDutFGkk7oMafaPNrXkJS7mF63uiFVpiB20qcOFVELpVA58sjHuAwj3jqJn0fiwwgZzxnozbZxocQRuDbqFidNuaFEQ9hyx97RRg9qs_Xw5MtkLzPIsHA61IlzSNU6EKbZmniDhw_pNRcDET5mJ7AqllpS_Zdm9ihieUdrUPv3Bxf6-YeloFm-4oTBDbZl9J6ZjAYR2qNB7oFOqngTU" 
                className="w-full h-full object-cover" 
                alt="Interior"
              />
            </div>
            <div className="bg-brand-card p-10 rounded-[2.5rem] flex-grow flex flex-col justify-center shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
              <div className="flex items-center gap-3 mb-4">
                <span className="text-brand-orange font-black text-xs uppercase tracking-[0.2em] bg-brand-orange/10 px-3 py-1.5 rounded-full">대여 가능</span>
                <span className="text-brand-green-deep font-black text-xs uppercase tracking-[0.2em] bg-brand-green-deep/10 px-3 py-1.5 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">shopping_bag</span> 체험 후 구매
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-brand-green-deep leading-[1.1] mb-6 relative z-10">{product.name}</h2>
              <div className="flex items-center gap-2 mb-8">
                <span className="material-symbols-outlined text-brand-orange font-variation-settings-['FILL'_1]">star</span>
                <span className="font-bold text-lg">{product.rating}</span>
                <span className="text-brand-green-deep/40 font-medium font-sans text-sm">({product.reviews}개 후기)</span>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-black">${product.price}</span>
                <span className="text-brand-green-deep/40 font-bold text-lg">/ 1박</span>
              </div>
              <p className="text-sm font-bold text-brand-green-deep/60 bg-white/50 p-4 rounded-xl border border-brand-green-deep/5">
                💡 렌탈 이용 후 새 제품 구매 시, <span className="text-brand-orange font-black">렌탈료 100% 전액 환급</span> 혜택이 제공됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* Content Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">
          <div className="lg:col-span-2 space-y-20">
            {/* Description */}
            <section>
              <h3 className="text-3xl font-bold mb-8">현대적 야생을 위한 경험</h3>
              <p className="text-brand-green-deep/60 leading-relaxed text-xl mb-12 font-medium">
                {product.description}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {product.features?.map((f, i) => (
                  <div key={i} className="bg-brand-card p-6 rounded-3xl flex flex-col items-center text-center shadow-sm">
                    <span className="material-symbols-outlined text-brand-orange mb-3 scale-110">
                      {f.includes('인원') ? 'groups' : f.includes('계절') ? 'thermostat' : f.includes('내수압') ? 'water_drop' : 'timer'}
                    </span>
                    <span className="text-[10px] font-black uppercase text-brand-green-deep/40 tracking-widest mb-1">{f.split(':')[0]}</span>
                    <span className="font-bold text-brand-green-deep">{f.split(':')[1]}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* In-depth details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-brand-green-deep p-10 rounded-[2.5rem] text-white shadow-2xl">
                <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="material-symbols-outlined text-brand-orange">settings</span> 기술 사양
                </h4>
                <ul className="space-y-6">
                  {product.specs && Object.entries(product.specs).map(([key, val]) => (
                    <li key={key} className="flex justify-between border-b border-white/10 pb-4">
                      <span className="text-white/50 font-medium">{key}</span>
                      <span className="font-bold">{val}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-green-light/20 p-10 rounded-[2.5rem] border border-brand-green-light/30">
                <h4 className="text-2xl font-bold mb-8 text-brand-green-deep flex items-center gap-3">
                  <span className="material-symbols-outlined text-brand-orange">package_2</span> 구성품 안내
                </h4>
                <ul className="space-y-5">
                  {product.whatsIncluded?.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-brand-orange text-sm font-bold">check</span>
                      </div>
                      <span className="font-bold text-brand-green-deep/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sticky Booking Widget */}
          <aside className="lg:sticky lg:top-32">
            <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-brand-green-deep/5 border border-brand-green-deep/5">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <p className="text-brand-green-deep/50 text-xs font-bold uppercase tracking-widest mb-1">총 대여료</p>
                  <h5 className="text-4xl font-black text-brand-green-deep">${product.price}<span className="text-xl">.00</span></h5>
                </div>
                <div className="bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-xl text-xs font-black tracking-widest border border-brand-orange/10">
                  즉시 예약
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <div className="p-5 rounded-2xl bg-brand-bg flex justify-between items-center cursor-pointer hover:bg-brand-card transition-colors">
                  <div>
                    <p className="text-[9px] font-black uppercase text-brand-green-deep/40 tracking-widest mb-1">시작 날짜</p>
                    <p className="font-bold text-lg">May 12, 2024</p>
                  </div>
                  <span className="material-symbols-outlined text-brand-green-deep/30">calendar_today</span>
                </div>
                <div className="p-5 rounded-2xl bg-brand-bg flex justify-between items-center cursor-pointer hover:bg-brand-card transition-colors">
                  <div>
                    <p className="text-[9px] font-black uppercase text-brand-green-deep/40 tracking-widest mb-1">반납 날짜</p>
                    <p className="font-bold text-lg">May 15, 2024</p>
                  </div>
                  <span className="material-symbols-outlined text-brand-green-deep/30">calendar_today</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 border-t border-brand-green-deep/5 pt-8">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-brand-green-deep/50 font-bold uppercase tracking-widest text-[10px]">${product.price} x 3박</span>
                  <span className="font-bold">${product.price * 3}.00</span>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-brand-green-deep/50 font-bold uppercase tracking-widest text-[10px]">운송료</span>
                  <span className="font-bold">$15.00</span>
                </div>
                <div className="flex justify-between text-xl font-black pt-4">
                  <span>합계</span>
                  <span>${product.price * 3 + 15}.00</span>
                </div>
              </div>

              <button 
                onClick={onRent}
                className="w-full bg-brand-orange text-white py-6 rounded-full font-black text-xl hover:shadow-2xl hover:shadow-brand-orange/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                <span className="material-symbols-outlined font-variation-settings-['FILL'_1]">bolt</span>
                지금 예약하기
              </button>
              
              <p className="text-center text-brand-green-deep/30 text-xs mt-8 font-medium px-4 leading-relaxed italic">
                24시간 모험 지원 서비스 및 캠핑장 내 전문가 무상 설치 옵션이 포함되어 있습니다.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
