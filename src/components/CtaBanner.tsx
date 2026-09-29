import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { CONTACT_DATA } from '../data/contactData';

export const CtaBanner: React.FC = () => {
  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Outer Card */}
      <div
        id="cta-banner-card"
        className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] border border-slate-800 rounded-3xl p-10 sm:p-16 md:p-20 text-center shadow-[0_20px_50px_rgba(15,23,42,0.3)] relative overflow-hidden flex flex-col items-center justify-center text-white"
      >
        {/* Subtle Ambient Radial Glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(#0284c715_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <FontAwesomeIcon icon={faShieldHalved} className="text-xs" />
            <span>Sẵn Sàng Bắt Đầu Dự Án</span>
          </div>

          {/* Headline */}
          <h2
            id="cta-banner-title"
            className="text-[28px] sm:text-[38px] md:text-[44px] font-extrabold tracking-[-0.03em] text-white leading-[1.25] mb-5"
          >
            Sẵn Sàng Để Portfolio Của Bạn <br className="hidden sm:inline" />
            Kể Câu Chuyện <span className="text-hologram">Thuyết Phục Nhất?</span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mb-9 leading-relaxed">
            Đừng ngần ngại nhắn tin trao đổi ý tưởng. Mình luôn sẵn lòng lắng nghe, tư vấn định hướng bố cục và giải đáp mọi thắc mắc của bạn hoàn toàn miễn phí.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5">
            <a
              id="cta-zalo-btn"
              href={CONTACT_DATA.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer group btn-hologram text-[15px] font-semibold px-8 py-3.5 rounded-full flex items-center justify-center gap-2.5 shadow-lg"
            >
              <FontAwesomeIcon icon={faCommentDots} className="text-base" />
              <span>Nhắn Tin Zalo: {CONTACT_DATA.formattedPhone}</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <p className="mt-6 text-xs text-neutral-400 font-mono">
            {CONTACT_DATA.consultationNote}
          </p>
        </div>
      </div>
    </section>
  );
};
