// ===== PORTFOLIO WEBSITE JAVASCRIPT =====

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLoadingScreen();
    init3DBackground();
    initMouseFollower();
    initNavigation();
    initSmoothScrolling();
    initAnimations();
    initSkillBars();
    initContactForm();
    initBackToTop();
    initMobileMenu();
    initStatsCounter();
    initProjects();
    initThemeToggle();
    initChatBot();
    initLocationWidget();
    initProjectFilter();
});

// ===== LOADING SCREEN =====
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingProgress = document.getElementById('loadingProgress');
    
    if (!loadingScreen) return;
    
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Hide loading screen after a short delay
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                document.body.style.overflow = 'visible';
            }, 500);
        }
        
        if (loadingProgress) {
            loadingProgress.style.width = progress + '%';
        }
    }, 100);
}

// ===== 3D BACKGROUND ANIMATION =====
function init3DBackground() {
    const canvas = document.getElementById('backgroundCanvas');
    if (!canvas) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        alpha: true,
        antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create Matrix-style particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
        // Position
        posArray[i] = (Math.random() - 0.5) * 10;
        posArray[i + 1] = (Math.random() - 0.5) * 10;
        posArray[i + 2] = (Math.random() - 0.5) * 10;
        
        // Color - Blue tech theme
        const colorIntensity = Math.random() * 0.5 + 0.5;
        colorArray[i] = 0.2 + colorIntensity * 0.3; // Blue
        colorArray[i + 1] = 0.6 + colorIntensity * 0.4; // Cyan
        colorArray[i + 2] = 0.8 + colorIntensity * 0.2; // Light blue
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Add tech elements overlay
    addTechElements();
    
    camera.position.z = 3;
    
    // Enhanced mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX / window.innerWidth - 0.5;
        mouseY = event.clientY / window.innerHeight - 0.5;
    });
    
    // Animation loop with enhanced effects
    function animate() {
        requestAnimationFrame(animate);
        
        // Smooth mouse tracking
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;
        
        // Matrix-style rotation
        particlesMesh.rotation.y += 0.002;
        particlesMesh.rotation.x += 0.001;
        
        // Mouse interaction with enhanced responsiveness
        particlesMesh.rotation.x += targetY * 0.002;
        particlesMesh.rotation.y += targetX * 0.002;
        
        // Particle movement
        const positions = particlesMesh.geometry.attributes.position.array;
        for (let i = 1; i < positions.length; i += 3) {
            positions[i] -= 0.01; // Falling effect
            if (positions[i] < -5) positions[i] = 5;
        }
        particlesMesh.geometry.attributes.position.needsUpdate = true;
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Add tech elements overlay
function addTechElements() {
    // Create geometric tech elements instead of emojis
    const techElementsContainer = document.createElement('div');
    techElementsContainer.className = 'tech-elements';
    
    // Create 6 geometric tech elements
    for (let i = 0; i < 6; i++) {
        const element = document.createElement('div');
        element.className = 'tech-element';
        element.style.animationDelay = `${i * 3}s`;
        techElementsContainer.appendChild(element);
    }
    
    document.body.appendChild(techElementsContainer);
    
    // Add wave animations
    addTechWaves();
    
    // Add graph lines
    addTechGraphs();
    
    // Add floating dots
    addTechDots();
    
    // Add floating tech particles
    addTechParticles();
}

// Add tech waves
function addTechWaves() {
    const wavesContainer = document.createElement('div');
    wavesContainer.className = 'tech-waves';
    
    for (let i = 0; i < 3; i++) {
        const wave = document.createElement('div');
        wave.className = 'wave';
        wavesContainer.appendChild(wave);
    }
    
    document.body.appendChild(wavesContainer);
}

// Add tech graphs
function addTechGraphs() {
    const graphsContainer = document.createElement('div');
    graphsContainer.className = 'tech-graphs';
    
    for (let i = 0; i < 3; i++) {
        const graphLine = document.createElement('div');
        graphLine.className = 'graph-line';
        graphsContainer.appendChild(graphLine);
    }
    
    document.body.appendChild(graphsContainer);
}

// Add tech dots
function addTechDots() {
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'tech-dots';
    
    for (let i = 0; i < 8; i++) {
        const dot = document.createElement('div');
        dot.className = 'tech-dot';
        dotsContainer.appendChild(dot);
    }
    
    document.body.appendChild(dotsContainer);
}

// Add floating tech particles
function addTechParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'floating-tech-particles';
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'tech-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// ===== MOUSE FOLLOWER =====
function initMouseFollower() {
    const mouseFollower = document.getElementById('mouseFollower');
    if (!mouseFollower) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let isMoving = false;
    let moveTimeout;
    let velocity = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Calculate velocity for dynamic effects
        const deltaX = mouseX - followerX;
        const deltaY = mouseY - followerY;
        velocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (!isMoving) {
            mouseFollower.classList.add('active');
            isMoving = true;
        }
        
        // Clear existing timeout
        clearTimeout(moveTimeout);
        
        // Set timeout to hide follower when mouse stops
        moveTimeout = setTimeout(() => {
            mouseFollower.classList.remove('active');
            isMoving = false;
        }, 150);
        
        // Add ripple effect on fast movement
        if (velocity > 10) {
            createRippleEffect(e.clientX, e.clientY);
        }
    });
    
    document.addEventListener('mouseleave', () => {
        mouseFollower.classList.remove('active');
        isMoving = false;
    });
    
    // Enhanced smooth following animation with tech effects
    function animateFollower() {
        // Smooth following with enhanced responsiveness
        followerX += (mouseX - followerX) * 0.12;
        followerY += (mouseY - followerY) * 0.12;
        
        mouseFollower.style.left = followerX + 'px';
        mouseFollower.style.top = followerY + 'px';
        
        // Dynamic scaling based on movement speed
        const scale = 1 + Math.min(velocity * 0.001, 0.3);
        mouseFollower.style.transform = `translate(-50%, -50%) scale(${scale})`;
        
        // Color intensity based on movement
        const intensity = Math.min(velocity * 0.01, 1);
        mouseFollower.style.filter = `brightness(${1 + intensity * 0.2})`;
        
        requestAnimationFrame(animateFollower);
    }
    
    animateFollower();
}

