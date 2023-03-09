import { useState } from "react";
import { Data as projects } from "../utils/ProjectsData";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";

export default function Showcase() {
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
    <section className="showcase" id="showcase">
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
                      idx === slide ? "calc(100vw - 2rem)" : "100vw"
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
                          {project.techstack?.map((tech) => (
                            <span className="showcase__card-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                  <h3 className="showcase__card-title">{project.name}</h3>
                  <p className="showcase__card-description">
                    {project.brief.slice(0, 200)}
                  </p>
                  <a
                    href="#"
                    className="showcase__card-btn"
                    aria-label="Link to showcase"
                  >
                    view project
                  </a>
                </div>
              ))}
            </div>
            <div
              className="showcase__control showcase__control--left"
              onClick={() => changeSlide("l")}
            >
              <VscTriangleLeft />
            </div>
            <div
              className="showcase__control showcase__control--right"
              onClick={() => changeSlide("r")}
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
                >
                  <span className="sr-only">{idx}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
