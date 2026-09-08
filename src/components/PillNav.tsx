import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  logo?: string;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  navBgColor?: string;
  bubbleColor?: string;
  pillBgColor?: string;
  pillTextColor?: string;
  hoveredPillTextColor?: string;
  activePillBg?: string;
  activePillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
}

export const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = 'Abyss Design',
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  navBgColor = 'rgba(255, 255, 255, 0.88)',
  bubbleColor = 'linear-gradient(135deg, #00f5d4 0%, #0284c7 35%, #2563eb 70%, #4338ca 100%)',
  pillBgColor = 'transparent',
  pillTextColor = '#334155',
  hoveredPillTextColor = '#ffffff',
  activePillBg = 'linear-gradient(135deg, #00f5d4 0%, #0284c7 35%, #2563eb 70%, #4338ca 100%)',
  activePillTextColor = '#ffffff',
  onMobileMenuClick,
  initialLoadAnimation = true
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | HTMLElement | null>(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;
        circle.style.background = bubbleColor;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector<HTMLElement>('.pill-label');
        const white = pill.querySelector<HTMLElement>('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.25, xPercent: -50, duration: 1.6, ease, overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 1.6, ease, overwrite: 'auto' }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 80), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 1.6, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 0.95, y: -10 });
    }

    if (initialLoadAnimation) {
      const logoEl = logoRef.current;
      const navItemsEl = navItemsRef.current;

      if (logoEl) {
        gsap.set(logoEl, { scale: 0, opacity: 0 });
        gsap.to(logoEl, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease
        });
      }

      if (navItemsEl) {
        gsap.set(navItemsEl, { width: 0, opacity: 0, overflow: 'hidden' });
        gsap.to(navItemsEl, {
          width: 'auto',
          opacity: 1,
          duration: 0.7,
          ease
        });
      }
    }

    return () => window.removeEventListener('resize', onResize);
  }, [items, ease, initialLoadAnimation, bubbleColor]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.35,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.25,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (lines.length >= 2) {
        if (newState) {
          gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
          gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
        } else {
          gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
          gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
        }
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(
          menu,
          { opacity: 0, y: -8, scaleY: 0.96 },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.3,
            ease,
            transformOrigin: 'top center'
          }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: -8,
          scaleY: 0.96,
          duration: 0.2,
          ease,
          transformOrigin: 'top center',
          onComplete: () => {
            gsap.set(menu, { visibility: 'hidden' });
          }
        });
      }
    }

    onMobileMenuClick?.();
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const targetId = href.replace('#', '');
      if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const cssVars = {
    ['--nav-bg']: navBgColor,
    ['--bubble-bg']: bubbleColor,
    ['--pill-bg']: pillBgColor,
    ['--pill-text']: pillTextColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--active-bg']: activePillBg,
    ['--active-text']: activePillTextColor,
    ['--nav-h']: '46px',
    ['--pill-pad-x']: '18px',
    ['--pill-gap']: '4px'
  } as React.CSSProperties;

  return (
    <div className="w-full">
      <nav
        className={`w-full flex items-center justify-between md:justify-center box-border px-2 md:px-0 ${className}`}
        aria-label="Primary"
        style={cssVars}
      >
        {/* Optional Brand Logo Container inside PillNav */}
        {logo && (
          <a
            href="#"
            aria-label="Home"
            onClick={(e) => handleLinkClick(e, '#')}
            onMouseEnter={handleLogoEnter}
            ref={(el) => {
              logoRef.current = el;
            }}
            className="group rounded-full p-2 inline-flex items-center justify-center overflow-hidden transition-all duration-300 bg-slate-950 border border-slate-800 shadow-[0_2px_12px_rgba(2,132,199,0.25)] hover:border-sky-400/80 hover:shadow-[0_0_16px_rgba(2,132,199,0.45)] mr-2"
            style={{
              width: 'var(--nav-h)',
              height: 'var(--nav-h)',
            }}
          >
            <img src={logo} alt={logoAlt} ref={logoImgRef} className="w-full h-full object-contain block group-hover:scale-105 transition-transform duration-300" />
          </a>
        )}

        {/* Center Pill Navigation Capsule (Glassmorphism + Double-Bezel Depth) */}
        <div
          ref={navItemsRef}
          className="relative items-center rounded-full hidden md:flex backdrop-blur-xl border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(2,132,199,0.12)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all duration-300 hover:border-sky-300/80"
          style={{
            height: 'var(--nav-h)',
            background: 'var(--nav-bg)',
          }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-[4px] h-full"
            style={{ gap: 'var(--pill-gap)' }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;

              const pillStyle: React.CSSProperties = {
                background: isActive ? 'var(--active-bg)' : 'var(--pill-bg)',
                color: isActive ? 'var(--active-text)' : 'var(--pill-text)',
                paddingLeft: 'var(--pill-pad-x)',
                paddingRight: 'var(--pill-pad-x)'
              };

              const PillContent = (
                <>
                  {/* Expanding Hologram Hover Circle */}
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none shadow-sm"
                    style={{
                      background: 'var(--bubble-bg)',
                      willChange: 'transform'
                    }}
                    aria-hidden="true"
                    ref={(el) => {
                      circleRefs.current[i] = el;
                    }}
                  />

                  {/* Text Swapping Stack */}
                  <span className="label-stack relative inline-block leading-[1] z-[2]">
                    <span
                      className="pill-label relative z-[2] inline-block leading-[1]"
                      style={{ willChange: 'transform' }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-0 z-[3] inline-block font-semibold drop-shadow-2xs"
                      style={{
                        color: 'var(--hover-text)',
                        willChange: 'transform, opacity'
                      }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>

                  {/* Active Indicator Glow Pip */}
                  {isActive && (
                    <span
                      className="absolute left-1/2 -bottom-[3px] -translate-x-1/2 w-1.5 h-1.5 rounded-full z-[4] bg-white shadow-[0_0_8px_#ffffff]"
                      aria-hidden="true"
                    />
                  )}
                </>
              );

              const basePillClasses =
                'relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-medium text-[13px] leading-[0] tracking-[0.01em] whitespace-nowrap cursor-pointer px-0 transition-colors duration-200';

              return (
                <li key={item.href} role="none" className="flex h-full">
                  <a
                    role="menuitem"
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`${basePillClasses} ${
                      isActive ? 'font-semibold shadow-xs text-white' : 'hover:text-slate-900'
                    }`}
                    style={pillStyle}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    {PillContent}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Hamburger Button with Glass Theme */}
        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden rounded-full flex flex-col items-center justify-center gap-1.5 cursor-pointer p-0 relative shadow-sm border border-slate-200/80 bg-white/90 backdrop-blur-md hover:bg-white transition-colors ml-auto"
          style={{
            width: 'var(--nav-h)',
            height: 'var(--nav-h)',
          }}
        >
          <span
            className="hamburger-line w-4 h-0.5 rounded-full origin-center transition-all duration-200 bg-slate-800"
          />
          <span
            className="hamburger-line w-4 h-0.5 rounded-full origin-center transition-all duration-200 bg-slate-800"
          />
        </button>
      </nav>

      {/* Mobile Drawer Menu with Hologram Glass Design */}
      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-[4.2em] left-4 right-4 rounded-[24px] shadow-[0_16px_40px_rgba(15,23,42,0.14)] z-[998] origin-top border border-slate-200/80 bg-white/95 backdrop-blur-2xl p-2 overflow-hidden"
      >
        <ul className="list-none m-0 p-1 flex flex-col gap-1.5">
          {items.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`block py-3 px-5 text-[14.5px] font-semibold rounded-[50px] transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? 'btn-hologram text-white shadow-xs'
                      : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-950'
                  }`}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]"></span>}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
