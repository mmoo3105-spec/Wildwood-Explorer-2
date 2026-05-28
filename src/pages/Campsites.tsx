/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Page } from '../types';
import { motion } from 'motion/react';

interface CampsitesProps {
  onNavigate: (page: Page) => void;
}

const PLATFORMS = [
  {
    name: '캠핏 (Camfit)',
    description: '가장 트렌디한 캠핑 예약 플랫폼. 실시간 잔여석 조회 및 감성 캠핑장 전문 예약.',
    logo: '⛺',
    color: 'from-orange-500 to-amber-500',
    url: 'https://www.camfit.co.kr/'
  },
  {
    name: '땡큐캠핑',
    description: '전국 최대 규모의 캠핑장 정보 보유. 편리한 빈자리 찾기 기능 및 이벤트 캠핑장 정보 지원.',
    logo: '🌿',
    color: 'from-emerald-500 to-teal-500',
    url: 'https://m.thankqcamping.com/'
  },
  {
    name: '캠핑톡 (CampingTalk)',
    description: '초보 캠퍼를 위한 맞춤 추천. 캠핑장 큐레이션 및 커뮤니티, 리얼 후기 검색 서비스.',
    logo: '🔥',
    color: 'from-red-500 to-orange-500',
    url: 'https://www.campingtalk.me/'
  },
  {
    name: '국립공원공단 예약시스템',
    description: '합리적인 가격의 대한민국 국립공원 공식 야영장. 숲속 힐링을 위한 최고의 선택.',
    logo: '🏞️',
    color: 'from-blue-600 to-indigo-600',
    url: 'https://res.knps.or.kr/'
  }
];

const POPULAR_CAMPSITES = [
  {
    name: '가평 자라섬 오토캠핑장',
    address: '경기도 가평군 가평읍 자라섬로 60',
    rating: 4.8,
    reviews: 512,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxnzV8KUYHnfmHcnzO7iDsqFeIu1cQtnSQA-1HYJdkBMRJ6qH4gG4gxh4enWhUFwc42nf-qg-RcYQssVnIpSwWslR3ENeuR8bu5Xm6vg3iciC7qEAPF6pWiZp97dZ5RqblKSQeDcYWLEhYNAiN3sXTGiF4UwZmIjAU89CdIh0AvIkd6PiAIUdE3NS1IbbJnSnUJMCr6Fg35cKrIfnwwsUz3Bs0Bn95mspqNuhFqJS9uKs8bzWmezW7XFhTyxYZMQ91Yy5obFo_3zs',
    platform: '땡큐캠핑 예약',
    url: 'https://m.thankqcamping.com/'
  },
  {
    name: '삼척 맹방비치 캠핑장',
    address: '강원특별자치도 삼척시 근덕면 맹방해변로 228-239',
    rating: 4.9,
    reviews: 324,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZroj9dRcUL12d2jTCp95B4OJcr56LyV01Q0TWMc3T9WTxtD96pRnPjamlUDutFGkk7oMafaPNrXkJS7mF63uiFVpiB20qcOFVELpVA58sjHuAwj3jqJn0fiwwgZzxnozbZxocQRuDbqFidNuaFEQ9hyx97RRg9qs_Xw5MtkLzPIsHA61IlzSNU6EKbZmniDhw_pNRcDET5mJ7AqllpS_Zdm9ihieUdrUPv3Bxf6-YeloFm-4oTBDbZl9J6ZjAYR2qNB7oFOqngTU',
    platform: '캠핏 예약',
    url: 'https://www.camfit.co.kr/'
  },
  {
    name: '소백산 삼가야영장',
    address: '경상북도 영주시 풍기읍 삼가로 509',
    rating: 4.7,
    reviews: 189,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDllAQH1eP_y6na6FCdxiYwwD9bZDuSb0gfC9cEB0UglnjmQ4_U3_Q29giU7UUUkIPlPrhMubUqFV6DszOuEGvT8bR6xLlISwVXGh25fzc8c3CNCeMRqQr9DnHtG0h4nHd1tTndjAlUc65zniba1dfGsb_W11GLLpC8LsLDZrQlIkVDzaS3jyE79tXGbZyVwl2swS16-FG9mErvmIqTYjOlE-mPQt3EmneZcO3J5LOlfIh2H--kHxWOUOJDN9G1c5SoewGd_roqJEA',
    platform: '국립공원 예약',
    url: 'https://res.knps.or.kr/'
  }
];

export default function Campsites({ onNavigate }: CampsitesProps) {
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

      <main className="pt-28 pb-32 px-6 max-w-5xl mx-auto">
        {/* Intro */}
        <section className="mb-16 text-center">
          <span className="text-brand-orange font-black tracking-[0.2em] text-[10px] uppercase mb-3 block">Campsite Booking Portal</span>
          <h2 className="text-4xl font-black text-brand-green-deep tracking-tight leading-none mb-4">인기 캠핑장 예약 포털</h2>
          <p className="text-brand-green-deep/50 font-medium">국내 최고의 캠핑장 예약 사이트들을 한 곳에서 편리하게 확인하고 바로 예약해 보세요.</p>
          <div className="h-1.5 w-24 bg-brand-orange rounded-full mx-auto mt-6" />
        </section>

        {/* Platforms Grid */}
        <section className="mb-20">
          <h3 className="text-2xl font-black text-brand-green-deep mb-8 ml-2">예약 플랫폼 바로가기</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLATFORMS.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-[2rem] p-6 shadow-xl shadow-brand-green-deep/5 border border-brand-green-deep/5 flex items-start gap-5 hover:border-brand-orange transition-all cursor-pointer group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${platform.color} text-white flex items-center justify-center text-3xl shadow-lg`}>
                  {platform.logo}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-black text-brand-green-deep group-hover:text-brand-orange transition-colors">{platform.name}</h4>
                    <span className="material-symbols-outlined text-brand-green-deep/30 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-sm">open_in_new</span>
                  </div>
                  <p className="text-xs font-bold text-brand-green-deep/50 leading-relaxed">{platform.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Popular Campsites */}
        <section>
          <h3 className="text-2xl font-black text-brand-green-deep mb-8 ml-2">한국 추천 캠핑장</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {POPULAR_CAMPSITES.map((site, index) => (
              <div key={index} className="bg-white rounded-[2.5rem] overflow-hidden border border-brand-green-deep/5 shadow-xl shadow-brand-green-deep/5 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-video">
                    <img src={site.image} alt={site.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 text-[11px] font-black text-brand-green-deep shadow-sm">
                      <span className="material-symbols-outlined text-brand-orange font-variation-settings-['FILL'_1] text-xs">star</span>
                      {site.rating}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-black text-brand-green-deep mb-2">{site.name}</h4>
                    <p className="text-xs font-bold text-brand-green-deep/40 mb-4 truncate">{site.address}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brand-bg hover:bg-brand-orange hover:text-white text-brand-green-deep py-3 rounded-full font-black text-sm transition-all flex items-center justify-center gap-1.5"
                  >
                    {site.platform} 바로가기
                    <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
