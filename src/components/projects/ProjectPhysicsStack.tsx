import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandPointer,
  faRotateRight,
  faArrowRight,
  faWandMagicSparkles,
  faEye,
  faLayerGroup,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../types';

interface ProjectPhysicsStackProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

export const ProjectPhysicsStack: React.FC<ProjectPhysicsStackProps> = ({ projects, onSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-8 sm:py-12 flex flex-col items-center">
      {/* Top Interactive Physics Instructions Bar */}
      <div className="flex items-center justify-between w-full max-w-md mb-6 px-4 py-2 rounded-full bg-neutral-100/90 border border-neutral-200/80 text-[12.5px] text-neutral-600 shadow-xs">
        <span className="flex items-center gap-2">
          <FontAwesomeIcon icon={faHandPointer} className="text-purple-600 animate-bounce" />
          <span>Kéo thả thẻ bài hoặc nhấp mũi tên để lướt</span>
        </span>
        <span className="font-mono font-semibold text-neutral-900">
          {currentIndex + 1} / {projects.length}
        </span>
      </div>

      {/* 3D Stack Stage Container */}
      <div className="relative w-full h-[460px] sm:h-[500px] flex items-center justify-center">
        {projects.map((project, idx) => {
          // Calculate offset relative to currentIndex
          const total = projects.length;
          const offset = (idx - currentIndex + total) % total;

          // Only render visible cards in stack (top 3)
          if (offset > 2 && offset < total - 1) return null;

          const isTop = offset === 0;
          const scale = 1 - offset * 0.06;
          const translateY = offset * 18;
          const rotateZ = offset === 0 ? 0 : offset === 1 ? 4 : offset === 2 ? -4 : 0;
          const zIndex = isTop ? 30 : 30 - offset;
          const opacity = offset > 2 ? 0 : 1 - offset * 0.18;

          return (
            <motion.div
              key={project.id}
              drag={isTop ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) > 100) {
                  nextCard();
                }
              }}
              animate={{
                scale,
                y: translateY,
                rotateZ,
                opacity,
                zIndex,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
              className="absolute w-[90%] sm:w-[540px] cursor-grab active:cursor-grabbing"
              style={{
                transformOrigin: 'bottom center',
              }}
            >
              {/* Double-Bezel Architecture */}
              <div className="p-2.5 rounded-[2.2rem] bg-neutral-900/[0.04] border border-neutral-200/90 shadow-[0_25px_60px_rgba(15,23,42,0.15)] bg-white">
                <div className="rounded-[calc(2.2rem-0.625rem)] overflow-hidden border border-neutral-100 bg-white flex flex-col">
                  
                  {/* Card Visual Hero */}
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-neutral-900">
                    <img
                      src={project.galleryImages[0]?.url || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80'}
                      alt={project.title}
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent pointer-events-none" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11.5px] font-semibold text-neutral-900 shadow-xs">
                        {project.badge}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-neutral-900/70 backdrop-blur-md text-[11px] font-mono text-white">
                        {project.duration}
                      </span>
                    </div>

                    {/* Bottom Stats Strip */}
                    <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white z-10">
                      <span className="text-[12px] font-medium text-neutral-200">
                        {project.stats[0]?.label}: <strong className="text-white font-bold">{project.stats[0]?.value}</strong>
                      </span>
                      <span className="text-[11px] font-mono text-neutral-300">
                        {project.stats[1]?.label}: {project.stats[1]?.value}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[12px] font-semibold text-purple-600 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[12px] text-neutral-400 font-mono">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-[22px] font-bold text-neutral-900 tracking-tight mb-2">
                      {project.title}
                    </h3>

                    <p className="text-[14px] text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                      {project.overview}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-neutral-100 text-neutral-700 text-[11px] font-mono font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextCard();
                        }}
                        className="cursor-pointer text-[12px] text-neutral-500 hover:text-neutral-900 flex items-center gap-1.5 font-medium transition-colors"
                      >
                        <FontAwesomeIcon icon={faRotateRight} className="text-xs" />
                        <span>Thẻ tiếp theo</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelect(project);
                        }}
                        className="cursor-pointer inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-neutral-900 hover:bg-purple-600 text-white text-[12.5px] font-medium transition-all duration-300 shadow-xs group"
                      >
                        <span>Mở Toàn Bộ Case Study</span>
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                          <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                        </span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Stack Controls Navigation */}
      <div className="flex items-center gap-3 mt-4">
        <button
          type="button"
          onClick={prevCard}
          aria-label="Thẻ trước"
          className="cursor-pointer w-10 h-10 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200/80 shadow-xs flex items-center justify-center text-neutral-700 hover:text-neutral-900 transition-colors"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
        </button>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/60">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-6 bg-purple-600' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Chuyển tới ${p.title}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextCard}
          aria-label="Thẻ kế tiếp"
          className="cursor-pointer w-10 h-10 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200/80 shadow-xs flex items-center justify-center text-neutral-700 hover:text-neutral-900 transition-colors"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
        </button>
      </div>
    </div>
  );
};
