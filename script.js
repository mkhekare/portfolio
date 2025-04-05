// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Your Projects Data
const projects = [
    {
        title: "Livability Index for Indian Cities",
        description: "Developed a Livability Index for 100 Indian cities using R, Advanced Excel, and statistical modeling (linear regression, clustering) to deliver predictive insights for urban planning.",
        technologies: "R, Advanced Excel, Statistical Modeling",
        image: "https://via.placeholder.com/400x300?text=Livability+Index"
    },
    {
        title: "CRISP-DM on Iris & Titanic Datasets",
        description: "Applied CRISP-DM methodology on Iris and Titanic datasets to perform data wrangling, EDA, and feature engineering, implementing ML algorithms (regression, classification, decision trees, ensembles).",
        technologies: "Python, Scikit-learn, Pandas, CRISP-DM",
        image: "https://via.placeholder.com/400x300?text=CRISP-DM"
    },
    {
        title: "Analytics Case Competition (μ Lytics)",
        description: "Achieved 3rd place in Masters Union competition, demonstrating machine learning expertise via AI application and a Streamlit app.",
        technologies: "Python, Streamlit, Machine Learning",
        image: "https://via.placeholder.com/400x300?text=Analytics+Case"
    }
];

// Your Skills Data
const skills = [
    { name: "Python", icon: "fab fa-python" },
    { name: "SQL", icon: "fas fa-database" },
    { name: "R", icon: "fas fa-chart-line" },
    { name: "AWS", icon: "fab fa-aws" },
    { name: "Azure", icon: "fas fa-cloud" },
    { name: "ETL", icon: "fas fa-exchange-alt" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "Jenkins", icon: "fab fa-jenkins" },
    { name: "Informatica", icon: "fas fa-cogs" },
    { name: "Tableau", icon: "fas fa-chart-bar" },
    { name: "Power BI", icon: "fas fa-chart-pie" },
    { name: "Machine Learning", icon: "fas fa-brain" }
];

// Load Projects
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p class="tech-used"><strong>Technologies:</strong> ${project.technologies}</p>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Load Skills
function loadSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        
        skillItem.innerHTML = `
            <i class="${skill.icon}"></i>
            <p>${skill.name}</p>
        `;
        
        skillsContainer.appendChild(skillItem);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadSkills();
    
    // Add animation class to timeline items as they come into view
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
});
