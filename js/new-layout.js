/**
 * NEW LAYOUT JS
 * Animations and interactions for the new layout
 */

(function() {
    'use strict';

    // Register GSAP plugins
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // ============================================
    // Hero Animations
    // ============================================
    const heroTitle = document.querySelector('.hero-title-new');
    if (heroTitle && typeof gsap !== 'undefined') {
        const titleWords = heroTitle.querySelectorAll('.title-word');
        
        titleWords.forEach((word, i) => {
            splitTextToChars(word);
            const chars = word.querySelectorAll('.char');
            
            gsap.fromTo(chars,
                {
                    y: 100,
                    opacity: 0,
                    rotationX: -90
                },
                {
                    y: 0,
                    opacity: 1,
                    rotationX: 0,
                    duration: 1,
                    delay: i * 0.2,
                    stagger: 0.02,
                    ease: 'power3.out'
                }
            );
        });
    }

    // Split text to characters
    function splitTextToChars(element) {
        const text = element.textContent;
        element.innerHTML = '';
        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.className = 'char';
            span.style.display = 'inline-block';
            span.textContent = char === ' ' ? '\u00A0' : char;
            element.appendChild(span);
        });
    }

    // Hero tagline animation
    const heroTagline = document.querySelector('.hero-tagline');
    if (heroTagline && typeof gsap !== 'undefined') {
        const words = heroTagline.querySelectorAll('span');
        gsap.fromTo(words,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: 0.6,
                stagger: 0.1,
                ease: 'power3.out'
            }
        );
    }

    // Manifesto section removed

    // ============================================
    // Service Cards Animation
    // ============================================
    const serviceCards = document.querySelectorAll('.service-card-new');
    serviceCards.forEach((card, index) => {
        if (typeof gsap === 'undefined') return;
        
        const content = card.querySelector('.service-card-content');
        const visual = card.querySelector('.service-visual-new');
        const number = card.querySelector('.service-number-new');
        
        // Parallax effect
        gsap.to(visual, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            },
            y: index % 2 === 0 ? 100 : -100,
            ease: 'none'
        });
        
        // Number animation
        if (number) {
            gsap.fromTo(number,
                { opacity: 0, scale: 0.5 },
                {
                    opacity: 0.15,
                    scale: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    },
                    duration: 1,
                    ease: 'power3.out'
                }
            );
        }
        
        // Content fade in
        if (content) {
            gsap.fromTo(content,
                {
                    opacity: 0,
                    x: index % 2 === 0 ? -50 : 50
                },
                {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 70%',
                        toggleActions: 'play none none reverse'
                    },
                    duration: 1,
                    ease: 'power3.out'
                }
            );
        }
    });

    // ============================================
    // Materials Grid Animation
    // ============================================
    const materialCards = document.querySelectorAll('.material-card-new');
    if (materialCards.length > 0 && typeof gsap !== 'undefined') {
        materialCards.forEach((card, i) => {
            gsap.fromTo(card,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: 'power3.out'
                }
            );
        });
    }

    // ============================================
    // Gallery Grid Animation
    // ============================================
    const galleryItems = document.querySelectorAll('.gallery-item-new');
    if (galleryItems.length > 0 && typeof gsap !== 'undefined') {
        gsap.fromTo(galleryItems,
            {
                opacity: 0,
                scale: 0.8
            },
            {
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: '.gallery-grid-new',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out'
            }
        );
    }

    // ============================================
    // Navbar Scroll Effect
    // ============================================
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });

    // ============================================
    // Mobile Menu Toggle
    // ============================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-link-new').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    console.log('%c🎨 New Layout Active', 'font-size: 16px; font-weight: bold; color: #ff1a1a;');
    console.log('%cAsymmetric, editorial-style layout with advanced animations.', 'font-size: 12px; color: #b0b0b0;');

})();

