import { Data as projects } from "../utils/ProjectsData";

export default function ProjectsGrid() {
  return (
    <div class="projects-grid">
      {projects.map((project) => (
        <div class="projects-grid__project" key={project.id}>
          <div class="projects-grid__image-container">
            <img
              class="projects-grid__image"
              src={project.image}
              alt={project.name}
            />
          </div>
          <div class="projects-grid__content">
            <h2 class="projects-grid__title">{project.name}</h2>
            <p class="projects-grid__description">
              {project.brief.slice(0, 140)}.....
            </p>
            <a class="projects-grid__link" href={project.repo}>
              view project
              <span class="sr-only">{project.name}</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
