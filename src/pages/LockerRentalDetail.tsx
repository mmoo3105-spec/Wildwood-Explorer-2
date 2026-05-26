/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Page } from '../types';

interface LockerRentalDetailProps {
  onNavigate: (page: Page) => void;
}

export default function LockerRentalDetail({ onNavigate }: LockerRentalDetailProps) {
  const steps = [
    { num: '01', title: '온라인 대여 예약', desc: '와일드우드 앱/웹에서 필요 장비를 선택하고 대여 기간을 지정하여 예약합니다.', icon: 'online_prediction' },
    { num: '02', title: '스마트키 원격 수령', desc: '예약이 완료되면 카카오톡/앱 알림으로 배정된 보관함 번호와 스마트 도어락 열기 버튼이 발급됩니다.', icon: 'key' },
    { num: '03', title: '비대면 자유 수령', desc: '24시간 운영되는 무인 보관함 거점에 방문하여 스마트 원격키로 문을 열고 장비를 꺼냅니다.', icon: 'inventory' },
    { num: '04', title: '사용 후 간편 반납', desc: '대여 종료일까지 다시 보관함 거점에 복귀하여 스마트키로 문을 열어 장비를 넣고 반납 버튼을 누릅니다.', icon: 'assignment_returned' },
  ];

  const locations = [
    { name: '롯데마트 금천점 무인렌탈 센터', add: '서울 금천구 시흥대로 391', operating: '24시간 연중무휴', capacity: '18개 보관함', tel: '1644-1234' },
    { name: '이마트 목동점 캠킵존', add: '서울 양천구 오목로 340', operating: '10:00 ~ 23:00 (마트 정기 휴무일 제외)', capacity: '12개 보관함', tel: '1644-1234' },
    { name: '메가트리아 안양 스마트라운지', add: '경기 안양시 만안구 안양로 112', operating: '24시간 연중무휴', capacity: '8개 보관함', tel: '1644-5678' }
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
      <div className="bg-brand-orange text-white rounded-[2.5rem] p-10 md:p-12 mb-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green-deep/15 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="relative z-10 max-w-xl">
          <span className="text-[10px] bg-brand-green-deep text-white px-4 py-1.5 rounded-full font-black tracking-widest uppercase mb-4 inline-block">24 HOURS CONTACTLESS</span>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">24시간 무인 렌탈</h1>
          <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed font-medium">
            대기 시간도, 번거로운 대면 서류 확인 작업도 필요 없습니다. 원하시는 시간에 언제든 편하게 스마트 IoT 무인 렌탈함에서 안전하고 빠른 비대면 수령 및 반납을 경험하세요.
          </p>
        </div>
      </div>

      {/* Process Flow */}
      <section className="mb-16">
        <h3 className="text-2xl font-black text-brand-green-deep mb-8 text-center">무인 대여 반납 프로세스</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-white border border-brand-green-deep/5 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center text-center relative">
              <span className="absolute top-4 left-6 text-4xl font-black text-brand-orange/10 font-display">{step.num}</span>
              <span className="material-symbols-outlined text-4xl text-brand-orange bg-brand-orange/10 p-4 rounded-2xl mb-4 mt-4">{step.icon}</span>
              <h4 className="text-lg font-bold text-brand-green-deep mb-2">{step.title}</h4>
              <p className="text-brand-green-deep/50 text-xs font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Locker Locations */}
      <section className="mb-12">
        <h3 className="text-2xl font-black text-brand-green-deep mb-6">스마트 렌탈함 거점 안내</h3>
        <div className="space-y-6">
          {locations.map((loc, i) => (
            <div key={i} className="bg-brand-card p-8 rounded-[2rem] border border-brand-green-deep/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold text-brand-green-deep mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-orange">location_on</span>
                  {loc.name}
                </h4>
                <p className="text-brand-green-deep/50 text-xs font-semibold mb-3">{loc.add}</p>
                <div className="flex gap-4">
                  <span className="text-[10px] bg-brand-green-deep/5 text-brand-green-deep font-bold px-3 py-1 rounded-full">{loc.operating}</span>
                  <span className="text-[10px] bg-brand-orange/10 text-brand-orange font-bold px-3 py-1 rounded-full">{loc.capacity}</span>
                </div>
              </div>
              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 border-brand-green-deep/5 pt-6 md:pt-0">
                <span className="text-brand-green-deep/60 text-xs font-bold mb-2">고객센터: {loc.tel}</span>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="bg-brand-orange hover:bg-brand-orange/95 text-white px-6 py-3 rounded-full text-xs font-black transition-all active:scale-95 shadow-md"
                >
                  장비 렌탈하러 가기
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
