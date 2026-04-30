import "./Projects.css"
function Projects() {
    return (
       <section className="projects" id="projects-section">
  <h2>Projects</h2>

<div className="cards">

  <div className="card">
    <img src={`${process.env.PUBLIC_URL}/elearning.png`} />
    <h3>E-Learning Platform</h3>
    <p>
      A responsive e-learning website with course listings, category filtering,
      and clean UI. Built using React and CSS with focus on user-friendly design.
    </p>

    <div className="project-buttons">
      <a href="https://github.com/divyamehta191/e-learning" target="_blank" rel="noopener noreferrer" className="project-btn github">
        GitHub
      </a>

      <a href="https://divyamehta191.github.io/e-learning/" target="_blank" rel="noopener noreferrer" className="project-btn demo">
        Live Demo
      </a>
    </div>
  </div>

  <div className="card">
    <img src={`${process.env.PUBLIC_URL}/todo.png`} />
   <h3>Full Stack Todo App</h3>
<p>
  A full stack task management application built with React, Node.js,
  and MongoDB. Implements CRUD operations with real-time updates and
  efficient data handling through REST APIs.
</p>

    <div className="project-buttons">
      <a href="https://github.com/divyamehta191/to-do-app" target="_blank" rel="noopener noreferrer" className="project-btn github">
        GitHub
      </a>

      <a href="https://divyamehta191.github.io/to-do-app/" target="_blank" rel="noopener noreferrer" className="project-btn demo">
        Live Demo
      </a>
    </div>
  </div>

  <div className="card">
    <img src={`${process.env.PUBLIC_URL}/figma.png`} />
    <h3>Figma to HTML</h3>
    <p>
      Converted a Figma design into a fully responsive website using HTML,
      CSS, and animations. Focused on pixel-perfect UI and smooth transitions.
    </p>

    <div className="project-buttons">
      <a href="https://github.com/divyamehta191/figma" target="_blank" rel="noopener noreferrer" className="project-btn github">
        GitHub
      </a>

      <a href="https://divyamehta191.github.io/figma/" target="_blank" rel="noopener noreferrer" className="project-btn demo">
        Live Demo
      </a>
    </div>
  </div>

  <div className="card">
    <img src={`${process.env.PUBLIC_URL}/mercia.png`} />
    <h3>Mercia Website</h3>
    <p>
      A modern business website with clean layout and responsive design.
      Includes multiple sections, animations, and optimized UI for all devices.
    </p>

    <div className="project-buttons">
      <a href="https://github.com/divyamehta191/mercia-" target="_blank" rel="noopener noreferrer" className="project-btn github">
        GitHub
      </a>

      <a href="https://divyamehta191.github.io/mercia-/" target="_blank" rel="noopener noreferrer" className="project-btn demo">
        Live Demo
      </a>
    </div>
          </div>
          
          {/* second looop */}

           <div className="card">
    <img src={`${process.env.PUBLIC_URL}/elearning.png`} />
    <h3>E-Learning Platform</h3>
    <p>
      A responsive e-learning website with course listings, category filtering,
      and clean UI. Built using React and CSS with focus on user-friendly design.
    </p>

    <div className="project-buttons">
      <a href="https://github.com/divyamehta191/e-learning" target="_blank" rel="noopener noreferrer" className="project-btn github">
        GitHub
      </a>

      <a href="https://divyamehta191.github.io/e-learning/" target="_blank" rel="noopener noreferrer" className="project-btn demo">
        Live Demo
      </a>
    </div>
  </div>

  <div className="card">
    <img src={`${process.env.PUBLIC_URL}/todo.png`} />
   <h3>Full Stack Todo App</h3>
<p>
  A full stack task management application built with React, Node.js,
  and MongoDB. Implements CRUD operations with real-time updates and
  efficient data handling through REST APIs.
</p>

    <div className="project-buttons">
      <a href="https://github.com/divyamehta191/to-do-app" target="_blank" rel="noopener noreferrer" className="project-btn github">
        GitHub
      </a>

      <a href="https://divyamehta191.github.io/to-do-app/" target="_blank" rel="noopener noreferrer" className="project-btn demo">
        Live Demo
      </a>
    </div>
  </div>

  <div className="card">
    <img src={`${process.env.PUBLIC_URL}/figma.png`} />
    <h3>Figma to HTML</h3>
    <p>
      Converted a Figma design into a fully responsive website using HTML,
      CSS, and animations. Focused on pixel-perfect UI and smooth transitions.
    </p>

    <div className="project-buttons">
      <a href="https://github.com/divyamehta191/figma" target="_blank" rel="noopener noreferrer" className="project-btn github">
        GitHub
      </a>

      <a href="https://divyamehta191.github.io/figma/" target="_blank" rel="noopener noreferrer" className="project-btn demo">
        Live Demo
      </a>
    </div>
  </div>

  <div className="card">
    <img src={`${process.env.PUBLIC_URL}/mercia.png`} />
    <h3>Mercia Website</h3>
    <p>
      A modern business website with clean layout and responsive design.
      Includes multiple sections, animations, and optimized UI for all devices.
    </p>

    <div className="project-buttons">
      <a href="https://github.com/divyamehta191/mercia-" target="_blank" rel="noopener noreferrer" className="project-btn github">
        GitHub
      </a>

      <a href="https://divyamehta191.github.io/mercia-/" target="_blank" rel="noopener noreferrer" className="project-btn demo">
        Live Demo
      </a>
    </div>
  </div>

</div>
        
</section>
    )
}
export default Projects