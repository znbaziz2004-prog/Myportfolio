const experience = [
  {
    role: "Web Developer Intern",
    company: "DevGlint (SMC-Private) Limited",
    mode: "Online",
    period: "Oct 2025 – Jan 2026",
    points: [
      "Contributed to the development of responsive web applications using React, JavaScript, and Node.js.",
      "Developed a full-stack e-commerce clothing platform, including a fully functional admin dashboard.",
      "Implemented features for product management, order processing, and user control.",
      "Collaborated in an agile environment, participating in team meetings, code reviews, and debugging sessions.",
      "Ensured code quality, performance optimization, and timely project delivery.",
    ],
    // TODO: drop your experience letter PDF into /public and update this filename
    // (or rename your PDF to match) — same pattern as Zainab_Aziz_CV.pdf.
    letter: "/DevGlint_Experience_Letter.pdf",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-28 px-6 border-t border-line">
      <div className="max-w-4xl mx-auto">

        <p className="font-mono text-signal text-sm uppercase tracking-widest mb-3 text-center">
          [ Experience ]
        </p>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-paper text-center mb-16">
          Where I've worked
        </h2>

        <div className="border-l-2 border-line">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              <span className="absolute left-0 top-1.5 w-3 h-3 -translate-x-1/2 rounded-full bg-signal ring-4 ring-ink" />

              <h3 className="font-display font-bold text-2xl text-paper">
                {job.role}
              </h3>

              <p className="font-semibold text-paper mt-1">
                {job.company}
                <span className="text-muted font-normal"> · {job.mode}</span>
              </p>

              <p className="font-mono text-sm text-muted uppercase tracking-wide mt-1">
                {job.period}
              </p>

              <ul className="mt-5 space-y-3">
                {job.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-muted leading-7">
                    <span className="text-signal">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {job.letter && (
                <a
                  href={job.letter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 border border-line px-5 py-2 rounded-md font-mono text-sm font-semibold uppercase tracking-wide text-paper hover:border-signal hover:text-signal transition-colors"
                >
                  View Experience Letter ↗
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
