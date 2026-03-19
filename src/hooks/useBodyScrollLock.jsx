import { useEffect, useRef } from 'react';

/**
 * Locks body scroll when `isLocked` is true.
 * Preserves the original overflow value and restores it on cleanup.
 */
export function useBodyScrollLock(isLocked) {
  const originalOverflow = useRef('');

  useEffect(() => {
    if (isLocked) {
      originalOverflow.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow.current;
    }

    return () => {
      document.body.style.overflow = originalOverflow.current;
    };
  }, [isLocked]);
}
