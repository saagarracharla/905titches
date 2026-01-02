import React, { useEffect, useRef } from 'react';
import './DistortionOverlay.css';

const DistortionOverlay = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;
    let animationFrameId;
    let lastTime = 0;
    const targetFPS = 30;
    const frameInterval = 1000 / targetFPS;

    function draw(currentTime) {
      if (currentTime - lastTime >= frameInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Reduced distortion waves for performance
        for (let i = 0; i < 3; i++) {
          const y = (canvas.height / 3) * i + Math.sin(time + i) * 15;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 26, 26, ${0.08 + Math.sin(time) * 0.08})`;
          ctx.lineWidth = 1.5;
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }

        time += 0.015;
        lastTime = currentTime;
      }
      
      animationFrameId = requestAnimationFrame(draw);
    }

    animationFrameId = requestAnimationFrame(draw);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="distortion-overlay" />;
};

export default DistortionOverlay;

