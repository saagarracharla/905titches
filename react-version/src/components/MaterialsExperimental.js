import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MaterialsExperimental.css';

gsap.registerPlugin(ScrollTrigger);

const MaterialsExperimental = () => {
  const materials = [
    { name: 'FABRIC', items: ['Hoodies', 'Crewnecks', 'Towels', 'Robes'], color: '#ff1a1a' },
    { name: 'GLASS', items: ['Bottles', 'Containers', 'Custom'], color: '#00ffff' },
    { name: 'WOOD', items: ['Panels', 'Coasters', 'Cuts'], color: '#ff1a1a' },
    { name: 'SLATE', items: ['Coasters', 'Plaques', 'Engraved'], color: '#00ffff' },
    { name: 'ACRYLIC', items: ['Signs', 'Displays', 'Precision'], color: '#ff1a1a' }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="materials-section" data-section="materials-section" className="materials-experimental" ref={ref}>
      <motion.div className="materials-container" style={{ y }}>
        <motion.div
          className="materials-header-experimental"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="materials-label-line"></div>
          <motion.h2 
            className="materials-title-experimental"
            initial={{ scale: 0.5, rotate: -90 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            MATERIALS
          </motion.h2>
          <div className="materials-label-line"></div>
        </motion.div>

        <div className="materials-grid-experimental">
          {materials.map((material, index) => (
            <MaterialCard 
              key={material.name} 
              material={material} 
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const MaterialCard = ({ material, index, isInView }) => {
  return (
    <motion.div
      className="material-card-experimental"
      initial={{ opacity: 0, rotateY: -90, scale: 0.5, z: -100 }}
      animate={isInView ? { 
        opacity: 1, 
        rotateY: 0, 
        scale: 1,
        z: 0
      } : {}}
      transition={{
        delay: index * 0.15,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      whileHover={{ 
        rotateY: 10,
        rotateX: 5,
        scale: 1.05,
        z: 50
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="material-visual-experimental"
        style={{ 
          background: `linear-gradient(135deg, ${material.color}20, ${material.color}05)`,
          borderColor: material.color
        }}
        whileHover={{
          rotate: 360,
          scale: 1.1
        }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="material-shape"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ borderColor: material.color }}
        />
      </motion.div>
      
      <motion.h3 
        className="material-name-experimental"
        style={{ color: material.color }}
        whileHover={{
          scale: 1.1,
          textShadow: `0 0 30px ${material.color}`
        }}
      >
        {material.name}
      </motion.h3>
      
      <div className="material-items">
        {material.items.map((item, i) => (
          <motion.span
            key={item}
            className="material-item"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15 + i * 0.1 }}
            whileHover={{ 
              scale: 1.2,
              color: material.color,
              rotateZ: 5
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default MaterialsExperimental;
