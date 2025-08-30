// Clean and Simple JavaScript for LPM Lensa Media
// No modal, no complex interactions, just smooth navigation

document.addEventListener('DOMContentLoaded', function () {
    console.log('LPM Lensa Media - Landing Page Loaded (Clean Version)');

    // Initialize the application
    initApp();

    // Add smooth animations
    addSmoothAnimations();

    // Add loading screen animation
    addLoadingAnimation();
});

// Initialize the application
function initApp() {
    // Add logo fallback if image doesn't load
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('error', function () {
            this.style.display = 'none';
            const logoContainer = this.parentElement;
            const fallbackLogo = document.createElement('div');
            fallbackLogo.innerHTML = '<i class="fas fa-camera" style="font-size: 3rem; color: white;"></i>';
            fallbackLogo.style.cssText = `
                width: 120px;
                height: 120px;
                background: linear-gradient(45deg, #667eea, #764ba2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            `;
            logoContainer.appendChild(fallbackLogo);
        });
    }
}

// Add smooth animations for service buttons
function addSmoothAnimations() {
    const serviceButtons = document.querySelectorAll('.service-button');

    serviceButtons.forEach(button => {
        // Add click animation
        button.addEventListener('click', function (e) {
            // Simple click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Log for debugging (optional)
            const span = this.querySelector('span');
            if (span) {
                console.log(`Navigating to: ${this.getAttribute('href')} (${span.textContent})`);
            }
        });

        // Add hover effect
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });
}

// Add loading screen animation
function addLoadingAnimation() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        // Hide loading screen after page load
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 2000);
    }
}

// Add scroll effects
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.logo');

    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add scroll animations for sections
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('header, .services-section, .social-media-section, .footer').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Observe service buttons with stagger
    document.querySelectorAll('.service-button').forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(50px) scale(0.8)';
        button.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;

        const buttonObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }
            });
        }, observerOptions);

        buttonObserver.observe(button);
    });
}

// Add particle effects
function addParticleEffects() {
    const particles = document.querySelectorAll('.particle');

    particles.forEach((particle, index) => {
        // Randomize particle properties
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 4 + 4;
        const delay = Math.random() * 6;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        // Add random horizontal movement
        particle.style.left = `${Math.random() * 100}%`;
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function () {
    addScrollAnimations();
    addParticleEffects();
});

// Performance optimization
window.addEventListener('load', function () {
    // Remove loading animations after page load
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000);
});

// Add CSS for animations
function addCustomCSS() {
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .service-button:hover {
            box-shadow: 
                0 20px 40px rgba(0, 0, 0, 0.3),
                0 0 20px rgba(102, 126, 234, 0.5),
                0 0 40px rgba(118, 75, 162, 0.3);
        }
        
        .social-link:hover {
            box-shadow: 
                0 15px 35px rgba(0, 0, 0, 0.3),
                0 0 15px rgba(102, 126, 234, 0.5),
                0 0 30px rgba(118, 75, 162, 0.3);
        }
    `;
    document.head.appendChild(style);
}

// Initialize custom CSS
document.addEventListener('DOMContentLoaded', function () {
    addCustomCSS();
});
