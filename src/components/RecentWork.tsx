import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments
} from '@fortawesome/free-solid-svg-icons';
import { PROJECTS } from '../data/projectsData';
import { Project } from '../types';
import { ProjectTicketScrollStack } from './projects/ProjectTicketScrollStack';
import { ProjectDetailModal } from './projects/ProjectDetailModal';
import { CONTACT_DATA } from '../data/contactData';

export const RecentWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenConsultation = () => {
    window.open(CONTACT_DATA.zaloUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="relative w-full bg-[#07060f] rounded-b-[2.5rem] sm:rounded-b-[4rem] shadow-2xl">
      
      {/* 1. SCROLL-PINNED 3D CARD STACK (Carl Gordon Media Physical Card Stack) */}
      <ProjectTicketScrollStack
        projects={PROJECTS}
        onSelectProject={setSelectedProject}
      />

      {/* 2. BOTTOM CONSULTATION CALLOUT (Seamlessly transitions to process pipeline) */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32 pt-12 z-20">
        <div className="p-6 sm:p-10 rounded-[2.5rem] bg-neutral-950 border border-neutral-800/90 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Decorative Background Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          {/* Ambient Corner Glow */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-sky-500/15 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10 text-center md:text-left">
            <span className="text-[11.5px] font-mono text-sky-400 uppercase tracking-widest block mb-1.5 font-bold">
              BẠN CẦN PHONG CÁCH TƯƠNG TỰ?
            </span>
            <h3 className="text-[22px] sm:text-[26px] font-black text-white tracking-tight leading-snug">
              Bạn muốn sở hữu một trang Portfolio độc bản như trên?
            </h3>
            <p className="text-[14px] text-neutral-400 mt-2 max-w-xl font-normal leading-relaxed">
              Abyss Design may đo 100% theo phong cách cá nhân, chuyên ngành và lộ trình sự nghiệp của bạn. Hỗ trợ toàn diện từ tư vấn nội dung, thiết kế visual đến lập trình và triển khai.
            </p>
          </div>

          {/* Action Button */}
          <button
            type="button"
            onClick={handleOpenConsultation}
            className="cursor-pointer relative z-10 shrink-0 inline-flex items-center gap-3.5 pl-6 pr-2.5 py-3 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 text-[13.5px] font-bold transition-all duration-300 shadow-xl group hover:scale-105"
          >
            <span>Nhận Tư Vấn Trực Tiếp Qua Zalo</span>
            <span className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faComments} className="text-xs" />
            </span>
          </button>
        </div>
      </div>

      {/* 3. DEEP-DIVE CASE STUDY MODAL */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
