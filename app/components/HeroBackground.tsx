"use client";
import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────
   Constellation canvas — dots + distance-based line network
   + mouse cursor interaction
   60 fps, requestAnimationFrame, GPU-friendly (no shadows)
───────────────────────────────────────────────────────── */

const DOT_COUNT    = 65;
const DOT_SPEED    = 0.35;       // max px/frame drift
const DOT_RADIUS   = 1.8;        // dot size
const LINK_DIST    = 130;        // dot–dot connection threshold (px)
const MOUSE_DIST   = 160;        // cursor connection threshold (px)
const DOT_COLOR    = "198,255,61";  // lime tint — same accent as the brand
const LINE_OPACITY = 0.18;       // base max opacity for dot–dot lines
const MOUSE_OPACITY= 0.32;       // slightly stronger lines toward cursor

interface Dot {
  x: number; y: number;
  vx: number; vy: number;
  alpha: number; alphaDir: number;
}

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse     = useRef({ x: -9999, y: -9999 });
  const animRef   = useRef<number>(0);
  const dots      = useRef<Dot[]>([]);
  const size      = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    /* ── Resize ── */
    function resize() {
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      // devicePixelRatio for sharp rendering on retina
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      canvas!.width  = w * dpr;
      canvas!.height = h * dpr;
      ctx!.scale(dpr, dpr);
      size.current = { w, h };
    }

    /* ── Spawn one dot ── */
    function spawnDot(w: number, h: number): Dot {
      const angle = Math.random() * Math.PI * 2;
      const speed = DOT_SPEED * (0.3 + Math.random() * 0.7);
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha:    0.4 + Math.random() * 0.6,
        alphaDir: Math.random() > 0.5 ? 1 : -1,
      };
    }

    /* ── Initialise ── */
    resize();
    const { w, h } = size.current;
    dots.current = Array.from({ length: DOT_COUNT }, () => spawnDot(w, h));

    /* ── Main draw loop ── */
    function draw() {
      const { w, h } = size.current;
      ctx!.clearRect(0, 0, w, h);

      const d = dots.current;
      const mx = mouse.current.x;
      const my = mouse.current.y;

      /* Update dot positions + gentle alpha pulse */
      for (const dot of d) {
        dot.x += dot.vx;
        dot.y += dot.vy;

        /* Wrap around edges */
        if (dot.x < -10) dot.x = w + 10;
        if (dot.x > w + 10) dot.x = -10;
        if (dot.y < -10) dot.y = h + 10;
        if (dot.y > h + 10) dot.y = -10;

        /* Slow alpha breathe */
        dot.alpha += dot.alphaDir * 0.003;
        if (dot.alpha > 0.9) { dot.alpha = 0.9; dot.alphaDir = -1; }
        if (dot.alpha < 0.2) { dot.alpha = 0.2; dot.alphaDir =  1; }
      }

      /* Draw dot–dot lines */
      for (let i = 0; i < d.length; i++) {
        for (let j = i + 1; j < d.length; j++) {
          const dx = d[i].x - d[j].x;
          const dy = d[i].y - d[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const t   = 1 - dist / LINK_DIST;          // 0→1 as dots approach
            const op  = t * LINE_OPACITY * ((d[i].alpha + d[j].alpha) / 2);
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(${DOT_COLOR},${op.toFixed(3)})`;
            ctx!.lineWidth   = 0.7;
            ctx!.moveTo(d[i].x, d[i].y);
            ctx!.lineTo(d[j].x, d[j].y);
            ctx!.stroke();
          }
        }
      }

      /* Draw cursor–dot lines */
      for (const dot of d) {
        const dx   = dot.x - mx;
        const dy   = dot.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DIST) {
          const t  = 1 - dist / MOUSE_DIST;
          const op = t * MOUSE_OPACITY * dot.alpha;
          ctx!.beginPath();
          ctx!.strokeStyle = `rgba(${DOT_COLOR},${op.toFixed(3)})`;
          ctx!.lineWidth   = 0.9;
          ctx!.moveTo(dot.x, dot.y);
          ctx!.lineTo(mx, my);
          ctx!.stroke();
        }
      }

      /* Draw dots on top */
      for (const dot of d) {
        ctx!.beginPath();
        ctx!.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${DOT_COLOR},${dot.alpha.toFixed(3)})`;
        ctx!.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    /* ── Event listeners ── */
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    const onMouseLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };
    const onTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const t = e.touches[0];
      mouse.current = {
        x: t.clientX - rect.left,
        y: t.clientY - rect.top,
      };
    };

    const ro = new ResizeObserver(() => {
      resize();
    });

    canvas.addEventListener("mousemove",  onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchmove",  onTouchMove, { passive: true });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener("mousemove",  onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchmove",  onTouchMove);
      ro.disconnect();
    };
  }, []);

  return (
    <>
      {/* Full-cover canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "all",   /* must be 'all' to receive mouse events */
          zIndex: 1,
          display: "block",
        }}
      />

      {/* Floating orbs — pure CSS, no canvas cost */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      {/* Scan line sweep */}
      <div className="hero-scan" />
    </>
  );
}
