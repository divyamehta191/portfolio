import "./About.css";

function About() {
  const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      desc: "Modern responsive websites using HTML, CSS, JavaScript and React.js."
    },
    {
      icon: "⚡",
      title: "Backend Development",
      desc: "Scalable APIs and server-side applications using Node.js & Express."
    },
    {
      icon: "🗄️",
      title: "Database Integration",
      desc: "Efficient database design and management with MongoDB."
    },
    {
      icon: "🎨",
      title: "Figma to Website",
      desc: "Pixel-perfect conversion of Figma designs into live responsive websites."
    },
    {
      icon: "🌐",
      title: "WordPress Solutions",
      desc: "Custom WordPress websites using Elementor, themes and plugins."
    }
  ];

  return (
    <section className="about-section">
      <div className="about-top">
        <p className="tag">MY SERVICES</p>
        <h2>What I Provide</h2>
        <p className="subtext">
          I create modern, fast and user-friendly digital solutions that help
          businesses grow online.
        </p>
      </div>

      <div className="service-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <span className="icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;