<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mayur Khekare | Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <img src="profile.jpg" alt="Mayur Khekare" class="profile-photo animated-photo">
            <h1>Mayur Khekare</h1>
            <h2>Data Engineering & BI Professional</h2>
            <p class="summary">Strategic management professional experienced in data engineering, BI, and cloud computing, delivering data-driven solutions.</p>
            <div class="hero-buttons">
                <a href="#contact" class="btn btn-primary">Contact Me</a>
                <a href="#projects" class="btn btn-secondary">View Projects</a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
        <h2 class="section__title">About Me</h2>
        <p>I'm a detail-oriented data engineering professional with extensive expertise in Python programming, cloud computing (AWS and Azure), ETL, and advanced analytics. Passionate about harnessing data to address complex business challenges, I have a proven track record of automating processes, improving data accuracy, and driving impactful insights. My professional journey has involved collaborating with diverse teams to build innovative solutions, ensuring optimal performance and scalability. Continuously aiming to enhance my technical prowess and strategic business perspective, I am dedicated to creating robust, efficient, and sustainable technological solutions.</p>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section">
        <h2 class="section__title">Professional Experience</h2>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-date">Oct 2023 - Apr 2024</div>
                <div class="timeline-content">
                    <h3>Cognizant Technology Solutions, Pune <span class="role">- Associate</span></h3>
                    <ul>
                        <li>Led data engineering for Fortune 500 insurance client; automated testing using Cypress and PostgreSQL.</li>
                        <li>Managed on-premises to AWS Cloud migrations with integrated database and batch process testing.</li>
                        <li>Documented comprehensive ETL processes and data migration strategies.</li>
                    </ul>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">Jun 2021 - Sep 2023</div>
                <div class="timeline-content">
                    <h3>Cognizant Technology Solutions, Pune <span class="role">- Programmer Analyst</span></h3>
                    <ul>
                        <li>Executed ETL Data Analyst role, designing efficient Informatica jobs for data loads.</li>
                        <li>Developed optimized SQL queries enhancing data retrieval efficiency.</li>
                        <li>Oversaw DevOps scripts and CI/CD pipelines using GitHub and Jenkins.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section">
        <h2 class="section__title">Projects</h2>
        <div class="projects-grid">
            <!-- Projects dynamically loaded from JS -->
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section">
        <h2 class="section__title">Skills & Technologies</h2>
        <div class="skills-container">
            <!-- Skills dynamically loaded from JS -->
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
        <h2 class="section__title">Contact</h2>
        <div class="contact-container">
            <div class="contact-info">
                <p><i class="fas fa-envelope"></i> mkhekare@gmail.com</p>
                <p><i class="fas fa-phone"></i> +91 7768924686</p>
                <div class="social-links">
                    <a href="https://github.com/mkhekare" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                    <a href="#" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
                </div>
            </div>
            <form class="contact-form">
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; <span id="year"></span> Mayur Khekare. All rights reserved.</p>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>
