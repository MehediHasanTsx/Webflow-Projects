/* =============================================
   JD Portfolio - JavaScript
   Vanilla JS for all interactions
   ============================================= */

// =============================================
// DOM Elements
// =============================================
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const heroVisual = document.getElementById('hero-visual');
const starsCanvas = document.getElementById('stars-canvas');
const particlesContainer = document.getElementById('particles');
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalBackdrop = modal?.querySelector('.modal-backdrop');
const contactForm = document.getElementById('contact-form');

// =============================================
// Project Data for Modal
// =============================================
const projectsData = {
    moonstone: {
        title: 'Moonstone Dental Centre',
        problem: 'Moonstone Dental Centre needed a modern, responsive Webflow website that would attract new patients, showcase their services, and provide an easy booking experience. This was my first Webflow project.',
        solution: [
            'Designed a calming, professional aesthetic with a soothing dental-focused color palette',
            'Built a fully responsive design optimized for all devices',
            'Implemented SEO best practices to improve local search visibility',
            'Created an intuitive navigation and booking flow',
            'Optimized performance and page load speeds for better conversions'
        ],
        tech: ['Webflow', 'HTML', 'CSS', 'JavaScript', 'SEO'],
        results: [
            { number: '95%', label: 'Performance Score' },
            { number: 'Fast', label: 'Load Time' },
            { number: '100%', label: 'Responsive' }
        ],
        link: 'https://www.moonstonedental.com/'
    },
    gotzky: {
        title: 'Gotzky Immobilien',
        problem: 'A German real estate company needed a modern, professional website with a clean UI and responsive layout to showcase their property listings and services.',
        solution: [
            'Developed a modern UI design with elegant typography',
            'Implemented Webflow CMS for easy property management',
            'Created smooth animations and scroll interactions',
            'Built a responsive layout for all device sizes',
            'Optimized for SEO to improve search rankings'
        ],
        tech: ['Webflow', 'CMS', 'Animations', 'SEO', 'HTML', 'CSS', 'JavaScript'],
        results: [
            { number: '98', label: 'Lighthouse Score' },
            { number: 'Modern', label: 'UI Design' },
            { number: 'CMS', label: 'Enabled' }
        ],
        link: 'https://gotzky-immobilien.webflow.io/'
    },
    vrmd: {
        title: 'VRMD',
        problem: 'VRMD needed a performance-focused website to showcase their advanced healthcare solutions and digital medical innovation with a modern UI and responsive design.',
        solution: [
            'Created a cutting-edge design reflecting medical innovation',
            'Implemented Webflow CMS for content management',
            'Built dynamic animations to enhance user engagement',
            'Developed a responsive design for healthcare professionals',
            'Optimized for fast performance and SEO'
        ],
        tech: ['Webflow', 'CMS', 'Animations', 'SEO', 'HTML', 'CSS', 'JavaScript'],
        results: [
            { number: '96%', label: 'Performance' },
            { number: 'Modern', label: 'Healthcare UI' },
            { number: 'SEO', label: 'Optimized' }
        ],
        link: 'https://www.vrmd.com'
    },
    finova: {
        title: 'Finova Pay',
        problem: 'A fintech company needed a Webflow ecommerce website template with clean design and responsive layout to showcase their payment solutions.',
        solution: [
            'Built using a professional Webflow template as base',
            'Customized design with brand colors and styling',
            'Implemented smooth animations throughout the site',
            'Optimized for SEO and conversions',
            'Created a responsive layout for all devices'
        ],
        tech: ['Webflow', 'Animations', 'SEO'],
        results: [
            { number: 'Clean', label: 'Design' },
            { number: 'Fast', label: 'Performance' },
            { number: '100%', label: 'Responsive' }
        ],
        link: 'https://finova-pay.webflow.io/'
    },
    socialsplash: {
        title: 'Social Splash',
        problem: 'Social Splash needed a paid ads landing page for eCommerce brands with a modern, responsive UI, optimized for conversions and ROAS growth.',
        solution: [
            'Designed a high-converting landing page structure',
            'Created attention-grabbing hero section with clear CTA',
            'Implemented smooth animations for engagement',
            'Built SEO-optimized content sections',
            'Optimized for mobile-first conversion'
        ],
        tech: ['Webflow', 'Animations', 'SEO', 'HTML', 'CSS', 'JavaScript'],
        results: [
            { number: 'High', label: 'Conversion Focus' },
            { number: 'ROAS', label: 'Optimized' },
            { number: 'Mobile', label: 'First Design' }
        ],
        link: 'https://www.social-splash.com/'
    },
    areusaved: {
        title: 'Areusaved',
        problem: 'Areusaved needed a faith-based, AI-enhanced Bible study website designed to help users explore Christian salvation and biblical truth through interactive content and storytelling.',
        solution: [
            'Built a modern, responsive UI with engaging user experience',
            'Implemented Webflow CMS for structured content flow',
            'Created smooth animations and interactions',
            'Developed interactive content sections for storytelling',
            'Optimized for SEO and performance'
        ],
        tech: ['Webflow', 'CMS', 'Animations', 'SEO', 'HTML', 'CSS', 'JavaScript'],
        results: [
            { number: 'AI', label: 'Enhanced' },
            { number: 'CMS', label: 'Powered' },
            { number: 'Interactive', label: 'Content' }
        ],
        link: 'https://areusaved.webflow.io/'
    }
};


