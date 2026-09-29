"use client";

/**
 * Drives the hero background's intro from the preloader's reveal.
 * t goes 0 → 1 (eased) over `duration` ms, starting the moment the aperture opens.
 *
 * Usage — map t to whatever your background already animates:
 *   useHeroIntro((t) => { material.uniforms.uIntro.value = t; });          // WebGL / shader
 *   useHeroIntro((t) => { intensityRef.current = 0.2 + t * 0.8; });        // canvas / particles
 *   useHeroIntro((t) => { el.style.setProperty("--intro", String(t)); });  // CSS gradients
 *
 * Good things to tie to t: glow intensity, particle speed/density, blur radius,
 * scale from 1.15 → 1, then headline reveal after t > 0.6.
 */

import { useEffect, useRef } from "react";
import { INTRO_REVEAL_EVENT } from "./Preloader";

export function useHeroIntro(onFrame: (t: number) => void, duration = 2200) {
  const cb = useRef(onFrame);
  cb.current = onFrame;

  useEffect(() => {
    let raf = 0;
    let cancelled = false;
    let played = false;

    const play = () => {
      if (played) return;
      played = true;
      const t0 = performance.now();
      const step = (now: number) => {
        if (cancelled) return;
        const k = Math.min((now - t0) / duration, 1);
        cb.current(1 - Math.pow(1 - k, 3)); // easeOutCubic
        if (k < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    cb.current(0); // hero starts dimmed underneath the preloader

    if (document.documentElement.dataset.intro === "seen") play();
    else window.addEventListener(INTRO_REVEAL_EVENT, play, { once: true });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener(INTRO_REVEAL_EVENT, play);
    };
  }, [duration]);
}
