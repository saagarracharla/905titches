import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LaserBeam from './LaserBeam';
import './HeroExperimental.css';

gsap.registerPlugin(ScrollTrigger);

const HeroExperimental = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const heroRef = useRef(null);
  const springConfig = { damping: 50, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const rotateX = useTransform(y, [0, window.innerHeight], [15, -15]);
  const rotateY = useTransform(x, [0, window.innerWidth], [-15, 15]);
  // Removed scroll-based transforms that were causing issues

  const words = ['ENGINEERED', 'FABRICATION'];
  const taglineWords = ['BUILT', 'NOT', 'PRINTED'];

  // Scroll hijacking removed - was causing scroll issues

  return (
    <section id="home" className="hero-experimental" ref={heroRef}>
      <div className="hero-3d-container">
        {/* Animated Background Shapes with Noise */}
        <motion.div 
          className="hero-shape hero-shape-1"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="hero-shape hero-shape-2"
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="hero-shape hero-shape-3"
          animate={{
            x: [0, 200, 0],
            y: [0, 150, 0],
            rotate: [0, -180, -360],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Scanlines Effect */}
        <div className="scanlines-overlay"></div>
        
        {/* Noise/Grain Overlay */}
        <div className="noise-overlay"></div>

        {/* Laser Beams */}
        <LaserBeam direction="horizontal" />
        <LaserBeam direction="vertical" />

        {/* Main Content with 3D Tilt */}
        <motion.div
          className="hero-content-3d"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
        >
          <div className="hero-main">
            <motion.div
              className="hero-label-experimental"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="label-line"></span>
              <span className="label-text">905<span style={{ whiteSpace: 'nowrap' }}>TITCHES</span></span>
              <span className="label-line"></span>
            </motion.div>

            <div className="hero-title-container">
              {words.map((word, i) => (
                <motion.h1
                  key={word}
                  className={`hero-title-word ${i === 1 ? 'accent' : ''}`}
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: i * 0.3,
                    duration: 1,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }}
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >
                  {word.split('').map((char, idx) => (
                    <motion.span
                      key={idx}
                      className="char"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: i * 0.3 + idx * 0.05,
                        duration: 0.5
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        rotateZ: 15,
                        color: i === 1 ? '#ff1a1a' : '#ffffff',
                        textShadow: '0 0 30px #ff1a1a',
                        filter: 'blur(0px)',
                        zIndex: 100
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </motion.h1>
              ))}
            </div>

            <motion.div
              className="hero-tagline-experimental"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              {taglineWords.map((word, i) => (
                <motion.span
                  key={word}
                  className="tagline-word"
                  variants={{
                    hidden: { opacity: 0, x: -50, rotateY: -90 },
                    visible: { 
                      opacity: 1, 
                      x: 0, 
                      rotateY: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.6, -0.05, 0.01, 0.99]
                      }
                    }
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 15,
                    color: '#ff1a1a',
                    textShadow: '0 0 40px #ff1a1a'
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="hero-cta-experimental"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <motion.a
                href="#cta-section"
                className="btn-experimental"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('cta-section');
                  if (element) {
                    const offset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 60px rgba(255, 26, 26, 0.6)",
                  filter: "brightness(1.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="btn-text">START PROJECT</span>
                <motion.div
                  className="btn-arrow"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.div>
              </motion.a>
            </motion.div>
          </div>

          {/* Floating Service Numbers with Glitch */}
          <div className="hero-services-float">
            {[1, 2, 3].map((num) => (
              <motion.div
                key={num}
                className="float-service-number"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  delay: 1.5 + num * 0.2,
                  duration: 0.6,
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <span className="float-number">{num}</span>
                <span className="float-label">
                  {num === 1 ? 'EMBROIDERY' : num === 2 ? 'LASER' : 'DTG'}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator-experimental"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="scroll-line-experimental"></div>
          <span>SCROLL</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroExperimental;
