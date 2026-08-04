import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import { SiJavascript, SiCplusplus } from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <FaCode />,
      skills: [
        { name: "C", icon: <FaCode /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
    },
    {
      title: "Frontend",
      icon: <FaReact />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "React.js", icon: <FaReact /> },
      ],
    },
    {
      title: "Backend",
      icon: <FaNodeJs />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "REST APIs", icon: <FaCode /> },
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: [
        { name: "SQL Server", icon: <FaDatabase /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "Normalization", icon: <FaDatabase /> },
      ],
    },
    {
      title: "Development",
      icon: <FaCode />,
      skills: [
        { name: "Full-Stack Web Development", icon: <FaReact /> },
        { name: "Admin Panel Development", icon: <FaCode /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-28 px-6 border-t border-line">
      <div className="max-w-7xl mx-auto">

        <p className="font-mono text-signal text-sm uppercase tracking-widest mb-3 text-center">
          [ Skills ]
        </p>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-paper text-center mb-16">
          What I work with
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-surface border border-line rounded-xl p-8 hover:border-signal/60 transition-colors duration-300"
            >
              <div className="text-3xl text-signal mb-5">{category.icon}</div>

              <h3 className="font-display font-bold text-xl text-paper mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-muted hover:text-paper transition-colors"
                  >
                    <span className="text-lg text-signal/80">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;
