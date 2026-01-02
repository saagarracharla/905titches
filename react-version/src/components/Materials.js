import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Materials.css';

const Materials = () => {
  const materials = [
    { name: 'Fabric', desc: 'Hoodies • Crewnecks • Towels • Robes' },
    { name: 'Glass', desc: 'Bottles • Containers • Custom Shapes' },
    { name: 'Wood', desc: 'Panels • Coasters • Custom Cuts' },
    { name: 'Slate', desc: 'Coasters • Plaques • Engraved' },
    { name: 'Acrylic', desc: 'Signs • Displays • Precision Cuts' }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="materials-section" ref={ref}>
      <div className="container">
        <motion.div
          className="materials-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="materials-label">Materials</span>
          <h2 className="materials-title">We Work With</h2>
        </motion.div>
        <div className="materials-grid">
          {materials.map((material, i) => (
            <MaterialCard key={i} material={material} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MaterialCard = ({ material, index, isInView }) => {
  return (
    <motion.div
      className="material-card"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -12, scale: 1.05 }}
    >
      <div className="material-visual"></div>
      <h3 className="material-name">{material.name}</h3>
      <p className="material-desc">{material.desc}</p>
    </motion.div>
  );
};

export default Materials;

