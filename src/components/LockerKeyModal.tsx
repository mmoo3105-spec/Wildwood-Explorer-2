/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';

interface LockerKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  lockerNumber?: string;
  location?: string;
  productName?: string;
  rentalPeriod?: string;
}

export default function LockerKeyModal({
  isOpen,
  onClose,
  lockerNumber = '13번 보관함',
  location = '롯데마트금천점',
  productName = '써밋 피크 2인용 텐트',
  rentalPeriod = '2026-05-19 ~ 2026-05-20'
}: LockerKeyModalProps) {
  const [isOpenState, setIsOpenState] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  if (!isOpen) return null;

  const handleOpenLocker = () => {
    if (isOpenState || isOpening) return;
    setIsOpening(true);
    // Simulate IoT network delay
    setTimeout(() => {
      setIsOpening(false);
      setIsOpenState(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      {/* Phone Mockup Frame */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-[360px] h-[640px] bg-[#22252D] rounded-[3rem] shadow-2xl border-8 border-[#1a1b1f] overflow-hidden flex flex-col justify-between text-white relative font-sans"
      >
        {/* Top Status Bar (Phone mockup) */}
        <div className="px-6 pt-6 pb-2 flex justify-between items-center text-[10px] opacity-40 font-mono">
          <span>CAMKEEP IoT</span>
          <div className="flex gap-1.5 items-center">
            <span className="material-symbols-outlined text-[10px]">wifi</span>
            <span className="material-symbols-outlined text-[10px]">battery_5_bar</span>
            <span>15:58</span>
          </div>
        </div>

        {/* Screen Header */}
        <header className="px-6 py-2 flex items-center justify-between border-b border-white/5">
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
          <h2 className="text-base font-bold tracking-tight">렌탈함 문열기</h2>
          <div className="w-8" /> {/* Balance spacer */}
        </header>

        {/* Main Content Screen */}
        <div className="flex-grow flex flex-col justify-around px-6 py-4">
          
          {/* Reservation Info Card */}
          <div className="text-center space-y-1">
            <h3 className="text-xl font-extrabold tracking-tight text-white">{lockerNumber}</h3>
            <p className="text-xs text-white/60 font-semibold">{location}</p>
            <p className="text-xs text-brand-orange font-bold px-3 py-1 bg-brand-orange/10 rounded-full inline-block mt-1">{productName}</p>
            <p className="text-[10px] text-white/40 font-mono mt-1">{rentalPeriod}</p>
          </div>

          {/* Locker Graphic */}
          <div className="flex justify-center my-4">
            <div className="relative w-44 h-48 bg-[#181a1f] rounded-2xl border border-white/10 shadow-inner flex flex-col justify-between p-4 overflow-hidden">
              {/* Locker Door (3D perspective / flip effect) */}
              <motion.div 
                animate={{ 
                  rotateY: isOpenState ? -100 : 0, 
                  x: isOpenState ? -20 : 0
                }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute inset-0 bg-[#2d3139] border border-white/10 rounded-2xl p-4 flex flex-col justify-between shadow-2xl origin-left z-20 cursor-pointer"
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                {/* Locker status labels & light */}
                <div className="flex justify-between items-center">
                  <div className="text-[8px] font-black tracking-widest text-white/40 font-mono flex gap-3">
                    <span className={!isOpenState && !isOpening ? 'text-white/80' : ''}>LOCK</span>
                    <span className={isOpenState ? 'text-emerald-400 font-extrabold' : ''}>OPEN</span>
                  </div>
                  
                  {/* LED Indicator Light */}
                  <div className="relative flex items-center justify-center">
                    <motion.div 
                      animate={isOpening ? { opacity: [1, 0.3, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 0.5 }}
                      className={`w-5 h-1.5 rounded-full transition-all duration-300 ${
                        isOpenState 
                          ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' 
                          : isOpening 
                            ? 'bg-yellow-400 shadow-[0_0_8px_#facc15]'
                            : 'bg-sky-400 shadow-[0_0_8px_#38bdf8]'
                      }`}
                    />
                  </div>
                </div>

                {/* Locker Handle */}
                <div className="flex justify-end pr-1">
                  <div className="w-3.5 h-10 bg-gradient-to-r from-gray-600 to-gray-700 rounded border border-black/30 shadow-md flex items-center justify-center">
                    <div className="w-1.5 h-6 bg-black/20 rounded-sm" />
                  </div>
                </div>

                {/* Locker Box Label */}
                <div className="text-[9px] font-black font-mono text-white/20">
                  BOX {lockerNumber.replace(/[^0-9]/g, '') || '13'}
                </div>
              </motion.div>

              {/* Inside the locker (visible when door opens) */}
              <div className="absolute inset-0 bg-[#0f1115] rounded-2xl flex flex-col items-center justify-center p-4 z-10">
                <span className="material-symbols-outlined text-4xl text-brand-orange animate-bounce">inventory_2</span>
                <span className="text-[10px] font-black text-emerald-400 mt-2">대여 물품 수령가능</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button 
              onClick={handleOpenLocker}
              className={`w-full py-4 rounded-full font-black text-sm tracking-wide transition-all shadow-lg active:scale-98 ${
                isOpenState
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : isOpening
                    ? 'bg-yellow-500 text-black shadow-yellow-500/10 cursor-not-allowed'
                    : 'bg-[#5b6375] text-white hover:bg-[#687186] shadow-[#5b6375]/10'
              }`}
            >
              {isOpenState ? '렌탈함 열림 완료' : isOpening ? '신호 전송 중...' : '렌탈함 열기'}
            </button>
            <button 
              onClick={onClose}
              className="w-full py-4 bg-transparent border border-white/10 rounded-full font-black text-sm tracking-wide text-white/60 hover:text-white transition-colors"
            >
              취소
            </button>
          </div>

        </div>

        {/* Bottom Phone Nav (Simulates mobile web browser footer) */}
        <div className="bg-[#17191e] px-6 py-4 flex justify-between items-center border-t border-white/5 text-white/40">
          <span className="material-symbols-outlined text-sm cursor-pointer hover:text-white transition-colors">chevron_left</span>
          <span className="material-symbols-outlined text-sm cursor-pointer hover:text-white transition-colors">chevron_right</span>
          <span className="material-symbols-outlined text-sm cursor-pointer hover:text-white transition-colors">home</span>
          <span className="material-symbols-outlined text-sm cursor-pointer hover:text-white transition-colors">explore</span>
          <span className="material-symbols-outlined text-sm cursor-pointer hover:text-white transition-colors">star</span>
          <span className="material-symbols-outlined text-sm cursor-pointer hover:text-white transition-colors">folder</span>
          <span className="material-symbols-outlined text-sm cursor-pointer hover:text-white transition-colors">menu</span>
        </div>
      </motion.div>
    </div>
  );
}
