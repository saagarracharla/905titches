/**
 * EXPERIMENTAL.JS — Creative Director Mode
 * Advanced animations, kinetic typography, magnetic effects, cursor
 */

(function() {
    'use strict';

    // Register GSAP plugins
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        if (typeof ScrollToPlugin !== 'undefined') {
            gsap.registerPlugin(ScrollToPlugin);
        }
    }

    // ============================================
    // Custom Cursor
    // ============================================
    const cursor = document.getElementById('customCursor');
    const cursorDot = cursor?.querySelector('.cursor-dot');
    const cursorOutline = cursor?.querySelector('.cursor-outline');
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    // Only enable cursor on desktop
    if (window.innerWidth > 768 && cursor) {
        cursor.classList.add('active');
        
        // Update cursor position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Smooth cursor follow
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            if (cursorDot) {
                cursorDot.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            }
            if (cursorOutline) {
                cursorOutline.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            }
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
        
        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .magnetic, .material-item');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
        
        // Click effect
        document.addEventListener('mousedown', () => cursor.classList.add('click'));
        document.addEventListener('mouseup', () => cursor.classList.remove('click'));
    }

    // ============================================
    // Kinetic Typography - Text Splitting
    // ============================================
    function splitText(element, type = 'words') {
        if (!element) return;
        
        const text = element.textContent;
        element.innerHTML = '';
        
        if (type === 'words') {
            const words = text.split(' ');
            words.forEach((word, i) => {
                const wordSpan = document.createElement('span');
                wordSpan.className = 'kinetic-word';
                wordSpan.textContent = word + (i < words.length - 1 ? ' ' : '');
                wordSpan.style.display = 'inline-block';
                element.appendChild(wordSpan);
            });
        } else if (type === 'chars') {
            const chars = text.split('');
            chars.forEach(char => {
                const charSpan = document.createElement('span');
                charSpan.className = 'kinetic-char';
                charSpan.textContent = char === ' ' ? '\u00A0' : char;
                charSpan.style.display = 'inline-block';
                element.appendChild(charSpan);
            });
        }
    }

    // Split hero title
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle && typeof gsap !== 'undefined') {
        const titleLines = heroTitle.querySelectorAll('.title-line');
        titleLines.forEach((line, i) => {
            splitText(line, 'chars');
            const chars = line.querySelectorAll('.kinetic-char');
            
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

    // Split hero subtitle
    const heroSubtitle = document.getElementById('heroSubtitle');
    if (heroSubtitle && typeof gsap !== 'undefined') {
        const words = heroSubtitle.querySelectorAll('.subtitle-word');
        gsap.fromTo(words,
            {
                y: 100,
                opacity: 0
            },
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

    // Animate CTA buttons
    const heroCTA = document.getElementById('heroCTA');
    if (heroCTA && typeof gsap !== 'undefined') {
        gsap.fromTo(heroCTA,
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: 1,
                ease: 'power3.out'
            }
        );
    }

    // ============================================
    // Manifesto Scrolling Animation
    // ============================================
    const manifestoLines = document.querySelectorAll('.manifesto-line');
    if (manifestoLines.length > 0 && typeof gsap !== 'undefined') {
        manifestoLines.forEach((line, i) => {
            const speed = parseFloat(line.dataset.speed) || 0.5;
            
            gsap.to(line, {
                scrollTrigger: {
                    trigger: line,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                },
                x: (i % 2 === 0 ? -100 : 100) * speed,
                opacity: 0.1,
                ease: 'none'
            });
            
            // Active state on scroll
            ScrollTrigger.create({
                trigger: line,
                start: 'top 80%',
                end: 'bottom 20%',
                onEnter: () => line.classList.add('active'),
                onLeave: () => line.classList.remove('active'),
                onEnterBack: () => line.classList.add('active'),
                onLeaveBack: () => line.classList.remove('active')
            });
        });
    }

    // ============================================
    // Immersive Service Sections
    // ============================================
    const serviceSections = document.querySelectorAll('.service-immersive');
    serviceSections.forEach((section, index) => {
        if (typeof gsap === 'undefined') return;
        
        const content = section.querySelector('.service-immersive-content');
        const visual = section.querySelector('.service-immersive-visual');
        const number = section.querySelector('.service-immersive-number');
        const title = section.querySelector('.service-immersive-title');
        const words = title?.querySelectorAll('.service-title-word');
        
        // Parallax effect
        gsap.to(visual, {
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            },
            y: 100,
            ease: 'none'
        });
        
        // Number animation
        if (number) {
            gsap.fromTo(number,
                {
                    opacity: 0,
                    scale: 0.5
                },
                {
                    opacity: 0.2,
                    scale: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    },
                    duration: 1,
                    ease: 'power3.out'
                }
            );
        }
        
        // Title word animation
        if (words) {
            words.forEach((word, i) => {
                splitText(word, 'chars');
                const chars = word.querySelectorAll('.kinetic-char');
                
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
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 70%',
                            toggleActions: 'play none none reverse'
                        },
                        duration: 0.8,
                        delay: i * 0.1,
                        stagger: 0.03,
                        ease: 'power3.out'
                    }
                );
            });
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
                        trigger: section,
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
    // Magnetic Buttons
    // ============================================
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const moveX = x * 0.2;
            const moveY = y * 0.2;
            
            if (typeof gsap !== 'undefined') {
                gsap.to(el, {
                    x: moveX,
                    y: moveY,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
        
        el.addEventListener('mouseleave', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(el, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: 'elastic.out(1, 0.5)'
                });
            }
        });
    });

    // ============================================
    // Materials Section Animation
    // ============================================
    const materialItems = document.querySelectorAll('.material-item');
    if (materialItems.length > 0 && typeof gsap !== 'undefined') {
        materialItems.forEach((item, i) => {
            gsap.fromTo(item,
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
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: 'power3.out'
                }
            );
            
            // 3D tilt on hover
            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = '';
            });
        });
    }

    // ============================================
    // Product Cards - Hover Distortion
    // ============================================
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            if (typeof gsap !== 'undefined') {
                gsap.to(card, {
                    rotationX: rotateX,
                    rotationY: rotateY,
                    transformPerspective: 1000,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(card, {
                    rotationX: 0,
                    rotationY: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            }
        });
    });

    // ============================================
    // Navigation Magnetic Effect
    // ============================================
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            
            if (typeof gsap !== 'undefined') {
                gsap.to(link, {
                    x: x * 0.3,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
        
        link.addEventListener('mouseleave', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(link, {
                    x: 0,
                    duration: 0.5,
                    ease: 'elastic.out(1, 0.5)'
                });
            }
        });
    });

    // ============================================
    // Scroll Progress Indicator
    // ============================================
    if (typeof gsap !== 'undefined') {
        gsap.to('.hero-scroll', {
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true
            },
            opacity: 0,
            y: -20
        });
    }

    // ============================================
    // Image Reveal on Scroll
    // ============================================
    const imageReveals = document.querySelectorAll('.image-reveal');
    if (imageReveals.length > 0 && typeof gsap !== 'undefined') {
        imageReveals.forEach(reveal => {
            gsap.to(reveal.querySelector('::before'), {
                scrollTrigger: {
                    trigger: reveal,
                    start: 'top 80%'
                },
                x: '100%',
                duration: 1,
                ease: 'power3.out'
            });
            
            ScrollTrigger.create({
                trigger: reveal,
                start: 'top 80%',
                onEnter: () => reveal.classList.add('revealed')
            });
        });
    }

    // ============================================
    // Performance: Reduce motion for low-end devices
    // ============================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
        if (typeof gsap !== 'undefined') {
            gsap.config({ force3D: false });
        }
    }

    // ============================================
    // Gallery Item Stagger Animation
    // ============================================
    const galleryItems = document.querySelectorAll('.gallery-item:not(.hidden)');
    if (galleryItems.length > 0 && typeof gsap !== 'undefined') {
        gsap.fromTo(galleryItems,
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
                    trigger: '.gallery-masonry',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                duration: 0.6,
                stagger: 0.05,
                ease: 'power3.out'
            }
        );
    }

    // ============================================
    // Page Load Animation Sequence
    // ============================================
    window.addEventListener('load', () => {
        if (typeof gsap !== 'undefined') {
            // Fade in body
            gsap.fromTo('body',
                { opacity: 0 },
                { opacity: 1, duration: 0.5, ease: 'power2.out' }
            );
        }
    });

    // ============================================
    // Smooth Scroll Enhancement
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || !href) return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                
                if (typeof gsap !== 'undefined' && typeof ScrollToPlugin !== 'undefined') {
                    gsap.to(window, {
                        scrollTo: {
                            y: offsetTop,
                            autoKill: false
                        },
                        duration: 1,
                        ease: 'power3.inOut'
                    });
                } else {
                    // Fallback to native smooth scroll
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    console.log('%c🎨 Experimental Mode Active', 'font-size: 16px; font-weight: bold; color: #ff1a1a;');
    console.log('%cKinetic typography, magnetic effects, and advanced animations enabled.', 'font-size: 12px; color: #b0b0b0;');
    console.log('%cGSAP ScrollTrigger: ' + (typeof ScrollTrigger !== 'undefined' ? '✓ Loaded' : '✗ Not loaded'), 'font-size: 12px; color: #b0b0b0;');

})();

