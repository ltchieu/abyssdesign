import React, { useEffect, useRef, useState } from 'react';

interface Abyssal3DGyroProps {
  progress: number;
  isExiting: boolean;
}

export const Abyssal3DGyro: React.FC<Abyssal3DGyroProps> = ({ progress, isExiting }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const mouseTargetRef = useRef({ x: 0, y: 0 });
  const currentTiltRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);

  // Smooth mouse tracking with physical spring damping
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
      mouseTargetRef.current = { x, y };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const { innerWidth, innerHeight } = window;
        const x = (touch.clientX / innerWidth - 0.5) * 2;
        const y = (touch.clientY / innerHeight - 0.5) * 2;
        mouseTargetRef.current = { x, y };
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const animateTilt = () => {
      // Spring interpolation (lerp factor 0.08)
      currentTiltRef.current.x += (mouseTargetRef.current.x - currentTiltRef.current.x) * 0.08;
      currentTiltRef.current.y += (mouseTargetRef.current.y - currentTiltRef.current.y) * 0.08;

      setTilt({
        x: currentTiltRef.current.x,
        y: currentTiltRef.current.y,
      });

      animFrameRef.current = requestAnimationFrame(animateTilt);
    };

    animFrameRef.current = requestAnimationFrame(animateTilt);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Compute rotation angle speed boosted by loading progress
  const spinSpeedFactor = 1 + (progress / 100) * 1.5;

  return (
    <div
      ref={containerRef}
      className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center select-none"
      style={{
        perspective: '1200px',
      }}
    >
      {/* 3D Spatial Gyro Chamber */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-75 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${-tilt.y * 18}deg) rotateY(${tilt.x * 22}deg) ${
            isExiting ? 'scale(2.2) translateZ(320px)' : 'scale(1) translateZ(0px)'
          }`,
          opacity: isExiting ? 0 : 1,
          transition: isExiting
            ? 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
            : 'none',
        }}
      >
        {/* Ambient Holographic Core Glow */}
        <div
          className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full pointer-events-none blur-2xl opacity-60"
          style={{
            background:
              'radial-gradient(circle, rgba(0,245,212,0.3) 0%, rgba(2,132,199,0.2) 45%, rgba(67,56,202,0.05) 75%, transparent 100%)',
            transform: 'translateZ(-40px)',
          }}
        />

        {/* 1. Outer Orbital Gyro Ring (Cyan-Turquoise) */}
        <div
          className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-[#00f5d4]/40 shadow-[0_0_20px_rgba(0,245,212,0.25)] pointer-events-none"
          style={{
            transformStyle: 'preserve-3d',
            animation: `abyss-spin-outer ${8 / spinSpeedFactor}s linear infinite`,
            transform: 'rotateX(68deg) rotateY(24deg)',
          }}
        >
          {/* Orbital Quantum Satellites */}
          <div
            className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00f5d4] shadow-[0_0_12px_#00f5d4]"
            style={{ transform: 'translateZ(10px)' }}
          />
          <div
            className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0284c7] shadow-[0_0_8px_#0284c7]"
            style={{ transform: 'translateZ(-10px)' }}
          />
          <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#fff]" />
        </div>

        {/* 2. Inner Orbital Gyro Ring (Azure-Sapphire) */}
        <div
          className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-dashed border-[#0284c7]/60 shadow-[0_0_15px_rgba(2,132,199,0.3)] pointer-events-none"
          style={{
            transformStyle: 'preserve-3d',
            animation: `abyss-spin-inner ${6 / spinSpeedFactor}s linear infinite reverse`,
            transform: 'rotateX(-58deg) rotateY(-36deg)',
          }}
        >
          {/* Inner Quantum Satellites */}
          <div
            className="absolute top-0 right-1/4 w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]"
            style={{ transform: 'translateZ(8px)' }}
          />
          <div
            className="absolute bottom-0 left-1/4 w-2 h-2 rounded-full bg-[#00f5d4] shadow-[0_0_8px_#00f5d4]"
            style={{ transform: 'translateZ(-8px)' }}
          />
        </div>

        {/* 3. Center Doppelrand Glass Monolith (Houses Logo) */}
        <div
          className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl p-1.5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-neutral-200/90 shadow-[0_12px_40px_rgba(2,132,199,0.15)] flex items-center justify-center"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(25px)',
          }}
        >
          {/* Micro Corner Hologram Brackets */}
          <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00f5d4] rounded-tl-sm" />
          <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-[#0284c7] rounded-tr-sm" />
          <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-[#2563eb] rounded-bl-sm" />
          <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-[#4338ca] rounded-br-sm" />

          {/* Dynamic Specular Glare Reflection shifting with cursor */}
          <div
            className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none opacity-40"
            style={{
              background: `radial-gradient(circle at ${50 + tilt.x * 40}% ${
                50 + tilt.y * 40
              }%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`,
            }}
          />

          {/* Inner Suspended Logo Frame */}
          <div
            className="relative w-full h-full rounded-2xl bg-slate-950 border border-slate-700/60 p-2.5 flex items-center justify-center shadow-inner overflow-hidden"
            style={{
              transform: 'translateZ(15px)',
            }}
          >
            {/* Logo image with slight 3D elevation */}
            <img
              src="/logo_no_title.png"
              alt="ABYSS Emblem"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain filter drop-shadow-[0_0_8px_rgba(0,245,212,0.4)]"
            />
            {/* Holographic sweep sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none animate-pulse" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes abyss-spin-outer {
          0% {
            transform: rotateX(68deg) rotateY(24deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(68deg) rotateY(24deg) rotateZ(360deg);
          }
        }
        @keyframes abyss-spin-inner {
          0% {
            transform: rotateX(-58deg) rotateY(-36deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(-58deg) rotateY(-36deg) rotateZ(360deg);
          }
        }
      `}</style>
    </div>
  );
};
