/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Page } from '../types';

interface StorageDetailProps {
  onNavigate: (page: Page) => void;
}

export default function StorageDetail({ onNavigate }: StorageDetailProps) {
  const lockerSizes = [
    { name: 'Medium 보관함', desc: '배낭, 등산화, 침낭 등 하이킹 개인 장비 적합', size: 'W 50cm x H 50cm x D 60cm', price: '$5 / 일', icon: 'backpack' },
    { name: 'Large 보관함', desc: '2~3인용 텐트, 매트리스, 코펠 세트 적합', size: 'W 70cm x H 70cm x D 80cm', price: '$8 / 일', icon: 'tent' },
    { name: 'X-Large 보관함', desc: '4인용 대형 텐트, 타프, 캠핑 의자 및 테이블 세트 적합', size: 'W 100cm x H 80cm x D 100cm', price: '$12 / 일', icon: 'grid_view' },
  ];

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
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="relative z-10 max-w-xl">
          <span className="text-[10px] bg-brand-orange text-white px-4 py-1.5 rounded-full font-black tracking-widest uppercase mb-4 inline-block">IoT SMART KEEPER</span>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">스마트 무인 보관</h1>
          <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed font-medium">
            무겁고 보관이 까다로운 텐트와 아웃도어 장비들을 도심 및 거점 스마트 IoT 보관함에 안심하고 맡기세요. 24시간 항온/항습 및 실시간 CCTV 감시로 항상 쾌적한 컨디션을 유지합니다.
          </p>
        </div>
      </div>

      {/* Real-time Environment Status (IoT API Mockup) */}
      <section className="mb-12">
        <h3 className="text-2xl font-black text-brand-green-deep mb-6">현재 보관함 센터 실시간 상태</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white border border-brand-green-deep/5 p-6 rounded-3xl shadow-sm flex items-center gap-4">
            <span className="material-symbols-outlined text-brand-orange text-3xl bg-brand-orange/10 p-3 rounded-2xl">device_thermostat</span>
            <div>
              <p className="text-[10px] text-brand-green-deep/40 font-bold uppercase tracking-wider">내부 온도</p>
              <p className="text-lg font-black text-brand-green-deep">21.5 °C</p>
            </div>
          </div>
          <div className="bg-white border border-brand-green-deep/5 p-6 rounded-3xl shadow-sm flex items-center gap-4">
            <span className="material-symbols-outlined text-brand-orange text-3xl bg-brand-orange/10 p-3 rounded-2xl">humidity_percentage</span>
            <div>
              <p className="text-[10px] text-brand-green-deep/40 font-bold uppercase tracking-wider">내부 습도</p>
              <p className="text-lg font-black text-brand-green-deep">42 %</p>
            </div>
          </div>
          <div className="bg-white border border-brand-green-deep/5 p-6 rounded-3xl shadow-sm flex items-center gap-4">
            <span className="material-symbols-outlined text-brand-orange text-3xl bg-brand-orange/10 p-3 rounded-2xl">videocam</span>
            <div>
              <p className="text-[10px] text-brand-green-deep/40 font-bold uppercase tracking-wider">보안 감시</p>
              <p className="text-lg font-black text-emerald-500 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                정상 가동
              </p>
            </div>
          </div>
          <div className="bg-white border border-brand-green-deep/5 p-6 rounded-3xl shadow-sm flex items-center gap-4">
            <span className="material-symbols-outlined text-brand-orange text-3xl bg-brand-orange/10 p-3 rounded-2xl">door_sensor</span>
            <div>
              <p className="text-[10px] text-brand-green-deep/40 font-bold uppercase tracking-wider">보관함 상태</p>
              <p className="text-lg font-black text-brand-green-deep">92% 여유</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locker Size Plans */}
      <section className="mb-12">
        <h3 className="text-2xl font-black text-brand-green-deep mb-6">보관함 사이즈 및 요금안내</h3>
        <div className="space-y-6">
          {lockerSizes.map((plan, i) => (
            <div key={i} className="bg-brand-card p-8 rounded-[2rem] border border-brand-green-deep/5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xl transition-shadow">
              <div className="flex gap-6 items-start">
                <span className="material-symbols-outlined text-4xl text-brand-orange bg-white p-4 rounded-2xl shadow-sm flex-shrink-0">{plan.icon}</span>
                <div>
                  <h4 className="text-xl font-bold text-brand-green-deep mb-1">{plan.name}</h4>
                  <p className="text-brand-green-deep/50 text-sm mb-3 font-medium leading-relaxed">{plan.desc}</p>
                  <span className="text-[11px] bg-brand-green-deep/5 text-brand-green-deep font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">{plan.size}</span>
                </div>
              </div>
              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 border-brand-green-deep/5 pt-6 md:pt-0">
                <span className="text-3xl font-black text-brand-orange font-display">{plan.price}</span>
                <button 
                  onClick={() => onNavigate('summary')} 
                  className="bg-brand-green-deep hover:bg-brand-orange text-white px-6 py-3 rounded-full text-xs font-black transition-all mt-3 active:scale-95 shadow-md hover:shadow-lg"
                >
                  보관함 예약하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Smart Key Guide */}
      <section className="bg-brand-orange/5 border border-brand-orange/10 p-8 md:p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8">
        <div className="bg-brand-orange text-white w-16 h-16 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-orange/20">
          <span className="material-symbols-outlined text-3xl font-variation-settings-['FILL'_1]">vpn_key</span>
        </div>
        <div>
          <h4 className="text-lg font-black text-brand-green-deep mb-2">원격 스마트키로 실시간 수령/보관</h4>
          <p className="text-brand-green-deep/60 text-sm leading-relaxed font-medium">
            보관함 예약 확정 후 발급되는 모바일 스마트 원격키를 통해, 키오스크나 실물 열쇠 없이도 렌탈함 앞에 서서 버튼 한 번으로 문을 열고 장비를 손쉽게 찾거나 보관할 수 있습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
