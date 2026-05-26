/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { CartItem, Page } from '../types';
import { motion } from 'motion/react';
import LockerKeyModal from '../components/LockerKeyModal';

interface SummaryProps {
  cart: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onNavigate: (page: Page) => void;
  onProductClick?: (product: Product) => void;
}

export default function Summary({ cart, onUpdateQty, onRemove, onNavigate, onProductClick }: SummaryProps) {
  const [deliveryMethod, setDeliveryMethod] = useState<'curbside' | 'pickup'>('curbside');
  const [isLockerReserved, setIsLockerReserved] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [isLockerModalOpen, setIsLockerModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    lockerNumber: '13번 보관함',
    location: '롯데마트금천점',
    productName: '써밋 피크 2인용 텐트',
    rentalPeriod: '2026-05-19 ~ 2026-05-20'
  });

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = deliveryMethod === 'curbside' ? 15 : 0;
  const lockerFee = isLockerReserved ? 10 : 0;
  const protectionPlan = subtotal > 0 ? 22.50 : 0;
  const total = subtotal + deliveryFee + protectionPlan + lockerFee;

  const handleConfirmBooking = () => {
    if (cart.length === 0) {
      alert('대여하실 품목이 없습니다.');
      return;
    }
    const randomId = 'WD-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(randomId);
    setIsBooked(true);
  };

  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md flex justify-between items-center px-6 py-4 shadow-sm border-b border-brand-green-deep/5">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('home')} className="p-2 -ml-2 text-brand-green-deep active:scale-95 transition-transform">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="text-lg font-black tracking-tight">Wildwood Explorer</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-brand-green-deep relative">
            <span className="material-symbols-outlined ring-1 ring-brand-green-deep/10 p-1 rounded-full">shopping_bag</span>
            <span className="absolute top-1 right-1 bg-brand-orange w-4 h-4 rounded-full text-[10px] flex items-center justify-center text-white font-bold">{cart.length}</span>
          </button>
        </div>
      </header>

      <main className="pt-28 pb-32 px-6 max-w-6xl mx-auto">
        {isBooked ? (
          <motion.div
            key="success-receipt"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-brand-green-deep/5 text-center space-y-8 max-w-xl mx-auto"
          >
            <div className="w-24 h-24 bg-brand-green-light/20 text-brand-green-deep rounded-full flex items-center justify-center mx-auto shadow-lg animate-pulse">
              <span className="material-symbols-outlined text-5xl font-bold">check_circle</span>
            </div>

            <div>
              <span className="text-brand-orange font-black tracking-widest text-xs uppercase">Booking Complete</span>
              <h3 className="text-4xl font-black text-brand-green-deep mt-2">대여 예약 완료!</h3>
              <p className="text-brand-green-deep/50 font-medium mt-3">신청하신 내역에 맞추어 장비 예약이 안전하게 확정되었습니다.</p>
            </div>

            {/* Receipt Details Card */}
            <div className="bg-brand-bg rounded-[2rem] p-6 text-left space-y-4 max-w-md mx-auto border border-brand-green-deep/5">
              <div className="flex justify-between border-b border-brand-green-deep/5 pb-3">
                <span className="text-brand-green-deep/50 font-bold text-xs uppercase">예약 번호</span>
                <span className="font-black text-brand-green-deep text-sm">{bookingId}</span>
              </div>
              <div className="flex justify-between border-b border-brand-green-deep/5 pb-3">
                <span className="text-brand-green-deep/50 font-bold text-xs uppercase">대여 품목</span>
                <span className="font-black text-brand-green-deep text-sm truncate max-w-[200px]">
                  {cart.map(i => `${i.name} x${i.quantity}`).join(', ')}
                </span>
              </div>
              <div className="flex justify-between border-b border-brand-green-deep/5 pb-3">
                <span className="text-brand-green-deep/50 font-bold text-xs uppercase">인도 방식</span>
                <span className="font-black text-brand-green-deep text-sm">
                  {deliveryMethod === 'pickup' ? '스마트 무인 렌탈함 픽업' : '현장 배송'}
                </span>
              </div>
              {isLockerReserved && (
                <div className="flex justify-between border-b border-brand-green-deep/5 pb-3">
                  <span className="text-brand-green-deep/50 font-bold text-xs uppercase">무인 보관함</span>
                  <span className="font-black text-brand-green-deep text-sm">신청함 (10번 보관함 배정)</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-brand-green-deep/50 font-bold text-xs uppercase">총 결제 금액</span>
                <span className="font-black text-brand-orange text-lg">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Locker Keys section */}
            {(deliveryMethod === 'pickup' || isLockerReserved) && (
              <div className="space-y-4 max-w-md mx-auto">
                <h4 className="text-left font-black text-brand-green-deep text-sm ml-2 mb-2">🔑 내 보관함 스마트키</h4>
                {deliveryMethod === 'pickup' && (
                  <button 
                    onClick={() => {
                      setModalConfig({
                        lockerNumber: '13번 보관함',
                        location: '롯데마트금천점 (무인 렌탈함)',
                        productName: cart[0]?.name || '대여 장비',
                        rentalPeriod: '2026-05-19 ~ 2026-05-20'
                      });
                      setIsLockerModalOpen(true);
                    }}
                    className="w-full bg-[#2d3139] hover:bg-[#393e49] text-white py-4 rounded-2xl font-black text-base shadow-lg transition-all flex items-center justify-center gap-3 active:scale-95 border border-white/5"
                  >
                    <span className="material-symbols-outlined text-brand-orange">key</span>
                    <span>13번 렌탈함 문열기 (수령용)</span>
                  </button>
                )}
                {isLockerReserved && (
                  <button 
                    onClick={() => {
                      setModalConfig({
                        lockerNumber: '10번 보관함',
                        location: '캠핑장 내 입구 (무인 보관함)',
                        productName: '개인 소장 캠핑장비 보관',
                        rentalPeriod: '2026-05-19 ~ 2026-05-20'
                      });
                      setIsLockerModalOpen(true);
                    }}
                    className="w-full bg-[#2d3139] hover:bg-[#393e49] text-white py-4 rounded-2xl font-black text-base shadow-lg transition-all flex items-center justify-center gap-3 active:scale-95 border border-white/5"
                  >
                    <span className="material-symbols-outlined text-brand-orange">vpn_key</span>
                    <span>10번 보관함 문열기 (보관용)</span>
                  </button>
                )}
              </div>
            )}

            <div className="pt-4 flex gap-4 justify-center">
              <button 
                onClick={() => onNavigate('home')}
                className="bg-brand-green-deep text-white px-10 py-5 rounded-full font-black text-lg hover:shadow-2xl transition-all active:scale-95"
              >
                메인 화면으로 이동
              </button>
            </div>
          </motion.div>
        ) : (
          <>
            <section className="mb-12">
              <span className="text-brand-orange font-black tracking-[0.2em] text-[10px] uppercase mb-3 block">당신의 모험이 곧 시작됩니다</span>
              <h2 className="text-5xl font-black text-brand-green-deep tracking-tight leading-none mb-6">장비 요약</h2>
              <div className="h-1.5 w-24 bg-brand-orange rounded-full mb-10" />
            </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Items List */}
          <div className="lg:col-span-7 space-y-8">
            {/* Trip Context Card */}
            <div className="bg-brand-green-light/20 p-8 rounded-[2rem] flex items-center justify-between border border-brand-green-light/30">
              <div className="flex items-center gap-6">
                <div className="bg-brand-green-deep text-white p-4 rounded-2xl shadow-xl">
                  <span className="material-symbols-outlined scale-110">calendar_month</span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-brand-green-deep/40 uppercase tracking-widest mb-1">대여 기간</p>
                  <p className="font-black text-xl text-brand-green-deep">Oct 14 — Oct 18, 2023</p>
                </div>
              </div>
              <button className="text-brand-orange font-black text-sm hover:underline tracking-widest uppercase text-[10px]">수정</button>
            </div>

            <div className="space-y-6">
              {cart.length === 0 ? (
                <div className="text-center py-20 bg-brand-card rounded-[2rem]">
                  <p className="text-brand-green-deep/40 font-bold mb-6">장바구니가 비어 있습니다.</p>
                  <button onClick={() => onNavigate('home')} className="text-brand-orange font-bold hover:underline underline-offset-4">장비 둘러보기</button>
                </div>
              ) : (
                cart.map(item => (
                  <motion.div 
                    layout
                    key={item.id}
                    className="p-6 bg-white border border-brand-green-deep/5 rounded-[2rem] shadow-sm flex flex-col sm:flex-row gap-8 items-center group hover:shadow-xl transition-shadow"
                  >
                    <div 
                      onClick={() => onProductClick?.(item)}
                      className="w-32 h-32 rounded-[1.5rem] overflow-hidden bg-brand-card flex-shrink-0 relative cursor-pointer"
                    >
                      <img src={item.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={item.name} />
                    </div>
                    <div className="flex-grow w-full">
                      <div className="flex justify-between items-start mb-2">
                        <h3 
                          onClick={() => onProductClick?.(item)}
                          className="text-2xl font-black text-brand-green-deep cursor-pointer hover:text-brand-orange transition-colors"
                        >
                          {item.name}
                        </h3>
                        <p className="font-black text-xl text-brand-orange">${item.price.toFixed(2)}</p>
                      </div>
                      <p className="text-brand-green-deep/50 text-sm mb-6 font-medium leading-relaxed max-w-sm">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-brand-bg rounded-full p-1.5 border border-brand-green-deep/5">
                          <button 
                            onClick={() => onUpdateQty(item.id, -1)}
                            className="w-10 h-10 flex items-center justify-center text-brand-green-deep text-lg hover:bg-brand-card rounded-full font-black transtion-colors"
                          >
                            -
                          </button>
                          <span className="mx-6 font-black text-lg">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQty(item.id, 1)}
                            className="w-10 h-10 flex items-center justify-center text-brand-green-deep text-lg hover:bg-brand-card rounded-full font-black transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="flex items-center gap-2 text-brand-green-deep/30 hover:text-red-500 font-bold text-xs uppercase tracking-widest transition-colors"
                        >
                          <span className="material-symbols-outlined text-lg">delete</span> 삭제
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Logistics Selection */}
            <div className="pt-8">
              <h4 className="text-2xl font-black text-brand-green-deep mb-8 ml-2">배송/반납 방법 (배송 서비스)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="relative cursor-pointer group">
                  <input 
                    type="radio" 
                    name="delivery" 
                    checked={deliveryMethod === 'curbside'} 
                    onChange={() => setDeliveryMethod('curbside')} 
                    className="peer sr-only" 
                  />
                  <div className="p-8 rounded-[2rem] border-2 border-transparent bg-brand-card peer-checked:border-brand-orange peer-checked:bg-white peer-checked:shadow-2xl peer-checked:shadow-brand-orange/5 transition-all h-full">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="material-symbols-outlined text-brand-orange scale-110">local_shipping</span>
                      <p className="font-black text-brand-green-deep text-xl">현장 배송 (+ $15.00)</p>
                    </div>
                    <p className="text-sm font-medium text-brand-green-deep/40 leading-relaxed">여행의 편안한 시작을 위해 거주지나 트레일 입구까지 장비를 직접 배송해 드립니다.</p>
                  </div>
                </label>
                <label className="relative cursor-pointer group">
                  <input 
                    type="radio" 
                    name="delivery" 
                    checked={deliveryMethod === 'pickup'} 
                    onChange={() => setDeliveryMethod('pickup')} 
                    className="peer sr-only" 
                  />
                  <div className="p-8 rounded-[2rem] border-2 border-transparent bg-brand-card peer-checked:border-brand-orange peer-checked:bg-white peer-checked:shadow-2xl peer-checked:shadow-brand-orange/5 transition-all h-full">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="material-symbols-outlined text-brand-orange scale-110">touch_app</span>
                      <p className="font-black text-brand-green-deep text-xl">스마트 무인 렌탈함 픽업 (무료)</p>
                    </div>
                    <p className="text-sm font-medium text-brand-green-deep/40 leading-relaxed">배송비 없이 가까운 무인 렌탈함에서 24시간 비대면으로 직접 수령 및 반납하세요.</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Additional Services Selection */}
            <div className="pt-8">
              <h4 className="text-2xl font-black text-brand-green-deep mb-8 ml-2">스마트 무인 보관 서비스</h4>
              <div 
                onClick={() => setIsLockerReserved(!isLockerReserved)}
                className={`p-8 rounded-[2rem] border-2 cursor-pointer transition-all flex items-center justify-between ${isLockerReserved ? 'border-brand-orange bg-white shadow-2xl shadow-brand-orange/5' : 'border-transparent bg-brand-card'}`}
              >
                <div className="flex items-center gap-4">
                  <span className={`material-symbols-outlined ${isLockerReserved ? 'text-brand-orange' : 'text-brand-green-deep/40'} scale-110`}>
                    {isLockerReserved ? 'check_box' : 'check_box_outline_blank'}
                  </span>
                  <div>
                    <p className="font-black text-brand-green-deep text-xl">캠핑장비 무인 보관 (스마트 IoT 보관함) (+ $10.00)</p>
                    <p className="text-sm font-medium text-brand-green-deep/40 leading-relaxed">무거운 캠핑 장비는 스마트 IoT 보관함에 맡기고 가볍게 떠나세요. 전용 앱으로 언제든 관리 가능합니다.</p>
                  </div>
                </div>
                <span className="font-black text-brand-orange text-lg">+$10.00</span>
              </div>
            </div>
          </div>

          {/* Checkout Totals */}
          <div className="lg:col-span-5">
            <div className="bg-brand-green-deep p-10 rounded-[2.5rem] text-white sticky top-32 shadow-2xl shadow-brand-green-deep/20 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
              <h3 className="text-3xl font-black mb-8 border-b border-white/10 pb-6 relative z-10">주문 내역</h3>
              
              <div className="space-y-6 mb-12 relative z-10">
                <div className="flex justify-between items-center text-white/60 font-bold text-sm uppercase tracking-widest">
                  <span>장비 소계</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-white/60 font-bold text-sm uppercase tracking-widest">
                  <span>대여 기간</span>
                  <span className="text-white">포함됨</span>
                </div>
                <div className="flex justify-between items-center text-white/60 font-bold text-sm uppercase tracking-widest">
                  <span>배송 서비스</span>
                  <span className="text-white">{deliveryFee > 0 ? `$${deliveryFee.toFixed(2)}` : '무료'}</span>
                </div>
                {isLockerReserved && (
                  <div className="flex justify-between items-center text-white/60 font-bold text-sm uppercase tracking-widest">
                    <span>장비보관함 예약</span>
                    <span className="text-white">$10.00</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-white/60 font-bold text-sm uppercase tracking-widest">
                  <span>손상 방지 보험</span>
                  <span className="text-white">${protectionPlan.toFixed(2)}</span>
                </div>
                <div className="h-px bg-white/10 my-4" />
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black">총 합계</span>
                  <span className="text-5xl font-black text-brand-green-light">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <button 
                  onClick={handleConfirmBooking}
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-6 rounded-full font-black text-xl transition-all shadow-xl shadow-brand-orange/20 flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  예약 확정하기
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <div className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  안전한 SSL 암호화 결제
                </div>
              </div>

              {/* Reward points */}
              <div className="mt-12 p-6 rounded-3xl bg-white/5 border border-white/10 flex gap-4 relative z-10 group overflow-hidden">
                <div className="absolute inset-0 bg-brand-orange/5 group-hover:opacity-100 opacity-0 transition-opacity" />
                <div className="bg-brand-green-light text-brand-green-deep w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg relative z-10">
                  <span className="material-symbols-outlined font-variation-settings-['FILL'_1] scale-110">eco</span>
                </div>
                <div className="relative z-10">
                  <p className="text-brand-green-light font-black text-base mb-1">탐험가 리워드</p>
                  <p className="text-white/50 text-[11px] leading-relaxed font-medium">
                    이번 예약으로 <span className="text-brand-green-light font-black">65 어드벤처 포인트</span>를 획득하게 되며, 다음 탐험 시 사용 가능합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
      </main>

      <LockerKeyModal 
        isOpen={isLockerModalOpen} 
        onClose={() => setIsLockerModalOpen(false)}
        lockerNumber={modalConfig.lockerNumber}
        location={modalConfig.location}
        productName={modalConfig.productName}
        rentalPeriod={modalConfig.rentalPeriod}
      />
    </div>
  );
}
