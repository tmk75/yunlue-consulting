// YUNLUE Website Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-section, .team-member, .phase-card, .stat-item, .location');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Rotating animation for the execution cycle
    const cycleCore = document.querySelector('.cycle-core');
    if (cycleCore) {
        let rotation = 0;
        setInterval(() => {
            rotation += 0.5;
            cycleCore.style.transform = `rotate(${rotation}deg)`;
        }, 100);
    }

    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.service-section, .team-member, .phase-card, .location, .stat-item');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Dynamic counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateCounter = (element, target) => {
        const increment = target / 100;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + (target >= 100 ? '+' : '');
        }, 20);
    };

    // Trigger counter animation when stats section is visible
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    const number = parseInt(text.replace(/\D/g, ''));
                    if (number) {
                        stat.textContent = '0';
                        animateCounter(stat, number);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-grid');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Parallax effect for header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Dynamic background color change based on scroll position
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = scrolled / maxScroll;
        
        // Change header background based on scroll
        const header = document.querySelector('.header');
        if (header && scrollPercent > 0.1) {
            header.style.background = `linear-gradient(135deg, 
                rgba(248, 250, 252, ${0.95 - scrollPercent * 0.2}) 0%, 
                rgba(226, 232, 240, ${0.95 - scrollPercent * 0.2}) 100%)`;
            header.style.backdropFilter = 'blur(10px)';
        }
    });

    // Interactive hover effects for circles in executive search
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.boxShadow = '0 10px 25px rgba(44, 82, 130, 0.4)';
        });
        
        circle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
    });

    // Typewriter effect for the tagline
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        setTimeout(typeWriter, 1000);
    }

    // Mobile menu toggle (if needed for future expansion)
    const createMobileMenu = () => {
        const header = document.querySelector('.header');
        if (window.innerWidth <= 768 && header) {
            // Add mobile-specific interactions here if needed
            header.classList.add('mobile-header');
        }
    };

    // Responsive adjustments
    window.addEventListener('resize', function() {
        createMobileMenu();
        
        // Adjust grid layouts on resize
        const servicesGrid = document.querySelector('.services-grid');
        if (servicesGrid && window.innerWidth <= 1024) {
            servicesGrid.style.gridTemplateColumns = '1fr';
        } else if (servicesGrid) {
            servicesGrid.style.gridTemplateColumns = '1fr 1fr';
        }
    });

    // Initialize mobile menu on load
    createMobileMenu();

    // Add loading animation
    const addLoadingAnimation = () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    };

    addLoadingAnimation();

    // Performance optimization: Debounce scroll events
    let scrollTimeout;
    const debouncedScroll = (func, delay) => {
        return function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(func, delay);
        };
    };

    // Apply debounced scroll to performance-heavy operations
    window.addEventListener('scroll', debouncedScroll(function() {
        // Heavy scroll operations here
    }, 16)); // ~60fps

    // Accessibility improvements
    const improveAccessibility = () => {
        // Add ARIA labels to interactive elements
        const interactiveElements = document.querySelectorAll('.service-section, .team-member, .phase-card');
        interactiveElements.forEach((element, index) => {
            element.setAttribute('tabindex', '0');
            element.setAttribute('role', 'article');
        });

        // Add keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', function() {
            document.body.classList.remove('keyboard-navigation');
        });
    };

    improveAccessibility();

    console.log('YUNLUE website loaded successfully with interactive features!');
});

// Utility functions
const utils = {
    // Smooth scroll to element
    scrollToElement: (selector) => {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    },

    // Get scroll percentage
    getScrollPercentage: () => {
        const scrolled = window.pageYOffset;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        return (scrolled / maxScroll) * 100;
    },

    // Check if element is in viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Export utils for potential future use
window.YunlueUtils = utils;

