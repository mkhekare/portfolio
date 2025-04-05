// DOM Content Loaded
 document.addEventListener("DOMContentLoaded", () => {
    setYear();
    initSmoothScroll();
    fetchGitHubProjects();
    renderSkills();
});

// Update Footer Year
function setYear() {
    document.getElementById("year").textContent = new Date().getFullYear();
}

// Smooth Scrolling
function initSmoothScroll() {
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
}

// Fetch GitHub Projects
async function fetchGitHubProjects() {
    const response = await fetch("https://api.github.com/users/mkhekare/repos");
    const repos = await response.json();
    displayProjects(repos);
}

// Display Projects Dynamically
function displayProjects(repos) {
    const container = document.querySelector(".projects-grid");
    container.innerHTML = '';
    repos.forEach(repo => {
        const project = document.createElement("div");
        project.className = "project-card";
        project.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description provided.'}</p>
            <a href="${repo.html_url}" target="_blank" class="btn btn-secondary">View on GitHub</a>
        `;
        container.appendChild(project);
    });
}

// Skills Data
const skills = [
    { name: "Python", icon: "fab fa-python" },
    { name: "SQL", icon: "fas fa-database" },
    { name: "AWS", icon: "fab fa-aws" },
    { name: "Azure", icon: "fas fa-cloud" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "Jenkins", icon: "fab fa-jenkins" },
    { name: "Informatica", icon: "fas fa-cogs" },
    { name: "Tableau", icon: "fas fa-chart-bar" },
    { name: "Power BI", icon: "fas fa-chart-pie" },
    { name: "Machine Learning", icon: "fas fa-brain" }
];

// Render Skills Dynamically
function renderSkills() {
    const container = document.querySelector(".skills-container");
    skills.forEach(skill => {
        const skillItem = document.createElement("div");
        skillItem.className = "skill-item";
        skillItem.innerHTML = `
            <i class="${skill.icon}"></i>
            <p>${skill.name}</p>
        `;
        container.appendChild(skillItem);
    });
}
