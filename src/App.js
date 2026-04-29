
import React, { useEffect }  from "react";
// import "./App.css";
import Header from "./Header"
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Projects";
import Contact from "./Contact";

function App() {

  return (
    <div>
      <Header/>
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact/>
    </div>
  );
}

export default App;

