import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition, useReducedMotion } from '../hooks';

/**
 * Magnetic Button Component
 * Demonstrates: refs, custom hooks, Framer Motion, transforms
 * Button subtly pulls toward cursor on hover
 */
export function MagneticButton({ children, className = '', strength = 0.3, ...props }) {
  const ref = useRef(null);
  const { position, isHovering } = useMousePosition(ref);
  const prefersReducedMotion = useReducedMotion();

  // Calculate magnetic pull (disabled if user prefers reduced motion)
  const x = prefersReducedMotion ? 0 : position.x * strength;
  const y = prefersReducedMotion ? 0 : position.y * strength;

  return (
    <motion.button
      ref={ref}
      className={`magnetic-button ${className}`}
      animate={{
        x: isHovering ? x : 0,
        y: isHovering ? y : 0
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
