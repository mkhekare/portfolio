// === DOM Content Loaded ===
document.addEventListener("DOMContentLoaded", () => {
  updateCopyrightYear();
  initSmoothScroll();
  renderProjects();
  renderSkills();
  setupTimelineAnimations();
});

// === Update Footer Year ===
function updateCopyrightYear() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// === Smooth Scrolling ===
function initSmoothScroll() {
  document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute("href"));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// === Project Data ===
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

// === Render Projects Dynamically ===
function renderProjects() {
  const container = document.querySelector(".projects-grid");
  if (!container) return;

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-img" />
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p class="tech-used"><strong>Technologies:</strong> ${project.technologies}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// === Skills Data ===
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

// === Render Skills Dynamically ===
function renderSkills() {
  const container = document.querySelector(".skills-container");
  if (!container) return;

  skills.forEach(skill => {
    const item = document.createElement("div");
    item.className = "skill-item";
    item.innerHTML = `
      <i class="${skill.icon}"></i>
      <p>${skill.name}</p>
    `;
    container.appendChild(item);
  });
}

// === Animate Timeline on Scroll ===
function setupTimelineAnimations() {
  const items = document.querySelectorAll(".timeline-item");

  if (!items.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, { threshold: 0.1 });

  items.forEach(item => observer.observe(item));
}
