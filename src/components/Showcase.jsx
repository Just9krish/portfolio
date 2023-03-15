import { useState } from "react";
import { Data as projects } from "../utils/ProjectsData";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import ProjectsGrid from "./ProjectsGrid";
import { NavLink } from "react-router-dom";
import useOnScrollAnimation from "../hooks/useOnScrollAnimation";
import { motion } from "framer-motion";

const sectionVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
  },
};

export default function Showcase() {
  const isVisible = useOnScrollAnimation("showcase");

  const [slide, setSlide] = useState(0);

  function changeSlide(direction) {
    if (direction == "l") {
      setSlide((pre) => (pre == 0 ? projects.length - 1 : pre - 1));
    }

    if (direction == "r") {
      setSlide((pre) => (pre == projects.length - 1 ? 0 : pre + 1));
    }
  }

  function handleClick(e) {
    const value = parseInt(e.target.firstElementChild.textContent);
    setSlide(value);
  }

  return (
    <motion.section
      variants={sectionVariants}
      animate={isVisible ? "visible" : "hidden"}
      className="showcase"
      id="showcase"
    >
      <div className="container">
        <h2 className="showcase__title">Showcase.</h2>
        <div className="showcase__content">
          <p className="showcase__description">
            These are a few picks for projects. Each page explains the steps I
            take to construct a project, the technology stack I use, what I
            learned, and how I come up with solutions.
          </p>
          <div className="showcase__slider-container">
            <div
              className="showcase__card-container"
              style={{ transform: `translateX(${-100 * slide}vw)` }}
            >
              {projects?.map((project, idx) => (
                <div
                  style={{
                    minWidth: `${
                      idx === slide ? "calc(100vw - 4rem)" : "100vw"
                    }`,
                    scale: `${idx === slide ? "1" : ".7"}`,
                  }}
                  className="showcase__card"
                  key={idx}
                >
                  <a href="">
                    <div className="showcase__card-content">
                      <div className="showcase__card-img-container">
                        <img
                          className="showcase__card-img"
                          src={project.image}
                        />
                      </div>
                      <div className="showcase__card-tags-container">
                        <div className="showcase__card-tags">
                          {project.techstack?.map((tech, idx) => (
                            <span className="showcase__card-tag" key={idx}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                  <h3 className="showcase__card-title">{project.name}</h3>
                  <p className="showcase__card-description">
                    {project.brief.slice(0, 200)}
                  </p>
                  <NavLink to="/project">
                    <p
                      className="showcase__card-btn"
                      aria-label="Link to project details"
                    >
                      view project
                    </p>
                  </NavLink>
                </div>
              ))}
            </div>
            <div
              className="showcase__control showcase__control--left"
              onClick={() => changeSlide("l")}
              role="button"
              aria-label="Previous slide"
            >
              <VscTriangleLeft />
            </div>
            <div
              className="showcase__control showcase__control--right"
              onClick={() => changeSlide("r")}
              role="button"
              aria-label="Next slide"
            >
              <VscTriangleRight />
            </div>
            <ul className="dot-controls">
              {projects?.map((project, idx) => (
                <li
                  className={`dot-controls__dot ${
                    idx == slide ? "dot-active" : ""
                  }`}
                  key={idx}
                  onClick={handleClick}
                  aria-label={`Slide ${idx + 1}`}
                  role="button"
                >
                  <span className="sr-only">{idx + 1}</span>
                </li>
              ))}
            </ul>
          </div>
          <ProjectsGrid />
        </div>
      </div>
    </motion.section>
  );
}
