import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Embroidery',
      description: 'Precision threadwork that transforms fabric into art. Every stitch engineered for permanence. Custom designs on hoodies, crewnecks, towels, and robes.',
      link: '/services#embroidery'
    },
    {
      number: '02',
      title: 'Laser Engraving',
      description: 'Molecular precision. Cutting and engraving with laser accuracy across materials. Bottles, slate coasters, wood panels, and acrylic.',
      link: '/services#laser',
      reverse: true
    },
    {
      number: '03',
      title: 'DTG Printing',
      description: 'Direct-to-garment technology. Full-color graphics with industrial durability. Heat-pressed graphics for vibrant, long-lasting designs.',
      link: '/services#dtg'
    }
  ];

  return (
    <section className="services-section">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`service-card ${service.reverse ? 'reverse' : ''}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        },
        hidden: { opacity: 0 }
      }}
    >
      <motion.div
        className="service-content"
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
        }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        <motion.div
          className="service-number"
          variants={{
            visible: { opacity: 0.15, scale: 1 },
            hidden: { opacity: 0, scale: 0.5 }
          }}
        >
          {service.number}
        </motion.div>
        <h2 className="service-title">{service.title}</h2>
        <p className="service-description">{service.description}</p>
        <motion.a
          href={service.link}
          className="service-link"
          whileHover={{ x: 10 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Explore Service</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.a>
      </motion.div>
      <motion.div
        className="service-visual"
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.9 }
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="service-visual-placeholder">
          <span>{service.title}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

