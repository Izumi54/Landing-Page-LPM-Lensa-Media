// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize the application
    initApp();
    
    // Add event listeners for service buttons
    addServiceButtonListeners();
    
    // Add smooth scrolling for anchor links
    addSmoothScrolling();
    
    // Add loading animation
    addLoadingAnimation();
    
    // Add scroll animations
    addScrollAnimations();
    
    // Add particle effects
    addParticleEffects();
    
    // Add cursor effects
    addCursorEffects();
});

// Initialize the application
function initApp() {
    console.log('LPM Lensa Media - Landing Page Loaded');
    
    // Add logo fallback if image doesn't load
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('error', function() {
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

// Add event listeners for service buttons
function addServiceButtonListeners() {
    const serviceButtons = document.querySelectorAll('.service-button');
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const buttonId = this.id;
            const buttonText = this.querySelector('span').textContent;
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Handle different button actions
            handleServiceButtonClick(buttonId, buttonText);
        });
        
        // Add hover sound effect (optional)
        button.addEventListener('mouseenter', function() {
            // You can add sound effects here if needed
            console.log('Hovering over:', this.querySelector('span').textContent);
        });
    });
}

// Handle service button clicks
function handleServiceButtonClick(buttonId, buttonText) {
    console.log(`Clicked: ${buttonText} (${buttonId})`);
    
    // Show loading state
    showLoadingState(buttonText);
    
    // Simulate loading time (replace with actual functionality)
    setTimeout(() => {
        hideLoadingState();
        
        // Handle different services
        switch(buttonId) {
            case 'website-berita':
                showServiceInfo('Website Berita', 'Akses berita terkini seputar kampus dan luar kampus');
                break;
            case 'majalah':
                showServiceInfo('Majalah', 'Majalah digital dan cetak LPM Lensa Media');
                break;
            case 'struktur-organisasi':
                showServiceInfo('Struktur Organisasi', 'Lihat struktur kepengurusan LPM Lensa Media');
                break;
            case 'media-partner':
                showServiceInfo('Media Partner', 'Partner media dan kolaborasi');
                break;
            case 'join-organisasi':
                showServiceInfo('Join Organisasi', 'Bergabung dengan LPM Lensa Media');
                break;
            case 'support-organisasi':
                showServiceInfo('Support Organisasi', 'Dukung dan sponsor LPM Lensa Media');
                break;
            default:
                console.log('Unknown service:', buttonId);
        }
    }, 1000);
}

// Show loading state
function showLoadingState(serviceName) {
    // Create loading overlay
    const overlay = document.createElement('div');
    overlay.id = 'loading-overlay';
    overlay.innerHTML = `
        <div class="loading-content">
            <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-3 text-light">Memuat ${serviceName}...</p>
        </div>
    `;
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        backdrop-filter: blur(5px);
    `;
    
    document.body.appendChild(overlay);
}

// Hide loading state
function hideLoadingState() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.remove();
        }, 300);
    }
}

// Show service information
function showServiceInfo(title, description) {
    // Create modal
    const modal = document.createElement('div');
    modal.id = 'service-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">${title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <p>${description}</p>
                <p class="text-muted">Fitur ini akan segera hadir!</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="closeServiceModal()">Tutup</button>
            </div>
        </div>
    `;
    
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        background: white;
        border-radius: 15px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        animation: modalSlideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(modal);
    
    // Add click outside to close
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeServiceModal();
        }
    });
}

