import { NavLink, useLocation, useParams } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
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

  // Generate project description for SEO
  const generateProjectDescription = () => {
    const techList = techstack.join(", ");
    return `${name} - A project built with ${techList}. ${brief.split('\n')[2] || brief.split('\n')[1] || 'View the full project details and source code.'}`;
  };

  return (
    <>
      <Helmet>
        <title>{name} | Amit Vishwakarma - Full Stack Developer</title>
        <meta name="description" content={generateProjectDescription()} />
        <meta name="keywords" content={`${name}, ${techstack.join(', ')}, Amit Vishwakarma, Full Stack Developer, Web Development, React, Node.js`} />

        {/* Open Graph */}
        <meta property="og:title" content={`${name} | Amit Vishwakarma - Full Stack Developer`} />
        <meta property="og:description" content={generateProjectDescription()} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://amitdev.netlify.app/showcase/${showcaseSlug}`} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta name="twitter:title" content={`${name} | Amit Vishwakarma - Full Stack Developer`} />
        <meta name="twitter:description" content={generateProjectDescription()} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={image} />

        {/* Canonical */}
        <link rel="canonical" href={`https://amitdev.netlify.app/showcase/${showcaseSlug}`} />

        {/* Additional Project Meta */}
        <meta property="article:author" content="Amit Vishwakarma" />
        <meta property="article:section" content="Portfolio Projects" />
        <meta property="article:tag" content={techstack.join(', ')} />
      </Helmet>

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
