import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { PillNav, PillNavItem } from './PillNav';
import { CONTACT_DATA } from '../data/contactData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'portfolio', 'process', 'pricing'];
      const scrollPosition = window.scrollY + 280;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: PillNavItem[] = [
    { label: 'Về Tôi', href: '#about' },
    { label: 'Dự Án', href: '#portfolio' },
    { label: 'Quy Trình', href: '#process' },
    { label: 'Bảng Giá', href: '#pricing' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
        isScrolled
          ? 'py-2.5 sm:py-3 bg-[#fafafa]/90 backdrop-blur-lg border-b border-neutral-200/60 shadow-xs'
          : 'py-4 sm:py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between pointer-events-auto">
        
        {/* Brand Logo with Official ABYSS Emblem (Restored to original state) */}
        <a
          id="brand-logo"
          href="#"
          className="group flex items-center gap-2.5 text-[18px] sm:text-[20px] font-bold tracking-tight transition-colors shrink-0"
        >
          <img
            src="/logo_no_title.png"
            alt="ABYSS Emblem"
            className="w-8 h-8 rounded-lg object-contain bg-slate-900 p-1 border border-slate-700/60 shadow-xs group-hover:border-sky-400/60 group-hover:shadow-[0_0_12px_rgba(2,132,199,0.3)] transition-all"
          />
          <span className="text-hologram font-extrabold tracking-wider">
            ABYSS
          </span>
          <span className="text-neutral-900 font-semibold group-hover:text-neutral-700 transition-colors">
            Design
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-hologram opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all"></span>
        </a>

        {/* Center: Interactive PillNav with Hologram Color Theme */}
        <div className="flex items-center justify-center">
          <PillNav
            items={navItems}
            activeHref={`#${activeSection}`}
            navBgColor="rgba(255, 255, 255, 0.9)"
            bubbleColor="linear-gradient(135deg, #00f5d4 0%, #0284c7 35%, #2563eb 70%, #4338ca 100%)"
            pillBgColor="transparent"
            pillTextColor="#334155"
            hoveredPillTextColor="#ffffff"
            activePillBg="linear-gradient(135deg, #00f5d4 0%, #0284c7 35%, #2563eb 70%, #4338ca 100%)"
            activePillTextColor="#ffffff"
            ease="power2.easeOut"
            initialLoadAnimation={true}
          />
        </div>

        {/* Right Action CTA Button - Direct Zalo Link with Hologram Shimmer */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            id="header-cta-button"
            href={CONTACT_DATA.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer group btn-hologram text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-sm"
          >
            <FontAwesomeIcon icon={faCommentDots} className="text-sm" />
            <span>Nhận Tư Vấn Zalo</span>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-[10px] opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </div>

      </div>
    </header>
  );
};

