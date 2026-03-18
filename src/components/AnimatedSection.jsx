import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks';

/**
 * Animated Section Component
 * Demonstrates: Framer Motion variants, staggered animations, intersection observer
 */
export function AnimatedSection({ children, className = '', delay = 0 }) {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.6,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}

/**
 * Staggered children animation container
 * Children animate in sequence
 */
export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
        delayChildren: prefersReducedMotion ? 0 : 0.2
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

/**
 * Animated item for use inside StaggerContainer
 */
export function StaggerItem({ children, className = '' }) {
  const prefersReducedMotion = useReducedMotion();

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
