/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Page } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface CleaningBookingProps {
  onNavigate: (page: Page) => void;
}

export default function CleaningBooking({ onNavigate }: CleaningBookingProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    equipmentType: 'tent',
    modelName: '',
    serviceType: 'basic', // basic, coating, premium
    pickupDate: '2026-05-20',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = 'CC-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(randomId);
    setIsSubmitted(true);
  };

  const getServicePrice = () => {
    let basePrice = 30; // 침낭, 기타 기본
    if (formData.equipmentType === 'tent') basePrice = 50;
    if (formData.equipmentType === 'tarp') basePrice = 40;

    if (formData.serviceType === 'coating') return basePrice + 30; // 발수 코팅 추가
    if (formData.serviceType === 'premium') return basePrice + 50; // 정밀 곰팡이 제거 + 코팅
    return basePrice;
  };

  const getServiceTypeName = () => {
    if (formData.serviceType === 'basic') return '일반 세척 & 살균 소독';
    if (formData.serviceType === 'coating') return '프리미엄 방수/발수 코팅';
    return '스페셜 정밀 케어 (곰팡이 제거 + 코팅)';
  };

  const getEquipmentTypeName = () => {
    if (formData.equipmentType === 'tent') return '텐트 (Tent)';
    if (formData.equipmentType === 'tarp') return '타프 (Tarp)';
    if (formData.equipmentType === 'sleeping_bag') return '침낭 (Sleeping Bag)';
    return '기타 장비';
  };

  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md flex justify-between items-center px-6 py-4 shadow-sm border-b border-brand-green-deep/5">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('logistics-hub')} className="p-2 -ml-2 text-brand-green-deep active:scale-95 transition-transform">
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
              key="cleaning-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Page Title */}
              <section className="mb-10 text-center">
                <span className="text-brand-orange font-black tracking-[0.2em] text-[10px] uppercase mb-3 block">Premium Gear Care</span>
                <h2 className="text-4xl font-black text-brand-green-deep tracking-tight leading-none mb-4">세척 & 코팅 서비스 예약</h2>
                <p className="text-brand-green-deep/50 font-medium">소중한 내 장비를 전문 세탁 엔지니어가 꼼꼼하게 살균/코팅 케어해 드립니다.</p>
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
                    <h3 className="text-2xl font-black text-brand-green-deep mb-6">1. 케어 장비 및 서비스 옵션</h3>

                    <div>
                      <label className="block text-xs font-black uppercase text-brand-green-deep/50 tracking-wider mb-2">장비 분류</label>
                      <select 
                        name="equipmentType" 
                        value={formData.equipmentType} 
                        onChange={handleChange}
                        className="w-full p-4 rounded-2xl bg-brand-bg border border-brand-green-deep/5 focus:ring-2 focus:ring-brand-orange focus:border-transparent text-brand-green-deep font-semibold"
                      >
                        <option value="tent">텐트 (Tent)</option>
                        <option value="tarp">타프 (Tarp)</option>
                        <option value="sleeping_bag">침낭 (Sleeping Bag)</option>
                        <option value="other">기타 장비</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase text-brand-green-deep/50 tracking-wider mb-2">브랜드 및 모델명</label>
                      <input 
                        type="text" 
                        name="modelName" 
                        required 
                        value={formData.modelName} 
                        onChange={handleChange}
                        placeholder="예) 미니멀웍스 쉘터G, 헬리녹스 등"
                        className="w-full p-4 rounded-2xl bg-brand-bg border border-brand-green-deep/5 focus:ring-2 focus:ring-brand-orange focus:border-transparent text-brand-green-deep font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase text-brand-green-deep/50 tracking-wider mb-4">서비스 유형</label>
                      <div className="grid grid-cols-1 gap-4">
                        <label className="relative cursor-pointer group">
                          <input 
                            type="radio" 
                            name="serviceType" 
                            value="basic" 
                            checked={formData.serviceType === 'basic'} 
                            onChange={handleChange}
                            className="peer sr-only" 
                          />
                          <div className="p-5 rounded-2xl border-2 border-transparent bg-brand-bg peer-checked:border-brand-orange peer-checked:bg-brand-orange/5 transition-all flex justify-between items-center">
                            <div>
                              <p className="font-bold text-brand-green-deep">기본 세척 & 정밀 스팀 살균</p>
                              <p className="text-xs text-brand-green-deep/40 mt-1">흙먼지 세척, 얼룩 케어, 99.9% 스팀 고온 살균 소독</p>
                            </div>
                            <span className="font-black text-brand-green-deep">{formData.equipmentType === 'tent' ? '$50' : formData.equipmentType === 'tarp' ? '$40' : '$30'}</span>
                          </div>
                        </label>

                        <label className="relative cursor-pointer group">
                          <input 
                            type="radio" 
                            name="serviceType" 
                            value="coating" 
                            checked={formData.serviceType === 'coating'} 
                            onChange={handleChange}
                            className="peer sr-only" 
                          />
                          <div className="p-5 rounded-2xl border-2 border-transparent bg-brand-bg peer-checked:border-brand-orange peer-checked:bg-brand-orange/5 transition-all flex justify-between items-center">
                            <div>
                              <p className="font-bold text-brand-green-deep">프리미엄 방수/발수 코팅 서비스</p>
                              <p className="text-xs text-brand-green-deep/40 mt-1">기본 세척 + 아웃도어 전용 정밀 발수 코팅 시공 추가</p>
                            </div>
                            <span className="font-black text-brand-orange">{formData.equipmentType === 'tent' ? '$80' : formData.equipmentType === 'tarp' ? '$70' : '$60'}</span>
                          </div>
                        </label>

                        <label className="relative cursor-pointer group">
                          <input 
                            type="radio" 
                            name="serviceType" 
                            value="premium" 
                            checked={formData.serviceType === 'premium'} 
                            onChange={handleChange}
                            className="peer sr-only" 
                          />
                          <div className="p-5 rounded-2xl border-2 border-transparent bg-brand-bg peer-checked:border-brand-orange peer-checked:bg-brand-orange/5 transition-all flex justify-between items-center">
                            <div>
                              <p className="font-bold text-brand-green-deep">스페셜 정밀 케어 (곰팡이 집중 제거 + 코팅)</p>
                              <p className="text-xs text-brand-green-deep/40 mt-1">오염 및 곰팡이 특수 정밀 복원 + 발수 코팅 시공</p>
                            </div>
                            <span className="font-black text-brand-orange">{formData.equipmentType === 'tent' ? '$100' : formData.equipmentType === 'tarp' ? '$90' : '$80'}</span>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="pt-6">
                      <button 
                        type="button" 
                        onClick={() => {
                          if (formData.modelName) {
                            setStep(2);
                          } else {
                            alert('장비 모델명을 입력해 주세요.');
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
                    <h3 className="text-2xl font-black text-brand-green-deep mb-6">2. 수거 정보 및 예약 완료</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-black uppercase text-brand-green-deep/50 tracking-wider mb-2">예약자 성함</label>
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
                      <label className="block text-xs font-black uppercase text-brand-green-deep/50 tracking-wider mb-2">장비 수거 주소</label>
                      <input 
                        type="text" 
                        name="address" 
                        required 
                        value={formData.address} 
                        onChange={handleChange}
                        placeholder="예) 서울시 마포구 아현동..."
                        className="w-full p-4 rounded-2xl bg-brand-bg border border-brand-green-deep/5 focus:ring-2 focus:ring-brand-orange focus:border-transparent text-brand-green-deep font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase text-brand-green-deep/50 tracking-wider mb-2">수거 희망 날짜</label>
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
                      <label className="block text-xs font-black uppercase text-brand-green-deep/50 tracking-wider mb-2">요청 사항</label>
                      <textarea 
                        name="notes" 
                        rows={3}
                        value={formData.notes} 
                        onChange={handleChange}
                        placeholder="예) 문 앞에 둘 테니 수거해가세요. 스킨 오염 부분 집중 세척 부탁드립니다."
                        className="w-full p-4 rounded-2xl bg-brand-bg border border-brand-green-deep/5 focus:ring-2 focus:ring-brand-orange focus:border-transparent text-brand-green-deep font-semibold"
                      />
                    </div>

                    {/* Total Price Summary */}
                    <div className="bg-brand-bg p-6 rounded-2xl border border-brand-green-deep/5 flex justify-between items-center">
                      <span className="font-bold text-brand-green-deep">최종 세척 및 케어 비용</span>
                      <span className="font-black text-brand-orange text-2xl">${getServicePrice()}.00</span>
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
                        케어 서비스 신청 완료
                        <span className="material-symbols-outlined">check</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="cleaning-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-brand-green-deep/5 text-center space-y-8"
            >
              <div className="w-24 h-24 bg-brand-green-light/20 text-brand-green-deep rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="material-symbols-outlined text-5xl font-bold">clean_hands</span>
              </div>

              <div>
                <span className="text-brand-orange font-black tracking-widest text-xs uppercase">Care Reservation Confirmed</span>
                <h3 className="text-4xl font-black text-brand-green-deep mt-2">케어 서비스 예약 완료!</h3>
                <p className="text-brand-green-deep/50 font-medium mt-3">신청하신 일정에 맞추어 전문 수거팀이 방문하도록 하겠습니다.</p>
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
                  <span className="text-brand-green-deep/50 font-bold text-xs uppercase">의뢰 장비</span>
                  <span className="font-black text-brand-green-deep text-sm">{getEquipmentTypeName()} ({formData.modelName})</span>
                </div>
                <div className="flex justify-between border-b border-brand-green-deep/5 pb-3">
                  <span className="text-brand-green-deep/50 font-bold text-xs uppercase">서비스 유형</span>
                  <span className="font-black text-brand-green-deep text-sm">{getServiceTypeName()}</span>
                </div>
                <div className="flex justify-between border-b border-brand-green-deep/5 pb-3">
                  <span className="text-brand-green-deep/50 font-bold text-xs uppercase">수거 일정</span>
                  <span className="font-black text-brand-green-deep text-sm">{formData.pickupDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-green-deep/50 font-bold text-xs uppercase">총 결제 비용</span>
                  <span className="font-black text-brand-orange text-lg">${getServicePrice()}.00</span>
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
