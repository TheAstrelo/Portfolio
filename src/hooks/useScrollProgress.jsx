import { useState, useEffect } from 'react';

/**
 * Custom hook for tracking scroll progress.
 * Standalone alternative to Framer Motion's useScroll — demonstrates
 * manual rAF throttling for high-frequency event handling.
 * Currently unused (ScrollProgress component uses Framer Motion's useScroll),
 * but kept to showcase the pattern.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
      setProgress(progress);
    };

    // Throttle scroll events for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
