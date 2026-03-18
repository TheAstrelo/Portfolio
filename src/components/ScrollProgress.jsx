import { motion, useScroll, useSpring } from 'framer-motion';
import { useReducedMotion } from '../hooks';

/**
 * Scroll Progress Bar
 * Demonstrates: Framer Motion, useScroll, useSpring, accessibility
 */
export function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Smooth spring animation for the progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{
        scaleX: prefersReducedMotion ? scrollYProgress : scaleX,
        transformOrigin: '0%'
      }}
    />
  );
}
