import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPalette,
  faBuilding,
  faUserTie,
  faArrowUpRightFromSquare,
  faLaptopCode
} from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { PROJECTS } from '../data/projectsData';
import { Project } from '../types';
import { CONTACT_DATA } from '../data/contactData';

export const RecentWork: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'creative' | 'architect' | 'executive'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'creative') return p.iconType === 'creative';
    if (selectedFilter === 'architect') return p.iconType === 'architect';
    if (selectedFilter === 'executive') return p.iconType === 'executive';
    return true;
  });

  const renderIcon = (type: Project['iconType']) => {
    switch (type) {
      case 'creative':
        return <FontAwesomeIcon icon={faPalette} className="text-2xl text-neutral-400 group-hover:text-blue-600 transition-colors" />;
      case 'architect':
        return <FontAwesomeIcon icon={faBuilding} className="text-2xl text-neutral-400 group-hover:text-blue-600 transition-colors" />;
      case 'executive':
        return <FontAwesomeIcon icon={faUserTie} className="text-2xl text-neutral-400 group-hover:text-blue-600 transition-colors" />;
      default:
        return <FontAwesomeIcon icon={faLaptopCode} className="text-2xl text-neutral-400" />;
    }
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <h2
          id="recent-work-heading"
          className="text-[30px] sm:text-[36px] md:text-[40px] font-bold tracking-[-0.02em] text-[#111827] mb-3"
        >
          Dự Án Portfolio Tiêu Biểu
        </h2>
        <p
          id="recent-work-subheading"
          className="text-[15px] sm:text-[16px] text-neutral-500 font-normal tracking-[-0.01em]"
        >
          Khám phá các phong cách portfolio độc bản. Nhấp để liên hệ tư vấn và phát triển trực tiếp qua Zalo.
        </p>

        {/* Minimal Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-6 p-1 bg-neutral-100/80 rounded-full w-fit mx-auto border border-neutral-200/60">
          {(
            [
              { id: 'all', label: 'Tất cả Portfolio' },
              { id: 'creative', label: 'Giám Đốc Sáng Tạo' },
              { id: 'architect', label: 'Kiến Trúc & Không Gian' },
              { id: 'executive', label: 'Lãnh Đạo & Cố Vấn' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`cursor-pointer px-3.5 py-1 rounded-full text-[12.5px] font-medium transition-all duration-200 ${
                selectedFilter === tab.id
                  ? 'bg-white text-neutral-900 shadow-xs'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3-Column Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
        {filteredProjects.map((project) => {
          return (
            <a
              key={project.id}
              id={`project-card-${project.id}`}
              href={CONTACT_DATA.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-neutral-200/90 hover:border-neutral-300 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)] hover:-translate-y-1 flex flex-col"
            >
              {/* Card Top Preview Box */}
              <div className="bg-[#f5f6f8] group-hover:bg-[#eef2f8] transition-colors duration-300 h-52 sm:h-56 flex items-center justify-center relative p-6 border-b border-neutral-200/60">
                {/* Subtle Interactive Geometric Backing Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#0f172a08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Centered Minimalist Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/70 backdrop-blur-xs border border-neutral-200/60 shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {renderIcon(project.iconType)}
                </div>

                {/* Floating Zalo Contact Hint on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0 bg-white text-neutral-900 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1.5 border border-neutral-200/80">
                  <FontAwesomeIcon icon={faCommentDots} className="text-[10px] text-blue-600" />
                  <span>Tư vấn qua Zalo</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[9px] text-neutral-400" />
                </div>

                {/* Micro tech chips on bottom */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                  <span>{project.year}</span>
                  <span className="text-neutral-500 font-sans font-medium">{project.duration}</span>
                </div>
              </div>

              {/* Card Bottom Meta */}
              <div className="p-6 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h3 className="text-[17px] font-semibold text-[#111827] group-hover:text-blue-600 transition-colors tracking-[-0.01em] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[14px] text-neutral-500 font-normal">
                    {project.category}
                  </p>
                </div>

                {/* Micro stats preview on hover */}
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[12px] text-neutral-400">
                  <span className="truncate max-w-[170px]">
                    {project.stats[0].label}: <strong className="text-neutral-800 font-medium">{project.stats[0].value}</strong>
                  </span>
                  <span className="text-blue-600 font-medium group-hover:underline flex items-center gap-1">
                    <FontAwesomeIcon icon={faCommentDots} className="text-xs" />
                    Đặt Mẫu Này
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
