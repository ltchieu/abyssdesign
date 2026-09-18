import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faClock,
  faShieldHalved,
  faMobileScreenButton,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import { HERO_DATA } from '../data/heroData';
import { Threads } from './Threads';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
  onViewPricing?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreWork, onViewPricing }) => {
  return (
    <section
      id="hero-section"
      className="relative pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-24 overflow-hidden flex flex-col items-center justify-center text-center px-6 sm:px-8 min-h-[85vh]"
    >
      {/* WebGL Interactive Threads Background from React Bits */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto z-0 overflow-hidden opacity-90">
        <Threads
          color={[0.02, 0.48, 0.85]}
          amplitude={1}
          distance={0.1}
          enableMouseInteraction={false}
        />
      </div>

      {/* Subtle Ambient Radial Light Gradient */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[400px] bg-gradient-to-b from-sky-100/40 via-blue-50/20 to-transparent blur-3xl pointer-events-none z-0 rounded-full"
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10 pointer-events-auto">
        {/* Service Category Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-neutral-200/90 shadow-xs text-xs font-semibold text-neutral-800 mb-6 sm:mb-8">
          <img src="/logo_no_title.png" alt="ABYSS Logo" className="w-4 h-4 rounded object-contain bg-slate-900 border border-slate-700/60 p-0.5" />
          <span className="text-hologram font-bold">ABYSS DESIGN</span>
          <span className="text-neutral-300">|</span>
          <span>Dịch Vụ Thiết Kế Portfolio Chuyên Nghiệp</span>
        </div>

        {/* Hero Headline */}
        <h1
          id="hero-title"
          className="text-[34px] xs:text-[42px] sm:text-[54px] md:text-[64px] font-extrabold tracking-[-0.03em] text-[#111827] leading-[1.12] mb-6 max-w-3xl drop-shadow-xs"
        >
          Nâng Tầm Portfolio <br /> <span className="text-hologram">Vượt Mọi Chuẩn Mực</span>
        </h1>

        {/* Hero Subheadline */}
        <p
          id="hero-subtitle"
          className="text-[16px] sm:text-[18px] md:text-[19px] text-neutral-600 font-normal tracking-[-0.01em] max-w-2xl mb-8 sm:mb-10 leading-relaxed"
        >
          {HERO_DATA.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <button
            id="hero-start-project-btn"
            onClick={onViewPricing || onStartProject}
            className="cursor-pointer group btn-hologram text-[14.5px] sm:text-[15px] font-semibold px-8 py-3.5 rounded-full flex items-center justify-center gap-2.5 w-full sm:w-auto shadow-md"
          >
            <span>{HERO_DATA.primaryCta}</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            id="hero-explore-work-btn"
            onClick={onExploreWork}
            className="cursor-pointer bg-white/90 backdrop-blur-xs hover:bg-neutral-50 text-neutral-800 border border-neutral-200/90 text-[14.5px] sm:text-[15px] font-semibold px-7 py-3.5 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto transition-all shadow-xs"
          >
            <span>{HERO_DATA.secondaryCta}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
