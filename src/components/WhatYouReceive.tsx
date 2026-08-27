import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faDisplay,
  faServer,
  faBolt,
  faChevronRight,
  faCheck,
  faShieldHalved,
  faMobileScreenButton,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';
import { DELIVERABLES } from '../data/deliverablesData';
import { DeliverableItem } from '../types';

export const WhatYouReceive: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<DeliverableItem | null>(null);

  const renderIcon = (type: DeliverableItem['iconType']) => {
    switch (type) {
      case 'palette':
        return <FontAwesomeIcon icon={faLaptopCode} className="text-blue-600 text-lg" />;
      case 'folder':
        return <FontAwesomeIcon icon={faDisplay} className="text-blue-600 text-lg" />;
      case 'search':
        return <FontAwesomeIcon icon={faServer} className="text-blue-600 text-lg" />;
      case 'responsive':
        return <FontAwesomeIcon icon={faMobileScreenButton} className="text-blue-600 text-lg" />;
      default:
        return <FontAwesomeIcon icon={faCircleCheck} className="text-blue-600 text-lg" />;
    }
  };

  return (
    <section id="deliverables" className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
        <h2
          id="what-you-receive-heading"
          className="text-[30px] sm:text-[36px] md:text-[40px] font-bold tracking-[-0.02em] text-[#111827] mb-3"
        >
          Giá Trị Bạn Sẽ Nhận Được
        </h2>
        <p className="text-[15px] sm:text-[16px] text-neutral-500 font-normal">
          Cam kết chất lượng trọn gói, bảo chứng cho sự thành công của thương hiệu cá nhân.
        </p>
      </div>

      {/* 4-Card Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {DELIVERABLES.map((item) => (
          <div
            key={item.id}
            id={`deliverable-card-${item.id}`}
            onClick={() => setSelectedItem(selectedItem?.id === item.id ? null : item)}
            className={`group bg-white border rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
              selectedItem?.id === item.id
                ? 'border-blue-500 ring-2 ring-blue-100 shadow-[0_8px_30px_rgba(37,99,235,0.08)] -translate-y-1'
                : 'border-neutral-200/90 hover:border-neutral-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:-translate-y-0.5'
            }`}
          >
            <div>
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-blue-50/80 border border-blue-100/80 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {renderIcon(item.iconType)}
              </div>

              {/* Title */}
              <h3 className="text-[16.5px] font-semibold text-[#111827] tracking-[-0.01em] mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>

              {/* Subtitle / Description */}
              <p className="text-[13.5px] text-neutral-500 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Click to expand checklist preview */}
            <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11.5px] text-neutral-400">
              <span>{selectedItem?.id === item.id ? 'Thu gọn' : 'Xem chi tiết'}</span>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={`text-[11px] text-neutral-400 group-hover:text-blue-600 transition-transform ${
                  selectedItem?.id === item.id ? 'rotate-90 text-blue-600' : ''
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Deliverable Details Card */}
      {selectedItem && (
        <div
          id="deliverable-detail-expanded"
          className="mt-6 bg-white border border-blue-100 rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(37,99,235,0.05)] animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-neutral-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                {renderIcon(selectedItem.iconType)}
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 text-[16px]">Tiêu Chuẩn Bàn Giao: {selectedItem.title}</h4>
                <p className="text-xs text-neutral-500">{selectedItem.description}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedItem(null)}
              className="cursor-pointer text-xs font-medium text-neutral-500 hover:text-neutral-900 px-3 py-1 bg-neutral-100 rounded-full w-fit"
            >
              Đóng
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {selectedItem.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-100 text-[13px] text-neutral-700">
                <FontAwesomeIcon icon={faCheck} className="text-blue-600 shrink-0 mt-0.5 text-xs" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
