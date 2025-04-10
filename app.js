// Portfolio App Component
const App = () => {
  // Project data
  const projects = [
    {
      title: "House Price Prediction",
      description: "Developed a machine learning model to predict housing prices using a dataset from the Kaggle House Prices competition.",
      technologies: ["Python", "Scikit-learn", "Pandas"],
      github: "https://github.com/kshan962/Housing-Price-Prediction",
      demo: "https://house-price-demo.netlify.app",
      image: "./images/house-price.png"
    },
    {
      title: "Prayer Times Finder",
      description: "Developed a web application to fetch and display Islamic prayer times based on user input for a specific address.",
      technologies: ["JavaScript", "React", "Node.js"],
      github: "https://github.com/kshan962/Prayer-Timings",
      image: "./images/Prayer times pic.JPG"
    },
    {
      title: "Fuel Quote Management Web Application",
      description: "A software application that will predict the rate of the fuel.",
      technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "MongoDB"],
      github: "https://github.com/Yayan57/Fuel_Rate_application",
      image: "./images/Fuel Price pic.jpeg"
    }
  ];

  // Skills data
  const skills = [
    "JavaScript", "React", "SQL", "HTML", "CSS", 
    "Node.js", "Express.js", "Python", "C++", "Java", 
    "PostgreSQL", "SQLite", "Git", "GitHub"
  ];

  // Experience data
  const experiences = [
    {
      title: "IT Technician",
      company: "theCoderSchool",
      period: "August 2023 - Present",
      description: "Support 100+ students and staff by maintaining and troubleshooting systems, networks, and development environments across multiple classrooms."
    },
    {
      title: "Software Developer Intern",
      company: "RippleMatch",
      period: "June 2022 - December 2022",
      description: "Contributed to the development and enhancement of web-based recruitment solutions aimed at streamlining candidate-employer matching processes."
    }
  ];

  // Education data
  const education = {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Houston",
    graduationDate: "December 2024"
  };

  return (
    <React.Fragment>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <a href="#home" className="logo">Shan Khan</a>
          
          {/* Desktop Navigation */}
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="Shan Khan Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">Resume <i className="fas fa-file-pdf"></i></a></li>
          </ul>
          
          {/* Mobile Menu Button */}
          <div className="hamburger">
            <i className="fas fa-bars"></i>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="mobile-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">Resume <i className="fas fa-file-pdf"></i></a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-image">
              <img src="./images/profile.jpg" alt="Shan Khan" className="profile-pic" />
            </div>
            <div className="hero-text">
              <h1>Shan Khan</h1>
              <h2>Full Stack Software Engineer</h2>
              <p>
              I am a Full Stack Software Engineer with a passion for technology and solving problems through Design, Development, Efficiency, and Collaboration. 
                I am also a graduate in Computer Science at the University of Houston
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <a href="#contact" className="btn btn-outline">Contact Me</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section-light">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              Hello! I'm Shan, a Computer Science student with a passion for software development and problem-solving. 
              I enjoy creating applications that solve real-world problems and make people's lives easier.
            </p>
            <p>
              My journey in technology began when I was in high school, where I started learning programming through online courses 
              and building small projects. Since then, I've continued to expand my skills and knowledge through formal education 
              and hands-on experience.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or mentoring other aspiring developers. I'm currently seeking internship and entry-level opportunities 
              in software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills section-dark">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-content">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects section-light">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-img">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience section-dark">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <h3>{experience.title}</h3>
                  <p className="company">{experience.company}</p>
                  <p className="period">{experience.period}</p>
                  <p className="description">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education section-light">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <h3>{education.degree}</h3>
            <p className="institution">{education.institution}</p>
            <p className="graduation">Expected Graduation: {education.graduationDate}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section-dark">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-container contact-info-only">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <ul>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:kshan962@gmail.com">kshan962@gmail.com</a>
                </li>
                <li>
                  <i className="fab fa-github"></i>
                  <a href="https://github.com/kshan962" target="_blank" rel="noopener noreferrer">github.com/kshan962</a>
                </li>
                <li>
                  <i className="fab fa-linkedin"></i>
                  <a href="https://www.linkedin.com/in/shan-khan-b47481241/" target="_blank" rel="noopener noreferrer">linkedin.com/in/shan-khan</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; <span id="currentYear"></span> Shan Khan. All rights reserved.</p>
            <div className="social-links">
              <a href="https://github.com/kshan962" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/shan-khan-b47481241/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="mailto:kshan962@gmail.com"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

// Render the App component to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(<App />);