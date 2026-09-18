import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTerminal,
  faWaveSquare,
  faCircleNodes,
  faCompassDrafting,
  faShieldHalved,
  faAtom,
} from '@fortawesome/free-solid-svg-icons';
import { Abyssal3DGyro } from './Abyssal3DGyro';

interface AbyssalLoaderProps {
  onComplete: () => void;
  onUnfurl?: () => void;
}

export const AbyssalLoader: React.FC<AbyssalLoaderProps> = ({ onComplete, onUnfurl }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1900; // Snappy 1.9s load time with realistic micro-delays

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      // Exponential ease-out progression curve
      const linearRatio = Math.min(1, elapsed / duration);
      const curvedRatio = 1 - Math.pow(1 - linearRatio, 2.5);
      const rawProgress = Math.min(100, Math.floor(curvedRatio * 100));

      setProgress(rawProgress);

      if (rawProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          // Signal hero threads to start blooming and morphing into place
          if (onUnfurl) onUnfurl();

          // Wait for exit choreography to finish cleanly
          setTimeout(() => {
            onComplete();
          }, 750);
        }, 120);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete, onUnfurl]);

  // Stage description based on loading progression
  const getTelemetryMessage = () => {
    if (progress < 25) return 'INITIALIZING SPATIAL 3D ENGINE';
    if (progress < 60) return 'HARMONIZING QUANTUM THREADS';
    if (progress < 90) return 'CALIBRATING ABYSSAL MATRIX';
    if (progress < 100) return 'SYNCHRONIZING HARMONIC FREQUENCIES';
    return 'QUANTUM LOCK ENGAGED // ENTERING ABYSS';
  };

  const totalSegments = 16;
  const activeSegments = Math.floor((progress / 100) * totalSegments);

  return (
    <div
      id="abyssal-preloader"
      className={`fixed inset-0 z-[100] flex flex-col justify-between items-center px-6 py-8 sm:py-10 select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isExiting
          ? 'opacity-0 pointer-events-none'
          : 'opacity-100 bg-[#fafafa]/85 backdrop-blur-[6px]'
      }`}
    >
      {/* Background Radial Aperture (Transparent Center for Threads Transmission) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 75% 55% at 50% 50%, rgba(250,250,250,0.2) 0%, rgba(250,250,250,0.85) 60%, #fafafa 100%)',
        }}
      />

      {/* Top Telemetry HUD */}
      <div
        className={`relative z-10 w-full max-w-4xl flex items-center justify-between transition-all duration-500 ease-out ${
          isExiting ? '-translate-y-6 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        {/* Left: System Spec Badge */}
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-neutral-200/80 shadow-xs text-[11px] font-mono font-medium text-neutral-700">
          <FontAwesomeIcon icon={faTerminal} className="text-[#0284c7] text-[10px]" />
          <span>SYS // ABYSS_CORE_V2.4</span>
        </div>

        {/* Right: Quantum Status indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-neutral-200/80 shadow-xs text-[11px] font-mono text-neutral-600">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f5d4] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f5d4]" />
          </span>
          <span className="hidden xs:inline">STATUS:</span>
          <span className="font-semibold text-neutral-800">
            {progress < 100 ? 'SYNCING...' : 'ONLINE'}
          </span>
          <FontAwesomeIcon icon={faWaveSquare} className="text-[#00f5d4] text-[10px] ml-1" />
        </div>
      </div>

      {/* Center 3D Gyroscope Stage */}
      <div className="relative z-10 my-auto flex flex-col items-center">
        <Abyssal3DGyro progress={progress} isExiting={isExiting} />
      </div>

      {/* Bottom Telemetry & Progress Display */}
      <div
        className={`relative z-10 w-full max-w-sm flex flex-col items-center gap-4 transition-all duration-500 ease-out ${
          isExiting ? 'translate-y-6 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        {/* Numeric Counter with Abyssal Hologram */}
        <div className="flex items-baseline justify-center gap-1.5 font-mono">
          <span className="text-4xl sm:text-5xl font-bold tracking-tight text-hologram">
            {progress.toString().padStart(2, '0')}
          </span>
          <span className="text-base sm:text-lg font-semibold text-[#0284c7]">%</span>
        </div>

        {/* Segmented Optical Capacitor Bar */}
        <div className="w-full max-w-[280px] p-1 rounded-xl bg-white/90 border border-neutral-200/90 shadow-sm">
          <div
            className="grid gap-1 h-2.5"
            style={{ gridTemplateColumns: `repeat(${totalSegments}, minmax(0, 1fr))` }}
          >
            {Array.from({ length: totalSegments }).map((_, index) => {
              const isActive = index < activeSegments;
              return (
                <div
                  key={index}
                  className={`h-full rounded-[2px] transition-all duration-150 ${
                    isActive
                      ? 'bg-gradient-to-t from-[#0284c7] to-[#00f5d4] shadow-[0_0_6px_rgba(0,245,212,0.6)]'
                      : 'bg-neutral-200/60'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Dynamic Telemetry Status Caption */}
        <div className="flex items-center justify-center gap-2 text-[10.5px] font-mono tracking-wider text-neutral-500 uppercase text-center px-4">
          <FontAwesomeIcon
            icon={faAtom}
            className={`text-xs text-[#0284c7] ${progress < 100 ? 'animate-spin' : ''}`}
            style={{ animationDuration: '3s' }}
          />
          <span className="truncate">{getTelemetryMessage()}</span>
          <FontAwesomeIcon icon={faCircleNodes} className="text-xs text-[#00f5d4]" />
        </div>

        {/* Micro System Coordinates Footer */}
        <div className="hidden sm:flex items-center justify-center gap-3 text-[9.5px] font-mono text-neutral-400">
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faCompassDrafting} className="text-[9px]" />
            GRID: 60FPS
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faShieldHalved} className="text-[9px]" />
            LATENCY: 0.4MS
          </span>
          <span>•</span>
          <span>ABYSS//CORE</span>
        </div>
      </div>
    </div>
  );
};
