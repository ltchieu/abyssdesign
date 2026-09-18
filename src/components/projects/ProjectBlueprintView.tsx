import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGaugeHigh,
  faNetworkWired,
  faTerminal,
  faBolt,
  faArrowRight,
  faCircleCheck,

} from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../types';

interface ProjectBlueprintViewProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

export const ProjectBlueprintView: React.FC<ProjectBlueprintViewProps> = ({ projects, onSelect }) => {
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0]?.id || '');
  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  return (
    <div className="w-full max-w-6xl mx-auto py-6 sm:py-10">
      {/* Project Selector Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {projects.map((proj) => {
          const isActive = proj.id === activeProjectId;
          return (
            <button
              key={proj.id}
              type="button"
              onClick={() => setActiveProjectId(proj.id)}
              className={`cursor-pointer whitespace-nowrap px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 flex items-center gap-2 border ${isActive
                ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                : 'bg-white text-neutral-600 border-neutral-200/80 hover:border-neutral-300 hover:text-neutral-900'
                }`}
            >
              <FontAwesomeIcon
                icon={proj.iconType === 'developer' ? faTerminal : proj.iconType === 'marketing' ? faBolt : faNetworkWired}
                className={isActive ? 'text-sky-400' : 'text-neutral-400'}
              />
              <span>{proj.title}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-500'
                  }`}
              >
                {proj.year}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {activeProject && (
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="p-3 sm:p-4 rounded-[2.2rem] bg-neutral-900/[0.04] border border-neutral-200/90 shadow-sm bg-white"
          >
            {/* Inner Blueprint Sheet */}
            <div className="rounded-[calc(2.2rem-0.625rem)] border border-neutral-200/70 bg-gradient-to-b from-neutral-50/90 via-white to-white p-6 sm:p-8">

              {/* Header Meta Strip */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-200/80">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-700 text-[11px] font-semibold tracking-wide">
                      {activeProject.badge}
                    </span>
                    <span className="text-[12px] text-neutral-400 font-mono">
                      Khách hàng: {activeProject.client}
                    </span>
                  </div>
                  <h3 className="text-[24px] sm:text-[28px] font-bold text-neutral-900 tracking-tight">
                    {activeProject.title} • Kiến Trúc & Hiệu Năng
                  </h3>
                </div>

                {/* Primary CTA */}
                <button
                  type="button"
                  onClick={() => onSelect(activeProject)}
                  className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-sky-600 text-white text-[13px] font-medium transition-all duration-300 shadow-xs self-start md:self-auto group"
                >
                  <span>Xem Toàn Bộ Hồ Sơ Kỹ Thuật</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Sub-Layout using MUI Grid v2 */}
              <div className="mt-8">
                <Grid container spacing={4}>

                  {/* Left Column: Architecture Pipeline & Highlights */}
                  <Grid size={{ xs: 12, lg: 7 }}>
                    <div className="space-y-6">

                      {/* Architecture Pipeline Flow */}
                      <div>
                        <h4 className="text-[14px] font-bold text-neutral-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <FontAwesomeIcon icon={faNetworkWired} className="text-sky-600 text-sm" />
                          <span>Luồng Kiến Trúc Hệ Thống (Architecture Flow)</span>
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {activeProject.architectureNodes?.map((node, i) => (
                            <div
                              key={node.step}
                              className="p-3.5 rounded-xl bg-white border border-neutral-200/70 shadow-2xs relative overflow-hidden"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 text-[10.5px] font-mono font-bold flex items-center justify-center">
                                  {i + 1}
                                </span>
                                <strong className="text-[13px] font-semibold text-neutral-900">
                                  {node.step}
                                </strong>
                              </div>
                              <p className="text-[12px] text-neutral-500 leading-normal pl-7">
                                {node.detail}
                              </p>
                            </div>
                          )) || (
                              <div className="p-4 bg-neutral-50 rounded-xl text-[13px] text-neutral-500">
                                Đang chuẩn bị sơ đồ kiến trúc chi tiết.
                              </div>
                            )}
                        </div>
                      </div>

                      {/* Breakthrough Highlights List */}
                      <div>
                        <h4 className="text-[14px] font-bold text-neutral-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <FontAwesomeIcon icon={faCircleCheck} className="text-emerald-600 text-sm" />
                          <span>Điểm Đột Phá Đã Được Kiểm Chứng</span>
                        </h4>

                        <ul className="space-y-2">
                          {activeProject.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-neutral-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </Grid>

                  {/* Right Column: Performance Benchmark Matrix & Tech Stack */}
                  <Grid size={{ xs: 12, lg: 5 }}>
                    <div className="p-5 rounded-2xl bg-neutral-900 text-white flex flex-col justify-between h-full shadow-md">

                      {/* Top Metrics Grid */}
                      <div>
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                          <span className="text-[12.5px] font-mono text-neutral-300 flex items-center gap-1.5">
                            <FontAwesomeIcon icon={faGaugeHigh} className="text-emerald-400" />
                            <span>BENCHMARK AUDIT</span>
                          </span>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            LIVE PASSED
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {activeProject.systemMetrics?.map((metric) => (
                            <div key={metric.label} className="p-3 rounded-xl bg-white/5 border border-white/10">
                              <div className="text-[20px] sm:text-[22px] font-bold font-mono text-white tracking-tight">
                                {metric.value}
                              </div>
                              <div className="text-[12px] font-medium text-neutral-300">
                                {metric.label}
                              </div>
                              <div className="text-[10.5px] text-neutral-400 line-clamp-1 mt-0.5">
                                {metric.desc}
                              </div>
                            </div>
                          )) || (
                              activeProject.stats.map((s) => (
                                <div key={s.label} className="p-3 rounded-xl bg-white/5 border border-white/10">
                                  <div className="text-[20px] font-bold font-mono text-white">
                                    {s.value}
                                  </div>
                                  <div className="text-[12px] text-neutral-300">
                                    {s.label}
                                  </div>
                                </div>
                              ))
                            )}
                        </div>
                      </div>

                      {/* Tech Stack Pills inside Matrix */}
                      <div>
                        <span className="text-[11.5px] uppercase tracking-wider text-neutral-400 font-mono block mb-2">
                          STACK CÔNG NGHỆ CHÍNH
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeProject.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-[11px] font-mono text-neutral-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </Grid>

                </Grid>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
