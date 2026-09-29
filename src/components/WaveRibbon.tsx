"use client";

/**
 * Wave ribbon — a bundle of thin lines that fans out from a single line.
 *
 * Use the SAME component in the hero and in the preloader:
 *   hero:       <WaveRibbon yRatio={0.63} />                       // always fully open
 *   preloader:  <WaveRibbon yRatio={0.63} state={ribbonRef} />     // driven by load progress
 *
 * Both read the same clock (performance.now), so two ribbons on screen at once are
 * pixel-identical. That is what makes the preloader → hero hand-off invisible.
 *
 * NOTE: this is an approximation of the ribbon in the screenshot. If you send your current
 * hero wave code, port its parameters here instead (colours, line count, curve maths).
 */

import { useEffect, useRef } from "react";
import type { MutableRefObject } from "react";

export type RibbonState = {
  /** 0 = every line collapsed into one line, 1 = fully fanned out (the hero look) */
  spread: number;
  /** 0..1 — how much of the width is drawn, left → right */
  extent: number;
};

type Props = {
  /** Mutable ref read every frame, so the preloader can drive it without re-rendering */
  state?: MutableRefObject<RibbonState>;
  /** Vertical position as a fraction of the container height */
  yRatio?: number;
  lines?: number;
  className?: string;
};

const FULL: RibbonState = { spread: 1, extent: 1 };

export function WaveRibbon({ state, yRatio = 0.68, lines = 22, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const parent = canvas?.parentElement;
    if (!canvas || !ctx || !parent) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap DPR: cheap, still crisp
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    resize();

    const draw = () => {
      raf = 0;
      const { spread, extent } = state?.current ?? FULL;
      const t = reduce ? 0 : performance.now() / 1000; // shared clock
      const xMax = w * extent;
      const step = 6;

      ctx.clearRect(0, 0, w, h);
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, "rgba(0, 245, 212, 0.4)");
      grad.addColorStop(0.35, "rgba(2, 132, 199, 0.65)");
      grad.addColorStop(0.7, "rgba(37, 99, 235, 0.75)");
      grad.addColorStop(1, "rgba(67, 56, 202, 0.5)");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.15;

      let leadX = xMax;
      let leadY = h * yRatio;

      for (let i = 0; i < lines; i++) {
        const o = i / (lines - 1) - 0.5; // -0.5 … 0.5
        ctx.globalAlpha = 0.35 + 0.5 * (o + 0.5); // lower lines slightly stronger
        ctx.beginPath();
        for (let x = 0; ; x += step) {
          const xx = Math.min(x, xMax);
          const u = xx / w;
          const center =
            h * yRatio - h * 0.06 * u + h * 0.035 * Math.sin(u * 2.6 + t * 0.35);
          const width =
            h * 0.075 * (0.3 + 0.7 * (0.5 + 0.5 * Math.sin(u * 3.4 + 1.2 + t * 0.25)));
          const flutter = h * 0.012 * Math.sin(u * 9 + o * 6 + t * 0.7);
          const y = center + spread * (o * width + flutter);
          if (x === 0) ctx.moveTo(xx, y);
          else ctx.lineTo(xx, y);
          if (xx >= xMax) {
            if (i === Math.floor(lines / 2)) {
              leadX = xx;
              leadY = y;
            }
            break;
          }
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // Draw dynamic glowing spark at the leading head as the line runs across
      if (extent > 0.005 && extent < 0.995) {
        ctx.save();
        const glow = ctx.createRadialGradient(leadX, leadY, 0, leadX, leadY, 18);
        glow.addColorStop(0, "rgba(0, 245, 212, 0.95)");
        glow.addColorStop(0.35, "rgba(2, 132, 199, 0.6)");
        glow.addColorStop(1, "rgba(37, 99, 235, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(leadX, leadY, 18, 0, Math.PI * 2);
        ctx.fill();

        // White-hot center spark
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(leadX, leadY, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      if (visible) raf = requestAnimationFrame(draw);
    };

    // Stop drawing when scrolled out of view.
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(draw);
    });
    io.observe(canvas);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yRatio, lines]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}

export default WaveRibbon;
