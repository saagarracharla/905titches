import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const wordVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const taglineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6
      }
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-split">
          <motion.div 
            className="hero-left"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            <motion.div 
              className="hero-label"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Custom Fabrication Studio
            </motion.div>
            
            <h1 className="hero-title">
              <motion.span 
                className="title-word"
                variants={wordVariants}
              >
                ENGINEERED
              </motion.span>
              <motion.span 
                className="title-word title-accent"
                variants={wordVariants}
              >
                FABRICATION
              </motion.span>
            </h1>
            
            <motion.div 
              className="hero-tagline"
              variants={taglineVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span variants={wordVariants}>BUILT.</motion.span>
              <motion.span variants={wordVariants}>NOT</motion.span>
              <motion.span variants={wordVariants}>PRINTED.</motion.span>
            </motion.div>
            
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.a 
                href="/contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Order</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="hero-visual">
              <div className="hero-number-large">01</div>
              <div className="hero-services-preview">
                {[1, 2, 3].map((num, i) => (
                  <motion.div
                    key={num}
                    className="service-preview-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.2, duration: 0.6 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <span className="service-preview-number">0{num}</span>
                    <span className="service-preview-name">
                      {num === 1 ? 'Embroidery' : num === 2 ? 'Laser' : 'DTG'}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <div className="scroll-text">Scroll to explore</div>
          <motion.div 
            className="scroll-line"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

