export default function Projects() {
  return (
    <section id="projects">

      <h2 className="section-title">
        <span>Projects</span>
      </h2>

      <div className="projects-grid">

        <div className="project-card">

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
            alt="Project"
          />

          <div className="project-content">

            <h3>
              Fashion E-Commerce Website
            </h3>

            <p>
              A modern e-commerce platform built
              with React featuring product catalog,
              cart functionality and responsive UI.
            </p>

            <div className="project-buttons">
              <button>Live Demo</button>
              <button>GitHub</button>
            </div>

          </div>

        </div>

        <div className="project-card">

          <img
            src="/dk.jpg"
            alt="Project"
          />

          <div className="project-content">

            <h3>
              Portfolio Website
            </h3>

            <p>
              Personal portfolio website built
              using React with modern UI design,
              responsive layout and animations.
            </p>

            <div className="project-buttons">
              <button>Live Demo</button>
              <button>GitHub</button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}