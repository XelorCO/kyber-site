'use client';

import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { type ReactNode, useRef } from 'react';

/** Barre de progression de lecture, fixée sous le header. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });
  const reduced = useReducedMotion();
  if (reduced) return null;
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-16 left-0 right-0 h-[3px] z-50 origin-left bg-gradient-to-r from-blue-600 to-indigo-600"
    />
  );
}

/**
 * Parallaxe douce au défilement : l'élément dérive verticalement de `drift` px
 * pendant que sa section traverse le viewport.
 */
export function Parallax({ children, drift = 60, className }: { children?: ReactNode; drift?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [drift, -drift]);
  const reduced = useReducedMotion();
  return (
    <motion.div ref={ref} style={reduced ? undefined : { y }} className={className} aria-hidden="true">
      {children}
    </motion.div>
  );
}
