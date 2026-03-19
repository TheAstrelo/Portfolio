import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks';

const FadeIn = ({ children, delay = 0, className = '' }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      transition={prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.5, ease: 'easeOut', delay: delay / 1000 }
      }
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
