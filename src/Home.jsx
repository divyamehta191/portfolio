import "./Home.css";
// import "./App.css"
import { useEffect, useState } from "react";

function Home() {
  const roles = [
    "Full Stack Developer",
   
    "React Developer",
    "Backend Developer",
     
   
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section className="hero">
      {/* Floating Shapes */}
      <div className="circle one"></div>
      <div className="circle two"></div>
      <div className="circle three"></div>

      <div className="hero-content">
        <p className="tag">{text}<span>|</span></p>

        <h2>Hello, I'm</h2>
        <h1>Divya</h1>

        <p className="desc">
          I create modern, premium and high-performance websites with smooth
          animations, responsive layouts and clean code that help brands grow.
        </p>

        <div className="btns">
          <button className="primary">View Projects</button>
          <button className="secondary">Hire Me</button>
        </div>
      </div>
    </section>
  );
}

export default Home;