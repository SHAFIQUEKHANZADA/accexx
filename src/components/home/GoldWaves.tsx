"use client";

import { useEffect, useRef } from "react";

/**
 * The hero's signature animated gold light-waves (after the x01works draft).
 * Plain canvas, no libraries. Pauses off-screen / in background tabs and
 * renders a single still frame for prefers-reduced-motion.
 */
export function GoldWaves({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let lines = 0;
    let frame = 0;
    let running = false;
    let visible = true;
    const start = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      lines = width < 640 ? 30 : 56;
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      const step = width < 640 ? 10 : 8;

      for (let i = 0; i < lines; i++) {
        const p = i / (lines - 1); // 0..1 across the band
        const baseY = height * (0.52 + p * 0.42);
        const amp = height * (0.05 + 0.07 * Math.sin(p * Math.PI));
        const freq = 1.1 + p * 0.9;
        const speed = (0.00007 + p * 0.00005) * 0.35; // slow, calm drift
        const phase = i * 0.33;

        // Brighter core strands near the middle of the band.
        const core = Math.exp(-Math.pow((p - 0.35) / 0.22, 2));
        const alpha = 0.07 + core * 0.42;
        const warm = p < 0.6;
        ctx.strokeStyle = warm ? `rgba(214, 160, 78, ${alpha})` : `rgba(236, 222, 200, ${alpha * 0.55})`;
        ctx.lineWidth = 0.7 + core * 1.1;

        ctx.beginPath();
        for (let x = -20; x <= width + 20; x += step) {
          const u = x / width;
          const y =
            baseY +
            Math.sin(u * Math.PI * freq + t * speed * 6 + phase) * amp +
            Math.sin(u * Math.PI * 2.6 - t * speed * 4 + phase * 1.7) * amp * 0.35 -
            u * height * 0.12; // gentle upward sweep to the right
          if (x === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.globalCompositeOperation = "source-over";
    };

    const loop = (now: number) => {
      draw(now - start);
      frame = requestAnimationFrame(loop);
    };
    const play = () => {
      if (running || reduced || !visible || document.hidden) return;
      running = true;
      frame = requestAnimationFrame(loop);
    };
    const pause = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    resize();
    draw(12000);

    const ro = new ResizeObserver(() => {
      resize();
      if (!running) draw(12000);
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) play();
      else pause();
    });
    io.observe(canvas);

    const onVisibility = () => (document.hidden ? pause() : play());
    document.addEventListener("visibilitychange", onVisibility);

    play();
    return () => {
      pause();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={`pointer-events-none ${className}`} />;
}
