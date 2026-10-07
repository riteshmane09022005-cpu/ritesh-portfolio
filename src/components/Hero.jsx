function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        {/* Left Side */}
        <div className="hero-content">

          <div className="availability">
            <span></span>
            Available for opportunities
          </div>

          <p className="hello">
            Hello, I'm
          </p>

          <h1>
            Ritesh Mane<span>.</span>
          </h1>

          <h2>
            Java &amp; Spring Boot Developer
          </h2>

          <p className="hero-description">
            I build reliable backend applications, REST APIs,
            database-driven systems and modern web solutions using
            Java, Spring Boot, MySQL and modern development tools.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn btn-primary"
            >
              View My Work <span>→</span>
            </a>

            {/* Open Resume directly */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View Resume <span>↗</span>
            </a>

          </div>

          {/* Social Links */}
          <div className="social-links">

            <a
              href="https://github.com/riteshmane09022005-cpu"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/ritesh-mane-b48517346"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>

        {/* Right Side - Developer Card */}
        <div className="developer-card">

          <div className="glow"></div>

          <div className="terminal">

            {/* Terminal Header */}
            <div className="terminal-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* Terminal Content */}
            <div className="terminal-body">

              <p>
                <b>const</b> developer = {"{"}
              </p>

              <p>
                &nbsp;&nbsp;name: <em>"Ritesh Mane"</em>,
              </p>

              <p>
                &nbsp;&nbsp;role: <em>"Java Developer"</em>,
              </p>

              <p>
                &nbsp;&nbsp;skills: [
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<em>"Java"</em>,
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<em>"Spring Boot"</em>,
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<em>"MySQL"</em>
              </p>

              <p>
                &nbsp;&nbsp;]
              </p>

              <p>
                {"}"}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;