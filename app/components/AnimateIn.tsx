"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

/* ─────────────────────────────────────────
   Reusable scroll-triggered animation wrapper
   ───────────────────────────────────────── */

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimateIn({
  children,
  delay = 0,
  duration = 0.6,
  y = 32,
  className,
  style,
}: AnimateInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Staggered container — children animate in sequence */
interface StaggerProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
}

export function Stagger({ children, className, style, stagger = 0.1 }: StaggerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* Item used inside <Stagger> */
export function StaggerItem({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden:  { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* Fade-in only (no Y movement) — good for overlays / backgrounds */
export function FadeIn({
  children,
  delay = 0,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
