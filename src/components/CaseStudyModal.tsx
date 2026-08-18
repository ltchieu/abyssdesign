import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faMobileScreenButton,
  faTabletScreenButton,
  faDisplay,
  faArrowUpRightFromSquare,
  faCircleCheck,
  faAward,
  faDownload,
  faCalendarDays,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onStartSimilar: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onStartSimilar,
}) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'interactive' | 'overview' | 'metrics' | 'deliverables'>('interactive');
  const [deviceViewport, setDeviceViewport] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  
  // Interactive prototype states for each portfolio demo
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [downloadedMediaKit, setDownloadedMediaKit] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  return (
    <div
      id="case-study-modal-overlay"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="case-study-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl w-full max-w-5xl shadow-2xl border border-black/[0.08] overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Top Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-neutral-100 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-black/[0.06] flex items-center justify-center text-blue-600 font-bold text-sm">
              {project.title.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-neutral-900 tracking-tight">
                  {project.title}
                </h3>
                <span className="text-[11px] font-medium px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                  {project.category}
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-mono">Chủ dự án: {project.client} • {project.year}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onStartSimilar(project.title)}
              className="hidden sm:flex cursor-pointer bg-neutral-900 hover:bg-black text-white text-xs font-semibold px-4 py-2 rounded-full transition-all items-center gap-1.5"
            >
              <span>Làm Portfolio Tương Tự</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px]" />
            </button>
            <button
              id="case-study-close-btn"
              onClick={onClose}
              className="cursor-pointer p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              aria-label="Đóng Case Study"
            >
              <FontAwesomeIcon icon={faXmark} className="text-base" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 sm:px-8 border-b border-neutral-100 bg-[#fafafa] flex items-center justify-between shrink-0 overflow-x-auto">
          <div className="flex gap-6 text-[13px] font-medium">
            {[
              { id: 'interactive', label: 'Bản Mẫu Trực Tiếp' },
              { id: 'overview', label: 'Ý Tưởng & Cấu Trúc' },
              { id: 'metrics', label: 'Hiệu Quả Đạt Được' },
              { id: 'deliverables', label: 'Tài Sản Bàn Giao' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`cursor-pointer py-3.5 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 font-semibold'
                    : 'border-transparent text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'interactive' && (
            <div className="hidden sm:flex items-center gap-1 py-2 bg-neutral-200/60 p-0.5 rounded-lg text-neutral-600 text-xs">
              <button
                onClick={() => setDeviceViewport('mobile')}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${deviceViewport === 'mobile' ? 'bg-white text-neutral-900 shadow-xs' : 'hover:text-neutral-900'}`}
                title="Giao diện Mobile"
              >
                <FontAwesomeIcon icon={faMobileScreenButton} className="text-xs" />
              </button>
              <button
                onClick={() => setDeviceViewport('tablet')}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${deviceViewport === 'tablet' ? 'bg-white text-neutral-900 shadow-xs' : 'hover:text-neutral-900'}`}
                title="Giao diện Tablet"
              >
                <FontAwesomeIcon icon={faTabletScreenButton} className="text-xs" />
              </button>
              <button
                onClick={() => setDeviceViewport('desktop')}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${deviceViewport === 'desktop' ? 'bg-white text-neutral-900 shadow-xs' : 'hover:text-neutral-900'}`}
                title="Giao diện Desktop"
              >
                <FontAwesomeIcon icon={faDisplay} className="text-xs" />
              </button>
            </div>
          )}
        </div>

        {/* Modal Main Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-white">
          {activeTab === 'interactive' && (
            <div className="flex flex-col items-center">
              <div className="text-center mb-6 max-w-xl">
                <span className="text-[11px] font-mono uppercase tracking-widest text-blue-600 font-semibold">Trải Nghiệm Trực Tiếp</span>
                <h4 className="text-xl font-bold text-neutral-900 mt-1">Portfolio {project.title}</h4>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1">{project.tagline}</p>
              </div>

              {/* Interactive Prototype Mockup Canvas */}
              <div className="w-full flex justify-center py-4 bg-[#f6f7f9] rounded-2xl border border-neutral-200/80 p-4 sm:p-6">
                {/* 1. Aura Creative Director Portfolio Prototype */}
                {project.previewType === 'creative-director' && (
                  <div
                    className={`transition-all duration-300 bg-neutral-950 text-white rounded-2xl p-6 shadow-2xl border border-neutral-800 ${
                      deviceViewport === 'mobile' ? 'w-[340px]' : deviceViewport === 'tablet' ? 'w-[520px]' : 'w-[680px]'
                    }`}
                  >
                    {/* Top bar */}
                    <div className="flex justify-between items-center pb-4 border-b border-neutral-800 text-xs">
                      <span className="font-bold tracking-tight text-white">MINH TRI / CREATIVE</span>
                      <div className="flex items-center gap-3 text-[11px] text-neutral-400">
                        <span className="text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Available for Q4
                        </span>
                      </div>
                    </div>

                    {/* Hero Showcase inside portfolio */}
                    <div className="py-6">
                      <div className="inline-block px-2.5 py-0.5 rounded-full bg-neutral-800 text-[10px] text-neutral-300 uppercase tracking-widest font-mono mb-2">
                        Selected Works 2023—2024
                      </div>
                      <h5 className="text-2xl font-bold text-white tracking-tight leading-tight">
                        Crafting High-End Brand Worlds & Digital Identities.
                      </h5>
                      <p className="text-xs text-neutral-400 mt-2 max-w-md">
                        Định hình ngôn ngữ thị giác cho các thương hiệu thời trang, công nghệ và nghệ thuật kỹ thuật số.
                      </p>
                    </div>

                    {/* Interactive Works Gallery */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {[
                        { title: 'Vogue Horizon 2024', tag: 'Art Direction', bg: 'from-blue-900 to-indigo-950' },
                        { title: 'Aether Kinetics', tag: '3D Visual System', bg: 'from-neutral-800 to-neutral-900' }
                      ].map((work, idx) => (
                        <div
                          key={idx}
                          onClick={() => setActiveGalleryIndex(idx)}
                          className={`cursor-pointer p-4 rounded-xl border transition-all ${
                            activeGalleryIndex === idx
                              ? 'border-blue-500 bg-neutral-900'
                              : 'border-neutral-800/80 bg-neutral-900/40 hover:border-neutral-700'
                          }`}
                        >
                          <div className={`h-24 rounded-lg bg-gradient-to-br ${work.bg} flex items-center justify-center mb-2.5 border border-white/5`}>
                            <span className="text-[11px] font-mono text-neutral-300">{work.tag}</span>
                          </div>
                          <h6 className="font-semibold text-xs text-neutral-200">{work.title}</h6>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-800 flex justify-between items-center text-[11px] text-neutral-400">
                      <span>Awarded Awwwards Site of the Day</span>
                      <span className="text-blue-400 flex items-center gap-1 font-medium">
                        hello@minhtri.design
                      </span>
                    </div>
                  </div>
                )}

                {/* 2. Monolith Spatial Architecture Portfolio */}
                {project.previewType === 'architect' && (
                  <div
                    className={`transition-all duration-300 bg-white rounded-2xl p-6 shadow-xl border border-neutral-200 ${
                      deviceViewport === 'mobile' ? 'w-[340px]' : deviceViewport === 'tablet' ? 'w-[520px]' : 'w-[680px]'
                    }`}
                  >
                    <div className="flex justify-between items-center pb-4 border-b border-neutral-100 text-xs">
                      <div>
                        <span className="font-bold tracking-tight text-neutral-900 font-mono">HOANG VU ARCHITECTS</span>
                        <p className="text-[10px] text-neutral-400">Hanoi / Saigon / Singapore</p>
                      </div>
                      <span className="text-xs px-2.5 py-1 bg-neutral-100 rounded-full font-mono">Index 01</span>
                    </div>

                    <div className="py-4">
                      <div className="h-44 rounded-xl bg-neutral-100 border border-neutral-200/80 flex flex-col justify-between p-4 relative overflow-hidden">
                        <div className="flex justify-between items-start z-10">
                          <span className="text-[10px] font-mono uppercase tracking-wider bg-white/90 px-2 py-0.5 rounded text-neutral-700">
                            Biệt thự đồi thông Đà Lạt (2024)
                          </span>
                          <span className="text-[10px] font-mono text-neutral-500">Diện tích: 650m²</span>
                        </div>
                        <div className="text-neutral-400 text-xs font-mono z-10">
                          Kết cấu: Bê tông trần & Kính Low-E bức xạ nhiệt thấp
                        </div>
                        <div className="absolute inset-0 bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:12px_12px]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-100">
                        <span className="text-[10px] text-neutral-400">Dự án hoàn thành</span>
                        <div className="font-bold text-neutral-900 mt-0.5">38 Công trình</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-100">
                        <span className="text-[10px] text-neutral-400">Giải thưởng VAA</span>
                        <div className="font-bold text-neutral-900 mt-0.5">Top 10 Kiến Trúc</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-100">
                        <span className="text-[10px] text-neutral-400">Xuất bản</span>
                        <div className="font-bold text-neutral-900 mt-0.5">ArchDaily</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Nexus Executive Portfolio */}
                {project.previewType === 'executive' && (
                  <div
                    className={`transition-all duration-300 bg-white rounded-2xl p-6 shadow-xl border border-neutral-200 ${
                      deviceViewport === 'mobile' ? 'w-[340px]' : deviceViewport === 'tablet' ? 'w-[520px]' : 'w-[680px]'
                    }`}
                  >
                    <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                      <div>
                        <h6 className="font-bold text-base text-neutral-900">TS. ĐẶNG QUỐC HÙNG</h6>
                        <p className="text-xs text-neutral-500">Tech Founder, Board Member & Angel Investor</p>
                      </div>
                      <button
                        onClick={() => setDownloadedMediaKit(true)}
                        className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 text-white text-xs rounded-lg hover:bg-black transition-colors"
                      >
                        <FontAwesomeIcon icon={faDownload} className="text-xs" />
                        <span>{downloadedMediaKit ? 'Đã Tải Press Kit' : 'Tải Press Kit'}</span>
                      </button>
                    </div>

                    <div className="py-4 space-y-3">
                      <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-xs text-neutral-800 flex justify-between items-center">
                        <div>
                          <strong>Keynote Speaker:</strong> Diễn giả chính tại Vietnam Tech Summit
                          <p className="text-[11px] text-neutral-500">Chủ đề: Tương lai của Trí Tuệ Nhân Tạo & Đầu Tư Mạo Hiểm</p>
                        </div>
                        <span className="text-[11px] font-mono text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                          Xem Video
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faCalendarDays} className="text-neutral-500 text-xs" />
                          <span>Đặt lịch cố vấn chiến lược 1-on-1 (30 Phút)</span>
                        </div>
                        <button
                          onClick={() => setBookingConfirmed(true)}
                          className="cursor-pointer px-3 py-1 bg-blue-600 text-white rounded-md font-medium text-xs hover:bg-blue-700"
                        >
                          {bookingConfirmed ? 'Đã Đặt Lịch' : 'Chọn Giờ'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              <div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2">Ý Tưởng Kiến Trúc & Tầm Nhìn Portfolio</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">{project.overview}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                  <span className="text-xs font-mono text-neutral-400 uppercase">Vai Trò & Trách Nhiệm</span>
                  <div className="text-sm font-semibold text-neutral-900 mt-1">{project.role}</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                  <span className="text-xs font-mono text-neutral-400 uppercase">Thời Gian Thực Hiện</span>
                  <div className="text-sm font-semibold text-neutral-900 mt-1">{project.duration}</div>
                </div>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-neutral-900 mb-3">Công Nghệ & Nền Tảng Thiết Kế</h5>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-mono rounded-lg border border-neutral-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="max-w-3xl mx-auto space-y-6">
              <h4 className="text-lg font-bold text-neutral-900">Hiệu Quả Thực Tế Đạt Được</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.stats.map((st, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{st.value}</div>
                    <div className="text-xs text-neutral-500 font-medium">{st.label}</div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                <strong>Cam kết chất lượng:</strong> Mọi portfolio do ABYSS Design xây dựng đều vượt qua kiểm định khắt khe về tốc độ tải trang Google Core Web Vitals, tương thích đa thiết bị và hỗ trợ SEO tên tuổi cá nhân dẫn đầu bảng tìm kiếm.
              </div>
            </div>
          )}

          {activeTab === 'deliverables' && (
            <div className="max-w-3xl mx-auto space-y-4">
              <h4 className="text-lg font-bold text-neutral-900 mb-2">Toàn Bộ Tài Sản Đã Bàn Giao</h4>
              <div className="space-y-3">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100 text-sm text-neutral-800">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-blue-600 shrink-0 mt-0.5 text-base" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 sm:px-8 py-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between shrink-0">
          <span className="text-xs text-neutral-500 font-mono"><span className="text-hologram font-bold">ABYSS</span> Design • Mã Hồ Sơ #{project.id}</span>
          <button
            onClick={() => onStartSimilar(project.title)}
            className="cursor-pointer btn-hologram text-xs font-semibold px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>Thiết Kế Portfolio Tương Tự</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px]" />
          </button>
        </div>
      </div>
    </div>
  );
};
