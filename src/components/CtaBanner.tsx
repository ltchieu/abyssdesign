import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { CONTACT_DATA } from '../data/contactData';

interface CtaBannerProps {
  onGetInTouch?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onGetInTouch }) => {
  return (
    <section id="contact" className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Outer Card */}
      <div
        id="cta-banner-card"
        className="bg-neutral-900 border border-neutral-800 rounded-3xl p-10 sm:p-16 md:p-20 text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col items-center justify-center text-white"
      >
        {/* Subtle Ambient Radial Glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(#0284c715_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-800 border border-neutral-700 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <FontAwesomeIcon icon={faShieldHalved} className="text-xs" />
            <span>Sẵn Sàng Nâng Tầm Thương Hiệu Cá Nhân</span>
          </div>

          {/* Headline */}
          <h2
            id="cta-banner-title"
            className="text-[28px] sm:text-[38px] md:text-[46px] font-extrabold tracking-[-0.03em] text-white leading-[1.2] mb-6"
          >
            Năng lực của bạn là <span className="text-hologram">độc bản</span>.
            <br className="hidden sm:inline" />
            Đừng để portfolio của bạn trông giống một <span className="text-neutral-400 font-normal italic">bản sao đại trà</span>.
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mb-9 leading-relaxed">
            Chỉ mất từ 3–7 ngày để sở hữu website portfolio ấn tượng, có demo xem trước trực tiếp và được hỗ trợ deploy miễn phí 1 năm.
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
              <span>Liên Hệ Zalo: {CONTACT_DATA.formattedPhone}</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {onGetInTouch && (
              <button
                type="button"
                onClick={onGetInTouch}
                className="cursor-pointer bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 text-[14.5px] font-semibold px-7 py-3.5 rounded-full transition-all"
              >
                <span>Nhận Báo Giá Chi Tiết</span>
              </button>
            )}
          </div>

          <p className="mt-6 text-xs text-neutral-500 font-mono">
            {CONTACT_DATA.consultationNote}
          </p>
        </div>
      </div>
    </section>
  );
};
