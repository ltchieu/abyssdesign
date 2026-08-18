import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faXmark,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';
import { CONTACT_DATA } from '../data/contactData';

interface HeaderProps {
  onOpenEstimator: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'portfolio', 'deliverables', 'process', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 250;

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

  const navLinks = [
    { name: 'Về Tôi', id: 'about', href: '#about', isExternal: false },
    { name: 'Dự Án', id: 'portfolio', href: '#portfolio', isExternal: false },
    { name: 'Quy Trình', id: 'process', href: '#process', isExternal: false },
    { name: 'Bảng Giá', id: 'pricing', href: '#pricing', isExternal: false },
    { name: 'Liên Hệ Zalo', id: 'contact', href: CONTACT_DATA.zaloUrl, isExternal: true },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fafafa]/95 backdrop-blur-lg border-b border-black/[0.08] py-3.5 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)]'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="brand-logo"
          href="#"
          className="group flex items-center gap-2 text-[18px] sm:text-[20px] font-bold tracking-tight transition-colors"
        >
          <span className="text-hologram font-extrabold tracking-wider">
            ABYSS
          </span>
          <span className="text-neutral-900 font-semibold group-hover:text-neutral-700 transition-colors">
            Design
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-hologram opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all"></span>
        </a>

        {/* Center Desktop Navigation */}
        <nav id="desktop-navigation" className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className={`text-[14px] transition-colors relative py-1 ${
                  isActive
                    ? 'text-neutral-900 font-semibold'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-sky-500 rounded-full animate-in fade-in duration-200" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="header-cta-button"
            onClick={onOpenEstimator}
            className="cursor-pointer group btn-hologram text-[13.5px] font-semibold px-5 py-2 rounded-full transition-all duration-200 flex items-center gap-2 shadow-sm"
          >
            <span>Nhận Tư Vấn</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[11px] opacity-90 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
          aria-label="Mở Menu"
        >
          {mobileMenuOpen ? (
            <FontAwesomeIcon icon={faXmark} className="text-lg" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-lg" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#fafafa]/98 backdrop-blur-xl border-b border-black/[0.08] px-6 py-6 transition-all duration-300 shadow-xl"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] font-medium text-neutral-800 hover:text-blue-600 transition-colors py-2 border-b border-neutral-100 flex items-center justify-between"
              >
                <span>{link.name}</span>
                {link.isExternal && <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs text-neutral-400" />}
              </a>
            ))}
            <div className="pt-2">
              <button
                id="mobile-cta-button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full btn-hologram text-white text-[14px] font-semibold py-3 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Nhận Tư Vấn Portfolio</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
