const skills = [
  {
    name: "Java",
    description: "Object-oriented programming and backend development",
    icon: "☕",
  },
  {
    name: "Spring Boot",
    description: "REST API and backend application development",
    icon: "🌱",
  },
  {
    name: "Spring MVC",
    description: "Web application architecture",
    icon: "⚙️",
  },
  {
    name: "REST API",
    description: "API development and integration",
    icon: "🔗",
  },
  {
    name: "MySQL",
    description: "Relational database management",
    icon: "🗄️",
  },
  {
    name: "SQL",
    description: "Queries and database operations",
    icon: "📊",
  },
  {
    name: "HTML & CSS",
    description: "Responsive web development",
    icon: "🌐",
  },
  {
    name: "JavaScript",
    description: "Frontend programming",
    icon: "JS",
  },
  {
    name: "Git & GitHub",
    description: "Version control and collaboration",
    icon: "⌘",
  },
  {
    name: "Maven",
    description: "Java dependency and build management",
    icon: "📦",
  },
];

function Skills() {
  return (
    <section id="skills" className="section section-dark">
      <div className="container">

        <div className="section-title">
          <span>02.</span>
          <h2>Skills</h2>
        </div>

        <p className="section-description">
          Technologies and tools I use to build software applications.
        </p>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>

              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>

              <p>{skill.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;