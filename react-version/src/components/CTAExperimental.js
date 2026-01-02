import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './CTAExperimental.css';

const CTAExperimental = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Removed rotations and flips - keeping it simple

  return (
    <section id="cta-section" data-section="cta-section" className="cta-experimental" ref={ref}>
      <motion.div
        className="cta-content-experimental"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="cta-title-experimental"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          READY TO START?
        </motion.h2>
        
        <motion.p
          className="cta-subtitle-experimental"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Let's engineer your vision into reality.
        </motion.p>

        <motion.a
          href="mailto:905titches@gmail.com"
          className="btn-cta-experimental"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 60px rgba(255, 26, 26, 0.6)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="btn-cta-text"
            animate={{ 
              backgroundPosition: ['0%', '100%', '0%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            START PROJECT
          </motion.span>
          <motion.div
            className="btn-cta-arrow"
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

      {/* Animated Background Elements */}
      <motion.div
        className="cta-bg-shape cta-bg-1"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="cta-bg-shape cta-bg-2"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default CTAExperimental;
