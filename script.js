/* ═══════════════════════════════════════════════════════════════════
   PORTFOLIO JAVASCRIPT
   Handles: Navigation, Scroll Animations, Mobile Menu, Image Fallbacks
   ═══════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // ── ELEMENT REFERENCES ────────────────────────────────────────
    const nav = document.getElementById('top-nav');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileCloseBtn = document.getElementById('mobile-close-btn');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mobileMenu = document.getElementById('mobile-menu');
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const contactForm = document.getElementById('contact-form');

    // ── NAVIGATION: Scroll Effects ────────────────────────────────
    let lastScroll = 0;

    function handleScroll() {
        const scrollY = window.scrollY;

        // Add shadow when scrolled
        if (scrollY > 10) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Scroll-to-top button visibility
        if (scrollY > 400) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();

        lastScroll = scrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ── ACTIVE NAV LINK ───────────────────────────────────────────
    function updateActiveNavLink() {
        const sections = ['about', 'skills', 'research', 'projects', 'achievements', 'contact'];
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && section.offsetTop <= scrollPosition) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.dataset.section === sections[i]) {
                        link.classList.add('active');
                    }
                });
                break;
            }
        }
    }

    // ── MOBILE MENU ───────────────────────────────────────────────
    function openMobileMenu() {
        mobileMenu.classList.add('active');
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    mobileMenuBtn.addEventListener('click', openMobileMenu);
    mobileCloseBtn.addEventListener('click', closeMobileMenu);
    mobileOverlay.addEventListener('click', closeMobileMenu);

    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // ── SMOOTH SCROLL for Nav Links ───────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = nav.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ── SCROLL-TO-TOP ─────────────────────────────────────────────
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ── SCROLL ANIMATIONS (Intersection Observer) ─────────────────
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, parseInt(delay));
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));

    // ── IMAGE FALLBACK HANDLING ───────────────────────────────────
    // If profile image is missing, show a gradient fallback
    const heroImg = document.getElementById('hero-profile-img');
    if (heroImg) {
        heroImg.addEventListener('error', () => {
            heroImg.style.display = 'none';
            heroImg.parentElement.classList.add('no-image');
        });
    }

    // Project image fallbacks
    document.querySelectorAll('.project-image img').forEach(img => {
        img.addEventListener('error', () => {
            img.style.display = 'none';
            const parent = img.parentElement;
            parent.classList.add('no-image');

            // Add project name as text overlay
            const projectTitle = parent.parentElement.querySelector('.project-title');
            if (projectTitle) {
                parent.setAttribute('data-label', projectTitle.textContent);
                parent.style.setProperty('--fallback-text', `"${projectTitle.textContent}"`);
            }
        });
    });

    // ── CONTACT FORM ──────────────────────────────────────────────
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = document.getElementById('submit-btn');
            const originalText = submitBtn.innerHTML;

            // Show success state
            submitBtn.innerHTML = '<span class="material-symbols-outlined icon-sm">check_circle</span> Message Sent!';
            submitBtn.style.background = 'var(--secondary)';

            // Reset form
            contactForm.reset();

            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
            }, 3000);
        });
    }

    // ── KEYBOARD NAVIGATION ───────────────────────────────────────
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // ── INITIAL STATE ─────────────────────────────────────────────
    handleScroll();
});

// Global function for email copy
window.copyEmail = function(element) {
    const email = element.getAttribute('data-email');
    if (!email) return;
    
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
        const originalText = element.innerHTML;
        element.innerHTML = '<span class="material-symbols-outlined">check</span> Copied!';
        setTimeout(() => {
            element.innerHTML = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
};
