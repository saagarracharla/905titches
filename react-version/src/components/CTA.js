import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="cta-title">Ready to Start Your Project?</h2>
        <p className="cta-subtitle">Let's bring your vision to life with precision and craftsmanship.</p>
        <motion.a
          href="/contact"
          className="btn btn-primary btn-large"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Get Started</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default CTA;

