import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faCheck,
  faArrowRight,
  faPaperPlane,
  faCalculator,
  faShieldHalved,
  faCircleCheck,
  faClock,
  faRotate,
  faBolt,
  faLayerGroup,
  faWandMagicSparkles
} from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { ProjectInquiry } from '../types';
import { CONTACT_DATA } from '../data/contactData';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedPackageId?: string;
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  preselectedPackageId,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'scope' | 'details' | 'success'>('scope');

  const [packageType, setPackageType] = useState<'template' | 'custom'>(
    preselectedPackageId === 'template-portfolio' ? 'template' : 'custom'
  );

  const [portfolioArchetype, setPortfolioArchetype] = useState(
    preselectedService || 'Portfolio Lập Trình Viên / Developer'
  );

  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Tối ưu bố cục & UX chuyển đổi',
    'Responsive 100% Mobile & PC',
    'Triển khai online lên Vercel miễn phí',
    'Hỗ trợ deploy & bảo trì 1 năm'
  ]);

  useEffect(() => {
    if (preselectedPackageId === 'template-portfolio') {
      setPackageType('template');
    } else if (preselectedPackageId === 'custom-portfolio') {
      setPackageType('custom');
    }
  }, [preselectedPackageId]);

  const [formData, setFormData] = useState<ProjectInquiry>({
    clientName: '',
    email: '',
    company: '',
    portfolioType: portfolioArchetype,
    packageType: packageType === 'template' ? 'Gói Theo Mẫu (500K)' : 'Gói Theo Yêu Cầu (1 Triệu)',
    budgetRange: packageType === 'template' ? '500.000₫' : '1.000.000₫',
    timeline: packageType === 'template' ? '3 Ngày' : '7 Ngày',
    servicesNeeded: selectedServices,
    message: '',
  });

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div
      id="estimator-modal-overlay"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="estimator-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl border border-black/[0.08] overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Top Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-neutral-100 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <FontAwesomeIcon icon={faCalculator} className="text-sm" />
            </div>
            <div>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-neutral-900 tracking-tight">
                Đăng Ký & Nhận Tư Vấn Portfolio
              </h3>
              <p className="text-xs text-neutral-400">ABYSS Design • Thiết Kế Portfolio Chuyên Nghiệp</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="cursor-pointer p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            aria-label="Đóng bảng tính"
          >
            <FontAwesomeIcon icon={faXmark} className="text-base" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {step === 'scope' && (
            <div className="space-y-6">
              {/* Step 1: Select Package */}
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2.5">
                  1. Chọn Gói Dịch Vụ Phù Hợp
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Template Package Card */}
                  <div
                    onClick={() => {
                      setPackageType('template');
                      setFormData({
                        ...formData,
                        packageType: 'Gói Theo Mẫu (500K)',
                        budgetRange: '500.000₫',
                        timeline: '3 Ngày'
                      });
                    }}
                    className={`cursor-pointer p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                      packageType === 'template'
                        ? 'border-blue-600 bg-blue-50/40 ring-2 ring-blue-600 shadow-sm'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-mono text-neutral-500 uppercase font-semibold">Theo Mẫu Sẵn Có</span>
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${packageType === 'template' ? 'bg-blue-600 text-white' : 'border border-neutral-300'}`}>
                          {packageType === 'template' && <FontAwesomeIcon icon={faCheck} className="text-[9px]" />}
                        </div>
                      </div>
                      <h4 className="font-bold text-neutral-900 text-sm">Gói Lập Trình Theo Mẫu</h4>
                      <p className="text-xs text-neutral-500 mt-1">Chỉnh sửa nội dung & giao diện theo yêu cầu, có demo trước.</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-xs font-bold text-blue-600">
                      <span>₫500.000</span>
                      <span className="text-[11px] font-normal text-neutral-500 font-mono">3 Ngày • 3 Lần Sửa</span>
                    </div>
                  </div>

                  {/* Custom Package Card */}
                  <div
                    onClick={() => {
                      setPackageType('custom');
                      setFormData({
                        ...formData,
                        packageType: 'Gói Theo Yêu Cầu (1 Triệu)',
                        budgetRange: '1.000.000₫',
                        timeline: '7 Ngày'
                      });
                    }}
                    className={`cursor-pointer p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                      packageType === 'custom'
                        ? 'border-sky-500 bg-sky-50/40 ring-2 ring-sky-500 shadow-sm'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-mono text-sky-600 uppercase font-bold">Khuyên Dùng</span>
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${packageType === 'custom' ? 'bg-sky-600 text-white' : 'border border-neutral-300'}`}>
                          {packageType === 'custom' && <FontAwesomeIcon icon={faCheck} className="text-[9px]" />}
                        </div>
                      </div>
                      <h4 className="font-bold text-neutral-900 text-sm">Gói May Đo Theo Yêu Cầu</h4>
                      <p className="text-xs text-neutral-500 mt-1">UI/UX độc quyền phong cách cá nhân, hỗ trợ A-Z.</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-xs font-bold text-sky-600">
                      <span>₫1.000.000</span>
                      <span className="text-[11px] font-normal text-neutral-500 font-mono">7 Ngày • Sửa Không Giới Hạn</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Profession / Archetype */}
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2.5">
                  2. Lĩnh Vực Của Bạn
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Lập Trình Viên / Developer',
                    'UI/UX / Designer',
                    'Kiến Trúc Sư / Photographer',
                    'Chuyên Gia / Lãnh Đạo C-Level'
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setPortfolioArchetype(type);
                        setFormData({ ...formData, portfolioType: type });
                      }}
                      className={`cursor-pointer p-2.5 rounded-xl border text-xs font-medium transition-all text-left flex flex-col justify-between h-16 ${
                        portfolioArchetype === type
                          ? 'border-blue-600 bg-blue-50/50 text-blue-900 ring-1 ring-blue-600'
                          : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                      }`}
                    >
                      <span className="font-semibold line-clamp-2 text-[11px]">{type}</span>
                      <span className="text-[10px] text-neutral-400 font-mono">Tối ưu chuẩn</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Calculated Estimate Strip */}
              <div className="p-4 rounded-2xl bg-[#fafafa] border border-black/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono uppercase text-neutral-400">Thời gian & Hỗ trợ</div>
                  <div className="text-xs sm:text-sm font-bold text-neutral-900 mt-0.5">
                    {packageType === 'template' ? '3 Ngày Bàn Giao' : '7 Ngày Bàn Giao'} • Hỗ trợ deploy free 1 năm
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="cursor-pointer bg-neutral-900 hover:bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5"
                >
                  <span>Tiếp tục điền thông tin</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-[11px]" />
                </button>
              </div>
            </div>
          )}

          {step === 'details' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Thông Tin Liên Hệ & Dự Án</span>
                <button
                  type="button"
                  onClick={() => setStep('scope')}
                  className="cursor-pointer text-xs text-blue-600 hover:underline"
                >
                  ← Đổi gói dịch vụ
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-neutral-600 mb-1">Họ và tên của bạn *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn A"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-600 mb-1">Số điện thoại hoặc Zalo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: 0987 654 321"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-neutral-600 mb-1">Ghi chú hoặc yêu cầu riêng</label>
                <textarea
                  rows={3}
                  placeholder="Chia sẻ ngắn gọn về mục tiêu portfolio, link tham khảo bạn thích hoặc dự án bạn muốn đưa lên..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-blue-600 resize-none"
                />
              </div>

              <div className="pt-3 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400 flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faShieldHalved} className="text-emerald-500 text-xs" />
                  Bảo mật thông tin & Hỗ trợ tận tâm
                </span>
                <button
                  type="submit"
                  className="cursor-pointer btn-hologram text-xs font-semibold px-6 py-2.5 rounded-full flex items-center gap-1.5"
                >
                  <span>Gửi Yêu Cầu Dự Án</span>
                  <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
                </button>
              </div>
            </form>
          )}

          {step === 'success' && (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mx-auto">
                <FontAwesomeIcon icon={faCircleCheck} className="text-2xl" />
              </div>
              <h4 className="text-xl font-bold text-neutral-900">Đã Tiếp Nhận Thông Tin</h4>
              <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto leading-relaxed">
                Cảm ơn <strong>{formData.clientName || 'bạn'}</strong>! Tôi đã nhận được yêu cầu về <strong>{formData.packageType}</strong>. Tôi sẽ liên hệ lại qua Zalo ngay để gửi demo và bắt đầu thiết kế!
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={CONTACT_DATA.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer px-6 py-2.5 rounded-full btn-hologram text-white text-xs font-semibold flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <FontAwesomeIcon icon={faCommentDots} className="text-sm" />
                  <span>Nhắn Zalo Ngay ({CONTACT_DATA.formattedPhone})</span>
                </a>
                <button
                  onClick={onClose}
                  className="cursor-pointer px-6 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold transition-colors w-full sm:w-auto"
                >
                  Quay Lại Trang Chủ
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
