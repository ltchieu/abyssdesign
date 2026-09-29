import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faQuoteLeft,
  faServer,
  faCheck,
  faCompassDrafting,
  faGaugeHigh,
  faShieldHalved,
  faMobileScreenButton,
  faBolt,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faJs,
  faHtml5,
} from '@fortawesome/free-brands-svg-icons';
import { DEVELOPER_DATA } from '../data/developerData';

export const AboutDeveloper: React.FC = () => {
  const [lighthouseScore, setLighthouseScore] = useState(0);

  // Smooth counter animation for Lighthouse 99+ score
  useEffect(() => {
    let start = 0;
    const end = 99;
    const duration = 1800;
    const stepTime = 20;
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setLighthouseScore(end);
        clearInterval(timer);
      } else {
        setLighthouseScore(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="bg-gradient-to-b from-white to-[#f8fafc] border border-neutral-200/90 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_12px_40px_rgba(0,0,0,0.03)] relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-sky-200/40 via-blue-200/20 to-transparent blur-3xl pointer-events-none rounded-full"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Developer Story & Core Intro (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider w-fit mb-5">
              <FontAwesomeIcon icon={faLaptopCode} className="text-sky-500" />
              <span>Về Tôi • Người Lập Trình & Đồng Hành Cùng Bạn</span>
            </div>

            {/* Headline - Friendly, sincere, no clichés */}
            <h2
              id="about-developer-heading"
              className="text-[28px] sm:text-[36px] md:text-[42px] font-bold tracking-tight text-[#111827] leading-[1.2] mb-6"
            >
              Người Đồng Hành Cùng Bạn <br className="hidden sm:inline" />
              Tạo Dựng <span className="text-hologram">Dấu Ấn Cá Nhân</span>
            </h2>

            {/* Core Bio Quote Box */}
            <div className="relative bg-white border border-sky-100 rounded-2xl p-6 sm:p-7 shadow-[0_8px_30px_rgba(2,132,199,0.06)] mb-8">
              <div className="absolute -top-3 left-6 text-sky-400/30 text-2xl">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <p className="text-[15px] sm:text-[16px] text-neutral-700 font-normal leading-relaxed">
                "{DEVELOPER_DATA.bio}"
              </p>
            </div>

            {/* Core Commitments Checklist - Friendly & practical */}
            <div className="space-y-3.5 mb-8">
              {DEVELOPER_DATA.commitments.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-[13.5px] text-neutral-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faCheck} className="text-[11px]" />
                  </div>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-6 border-t border-neutral-100">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-3 font-semibold">
                Công Nghệ Sử Dụng (Tối Ưu & Ổn Định):
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-neutral-200 text-neutral-800 rounded-lg text-xs font-medium shadow-xs">
                  <FontAwesomeIcon icon={faReact} className="text-[#61DAFB]" />
                  React 19
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-neutral-200 text-neutral-800 rounded-lg text-xs font-medium shadow-xs">
                  <FontAwesomeIcon icon={faJs} className="text-[#3178C6]" />
                  TypeScript
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-neutral-200 text-neutral-800 rounded-lg text-xs font-medium shadow-xs">
                  <FontAwesomeIcon icon={faHtml5} className="text-[#E34F26]" />
                  HTML5 & Modern CSS
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-neutral-200 text-neutral-800 rounded-lg text-xs font-medium shadow-xs">
                  <FontAwesomeIcon icon={faCompassDrafting} className="text-[#0284c7]" />
                  Tailwind CSS
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-neutral-200 text-neutral-800 rounded-lg text-xs font-medium shadow-xs">
                  <FontAwesomeIcon icon={faServer} className="text-neutral-900" />
                  Vercel Cloud
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Single Live Lighthouse 99+ Demo Gauge + Distinct Metric Badges (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Visual Speed Demo: Google Lighthouse Top Tier Gauge Card */}
            <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 shadow-2xl text-white overflow-hidden relative">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Title bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faGaugeHigh} className="text-emerald-400 text-sm" />
                  <span className="text-xs font-mono font-semibold tracking-wider text-neutral-300">
                    GOOGLE LIGHTHOUSE AUDIT
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  PASSED
                </span>
              </div>

              {/* 4 Gauge Rings Grid */}
              <div className="grid grid-cols-4 gap-2 text-center mb-5">
                {/* 1. Performance Ring */}
                <div className="flex flex-col items-center">
                  <div className="relative w-14 h-14 rounded-full border-2 border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <span className="text-base font-extrabold font-mono text-emerald-400">
                      {lighthouseScore}
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-medium">Performance</span>
                </div>

                {/* 2. Accessibility */}
                <div className="flex flex-col items-center">
                  <div className="relative w-14 h-14 rounded-full border-2 border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <span className="text-base font-extrabold font-mono text-emerald-400">100</span>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-medium">Accessibility</span>
                </div>

                {/* 3. Best Practices */}
                <div className="flex flex-col items-center">
                  <div className="relative w-14 h-14 rounded-full border-2 border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <span className="text-base font-extrabold font-mono text-emerald-400">100</span>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-medium">Best Practices</span>
                </div>

                {/* 4. SEO */}
                <div className="flex flex-col items-center">
                  <div className="relative w-14 h-14 rounded-full border-2 border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <span className="text-base font-extrabold font-mono text-emerald-400">100</span>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-medium">SEO</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[11.5px] text-neutral-300 leading-relaxed border-t border-slate-800/80 pt-3">
                Mọi website đều được tối ưu dung lượng ảnh, nén mã nguồn để người xem nhấp là mở được ngay lập tức, không để nhà tuyển dụng phải đợi lâu.
              </p>
            </div>

            {/* 4 Quick Stat Badges - Deduplicated & Meaningful */}
            <div className="grid grid-cols-2 gap-3">
              {DEVELOPER_DATA.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="bg-white border border-neutral-200/90 p-4 rounded-xl shadow-xs hover:border-sky-300 transition-colors"
                >
                  <div className="text-2xl font-extrabold text-blue-600 tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-neutral-900 mt-0.5">
                    {metric.label}
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    {metric.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

