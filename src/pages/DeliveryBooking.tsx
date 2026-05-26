/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Page } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface DeliveryBookingProps {
  onNavigate: (page: Page) => void;
}

export default function DeliveryBooking({ onNavigate }: DeliveryBookingProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    campsite: '',
    deliveryDate: '2026-05-20',
    deliveryTime: '10:00',
    pickupDate: '2026-05-23',
    pickupTime: '14:00',
    notes: '',
    installService: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a random booking ID
    const randomId = 'WD-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(randomId);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md flex justify-between items-center px-6 py-4 shadow-sm border-b border-brand-green-deep/5">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('home')} className="p-2 -ml-2 text-brand-green-deep active:scale-95 transition-transform">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-lg font-black tracking-tight">와일드우드 익스플로러</h1>
        </div>
        <button 
          onClick={() => onNavigate('home')}
          className="text-brand-orange font-bold text-sm hover:underline"
        >
          홈으로
        </button>
      </header>

      <main className="pt-28 pb-32 px-6 max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="booking-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Page Title */}
              <section className="mb-10 text-center">
                <span className="text-brand-orange font-black tracking-[0.2em] text-[10px] uppercase mb-3 block">Premium Logistics</span>
                <h2 className="text-4xl font-black text-brand-green-deep tracking-tight leading-none mb-4">캠핑장비 배송 예약</h2>
                <p className="text-brand-green-deep/50 font-medium">캠핑장이나 원하시는 목적지로 편리하게 장비를 배송받고 반납하세요.</p>
                <div className="h-1.5 w-24 bg-brand-orange rounded-full mx-auto mt-6" />
              </section>

              {/* Progress Steps */}
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-black text-sm transition-all ${step === 1 ? 'bg-brand-orange text-white' : 'bg-brand-green-deep text-white'}`}>
                  1
                </div>
                <div className="w-12 h-1 bg-brand-green-deep/10 rounded-full" />
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-black text-sm transition-all ${step === 2 ? 'bg-brand-orange text-white' : 'bg-brand-green-deep/10 text-brand-green-deep/40'}`}>
                  2
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-brand-green-deep/5 border border-brand-green-deep/5 space-y-8">
                {step === 1 ? (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-brand-green-deep mb-6">1. 배송지 및 예약자 정보</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-black uppercase text-brand-green-deep/50 tracking-wider mb-2">성함</label>
                        <input 
                          type="text" 
                          name="name" 
                          required 
                          value={formData.name} 
                          onChange={handleChange}
                          placeholder="홍길동"
                          className="w-full p-4 rounded-2xl bg-brand-bg border border-brand-green-deep/5 focus:ring-2 focus:ring-brand-orange focus:border-transparent text-brand-green-deep font-semibold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black uppercase text-brand-green-deep/50 tracking-wider mb-2">연락처</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          required 
                          value={formData.phone} 
                          onChange={handleChange}
                          placeholder="010-1234-5678"
                          className="w-full p-4 rounded-2xl bg-brand-bg border border-brand-green-deep/5 focus:ring-2 focus:ring-brand-orange focus:border-transparent text-brand-green-deep font-semibold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase text-brand-green-deep/50 tracking-wider mb-2">배송 주소</label>
                      <input 
                        type="text" 
                        name="address" 
                        required 
                        value={formData.address} 
                        onChange={handleChange}
                        placeholder="예) 강원도 홍천군 서면 한치골길 262 또는 자택 주소"
                        className="w-full p-4 rounded-2xl bg-brand-bg border border-brand-green-deep/5 focus:ring-2 focus:ring-brand-orange focus:border-transparent text-brand-green-deep font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase text-brand-green-deep/50 tracking-wider mb-2">캠핑장 이름 및 사이트 번호 (선택)</label>
                      <input 
                        type="text" 
                        name="campsite" 
                        value={formData.campsite} 
                        onChange={handleChange}
                        placeholder="예) 자라섬 캠핑장 오토캠핑 B-12"
                        className="w-full p-4 rounded-2xl bg-brand-bg border border-brand-green-deep/5 focus:ring-2 focus:ring-brand-orange focus:border-transparent text-brand-green-deep font-semibold"
                      />
                    </div>

                    <div className="pt-6">
                      <button 
                        type="button" 
                        onClick={() => {
                          if (formData.name && formData.phone && formData.address) {
                            setStep(2);
                          } else {
                            alert('필수 정보를 모두 입력해 주세요.');
                          }
                        }}
                        className="w-full bg-brand-green-deep text-white py-5 rounded-full font-black text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
                      >
                        다음 단계로
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-brand-green-deep mb-6">2. 배송 및 회수 일정</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-black uppercase text-brand-green-deep/50 tracking-wider mb-2">배송 희망일</label>
                        <input 
                          type="date" 
                          name="deliveryDate" 
                          required 
                          value={formData.deliveryDate} 
                          onChange={handleChange}
                          className="w-full p-4 rounded-2xl bg-brand-bg border border-brand-green-deep/5 focus:ring-2 focus:ring-brand-orange focus:border-transparent text-brand-green-deep font-semibold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black uppercase text-brand-green-deep/50 tracking-wider mb-2">배송 희망 시간</label>
                        <select 
                          name="deliveryTime" 
                          value={formData.deliveryTime} 
                          onChange={handleChange}
                          className="w-full p-4 rounded-2xl bg-brand-bg border border-brand-green-deep/5 focus:ring-2 focus:ring-brand-orange focus:border-transparent text-brand-green-deep font-semibold"
                        >
                          <option value="09:00">오전 09:00</option>
                          <option value="11:00">오전 11:00</option>
                          <option value="13:00">오후 01:00</option>
                          <option value="15:00">오후 03:00</option>
                          <option value="17:00">오후 05:00</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-black uppercase text-brand-green-deep/50 tracking-wider mb-2">회수 희망일 (반납)</label>
                        <input 
                          type="date" 
                          name="pickupDate" 
                          required 
                          value={formData.pickupDate} 
                          onChange={handleChange}
                          className="w-full p-4 rounded-2xl bg-brand-bg border border-brand-green-deep/5 focus:ring-2 focus:ring-brand-orange focus:border-transparent text-brand-green-deep font-semibold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black uppercase text-brand-green-deep/50 tracking-wider mb-2">회수 희망 시간</label>
                        <select 
                          name="pickupTime" 
                          value={formData.pickupTime} 
                          onChange={handleChange}
                          className="w-full p-4 rounded-2xl bg-brand-bg border border-brand-green-deep/5 focus:ring-2 focus:ring-brand-orange focus:border-transparent text-brand-green-deep font-semibold"
                        >
                          <option value="10:00">오전 10:00</option>
                          <option value="12:00">오후 12:00</option>
                          <option value="14:00">오후 02:00</option>
                          <option value="16:00">오후 04:00</option>
                          <option value="18:00">오후 06:00</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase text-brand-green-deep/50 tracking-wider mb-2">배송/회수 요청 사항</label>
                      <textarea 
                        name="notes" 
                        rows={3}
                        value={formData.notes} 
                        onChange={handleChange}
                        placeholder="예) 텐트는 사이트 데크 위에 놓아주세요. 부재 시 연락 바랍니다."
                        className="w-full p-4 rounded-2xl bg-brand-bg border border-brand-green-deep/5 focus:ring-2 focus:ring-brand-orange focus:border-transparent text-brand-green-deep font-semibold"
                      />
                    </div>

                    {/* Premium Service Option */}
                    <div 
                      onClick={() => setFormData(prev => ({ ...prev, installService: !prev.installService }))}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${formData.installService ? 'border-brand-orange bg-brand-orange/5' : 'border-transparent bg-brand-bg'}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`material-symbols-outlined ${formData.installService ? 'text-brand-orange' : 'text-brand-green-deep/40'}`}>
                          {formData.installService ? 'check_box' : 'check_box_outline_blank'}
                        </span>
                        <div>
                          <p className="font-bold text-brand-green-deep text-base">전문가 설치 및 철수 대행 옵션</p>
                          <p className="text-xs text-brand-green-deep/50 mt-1">텐트 설치 및 철수를 현장에서 대신 처리해 드립니다. (+ $30.00)</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-6">
                      <button 
                        type="button" 
                        onClick={() => setStep(1)}
                        className="w-full bg-brand-bg text-brand-green-deep py-5 rounded-full font-black text-lg hover:bg-brand-card transition-all active:scale-95"
                      >
                        이전 단계
                      </button>
                      <button 
                        type="submit"
                        className="w-full bg-brand-orange text-white py-5 rounded-full font-black text-lg hover:shadow-xl hover:shadow-brand-orange/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                      >
                        배송 예약 완료
                        <span className="material-symbols-outlined">check</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="booking-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-brand-green-deep/5 text-center space-y-8"
            >
              <div className="w-24 h-24 bg-brand-green-light/20 text-brand-green-deep rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="material-symbols-outlined text-5xl font-bold">local_shipping</span>
              </div>

              <div>
                <span className="text-brand-orange font-black tracking-widest text-xs uppercase">Reservation Confirmed</span>
                <h3 className="text-4xl font-black text-brand-green-deep mt-2">배송 예약 완료!</h3>
                <p className="text-brand-green-deep/50 font-medium mt-3">신청하신 일정에 맞추어 안전하게 배송해 드리겠습니다.</p>
              </div>

              {/* Receipt Details Card */}
              <div className="bg-brand-bg rounded-[2rem] p-6 text-left space-y-4 max-w-md mx-auto border border-brand-green-deep/5">
                <div className="flex justify-between border-b border-brand-green-deep/5 pb-3">
                  <span className="text-brand-green-deep/50 font-bold text-xs uppercase">예약 번호</span>
                  <span className="font-black text-brand-green-deep text-sm">{bookingId}</span>
                </div>
                <div className="flex justify-between border-b border-brand-green-deep/5 pb-3">
                  <span className="text-brand-green-deep/50 font-bold text-xs uppercase">예약자명</span>
                  <span className="font-black text-brand-green-deep text-sm">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-brand-green-deep/5 pb-3">
                  <span className="text-brand-green-deep/50 font-bold text-xs uppercase">배송지</span>
                  <span className="font-black text-brand-green-deep text-sm truncate max-w-[240px]">{formData.address} {formData.campsite}</span>
                </div>
                <div className="flex justify-between border-b border-brand-green-deep/5 pb-3">
                  <span className="text-brand-green-deep/50 font-bold text-xs uppercase">배송 일정</span>
                  <span className="font-black text-brand-green-deep text-sm">{formData.deliveryDate} ({formData.deliveryTime})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-green-deep/50 font-bold text-xs uppercase">전문가 대행 서비스</span>
                  <span className="font-black text-brand-green-deep text-sm">{formData.installService ? '신청함 (+$30.00)' : '신청 안함'}</span>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => onNavigate('home')}
                  className="bg-brand-green-deep text-white px-10 py-5 rounded-full font-black text-lg hover:shadow-2xl transition-all active:scale-95"
                >
                  메인 화면으로 이동
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
