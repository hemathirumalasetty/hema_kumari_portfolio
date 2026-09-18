import './App.css'

function App() {
  const skills = [
    'Python',
    'FastAPI',
    'Django',
    'React',
    'JavaScript',
    'Machine Learning',
    'LLMs',
    'RAG',
    'LangChain',
    'SQL',
    'AWS',
    'Docker',
    'Kubernetes',
    'Git'
  ]

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <h2>
          Hema <span>Kumari</span>
        </h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="resume-nav"
          href="/Hema_Kumari_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>

      </nav>


      {/* ================= HOME ================= */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="hello">
            Hi, I'm
          </p>

          <h1>
            Hema <span>Kumari</span>
          </h1>

          <h2>
            Python Full Stack Developer & AI/ML Engineer
          </h2>

          <p className="hero-description">
            I build scalable web applications and intelligent AI solutions
            using Python, FastAPI, React, Machine Learning, LLMs, RAG and AWS.
            I enjoy solving real-world problems through clean code and
            innovative technology.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="secondary-button"
            >
              Contact Me
            </a>

          </div>


          {/* SOCIAL LINKS */}
          <div className="social-links">

            <a
              href="https://github.com/hemathirumalasetty"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/Thirumalasetty-Hemakumari"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://medium.com/@hemakumarithirumalasetty"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>

            <a href="mailto:hemakumarithirumalasetty8@gmail.com">
              Email
            </a>

          </div>

        </div>


        {/* ================= DEVELOPER VISUAL ================= */}
        <div className="developer-visual">

          <div className="code-box">

            <div className="code-icon">
              &lt;/&gt;
            </div>

            <h3>
              Building Intelligent Solutions
            </h3>

            <p>
              Python • AI • Full Stack
            </p>

          </div>

          <div className="tech python">
            Python
          </div>

          <div className="tech ai">
            AI / ML
          </div>

          <div className="tech react">
            React
          </div>

          <div className="tech fastapi">
            FastAPI
          </div>

          <div className="tech aws">
            AWS
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about">

        <h2 className="section-title">
          About Me
        </h2>

        <div className="about-grid">

          <div>

            <p className="section-description">
              I'm a Python Full Stack Developer and AI/ML Engineer with
              experience building enterprise applications, REST APIs,
              data-driven solutions and AI-powered applications.
              I enjoy learning new technologies and building scalable
              solutions that solve real business problems.
            </p>

          </div>

          <div className="about-cards">

            <div className="mini-card">
              <h3>Clean Code</h3>
              <p>Maintainable and scalable solutions</p>
            </div>

            <div className="mini-card">
              <h3>Problem Solver</h3>
              <p>Turning ideas into real-world solutions</p>
            </div>

            <div className="mini-card">
              <h3>Continuous Learner</h3>
              <p>Exploring modern technologies</p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section id="skills">

        <h2 className="section-title">
          Technical Skills
        </h2>

        <div className="skills">

          {skills.map((skill) => (
            <span key={skill}>
              {skill}
            </span>
          ))}

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}
      <section id="experience">

        <h2 className="section-title">
          Experience
        </h2>

        <div className="experience-grid">


          {/* VANGUARD */}
          <div className="card">

            <h3>
              Senior Python Full Stack Developer – AI/ML
            </h3>

            <h4>
              Vanguard
            </h4>

            <p className="date">
              Jan 2026 – Present
            </p>

            <p>
              Building financial-services applications with secure Python
              APIs, AI-assisted capabilities, React interfaces and
              cloud-based deployments.
            </p>

          </div>


          {/* CDW */}
          <div className="card">

            <h3>
              Python Full Stack Developer – AI/ML
            </h3>

            <h4>
              CDW
            </h4>

            <p className="date">
              Nov 2024 – Dec 2025
            </p>

            <p>
              Developed enterprise Python services and React applications
              while integrating AI/ML capabilities for search,
              classification and business workflows.
            </p>

          </div>


          {/* WINGS INTERNATIONAL */}
          <div className="card">

            <h3>
              Python Full Stack Developer
            </h3>

            <h4>
              Wings International
            </h4>

            <p className="date">
              Jun 2018 – Apr 2024
            </p>

            <p>
              Developed Python backend services, React and Angular
              applications, data-processing solutions and AWS
              integrations.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section id="projects">

        <h2 className="section-title">
          Featured Projects
        </h2>

        <div className="project-grid">


          {/* PROJECT 1 */}
          <div className="project-card">

            <div className="project-icon">
              AI
            </div>

            <h3>
              AI Document Assistant
            </h3>

            <p>
              AI-powered document question-answering application using
              Python, FastAPI, LLMs and RAG.
            </p>

            <a
              href="https://github.com/hemathirumalasetty"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>

          </div>


          {/* PROJECT 2 */}
          <div className="project-card">

            <div className="project-icon">
              &lt;/&gt;
            </div>

            <h3>
              Full Stack Web Application
            </h3>

            <p>
              Full-stack application using React, Python, FastAPI
              and SQL with REST API integration.
            </p>

            <a
              href="https://github.com/hemathirumalasetty"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>

          </div>


          {/* PROJECT 3 */}
          <div className="project-card">

            <div className="project-icon">
              ML
            </div>

            <h3>
              Machine Learning Application
            </h3>

            <p>
              Machine-learning application for data analysis and
              predictions using Python, scikit-learn and FastAPI.
            </p>

            <a
              href="https://github.com/hemathirumalasetty"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section id="contact">

        <h2 className="section-title">
          Let's Connect
        </h2>

        <p className="section-description">
          I'm open to discussing software development, Python,
          AI/ML and full-stack opportunities.
        </p>

        <div className="contact-buttons">

          <a href="mailto:hemakumarithirumalasetty8@gmail.com">
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/Thirumalasetty-Hemakumari"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/hemathirumalasetty"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://medium.com/@hemakumarithirumalasetty"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer>

        <p>
          © 2026 Hema Kumari
        </p>

        <p>
          Built with React
        </p>

      </footer>

    </div>
  )
}

export default App