// Create ripple effect
function createRippleEffect(x, y) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        animation: rippleExpand 0.6s ease-out forwards;
    `;
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        if (document.body.contains(ripple)) {
            document.body.removeChild(ripple);
        }
    }, 600);
}

// Add CSS for ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleExpand {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ===== NAVIGATION =====
function initNavigation() {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Active navigation link
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== ANIMATIONS =====
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                
                // Add staggered animations for cards
                if (entry.target.classList.contains('service-card') || 
                    entry.target.classList.contains('skill-card') || 
                    entry.target.classList.contains('achievement-card')) {
                    entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
                }
                
                // Special animation for timeline items
                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.classList.add('animate');
                }
                
                // Animate section headers
                if (entry.target.classList.contains('section-header')) {
                    entry.target.classList.add('animate');
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .skill-card, .achievement-card, .timeline-item, .section-header');
    animateElements.forEach(el => observer.observe(el));
    
    // Add hover effects for interactive elements
    addHoverEffects();
}

// Add sophisticated hover effects
function addHoverEffects() {
    // Add magnetic effect to cards
    const cards = document.querySelectorAll('.service-card, .skill-card, .achievement-card, .project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });
    
    // Add glow effect to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// ===== SKILL BARS =====
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const level = progressBar.getAttribute('data-level');
                progressBar.style.width = level + '%';
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => skillObserver.observe(bar));
}

// ===== CONTACT FORM =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you! Your message has been sent successfully.', 'success');
        contactForm.reset();
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileClose = document.getElementById('mobileClose');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (!menuBtn || !mobileMenu) return;
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    mobileClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'visible';
    });
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'visible';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'visible';
        }
    });
}

// ===== STATS COUNTER =====
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.getAttribute('data-target'));
                animateCounter(target, finalValue);
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => statsObserver.observe(stat));
}

function animateCounter(element, finalValue) {
    let currentValue = 0;
    const increment = finalValue / 50;
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
            currentValue = finalValue;
            clearInterval(timer);
        }
        element.textContent = Math.floor(currentValue);
    }, 30);
}

// ===== PROJECTS =====
function initProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    const projects = [
        {
            title: 'Data Analyst Space',
            description: 'AI app for intuitive dataset exploration, analysis, and visualization.',
            tags: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
            link: 'https://huggingface.co/spaces/mkhekare/DataAnalyst',
            category: 'ai'
        },
        {
            title: 'WealthWise AI',
            description: 'Personalized financial advisor with AI-powered budgeting, investment tracking, and portfolio management.',
            tags: ['Python', 'Gemini API', 'Streamlit', 'Finance'],
            link: 'https://huggingface.co/spaces/mkhekare/investment_advisor',
            category: 'ai'
        },
        {
            title: 'AI-Powered Technical Data Lineage Generator',
            description: 'Visualize and analyze data lineage in codebases using AI to extract meaningful insights from code.',
            tags: ['Python', 'AI', 'Graph Database', 'LLM'],
            link: 'https://huggingface.co/spaces/mkhekare/Lineage',
            category: 'data'
        },
        {
            title: 'Data Strategy & Governance Roadmap Generator',
            description: 'Customized data strategy roadmaps with AI recommendations, cost estimation, and tool suggestions.',
            tags: ['Gemini AI', 'Python', 'Plotly', 'Enterprise'],
            link: 'https://huggingface.co/spaces/mkhekare/DataStrategyRoadmap',
            category: 'data'
        },
        {
            title: 'Bike Sharing Dataset Exploratory Analysis',
            description: 'Comprehensive analysis of bike sharing trends based on seasonal, temporal, and weather factors.',
            tags: ['Python', 'Pandas', 'Visualization', 'ML'],
            link: 'https://github.com/mkhekare/bikesharing_ml',
            category: 'data'
        },
        {
            title: 'RuPay Luxe Rewards Program',
            description: 'Interactive platform for exploring card tiers and eligibility based on financial profiles.',
            tags: ['Python', 'Web App', 'Finance', 'Algorithm'],
            link: 'https://github.com/mkhekare/iiml_npci',
            category: 'web'
        },
        {
            title: 'Investment Analysis Application',
            description: 'Evaluate investment opportunities with investability index calculation and fund allocation.',
            tags: ['Python', 'Finance', 'Analysis', 'Web'],
            link: 'https://github.com/mkhekare/midas_invest_iitd',
            category: 'data'
        },
        {
            title: 'Wine Quality Prediction',
            description: 'ML model predicting wine quality from chemical properties, addressing class imbalance issues.',
            tags: ['Python', 'Scikit-learn', 'ML', 'Classification'],
            link: 'https://github.com/mkhekare/wine_ml',
            category: 'ai'
        },
        {
            title: 'Titanic Survival Prediction',
            description: 'Predict passenger survival using machine learning on historical Titanic dataset.',
            tags: ['Python', 'ML', 'Pandas', 'Classification'],
            link: 'https://github.com/mkhekare/titanic_ml',
            category: 'ai'
        },
        {
            title: 'Topic Modeling with LDA on Reviews',
            description: 'Extract meaningful topics from text reviews using Latent Dirichlet Allocation.',
            tags: ['Python', 'NLP', 'LDA', 'Text Analysis'],
            link: 'https://github.com/mkhekare/web_social_media_analysis',
            category: 'ai'
        },
        {
            title: 'Predicting 10-Year Coronary Heart Disease Risk',
            description: 'Analyze and predict CHD risk using Framingham Heart Study data with feature engineering.',
            tags: ['Python', 'Pandas', 'ML', 'Healthcare'],
            link: 'https://github.com/mkhekare/heart_ml',
            category: 'ai'
        }
    ];
    
    renderProjects(projects, 'all');
    
    // Store projects globally for filtering
    window.allProjects = projects;
}

function renderProjects(projects, filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
    
    filtered.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectCard.innerHTML = `
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.link}" target="_blank">
                        <i class="fas fa-external-link-alt"></i> View Project
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            renderProjects(window.allProjects, filter);
        });
    });
}

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance optimization
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
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== PERFORMANCE OPTIMIZATIONS =====

