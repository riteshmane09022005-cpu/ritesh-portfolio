function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">

        <div className="contact-box">

          <div className="section-title center">
            <span>05.</span>
            <h2>Let's Connect</h2>
          </div>

          <p>
            I'm interested in connecting with developers,
            recruiters and people working on interesting
            technology projects.
          </p>

          <div className="contact-buttons">

            <a
              href="mailto:your-email@example.com"
              className="btn btn-primary"
            >
              Email Me
            </a>

            <a
              href="https://github.com/riteshmane09022005-cpu"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;