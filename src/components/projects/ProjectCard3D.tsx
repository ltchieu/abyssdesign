import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faCode,
  faBullhorn,
  faPalette,
  faBuilding,
  faArrowRight,
  faLaptopCode,
  faWandMagicSparkles,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Project } from '../../types';

interface ProjectCard3DProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ project, onSelect, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for smooth 3D tilt without re-rendering React state
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [0, 1], [9, -9]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-9, 9]);
  const glareX = useTransform(smoothMouseX, [0, 1], [0, 100]);
  const glareY = useTransform(smoothMouseY, [0, 1], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const getDomainIcon = (iconType: Project['iconType']) => {
    switch (iconType) {
      case 'developer':
        return <FontAwesomeIcon icon={faCode} className="text-sky-600 text-sm" />;
      case 'marketing':
        return <FontAwesomeIcon icon={faBullhorn} className="text-purple-600 text-sm" />;
      case 'creative':
        return <FontAwesomeIcon icon={faPalette} className="text-pink-600 text-sm" />;
      case 'architect':
        return <FontAwesomeIcon icon={faBuilding} className="text-slate-700 text-sm" />;
      default:
        return <FontAwesomeIcon icon={faLaptopCode} className="text-blue-600 text-sm" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="perspective-1000 h-full"
    >
      {/* Outer Doppelrand / Double-Bezel Shell */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        onClick={() => onSelect(project)}
        className="group relative cursor-pointer h-full p-2 sm:p-2.5 rounded-[2rem] bg-neutral-900/[0.03] hover:bg-neutral-900/[0.05] border border-neutral-200/80 hover:border-neutral-300 transition-colors duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)] flex flex-col"
      >
        {/* Inner Core Container with Haptic Depth */}
        <div className="relative z-10 flex-1 flex flex-col rounded-[calc(2rem-0.625rem)] bg-white overflow-hidden border border-neutral-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
          
          {/* Dynamic Glare Reflection Overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
            style={{
              background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
            }}
          />

          {/* Top Visual Preview Window with 3D Depth */}
          <div className="relative h-56 sm:h-64 overflow-hidden bg-neutral-900">
            {/* Background Image with Cinematic Zoom */}
            <img
              src={project.galleryImages[0]?.url || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'}
              alt={project.title}
              className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-95 group-hover:brightness-100"
              loading="lazy"
            />

            {/* Gradient Scrim for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent pointer-events-none" />

            {/* Top Floating Badge Strip */}
            <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/40 text-[11px] font-semibold text-neutral-900 shadow-xs tracking-tight">
                {getDomainIcon(project.iconType)}
                <span>{project.badge}</span>
              </span>

              <span className="px-2.5 py-0.5 rounded-full bg-neutral-900/60 backdrop-blur-md border border-white/20 text-[10px] font-mono text-neutral-200">
                {project.year}
              </span>
            </div>

            {/* Bottom Visual Metrics Overlay */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 text-white">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11.5px] font-medium text-neutral-200">
                  {project.stats[0]?.label}: <strong className="text-white font-semibold">{project.stats[0]?.value}</strong>
                </span>
              </div>

              {/* Quick Interactive Hover Badge */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-1 text-[11px] font-medium text-white/90 bg-neutral-900/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                <FontAwesomeIcon icon={faEye} className="text-xs text-sky-400" />
                <span>Khám phá 3D</span>
              </div>
            </div>
          </div>

          {/* Bottom Card Information Section */}
          <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
            <div>
              {/* Category & Title */}
              <div className="mb-2">
                <span className="text-[12px] font-medium text-neutral-500 tracking-tight">
                  {project.category}
                </span>
                <h3 className="text-[19px] sm:text-[20px] font-bold text-neutral-900 group-hover:text-sky-600 transition-colors tracking-tight mt-0.5">
                  {project.title}
                </h3>
              </div>

              {/* Tagline Description */}
              <p className="text-[13.5px] text-neutral-600 leading-relaxed line-clamp-2 mb-4 font-normal">
                {project.tagline}
              </p>

              {/* Mini Tech / Highlights Pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-md bg-neutral-100 text-neutral-700 text-[11px] font-mono font-medium border border-neutral-200/60"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-0.5 rounded-md bg-neutral-50 text-neutral-500 text-[11px] font-mono">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Nested CTA & Button-in-Button Architecture */}
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <div className="text-[12px] text-neutral-500">
                <span>Khách hàng: </span>
                <strong className="text-neutral-800 font-medium">{project.client.split('—')[0]}</strong>
              </div>

              {/* Interactive Pill Button with Nested Icon */}
              <div className="inline-flex items-center gap-2 pl-3 pr-1 py-1 rounded-full bg-neutral-900 group-hover:bg-sky-600 text-white text-[12px] font-medium transition-colors duration-300 shadow-xs">
                <span>Xem Chi Tiết</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200">
                  <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                </span>
              </div>
            </div>

          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};