// Optimize scroll events
const optimizedScrollHandler = throttle(() => {
    // Handle scroll-based animations
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Optimize resize events
const optimizedResizeHandler = debounce(() => {
    // Handle resize-based updates
}, 250);

window.addEventListener('resize', optimizedResizeHandler);

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    // You can add error reporting here
});

// ===== ACCESSIBILITY IMPROVEMENTS =====

// Keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'visible';
    }
});

// Focus management for modals
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// Initialize focus trapping for mobile menu
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenu) {
    trapFocus(mobileMenu);
}

// ===== THEME TOGGLE =====
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    if (currentTheme === 'dark-mode') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        
        // Add rotation animation
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

// ===== CHAT BOT =====
function initChatBot() {
    const chatToggle = document.getElementById('chatToggle');
    const chatWidget = document.getElementById('chatWidget');
    const chatClose = document.getElementById('chatClose');
    const chatSend = document.getElementById('chatSend');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const suggestionBtns = document.querySelectorAll('.suggestion-btn');
    
    if (!chatToggle || !chatWidget) return;
    
    // Chat data - 40 predefined Q&As
    const chatData = [
        {
            keywords: ['hello', 'hi', 'hey', 'greetings'],
            response: 'Hey there! 👋 I\'m Mayur\'s AI assistant. How can I help you today?',
            category: 'greeting'
        },
        {
            keywords: ['tech stack', 'technologies', 'tools', 'skills'],
            response: 'I work with:\n• Languages: Python, SQL, JavaScript\n• Cloud: AWS, Azure\n• Platforms: Informatica IICS, Databricks, Snowflake\n• Tools: Power BI, Tableau, Git\n• ML: Scikit-learn, TensorFlow, Hugging Face',
            category: 'skills'
        },
        {
            keywords: ['experience', 'work', 'background', 'career'],
            response: 'I have 3+ years in data engineering, business intelligence, and cloud platforms:\n• Infosys: Data Governance (2025-Present)\n• Cognizant: Data Engineering & Automation (2023-2024)\n• Cognizant: ETL Development (2021-2023)',
            category: 'experience'
        },
        {
            keywords: ['services', 'offer', 'help', 'do you do'],
            response: 'I provide:\n🔧 Data Engineering - Pipelines, ETL, cloud infrastructure\n📊 Business Intelligence - Dashboards, analytics\n🤖 AI/ML Solutions - Models, predictions, automation\n☁️ Cloud Migration - AWS, Azure implementation\n📈 Data Strategy - Governance, architecture consulting',
            category: 'services'
        },
        {
            keywords: ['contact', 'email', 'phone', 'reach', 'get in touch'],
            response: 'You can reach me at:\n📧 mkhekare@gmail.com\n📱 +91-7768924686\n💼 linkedin.com/in/mayur-khekare\n💻 github.com/mkhekare',
            category: 'contact'
        },
        {
            keywords: ['projects', 'work', 'portfolio', 'showcase'],
            response: 'I\'ve worked on awesome projects:\n✨ Data Analyst Space (AI dataset exploration)\n💰 WealthWise AI (Financial advisor)\n📊 Data Lineage Generator\n🏆 Data Strategy Roadmap Generator\n🧬 ML models (Wine, Titanic, Heart Disease)\nCheck the projects section for more!',
            category: 'projects'
        },
        {
            keywords: ['awards', 'achievements', 'recognition', 'accomplishments'],
            response: '🏆 Star Employee of the Quarter (Cognizant)\n🥇 Top 20 National Rank - Business & International Finance Olympiad, BSE Mumbai\n🎖️ 3rd Place - MuLytics Analytics Case Competition\n📜 AWS Cloud Practitioner & Azure Fundamentals Certified',
            category: 'achievements'
        },
        {
            keywords: ['education', 'degree', 'college', 'university'],
            response: 'My education:\n🎓 PGPM - Great Lakes Institute of Management, Gurgaon (2025)\n🎓 B.Tech Electronics & Communication - MIT-WPU, Pune (2021)\nCGPA: 8.42/10',
            category: 'education'
        },
        {
            keywords: ['location', 'where', 'city', 'based'],
            response: 'CHILLIN\' IN Bengaluru 🌆 Currently working at Infosys in Bangalore!',
            category: 'location'
        },
        {
            keywords: ['hobbies', 'interests', 'hobby', 'free time'],
            response: 'When I\'m not working, I:\n♟️ Play chess (Elo: 2000+ in bullet)\n🏸 Play badminton & table tennis\n📚 Read blogs & listen to podcasts\n💡 Tinker with side projects\n🎮 Explore new tech on the internet',
            category: 'hobbies'
        },
        {
            keywords: ['hire', 'job', 'opportunity', 'work with'],
            response: 'I\'m exploring roles in AI/ML and Product! If you\'re building something interesting in data platforms, AI systems, or decision tools, I\'d love to chat. Let me know! 🚀',
            category: 'opportunities'
        },
        {
            keywords: ['data engineering', 'pipelines', 'etl'],
            response: 'I build cloud-native pipelines using AWS, Python, and SQL. My focus:\n✅ Reliability & automation\n✅ Performance optimization\n✅ Scalability & maintainability\nEnsuring data reaches the right place in the right shape, every single time!',
            category: 'services'
        },
        {
            keywords: ['analytics', 'business intelligence', 'dashboards'],
            response: 'I translate business problems into structured analyses:\n📊 Pipeline KPIs\n👥 Customer metrics\n🧠 ML-driven insights\nBreaking down the noise to surface what actually matters for your business.',
            category: 'services'
        },
        {
            keywords: ['ai', 'machine learning', 'models', 'neural'],
            response: 'I work with:\n🤖 Language Models & embeddings\n📦 Vector databases\n🏷️ Classification models\n🔮 Prediction models\nBuilt end-to-end AI utilities: wrappers, Streamlit apps, Hugging Face deployments!',
            category: 'services'
        },
        {
            keywords: ['cloud', 'aws', 'azure', 'migration'],
            response: 'Cloud expertise:\n☁️ AWS: EC2, S3, Lambda, RDS, Redshift\n☁️ Azure: VMs, Functions, Synapse\n☁️ Large-scale migrations\n☁️ Metadata governance (Atlan, OpenMetadata)\n☁️ Infrastructure as Code',
            category: 'services'
        },
        {
            keywords: ['python', 'coding', 'programming'],
            response: 'Python is my go-to for:\n🐍 Data processing (Pandas, NumPy)\n🤖 ML (Scikit-learn, TensorFlow)\n⚙️ Automation & scripting\n📱 Web apps (Streamlit, Flask)\n✅ Also work with SQL, JavaScript, Java',
            category: 'skills'
        },
        {
            keywords: ['sql', 'database', 'query'],
            response: 'SQL expert! Specialized in:\n🗄️ Complex query optimization\n📊 Data modeling\n🔄 ETL workflows\n🎯 Performance tuning\n🔐 Data security & governance\nWorked with PostgreSQL, MySQL, Teradata, Vertica, Snowflake',
            category: 'skills'
        },
        {
            keywords: ['power bi', 'tableau', 'visualization'],
            response: 'Dashboard & visualization expertise:\n📊 Power BI: Advanced DAX, custom visuals\n📈 Tableau: Interactive dashboards\n🎨 Beautiful, insight-driven visualizations\n👥 Executive-ready reports\n🎯 KPI tracking & real-time monitoring',
            category: 'skills'
        },
        {
            keywords: ['automation', 'process', 'efficiency'],
            response: 'I\'ve built automation frameworks that delivered:\n🚀 170% efficiency gains\n✅ 30% fewer defects\n⏱️ Reduced manual processes by 70%\nStar Employee of the Quarter recognition at Cognizant! 🌟',
            category: 'achievements'
        },
        {
            keywords: ['what can you do', 'capabilities', 'features'],
            response: 'I can help with:\n🤔 Questions about Mayur & his work\n📋 Career & experience details\n💼 Services & expertise\n🏆 Achievements & awards\n🔗 Contact information\n📚 Projects & skills\n🎯 Opportunities & collaborations\nJust ask anything! 😊',
            category: 'info'
        },
        {
            keywords: ['time', 'what time', 'current time'],
            response: `The current time is ${new Date().toLocaleTimeString()}. What else can I help with?`,
            category: 'info'
        },
        {
            keywords: ['weather', 'temperature', 'bengaluru'],
            response: 'You can check real-time weather info for Bengaluru in the location widget at the bottom left! 🌤️',
            category: 'info'
        },
        {
            keywords: ['thank', 'thanks', 'awesome', 'great'],
            response: 'You\'re welcome! 😊 Feel free to ask if you have more questions!',
            category: 'greeting'
        },
        {
            keywords: ['bye', 'goodbye', 'see you', 'later'],
            response: 'Take care! Feel free to reach out anytime. Have a great day! 👋',
            category: 'greeting'
        },
        {
            keywords: ['impressed', 'cool', 'nice', 'amazing'],
            response: 'Thanks for the kind words! 🙌 If you\'d like to work together or discuss anything, don\'t hesitate to reach out!',
            category: 'greeting'
        },
        {
            keywords: ['help', 'assist', 'support'],
            response: 'Of course! I\'m here to help. Ask me about:\n✅ Mayur\'s skills & experience\n✅ Projects & portfolio\n✅ Services offered\n✅ Contact information\n✅ Or just say hi! 👋',
            category: 'info'
        },
        {
            keywords: ['case competition', 'competition', 'finalist'],
            response: '🏆 Multiple achievements:\n🥇 Finalist in competitions at: IIM Lucknow, IIT Delhi, IIT Kharagpur, IIT BHU\n🎖️ 3rd Place - MuLytics Analytics Case Competition\nStrong in strategy, analytics & problem-solving!',
            category: 'achievements'
        },
        {
            keywords: ['chess', 'game', 'sport', 'badminton'],
            response: '♟️ Chess enthusiast with 2000+ Elo in bullet chess!\n🏸 Also play badminton, table tennis, volleyball & football\n💪 Strategic thinking & competitive spirit in everything I do!',
            category: 'hobbies'
        },
        {
            keywords: ['governance', 'metadata', 'lineage'],
            response: 'Data governance expertise:\n📊 Metadata architecture\n🔍 Data lineage tracking\n🏷️ Data cataloging\n📋 Quality monitoring\n🔐 Compliance & regulations\nImplemented frameworks at Infosys & major clients',
            category: 'skills'
        },
        {
            keywords: ['hugging face', 'streamlit', 'deployment'],
            response: 'I\'ve deployed multiple apps:\n🤖 Data Analyst Space (Hugging Face)\n💰 WealthWise AI (Hugging Face)\n📊 Data Lineage Generator\n🛣️ Data Strategy Roadmap Generator\nAll with interactive UIs & real-time insights!',
            category: 'projects'
        },
        {
            keywords: ['informatics', 'iics', 'idmc', 'etl tool'],
            response: 'Informatica IICS expert:\n⚙️ Complex mapping & transformations\n🔄 CI/CD automation with Jenkins & GitHub\n📈 Processed 5M+ records daily\n✅ 99.9% deployment accuracy\nOptimized performance for enterprise clients',
            category: 'skills'
        },
        {
            keywords: ['cognizant', 'infosys', 'company', 'employer'],
            response: '💼 Current: Infosys - Data Governance (2025-present)\n💼 Previous: Cognizant - Data Engineering & ETL (2021-2024)\n🌐 Worked on BFSI, Insurance, and Enterprise clients\nCognizant Star Employee of the Quarter! ⭐',
            category: 'experience'
        },
        {
            keywords: ['startups', 'venture', 'scale-up'],
            response: 'I\'m especially interested in roles where I can:\n🚀 Build & scale data platforms\n🤖 Develop AI/ML products\n📊 Shape both product & strategy\n💡 Make visible business impact\nIf you\'re building something interesting, let\'s talk!',
            category: 'opportunities'
        }
    ];
    
    // Toggle chat widget
    chatToggle.addEventListener('click', () => {
        chatWidget.classList.toggle('active');
        
        if (chatWidget.classList.contains('active')) {
            chatInput.focus();
            chatToggle.querySelector('.chat-badge').style.display = 'none';
        }
    });
    
    // Close chat
    chatClose.addEventListener('click', () => {
        chatWidget.classList.remove('active');
    });
    
    // Send message
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        // Store last user message for follow-up prompts
        window.lastUserMessage = message;
        
        // Add user message
        addChatMessage(message, 'user');
        chatInput.value = '';
        
        // Hide suggestions after first message
        document.getElementById('chatSuggestions').style.display = 'none';
        
        // Get bot response
        setTimeout(() => {
            const response = getBotResponse(message, chatData);
            addChatMessage(response, 'bot');
        }, 300);
    }
    
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
    
    // Suggestion buttons
    suggestionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.getAttribute('data-question');
            chatInput.value = question;
            chatInput.focus();
        });
    });
    
    function addChatMessage(text, sender) {
        const messageEl = document.createElement('div');
        messageEl.className = `chat-message ${sender}-message`;
        messageEl.innerHTML = `<p>${text}</p>`;
        chatMessages.appendChild(messageEl);
        
        // Add redirect prompts for bot messages
        if (sender === 'bot') {
            setTimeout(() => {
                const promptsEl = document.createElement('div');
                promptsEl.className = 'chat-prompts';
                
                // Get related follow-up questions based on last user message
                const followUps = getFollowUpPrompts(window.lastUserMessage || '');
                
                if (followUps.length > 0) {
                    promptsEl.innerHTML = followUps
                        .slice(0, 3)
                        .map(q => `<button class="chat-prompt-btn" data-prompt="${q}">${q}</button>`)
                        .join('');
                    
                    chatMessages.appendChild(promptsEl);
                    
                    // Add click handlers to prompt buttons
                    promptsEl.querySelectorAll('.chat-prompt-btn').forEach(btn => {
                        btn.addEventListener('click', () => {
                            const prompt = btn.getAttribute('data-prompt');
                            chatInput.value = prompt;
                            chatInput.focus();
                        });
                    });
                }
            }, 100);
        }
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function getFollowUpPrompts(lastMessage) {
        const prompts = {
            'experience': ['What technologies do you use?', 'Tell me about your projects', 'What services do you offer?'],
            'skills': ['Show me your projects', 'What about work experience?', 'Can I hire you?'],
            'projects': ['Tell me more about your skills', 'What experiences do you have?', 'Any achievements?'],
            'services': ['What technologies do you use?', 'Can you work with AWS/Azure?', 'What\'s your experience?'],
            'achievements': ['Tell me about your projects', 'What services do you offer?', 'How can I contact you?'],
            'contact': ['What services do you provide?', 'Tell me about your experience', 'Show me your projects'],
            'education': ['What are your achievements?', 'Tell me about your skills', 'What\'s your experience?'],
            'location': ['What\'s your background?', 'Are you available for opportunities?', 'How can I contact you?'],
            'hobbies': ['Tell me about your professional side', 'What projects have you done?', 'Are you open to opportunities?'],
            'opportunities': ['What skills do you have?', 'Show me your projects', 'How can I contact you?']
        };
        
        const msgLower = lastMessage.toLowerCase();
        for (let category in prompts) {
            if (msgLower.includes(category.split('')[0])) {
                return prompts[category];
            }
        }
        
        // Default prompts
        return [
            'Tell me about your experience',
            'What projects have you done?',
            'How can I contact you?'
        ];
    }
    
    function getBotResponse(input, data) {
        const inputLower = input.toLowerCase();
        
        for (let item of data) {
            for (let keyword of item.keywords) {
                if (inputLower.includes(keyword)) {
                    return item.response;
                }
            }
        }
        
        // Default response for unknown questions
        const wittyResponses = [
            'Hmm, that\'s an interesting question! I might not have the answer right now, but Mayur will get back to you EoD (or maybe by next Monday 😄)',
            'That\'s a great question! I\'ll have to loop Mayur in on this one. He\'ll reach back soon! 🚀',
            'Not sure about that one! But Mayur probably is. He\'ll get back to you ASAP! ⚡',
            'Ooh, you\'re testing my limits! 😅 Let me connect you with Mayur directly for this. EoD response guaranteed!',
            'I don\'t have the juice on that one, but Mayur definitely does! Will circle back soon! 💪'
        ];
        
        return wittyResponses[Math.floor(Math.random() * wittyResponses.length)];
    }
}

