import { useCallback } from 'react';

/**
 * Custom hook that returns a stable callback for smooth-scrolling to an element by ID.
 * Replaces raw document.querySelector calls scattered across components.
 */
export function useScrollTo() {
  const scrollTo = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return scrollTo;
}
