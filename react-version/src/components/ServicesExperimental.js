import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ServicesExperimental.css';

gsap.registerPlugin(ScrollTrigger);

const ServicesExperimental = () => {
  const services = [
    {
      number: '01',
      title: 'EMBROIDERY',
      subtitle: 'Thread Precision',
      description: 'Every stitch engineered. Custom designs on fabric. Permanent quality.',
      color: '#ff1a1a',
      angle: -5,
      effect: 'thread'
    },
    {
      number: '02',
      title: 'LASER',
      subtitle: 'Molecular Accuracy',
      description: 'Cutting and engraving with precision. Across all materials.',
      color: '#00ffff',
      angle: 5,
      effect: 'laser'
    },
    {
      number: '03',
      title: 'DTG',
      subtitle: 'Direct Technology',
      description: 'Full-color graphics. Industrial durability. Heat-pressed excellence.',
      color: '#ff1a1a',
      angle: -3,
      effect: 'heat'
    }
  ];

  return (
    <section className="services-experimental">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Smooth parallax without scroll hijacking
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1]);

  return (
    <section id="services-section" data-section="services-section">
    <motion.div
      ref={ref}
      className={`service-card-experimental ${index % 2 === 0 ? 'left' : 'right'} service-${service.effect}`}
      style={{ y, opacity, scale }}
    >
      {/* Effect Overlays */}
      <div className={`effect-overlay effect-${service.effect}`}></div>
      
      <motion.div
        className="service-content-wrapper"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <motion.div
          className="service-number-large"
          variants={{
            hidden: { opacity: 0, scale: 0, rotate: -180 },
            visible: { 
              opacity: 0.1, 
              scale: 1, 
              rotate: 0,
              transition: { duration: 1, ease: "easeOut" }
            }
          }}
        >
          {service.number}
        </motion.div>

        <motion.div
          className="service-main-content"
          style={{ transform: `rotate(${service.angle}deg)` }}
        >
          <motion.div
            className="service-number-small"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            {service.number}
          </motion.div>

          <motion.h2
            className="service-title-experimental"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
              }
            }}
          >
            {service.title.split('').map((char, i) => (
              <motion.span
                key={i}
                className="service-char"
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: -90 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0,
                    transition: {
                      delay: i * 0.05,
                      duration: 0.6
                    }
                  }
                }}
                whileHover={{
                  scale: 1.3,
                  rotateZ: 15,
                  color: service.color,
                  textShadow: `0 0 40px ${service.color}`,
                  filter: 'blur(0px)',
                  zIndex: 100
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            className="service-subtitle"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            style={{ color: service.color }}
          >
            {service.subtitle}
          </motion.p>

          <motion.p
            className="service-description-experimental"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {service.description}
          </motion.p>

          <motion.a
            href={`/services#${service.title.toLowerCase()}`}
            className="service-link-experimental"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            whileHover={{ 
              scale: 1.1,
              x: 20,
              filter: 'brightness(1.2)'
            }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              borderColor: service.color,
              color: service.color
            }}
          >
            <span>EXPLORE</span>
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        <motion.div
          className="service-visual-experimental"
          variants={{
            hidden: { opacity: 0, scale: 0.8, rotate: 45 },
            visible: { 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              transition: { duration: 1, ease: "easeOut" }
            }
          }}
          whileHover={{ 
            scale: 1.1,
            rotate: service.angle * 2
          }}
        >
          <div 
            className="service-visual-bg"
            style={{ 
              background: `linear-gradient(135deg, ${service.color}20, transparent)`
            }}
          >
            <motion.div
              className="service-visual-shape"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ borderColor: service.color }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
    </section>
  );
};

export default ServicesExperimental;
