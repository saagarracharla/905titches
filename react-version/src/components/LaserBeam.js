import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './LaserBeam.css';

const LaserBeam = ({ direction = 'horizontal' }) => {
  const beamRef = useRef(null);

  return (
    <motion.div
      ref={beamRef}
      className={`laser-beam laser-${direction}`}
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: direction === 'horizontal' ? [1, 1.1, 1] : [1, 1.05, 1]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="laser-core"></div>
      <div className="laser-glow"></div>
    </motion.div>
  );
};

export default LaserBeam;

