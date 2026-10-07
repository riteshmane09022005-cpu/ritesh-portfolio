function About() {
  return (
    <section id="about" className="section">
      <div className="container">

        <div className="section-title">
          <span>01.</span>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">

          <div className="about-text">

            <p>
              I am a passionate software developer with a strong
              interest in backend development and building practical
              software solutions.
            </p>

            <p>
              My primary focus is Java and Spring Boot. I enjoy
              developing REST APIs, working with relational databases
              and designing clean, maintainable applications.
            </p>

            <p>
              I continuously improve my programming and problem-solving
              skills by building projects and learning modern software
              development technologies.
            </p>

          </div>

          <div className="about-cards">

            <div>
              <strong>Java</strong>
              <span>Backend Development</span>
            </div>

            <div>
              <strong>Spring Boot</strong>
              <span>REST APIs</span>
            </div>

            <div>
              <strong>MySQL</strong>
              <span>Database</span>
            </div>

            <div>
              <strong>Git</strong>
              <span>Version Control</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;