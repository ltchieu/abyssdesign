import React from 'react';
import { Project } from '../../types';
import { ProjectQrCode } from './ProjectQrCode';

interface ProjectTicketCardProps {
  project: Project;
  isActive: boolean;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectTicketCard: React.FC<ProjectTicketCardProps> = ({
  project,
  onSelect,
}) => {
  // Color theme variables based on project
  const themeStyles = {
    'letruongconghieu-nexus': {
      bgInner: '#5eead4', // Vivid Turquoise / Tech Neon
      accentHex: '#0d9488',
      gradientId: 'grad-hieu',
      gradStops: ['#38bdf8', '#2dd4bf'],
      rolePart1: 'BACKEND ARCHITECT',
      rolePart2: 'DEVELOPER'
    },
    'minhkhanh-marcom': {
      bgInner: '#d8b4fe', // Vivid Lilac Violet
      accentHex: '#9333ea',
      gradientId: 'grad-khanh',
      gradStops: ['#c084fc', '#e879f9'],
      rolePart1: 'BRAND PR',
      rolePart2: 'EVENT MARCOM'
    },
    'phuongdung-art': {
      bgInner: '#f472b6', // Haute Rose Pink
      accentHex: '#db2777',
      gradientId: 'grad-dung',
      gradStops: ['#fb7185', '#f472b6'],
      rolePart1: 'ART DIRECTOR',
      rolePart2: 'FASHION VISUAL'
    },
    'vananh-strategy': {
      bgInner: '#fbbf24', // Amber Gold / Growth Flame
      accentHex: '#d97706',
      gradientId: 'grad-vananh',
      gradStops: ['#f59e0b', '#fbbf24'],
      rolePart1: 'MARKETING EXEC',
      rolePart2: 'BRAND PLANNER'
    }
  }[project.id] || {
    bgInner: '#67e8f9',
    accentHex: '#0891b2',
    gradientId: `grad-${project.id}`,
    gradStops: ['#38bdf8', '#818cf8'],
    rolePart1: project.role.toUpperCase(),
    rolePart2: 'PORTFOLIO'
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onSelect(project);
      }}
      className="relative select-none cursor-pointer group transition-transform duration-500 ease-out"
      style={{
        width: '100%',
        maxWidth: '520px',
      }}
    >
      {/* MAIN TICKET CONTAINER */}
      <div className="relative z-10 rounded-[28px] sm:rounded-[36px] overflow-hidden bg-white border-[2.5px] sm:border-[3px] border-neutral-900 shadow-[0_25px_65px_-12px_rgba(15,23,42,0.18)] flex flex-col">
        
        {/* UPPER PORTION: VISUAL PREVIEW / AVATAR (Much Bigger) */}
        <div className="relative h-[270px] sm:h-[370px] md:h-[410px] w-full overflow-hidden bg-neutral-950">
          <img
            src={project.avatarUrl || project.galleryImages[0]?.url || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'}
            alt={project.title}
            draggable={false}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-95 group-hover:brightness-100 pointer-events-none select-none"
            loading="lazy"
          />
        </div>

        {/* LOWER PORTION: SIGNATURE TICKET STUB */}
        <div className="relative bg-white flex flex-col">
          
          {/* TICKET TOP TAB BAR */}
          <div className="flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3 border-t-2 border-neutral-900 bg-white">
            {/* Geometric Multi-Diamond Glyph */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 49 23" fill="none" className="w-9 h-4.5 sm:w-10 sm:h-5">
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
            </div>

            {/* Client / Agency Label */}
            <div className="flex items-center gap-1.5 text-right font-mono">
              <span className="text-[10px] sm:text-[11px] text-neutral-500 font-bold uppercase tracking-wider">
                AGENCY:
              </span>
              <span className="text-[11.5px] sm:text-[12.5px] font-black text-neutral-900 tracking-tight">
                {project.client.split('—')[0].trim()}
              </span>
            </div>
          </div>

          {/* FULL-WIDTH COLORED BLOCK (Title, Job, Scannable QR) */}
          <div
            className="border-t-2 border-neutral-900 flex items-stretch"
            style={{ backgroundColor: themeStyles.bgInner }}
          >
            {/* Left: Project Title & Job of that project */}
            <div className="flex-1 p-3.5 sm:p-5 flex flex-col justify-center min-w-0">
              <h4 className="text-[18px] sm:text-[23px] md:text-[25px] font-black tracking-[-0.03em] text-neutral-950 uppercase leading-none truncate">
                {project.title}
              </h4>
              
              <div className="text-[11px] sm:text-[13px] font-mono font-black text-neutral-900 uppercase tracking-tight mt-2 flex items-center gap-1.5 truncate">
                <span>{themeStyles.rolePart1}</span>
                <span className="text-neutral-950 font-black text-xs">✛</span>
                <span>{themeStyles.rolePart2}</span>
              </div>
            </div>

            {/* Right: Solid Separator Line & Real Scannable QR Code */}
            <div className="w-[84px] sm:w-[105px] md:w-[115px] shrink-0 border-l-2 border-neutral-900 p-2 sm:p-3 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 flex items-center justify-center">
                <ProjectQrCode url={project.demoUrl} />
              </div>
            </div>
          </div>

        </div>

        {/* Signature Color Bottom Base Lip representing this specific project */}
        <div
          className="h-3 sm:h-3.5 w-full border-t-[1.5px] border-neutral-900 shrink-0"
          style={{ backgroundColor: themeStyles.bgInner }}
        />

      </div>
    </div>
  );
};
