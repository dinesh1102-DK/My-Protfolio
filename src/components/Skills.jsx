import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
  FaCode
} from "react-icons/fa";

export default function Skills() {

  const skills = [
    {
      icon: <FaHtml5 color="#ff5722" />,
      title: "HTML"
    },

    {
      icon: <FaCss3Alt color="#2196f3" />,
      title: "CSS"
    },

    {
      icon: <FaJs color="#ffd600" />,
      title: "JavaScript"
    },

    {
      icon: <FaReact color="#61dafb" />,
      title: "React"
    },

    {
      icon: <FaCode color="#a855f7" />,
      title: ".NET"
    },

    {
      icon: <FaDatabase color="#38bdf8" />,
      title: "SQL"
    }
  ];

  return (
    <section id="skills">

      <h2 className="section-title">
        
        <span>Skills</span>
      </h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
          >
            {skill.icon}

            <h3>
              {skill.title}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}