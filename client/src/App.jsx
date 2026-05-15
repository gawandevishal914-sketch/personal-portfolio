function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Vishal</h2>

        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Hello, I'm Vishal 👋</h1>

        <h2>Full Stack Developer</h2>

        <p>
          I build modern websites and full stack applications using
          React, Node.js and MongoDB.
        </p>

        <button>View Projects</button>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>

        <p>
          I am a BTech CSE (AI & ML) student passionate about
          Full Stack Development and modern web technologies.
          I enjoy building responsive and user-friendly websites.
        </p>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
        </div>
      </section>
            {/* Projects Section */}

      <section className="projects">
        <h2>My Projects</h2>

        <div className="project-container">

          <div className="project-card">
            <h3>Portfolio Website</h3>

            <p>
              A modern personal portfolio website built using React.
            </p>

            <button>GitHub</button>
          </div>

          <div className="project-card">
            <h3>Weather App</h3>

            <p>
              Weather application using API integration.
            </p>

            <button>GitHub</button>
          </div>

          <div className="project-card">
            <h3>To-Do App</h3>

            <p>
              Task management application using JavaScript.
            </p>

            <button>GitHub</button>
          </div>

        </div>
      </section>
            {/* Contact Section */}

      <section className="contact">
        <h2>Contact Me</h2>

        <p>Email: vishal@example.com</p>

        <p>LinkedIn: linkedin.com/in/vishal</p>

        <p>GitHub: github.com/vishal</p>

        <button>Hire Me</button>
      </section>
    </div>
  );
}

export default App;
