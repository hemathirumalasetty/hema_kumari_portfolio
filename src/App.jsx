import './App.css'

function App() {

  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

  const skillCategories = [
    {
      title: 'Programming',
      icon: '</>',
      skills: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'Bash']
    },
    {
      title: 'Frontend Development',
      icon: 'UI',
      skills: [
        'React.js',
        'Redux Toolkit',
        'React Hooks',
        'HTML5',
        'CSS3',
        'Bootstrap'
      ]
    },
    {
      title: 'Backend Development',
      icon: 'API',
      skills: [
        'FastAPI',
        'Django',
        'Flask',
        'REST APIs',
        'Pydantic',
        'SQLAlchemy',
        'Microservices'
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: 'AI',
      skills: [
        'Scikit-learn',
        'XGBoost',
        'NLP',
        'LLMs',
        'RAG',
        'LangChain',
        'Hugging Face'
      ]
    },
    {
      title: 'Data & Databases',
      icon: 'DB',
      skills: [
        'PostgreSQL',
        'MySQL',
        'SQL Server',
        'MongoDB',
        'Redis',
        'Pandas',
        'PySpark',
        'Kafka'
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁',
      skills: [
        'AWS',
        'Azure',
        'Docker',
        'Kubernetes',
        'Git',
        'Jenkins',
        'GitHub Actions',
        'CI/CD'
      ]
    }
  ]

  const experiences = [
    {
      company: 'Wells Fargo',
      location: 'United States',
      role: 'Senior Software Developer',
      specialization: 'Python Full Stack / AI & ML',
      date: 'Jan 2025 – Present',
      description:
        'Working on enterprise banking applications supporting customer servicing, account and transaction workflows, operational dashboards, approvals, reporting and data-driven business processes.',
      skills: [
        'Python',
        'FastAPI',
        'Django',
        'React.js',
        'TypeScript',
        'PostgreSQL',
        'AI/ML',
        'RAG',
        'Azure'
      ]
    },
    {
      company: 'CDW',
      location: 'United States',
      role: 'Senior Software Developer',
      specialization: 'Python Full Stack',
      date: 'May 2023 – July 2024',
      description:
        'Developed an enterprise technology platform supporting products, customers, orders, inventory, enterprise search, reporting and operational workflows using React and Python services.',
      skills: [
        'Python',
        'FastAPI',
        'React.js',
        'Redux Toolkit',
        'TypeScript',
        'PostgreSQL',
        'MongoDB',
        'AWS',
        'Docker'
      ]
    },
    {
      company: 'New York Community Bank',
      location: 'India',
      role: 'Python Full Stack Developer',
      specialization: 'Banking Applications',
      date: 'Sep 2021 – Mar 2023',
      description:
        'Built banking applications supporting customer profiles, account servicing, transaction and payment workflows, internal approvals, reconciliation and operational reporting.',
      skills: [
        'Python',
        'Django',
        'FastAPI',
        'React.js',
        'PostgreSQL',
        'MongoDB',
        'AWS',
        'Docker'
      ]
    },
    {
      company: 'Darwinbox',
      location: 'India',
      role: 'Software Developer',
      specialization: 'Python',
      date: 'Aug 2019 – Sep 2021',
      description:
        'Worked on an HR technology platform supporting employee information, onboarding, attendance, leave management, organizational workflows, HR operations and reporting.',
      skills: [
        'Python',
        'Django',
        'Flask',
        'React.js',
        'JavaScript',
        'SQL',
        'AWS',
        'Docker'
      ]
    }
  ]

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <a href="#home" className="brand">
          Hema <span>Kumari</span>
        </a>

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
          href={resumeUrl}
          download="resume.pdf"
        >
          Download Resume
        </a>

      </nav>


      {/* ================= HOME ================= */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="hero-eyebrow">
            PYTHON • FULL STACK • AI/ML
          </p>

          <h1>
            Hi, I'm <span>Hema Kumari.</span>
          </h1>

          <h2>
            I build full-stack applications and AI-powered solutions.
          </h2>

          <p className="hero-description">
            Senior Software Developer with 7+ years of experience building
            scalable full-stack applications using Python, FastAPI, Django,
            React and cloud technologies.
          </p>

          <div className="hero-tech-stack">
            <span>Python</span>
            <span>FastAPI</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>LLMs</span>
            <span>RAG</span>
            <span>AWS</span>
            <span>Azure</span>
          </div>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              View Projects
            </a>

            <a
              href={resumeUrl}
              download="resume.pdf"
              className="secondary-button"
            >
              Download Resume
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/hemathirumalasetty"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/Thirumalasetty-Hemakumari"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://medium.com/@hemakumarithirumalasetty"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium ↗
            </a>

          </div>

        </div>


        {/* ================= DEVELOPER CARD ================= */}
        <div className="hero-developer-card">

          <div className="terminal-header">

            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>developer.py</p>

          </div>

          <div className="terminal-content">

            <p>
              <span className="code-purple">class</span>{' '}
              <span className="code-blue">Developer</span>:
            </p>

            <p className="code-indent">
              name = <span className="code-string">"Hema Kumari"</span>
            </p>

            <p className="code-indent">
              role ={' '}
              <span className="code-string">
                "Senior Software Developer"
              </span>
            </p>

            <p className="code-indent">
              focus ={' '}
              <span className="code-string">
                "Full Stack + AI/ML"
              </span>
            </p>

            <br />

            <p className="code-indent">
              skills = [
            </p>

            <p className="code-double-indent">
              <span className="code-string">"Python"</span>,
              <span className="code-string"> "React"</span>,
            </p>

            <p className="code-double-indent">
              <span className="code-string">"FastAPI"</span>,
              <span className="code-string"> "RAG"</span>,
            </p>

            <p className="code-double-indent">
              <span className="code-string">"AWS"</span>
            </p>

            <p className="code-indent">
              ]
            </p>

            <br />

            <p>
              <span className="code-purple">def</span>{' '}
              <span className="code-blue">build</span>():
            </p>

            <p className="code-indent">
              <span className="code-purple">return</span>{' '}
              <span className="code-string">
                "Scalable solutions"
              </span>
            </p>

          </div>

          <div className="terminal-status">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about">

        <p className="section-label">
          GET TO KNOW ME
        </p>

        <h2 className="section-title">
          About Me
        </h2>

        <div className="about-grid">

          <div>

            <p className="section-description">
              I'm a Senior Software Developer with 7+ years of experience
              building scalable full-stack web applications using Python,
              FastAPI, Django, React.js, JavaScript, TypeScript, SQL and
              cloud technologies.
            </p>

            <p className="section-description about-second-paragraph">
              My experience includes secure REST APIs, microservices,
              database-driven business workflows, enterprise integrations,
              cloud deployments and selected AI/ML solutions including
              NLP, LLMs and RAG.
            </p>

          </div>

          <div className="about-cards">

            <div className="mini-card">
              <h3>Full Stack</h3>
              <p>
                Modern frontend and scalable Python backend development
              </p>
            </div>

            <div className="mini-card">
              <h3>AI / ML</h3>
              <p>
                Machine learning, NLP, LLM and RAG-based solutions
              </p>
            </div>

            <div className="mini-card">
              <h3>Cloud</h3>
              <p>
                AWS, Azure, Docker and modern deployment practices
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section id="skills">

        <p className="section-label">
          MY TOOLKIT
        </p>

        <h2 className="section-title">
          Technical Skills
        </h2>

        <p className="skills-intro">
          Technologies and tools I use to build scalable applications,
          cloud services, data solutions and AI-powered products.
        </p>

        <div className="skills-grid">

          {skillCategories.map((category) => (

            <div
              className="skill-category"
              key={category.title}
            >

              <div className="skill-category-header">

                <div className="skill-icon">
                  {category.icon}
                </div>

                <h3>
                  {category.title}
                </h3>

              </div>

              <div className="skill-tags">

                {category.skills.map((skill) => (

                  <span key={skill}>
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}
      <section id="experience">

        <p className="section-label">
          CAREER
        </p>

        <h2 className="section-title">
          Professional Experience
        </h2>

        <p className="experience-intro">
          Building enterprise full-stack applications across banking,
          technology and HR platforms.
        </p>

        <div className="timeline">

          {experiences.map((experience) => (

            <div
              className="timeline-item"
              key={`${experience.company}-${experience.date}`}
            >

              <div className="timeline-marker">
                <span></span>
              </div>

              <div className="experience-card">

                <div className="experience-top">

                  <div>

                    <p className="experience-date">
                      {experience.date}
                    </p>

                    <h3>
                      {experience.role}
                    </h3>

                    <p className="experience-specialization">
                      {experience.specialization}
                    </p>

                  </div>

                  <div className="experience-company">

                    <h4>
                      {experience.company}
                    </h4>

                    <p>
                      {experience.location}
                    </p>

                  </div>

                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-tags">

                  {experience.skills.map((skill) => (

                    <span key={skill}>
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section id="projects">

        <p className="section-label">
          MY WORK
        </p>

        <h2 className="section-title">
          Featured Projects
        </h2>

        <p className="projects-intro">
          A selection of full-stack and AI/ML projects demonstrating
          practical experience with Python, React, APIs, machine learning
          and Generative AI.
        </p>


        <div className="project-grid professional-projects">

          {/* PROJECT 1 */}
          <article className="project-card featured-project">

            <div className="project-top">

              <div className="project-icon">
                AI
              </div>

              <span className="project-number">
                01
              </span>

            </div>

            <p className="project-type">
              GENERATIVE AI
            </p>

            <h3>
              AI Document Assistant
            </h3>

            <p className="project-description">
              Intelligent document question-answering application that
              processes documents and uses retrieval-augmented generation
              to provide context-aware answers from document content.
            </p>

            <div className="project-features">

              <p>
                <span>✓</span>
                Document processing and retrieval
              </p>

              <p>
                <span>✓</span>
                Context-aware question answering
              </p>

              <p>
                <span>✓</span>
                FastAPI backend services
              </p>

            </div>

            <div className="project-tags">
              <span>Python</span>
              <span>FastAPI</span>
              <span>LLMs</span>
              <span>RAG</span>
              <span>LangChain</span>
            </div>

            <div className="project-actions">

              <a
                href="https://github.com/hemathirumalasetty"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

            </div>

          </article>


          {/* PROJECT 2 */}
          <article className="project-card featured-project">

            <div className="project-top">

              <div className="project-icon">
                &lt;/&gt;
              </div>

              <span className="project-number">
                02
              </span>

            </div>

            <p className="project-type">
              FULL STACK
            </p>

            <h3>
              Full Stack Web Application
            </h3>

            <p className="project-description">
              Full-stack web application with a responsive React interface,
              Python backend services, REST API integration and
              database-driven application workflows.
            </p>

            <div className="project-features">

              <p>
                <span>✓</span>
                Responsive React interface
              </p>

              <p>
                <span>✓</span>
                REST API integration
              </p>

              <p>
                <span>✓</span>
                Database-driven workflows
              </p>

            </div>

            <div className="project-tags">
              <span>React</span>
              <span>Python</span>
              <span>FastAPI</span>
              <span>REST API</span>
              <span>SQL</span>
            </div>

            <div className="project-actions">

              <a
                href="https://github.com/hemathirumalasetty"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

            </div>

          </article>


          {/* PROJECT 3 */}
          <article className="project-card featured-project">

            <div className="project-top">

              <div className="project-icon">
                ML
              </div>

              <span className="project-number">
                03
              </span>

            </div>

            <p className="project-type">
              MACHINE LEARNING
            </p>

            <h3>
              Machine Learning Application
            </h3>

            <p className="project-description">
              Machine-learning application for preparing structured data,
              training predictive models and exposing model functionality
              through Python backend services.
            </p>

            <div className="project-features">

              <p>
                <span>✓</span>
                Data preparation and feature engineering
              </p>

              <p>
                <span>✓</span>
                Model training and evaluation
              </p>

              <p>
                <span>✓</span>
                Prediction API integration
              </p>

            </div>

            <div className="project-tags">
              <span>Python</span>
              <span>Pandas</span>
              <span>Scikit-learn</span>
              <span>FastAPI</span>
              <span>Machine Learning</span>
            </div>

            <div className="project-actions">

              <a
                href="https://github.com/hemathirumalasetty"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

            </div>

          </article>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section id="contact">

        <div className="contact-section">

          <div className="contact-left">

            <p className="section-label">
              LET'S CONNECT
            </p>

            <h2 className="contact-title">
              Interested in working together?
            </h2>

            <p className="contact-description">
              I'm open to opportunities in Python development,
              full-stack engineering and AI/ML. Feel free to reach
              out to discuss roles, projects or collaboration.
            </p>


            <div className="contact-info">

              <a
                href="mailto:hemakumarithirumalasetty8@gmail.com"
                className="contact-item"
              >

                <div className="contact-icon">
                  @
                </div>

                <div>
                  <span>Email</span>
                  <p>
                    hemakumarithirumalasetty8@gmail.com
                  </p>
                </div>

              </a>


              <a
                href="https://www.linkedin.com/in/Thirumalasetty-Hemakumari"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >

                <div className="contact-icon">
                  in
                </div>

                <div>
                  <span>LinkedIn</span>
                  <p>
                    Connect with me ↗
                  </p>
                </div>

              </a>


              <a
                href="https://github.com/hemathirumalasetty"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >

                <div className="contact-icon">
                  GH
                </div>

                <div>
                  <span>GitHub</span>
                  <p>
                    View my repositories ↗
                  </p>
                </div>

              </a>


              <a
                href="https://medium.com/@hemakumarithirumalasetty"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >

                <div className="contact-icon">
                  M
                </div>

                <div>
                  <span>Medium</span>
                  <p>
                    Read my articles ↗
                  </p>
                </div>

              </a>

            </div>

          </div>


          {/* ================= RESUME CARD ================= */}
          <div className="resume-card">

            <div className="resume-card-top">

              <div className="resume-document-icon">
                CV
              </div>

              <div className="resume-status">
                <span></span>
                Resume
              </div>

            </div>

            <p className="resume-label">
              PROFESSIONAL RESUME
            </p>

            <h3>
              Hema Kumari
            </h3>

            <h4>
              Senior Software Developer
            </h4>

            <div className="resume-divider"></div>


            <div className="resume-highlights">

              <div>
                <strong>7+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>Python</strong>
                <span>Full Stack</span>
              </div>

              <div>
                <strong>AI/ML</strong>
                <span>LLM & RAG</span>
              </div>

            </div>


            <p className="resume-description">
              Download my complete professional resume including
              technical skills, professional experience,
              project responsibilities and education.
            </p>


            <div className="resume-actions">

              <a
                href={resumeUrl}
                download="resume.pdf"
                className="resume-view-button"
              >
                Download Resume
              </a>

              <a
                href={resumeUrl}
                download="resume.pdf"
                className="resume-download-button"
              >
                Download PDF ↓
              </a>

            </div>

          </div>

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