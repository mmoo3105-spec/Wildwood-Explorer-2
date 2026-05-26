/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Page } from '../types';

interface TryBeforeBuyDetailProps {
  onNavigate: (page: Page) => void;
}

export default function TryBeforeBuyDetail({ onNavigate }: TryBeforeBuyDetailProps) {
  const [selectedProduct, setSelectedProduct] = useState('summit-peak');

  const productsList = [
    { id: 'summit-peak', name: '써밋 피크 2인용 텐트', retailPrice: 299.00, rentalPrice: 45.00 },
    { id: 'exped-mat', name: '엑스패드 듀오 에어매트', retailPrice: 189.00, rentalPrice: 30.00 },
    { id: 'claymore-light', name: '크레모아 울트라 조명', retailPrice: 120.00, rentalPrice: 18.00 }
  ];

  const current = productsList.find(p => p.id === selectedProduct) || productsList[0];
  const finalPrice = current.retailPrice - current.rentalPrice;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header / Back */}
      <button 
        onClick={() => onNavigate('home')} 
        className="flex items-center gap-2 text-brand-green-deep/60 hover:text-brand-green-deep font-bold mb-8 transition-colors group"
      >
        <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">arrow_back</span>
        홈으로 돌아가기
      </button>

      {/* Hero Header */}
      <div className="bg-brand-green-deep text-white rounded-[2.5rem] p-10 md:p-12 mb-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="relative z-10 max-w-xl">
          <span className="text-[10px] bg-brand-orange text-white px-4 py-1.5 rounded-full font-black tracking-widest uppercase mb-4 inline-block">EXPERIENCE FIRST, BUY LATER</span>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">체험 후 결정하는 구매</h1>
          <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed font-medium">
            인터넷 정보나 리뷰만 보고 수십만 원의 고가 아웃도어 장비를 샀다가 후회하지 마세요. 렌탈로 먼저 내 야생 캠핑지에서 직접 사용해보고, 최종 구매 결정 시 결제했던 렌탈 비용을 100% 전액 삭감해 드립니다.
          </p>
        </div>
      </div>

      {/* Interactive Calculator */}
      <section className="bg-brand-card border border-brand-green-deep/5 p-8 md:p-12 rounded-[2.5rem] mb-12">
        <h3 className="text-2xl font-black text-brand-green-deep mb-8 text-center">차감 구매액 시뮬레이터</h3>
        
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {productsList.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedProduct(p.id)}
              className={`px-6 py-4 rounded-full font-black text-sm transition-all border ${
                selectedProduct === p.id 
                  ? 'bg-brand-green-deep text-white border-transparent shadow-lg' 
                  : 'bg-white text-brand-green-deep border-brand-green-deep/10 hover:border-brand-green-deep/30'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-2xl mx-auto border-b border-brand-green-deep/5 pb-10">
          <div className="text-center">
            <span className="text-brand-green-deep/40 text-[10px] font-bold uppercase tracking-wider block mb-1">정상 판매가</span>
            <span className="text-3xl font-black text-brand-green-deep font-display">${current.retailPrice.toFixed(2)}</span>
          </div>
          <div className="text-center bg-brand-orange/10 border border-brand-orange/20 py-4 px-6 rounded-3xl relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase">100% 공제</span>
            <span className="text-brand-orange text-[10px] font-bold uppercase tracking-wider block mb-1">지불된 렌탈료</span>
            <span className="text-3xl font-black text-brand-orange font-display">-${current.rentalPrice.toFixed(2)}</span>
          </div>
          <div className="text-center bg-brand-green-deep/5 py-4 px-6 rounded-3xl">
            <span className="text-brand-green-deep/40 text-[10px] font-bold uppercase tracking-wider block mb-1">최종 구매 가격</span>
            <span className="text-3xl font-black text-brand-green-light font-display">${finalPrice.toFixed(2)}</span>
          </div>
        </div>

        <div className="text-center mt-10">
          <button 
            onClick={() => onNavigate('home')} 
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-5 rounded-full font-black text-base shadow-xl shadow-brand-orange/20 transition-all active:scale-95"
          >
            장비 렌탈하고 체험 시작하기
          </button>
        </div>
      </section>

      {/* How it works */}
      <section className="mb-6">
        <h3 className="text-2xl font-black text-brand-green-deep mb-8 text-center">구매 전환 프로세스</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex gap-4">
            <span className="text-3xl font-black text-brand-orange font-display">01</span>
            <div>
              <h4 className="text-lg font-bold text-brand-green-deep mb-2">장비 렌탈 예약</h4>
              <p className="text-brand-green-deep/50 text-xs font-medium leading-relaxed">체험해보고 싶은 렌탈 케어 장비를 원하는 날짜에 렌탈하여 캠핑장에서 직접 성능을 체감해보세요.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-3xl font-black text-brand-orange font-display">02</span>
            <div>
              <h4 className="text-lg font-bold text-brand-green-deep mb-2">구매 여부 결정</h4>
              <p className="text-brand-green-deep/50 text-xs font-medium leading-relaxed">렌탈 완료 후 7일 이내에 앱을 통해 구매 신청 여부를 선택할 수 있는 팝업 알림창이 제공됩니다.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-3xl font-black text-brand-orange font-display">03</span>
            <div>
              <h4 className="text-lg font-bold text-brand-green-deep mb-2">새 제품 수령</h4>
              <p className="text-brand-green-deep/50 text-xs font-medium leading-relaxed">차감된 금액만 지불하고, 반납하신 대여품이 아닌 본사 출고 밀봉 신제품을 집으로 무료 배송 받습니다.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
