import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Gallery.css';

const Gallery = () => {
  const items = [
    { name: 'Bottles', category: 'Laser Engraving', large: true },
    { name: 'Hoodies', category: 'Embroidery' },
    { name: 'Coasters', category: 'Laser' },
    { name: 'Wood', category: 'Cutting', tall: true }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="gallery-section" ref={ref}>
      <div className="container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="gallery-label">Featured Work</span>
          <h2 className="gallery-title">Recent Creations</h2>
          <motion.a
            href="/gallery"
            className="gallery-link"
            whileHover={{ x: 10 }}
          >
            <span>View Full Gallery</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>
        <div className="gallery-grid">
          {items.map((item, i) => (
            <GalleryItem key={i} item={item} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryItem = ({ item, index, isInView }) => {
  return (
    <motion.div
      className={`gallery-item ${item.large ? 'large' : ''} ${item.tall ? 'tall' : ''}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
    >
      <div className="gallery-placeholder">
        <span>{item.name}</span>
      </div>
      <motion.div
        className="gallery-overlay"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <span className="gallery-category">{item.category}</span>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;

