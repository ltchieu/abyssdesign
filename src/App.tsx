import React, { useState, useEffect } from 'react';
import { SmoothScrollProvider } from './components/SmoothScrollProvider';
import { AbyssalLoader } from './components/AbyssalLoader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PricingPackages } from './components/PricingPackages';
import { AboutDeveloper } from './components/AboutDeveloper';
import { WhatYouReceive } from './components/WhatYouReceive';
import { RecentWork } from './components/RecentWork';
import { OurProcess } from './components/OurProcess';
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
      {/* Abyssal 3D Loader with Telemetry HUD & Seamless Threads Unfurl */}
      {isLoading && (
        <AbyssalLoader
          onUnfurl={() => setIsUnfurled(true)}
          onComplete={() => setIsLoading(false)}
        />
      )}

      {/* True Fixed Navigation Header - Anchored to Viewport with smooth reveal */}
      <Header isVisible={isUnfurled} />

      {/* Main Website Wrapper with continuous Threads WebGL background */}
      <div className="min-h-screen bg-[#fafafa] text-[#111827] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#0284c7] selection:text-white">
        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Hero Section - holds the live Threads WebGL canvas */}
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
            {/* 2. About the Web Developer Section */}
            <AboutDeveloper />

            {/* 3. Recent Work Showcase */}
            <RecentWork />

            {/* 4. What You'll Receive */}
            <WhatYouReceive />

            {/* 5. Alternating 4-Step Process Pipeline */}
            <OurProcess />

            {/* 6. Transparent Pricing Packages */}
            <PricingPackages />

            {/* 7. Ready to Build CTA Banner */}
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