// Close service modal
function closeServiceModal() {
    const modal = document.getElementById('service-modal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Add smooth scrolling
function addSmoothScrolling() {
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
}

// Add loading animation
function addLoadingAnimation() {
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(-50px) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .loading-content {
            text-align: center;
        }
        
        .spinner-border {
            width: 3rem;
            height: 3rem;
        }
    `;
    document.head.appendChild(style);
}

// Add scroll effects
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.logo');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeServiceModal();
    }
});

// Add touch support for mobile
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function() {
        // Add touch-specific interactions here
    });
}

// Performance optimization
window.addEventListener('load', function() {
    // Remove loading animations after page load
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000);
});

// Analytics tracking (example)
function trackEvent(eventName, eventData) {
    // You can integrate with Google Analytics or other tracking services here
    console.log('Event tracked:', eventName, eventData);
}

// Add scroll animations
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

// Add cursor effects
function addCursorEffects() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);
    
    const cursorTrail = document.createElement('div');
    cursorTrail.className = 'cursor-trail';
    cursorTrail.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: rgba(102, 126, 234, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        transition: all 0.2s ease;
    `;
    document.body.appendChild(cursorTrail);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        
        setTimeout(() => {
            cursorTrail.style.left = e.clientX - 4 + 'px';
            cursorTrail.style.top = e.clientY - 4 + 'px';
        }, 100);
    });
    
    // Add hover effects
document.querySelectorAll('a, button, .service-button, .social-link').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.background = 'linear-gradient(135deg, #f093fb, #f5576c)';
        
        // Add haptic feedback on mobile
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    });
    
    // Add click effects
    el.addEventListener('click', () => {
        // Add haptic feedback
        if ('vibrate' in navigator) {
            navigator.vibrate(100);
        }
        
        // Add click animation
        el.style.transform = 'scale(0.95)';
        setTimeout(() => {
            el.style.transform = '';
        }, 150);
    });
});
}

// Add typing effect for organization name
function addTypingEffect() {
    const orgName = document.querySelector('.organization-name');
    if (!orgName) return;
    
    const text = orgName.textContent;
    orgName.textContent = '';
    orgName.style.borderRight = '2px solid #667eea';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            orgName.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            orgName.style.borderRight = 'none';
        }
    };
    
    // Start typing after page load
    setTimeout(typeWriter, 1000);
}

// Enhanced service button interactions
function enhanceServiceButtons() {
    document.querySelectorAll('.service-button').forEach(button => {
        button.addEventListener('mouseenter', function() {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (rect.width / 2 - size / 2) + 'px';
            ripple.style.top = (rect.height / 2 - size / 2) + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
        
        button.addEventListener('click', function() {
            // Add confetti effect
            createConfetti(this);
        });
    });
}

// Create confetti effect
function createConfetti(element) {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4ecdc4', '#45b7d1'];
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
            pointer-events: none;
            z-index: 9999;
            border-radius: 2px;
        `;
        
        document.body.appendChild(confetti);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 10 + 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity - 5;
        
        let x = rect.left + rect.width / 2;
        let y = rect.top + rect.height / 2;
        let opacity = 1;
        
        const animate = () => {
            x += vx;
            y += vy;
            vy += 0.5; // gravity
            opacity -= 0.02;
            
            confetti.style.left = x + 'px';
            confetti.style.top = y + 'px';
            confetti.style.opacity = opacity;
            confetti.style.transform = `rotate(${Date.now() * 0.1}deg)`;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        };
        
        requestAnimationFrame(animate);
    }
}

// Add CSS for new animations
function addCustomCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
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
        
        .service-button:hover .service-button i {
            animation: bounce 0.6s ease-in-out;
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-10px);
            }
            60% {
                transform: translateY(-5px);
            }
        }
        
        /* 3D Tilt Effect */
        .service-button {
            transform-style: preserve-3d;
            perspective: 1000px;
        }
        
        .service-button.tilt {
            transition: transform 0.1s ease;
        }
        
        /* Magnetic effect */
        .magnetic {
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Glow effect on hover */
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

// Add 3D tilt effect
function add3DTiltEffect() {
    document.querySelectorAll('.service-button, .social-link').forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}

// Add magnetic effect
function addMagneticEffect() {
    document.querySelectorAll('.service-button, .social-link').forEach(element => {
        element.classList.add('magnetic');
        
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const distance = Math.sqrt(x * x + y * y);
            const maxDistance = Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2;
            
            if (distance < maxDistance) {
                const force = (maxDistance - distance) / maxDistance;
                const moveX = x * force * 0.1;
                const moveY = y * force * 0.1;
                
                this.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0px, 0px)';
        });
    });
}

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', function() {
    addTypingEffect();
    enhanceServiceButtons();
    addCustomCSS();
    add3DTiltEffect();
    addMagneticEffect();
    
    // Hide loading screen after page load
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 2000);
});

// Export functions for global access
window.closeServiceModal = closeServiceModal;
window.trackEvent = trackEvent;
