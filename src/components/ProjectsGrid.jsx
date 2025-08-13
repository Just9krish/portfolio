import { NavLink } from "react-router-dom";
import { Data as projects } from "../utils/ProjectsData";

export default function ProjectsGrid() {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <div className="projects-grid__project" key={project.id}>
          <div className="projects-grid__project-content">
            <div className="projects-grid__image-container">
              <img
                className="projects-grid__image"
                src={project.image}
                alt={project.name}
              />
            </div>
            <div className="projects-grid__tags-container">
              <div className="projects-grid__tags">
                {project.techstack?.map((tech, idx) => (
                  <span className="projects-grid__tag" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="projects-grid__content">
            <div>
              <h2 className="projects-grid__title">{project.name}</h2>
              <p className="projects-grid__description">
                {project.brief.slice(0, 150)}.....
              </p>
            </div>
            <div>
              <NavLink
                to={`/showcase/${project.slug}`}
                state={project}
                className="projects-grid__link"
              >
                view project
                <span className="sr-only">{project.name}</span>
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
