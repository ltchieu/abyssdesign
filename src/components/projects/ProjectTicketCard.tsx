import React from 'react';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faQrcode,
  faCircleCheck,
  faCode,
  faBullhorn,
  faPalette,
  faChartLine,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../types';

interface ProjectTicketCardProps {
  project: Project;
  isActive: boolean;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectTicketCard: React.FC<ProjectTicketCardProps> = ({
  project,
  isActive,
  onSelect,
  index
}) => {
  // Domain icon mapping
  const getDomainIcon = (iconType: Project['iconType']) => {
    switch (iconType) {
      case 'developer':
        return <FontAwesomeIcon icon={faCode} className="text-xs" />;
      case 'marketing':
        return <FontAwesomeIcon icon={faBullhorn} className="text-xs" />;
      case 'creative':
        return <FontAwesomeIcon icon={faPalette} className="text-xs" />;
      case 'executive':
        return <FontAwesomeIcon icon={faChartLine} className="text-xs" />;
      default:
        return <FontAwesomeIcon icon={faCode} className="text-xs" />;
    }
  };

  // Color theme variables based on project
  const themeStyles = {
    'letruongconghieu-nexus': {
      bgInner: '#5eead4', // Vivid Turquoise / Tech Neon
      accentHex: '#0d9488',
      gradientId: 'grad-hieu',
      gradStops: ['#38bdf8', '#2dd4bf'],
      roleText: 'BACKEND ARCHITECT + DEVELOPER',
      qrBg: '#134e4a',
      qrColor: '#ccfbf1',
      tagColor: 'bg-teal-900/80 text-teal-200 border-teal-500/30'
    },
    'minhkhanh-marcom': {
      bgInner: '#d8b4fe', // Vivid Lilac Violet
      accentHex: '#9333ea',
      gradientId: 'grad-khanh',
      gradStops: ['#c084fc', '#e879f9'],
      roleText: 'BRAND PR + EVENT MARCOM',
      qrBg: '#581c87',
      qrColor: '#f3e8ff',
      tagColor: 'bg-purple-900/80 text-purple-200 border-purple-500/30'
    },
    'phuongdung-art': {
      bgInner: '#f472b6', // Haute Rose Pink
      accentHex: '#db2777',
      gradientId: 'grad-dung',
      gradStops: ['#fb7185', '#f472b6'],
      roleText: 'ART DIRECTOR + FASHION VISUAL',
      qrBg: '#831843',
      qrColor: '#fce7f3',
      tagColor: 'bg-pink-900/80 text-pink-200 border-pink-500/30'
    },
    'vananh-strategy': {
      bgInner: '#fbbf24', // Amber Gold / Growth Flame
      accentHex: '#d97706',
      gradientId: 'grad-vananh',
      gradStops: ['#f59e0b', '#fbbf24'],
      roleText: 'MARKETING EXEC + BRAND PLANNER',
      qrBg: '#78350f',
      qrColor: '#fef3c7',
      tagColor: 'bg-amber-900/80 text-amber-200 border-amber-500/30'
    }
  }[project.id] || {
    bgInner: '#67e8f9',
    accentHex: '#0891b2',
    gradientId: `grad-${project.id}`,
    gradStops: ['#38bdf8', '#818cf8'],
    roleText: project.role.toUpperCase(),
    qrBg: '#164e63',
    qrColor: '#cffafe',
    tagColor: 'bg-sky-900/80 text-sky-200 border-sky-500/30'
  };

  const handleOpenLiveDemo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      onClick={() => onSelect(project)}
      className="relative select-none cursor-pointer group transition-transform duration-500 ease-out"
      style={{
        width: '100%',
        maxWidth: '480px',
      }}
    >
      {/* 1. LAYERED TICKET STACK BASE SHADOWS (Carl Gordon Media Signature Bottom Edge Stack) */}
      <div className="absolute inset-x-4 -bottom-4 h-8 rounded-b-[28px] bg-[#fb7185] opacity-90 transition-transform duration-300 group-hover:translate-y-1 shadow-md" />
      <div className="absolute inset-x-2.5 -bottom-2.5 h-7 rounded-b-[30px] bg-[#facc15] opacity-95 transition-transform duration-300 group-hover:translate-y-0.5 shadow-md" />
      <div className="absolute inset-x-1 -bottom-1 h-6 rounded-b-[32px] bg-[#38bdf8] opacity-100 shadow-md" />

      {/* 2. MAIN TICKET CONTAINER */}
      <div className="relative z-10 rounded-[24px] sm:rounded-[32px] overflow-hidden bg-neutral-900 border-[2px] sm:border-[2.5px] border-neutral-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col">
        
        {/* UPPER PORTION: VISUAL PREVIEW IMAGE SPACE */}
        <div className="relative h-[200px] sm:h-[285px] w-full overflow-hidden bg-[#0c0d16]">
          {/* Main Visual Image */}
          <img
            src={project.galleryImages[0]?.url || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-95 group-hover:brightness-100"
            loading="lazy"
          />

          {/* Cinematic Top & Bottom Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 pointer-events-none" />

          {/* Top Header Floating Tags */}
          <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
            {/* Domain Pill */}
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-md text-[11px] font-bold tracking-tight uppercase border ${themeStyles.tagColor} shadow-sm`}>
              {getDomainIcon(project.iconType)}
              <span>{project.badge}</span>
            </div>

            {/* Live Pass Pill */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-neutral-200 text-[10.5px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE PASS • {project.year.slice(0, 4)}</span>
            </div>
          </div>

          {/* Bottom Banner inside Image Area */}
          <div className="absolute bottom-3.5 inset-x-3.5 flex items-center justify-between z-10">
            {/* Primary Highlight Metric */}
            <div className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-white">
              <span className="text-[11px] text-neutral-300 block font-mono">
                {project.stats[0]?.label}
              </span>
              <strong className="text-[14px] sm:text-[15px] font-extrabold text-white font-mono tracking-tight">
                {project.stats[0]?.value}
              </strong>
            </div>

            {/* Quick Live Demo Link Button */}
            {project.demoUrl && (
              <button
                type="button"
                onClick={handleOpenLiveDemo}
                className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-neutral-950 text-[11.5px] font-semibold transition-all duration-200 shadow-md hover:scale-105"
                title="Mở website thực tế"
              >
                <span>Xem Demo</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px]" />
              </button>
            )}
          </div>
        </div>

        {/* LOWER PORTION: THE CARL GORDON SIGNATURE TICKET STUB */}
        <div className="relative bg-white pt-2.5 pb-3.5 px-3 sm:px-4 border-t-2 border-neutral-900">
          
          {/* TICKET TOP TAB BAR (Notch with SVG Geometric Glyphs & Client Label) */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-200/80">
            {/* Geometric Multi-Diamond Glyph (Carl Gordon Accent) */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 49 23" fill="none" className="w-10 h-5">
                <defs>
                  <linearGradient id={themeStyles.gradientId} x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor={themeStyles.gradStops[0]} />
                    <stop offset="100%" stopColor={themeStyles.gradStops[1]} />
                  </linearGradient>
                </defs>
                <path
                  d="M47.4934 8.5283C49.148 10.1829 49.148 12.7285 47.4934 14.3831L40.3657 21.5108C38.7111 23.1654 36.1655 23.1654 34.5109 21.5108L27.6378 14.6377C25.9832 12.9831 23.4376 12.9831 21.783 14.6377L14.6553 21.7653C13.0007 23.42 10.4551 23.42 8.8005 21.7653L1.92742 14.8923C0.27279 13.2376 0.27279 10.6921 1.92742 9.03742L9.05506 1.90978C10.7097 0.255155 13.2553 0.255153 14.9099 1.90978L21.783 8.78287C23.4376 10.4375 25.9832 10.4375 27.6378 8.78286L34.7655 1.65523C36.4201 0.000600872 38.9657 0.000597163 40.6203 1.65523L47.4934 8.5283Z"
                  fill={`url(#${themeStyles.gradientId})`}
                />
              </svg>
              <span className="text-[10.5px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
                EDITION #{String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Client / Agency Label */}
            <div className="flex items-center gap-1.5 text-right">
              <span className="text-[10px] font-mono text-neutral-400 uppercase font-semibold">
                CLIENT:
              </span>
              <span className="text-[11.5px] font-bold text-neutral-800 tracking-tight">
                {project.client.split('—')[0].trim()}
              </span>
            </div>
          </div>

          {/* VIBRANT TICKET CORE (Signature Pastel Card Body) */}
          <div
            className="p-3.5 sm:p-4 rounded-2xl border-[2.5px] border-neutral-900 shadow-sm flex items-center justify-between gap-3"
            style={{ backgroundColor: themeStyles.bgInner }}
          >
            {/* Left: Big Bold Condensed Title & Role */}
            <div className="min-w-0 flex-1">
              <h4 className="text-[20px] sm:text-[22px] font-black tracking-[-0.03em] text-neutral-950 uppercase leading-none truncate mb-1">
                {project.title}
              </h4>
              
              <div className="text-[10.5px] sm:text-[11px] font-mono font-bold text-neutral-900/80 uppercase tracking-tight flex items-center gap-1.5 mb-2">
                <span>{themeStyles.roleText.split('+')[0]}</span>
                <span className="text-neutral-900 font-extrabold">+</span>
                <span>{themeStyles.roleText.split('+')[1] || 'PORTFOLIO'}</span>
              </div>

              {/* Technologies / Keywords */}
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-1.5 py-0.5 rounded bg-neutral-950/10 text-neutral-950 text-[9.5px] font-mono font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Functional Stylized QR Code (Carl Gordon Media Signature) */}
            <div className="shrink-0 flex flex-col items-center">
              <div
                className="w-16 h-16 sm:w-18 sm:h-18 p-1.5 rounded-xl border-2 border-neutral-900 bg-white shadow-2xs flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform"
                title={`Quét để xem ${project.title}`}
              >
                {/* SVG QR Code Simulation */}
                <svg viewBox="0 0 29 29" className="w-full h-full fill-neutral-900" xmlns="http://www.w3.org/2000/svg">
                  {/* Top-Left Corner Box */}
                  <rect x="0" y="0" width="7" height="7" />
                  <rect x="1" y="1" width="5" height="5" fill="white" />
                  <rect x="2" y="2" width="3" height="3" />

                  {/* Top-Right Corner Box */}
                  <rect x="22" y="0" width="7" height="7" />
                  <rect x="23" y="1" width="5" height="5" fill="white" />
                  <rect x="24" y="2" width="3" height="3" />

                  {/* Bottom-Left Corner Box */}
                  <rect x="0" y="22" width="7" height="7" />
                  <rect x="1" y="23" width="5" height="5" fill="white" />
                  <rect x="2" y="24" width="3" height="3" />

                  {/* Realistic Matrix Pattern */}
                  <rect x="9" y="1" width="2" height="2" />
                  <rect x="13" y="1" width="2" height="2" />
                  <rect x="17" y="1" width="2" height="2" />
                  <rect x="9" y="5" width="2" height="2" />
                  <rect x="15" y="5" width="2" height="2" />
                  <rect x="1" y="9" width="2" height="2" />
                  <rect x="5" y="9" width="2" height="2" />
                  <rect x="9" y="9" width="3" height="3" />
                  <rect x="14" y="9" width="2" height="2" />
                  <rect x="18" y="9" width="3" height="2" />
                  <rect x="23" y="9" width="2" height="2" />
                  <rect x="26" y="9" width="2" height="2" />

                  <rect x="3" y="14" width="2" height="2" />
                  <rect x="7" y="14" width="2" height="2" />
                  <rect x="11" y="13" width="3" height="3" />
                  <rect x="16" y="14" width="2" height="2" />
                  <rect x="20" y="13" width="2" height="3" />
                  <rect x="24" y="14" width="3" height="2" />

                  <rect x="9" y="18" width="2" height="2" />
                  <rect x="13" y="18" width="3" height="2" />
                  <rect x="18" y="18" width="2" height="2" />
                  <rect x="23" y="18" width="2" height="2" />

                  <rect x="9" y="23" width="2" height="2" />
                  <rect x="13" y="22" width="2" height="3" />
                  <rect x="17" y="23" width="3" height="2" />
                  <rect x="22" y="22" width="2" height="2" />
                  <rect x="26" y="23" width="2" height="3" />
                </svg>
              </div>
              <span className="text-[9px] font-mono font-bold text-neutral-900 mt-1 uppercase tracking-tight">
                SCAN DEMO
              </span>
            </div>
          </div>

          {/* ACTION STRIP: XEM CHI TIẾT MODAL */}
          <div className="mt-2.5 pt-2 flex items-center justify-between text-neutral-500">
            <span className="text-[11.5px] font-medium text-neutral-600 flex items-center gap-1.5">
              <FontAwesomeIcon icon={faEye} className="text-xs text-neutral-400" />
              <span>Nhấp thẻ để xem Case Study chi tiết</span>
            </span>
            <div className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[10px] group-hover:scale-110 transition-transform">
              →
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
