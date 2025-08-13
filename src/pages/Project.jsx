import { NavLink, useLocation, useParams } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { useEffect } from "react";
import getColor from "../helper/getColor";
import { Data } from "../utils/ProjectsData";
import Markdown from "../components/Markdown";

export default function Project() {
  const { showcaseSlug } = useParams();

  const project = Data.find((project) => project.slug === showcaseSlug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const { name, live, repo, techstack, id, image, brief } = project;


  return (
    <>
      {/* Project Header */}
      <header className="project-header">
        <div>
          <NavLink to="/" className="project-header__logo">
            Amit Vishwakarma
          </NavLink>
          <NavLink to="/" className="project-header__btn">
            <BsChevronLeft />
            Back to Portfolio
          </NavLink>
        </div>
      </header>

      {/* Project Content */}
      <section className="section">
        {/* Project Title and Image */}
        <div className="section__block">
          <h1 className="section__title">{name}</h1>
          <div className="section__image-container">
            <img src={image} alt={name} className="section__image" />
          </div>
        </div>

        {/* Project Description */}
        <div className="section__block">
          <div className="section__description-container">
            <Markdown>{brief}</Markdown>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="section__block">
          <h3 className="section__subtitle">Technologies Used</h3>
          <div className="section__techstack">
            {techstack.map((tech, index) => (
              <span
                key={index}
                className="section__tech-item"
                style={{
                  backgroundColor: getColor(tech),
                  color: tech.toLowerCase() === 'javascript' ? '#000' : '#fff'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="section__block">
          <h3 className="section__subtitle">Project Links</h3>
          <div className="section__links">
            {live !== "#" && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="section__link-btn"
              >
                View Live Demo
              </a>
            )}
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="section__link-btn"
            >
              View Source Code
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
