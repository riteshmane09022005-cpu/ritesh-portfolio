const projects = [
  {
    number: "01",
    title: "Student Management System",
    description:
      "A backend application for managing student information using Spring Boot REST APIs and MySQL.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
      "MySQL",
      "Maven",
    ],
    github:
      "https://github.com/riteshmane09022005-cpu",
  },

  {
    number: "02",
    title: "Course Management System",
    description:
      "A Spring Boot application for managing course information with RESTful APIs and database integration.",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST API",
    ],
    github:
      "https://github.com/riteshmane09022005-cpu",
  },

  {
    number: "03",
    title: "Developer Portfolio",
    description:
      "A modern responsive developer portfolio created using React.js and deployed using Vercel.",
    technologies: [
      "React.js",
      "Vite",
      "JavaScript",
      "CSS",
      "Vercel",
    ],
    github:
      "https://github.com/riteshmane09022005-cpu/ritesh-portfolio",
  },
];

function Projects() {
  return (
    <section id="projects" className="section section-dark">
      <div className="container">

        <div className="section-title">
          <span>04.</span>
          <h2>Projects</h2>
        </div>

        <p className="section-description">
          Some of the projects I have worked on.
        </p>

        <div className="projects-grid">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-header">

                <span>{project.number}</span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="technologies">

                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;