// =============================================
// Initialization
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    initStarryBackground();
    initParticles();
    initNavbar();
    initMobileMenu();
    initParallax();
    initSmoothScroll();
    initProjectModals();
    initContactForm();
    initScrollAnimations();
});

// =============================================
// Starry Background
// =============================================
function initStarryBackground() {
    if (!starsCanvas) return;

    const ctx = starsCanvas.getContext('2d');
    let animationFrame;
    let stars = [];

    // Resize canvas to window size
    function resizeCanvas() {
        starsCanvas.width = window.innerWidth;
        starsCanvas.height = window.innerHeight;
        createStars();
    }

    // Create stars array
    function createStars() {
        stars = [];
        const starCount = Math.floor((starsCanvas.width * starsCanvas.height) / 8000);

        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * starsCanvas.width,
                y: Math.random() * starsCanvas.height,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.8 + 0.2,
                twinkleSpeed: Math.random() * 0.02 + 0.005,
                twinklePhase: Math.random() * Math.PI * 2
            });
        }
    }

    // Draw stars
    function drawStars() {
        ctx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);

        stars.forEach(star => {
            // Twinkle effect
            star.twinklePhase += star.twinkleSpeed;
            const twinkle = (Math.sin(star.twinklePhase) + 1) / 2;
            const currentOpacity = star.opacity * (0.5 + twinkle * 0.5);

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
            ctx.fill();

            // Add glow to larger stars
            if (star.radius > 1) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
                const gradient = ctx.createRadialGradient(
                    star.x, star.y, 0,
                    star.x, star.y, star.radius * 2
                );
                gradient.addColorStop(0, `rgba(99, 102, 241, ${currentOpacity * 0.3})`);
                gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
                ctx.fillStyle = gradient;
                ctx.fill();
            }
        });

        animationFrame = requestAnimationFrame(drawStars);
    }

    // Initialize
    resizeCanvas();
    drawStars();

    // Handle resize
    window.addEventListener('resize', () => {
        resizeCanvas();
    });
}

// =============================================
// Floating Particles
// =============================================
function initParticles() {
    if (!particlesContainer) return;

    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        createParticle(i);
    }
}

