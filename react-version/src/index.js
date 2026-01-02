import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Performance: Preload critical resources
const preloadFonts = () => {
  const link1 = document.createElement('link');
  link1.rel = 'preload';
  link1.as = 'font';
  link1.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap';
  link1.crossOrigin = 'anonymous';
  document.head.appendChild(link1);
};

preloadFonts();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
