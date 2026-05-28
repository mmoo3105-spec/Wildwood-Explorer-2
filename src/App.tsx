/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Page, Product, CartItem } from './types';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Summary from './pages/Summary';
import DeliveryBooking from './pages/DeliveryBooking';
import LogisticsHub from './pages/LogisticsHub';
import CleaningBooking from './pages/CleaningBooking';
import Campsites from './pages/Campsites';
import StorageDetail from './pages/StorageDetail';
import LockerRentalDetail from './pages/LockerRentalDetail';
import TryBeforeBuyDetail from './pages/TryBeforeBuyDetail';
import { motion, AnimatePresence } from 'motion/react';

const MOCK_PRODUCTS: Product[] = [
  {
    id: 'bell-tent',
    name: '프리미엄 4인용 벨 텐트',
    category: '텐트 & 쉘터',
    description: '편안함을 타협하지 않고 대자연을 경험해 보세요. 저희 시그니처 4인용 벨 텐트는 통기성이 뛰어난 고급 면 캔버스로 제작되어 여름에는 시원하고 쌀쌀한 산속의 밤에는 따뜻함을 유지해 줍니다. 안목 있는 탐험가를 위해 디자인된 이 텐트는 3미터 높이의 천장과 넓은 내부 공간을 제공하여 자유롭게 서서 움직일 수 있습니다.',
    price: 85,
    rating: 4.9,
    reviews: 128,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf1ogIJB9TRtOu_doTj3CTrSe1TK2p8dEiZSf034n1VxtZaMGHZg2UoRu2HtSAYML8oUTMYw5pA6sujh05Rxjkapf8cP8xsTsoamkhHwRg8TxUSHmWh18mA8jHc1dqMNNnCtqpJ4k35NdgLUIu7uNLF7QrYlHGHmKpymNri27h8vO9T_8GDLyCAO_dFTMyOJ5zGKrovETzPlC9VusuYmn3QSYxjBTfGqJwogiqZw4gL8PWv0Jjq-pTOOVBAj6yYT__h8DddUxV-dY',
    tags: ['신상품', '에디터 추천'],
    features: ['수용 인원: 성인 4명', '사용 계절: 4계절용', '내수압: 3000mm', '설치 시간: 15분'],
    specs: {
      '재질': '320gsm 면 캔버스',
      '바닥': '540gsm PVC (립스탑)',
      '크기': '400 x 400 x 250 cm',
      '무게': '28.5 kg',
      '폴대': '고강도 스틸'
    },
    whatsIncluded: [
      '벨 텐트 본체 및 일체형 바닥',
      '중앙 폴대 및 A자형 폴대',
      '야광 가이 라인 (12개)',
      '고강도 철근 팩'
    ]
  },
  {
    id: 'tent-2p',
    name: '써밋 피크 2인용 텐트',
    category: '텐트 & 쉘터',
    description: '알프스 환경에 최적화된 초경량, 방수 설계의 전문 산악용 텐트입니다. 더블 월 구조로 결로를 최소화하며, 강풍에도 안전한 크로스 폴 구조를 적용하여 안전한 야외 취침을 보장합니다.',
    price: 24,
    rating: 4.9,
    reviews: 42,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMFDelXUPzVUZ2QgyuxCbDg9C7fBI2Q-4qfG4ejxYyilSVPUVR76h9ubRZQY04iyor6lw0OM6IoLs2Cb14ol-ER6fHL8htsXpevgHvRDJITRlJNhUY2tBY89PHRXicwa743D7CDnKXlp5PF8TMfyC1YJ1Tvruy3ywoweeKrzAdhi8Oex4IHTCrsqnj6xML4fF5ldFDlff3Bkya5UJv-j6RHrQI9PL0f1q5VY0kxJjZ9u_rJgxCH5bXTz1drzYVwBf8lnZ0YiG2eek',
    tags: ['최고 인기'],
    features: ['수용 인원: 성인 2명', '사용 계절: 3계절용', '내수압: 2000mm', '설치 시간: 5분'],
    specs: {
      '재질': '립스탑 나일론 20D',
      '바닥': '폴리에스터 75D PU',
      '크기': '210 x 130 x 105 cm',
      '무게': '1.8 kg',
      '폴대': '듀랄루민'
    },
    whatsIncluded: [
      '텐트 본체 및 이너 텐트',
      '초경량 알루미늄 폴대',
      '경량 펙 및 가이 라인',
      '전용 수납 가방'
    ]
  },
  {
    id: 'arctic-shell',
    name: '아크틱 쉘 -10° 침낭',
    category: '침구류',
    description: '친환경 구스 다운 소재를 사용하여 제작된 극동계용 머미형 침낭입니다. 어깨와 목 부분을 감싸는 서포트 베플로 열 손실을 완벽히 차단하고, 영하의 날씨 속에서도 최고의 보온성을 자랑합니다.',
    price: 18,
    rating: 4.8,
    reviews: 29,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSVd37MqRh7ASAAFm353RdyYPrVWMrv8_vUNcwHm-tnrmzwBiLzLPhwIVGiPUlhmsZsBquh7OIQ5koqrVRZTVPA_Nk2C5KqDPzdHr3COkCo_VuSsL3EUA-4NozCZKCIYvsADowqyT7vPHuN3IE_jscAz5XiFroq37uX5bohtYp8inllXqZX-JxZ9w5u8dGxuXMIucA6qnKdlOJdzt-BE_5mPepj2ZDd9wjt2sZ77ixZ9yqOSVPWkosBb5OTbr6aaiJ-Tofrz14cZM',
    features: ['사용 온도: 극동계용 (-10°C)', '충전재: 거위털 800g', '디자인: 인체공학적 머미형', '필파워: 800 FP'],
    specs: {
      '겉감': '나일론 30D 미니 립스탑',
      '안감': '나일론 20D 타프타',
      '충전 비율': '구스 다운 90:10',
      '필파워': '800 FP',
      '무게': '1.35 kg'
    },
    whatsIncluded: [
      '침낭 본체',
      '압축 보관 백',
      '메쉬 건조 자루'
    ]
  },
  {
    id: 'heritage-lantern',
    name: '헤리티지 LED 랜턴',
    category: '조명 & 배터리',
    description: '빈티지 감성의 디자인에 400루멘의 고광량 밝기를 결합한 USB 충전식 랜턴입니다. IPX4 등급의 생활 방수를 제공하여 캠핑 중 급작스러운 기후 변화에도 안정적인 조명을 제공합니다.',
    price: 12,
    rating: 5.0,
    reviews: 88,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn6bn7XqYxgVdPokHmPiGSpGZZxi_atyMt2eBu6FtfPUxRLIIqwK2K09ugg20crVIKUkyENDRnvTYF9wO2Z2sgRSAhOUyfsVcErYJVplxMd_ogpxiGqlmnjmeR5JxC-5ToKduV8A2Jy4J7YeGk1BmYbxe4nQ4dZPcJDuO0wpDMW72aYpwdYjKpMfbUVDfWfpPQsIGuaeVUz2LrwtoN6gn5Imuj2dSYubzV7fOG1aH_ZBFsIAadk1nB1sig2z32Ubfyu1Z11igKNBc',
    features: ['최대 밝기: 400 루멘', '사용 시간: 최대 150시간', '방수 등급: IPX4 생활방수', '충전 방식: Type-C 충전'],
    specs: {
      '밝기': '400 lm (조절 가능)',
      '배터리': 'Li-ion 4400mAh',
      '재질': '대나무 베이스 & 스틸',
      '크기': '12.5 x 12.5 x 22.5 cm',
      '무게': '550 g'
    },
    whatsIncluded: [
      '랜턴 본체',
      'Type-C USB 케이블',
      '전용 보호 파우치'
    ]
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>(MOCK_PRODUCTS[0]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home products={MOCK_PRODUCTS} onProductClick={(product) => { setSelectedProduct(product); setCurrentPage('product'); }} onAddClick={addToCart} onNavigate={setCurrentPage} />;
      case 'product':
        return <ProductDetail product={selectedProduct} onBack={() => setCurrentPage('home')} onRent={() => { addToCart(selectedProduct); setCurrentPage('summary'); }} />;
      case 'summary':
        return <Summary cart={cart} onUpdateQty={updateQuantity} onRemove={removeFromCart} onNavigate={setCurrentPage} onProductClick={(product) => { setSelectedProduct(product); setCurrentPage('product'); }} />;
      case 'delivery':
        return <DeliveryBooking onNavigate={setCurrentPage} />;
      case 'logistics-hub':
        return <LogisticsHub onNavigate={setCurrentPage} />;
      case 'cleaning':
        return <CleaningBooking onNavigate={setCurrentPage} />;
      case 'campsites':
        return <Campsites onNavigate={setCurrentPage} />;
      case 'storage-detail':
        return <StorageDetail onNavigate={setCurrentPage} />;
      case 'locker-rental-detail':
        return <LockerRentalDetail onNavigate={setCurrentPage} />;
      case 'try-before-buy-detail':
        return <TryBeforeBuyDetail onNavigate={setCurrentPage} />;
      default:
        return <Home products={MOCK_PRODUCTS} onProductClick={(product) => { setSelectedProduct(product); setCurrentPage('product'); }} onAddClick={addToCart} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen pb-28">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {/* Persistent Bottom Nav (Visible on both Mobile and Desktop) */}
      <nav className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-brand-green-deep/5 z-50 rounded-t-3xl shadow-2xl">
        <div className="flex justify-around items-center h-20 px-6 max-w-4xl mx-auto">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`flex flex-col items-center gap-1 transition-colors hover:text-brand-orange ${currentPage === 'home' || currentPage === 'product' ? 'text-brand-orange' : 'text-brand-green-deep/40'}`}
          >
            <span className="material-symbols-outlined font-variation-settings-['FILL'_1] text-4xl">storefront</span>
            <span className="text-base font-bold uppercase tracking-wider">홈 대여</span>
          </button>
          <button 
            onClick={() => setCurrentPage('logistics-hub')}
            className={`flex flex-col items-center gap-1 transition-colors hover:text-brand-orange ${currentPage === 'logistics-hub' || currentPage === 'delivery' || currentPage === 'cleaning' ? 'text-brand-orange' : 'text-brand-green-deep/40'}`}
          >
            <span className="material-symbols-outlined font-variation-settings-['FILL'_1] text-4xl">local_shipping</span>
            <span className="text-base font-bold uppercase tracking-wider">배송/세탁</span>
          </button>
          <button 
            onClick={() => setCurrentPage('campsites')}
            className={`flex flex-col items-center gap-1 transition-colors hover:text-brand-orange ${currentPage === 'campsites' ? 'text-brand-orange' : 'text-brand-green-deep/40'}`}
          >
            <span className="material-symbols-outlined font-variation-settings-['FILL'_1] text-4xl">terrain</span>
            <span className="text-base font-bold uppercase tracking-wider">캠핑장 예약</span>
          </button>
          <button 
            onClick={() => setCurrentPage('summary')}
            className={`flex flex-col items-center gap-1 transition-colors hover:text-brand-orange ${currentPage === 'summary' ? 'text-brand-orange' : 'text-brand-green-deep/40'}`}
          >
            <span className="material-symbols-outlined text-4xl">receipt_long</span>
            <span className="text-base font-bold uppercase tracking-wider">내 예약</span>
          </button>
        </div>
      </nav>


    </div>
  );
}
