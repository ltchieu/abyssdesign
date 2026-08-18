import React, { useState, useEffect } from 'react';

interface AbyssalLoaderProps {
  onComplete: () => void;
}

export const AbyssalLoader: React.FC<AbyssalLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1800; // Snappy, elegant 1.8s load

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(rawProgress);

      if (rawProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            onComplete();
          }, 600); // Allow fade out animation to finish smoothly
        }, 180);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      id="abyssal-preloader"
      className={`fixed inset-0 z-[100] bg-[#fafafa] flex flex-col items-center justify-center select-none transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isFadingOut ? 'opacity-0 scale-95 blur-sm pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Subtle Background Radial Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,212,0.06),rgba(2,132,199,0.03),transparent_70%)] pointer-events-none" 
      />

      {/* Center Minimalist Emblem & Progress */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Emblem Container with subtle shadow & corner accents */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white border border-black/[0.08] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex items-center justify-center mb-6">
          {/* Subtle Corner Hologram Accents */}
          <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#00f5d4] rounded-tl-[3px]" />
          <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-[#0284c7] rounded-tr-[3px]" />
          <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-[#2563eb] rounded-bl-[3px]" />
          <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-[#4338ca] rounded-br-[3px]" />

          {/* SVG Geometric Emblem with dynamic draw */}
          <svg
            viewBox="0 0 48 48"
            className="w-12 h-12 sm:w-14 sm:h-14 fill-none stroke-[1.5]"
          >
            {/* Outer Triangle */}
            <polygon
              points="24,42 6,10 42,10"
              className="stroke-[#00f5d4] transition-all duration-300"
              strokeDasharray="120"
              strokeDashoffset={120 - (progress / 100) * 120}
            />
            {/* Inner Triangle */}
            <polygon
              points="24,32 14,14 34,14"
              className="stroke-[#0284c7] transition-all duration-300"
              strokeDasharray="80"
              strokeDashoffset={80 - (progress / 100) * 80}
            />
            {/* Center Line */}
            <line
              x1="24"
              y1="14"
              x2="24"
              y2="32"
              className="stroke-[#2563eb]"
              strokeDasharray="20"
              strokeDashoffset={20 - (progress / 100) * 20}
            />
          </svg>
        </div>

        {/* Numeric Counter with Abyssal Hologram */}
        <div className="flex items-baseline justify-center gap-1 font-mono mb-4">
          <span className="text-4xl sm:text-5xl font-bold tracking-tight text-hologram">
            {progress.toString().padStart(2, '0')}
          </span>
          <span className="text-sm sm:text-base font-semibold text-[#0284c7]">%</span>
        </div>

        {/* Minimalist Progress Track */}
        <div className="w-40 sm:w-48 h-1.5 bg-neutral-200/80 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-hologram transition-all duration-75 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
