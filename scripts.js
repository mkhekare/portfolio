// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Projects data
const projects = [
    {
        title: "Cloud Data Migration Framework",
        description: "Developed a comprehensive framework for migrating on-premises data infrastructure to AWS cloud with zero downtime.",
        tags: ["AWS", "Python", "ETL", "PostgreSQL"],
        github: "https://github.com/mkhekare/cloud-migration",
        demo: "#"
    },
    {
        title: "Automated Data Quality Dashboard",
        description: "Created an interactive Power BI dashboard that monitors data quality metrics in real-time across multiple data sources.",
        tags: ["Power BI", "SQL", "Python", "Data Quality"],
        github: "https://github.com/mkhekare/data-quality-dashboard",
        demo: "#"
    },
    {
        title: "ETL Optimization Toolkit",
        description: "Built a Python-based toolkit that analyzes and optimizes ETL workflows, reducing processing time by 45%.",
        tags: ["Python", "ETL", "Performance", "Pandas"],
        github: "https://github.com/mkhekare/etl-optimizer",
        demo: "#"
    },
    {
        title: "Predictive Maintenance System",
        description: "Implemented a machine learning model that predicts equipment failures with 92% accuracy.",
        tags: ["Machine Learning", "Python", "Azure", "IoT"],
        github: "https://github.com/mkhekare/predictive-maintenance",
        demo: "#"
    }
];

// Skills data
const skills = [
    { icon: "fab fa-python", name: "Python", description: "Advanced" },
    { icon: "fas fa-database", name: "SQL", description: "Expert" },
    { icon: "fab fa-aws", name: "AWS", description: "Intermediate" },
    { icon: "fab fa-microsoft", name: "Azure", description: "Intermediate" },
    { icon: "fas fa-cloud", name: "ETL", description: "Expert" },
    { icon: "fas fa-chart-line", name: "Power BI", description: "Advanced" },
    { icon: "fas fa-chart-bar", name: "Tableau", description: "Intermediate" },
    { icon: "fab fa-git-alt", name: "Git", description: "Advanced" },
    { icon: "fas fa-code-branch", name: "CI/CD", description: "Intermediate" },
    { icon: "fas fa-server", name: "Data Warehousing", description: "Advanced" },
    { icon: "fas fa-project-diagram", name: "Data Pipelines", description: "Expert" },
    { icon: "fas fa-robot", name: "Automation", description: "Advanced" }
];

// Load projects into DOM
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank"><i class="fab fa-github"></i> Code</a>
                    ${project.demo !== '#' ? `<a href="${project.demo}" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Load skills into DOM
function loadSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        
        skillItem.innerHTML = `
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
        `;
        
        skillsContainer.appendChild(skillItem);
    });
}

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadSkills();
    
    // Add animation to elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.project-card, .skill-item, .timeline-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.project-card, .skill-item, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});
