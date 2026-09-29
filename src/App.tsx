import React, { useState, useEffect } from 'react';
import { SmoothScrollProvider } from './components/SmoothScrollProvider';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RecentWork } from './components/RecentWork';
import { AboutDeveloper } from './components/AboutDeveloper';
import { OurProcess } from './components/OurProcess';
import { PricingPackages } from './components/PricingPackages';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingZalo } from './components/FloatingZalo';
import { CONTACT_DATA } from './data/contactData';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isUnfurled, setIsUnfurled] = useState(false);

  // Lock scroll during pre-loading stage
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenZalo = () => {
    window.open(CONTACT_DATA.zaloUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <SmoothScrollProvider>
      {/* Seamless Wave Line Running & Fanning Preloader */}
      {isLoading && (
        <Preloader
          yRatio={0.68}
          onUnfurl={() => setIsUnfurled(true)}
          onComplete={() => setIsLoading(false)}
        />
      )}

      {/* True Fixed Navigation Header */}
      <Header isVisible={isUnfurled} />

      {/* Main Website Wrapper with overflow-x-clip preventing any horizontal scroll */}
      <div className="min-h-screen overflow-x-clip bg-[#fafafa] text-[#111827] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#0284c7] selection:text-white">
        {/* Main Content Sections */}
        <main className="flex-1 overflow-x-clip">
          {/* 1. Hero Section - holds identical WaveRibbon with seamless mask intro */}
          <Hero
            isLoaded={isUnfurled}
            onStartProject={handleOpenZalo}
            onExploreWork={() => handleScrollToSection('portfolio')}
            onViewPricing={() => handleScrollToSection('pricing')}
          />

          {/* Subsequent Sections fade in smoothly when unfurled */}
          <div
            className={`transition-opacity duration-1000 ease-out ${
              isUnfurled ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* 2. Showcase / Recent Work 3D Card Stack (Bằng chứng đặt lên đầu tiên!) */}
            <RecentWork />

            {/* 3. Về Tôi & Điểm Khác Biệt (Gộp Bio, Tech Stack, Google Lighthouse 99+ Speed Demo) */}
            <AboutDeveloper />

            {/* 4. Quy Trình 4 Bước Triển Khai (Nhấn mạnh bước xem trước Demo thực tế) */}
            <OurProcess />

            {/* 5. Bảng Giá Minh Bạch 2 Gói (Deduplicated, ghi rõ timeline 3-7 ngày & 1 năm deploy) */}
            <PricingPackages />

            {/* 6. Sẵn Sàng Bắt Đầu CTA Banner (Với motif dải sóng kết thúc hài hòa) */}
            <CtaBanner />
          </div>
        </main>

        {/* Footer with Logo & Contact Info */}
        <div
          className={`transition-opacity duration-1000 ease-out ${
            isUnfurled ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Footer />
        </div>
      </div>

      {/* True Fixed Floating Zalo Widget - Floats above entire viewport */}
      <div
        className={`transition-all duration-700 delay-300 ${
          isUnfurled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        <FloatingZalo />
      </div>
    </SmoothScrollProvider>
  );
}

