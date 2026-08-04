// TODO: Replace the "github" (and optional "demo") URLs below with your
// real project links before publishing.
const projects = [
  {
    title: "Information Security Project",
    description:
      "A cybersecurity project focused on secure data handling, encryption, and vulnerability analysis techniques.",
    tech: ["Python", "Cryptography", "SQLite"],
    github: "https://github.com/znbaziz2004-prog/Infomation-Security",
    demo: "",
    featured: true,
  },
  {
    title: "AI Learning Authenticity Evaluator",
    description:
      "An AI-powered app that evaluates learning authenticity and flags AI-generated submissions using the Gemini API.",
    tech: ["Python", "Streamlit", "Gemini API"],
    github:
      "https://github.com/znbaziz2004-prog/AI-Learning-Authenticity-Evaluator",
    demo: "",
    featured: true,
  },
  {
    title: "Restaurant Management System",
    description:
      "A management application for handling restaurant operations, including orders, menu items, and customer records.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "",
    demo: "",
  },
  {
    title: "Airport Management System",
    description:
      "A database-driven system for managing flights, passengers, and day-to-day airport operations.",
    tech: ["C++", "SQL", "Database Design"],
    github: "",
    demo: "",
  },
  
];

function Projects() {
  return (
    <section id="projects" className="py-28 px-6 border-t border-line">
      <div className="max-w-7xl mx-auto">

        <p className="font-mono text-signal text-sm uppercase tracking-widest mb-3 text-center">
          [ Projects ]
        </p>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-paper text-center mb-4">
          Selected work
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          A mix of full-stack builds and database systems, plus two
          projects closer to my current focus — information security and
          AI authenticity.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-surface border border-line rounded-xl p-8 hover:border-signal/60 transition-colors duration-300"
            >
              <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-signal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-signal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {project.featured && (
                <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-signal border border-signal/40 rounded-full px-3 py-1 mb-4">
                  Featured
                </span>
              )}

              <h3 className="font-display font-bold text-2xl text-paper">
                {project.title}
              </h3>

              <p className="text-muted mt-4 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-signal/90 bg-signal/10 rounded px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-signal text-ink px-5 py-2 rounded-md font-mono text-sm font-semibold uppercase tracking-wide hover:bg-paper transition-colors"
    >
      GitHub ↗
    </a>
  )}

  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-line px-5 py-2 rounded-md font-mono text-sm font-semibold uppercase tracking-wide text-paper hover:border-signal hover:text-signal transition-colors"
    >
      Live Demo
    </a>
  )}
</div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
