import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-container">
        <motion.div 
          className="footer-brand"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="footer-logo">905<span className="logo-accent">titches</span></h3>
          <p className="footer-tagline">Custom fabrication for the modern maker.</p>
        </motion.div>
        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-list">
              {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a 
                    href={`#${item.toLowerCase() === 'home' ? 'home' : item.toLowerCase() === 'about' ? 'materials-section' : item.toLowerCase() === 'contact' ? 'cta-section' : `${item.toLowerCase()}-section`}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = item.toLowerCase();
                      if (target === 'home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        return;
                      }
                      const sectionMap = {
                        'services': 'services-section',
                        'gallery': 'gallery-section',
                        'about': 'materials-section',
                        'contact': 'cta-section'
                      };
                      const sectionId = sectionMap[target];
                      if (sectionId) {
                        const element = document.getElementById(sectionId);
                        if (element) {
                          const offset = 100;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - offset;
                          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                        }
                      }
                    }}
                  >{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Connect</h4>
            <ul className="footer-list">
              <li><a href="https://www.instagram.com/905titches/" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/905titches/" target="_blank" rel="noopener">LinkedIn</a></li>
              <li><a href="mailto:905titches@gmail.com">Email</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Location</h4>
            <p className="footer-text">Scarborough, Toronto, Canada</p>
            <p className="footer-text" style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>
              🇨🇦 Made in the 6ix
            </p>
          </div>
        </div>
      </div>
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>&copy; 2024 905titches. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
