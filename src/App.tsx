import React, { useState } from 'react';
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
import { CaseStudyModal } from './components/CaseStudyModal';
import { ProjectEstimatorModal } from './components/ProjectEstimatorModal';
import { Project, PricingPackage } from './types';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [preselectedPackageId, setPreselectedPackageId] = useState<string | undefined>(undefined);

  const handleOpenEstimator = (service?: string, packageId?: string) => {
    setPreselectedService(service);
    setPreselectedPackageId(packageId);
    setIsEstimatorOpen(true);
  };

  const handleSelectPackage = (pkg: PricingPackage) => {
    handleOpenEstimator(pkg.name, pkg.id);
  };

  const handleStartSimilar = (projectTitle: string) => {
    setSelectedProject(null);
    handleOpenEstimator(projectTitle, 'custom-portfolio');
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Abyssal 0 -> 100% Loader */}
      {isLoading && (
        <AbyssalLoader onComplete={() => setIsLoading(false)} />
      )}

      {/* Persistent Fixed Navigation Header */}
      <Header onOpenEstimator={() => handleOpenEstimator()} />

      {/* Main Website Wrapper with Clean Opacity Transition */}
      <div
        className={`min-h-screen bg-[#fafafa] text-[#111827] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#0284c7] selection:text-white transition-opacity duration-700 ease-out ${
          isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero
            onStartProject={() => handleOpenEstimator()}
            onExploreWork={() => handleScrollToSection('portfolio')}
            onViewPricing={() => handleScrollToSection('pricing')}
          />

          {/* 2. About the Web Developer Section */}
          <AboutDeveloper onContact={() => handleOpenEstimator('Tư Vấn Trực Tiếp Cùng Developer')} />

          {/* 3. Recent Work Showcase */}
          <RecentWork onSelectProject={(p) => setSelectedProject(p)} />

          {/* 4. What You'll Receive */}
          <WhatYouReceive />

          {/* 5. Alternating 4-Step Process Pipeline */}
          <OurProcess />

          {/* 6. Transparent Pricing Packages (500K & 1M) */}
          <PricingPackages onSelectPackage={handleSelectPackage} />

          {/* 7. Ready to Build CTA Banner */}
          <CtaBanner onGetInTouch={() => handleOpenEstimator()} />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* True Fixed Floating Zalo Button */}
      <FloatingZalo />

      {/* Interactive Case Study Detail Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartSimilar={handleStartSimilar}
      />

      {/* Project Scope Builder & Inquiry Modal */}
      <ProjectEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        preselectedService={preselectedService}
        preselectedPackageId={preselectedPackageId}
      />
    </>
  );
}
