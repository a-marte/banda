// Particle Animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(255, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Add float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
        }
        25% {
            transform: translateY(-20px) translateX(10px);
        }
        50% {
            transform: translateY(-40px) translateX(-10px);
        }
        75% {
            transform: translateY(-20px) translateX(5px);
        }
    }
`;
document.head.appendChild(style);

// Initialize particles
createParticles();

// Smooth scroll for navigation links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(20, 20, 20, 0.98)';
    } else {
        navbar.style.background = 'rgba(20, 20, 20, 0.95)';
    }
});

// AOS (Animate On Scroll) Implementation
function animateOnScroll() {
    const elements = document.querySelectorAll('[data-aos]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => {
        observer.observe(el);
    });
}


// Concert cards hover effect with 3D tilt
const concertCards = document.querySelectorAll('.concert-card');

concertCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Social icons animation
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.1)';
    });

    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();

    // Add stagger animation delay to gallery items
    const galleryItemsAnim = document.querySelectorAll('.gallery-item');
    galleryItemsAnim.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Add stagger animation delay to concert cards
    const concertCardsAnim = document.querySelectorAll('.concert-card');
    concertCardsAnim.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Music section animation
const musicSection = document.querySelector('.music-section');
if (musicSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-music');
            }
        });
    }, { threshold: 0.3 });

    observer.observe(musicSection);
}

// Add floating animation to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.animation = 'buttonFloat 0.5s ease-in-out infinite';
    });

    button.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
    });
});

// Add button float animation
const buttonFloatStyle = document.createElement('style');
buttonFloatStyle.textContent = `
    @keyframes buttonFloat {
        0%, 100% {
            transform: translateY(-3px);
        }
        50% {
            transform: translateY(-8px);
        }
    }
`;
document.head.appendChild(buttonFloatStyle);

// Cursor trail effect
let cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.style.position = 'fixed';
    trail.style.width = '8px';
    trail.style.height = '8px';
    trail.style.borderRadius = '50%';
    trail.style.background = 'rgba(196, 110, 77, 0.6)';
    trail.style.pointerEvents = 'none';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    trail.style.zIndex = '9999';
    trail.style.transition = 'all 0.5s ease';

    document.body.appendChild(trail);
    cursorTrail.push(trail);

    if (cursorTrail.length > trailLength) {
        const oldTrail = cursorTrail.shift();
        setTimeout(() => {
            oldTrail.remove();
        }, 500);
    }

    setTimeout(() => {
        trail.style.opacity = '0';
        trail.style.transform = 'scale(0)';
    }, 10);
});

// Add glowing effect to section titles on scroll
const sectionTitles = document.querySelectorAll('.section-title');
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.textShadow = '0 0 20px rgba(196, 110, 77, 0.8)';
        }
    });
}, { threshold: 0.5 });

sectionTitles.forEach(title => {
    titleObserver.observe(title);
});

// Spotify widget pulse effect
const spotifyWidget = document.querySelector('.spotify-widget');
if (spotifyWidget) {
    setInterval(() => {
        spotifyWidget.style.boxShadow = '0 10px 60px rgba(29, 185, 84, 0.6)';
        setTimeout(() => {
            spotifyWidget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.5)';
        }, 500);
    }, 3000);
}

// Add typing effect to hero subtitle
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let i = 0;

    const typeWriter = () => {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };

    setTimeout(typeWriter, 1000);
}

// Add ripple effect on click
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.width = '10px';
    ripple.style.height = '10px';
    ripple.style.borderRadius = '50%';
    ripple.style.border = '2px solid rgba(196, 110, 77, 0.8)';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'rippleEffect 0.6s ease-out';
    ripple.style.zIndex = '9999';

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleEffect {
        0% {
            width: 10px;
            height: 10px;
            opacity: 1;
        }
        100% {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Console log for developers
console.log('%c¡Bienvenido a la página de A Marte! 🚀', 'color: #c46e4d; font-size: 24px; font-weight: bold;');
console.log('%cSíguenos en nuestras redes sociales', 'color: #c46e4d; font-size: 14px;');
