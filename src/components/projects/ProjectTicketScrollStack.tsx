import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faArrowUpRightFromSquare,
  faLayerGroup,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../types';
import { ProjectTicketCard } from './ProjectTicketCard';

gsap.registerPlugin(ScrollTrigger);

interface ProjectTicketScrollStackProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectTicketScrollStack: React.FC<ProjectTicketScrollStackProps> = ({
  projects,
  onSelectProject,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Stack props for offset: 0 = front card, 1 = 1st behind, 2 = 2nd behind, etc.
  const getInitialStackProps = (offset: number) => {
    if (offset === 0) {
      return {
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotationZ: 0,
        opacity: 1,
        brightness: 1,
      };
    }
    return {
      x: 0,
      y: offset * 13,
      z: -offset * 20,
      scale: Math.max(0.86, 1 - offset * 0.035),
      rotationZ: 0,
      opacity: 1,
      brightness: 1,
    };
  };

  useEffect(() => {
    if (!trackRef.current || !wrapperRef.current || cardsRef.current.length === 0) return;

    const n = projects.length;
    if (n <= 1) return;

    // Refresh ScrollTrigger to measure accurately
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      // 1. Set initial positions of all cards in 3D perspective
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        const initial = getInitialStackProps(idx);
        gsap.set(card, {
          transformPerspective: 1200,
          transformStyle: 'preserve-3d',
          transformOrigin: '50% 100%',
          x: 0,
          y: initial.y,
          z: initial.z,
          scale: initial.scale,
          rotationZ: initial.rotationZ,
          opacity: initial.opacity,
          autoAlpha: 1,
          filter: `brightness(${initial.brightness})`,
          zIndex: (n - idx) * 10,
        });
      });

      // 2. Main ScrollTrigger Timeline for peeling cards one-by-one with resting dwell phases
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trackRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: wrapperRef.current,
          pinSpacing: false,
          scrub: 0.35,
          onUpdate: (self) => {
            const p = self.progress;
            setScrollProgress(p);
            // Calculate active index synchronized with the front card
            const rawIdx = Math.min(Math.max(Math.round(p * (n - 1)), 0), n - 1);
            setActiveIndex(rawIdx);
          },
        },
      });

      // For each step (dwelling on front card, then peeling card i out, advancing subsequent cards forward)
      const numSteps = n - 1;
      const stepDuration = 1 / numSteps;

      for (let step = 0; step < numSteps; step++) {
        // Give 28% dwell time so the card rests solidly when arriving before peeling away
        const dwellTime = stepDuration * 0.28;
        const peelDuration = stepDuration * 0.72;
        const animStart = step * stepDuration + dwellTime;

        const currentPeelingCard = cardsRef.current[step];

        // Animate the peeled card out to the left and drop its zIndex + autoAlpha to completely free up click testing
        if (currentPeelingCard) {
          tl.to(
            currentPeelingCard,
            {
              x: '-135vw',
              rotationZ: -14,
              opacity: 0,
              autoAlpha: 0,
              zIndex: 0,
              ease: 'power1.inOut',
              duration: peelDuration,
            },
            animStart
          );
        }

        // Animate subsequent cards forward in 3D depth
        for (let j = step + 1; j < n; j++) {
          const cardToMove = cardsRef.current[j];
          if (!cardToMove) continue;

          const newOffset = j - (step + 1);
          const targetProps = getInitialStackProps(newOffset);

          tl.to(
            cardToMove,
            {
              y: targetProps.y,
              z: targetProps.z,
              scale: targetProps.scale,
              rotationZ: targetProps.rotationZ,
              opacity: targetProps.opacity,
              autoAlpha: 1,
              filter: `brightness(${targetProps.brightness})`,
              zIndex: (n - newOffset) * 10,
              ease: 'power1.inOut',
              duration: peelDuration,
            },
            animStart
          );
        }
      }
    }, trackRef);

    return () => {
      ctx.revert();
    };
  }, [projects]);

  // Smooth scroll to a specific card
  const scrollToCard = (index: number) => {
    if (!trackRef.current) return;
    const n = projects.length;
    if (n <= 1) return;
    const rect = trackRef.current.getBoundingClientRect();
    const startY = window.scrollY + rect.top;
    const totalScroll = trackRef.current.offsetHeight - window.innerHeight;
    const targetY = startY + (index / (n - 1)) * totalScroll + 5;
    const lenis = (window as any).__lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(targetY, { duration: 0.8 });
    } else {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  const activeProject = projects[activeIndex] || projects[0];

  return (
    <div
      ref={trackRef}
      className="relative w-full overflow-hidden"
      style={{
        // Balanced scroll distance per card transition
        height: `calc(100vh + ${(projects.length - 1) * 75}vh)`,
      }}
    >
      {/* PINNED VIEWPORT WRAPPER (Sticky Pinned Stage) */}
      <div
        ref={wrapperRef}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-between pt-16 sm:pt-20 pb-5 sm:pb-8 overflow-hidden bg-[#fafafa] select-none"
      >
        {/* AMBIENT AURORA LIGHTS */}
        <div className="absolute -top-32 left-1/4 w-[650px] h-[650px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none -z-20" />
        <div className="absolute -bottom-32 right-1/4 w-[650px] h-[650px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none -z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-20" />

        {/* REPEATING MARQUEE TICKER RIBBON (Subtle Background Watermark) */}
        <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 pointer-events-none -z-10 select-none overflow-hidden max-w-full opacity-100">
          <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="text-[44px] sm:text-[68px] md:text-[84px] font-black uppercase tracking-[0.16em] text-neutral-900/[0.035] inline-flex items-center gap-10 mx-6 font-mono"
              >
                <span>PORTFOLIO SHOWCASE</span>
                <span className="text-sky-500/30 text-[24px]">✦</span>
                <span>ABYSS DESIGN</span>
                <span className="text-blue-500/30 text-[24px]">✦</span>
                <span>THIẾT KẾ ĐỘC BẢN</span>
                <span className="text-sky-500/30 text-[24px]">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* 3D FLOATING CHROMATIC ACCENT */}
        <div className="absolute top-1/4 left-6 sm:left-14 w-20 sm:w-28 h-20 sm:h-28 rounded-3xl bg-gradient-to-br from-sky-200/40 via-blue-100/30 to-indigo-200/30 border border-neutral-200/60 shadow-xs backdrop-blur-xs pointer-events-none -z-10 rotate-12 hidden lg:block" />
        <div className="absolute bottom-1/4 right-6 sm:right-14 w-24 sm:w-32 h-24 sm:h-32 rounded-3xl bg-gradient-to-br from-rose-200/30 via-amber-100/30 to-teal-100/30 border border-neutral-200/60 shadow-xs backdrop-blur-xs pointer-events-none -z-10 -rotate-12 hidden lg:block" />

        {/* TOP TITLE BAR - Flow layout with dedicated space so cards NEVER cover it */}
        <div className="z-30 shrink-0 text-center px-4 max-w-xl pointer-events-none mb-2 sm:mb-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-100 text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-[0.16em] text-blue-700 shadow-xs backdrop-blur-md mb-2">
            <FontAwesomeIcon icon={faLayerGroup} className="text-sky-500 text-xs" />
            <span>DỰ ÁN TIÊU BIỂU • 3D CARD STACK</span>
          </div>
          <h2 className="text-[22px] sm:text-[28px] md:text-[32px] font-extrabold tracking-[-0.03em] text-[#111827] leading-tight">
            Trưng Bày Các Dự Án <span className="text-hologram">Portfolio Mẫu</span>
          </h2>
          <p className="text-xs sm:text-[13px] text-neutral-500 mt-1">
            Cuộn chuột để lướt qua từng thiết kế • Bấm vào thẻ để xem chi tiết
          </p>
        </div>

        {/* 3D CARD STACK CONTAINER (preserve-3d stage) */}
        <div className="flex-1 w-full flex items-center justify-center min-h-0 my-auto py-2">
          <div
            onClick={() => onSelectProject(activeProject)}
            className="relative w-full max-w-[350px] sm:max-w-[460px] md:max-w-[500px] h-[440px] sm:h-[500px] md:h-[530px] flex items-center justify-center px-1 sm:px-4 cursor-pointer"
            style={{
              perspective: 1200,
              transformStyle: 'preserve-3d',
            }}
          >
            {projects.map((project, idx) => {
              const isFront = activeIndex === idx;

              return (
                <div
                  key={project.id}
                  ref={(el) => {
                    cardsRef.current[idx] = el;
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(project);
                  }}
                  onPointerUp={(e) => {
                    e.stopPropagation();
                    onSelectProject(project);
                  }}
                  className={`absolute inset-x-0 mx-auto w-full max-w-[340px] sm:max-w-[450px] md:max-w-[480px] transition-shadow duration-300 cursor-pointer ${
                    isFront
                      ? 'hover:shadow-[0_25px_60px_-10px_rgba(14,165,233,0.2)]'
                      : 'hover:brightness-105'
                  }`}
                  style={{
                    willChange: 'transform, opacity, filter',
                    transformStyle: 'preserve-3d',
                  }}
                  title={`Nhấp để xem Case Study chi tiết ${project.title}`}
                >
                  <ProjectTicketCard
                    project={project}
                    isActive={isFront}
                    onSelect={onSelectProject}
                    index={idx}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM HUD PILL */}
        <div className="z-30 shrink-0 px-3 sm:px-4 flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 rounded-full bg-white/95 border border-neutral-200/90 backdrop-blur-xl shadow-[0_12px_36px_rgba(15,23,42,0.08)]">
            {/* Edition Counter */}
            <div className="flex items-center gap-1.5 font-mono text-[12px] font-bold">
              <span className="text-sky-600">0{activeIndex + 1}</span>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-400">0{projects.length}</span>
            </div>

            {/* Subtle Divider */}
            <span className="w-px h-4 bg-neutral-200" />

            {/* Active Project Title */}
            <span className="text-[12.5px] font-bold text-[#111827] tracking-tight truncate max-w-[130px] sm:max-w-[200px]">
              {activeProject.title}
            </span>

            {/* Segmented Micro Scrub Bar */}
            <div className="hidden sm:flex items-center gap-1.5 pl-1">
              {projects.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToCard(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? 'w-6 bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.5)]'
                      : 'w-2 bg-neutral-200 hover:bg-neutral-300'
                  }`}
                  aria-label={`Cuộn tới thẻ 0${i + 1}`}
                />
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2 pl-2 border-l border-neutral-200">
              <button
                type="button"
                onClick={() => onSelectProject(activeProject)}
                className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-[11.5px] font-bold transition-all duration-200 shadow-xs hover:scale-105"
              >
                <FontAwesomeIcon icon={faEye} className="text-[10px]" />
                <span>Chi Tiết</span>
              </button>

              {activeProject.demoUrl && (
                <a
                  href={activeProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[11.5px] font-semibold border border-neutral-200/80 transition-all duration-200"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px]" />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
