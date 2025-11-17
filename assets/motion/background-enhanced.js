// ===== ADVANCED MOTION GRAPHICS & ANIMATIONS =====

// Initialize all motion graphics on page load
document.addEventListener('DOMContentLoaded', () => {
    initAdvancedParticles();
    initScrollAnimations();
    initInteractiveElements();
    initMouseGlow();
});

// ===== ADVANCED PARTICLE SYSTEM =====
function initAdvancedParticles() {
    // Create particle canvas
    const particleCanvas = document.createElement('canvas');
    particleCanvas.id = 'particleCanvas';
    particleCanvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        pointer-events: none;
        opacity: 0.6;
    `;
    document.body.insertBefore(particleCanvas, document.body.firstChild);

    const ctx = particleCanvas.getContext('2d');
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * particleCanvas.width;
            this.y = Math.random() * particleCanvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 1;
            this.speedY = (Math.random() - 0.5) * 1;
            this.opacity = Math.random() * 0.5 + 0.3;
            this.hue = Math.random() * 60 + 180;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Wrap around screen
            if (this.x > particleCanvas.width) this.x = 0;
            if (this.x < 0) this.x = particleCanvas.width;
            if (this.y > particleCanvas.height) this.y = 0;
            if (this.y < 0) this.y = particleCanvas.height;
        }

        draw() {
            ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create particles
    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Animation loop
    function animateParticles() {
        ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

        // Draw connections between nearby particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 150)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();

    // Handle window resize
    window.addEventListener('resize', () => {
        particleCanvas.width = window.innerWidth;
        particleCanvas.height = window.innerHeight;
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                // Animate titles
                if (element.classList.contains('section-title')) {
                    animateTitle(element);
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-title')
        .forEach(el => observer.observe(el));
}

// Animate title with character-by-character effect
function animateTitle(element) {
    const text = element.textContent;
    element.textContent = '';

    const chars = text.split('');
    chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.cssText = `
            display: inline-block;
            animation: charIn 0.05s ease-out ${index * 0.05}s both;
        `;
        element.appendChild(span);
    });

    const style = document.createElement('style');
    if (!document.getElementById('charInAnimation')) {
        style.id = 'charInAnimation';
        style.textContent = `
            @keyframes charIn {
                0% {
                    opacity: 0;
                    transform: translateY(20px);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== INTERACTIVE ELEMENTS =====
function initInteractiveElements() {
    const icons = document.querySelectorAll('.service-icon, .skill-icon, .achievement-icon');
    icons.forEach((icon, index) => {
        const delay = index * 0.1;
        icon.style.animation = `iconFloat 3s ease-in-out ${delay}s infinite`;
    });

    const style = document.createElement('style');
    if (!document.getElementById('iconFloatAnimation')) {
        style.id = 'iconFloatAnimation';
        style.textContent = `
            @keyframes iconFloat {
                0%, 100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-10px);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== MOUSE GLOW EFFECT =====
function initMouseGlow() {
    const glow = document.createElement('div');
    glow.id = 'mouseGlow';
    glow.style.cssText = `
        position: fixed;
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        display: none;
        filter: blur(60px);
    `;
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
        glow.style.display = 'block';
        glow.style.left = (e.clientX - 200) + 'px';
        glow.style.top = (e.clientY - 200) + 'px';
    });

    document.addEventListener('mouseleave', () => {
        glow.style.display = 'none';
    });
}

console.log('✨ Advanced motion graphics initialized!');
