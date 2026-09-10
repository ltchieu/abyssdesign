import React, { useState } from 'react';
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
      {/* Abyssal 0 -> 100% Loader with Official Logo */}
      {isLoading && (
        <AbyssalLoader onComplete={() => setIsLoading(false)} />
      )}

      {/* True Fixed Navigation Header - Anchored to Viewport */}
      <Header />

      {/* Main Website Wrapper with Clean Opacity Transition (No transforms that break fixed positioning) */}
      <div
        className={`min-h-screen bg-[#fafafa] text-[#111827] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#0284c7] selection:text-white transition-opacity duration-700 ease-out ${
          isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero
            onStartProject={handleOpenZalo}
            onExploreWork={() => handleScrollToSection('portfolio')}
            onViewPricing={() => handleScrollToSection('pricing')}
          />

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
        </main>

        {/* Footer with Logo & Contact Info */}
        <Footer />
      </div>

      {/* True Fixed Floating Zalo Widget - Floats above entire viewport */}
      <FloatingZalo />
    </SmoothScrollProvider>
  );
}
