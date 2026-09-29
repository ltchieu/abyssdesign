"use client";

/**
 * ABYSS preloader — "one line becomes the ribbon".
 *
 *  - Light theme, same wave ribbon as the hero (<WaveRibbon/>, shared clock, same yRatio).
 *  - Progress is REAL (fonts + window load + waitFor). While loading, a single line draws
 *    left → right and fans out into the hero ribbon; at 100% it IS the hero ribbon.
 *  - Then the cover fades away and INTRO_REVEAL_EVENT fires → hero text intro (useHeroIntro.ts).
 *
 * For a seamless hand-off:
 *   1. Hero renders <WaveRibbon yRatio={Y} /> inside a section with min-height: 100svh.
 *   2. Pass the same yRatio={Y} here.
 *
 * Setup (app/layout.tsx):
 *   <html lang="vi" suppressHydrationWarning>
 *     <head>
 *       <script dangerouslySetInnerHTML={{ __html:
 *         `try{sessionStorage.getItem("abyss-intro")&&(document.documentElement.dataset.intro="seen")}catch(e){}` }} />
 *     </head>
 *     <body><Preloader yRatio={0.63} />{children}</body>
 *   </html>
 *
 * Map --pl-bg / --pl-ink / --pl-accent / --font-display to your real tokens.
 */

import { useEffect, useRef, useState } from "react";
import WaveRibbon, { RibbonState } from "./WaveRibbon";

export const INTRO_REVEAL_EVENT = "abyss:intro-reveal";
export const INTRO_DONE_EVENT = "abyss:intro-done";

type Props = {
  /** Extra things to wait for: hero images, fonts you load manually, 3D assets… */
  waitFor?: Promise<unknown>[];
  /** Minimum time on screen (ms) so it never just flashes */
  minDuration?: number;
  /** Safety net (ms): leave anyway if something hangs */
  maxDuration?: number;
  /** Must match the hero's <WaveRibbon yRatio> */
  yRatio?: number;
  onUnfurl?: () => void;
  onComplete?: () => void;
};

export function Preloader({
  waitFor = [],
  minDuration = 1800,
  maxDuration = 5000,
  yRatio = 0.68,
  onUnfurl,
  onComplete,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const ribbon = useRef<RibbonState>({ spread: 0, extent: 0 });
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const html = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;
    let raf = 0;
    let hold = 0;
    let out = 0;

    html.style.overflow = "hidden"; // lock scroll while loading

    const finish = () => {
      html.style.overflow = "";
      window.dispatchEvent(new Event(INTRO_DONE_EVENT));
      onComplete?.();
      setGone(true);
    };

    // Cover fades out over an identical ribbon underneath; hero text intro starts now.
    const leave = () => {
      window.dispatchEvent(new Event(INTRO_REVEAL_EVENT));
      onUnfurl?.();
      root.dataset.leaving = "1";
      out = window.setTimeout(finish, reduce ? 50 : 1000);
    };

    // Real progress: every task that resolves moves the line.
    const tasks: Promise<unknown>[] = [
      document.fonts.ready,
      new Promise((res) => {
        if (document.readyState === "complete") res(null);
        else window.addEventListener("load", () => res(null), { once: true });
      }),
      ...waitFor,
    ];
    let loaded = 0;
    tasks.forEach((t) =>
      Promise.resolve(t)
        .catch(() => null)
        .then(() => {
          loaded += 1;
        })
    );

    const start = performance.now();
    let shown = 0;

    const tick = (now: number) => {
      if (cancelled) return;
      const elapsed = now - start;
      const real = elapsed > maxDuration ? 1 : loaded / tasks.length;
      // Never faster than minDuration, never ahead of what has really loaded.
      const target = Math.min(real, elapsed / minDuration, 1);
      shown += (target - shown) * 0.09;
      if (target >= 1 && shown > 0.996) shown = 1;

      // Line draws across from left to right
      ribbon.current.extent = shown;
      // Line smoothly fans out into wave ribbon (smoothstep)
      ribbon.current.spread = shown * shown * (3 - 2 * shown);

      if (counterRef.current) {
        counterRef.current.textContent = String(Math.round(shown * 100)).padStart(3, "0");
      }

      if (shown >= 1) {
        hold = window.setTimeout(leave, reduce ? 0 : 350); // a beat on the full ribbon
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      clearTimeout(hold);
      clearTimeout(out);
      html.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (gone) return null;

  return (
    <>
      <div ref={rootRef} className="abyss-pl" role="status" aria-label="Đang tải trang">
        {/* Signature running line drawing across and fanning out into wave ribbon */}
        <WaveRibbon state={ribbon} yRatio={yRatio} />

        <div className="abyss-pl__ui relative z-10 pointer-events-none" aria-hidden="true">
          <div className="abyss-pl__logo">
            <img
              src="/logo_no_title.png"
              alt="ABYSS Logo"
              className="w-10 h-10 rounded-xl object-contain bg-slate-900 p-1.5 border border-slate-700/60 shadow-xs"
            />
            <span className="flex items-center gap-1.5 text-neutral-900 font-bold text-2xl tracking-tight">
              <span className="text-hologram font-extrabold tracking-wider">ABYSS</span>
              <span>Design</span>
            </span>
          </div>

          <span ref={counterRef} className="abyss-pl__count">
            000
          </span>
        </div>
      </div>
      <style>{CSS}</style>
    </>
  );
}

export default Preloader;

const CSS = `
.abyss-pl{
  position:fixed; inset:0; z-index:9999;
  background:var(--pl-bg,#fafafa); color:var(--pl-ink,#111827);
  transition:opacity .9s cubic-bezier(.4,0,.2,1) .1s;
}
.abyss-pl[data-leaving]{ opacity:0; pointer-events:none; }
.abyss-pl__ui{
  position:absolute; inset:0;
  transition:opacity .45s ease, transform .6s cubic-bezier(.4,0,.2,1);
}
.abyss-pl[data-leaving] .abyss-pl__ui{ opacity:0; transform:translateY(-14px); }
.abyss-pl__logo{
  position:absolute; left:50%; top:38%; transform:translate(-50%,-50%);
  display:flex; align-items:center; gap:.85rem; white-space:nowrap;
  font-family:'Plus Jakarta Sans',sans-serif; font-weight:600; letter-spacing:-.01em;
}
.abyss-pl__count{
  position:absolute; left:clamp(1.25rem,4vw,3.5rem); bottom:clamp(1.25rem,4vw,3rem);
  font-variant-numeric:tabular-nums; font-weight:600; line-height:1; letter-spacing:-.03em;
  font-size:clamp(2.5rem,6vw,5rem); opacity:.85; color:#111827;
  font-family:'Plus Jakarta Sans',sans-serif;
}
@media (prefers-reduced-motion:reduce){
  .abyss-pl,.abyss-pl__ui{ transition-duration:.01s; transition-delay:0s; }
}
`;

