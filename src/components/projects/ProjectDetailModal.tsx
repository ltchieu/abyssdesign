import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faArrowUpRightFromSquare,
  faCircleCheck,
  faClock,
  faLayerGroup,
  faCode,
  faShieldHalved,
  faChartLine,
  faComments,
  faArrowRight,
  faImages,
  faAward
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Project } from '../../types';
import { CONTACT_DATA } from '../../data/contactData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image on project change
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleOrderCustomPortfolio = () => {
    const zaloUrl = `${CONTACT_DATA.zaloUrl}`;
    window.open(zaloUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
        {/* Cinematic Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/80 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          className="relative z-10 w-full max-w-4xl max-h-[92vh] bg-white rounded-[2rem] sm:rounded-[2.4rem] border border-neutral-200 shadow-2xl overflow-hidden flex flex-col my-auto"
        >
          {/* Top Modal Header */}
          <div className="sticky top-0 z-20 px-6 sm:px-8 py-4 bg-white/90 backdrop-blur-md border-b border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-[11.5px] font-semibold tracking-tight">
                {project.badge}
              </span>
              <span className="text-[12px] text-neutral-400 font-mono hidden sm:inline">
                ID: {project.id}
              </span>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 flex items-center justify-center transition-colors shadow-2xs"
              aria-label="Đóng cửa sổ"
            >
              <FontAwesomeIcon icon={faXmark} className="text-base" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto px-6 sm:px-8 py-6 sm:py-8 space-y-8 flex-1">
            
            {/* Title & Tagline */}
            <div>
              <span className="text-[13px] font-medium text-neutral-500">
                {project.category}
              </span>
              <h2 className="text-[26px] sm:text-[34px] font-bold text-neutral-900 tracking-tight mt-1 mb-3">
                {project.title}
              </h2>
              <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed max-w-3xl">
                {project.overview}
              </p>
            </div>

            {/* Interactive Visual Gallery Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold uppercase tracking-wider text-neutral-400 font-mono flex items-center gap-2">
                  <FontAwesomeIcon icon={faImages} className="text-sky-600" />
                  <span>THƯ VIỆN HÌNH ẢNH THỰC TẾ DỰ ÁN</span>
                </span>
                <span className="text-[11.5px] font-mono text-neutral-400">
                  {activeImageIndex + 1} / {project.galleryImages.length}
                </span>
              </div>

              {/* Main Image Viewport */}
              <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-xs">
                <img
                  src={project.galleryImages[activeImageIndex]?.url}
                  alt={project.galleryImages[activeImageIndex]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Image Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <span className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-[10.5px] font-mono font-medium mb-1.5 inline-block">
                    {project.galleryImages[activeImageIndex]?.tag}
                  </span>
                  <div className="text-[14px] sm:text-[15px] font-semibold text-white">
                    {project.galleryImages[activeImageIndex]?.title}
                  </div>
                </div>
              </div>

              {/* Thumbnail Selector */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {project.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`cursor-pointer relative shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-sky-600 scale-98 shadow-sm'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Performance Stats Matrix */}
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-neutral-400 font-mono mb-3">
                CHỈ SỐ HIỆU QUẢ ĐÃ ĐẠT ĐƯỢC
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.stats.map((s, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70 shadow-2xs">
                    <div className="text-[24px] font-bold font-mono text-neutral-900 tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-[13px] font-medium text-neutral-500 mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables & Technology Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Deliverables */}
              <div className="p-5 rounded-2xl bg-neutral-50/80 border border-neutral-200/80">
                <h4 className="text-[13px] font-bold uppercase tracking-wider text-neutral-900 font-mono mb-3 flex items-center gap-2">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-emerald-600" />
                  <span>SẢN PHẨM BÀN GIAO</span>
                </h4>
                <ul className="space-y-2.5">
                  {project.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-neutral-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Role */}
              <div className="p-5 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 flex flex-col justify-between">
                <div>
                  <h4 className="text-[13px] font-bold uppercase tracking-wider text-neutral-900 font-mono mb-3 flex items-center gap-2">
                    <FontAwesomeIcon icon={faCode} className="text-sky-600" />
                    <span>CÔNG NGHỆ ÁP DỤNG</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white text-neutral-800 text-[11.5px] font-mono font-medium border border-neutral-200/80 shadow-2xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-200/60 text-[12.5px] text-neutral-500">
                  <span>Thời gian hoàn thiện: </span>
                  <strong className="text-neutral-800 font-medium">{project.duration}</strong>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Modal Bottom Action Footer */}
          <div className="sticky bottom-0 z-20 px-6 sm:px-8 py-4 bg-white/95 backdrop-blur-md border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* External Links if available */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center gap-1.5 text-[13px] font-medium text-neutral-700 hover:text-sky-600 transition-colors"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                  <span>Xem Website Thực Tế</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center gap-1.5 text-[13px] font-medium text-neutral-700 hover:text-neutral-950 transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-sm" />
                  <span>Mã Nguồn GitHub</span>
                </a>
              )}
            </div>

            {/* Primary Zalo CTA Button with Button-in-Button */}
            <button
              type="button"
              onClick={handleOrderCustomPortfolio}
              className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-neutral-900 hover:bg-sky-600 text-white text-[13.5px] font-semibold transition-all duration-300 shadow-md group"
            >
              <span>Đặt Thiết Kế Theo Phong Cách Này</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <FontAwesomeIcon icon={faComments} className="text-xs" />
              </span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
