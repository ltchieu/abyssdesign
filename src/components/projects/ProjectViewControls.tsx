import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCube,
  faLayerGroup,
  faNetworkWired,
  faFilter,
  faLaptopCode,
  faBullhorn,
  faPalette,
  faBuilding,
  faWandMagicSparkles
} from '@fortawesome/free-solid-svg-icons';

export type ViewMode = '3d-deck' | 'physics-stack' | 'blueprint';
export type FilterCategory = 'all' | 'developer' | 'marketing' | 'creative' | 'architect';

interface ProjectViewControlsProps {
  activeView: ViewMode;
  onViewChange: (mode: ViewMode) => void;
  activeFilter: FilterCategory;
  onFilterChange: (category: FilterCategory) => void;
  projectCounts: {
    all: number;
    developer: number;
    marketing: number;
    creative: number;
    architect: number;
  };
}

export const ProjectViewControls: React.FC<ProjectViewControlsProps> = ({
  activeView,
  onViewChange,
  activeFilter,
  onFilterChange,
  projectCounts,
}) => {
  const filterTabs = [
    { id: 'all' as const, label: 'Tất Cả Dự Án', count: projectCounts.all },
    { id: 'developer' as const, label: 'Kỹ Sư & Tech Lead', count: projectCounts.developer, icon: faLaptopCode },
    { id: 'marketing' as const, label: 'Marketing & Sự Kiện', count: projectCounts.marketing, icon: faBullhorn },
    { id: 'creative' as const, label: 'Giám Đốc Sáng Tạo', count: projectCounts.creative, icon: faPalette },
    { id: 'architect' as const, label: 'Kiến Trúc Không Gian', count: projectCounts.architect, icon: faBuilding },
  ];

  const viewModes = [
    {
      id: '3d-deck' as const,
      label: '3D Spatial Deck',
      icon: faCube,
      desc: 'Trực quan 3D chiều sâu'
    },
    {
      id: 'physics-stack' as const,
      label: 'Physics Card Stack',
      icon: faLayerGroup,
      desc: 'Kéo thả thẻ bài vật lý'
    },
    {
      id: 'blueprint' as const,
      label: 'Architectural Blueprint',
      icon: faNetworkWired,
      desc: 'Sơ đồ kỹ thuật & Benchmark'
    },
  ];

  return (
    <div className="flex flex-col items-center gap-6 mb-12 sm:mb-16">
      
      {/* Top Floating Island: Interactive View Mode Switcher */}
      <div className="p-1.5 rounded-full bg-neutral-900/[0.04] border border-neutral-200/80 backdrop-blur-md shadow-xs flex items-center gap-1 max-w-full overflow-x-auto scrollbar-none">
        {viewModes.map((mode) => {
          const isSelected = activeView === mode.id;
          return (
            <button
              key={mode.id}
              type="button"
              onClick={() => onViewChange(mode.id)}
              className={`cursor-pointer whitespace-nowrap px-4 py-2 rounded-full text-[12.5px] sm:text-[13px] font-medium transition-all duration-300 flex items-center gap-2 ${
                isSelected
                  ? 'bg-white text-neutral-950 shadow-xs ring-1 ring-neutral-900/10 font-semibold'
                  : 'text-neutral-500 hover:text-neutral-900 hover:bg-white/40'
              }`}
            >
              <FontAwesomeIcon
                icon={mode.icon}
                className={`text-xs ${isSelected ? 'text-sky-600' : 'text-neutral-400'}`}
              />
              <span>{mode.label}</span>
            </button>
          );
        })}
      </div>

      {/* Bottom Category Filter Pills (Only active when in standard 3D Deck view) */}
      {activeView === '3d-deck' && (
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-neutral-100/90 rounded-full border border-neutral-200/60 shadow-2xs">
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onFilterChange(tab.id)}
                className={`cursor-pointer px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                {tab.icon && (
                  <FontAwesomeIcon
                    icon={tab.icon}
                    className={`text-[10px] ${isSelected ? 'text-sky-300' : 'text-neutral-400'}`}
                  />
                )}
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-neutral-200/80 text-neutral-600'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      )}

    </div>
  );
};
