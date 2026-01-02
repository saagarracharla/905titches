import { useEffect, useRef, useState } from 'react';

/**
 * Hook to track scroll velocity for velocity-based animations
 */
export const useScrollVelocity = () => {
  const [velocity, setVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const timeDelta = currentTime - lastTime.current;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      
      const currentVelocity = timeDelta > 0 ? scrollDelta / timeDelta : 0;
      setVelocity(currentVelocity);
      
      lastScrollY.current = currentScrollY;
      lastTime.current = currentTime;
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  return velocity;
};

