import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faQuoteLeft,
  faServer,
  faArrowRight,
  faCheck,
  faCompassDrafting,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faJs,
  faHtml5,
} from '@fortawesome/free-brands-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { DEVELOPER_DATA } from '../data/developerData';
import { CONTACT_DATA } from '../data/contactData';

export const AboutDeveloper: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="bg-gradient-to-b from-white to-[#f8fafc] border border-neutral-200/90 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_12px_40px_rgba(0,0,0,0.03)] relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-sky-200/40 via-blue-200/20 to-transparent blur-3xl pointer-events-none rounded-full"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Developer Story & Core Intro (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider w-fit mb-5">
              <FontAwesomeIcon icon={faLaptopCode} className="text-sky-500" />
              <span>Về Tôi • Web Developer & UI/UX Specialist</span>
            </div>

            {/* Headline */}
            <h2
              id="about-developer-heading"
              className="text-[28px] sm:text-[36px] md:text-[42px] font-bold tracking-tight text-[#111827] leading-[1.2] mb-6"
            >
              Chuyên Gia Xây Dựng <br className="hidden sm:inline" />
              <span className="text-hologram">Portfolio & Landing Page</span> Đột Phá
            </h2>

            {/* Core Bio Quote Box */}
            <div className="relative bg-white border border-sky-100 rounded-2xl p-6 sm:p-7 shadow-[0_8px_30px_rgba(2,132,199,0.06)] mb-8">
              <div className="absolute -top-3 left-6 text-sky-400/30 text-2xl">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <p className="text-[15px] sm:text-[16.5px] text-neutral-700 font-medium leading-relaxed italic">
                "{DEVELOPER_DATA.bio}"
              </p>
            </div>

            {/* Core Commitments Checklist */}
            <div className="space-y-3 mb-8">
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
                Công Nghệ Sử Dụng Chủ Đạo:
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
                  <FontAwesomeIcon icon={faServer} className="text-neutral-900" />
                  Vercel Deploy
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-neutral-200 text-neutral-800 rounded-lg text-xs font-medium shadow-xs">
                  <FontAwesomeIcon icon={faCompassDrafting} className="text-[#0284c7]" />
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Terminal / Metrics Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Terminal Window Card */}
            <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-5 shadow-2xl text-white font-mono text-xs overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] text-neutral-400">developer-profile.ts</span>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-2 text-[11.5px] leading-relaxed text-neutral-300">
                <p>
                  <span className="text-pink-400">const</span>{' '}
                  <span className="text-yellow-300">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">focus</span>:{' '}
                  <span className="text-emerald-300">'Modern Portfolio & High-Converting UX'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">coreStack</span>:{' '}
                  <span className="text-emerald-300">['React', 'TypeScript', 'Tailwind', 'Vercel']</span>,
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">performance</span>:{' '}
                  <span className="text-yellow-300">99+</span>,{' '}
                  <span className="text-neutral-500">// Google Lighthouse Top Tier</span>
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">turnaround</span>:{' '}
                  <span className="text-emerald-300">'3 – 7 Days'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">freeSupport</span>:{' '}
                  <span className="text-emerald-300">'1 Year Free Deploy & Care'</span>
                </p>
                <p>&#125;;</p>
                <p className="text-neutral-500 pt-1">// Ready to elevate your career story</p>
              </div>
            </div>

            {/* 4 Quick Stat Badges */}
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

            {/* Quick Consultation CTA - Direct Zalo */}
            <a
              id="about-developer-zalo-btn"
              href={CONTACT_DATA.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer btn-hologram py-3.5 px-6 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <FontAwesomeIcon icon={faCommentDots} className="text-sm" />
              <span>Tư Vấn Thiết Kế Portfolio Trực Tiếp 1-1 Qua Zalo</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-[11px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