// ===== LOCATION WIDGET =====
function initLocationWidget() {
    const locationWidget = document.getElementById('locationWidget');
    if (!locationWidget) return;
    
    // Make widget draggable
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    
    // Convert pixel values to consider any existing transforms
    let xOffset = 0;
    let yOffset = 0;
    
    locationWidget.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
    
    function dragStart(e) {
        // Only drag from header area
        if (e.target.closest('.location-header')) {
            isDragging = true;
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
            locationWidget.style.cursor = 'grabbing';
            locationWidget.style.zIndex = '10000';
        }
    }
    
    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            
            xOffset = currentX;
            yOffset = currentY;
            
            locationWidget.style.transform = `translate(${currentX}px, ${currentY}px)`;
        }
    }
    
    function dragEnd() {
        if (isDragging) {
            isDragging = false;
            locationWidget.style.cursor = 'grab';
            locationWidget.style.zIndex = '999';
        }
    }
    
    // Update time
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        });
        document.getElementById('currentTime').textContent = timeString;
    }
    
    // Get weather data (using OpenWeatherMap API - requires key or fallback)
    function getWeather() {
        // Note: Using mock data for demo. In production, use actual weather API
        // Example: OpenWeatherMap API or similar
        
        const mockWeather = {
            temp: Math.floor(Math.random() * (35 - 22) + 22), // Random between 22-35°C
            humidity: Math.floor(Math.random() * (80 - 40) + 40), // Random between 40-80%
            windSpeed: Math.floor(Math.random() * (30 - 5) + 5) // Random between 5-30 km/h
        };
        
        document.getElementById('temperature').textContent = mockWeather.temp;
        document.getElementById('humidity').textContent = mockWeather.humidity;
        document.getElementById('windSpeed').textContent = mockWeather.windSpeed;
    }
    
    // Initialize
    updateTime();
    getWeather();
    
    // Update every minute
    setInterval(updateTime, 60000);
    
    // Update weather every 10 minutes (in production, use API)
    setInterval(getWeather, 600000);
}
