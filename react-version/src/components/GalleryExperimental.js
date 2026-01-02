import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './GalleryExperimental.css';

gsap.registerPlugin(ScrollTrigger);

const GalleryExperimental = () => {
  const items = [
    { name: 'BOTTLES', category: 'LASER ENGRAVING', large: true, color: '#00ffff' },
    { name: 'HOODIES', category: 'EMBROIDERY', color: '#ff1a1a' },
    { name: 'COASTERS', category: 'LASER', color: '#00ffff' },
    { name: 'WOOD', category: 'CUTTING', tall: true, color: '#ff1a1a' }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const items = ref.current?.querySelectorAll('.gallery-item-experimental');
    if (!items) return;

    items.forEach((item, i) => {
      gsap.fromTo(item,
        {
          opacity: 0,
          scale: 0.5,
          rotate: -45,
          filter: 'blur(20px)'
        },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          filter: 'blur(0px)',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          duration: 1,
          delay: i * 0.15,
          ease: 'power3.out'
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="gallery-section" data-section="gallery-section" className="gallery-experimental" ref={ref}>
      <div className="gallery-container">
        <motion.div
          className="gallery-header-experimental"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="gallery-header-left">
            <span className="gallery-label-experimental">GALLERY</span>
            <h2 className="gallery-title-experimental">RECENT WORK</h2>
          </div>
          <motion.a
            href="/gallery"
            className="gallery-link-experimental"
            whileHover={{ scale: 1.1, x: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW ALL →
          </motion.a>
        </motion.div>

        <div className="gallery-grid-experimental">
          {items.map((item, index) => (
            <GalleryItem
              key={index}
              item={item}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryItem = ({ item, index, isHovered, onHover, onLeave }) => {
  return (
    <motion.div
      className={`gallery-item-experimental ${item.large ? 'large' : ''} ${item.tall ? 'tall' : ''}`}
      whileHover={{ 
        scale: 1.05,
        rotate: 2,
        zIndex: 10
      }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
    >
      <motion.div
        className="gallery-visual-experimental"
        style={{ borderColor: item.color }}
        animate={isHovered ? {
          boxShadow: `0 0 60px ${item.color}40`,
          filter: 'brightness(1.1)'
        } : {}}
      >
        <motion.div
          className="gallery-placeholder-experimental"
          animate={isHovered ? {
            scale: 1.1,
            filter: 'brightness(0.7) blur(2px)'
          } : {}}
        >
          <span>{item.name}</span>
        </motion.div>
        
        {/* Distortion Effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="gallery-distortion"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              style={{ 
                background: `linear-gradient(to top, ${item.color}dd, transparent)`
              }}
            >
              <motion.span
                className="gallery-category-experimental"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
              >
                {item.category}
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default GalleryExperimental;
