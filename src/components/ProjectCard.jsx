import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition, useReducedMotion } from '../hooks';

/**
 * Project Card with 3D Tilt Effect
 * Demonstrates: refs, transforms, perspective, custom hooks
 */
export function ProjectCard({ title, description, tags, link, children }) {
  const ref = useRef(null);
  const { position, isHovering } = useMousePosition(ref);
  const prefersReducedMotion = useReducedMotion();

  // Calculate 3D rotation based on mouse position
  const rotateX = prefersReducedMotion ? 0 : position.y * -0.1;
  const rotateY = prefersReducedMotion ? 0 : position.x * 0.1;

  return (
    <motion.article
      ref={ref}
      className="project-card"
      animate={{
        rotateX: isHovering ? rotateX : 0,
        rotateY: isHovering ? rotateY : 0
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
    >
      {children}
      <div className="project-card-content" style={{ transform: 'translateZ(20px)' }}>
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        {tags && (
          <div className="project-card-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}
        {link && (
          <a href={link} className="project-card-link" target="_blank" rel="noopener noreferrer">
            View Project →
          </a>
        )}
      </div>
    </motion.article>
  );
}
