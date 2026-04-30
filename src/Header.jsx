import { useState } from "react";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">

      {/* Hamburger / Cross (same button) */}
     <div className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
  <span></span>
  <span></span>
  <span></span>
</div>

      {/* Menu */}
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>

    </nav>
  );
}

export default Header;