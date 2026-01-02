import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Manifesto.css';

gsap.registerPlugin(ScrollTrigger);

const Manifesto = () => {
  const sectionRef = useRef(null);
  const words = [
    'FABRICATION',
    'ENGINEERING',
    'HEAT',
    'PRESSURE',
    'LASER',
    'THREAD',
    'MOTION',
    'SIGNAL'
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const chars = section.querySelectorAll('.manifesto-char');
    
    chars.forEach((char, i) => {
      gsap.fromTo(char,
        {
          opacity: 0,
          y: 100,
          rotateX: -90,
          scale: 0.5
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true
          },
          ease: 'power3.out'
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="manifesto-section" ref={sectionRef}>
      <div className="manifesto-container">
        <div className="manifesto-grid">
          {words.map((word, wordIndex) => (
            <div key={wordIndex} className="manifesto-word-container">
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className="manifesto-char"
                  style={{
                    color: wordIndex % 2 === 0 ? '#ff1a1a' : '#00ffff'
                  }}
                  whileHover={{
                    scale: 1.5,
                    rotateZ: 15,
                    textShadow: '0 0 40px currentColor',
                    zIndex: 100
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>
          ))}
        </div>
        
        <motion.div
          className="manifesto-line-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        
        <motion.p
          className="manifesto-statement"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          CUSTOM IS THE DEFAULT.<br/>
          PRECISION IS THE STANDARD.<br/>
          <span className="statement-accent">ENGINEERED FOR EXCELLENCE.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default Manifesto;

