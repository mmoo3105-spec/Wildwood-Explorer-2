/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Page } from '../types';
import { motion } from 'motion/react';
import LockerKeyModal from '../components/LockerKeyModal';

interface LogisticsHubProps {
  onNavigate: (page: Page) => void;
}

export default function LogisticsHub({ onNavigate }: LogisticsHubProps) {
  const [isLockerModalOpen, setIsLockerModalOpen] = useState(false);

  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md flex justify-between items-center px-6 py-4 shadow-sm border-b border-brand-green-deep/5">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('home')} className="p-2 -ml-2 text-brand-green-deep active:scale-95 transition-transform">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-lg font-black tracking-tight">CampToGo</h1>
        </div>
        <button 
          onClick={() => onNavigate('home')}
          className="text-brand-orange font-bold text-sm hover:underline"
        >
          홈으로
        </button>
      </header>

      <main className="pt-28 pb-32 px-6 max-w-6xl mx-auto">
        <section className="mb-12 text-center">
          <span className="text-brand-orange font-black tracking-[0.2em] text-[10px] uppercase mb-3 block">Wildwood Logistics & Care</span>
          <h2 className="text-4xl font-black text-brand-green-deep tracking-tight leading-none mb-4">배송 및 케어 서비스</h2>
          <p className="text-brand-green-deep/50 font-medium">편리한 캠핑장비 배송부터 소중한 장비의 프리미엄 세탁·코팅 케어까지 지원합니다.</p>
          <div className="h-1.5 w-24 bg-brand-orange rounded-full mx-auto mt-6" />
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Delivery service */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-brand-green-deep/5 border border-brand-green-deep/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-4xl text-brand-orange bg-brand-orange/10 p-5 rounded-3xl">local_shipping</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full">딜리버리</span>
              </div>
              <h3 className="text-2xl font-black text-brand-green-deep mb-4">캠핑장비 왕복 배송</h3>
              <p className="text-brand-green-deep/50 font-medium leading-relaxed text-sm mb-8">
                대여하신 무거운 캠핑 장비를 고객님의 거주지나 캠핑장 현장으로 직접 안전하게 배송 및 회수해 드립니다. 텐트 설치 및 철수가 힘드신 분들을 위한 전문가 설치 대행 옵션도 선택하실 수 있습니다.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('delivery')}
              className="w-full bg-brand-green-deep text-white py-4 rounded-full font-black text-base hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              배송 서비스 예약하기
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </motion.div>

          {/* Card 2: Cleaning & Coating Service */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-brand-green-deep/5 border border-brand-green-deep/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-4xl text-brand-orange bg-brand-orange/10 p-5 rounded-3xl">clean_hands</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full">장비 케어</span>
              </div>
              <h3 className="text-2xl font-black text-brand-green-deep mb-4">텐트 세척 & 발수 코팅</h3>
              <p className="text-brand-green-deep/50 font-medium leading-relaxed text-sm mb-8">
                캠핑 후 오염된 텐트와 침낭을 전문 세탁 엔지니어가 깨끗하게 케어해 드립니다. 비와 이슬로부터 장비를 완벽하게 보호하는 프리미엄 불소 발수 코팅 시공 및 곰팡이 억제 항균 소독 서비스가 포함됩니다.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('cleaning')}
              className="w-full bg-brand-orange text-white py-4 rounded-full font-black text-base hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              세척/코팅 케어 예약하기
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </motion.div>

          {/* Card 3: Unmanned Locker simulator */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-brand-green-deep/5 border border-brand-green-deep/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-4xl text-brand-orange bg-brand-orange/10 p-5 rounded-3xl">key</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full">IoT 제어</span>
              </div>
              <h3 className="text-2xl font-black text-brand-green-deep mb-4">무인 렌탈함 원격 제어</h3>
              <p className="text-brand-green-deep/50 font-medium leading-relaxed text-sm mb-8">
                24시간 비대면으로 운영되는 스마트 무인 렌탈함의 원격 문열기 시스템을 체험해 보세요. 주문 완료 후 발급되는 모바일 스마트키를 이용해 현장에서 터치 한 번으로 물건을 즉시 수령할 수 있습니다.
              </p>
            </div>
            <button 
              onClick={() => setIsLockerModalOpen(true)}
              className="w-full bg-brand-green-deep text-white py-4 rounded-full font-black text-base hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              원격 문열기 체험하기
              <span className="material-symbols-outlined text-sm">cell_tower</span>
            </button>
          </motion.div>
        </div>
      </main>

      <LockerKeyModal 
        isOpen={isLockerModalOpen}
        onClose={() => setIsLockerModalOpen(false)}
        lockerNumber="13번 보관함"
        location="롯데마트금천점 (체험용)"
        productName="체험용 명품 벨 텐트"
        rentalPeriod="2026-05-19 ~ 2026-05-20"
      />
    </div>
  );
}
