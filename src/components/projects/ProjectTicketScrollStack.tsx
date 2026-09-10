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

  // Set initial 3D transform attributes for stack
  // Depth spacing: -180px per step, 14px y offset
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
    const rot = offset === 1 ? 2 : offset === 2 ? -2 : 3;
    return {
      x: 0,
      y: offset * 14,
      z: -offset * 180,
      scale: 1 - offset * 0.04,
      rotationZ: rot,
      opacity: Math.max(0.7, 1 - offset * 0.08),
      brightness: Math.max(0.75, 1 - offset * 0.08),
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
          x: 0,
          y: initial.y,
          z: initial.z,
          scale: initial.scale,
          rotationZ: initial.rotationZ,
          opacity: initial.opacity,
          filter: `brightness(${initial.brightness})`,
          zIndex: (n - idx) * 10,
        });
      });

      // 2. Main ScrollTrigger Timeline for peeling cards one-by-one
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trackRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: wrapperRef.current,
          pinSpacing: false,
          scrub: 0.8,
          onUpdate: (self) => {
            const p = self.progress;
            setScrollProgress(p);
            // Determine active index
            const rawIdx = Math.floor(p * (n - 0.001));
            const clamped = Math.min(Math.max(rawIdx, 0), n - 1);
            setActiveIndex(clamped);
          },
        },
      });

      // For each step (peeling card i out, advancing subsequent cards forward)
      const numSteps = n - 1;
      const stepDuration = 1 / numSteps;

      for (let step = 0; step < numSteps; step++) {
        const stepStart = step * stepDuration;
        const currentPeelingCard = cardsRef.current[step];

        // Animate the peeled card out to the left
        if (currentPeelingCard) {
          tl.to(
            currentPeelingCard,
            {
              x: '-135vw',
              rotationZ: -14,
              opacity: 0,
              ease: 'power1.inOut',
              duration: stepDuration,
            },
            stepStart
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
              filter: `brightness(${targetProps.brightness})`,
              zIndex: (n - newOffset) * 10,
              ease: 'power1.inOut',
              duration: stepDuration,
            },
            stepStart
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
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const activeProject = projects[activeIndex] || projects[0];

  return (
    <div
      ref={trackRef}
      className="relative w-full"
      style={{
        // Give 90vh scroll distance per card transition for buttery responsiveness
        height: `calc(100vh + ${(projects.length - 1) * 95}vh)`,
      }}
    >
      {/* PINNED VIEWPORT WRAPPER (Carl Gordon Media Sticky Pinned Stage) */}
      <div
        ref={wrapperRef}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#07060f] select-none"
      >
        {/* AMBIENT AURORA LIGHTS */}
        <div className="absolute -top-32 left-1/4 w-[650px] h-[650px] bg-sky-500/15 rounded-full blur-[150px] pointer-events-none -z-20" />
        <div className="absolute -bottom-32 right-1/4 w-[650px] h-[650px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none -z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-20" />

        {/* REPEATING MARQUEE TICKER RIBBON (Carl Gordon Media Signature Element Behind Cards) */}
        <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 pointer-events-none -z-10 select-none overflow-hidden opacity-30">
          <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="text-[48px] sm:text-[76px] md:text-[96px] font-black uppercase tracking-[0.16em] text-white/[0.08] inline-flex items-center gap-10 mx-6 font-mono"
              >
                <span>SELECTED WORK</span>
                <span className="text-sky-500/40 text-[28px]">✦</span>
                <span>ĐỘC BẢN 2026</span>
                <span className="text-purple-500/40 text-[28px]">✦</span>
                <span>ABYSS DESIGN</span>
                <span className="text-sky-500/40 text-[28px]">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* 3D FLOATING CHROMATIC ACCENT (Carl Gordon Iridescent Decorative Cross/Jack) */}
        <div className="absolute top-1/4 left-6 sm:left-14 w-20 sm:w-28 h-20 sm:h-28 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-indigo-500/20 to-purple-500/20 border border-white/10 blur-[1px] animate-pulse pointer-events-none -z-10 rotate-12 hidden lg:block" />
        <div className="absolute bottom-1/4 right-6 sm:right-14 w-24 sm:w-32 h-24 sm:h-32 rounded-3xl bg-gradient-to-br from-rose-500/20 via-amber-500/20 to-teal-500/20 border border-white/10 blur-[1px] animate-pulse pointer-events-none -z-10 -rotate-12 hidden lg:block" />

        {/* TOP FLOATING TITLE BAR */}
        <div className="absolute top-3 sm:top-8 inset-x-0 mx-auto text-center z-30 px-4 max-w-xl pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-200 shadow-md backdrop-blur-md mb-1.5">
            <FontAwesomeIcon icon={faLayerGroup} className="text-sky-400 text-xs" />
            <span>SELECTED WORK • 3D CARD STACK</span>
          </div>
          <h2 className="text-[20px] sm:text-[28px] font-black tracking-[-0.03em] text-white leading-tight">
            Trưng Bày Portfolio Độc Bản
          </h2>
        </div>

        {/* 3D CARD STACK CONTAINER (preserve-3d stage) */}
        <div
          className="relative w-full max-w-[340px] sm:max-w-[450px] md:max-w-[470px] h-[430px] sm:h-[520px] flex items-center justify-center my-auto px-1 sm:px-4"
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
                onClick={() => {
                  if (isFront) {
                    onSelectProject(project);
                  } else {
                    scrollToCard(idx);
                  }
                }}
                className={`absolute inset-x-0 mx-auto w-full max-w-[340px] sm:max-w-[440px] transition-shadow duration-300 ${
                  isFront
                    ? 'cursor-pointer hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]'
                    : 'cursor-pointer hover:brightness-110'
                }`}
                style={{
                  willChange: 'transform, opacity, filter',
                  transformStyle: 'preserve-3d',
                }}
                title={isFront ? `Nhấp để xem Case Study chi tiết ${project.title}` : `Cuộn tới ${project.title}`}
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

        {/* BOTTOM FLOATING CYBER HUD (Minimalist, No Carousel Buttons) */}
        <div className="absolute bottom-3 sm:bottom-7 inset-x-0 mx-auto z-40 px-3 sm:px-4 flex flex-col items-center gap-2">
          
          {/* Active Card HUD Pill */}
          <div className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 rounded-full bg-neutral-900/90 border border-white/15 backdrop-blur-xl shadow-2xl">
            {/* Edition Counter */}
            <div className="flex items-center gap-1.5 font-mono text-[12px] font-bold">
              <span className="text-sky-400">0{activeIndex + 1}</span>
              <span className="text-neutral-500">/</span>
              <span className="text-neutral-400">0{projects.length}</span>
            </div>

            {/* Subtle Divider */}
            <span className="w-px h-4 bg-white/20" />

            {/* Active Client Name */}
            <span className="text-[12.5px] font-bold text-white tracking-tight truncate max-w-[130px] sm:max-w-[200px]">
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
                      ? 'w-6 bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]'
                      : 'w-2 bg-white/25 hover:bg-white/50'
                  }`}
                  aria-label={`Cuộn tới thẻ 0${i + 1}`}
                />
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2 pl-2 border-l border-white/15">
              <button
                type="button"
                onClick={() => onSelectProject(activeProject)}
                className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500 hover:bg-sky-400 text-neutral-950 text-[11.5px] font-bold transition-all duration-200 shadow-md hover:scale-105"
              >
                <FontAwesomeIcon icon={faEye} className="text-[10px]" />
                <span>Chi Tiết</span>
              </button>

              {activeProject.demoUrl && (
                <a
                  href={activeProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-[11.5px] font-medium border border-white/10 transition-all duration-200"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px]" />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Scroll Hint */}
          <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-medium">
            <FontAwesomeIcon icon={faArrowDown} className="text-[10px] text-sky-400 animate-bounce" />
            <span>Cuộn trang để lướt qua xấp thẻ 3D</span>
          </div>

        </div>

      </div>
    </div>
  );
};
