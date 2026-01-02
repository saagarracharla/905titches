# 905titches — UNHINGED EXPERIMENTAL VERSION

## 🧨 UNHINGED CREATIVE MODE

This is not a website. This is a **digital installation**.

## Features

### Experimental Effects
- **Scroll Hijacking** - Full page pinning with GSAP ScrollTrigger
- **3D Transforms** - Mouse-following 3D tilt effects
- **Glitch Effects** - Chromatic aberration, distortion, scanlines
- **Laser Beams** - Animated laser-inspired visual elements
- **Particle System** - Connected particle network with canvas
- **Custom Cursor** - Dual-layer magnetic cursor trail
- **Noise/Grain** - Film grain overlay effects
- **Scanlines** - CRT-inspired scanline animations
- **Velocity Animations** - Speed-based scroll animations
- **Letter-by-Letter** - Character-level text animations
- **Mask Reveals** - Clip-path animations
- **Parallax Layers** - Multiple parallax depths

### Performance Optimizations
- **Code Splitting** - Lazy loading of heavy components
- **GPU Acceleration** - will-change and transform3d
- **Optimized Particles** - Reduced count, efficient rendering
- **Throttled Events** - Debounced scroll/resize handlers
- **Font Preloading** - Critical font resources preloaded
- **Bundle Optimization** - Webpack code splitting
- **Production Build** - Minified, optimized for deployment

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production (optimized)
npm run build

# Analyze bundle size
npm run build:analyze
```

## Performance Tips

1. **Production Build**: Always use `npm run build` for deployment
2. **Lazy Loading**: Heavy components load on demand
3. **GPU Acceleration**: All animations use hardware acceleration
4. **Reduced Motion**: Respects `prefers-reduced-motion`

## Structure

```
src/
├── components/
│   ├── HeroExperimental.js      # 3D hero with scroll hijacking
│   ├── ServicesExperimental.js # Scroll-pinned service sections
│   ├── MaterialsExperimental.js # 3D card flips
│   ├── GalleryExperimental.js  # Distortion effects
│   ├── Manifesto.js            # Word grid with GSAP
│   ├── CTAExperimental.js       # Velocity animations
│   ├── ParticleSystem.js       # Canvas particles
│   ├── CursorTrail.js          # Custom cursor
│   └── ScrollProgress.js       # Progress indicator
├── utils/
│   └── performance.js          # Optimization helpers
└── App.js                      # Main app with lazy loading
```

## Technologies

- **React 19** - Latest React
- **Framer Motion** - Animation library
- **GSAP + ScrollTrigger** - Advanced scroll animations
- **Three.js** - 3D capabilities (available)
- **Canvas API** - Particle system

## Deployment

```bash
npm run build
# Deploy the 'build' folder to your hosting
```

The production build is optimized with:
- Code splitting
- Tree shaking
- Minification
- Source maps disabled
- Optimized chunks

## Notes

- This is a **concept site** meant to push boundaries
- Performance optimized but still experimental
- Some effects may be intense - that's intentional
- Mobile experience is simplified for performance
