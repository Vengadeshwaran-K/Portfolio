import React, { useState, useEffect } from 'react';
import './App.css';

// Using inline SVG components for icons to keep it dependency-free and fast
const Icons = {
  Github: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-3-7-3" /></svg>,
  Linkedin: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>,
  Mail: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
  MapPin: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  Code: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  Cpu: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>,
  Database: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg>,
  Download: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
};

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    backend: ['Spring Boot', 'Spring Data JPA', 'Hibernate', 'RESTful APIs', 'JWT', 'Spring Security'],
    distributed: ['RabbitMQ', 'Apache Kafka', 'Microservices'],
    languages: ['Java', 'Python', 'SQL'],
    databases: ['MySQL', 'PostgreSQL'],
    tools: ['Maven', 'GitHub', 'Postman', 'Hoppscotch', 'Lombok', 'Docker', 'CI/CD']
  };

  const projects = [
    {
      title: "Microservices Management System",
      period: "Dec 2025 - Jan 2026",
      tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "RabbitMQ", "Docker"],
      desc: "Designed and developed a comprehensive quiz application utilizing a sophisticated Microservices Architecture. Successfully decoupled quiz, question, and scoring services to ensure high availability and optimal performance. Engineered seamless inter-service communication through robust RESTful APIs and integrated RabbitMQ/Kafka message brokers to handle asynchronous events and maintain system resilience.",
      highlight: "High Scalability & Event-Driven",
      github: "https://github.com/Vengadeshwaran-K/QUIZ_APPLICATION"
    },
    {
      title: "E-Commerce Backend Application",
      period: "Oct 2025 - Nov 2025",
      tech: ["Java", "Spring Boot", "MVC", "MySQL", "JWT", "OAuth2"],
      desc: "Architected a secure and highly scalable RESTful backend system featuring modular services dedicated to product catalog, user profiles, and order management. Implemented advanced security measures by integrating OAuth2 and JWT, facilitating professional-grade authentication and authorization. Optimized database queries and enhanced API response times.",
      highlight: "Security Focused & OAuth2",
      github: "https://github.com/Vengadeshwaran-K/Local_HandCraft_Market_Price"
    },
    {
      title: "Ascentium Contract Amendment System",
      period: "2025 - 2026",
      tech: ["Java", "Spring Boot", "Hibernate", "REST API", "PostgreSQL"],
      desc: "Engineered a specialized contract management and amendment processing system for handling complex business agreements. The robust API endpoints support multi-stage contract lifecycle changes, dynamic negotiations tracking, and automated audit logging, streamlining enterprise contract workflows and improving data compliance.",
      highlight: "Enterprise Workflow",
      github: "https://github.com/Vengadeshwaran-K/Ascentium-contract_amendment"
    },
    {
      title: "Invoice PDF Generation",
      period: "2025 - 2025",
      tech: ["Java", "Spring Boot", "iText/PDFBox"],
      desc: "Developed a dynamic, automated PDF generation service capable of producing pixel-perfect invoices on the fly. Utilized templating engines to inject real-time billing data into formatted layouts securely, dramatically reducing manual accounting overhead and accelerating the invoicing process for end clients.",
      highlight: "Automation Utility",
      github: "https://github.com/Vengadeshwaran-K/Invoice-Pdf-Generation"
    },
    {
      title: "Employee Management System",
      period: "Dec 2025 - Dec 2025",
      tech: ["Java", "Spring Boot", "JPA", "PostgreSQL", "Factory Pattern"],
      desc: "Implemented a clean, layered architecture leveraging precise controller, service, and repository design patterns. Innovatively utilized Factory Method design architectures to efficiently handle and route requests securely across multiple potential data sources, ensuring high maintainability and testability standards.",
      highlight: "Architectural Excellence",
      github: "https://github.com/Vengadeshwaran-K/EMPLOYEE_MANAGEMENT"
    }
  ];

  const experience = [
    {
      role: "Software Developer Intern",
      company: "Global Tech Professionals, UK (Remote)",
      period: "Jan 2026 - Present",
      points: [
        "Architecting backend systems using Spring Boot and related frameworks.",
        "Optimizing RESTful API performance and database interaction layers.",
        "Collaborating globally to deliver production-grade features."
      ]
    },
    {
      role: "Frontend Development Trainee",
      company: "SplendensLab IT Ventures, Salem",
      period: "Oct 2024 - Oct 2024",
      points: [
        "Crafted responsive interface components using modern CSS techniques.",
        "Enhanced user experience through interactive JavaScript elements.",
        "Learned industry-standard Git workflows and documentation."
      ]
    }
  ];

  const education = [
    {
      degree: "M.Tech in Computer Science and Engineering",
      institution: "Erode Sengunthar Engineering College, Perundurai",
      period: "2022 - 2027",
      score: "CGPA: 9.60",
      details: "Focused on core computer science subjects, software engineering, and Backend Technologies."
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Sathya Saai Matriculation Higher Secondary School, Pasar",
      period: "2021 - 2022",
      score: "Percentage: 95%",
      details: "Biology Mathematics"
    }
  ];

  return (
    <div className="portfolio-app">
      {/* Navbar */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo">VK<span></span></div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="/resume.pdf" download="Vengadeshwaran_K_Resume.pdf" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <span>Resume</span>
              <Icons.Download />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-text animate">
            <h1 className="name">Vengadeshwaran K</h1>
            <h2 className="title">Software Developer</h2>
            <p className="summary">
              Aspiring architect of scalable backend systems. Specialized in <strong>Java</strong>,
              <strong> Spring Boot</strong>, and <strong>Distributed Systems</strong>.
              Passionate about building robust APIs and data-driven applications.
            </p>
            <div className="social-links">
              <a href="https://github.com/Vengadeshwaran-K" className="glass-icon"><Icons.Github /></a>
              <a href="https://linkedin.com/in/vengadeshwaran-k" className="glass-icon"><Icons.Linkedin /></a>
              <a href="mailto:vengadeshwaran558@gmail.com" className="glass-icon"><Icons.Mail /></a>
            </div>
          </div>
          <div className="hero-stats animate" style={{ animationDelay: '0.2s' }}>
            <div className="profile-frame">
              <img src="/profile.jpeg" alt="Vengadeshwaran K" className="profile-img" />
            </div>
            <div className="stats-container">
              <div className="stat-card glass-card">
                <span className="stat-val">500+</span>
                <span className="stat-label">LeetCode</span>
              </div>
              <div className="stat-card glass-card">
                <span className="stat-val">9.60</span>
                <span className="stat-label">CGPA</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features / Highlights Section */}
      <section className="highlights">
        <div className="container">
          <div className="grid">
            <div className="glass-card feature-item">
              <Icons.Cpu />
              <h3>Microservices</h3>
              <p>Expertise in building decoupled, high-performance service architectures.</p>
            </div>
            <div className="glass-card feature-item">
              <Icons.Code />
              <h3>Scalability</h3>
              <p>Implementing Kafka and RabbitMQ for robust event-driven systems.</p>
            </div>
            <div className="glass-card feature-item">
              <Icons.Database />
              <h3>Security</h3>
              <p>Securing enterprise applications with JWT and Spring Security protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Arsenal</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-cat glass-card">
                <h3 className="cat-title">{category.toUpperCase()}</h3>
                <div className="skill-tags">
                  {items.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Work</h2>
          <div className="project-list">
            {projects.map((proj, i) => (
              <div key={i} className="project-card glass-card">
                <div className="project-content">
                  <div className="proj-header">
                    <h3>{proj.title}</h3>
                    <div className="proj-header-right">
                      <span className="badge">{proj.highlight}</span>
                      {proj.github && (
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="proj-github-link">
                          <Icons.Github />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="proj-period">{proj.period}</p>
                  <p className="proj-desc">{proj.desc}</p>
                  <div className="proj-tech">
                    {proj.tech.map(t => <span key={t}>#{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Professional Journey</h2>
          <div className="timeline">
            {experience.map((exp, i) => (
              <div key={i} className="entry glass-card">
                <div className="entry-header">
                  <h3>{exp.role}</h3>
                  <span className="entry-date">{exp.period}</span>
                </div>
                <h4 className="company">{exp.company}</h4>
                <ul>
                  {exp.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Academic Background</h2>
          <div className="timeline">
            {education.map((edu, i) => (
              <div key={i} className="entry glass-card">
                <div className="entry-header">
                  <h3>{edu.degree}</h3>
                  <span className="entry-date">{edu.period}</span>
                </div>
                <h4 className="company">{edu.institution}</h4>
                <p className="proj-desc" style={{ marginBottom: "0.5rem" }}>{edu.details}</p>
                <div className="badge" style={{ display: "inline-block", marginTop: "0.5rem" }}>{edu.score}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Vengadeshwaran K. Crafted with Precision.</p>
          <div className="footer-contact">
            <span><Icons.MapPin /> Cuddalore, TN</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
