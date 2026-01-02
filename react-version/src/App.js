import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import ParticleSystem from './components/ParticleSystem';
import CursorTrail from './components/CursorTrail';
import ScrollProgress from './components/ScrollProgress';
import DistortionOverlay from './components/DistortionOverlay';

// Lazy load heavy components for performance
const HeroExperimental = lazy(() => import('./components/HeroExperimental'));
const ServicesExperimental = lazy(() => import('./components/ServicesExperimental'));
const MaterialsExperimental = lazy(() => import('./components/MaterialsExperimental'));
const GalleryExperimental = lazy(() => import('./components/GalleryExperimental'));
const CTAExperimental = lazy(() => import('./components/CTAExperimental'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="App">
      <ParticleSystem />
      <CursorTrail />
      <ScrollProgress />
      <DistortionOverlay />
      <Navbar />
      
      <Suspense fallback={<div className="loading-screen">LOADING...</div>}>
        <HeroExperimental />
        <ServicesExperimental />
        <MaterialsExperimental />
        <GalleryExperimental />
        <CTAExperimental />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
