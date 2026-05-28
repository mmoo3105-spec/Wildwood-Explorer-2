/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Page } from '../types';
import { motion } from 'motion/react';

interface HomeProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  onAddClick: (product: Product) => void;
  onNavigate?: (page: Page) => void;
}

const CATEGORIES = [
  { name: '텐트 & 쉘터', tag: 'SHELTER', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxnzV8KUYHnfmHcnzO7iDsqFeIu1cQtnSQA-1HYJdkBMRJ6qH4gG4gxh4enWhUFwc42nf-qg-RcYQssVnIpSwWslR3ENeuR8bu5Xm6vg3iciC7qEAPF6pWiZp97dZ5RqblKSQeDcYWLEhYNAiN3sXTGiF4UwZmIjAU89CdIh0AvIkd6PiAIUdE3NS1IbbJnSnUJMCr6Fg35cKrIfnwwsUz3Bs0Bn95mspqNuhFqJS9uKs8bzWmezW7XFhTyxYZMQ91Yy5obFo_3zs', span: 'col-span-2 row-span-2' },
  { name: '침구류', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgCBmQkCATEART9OwQ0bb09QOBN4semcS4V0Q3AF1B4QWM6NQUfvl-aEfO51VM2zlbV4q0z9Pq79FKlkijggQG-3N6WhKDd42e6WbshI1PESOW5CsynIU3GoE80-nWQYgMMDR94koklRk9LI5HjU3ZHMZ_lERJXtHwMRyQoLbZ26ZZOBCuC9JX48ReMiyqKVSSaEh60OIuzvvy1o89pxh395sMr9TUNc3unKyoIUPLZH5qrjc_T6xc7LrPUHe4s-nYzPSVXibJJNs', span: 'col-span-1' },
  { name: '취사 도구', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXpVTtuELWnGq8DvFz06tnT1iJ3I5zmMyO3JTJNN8pci-y4zXzSpg5Vz1jtfRegXYwCxkyUOypc0vgTql9LgrgO6A31LNK6FoO90AVunDLwmr3Zu8FlRMxSQrQiAN1DEi-Iyu6MZ7rpDF8L9WkVatp1b8Jul2nefJsEZ6aCRwi1DGT0bJcXZWhWhUIT-fXGhLsMan32hxS6fp5l0NvviMRHO-QhgLTGB-Qu47jCM5c8MsFDhp-OnEwlOit_-0wfrHz9lhM829IRnw', span: 'col-span-1' },
  { name: '조명 & 배터리', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvtUQfyr65Nqjd0qgH8qdEbRN5iftHtfToqD2Ff4rQmc734ohE1RThUwXKsPXzP2-lRkb1cZPmV3a63-ZhS_iXmBBOHO41fZItdzL_uleIG6V-4l07-0KYT9D7bVfj6oHaGuxcEDLzg3boReSSoZF44xtwglQHw-eHXOaGAyCfWZYjpegVPxOjfo9CZdlq8p7qDEQ5lyt8jPK_t86HoXFYH7wj5Ecig4gfWuMNGbO_mIWJ3i4XRqIFvFKZa8O7Aj1eGcRFBZoIs0I', span: 'col-span-2 h-40' },
];

export default function Home({ products, onProductClick, onAddClick, onNavigate }: HomeProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <button className="p-2 -ml-2 text-brand-green-deep">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h1 className="text-4xl font-black tracking-tight">와일드우드 익스플로러</h1>
        <button className="p-2 -mr-2 text-brand-green-deep relative">
          <span className="material-symbols-outlined text-4xl">shopping_bag</span>
          <span className="absolute top-0 right-0 bg-brand-orange text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">2</span>
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16 shadow-2xl">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEBJbElF_4SBaFg1IbU9kH7k8QX--gVtcQ-ftfWy3BU2AK4DDVznp53VjT7oDyY4z-k48BV-Ak7Kpq027eQT9UkXt5r3U7VrGbUMpA_G5R5vJAlXPrxgg3kWW_3u802mQ_RhH0vTjLOD1byArrbsJMAKpEaPPiYmftT4m7mJ2_PEwUNFRzq9XpSUSIiH9bsKcXmAQ7WHJcfPWQ41gv-ZmC_d0SRoY8vv7OPfYYKTXvhRQnuLHl14LVptvTeRpov3gWU0DJkvDidRg" 
          className="absolute inset-0 w-full h-full object-cover brightness-75 transition-transform duration-[10s] hover:scale-110"
          alt="Mist forest"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep/80 via-transparent to-transparent flex flex-col justify-center px-8 md:px-16">
          <h2 className="text-lg md:text-2xl font-black text-white leading-tight mb-6 max-w-2xl drop-shadow-lg">
            다음 야생 탐험을 위해 준비하세요.
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-lg font-medium">
            현대적인 아웃도어 매니아를 위한 프리미엄 장비 큐레이션. 험난한 산 정상부터 아늑한 숲 속까지.
          </p>
          <div className="flex bg-white rounded-full p-2 max-w-xl shadow-2xl">
            <div className="flex-grow flex items-center px-4 gap-3 text-brand-green-deep/40">
              <span className="material-symbols-outlined">search</span>
              <input type="text" placeholder="장비, 브랜드, 활동 검색..." className="bg-transparent border-none focus:ring-0 text-brand-green-deep font-medium w-full" />
            </div>
            <button className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold transition-transform active:scale-95 shadow-lg">
              검색
            </button>
          </div>
        </div>
      </section>

      {/* Core Services (Camkeep Benchmarking) */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-brand-orange font-variation-settings-['FILL'_1]">star</span>
          <h3 className="text-2xl font-black text-brand-green-deep tracking-tight">와일드우드 핵심 서비스</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            onClick={() => onNavigate?.('storage-detail')}
            className="bg-white p-8 rounded-[2rem] border border-brand-green-deep/5 shadow-xl shadow-brand-green-deep/5 hover:border-brand-orange transition-colors group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined text-4xl text-brand-orange bg-brand-orange/10 p-4 rounded-2xl group-hover:scale-110 transition-transform">inventory_2</span>
            </div>
            <h4 className="text-xl font-black text-brand-green-deep mb-3">스마트 무인 보관</h4>
            <p className="text-brand-green-deep/50 font-medium leading-relaxed text-sm">무거운 캠핑 장비는 스마트 IoT 보관함에 맡기고 가볍게 떠나세요. 앱과 연동하여 언제든 상태를 확인하고 관리할 수 있습니다.</p>
          </div>
          <div 
            onClick={() => onNavigate?.('locker-rental-detail')}
            className="bg-white p-8 rounded-[2rem] border border-brand-green-deep/5 shadow-xl shadow-brand-green-deep/5 hover:border-brand-orange transition-colors group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined text-4xl text-brand-orange bg-brand-orange/10 p-4 rounded-2xl group-hover:scale-110 transition-transform">touch_app</span>
            </div>
            <h4 className="text-xl font-black text-brand-green-deep mb-3">24시간 무인 렌탈</h4>
            <p className="text-brand-green-deep/50 font-medium leading-relaxed text-sm">배송비 부담 없이 가까운 무인 렌탈함에서 직접 비대면으로 수령 및 반납하세요. 24시간 언제든 내 일정에 맞춰 이용 가능합니다.</p>
          </div>
          <div 
            onClick={() => onNavigate?.('try-before-buy-detail')}
            className="bg-brand-green-deep p-8 rounded-[2rem] border border-brand-green-deep/5 shadow-xl shadow-brand-green-deep/20 hover:shadow-brand-orange/20 transition-all group cursor-pointer text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl -mr-10 -mt-10" />
            <div className="flex justify-between items-start mb-6 relative z-10">
              <span className="material-symbols-outlined text-4xl text-brand-orange bg-brand-orange/10 p-4 rounded-2xl group-hover:scale-110 transition-transform">shopping_bag</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full">Best</span>
            </div>
            <h4 className="text-xl font-black mb-3 relative z-10">체험 후 결정하는 구매</h4>
            <p className="text-white/60 font-medium leading-relaxed text-sm relative z-10">렌탈로 먼저 내 캠핑 스타일에 맞는지 경험해보세요. 새 제품으로 최종 구매 시, 결제하셨던 렌탈료는 100% 전액 환급해 드립니다.</p>
          </div>
        </div>
      </section>

      {/* Categories Bento Grid */}
      <section className="mb-20">
        <h3 className="text-2xl font-bold mb-8">추천 카테고리</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, i) => (
            <div key={i} className={`relative rounded-2xl overflow-hidden group ${cat.span} cursor-pointer`}>
              <img src={cat.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={cat.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 text-white">
                {cat.tag && <span className="text-[10px] font-black tracking-widest opacity-60 mb-1 block">{cat.tag}</span>}
                <h4 className="text-xl font-bold">{cat.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="mb-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h3 className="text-3xl font-bold mb-2">인기 대여 장비</h3>
            <p className="text-brand-green-deep/50 font-medium">다음 여행을 위해 엄선된 필수 장비</p>
          </div>
          <button className="text-brand-orange font-bold flex items-center gap-1 group">
            모든 장비 보기 <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => onProductClick(product)}
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-brand-card shadow-sm transition-shadow group-hover:shadow-2xl">
                <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
                <button className="absolute top-5 right-5 bg-white/80 backdrop-blur-md p-3 rounded-full text-brand-green-deep hover:bg-white transition-colors">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
                {product.tags && (
                  <div className="absolute bottom-5 left-5">
                    {product.tags.map(t => (
                      <span key={t} className="bg-brand-orange text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest">{t}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold group-hover:text-brand-orange transition-colors">{product.name}</h4>
                <div className="flex items-center gap-1 font-bold text-sm">
                  <span className="material-symbols-outlined text-brand-orange font-variation-settings-['FILL'_1] text-lg">star</span>
                  {product.rating}
                </div>
              </div>
              <p className="text-brand-green-deep/50 text-sm mb-4 font-medium leading-relaxed">{product.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-black font-display">${product.price}<span className="text-sm font-normal text-brand-green-deep/40">/1박</span></p>
                <button 
                  onClick={(e) => { e.stopPropagation(); onAddClick(product); }}
                  className="bg-brand-green-light/30 text-brand-green-deep px-5 py-3 rounded-full text-sm font-bold hover:bg-brand-green-deep hover:text-white transition-all shadow-sm"
                >
                  장바구니 담기
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Guild Section */}
      <section className="mb-12">
        <div className="bg-brand-green-deep rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="w-full md:w-1/2 relative z-10">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">탐험가 길드에 가입하세요</h3>
            <p className="text-white/60 mb-10 text-lg font-medium leading-relaxed">
              매주 업데이트되는 트레일 리포트, 장비 관리 팁, 신규 대여 장비 우선 예약 혜택을 받아보세요.
            </p>
            <div className="flex bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/10">
              <input type="email" placeholder="explorer@wildwood.com" className="bg-transparent border-none focus:ring-0 text-white placeholder:text-white/30 px-6 flex-grow font-medium" />
              <button className="bg-white text-brand-green-deep px-8 py-4 rounded-full font-bold shadow-xl shadow-black/10 active:scale-95 transition-transform">
                가입하기
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 aspect-video rounded-[2rem] overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-700">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDllAQH1eP_y6na6FCdxiYwwD9bZDuSb0gfC9cEB0UglnjmQ4_U3_Q29giU7UUUkIPlPrhMubUqFV6DszOuEGvT8bR6xLlISwVXGh25fzc8c3CNCeMRqQr9DnHtG0h4nHd1tTndjAlUc65zniba1dfGsb_W11GLLpC8LsLDZrQlIkVDzaS3jyE79tXGbZyVwl2swS16-FG9mErvmIqTYjOlE-mPQt3EmneZcO3J5LOlfIh2H--kHxWOUOJDN9G1c5SoewGd_roqJEA" className="w-full h-full object-cover" alt="Friends" />
          </div>
        </div>
      </section>
    </div>
  );
}
