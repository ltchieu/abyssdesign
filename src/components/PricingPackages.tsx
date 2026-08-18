import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faStar,
  faClock,
  faRotate,
  faShieldHalved,
  faArrowRight,
  faBolt,
  faLayerGroup,
  faWandMagicSparkles,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';
import { PRICING_PACKAGES } from '../data/pricingData';
import { PricingPackage } from '../types';

interface PricingPackagesProps {
  onSelectPackage: (pkg: PricingPackage) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
          <FontAwesomeIcon icon={faBolt} className="text-sky-500" />
          <span>Bảng Giá Minh Bạch • Không Chi Phí Ẩn</span>
        </div>
        <h2
          id="pricing-packages-heading"
          className="text-[30px] sm:text-[38px] md:text-[44px] font-bold tracking-[-0.02em] text-[#111827] mb-4 leading-tight"
        >
          Gói Dịch Vụ Thiết Kế <span className="text-hologram">Portfolio Cá Nhân</span>
        </h2>
        <p
          id="pricing-packages-subheading"
          className="text-[15px] sm:text-[17px] text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto"
        >
          Lựa chọn giải pháp phù hợp với mục tiêu và ngân sách của bạn. Cam kết có demo chạy thử trước khi bàn giao và hỗ trợ duy trì triển khai miễn phí 1 năm.
        </p>
      </div>

      {/* 2-Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        {PRICING_PACKAGES.map((pkg) => {
          const isCustom = pkg.isPopular;
          return (
            <div
              key={pkg.id}
              id={`pricing-card-${pkg.id}`}
              className={`relative rounded-3xl p-8 sm:p-10 transition-all duration-500 flex flex-col justify-between ${
                isCustom
                  ? 'bg-neutral-900 text-white border-2 border-sky-400 shadow-[0_20px_50px_rgba(2,132,199,0.22)] ring-4 ring-sky-400/20'
                  : 'bg-white text-neutral-900 border border-black/[0.08] hover:border-sky-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(14,165,233,0.12)]'
              }`}
            >
              {/* Popular Holographic Ribbon */}
              {isCustom && (
                <div className="absolute -top-4 right-8 bg-hologram text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-300 text-xs" />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <div>
                {/* Package Category & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                      isCustom
                        ? 'bg-neutral-800 text-sky-300 border border-neutral-700'
                        : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                    }`}
                  >
                    {isCustom ? (
                      <span className="flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faWandMagicSparkles} />
                        Gói Cao Cấp Theo Yêu Cầu
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faLayerGroup} />
                        Gói Tiết Kiệm Theo Mẫu
                      </span>
                    )}
                  </span>
                </div>

                {/* Package Name */}
                <h3
                  className={`text-[22px] sm:text-[25px] font-bold tracking-tight mb-2 ${
                    isCustom ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  {pkg.name}
                </h3>

                <p
                  className={`text-xs sm:text-[13.5px] leading-relaxed mb-6 ${
                    isCustom ? 'text-neutral-300' : 'text-neutral-500'
                  }`}
                >
                  {pkg.description}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-black/[0.08] dark:border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-[38px] sm:text-[44px] font-extrabold tracking-tight ${
                        isCustom ? 'text-hologram' : 'text-neutral-900'
                      }`}
                    >
                      {pkg.formattedPrice}
                    </span>
                    <span className={`text-xs ${isCustom ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      / trọn gói bàn giao
                    </span>
                  </div>

                  {/* Quick Specs: Timeline & Revisions */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div
                      className={`p-2.5 rounded-xl text-xs flex items-center gap-2 ${
                        isCustom ? 'bg-neutral-800/80 border border-neutral-700' : 'bg-neutral-50 border border-neutral-100'
                      }`}
                    >
                      <FontAwesomeIcon icon={faClock} className="text-sky-500 text-sm shrink-0" />
                      <div>
                        <span className="block text-[10px] text-neutral-400 uppercase font-mono">Thời gian</span>
                        <strong className={isCustom ? 'text-white' : 'text-neutral-800'}>{pkg.duration}</strong>
                      </div>
                    </div>

                    <div
                      className={`p-2.5 rounded-xl text-xs flex items-center gap-2 ${
                        isCustom ? 'bg-neutral-800/80 border border-neutral-700' : 'bg-neutral-50 border border-neutral-100'
                      }`}
                    >
                      <FontAwesomeIcon icon={faRotate} className="text-emerald-500 text-sm shrink-0" />
                      <div>
                        <span className="block text-[10px] text-neutral-400 uppercase font-mono">Số lần sửa</span>
                        <strong className={isCustom ? 'text-white' : 'text-neutral-800'}>{pkg.revisions}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  <div
                    className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${
                      isCustom ? 'text-sky-300' : 'text-neutral-400'
                    }`}
                  >
                    Quyền lợi người thuê sẽ nhận được:
                  </div>

                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px]">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isCustom
                            ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
                            : 'bg-blue-50 text-blue-600 border border-blue-200'
                        }`}
                      >
                        <FontAwesomeIcon icon={faCheck} className="text-[10px]" />
                      </div>
                      <span className={isCustom ? 'text-neutral-200 leading-snug' : 'text-neutral-700 leading-snug'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  type="button"
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full cursor-pointer py-3.5 px-6 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                    isCustom
                      ? 'btn-hologram text-white hover:shadow-[0_8px_30px_rgba(2,132,199,0.5)]'
                      : 'bg-neutral-900 hover:bg-black text-white hover:shadow-lg'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs transition-transform group-hover:translate-x-1" />
                </button>

                <div
                  className={`mt-3.5 text-center text-[11px] flex items-center justify-center gap-1.5 ${
                    isCustom ? 'text-neutral-400' : 'text-neutral-500'
                  }`}
                >
                  <FontAwesomeIcon icon={faShieldHalved} className="text-emerald-500" />
                  <span>Có demo chạy thử trước khi bàn giao • Deploy Vercel miễn phí</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
