/**
 * CREATIVE EFFECTS
 * Additional creative visual effects and enhancements
 */

(function() {
    'use strict';

    // ============================================
    // Particle Background
    // ============================================
    const particleBg = document.getElementById('particleBg');
    if (particleBg) {
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (15 + Math.random() * 15) + 's';
            particleBg.appendChild(particle);
        }
    }

    // ============================================
    // Enhanced Text Effects
    // ============================================
    const glowTexts = document.querySelectorAll('.glow-text');
    glowTexts.forEach(text => {
        // Add random glow intensity
        const intensity = 0.5 + Math.random() * 0.5;
        text.style.filter = `brightness(${1 + intensity * 0.3})`;
    });

    // ============================================
    // Interactive Hover Effects
    // ============================================
    const interactiveElements = document.querySelectorAll('.service-card, .material-item, .product-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.classList.add('hover-glow');
        });
        
        el.addEventListener('mouseleave', function() {
            this.classList.remove('hover-glow');
        });
    });

    // ============================================
    // Shimmer Effect on Load
    // ============================================
    const shimmerElements = document.querySelectorAll('.service-card, .material-item');
    shimmerElements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('shimmer');
            setTimeout(() => {
                el.classList.remove('shimmer');
            }, 2000);
        }, i * 100);
    });

    // ============================================
    // Parallax Scroll for Particles
    // ============================================
    if (typeof gsap !== 'undefined' && particleBg) {
        gsap.to('.particle', {
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true
            },
            y: (i, el) => {
                const speed = 0.5 + Math.random() * 0.5;
                return window.innerHeight * speed;
            },
            ease: 'none'
        });
    }

    // ============================================
    // Dynamic Glow Intensity
    // ============================================
    const glowElements = document.querySelectorAll('.title-accent, .manifesto-accent');
    if (typeof gsap !== 'undefined') {
        glowElements.forEach(el => {
            gsap.to(el, {
                filter: 'brightness(1.5)',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play reverse play reverse'
                },
                duration: 0.5
            });
        });
    }

    // Scan line effect removed - was causing red line issue

    // ============================================
    // Floating Animation for Icons
    // ============================================
    const icons = document.querySelectorAll('.service-icon, .value-icon');
    icons.forEach((icon, i) => {
        icon.classList.add('float-animation');
        icon.style.animationDelay = i * 0.2 + 's';
    });

    // ============================================
    // Enhanced Button Ripple
    // ============================================
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ============================================
    // Matrix Rain Effect (Optional, Subtle)
    // ============================================
    const matrixBg = document.createElement('div');
    matrixBg.className = 'matrix-bg';
    document.body.appendChild(matrixBg);

    console.log('%c✨ Creative Effects Loaded', 'font-size: 14px; font-weight: bold; color: #00ffff;');
    console.log('%cParticles, glows, and enhanced visual effects active.', 'font-size: 12px; color: #b0b0b0;');

})();

