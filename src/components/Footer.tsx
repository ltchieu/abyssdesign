import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faShieldHalved,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { FOOTER_LINKS } from '../data/footerData';
import { CONTACT_DATA } from '../data/contactData';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer
        id="main-footer"
        className="bg-[#f0f2f6] border-t border-neutral-200/80 py-10 sm:py-12 px-6 sm:px-8 lg:px-12 mt-12"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Logo Brand with Official ABYSS Logo Asset */}
          <div className="flex items-center gap-3">
            <a
              id="footer-brand-logo"
              href="#"
              className="group flex items-center gap-3 transition-transform hover:scale-105"
            >
              <img
                src="/logo_no_title.png"
                alt="ABYSS Emblem"
                className="w-9 h-9 rounded-xl object-contain bg-slate-900 p-1.5 border border-slate-700/60 shadow-xs"
              />
              <div className="flex flex-col">
                <span className="text-[17px] font-bold tracking-tight text-neutral-900 leading-tight">
                  <span className="text-hologram font-extrabold">ABYSS</span> Design
                </span>
                <span className="text-[11px] text-neutral-500 font-medium">
                  Portfolio Websites. Designed to Depth.
                </span>
              </div>
            </a>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[13px] sm:text-[13.5px] text-neutral-600">
            <a
              href={CONTACT_DATA.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1.5"
            >
              <FontAwesomeIcon icon={faCommentDots} className="text-sm" />
              <span>Zalo: {CONTACT_DATA.formattedPhone}</span>
            </a>
            <button
              onClick={() => setLegalModal('privacy')}
              className="cursor-pointer hover:text-neutral-900 transition-colors"
            >
              Chính sách bảo mật
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className="cursor-pointer hover:text-neutral-900 transition-colors"
            >
              Điều khoản dịch vụ
            </button>
          </div>

          {/* Right Copyright */}
          <div className="flex items-center gap-4 text-[12.5px] sm:text-[13px] text-neutral-500">
            <span>{FOOTER_LINKS.copyright}</span>
            <button
              onClick={scrollToTop}
              title="Cuộn lên đầu trang"
              className="cursor-pointer p-2 rounded-full bg-white border border-neutral-200/80 hover:bg-neutral-100 text-neutral-700 transition-all hover:-translate-y-0.5"
            >
              <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
            </button>
          </div>
        </div>
      </footer>

      {/* Legal Dialog Modal */}
      {legalModal && (
        <div
          id="legal-modal-overlay"
          className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setLegalModal(null)}
        >
          <div
            id="legal-modal-content"
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-200/90 relative max-h-[85vh] overflow-y-auto"
          >
            <button
              onClick={() => setLegalModal(null)}
              className="cursor-pointer absolute top-5 right-5 p-1.5 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100"
            >
              <FontAwesomeIcon icon={faXmark} className="text-base" />
            </button>

            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <FontAwesomeIcon icon={faShieldHalved} className="text-sm" />
              <span className="text-xs font-semibold uppercase tracking-wider">ABYSS Design Pháp Lý</span>
            </div>

            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              {legalModal === 'privacy' ? 'Chính Sách Bảo Mật' : 'Điều Khoản Dịch Vụ'}
            </h3>

            <div className="text-neutral-600 text-sm space-y-3 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Tại ABYSS Design, bảo mật và quyền riêng tư là ưu tiên hàng đầu. Chúng tôi cam kết bảo vệ toàn bộ tư liệu dự án, hình ảnh, thông tin liên hệ và mã nguồn của bạn.
                  </p>
                  <p>
                    Toàn bộ mã nguồn sau khi bàn giao thuộc quyền sở hữu 100% của khách hàng. Chúng tôi hỗ trợ duy trì triển khai máy chủ Vercel miễn phí 1 năm.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Quy trình làm việc từ 3–7 ngày được thực hiện qua các cột mốc: Tiếp Nhận & Tư Vấn, Lập Trình & Demo Trực Tiếp, Chỉnh Sửa & Triển Khai Internet.
                  </p>
                  <p>
                    Khách hàng có quyền yêu cầu chỉnh sửa theo gói đăng ký (3 lần cho gói theo mẫu hoặc không giới hạn cho gói theo yêu cầu) để đảm bảo kết quả ưng ý nhất.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="cursor-pointer px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                Đã hiểu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
