import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React JS", icon: "⚛️" },
    { name: "Node JS", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "WordPress", icon: "📝" },
    { name: "Figma", icon: "🎯" },
    { name: "GitHub", icon: "🐙" }
  ];

  return (
    <section className="skills-section">
      <div className="skills-top">
        <p className="tag">MY EXPERTISE</p>
        <h2>My Skills</h2>
        <p className="section-text">
          Technologies I use to build responsive, scalable and modern web
          applications.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span className="skill-icon">{skill.icon}</span>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;