function createParticle(index) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random properties
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const delay = index * 0.3;
    const duration = Math.random() * 5 + 6;

    // Apply styles
    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
    `;

    // Random color
    const colors = [
        'rgba(99, 102, 241, 0.6)',
        'rgba(168, 85, 247, 0.6)',
        'rgba(34, 211, 238, 0.6)',
        'rgba(244, 114, 182, 0.6)'
    ];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    particlesContainer.appendChild(particle);
}

// =============================================
// Navbar Scroll Effect
// =============================================
function initNavbar() {
    if (!navbar) return;

    let lastScroll = 0;

    function handleScroll() {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link based on section
        updateActiveNavLink();

        lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = 'home';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// =============================================
// Mobile Menu
// =============================================
function initMobileMenu() {
    if (!mobileMenuBtn || !mobileMenu) return;

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// =============================================
// Parallax Effect for Hero Visual
// =============================================
function initParallax() {
    if (!heroVisual) return;

    const floatingCards = heroVisual.querySelectorAll('.floating-card');
    const techBadges = heroVisual.querySelectorAll('.tech-badge');

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // Smooth animation loop
    function animate() {
        // Ease towards target position
        currentX += (mouseX - currentX) * 0.05;
        currentY += (mouseY - currentY) * 0.05;

        // Apply transforms to floating cards
        floatingCards.forEach(card => {
            const speed = parseFloat(card.dataset.speed) || 0.05;
            const x = currentX * 50 * speed;
            const y = currentY * 30 * speed;
            const rotateX = currentY * 5;
            const rotateY = -currentX * 5;

            card.style.transform = `translate(${x}px, ${y}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        // Apply transforms to tech badges
        techBadges.forEach(badge => {
            const speed = parseFloat(badge.dataset.speed) || 0.03;
            const x = currentX * 30 * speed;
            const y = currentY * 20 * speed;

            badge.style.transform = `translate(${x}px, ${y}px)`;
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// =============================================
// Smooth Scrolling
// =============================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const navHeight = navbar?.offsetHeight || 80;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =============================================
// Project Modals
// =============================================
function initProjectModals() {
    const viewButtons = document.querySelectorAll('.view-project-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Open modal on button click
    viewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const projectKey = btn.dataset.project;
            openModal(projectKey);
        });
    });

    // Open modal on card click
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectKey = card.dataset.project;
            openModal(projectKey);
        });
    });

    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', closeModal);
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(projectKey) {
    const project = projectsData[projectKey];
    if (!project || !modal) return;

    // Populate modal content
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-problem').textContent = project.problem;

    // Populate solution list
    const solutionList = document.getElementById('modal-solution');
    solutionList.innerHTML = project.solution
        .map(item => `<li>${item}</li>`)
        .join('');

    // Populate tech badges
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = project.tech
        .map(tech => `<span class="modal-tech-badge">${tech}</span>`)
        .join('');

    // Populate results
    const resultsContainer = document.getElementById('modal-results');
    resultsContainer.innerHTML = project.results
        .map(result => `
            <div class="modal-result">
                <span class="result-number">${result.number}</span>
                <span class="result-label">${result.label}</span>
            </div>
        `)
        .join('');

    // Set link
    document.getElementById('modal-link').href = project.link;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// =============================================
// Contact Form
// =============================================
function initContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = `
            <span>Sending...</span>
            <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
                <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round">
                    <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
                </path>
            </svg>
        `;
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual form handling)
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show success state
        submitBtn.innerHTML = `
            <span>Message Sent!</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
            </svg>
        `;
        submitBtn.style.background = 'linear-gradient(135deg, #34d399 0%, #059669 100%)';

        // Reset form
        contactForm.reset();

        // Reset button after delay
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 3000);
    });

    // Add focus effects to form inputs
    const inputs = contactForm.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

// =============================================
// Scroll Animations
// =============================================
function initScrollAnimations() {
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    // Observe elements
    const animateElements = document.querySelectorAll(
        '.section-header, .project-card, .contact-item, .contact-form'
    );

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add stagger to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
}

// Add CSS class for scroll animations
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    </style>
`);

// =============================================
// Utility Functions
// =============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// =============================================
// Performance Optimization
// =============================================

// Lazy load images when they come into view
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// =============================================
// Export for potential testing
// =============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        projectsData,
        openModal,
        closeModal,
        debounce,
        throttle,
        isInViewport
    };
}
