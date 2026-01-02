import React, { useEffect, useRef } from 'react';
import './GlitchEffect.css';

const GlitchEffect = ({ children, intensity = 1 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const glitch = () => {
      element.style.animation = 'none';
      setTimeout(() => {
        element.style.animation = `glitch-${intensity} ${0.3 + Math.random() * 0.2}s`;
      }, 10);
    };

    const interval = setInterval(glitch, 3000 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, [intensity]);

  return (
    <span ref={ref} className="glitch-wrapper">
      {children}
    </span>
  );
};

export default GlitchEffect;

