import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faLayerGroup,
  faTag
} from '@fortawesome/free-solid-svg-icons';
import { HERO_DATA } from '../data/heroData';
import { WaveRibbon } from './WaveRibbon';
import { useHeroIntro } from './useHeroIntro';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
  onViewPricing?: () => void;
  isLoaded?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onExploreWork,
  onViewPricing,
  isLoaded = true,
}) => {
  const heroRef = useRef<HTMLElement>(null);

  useHeroIntro((t) => {
    heroRef.current?.style.setProperty('--intro', String(t));
  });

  return (
    <section
      ref={heroRef}
      id="hero-section"
      className="relative pt-36 sm:pt-44 md:pt-48 pb-20 sm:pb-28 overflow-hidden flex flex-col items-center justify-center text-center px-6 sm:px-8 min-h-[100svh]"
    >
      {/* Wave Ribbon Canvas - Continuous and seamless handoff from Preloader */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <WaveRibbon yRatio={0.68} />
      </div>

      {/* Subtle Ambient Radial Light Gradient */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[400px] bg-gradient-to-b from-sky-100/40 via-blue-50/20 to-transparent blur-3xl pointer-events-none z-0 rounded-full"
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10 pointer-events-auto">
        {/* Service Category Badge - Friendly, clean, no duplicate logo */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-xs text-xs font-medium text-neutral-700 mb-6 sm:mb-8 transition-all duration-700"
          style={{
            opacity: 'var(--intro, 1)',
            transform: 'translateY(calc((1 - var(--intro, 1)) * 15px))'
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-neutral-900">{HERO_DATA.badge}</span>
        </div>

        {/* Hero Headline with overflow mask for smooth reveal */}
        <div className="overflow-hidden mb-2">
          <h1
            id="hero-title-1"
            className="text-[34px] xs:text-[42px] sm:text-[52px] md:text-[62px] font-extrabold tracking-[-0.03em] text-[#111827] leading-[1.12] drop-shadow-xs transition-transform duration-700 ease-out"
            style={{
              transform: 'translateY(calc((1 - var(--intro, 1)) * 105%))'
            }}
          >
            {HERO_DATA.headlineLine1}
          </h1>
        </div>

        <div className="overflow-hidden mb-6">
          <h2
            id="hero-title-2"
            className="text-[30px] xs:text-[38px] sm:text-[48px] md:text-[56px] font-extrabold tracking-[-0.03em] leading-[1.15] drop-shadow-xs transition-transform duration-700 ease-out delay-75"
            style={{
              transform: 'translateY(calc((1 - var(--intro, 1)) * 105%))'
            }}
          >
            <span className="text-neutral-800">Đừng để portfolio chỉ là một </span>
            <span className="text-hologram">bản sao đại trà</span>
          </h2>
        </div>

        {/* Hero Subheadline */}
        <p
          id="hero-subtitle"
          className="text-[15.5px] sm:text-[17.5px] md:text-[18.5px] text-neutral-600 font-normal tracking-[-0.01em] max-w-2xl mb-8 sm:mb-10 leading-relaxed transition-all duration-700 delay-150"
          style={{
            opacity: 'var(--intro, 1)',
            transform: 'translateY(calc((1 - var(--intro, 1)) * 20px))'
          }}
        >
          {HERO_DATA.subheadline}
        </p>

        {/* Action Buttons - 2 clear primary/secondary options */}
        <div
          className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto transition-all duration-700 delay-200"
          style={{
            opacity: 'var(--intro, 1)',
            transform: 'translateY(calc((1 - var(--intro, 1)) * 25px))'
          }}
        >
          <button
            id="hero-explore-work-btn"
            onClick={onExploreWork}
            className="cursor-pointer group btn-hologram text-[14.5px] sm:text-[15px] font-semibold px-8 py-3.5 rounded-full flex items-center justify-center gap-2.5 w-full sm:w-auto shadow-md"
          >
            <FontAwesomeIcon icon={faLayerGroup} className="text-xs" />
            <span>{HERO_DATA.primaryCta}</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            id="hero-view-pricing-btn"
            onClick={onViewPricing || onStartProject}
            className="cursor-pointer bg-white/95 backdrop-blur-md hover:bg-neutral-50 text-neutral-800 border border-neutral-200/90 hover:border-neutral-300 text-[14.5px] sm:text-[15px] font-semibold px-7 py-3.5 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto transition-all shadow-xs"
          >
            <FontAwesomeIcon icon={faTag} className="text-xs text-neutral-400" />
            <span>{HERO_DATA.secondaryCta}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

