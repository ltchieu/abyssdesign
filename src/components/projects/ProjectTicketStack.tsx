import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandPointer,
  faLayerGroup,
  faRotateRight,
  faChevronLeft,
  faChevronRight,
  faEye,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../types';
import { ProjectTicketCard } from './ProjectTicketCard';

interface ProjectTicketStackProps {
  projects: Project[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
  onSelectProject: (project: Project) => void;
}

// Individual Draggable Card in Stack
const DraggableStackItem: React.FC<{
  project: Project;
  idx: number;
  offset: number;
  isTop: boolean;
  total: number;
  onSwipeNext: () => void;
  onSwipePrev: () => void;
  onBringToFront: () => void;
  onSelectProject: (project: Project) => void;
}> = ({
  project,
  idx,
  offset,
  isTop,
  total,
  onSwipeNext,
  onSwipePrev,
  onBringToFront,
  onSelectProject,
}) => {
  const x = useMotionValue(0);
  const rotateDrag = useTransform(x, [-250, 250], [-15, 15]);
  const opacityDrag = useTransform(x, [-250, 0, 250], [0.65, 1, 0.65]);

  // Stack styling based on offset depth
  const scale = 1 - offset * 0.05;
  const translateY = offset * 22;
  const rotateZStatic = offset === 0 ? 0 : offset === 1 ? 2.5 : offset === 2 ? -2.5 : 3.5;
  const zIndex = 40 - offset * 8;
  const brightness = offset === 0 ? 1 : Math.max(0.7, 1 - offset * 0.1);

  const handleCardClick = () => {
    if (isTop) {
      onSelectProject(project);
    } else {
      onBringToFront();
    }
  };

  return (
    <motion.div
      key={project.id}
      style={{
        zIndex,
        transformOrigin: 'bottom center',
        x: isTop ? x : 0,
        rotate: isTop ? rotateDrag : rotateZStatic,
        filter: `brightness(${brightness})`,
      }}
      animate={{
        scale,
        y: translateY,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 280,
          damping: 24,
        },
      }}
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.85}
      onDragEnd={(_, info) => {
        if (!isTop) return;
        if (info.offset.x < -80 || info.velocity.x < -300) {
          onSwipeNext();
        } else if (info.offset.x > 80 || info.velocity.x > 300) {
          onSwipePrev();
        }
      }}
      onClick={handleCardClick}
      className={`absolute inset-x-0 mx-auto w-full max-w-[480px] ${
        isTop ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer hover:scale-[1.02] transition-transform'
      }`}
    >
      <ProjectTicketCard
        project={project}
        isActive={isTop}
        onSelect={onSelectProject}
        index={idx}
      />
    </motion.div>
  );
};

export const ProjectTicketStack: React.FC<ProjectTicketStackProps> = ({
  projects,
  activeIndex,
  onIndexChange,
  onSelectProject,
}) => {
  const total = projects.length;

  const nextCard = () => {
    onIndexChange((activeIndex + 1) % total);
  };

  const prevCard = () => {
    onIndexChange((activeIndex - 1 + total) % total);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center">
      
      {/* TOP HAPTIC INSTRUCTION BADGE */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-white/15 text-[12px] text-neutral-300 shadow-md backdrop-blur-md mb-8">
        <FontAwesomeIcon icon={faHandPointer} className="text-sky-400 animate-bounce" />
        <span className="font-medium">Kéo thả vé sang trái/phải hoặc nhấp thẻ để mở xấp 3D</span>
        <span className="w-1 h-1 rounded-full bg-neutral-500" />
        <span className="font-mono text-sky-400 font-bold">
          0{activeIndex + 1} / 0{total}
        </span>
      </div>

      {/* 3D TICKET STACK STAGE (Physical Card Stack) */}
      <div className="relative w-full h-[620px] sm:h-[660px] flex items-start justify-center">
        {projects.map((project, idx) => {
          // Calculate offset relative to activeIndex (0 is top, 1 is second, etc.)
          const offset = (idx - activeIndex + total) % total;
          const isTop = offset === 0;

          return (
            <DraggableStackItem
              key={project.id}
              project={project}
              idx={idx}
              offset={offset}
              isTop={isTop}
              total={total}
              onSwipeNext={nextCard}
              onSwipePrev={prevCard}
              onBringToFront={() => onIndexChange(idx)}
              onSelectProject={onSelectProject}
            />
          );
        })}
      </div>

      {/* BOTTOM CONTROLLER BAR (Pill Switcher & Actions) */}
      <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8 w-full relative z-50 px-2">
        {/* Navigation Pill */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-neutral-900/95 border border-white/15 backdrop-blur-xl shadow-2xl">
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={prevCard}
            className="cursor-pointer w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Vé trước"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
          </button>

          {/* Numbered Indicators */}
          <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3">
            {projects.map((proj, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => onIndexChange(idx)}
                  className={`cursor-pointer px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11.5px] sm:text-[12px] font-mono font-bold transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap ${
                    isSelected
                      ? 'bg-white text-neutral-950 shadow-sm scale-105'
                      : 'text-neutral-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>0{idx + 1}.</span>
                  <span className="hidden md:inline text-[11px] font-sans font-semibold">
                    {proj.title.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={nextCard}
            className="cursor-pointer w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Vé tiếp theo"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
          </button>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => onSelectProject(projects[activeIndex])}
            className="cursor-pointer inline-flex items-center whitespace-nowrap gap-2 px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-neutral-950 font-bold text-[13px] transition-all duration-300 shadow-md hover:scale-105"
          >
            <FontAwesomeIcon icon={faEye} className="text-xs" />
            <span>Xem Chi Tiết Hồ Sơ</span>
          </button>

          {projects[activeIndex]?.demoUrl && (
            <a
              href={projects[activeIndex].demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center whitespace-nowrap gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-[13px] border border-white/15 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
              <span>Mở Website Thật</span>
            </a>
          )}
        </div>
      </div>

    </div>
  );
};
