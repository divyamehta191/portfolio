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

          
  <div className="card">
    <img src={`${process.env.PUBLIC_URL}/to-do-react.png`} />
    <h3>to-do react</h3>
    <p>
     Built a Todo application using React with a focus on drag and drop functionality for smooth and interactive task reordering.
    </p>

    <div className="project-buttons">
      <a href="https://github.com/divyamehta191/to-do-react" target="_blank" rel="noopener noreferrer" className="project-btn github">
        GitHub
      </a>

      <a href="https://divyamehta191.github.io/to-do-react/" target="_blank" rel="noopener noreferrer" className="project-btn demo">
        Live Demo
      </a>
    </div>
          </div>
           <div className="card">
    <img src={`${process.env.PUBLIC_URL}/finance.png`} />
    <h3>Finance-tracking-app</h3>
    <p>
    A Finance Tracking App is a simple and efficient tool that helps users manage their personal income and expenses in one place. It allows users to easily add, edit, and delete transactions while keeping track of their overall financial balance in real time.
    </p>

    <div className="project-buttons">
      <a href="https://github.com/divyamehta191/finance-tracking.git" target="_blank" rel="noopener noreferrer" className="project-btn github">
        GitHub
      </a>

      <a href="https://divyamehta191.github.io/finance-tracking/" target="_blank" rel="noopener noreferrer" className="project-btn demo">
        Live Demo
      </a>
    </div>
          </div>
           <div className="card">
    <img src={`${process.env.PUBLIC_URL}/gallary.png`} />
    <h3>Gallary</h3>
    <p>
   A Gallery App is a responsive image display application that beautifully organizes images in a structured layout. It dynamically arranges images into rows and columns, providing an Instagram-style viewing experience.
    </p>

    <div className="project-buttons">
      <a href="https://github.com/divyamehta191/gallery.git" target="_blank" rel="noopener noreferrer" className="project-btn github">
        GitHub
      </a>

      <a href="https://divyamehta191.github.io/gallery/" target="_blank" rel="noopener noreferrer" className="project-btn demo">
        Live Demo
      </a>
    </div>
          </div>
          
                   <div className="card">
    <img src={`${process.env.PUBLIC_URL}/file-uplader.png`} />
    <h3>File-uploader-app</h3>
    <p>
  A File Upload Manager is a React app that lets users upload multiple files with progress tracking, error handling, and status updates. It uses state management (like useReducer) and async logic to simulate or handle uploads, providing a smooth and user-friendly upload experience.
    </p>

    <div className="project-buttons">
      <a href="https://github.com/divyamehta191/file-upload-manager" target="_blank" rel="noopener noreferrer" className="project-btn github">
        GitHub
      </a>

      <a href="https://divyamehta191.github.io/file-upload-manager/" target="_blank" rel="noopener noreferrer" className="project-btn demo">
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

  <div className="card">
    <img src={`${process.env.PUBLIC_URL}/to-do-react.png`} />
    <h3>to-do react</h3>
    <p>
      Built a Todo application using React with a focus on drag and drop functionality for smooth and interactive task reordering.
    </p>

    <div className="project-buttons">
      <a href="https://github.com/divyamehta191/to-do-react" target="_blank" rel="noopener noreferrer" className="project-btn github">
        GitHub
      </a>

      <a href="https://divyamehta191.github.io/to-do-react/" target="_blank" rel="noopener noreferrer" className="project-btn demo">
        Live Demo
      </a>
    </div>
          </div>
              <div className="card">
    <img src={`${process.env.PUBLIC_URL}/finance.png`} />
    <h3>Finance-tracking-app</h3>
    <p>
   A Finance Tracking App is a simple and efficient tool that helps users manage their personal income and expenses in one place. It allows users to easily add, edit, and delete transactions while keeping track of their overall financial balance in real time.
    </p>

    <div className="project-buttons">
      <a href="https://github.com/divyamehta191/finance-tracking.git" target="_blank" rel="noopener noreferrer" className="project-btn github">
        GitHub
      </a>

      <a href="https://divyamehta191.github.io/finance-tracking/" target="_blank" rel="noopener noreferrer" className="project-btn demo">
        Live Demo
      </a>
    </div>
          </div>
           <div className="card">
    <img src={`${process.env.PUBLIC_URL}/gallary.png`} />
    <h3>Gallary</h3>
    <p>
     A Gallery App is a responsive image display application that beautifully organizes images in a structured layout. It dynamically arranges images into rows and columns, providing an Instagram-style viewing experience.
    </p>

    <div className="project-buttons">
      <a href="https://github.com/divyamehta191/gallery.git" target="_blank" rel="noopener noreferrer" className="project-btn github">
        GitHub
      </a>

      <a href="https://divyamehta191.github.io/gallery/" target="_blank" rel="noopener noreferrer" className="project-btn demo">
        Live Demo
      </a>
    </div>
          </div>
                           <div className="card">
    <img src={`${process.env.PUBLIC_URL}/file-uplader.png`} />
    <h3>File-uploader-app</h3>
    <p>
  A File Upload Manager is a React app that lets users upload multiple files with progress tracking, error handling, and status updates. It uses state management (like useReducer) and async logic to simulate or handle uploads, providing a smooth and user-friendly upload experience.
    </p>

    <div className="project-buttons">
      <a href="https://github.com/divyamehta191/file-upload-manager" target="_blank" rel="noopener noreferrer" className="project-btn github">
        GitHub
      </a>

      <a href="https://divyamehta191.github.io/file-upload-manager/" target="_blank" rel="noopener noreferrer" className="project-btn demo">
        Live Demo
      </a>
    </div>
  </div>
          
</div>
        
</section>
    )
}
export default Projects