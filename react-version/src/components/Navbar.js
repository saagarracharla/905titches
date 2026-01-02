import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const sectionMap = {
      'services': 'services-section',
      'gallery': 'gallery-section',
      'about': 'materials-section', // Using materials as about for now
      'contact': 'cta-section'
    };
    
    const sectionId = sectionMap[target];
    if (sectionId) {
      const element = document.getElementById(sectionId) || 
                     document.querySelector(`.${sectionId}`) ||
                     document.querySelector(`[data-section="${sectionId}"]`);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <a 
          href="/" 
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img 
            src={`${process.env.PUBLIC_URL || ''}/img/905titches_Logo.jpg`}
            alt="905titches Logo" 
            className="logo-image"
            onError={(e) => {
              // Fallback to text if image fails
              e.target.style.display = 'none';
              const fallback = e.target.nextElementSibling;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <span className="logo-text-fallback" style={{ display: 'none' }}>
            <span className="logo-number">905</span>
            <span className="logo-text">titches</span>
          </span>
        </a>
        <button 
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              className="nav-menu active"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
            >
              {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="nav-link"
                    onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
        {!menuOpen && (
          <ul className="nav-menu">
            {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item, i) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

