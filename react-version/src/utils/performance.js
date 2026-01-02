/**
 * Performance Optimization Utilities
 * Debouncing, throttling, and optimization helpers
 */

// Debounce function for scroll events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for resize events
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Lazy load images
export const lazyLoadImage = (img) => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          if (image.dataset.src) {
            image.src = image.dataset.src;
            image.classList.add('loaded');
            observer.unobserve(image);
          }
        }
      });
    });
    imageObserver.observe(img);
  }
};

// Preload critical resources
export const preloadResource = (href, as) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (as === 'font') {
    link.crossOrigin = 'anonymous';
  }
  document.head.appendChild(link);
};

// Optimize animations with will-change
export const optimizeElement = (element) => {
  if (element) {
    element.style.willChange = 'transform, opacity';
    element.style.transform = 'translateZ(0)';
    element.style.backfaceVisibility = 'hidden';
  }
};

// Clean up will-change after animation
export const cleanupOptimization = (element) => {
  if (element) {
    setTimeout(() => {
      element.style.willChange = 'auto';
    }, 1000);
  }
};

