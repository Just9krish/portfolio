import { Data as projects } from "../utils/ProjectsData";

export default function ProjectsGrid() {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <div className="projects-grid__project" key={project.id}>
          <div className="projects-grid__image-container">
            <img
              className="projects-grid__image"
              src={project.image}
              alt={project.name}
            />
          </div>
          <div className="projects-grid__content">
            <h2 className="projects-grid__title">{project.name}</h2>
            <p className="projects-grid__description">
              {project.brief.slice(0, 140)}.....
            </p>
            <a className="projects-grid__link" href={project.repo}>
              view project
              <span className="sr-only">{project.name}</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
