import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWandMagicSparkles,
  faComments,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { PROJECTS } from '../data/projectsData';
import { Project } from '../types';
import { ProjectCard3D } from './projects/ProjectCard3D';
import { ProjectPhysicsStack } from './projects/ProjectPhysicsStack';
import { ProjectBlueprintView } from './projects/ProjectBlueprintView';
import { ProjectDetailModal } from './projects/ProjectDetailModal';
import { ProjectViewControls, ViewMode, FilterCategory } from './projects/ProjectViewControls';
import { CONTACT_DATA } from '../data/contactData';

export const RecentWork: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewMode>('3d-deck');
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects for 3D Deck view
  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'developer') return p.iconType === 'developer';
    if (activeFilter === 'marketing') return p.iconType === 'marketing';
    if (activeFilter === 'creative') return p.iconType === 'creative';
    if (activeFilter === 'architect') return p.iconType === 'architect';
    return true;
  });

  const projectCounts = {
    all: PROJECTS.length,
    developer: PROJECTS.filter((p) => p.iconType === 'developer').length,
    marketing: PROJECTS.filter((p) => p.iconType === 'marketing').length,
    creative: PROJECTS.filter((p) => p.iconType === 'creative').length,
    architect: PROJECTS.filter((p) => p.iconType === 'architect').length,
  };

  const handleOpenConsultation = () => {
    window.open(CONTACT_DATA.zaloUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="portfolio"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Subtle Background Radial Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/[0.04] border border-neutral-200/80 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-800 mb-4 shadow-2xs">
          <FontAwesomeIcon icon={faWandMagicSparkles} className="text-sky-600" />
          <span>PORTFOLIO SHOWCASE • ĐỘC BẢN 3D</span>
        </div>

        {/* Massive Display Title */}
        <h2
          id="recent-work-heading"
          className="text-[32px] sm:text-[42px] md:text-[48px] font-extrabold tracking-[-0.03em] text-neutral-950 leading-[1.1] mb-4"
        >
          Trưng Bày Dự Án Portfolio Tiêu Biểu
        </h2>

        {/* Subtitle Description */}
        <p
          id="recent-work-subheading"
          className="text-[15px] sm:text-[17px] text-neutral-600 font-normal leading-relaxed tracking-[-0.01em]"
        >
          Khám phá những kiệt tác portfolio được thiết kế riêng cho từng chuyên ngành. Trải nghiệm tương tác 3D đa chiều, hiệu ứng vật lý sống động và hồ sơ phân tích kỹ thuật chuẩn quốc tế.
        </p>
      </div>

      {/* Viewport Mode Switcher & Category Filters */}
      <ProjectViewControls
        activeView={activeView}
        onViewChange={setActiveView}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        projectCounts={projectCounts}
      />

      {/* Dynamic Viewport Container */}
      <div className="relative min-h-[480px]">
        {/* 1. View Mode: 3D Spatial Deck (MUI Grid v2) */}
        {activeView === '3d-deck' && (
          <Grid container spacing={{ xs: 3, md: 3.5, lg: 4 }}>
            {filteredProjects.map((project, idx) => (
              <Grid key={project.id} size={{ xs: 12, md: 6, lg: 6 }}>
                <ProjectCard3D
                  project={project}
                  onSelect={setSelectedProject}
                  index={idx}
                />
              </Grid>
            ))}
          </Grid>
        )}

        {/* 2. View Mode: Interactive Physics Card Stack */}
        {activeView === 'physics-stack' && (
          <ProjectPhysicsStack
            projects={PROJECTS}
            onSelect={setSelectedProject}
          />
        )}

        {/* 3. View Mode: Architectural Blueprint & Benchmark View */}
        {activeView === 'blueprint' && (
          <ProjectBlueprintView
            projects={PROJECTS}
            onSelect={setSelectedProject}
          />
        )}
      </div>

      {/* Bottom Floating Consultation Callout */}
      <div className="mt-16 sm:mt-20 p-6 sm:p-8 rounded-[2rem] bg-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
        {/* Decorative Grid Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="relative z-10 text-center md:text-left">
          <span className="text-[12px] font-mono text-sky-400 uppercase tracking-widest block mb-1">
            BẠN CẦN PHONG CÁCH RIÊNG?
          </span>
          <h3 className="text-[20px] sm:text-[24px] font-bold text-white tracking-tight">
            Bạn muốn sở hữu một trang Portfolio độc bản như trên?
          </h3>
          <p className="text-[13.5px] text-neutral-300 mt-1 max-w-xl">
            Abyss Design tuỳ biến 100% theo hồ sơ, phong cách cá nhân và mục tiêu sự nghiệp của bạn. Hỗ trợ trọn gói từ thiết kế đến lập trình và triển khai.
          </p>
        </div>

        {/* Button-in-Button Call to Action */}
        <button
          type="button"
          onClick={handleOpenConsultation}
          className="cursor-pointer relative z-10 shrink-0 inline-flex items-center gap-3 pl-6 pr-2 py-3 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 text-[13.5px] font-semibold transition-all duration-300 shadow-md group"
        >
          <span>Nhận Tư Vấn Trực Tiếp Qua Zalo</span>
          <span className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
            <FontAwesomeIcon icon={faComments} className="text-xs" />
          </span>
        </button>
      </div>

      {/* Deep-Dive Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

