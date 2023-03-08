import { Data } from "../utils/ProjectsData";
import Project from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  function getColor(language) {
    const colors = {
      python: "#3572A5",
      java: "#B07219",
      javascript: "#F7DF1E",
      c: "#555555",
      cpp: "#F34B7D",
      html: "#E34F26",
      css: "#1572B6",
    };
    return colors[language.toLowerCase()] || "#000000";
  }

  console.log(repos);

  async function fetchRepo(url) {
    const res = await fetch(url);
    const data = await res.json();
    setRepos(data);
  }

  useEffect(() => {
    fetchRepo("https://api.github.com/users/just9krish/repos?sort=created");
  }, []);

  return (
    <section class="projects" id="projects">
      <div class="container">
        <div class="projects__header">
          <h2 class="projects__title">Projects.</h2>
          <p class="projects__description">
            These are my some project which are fetch from the Github.
          </p>
        </div>
        <div class="projects__item">
          <div class="projects__avatar">
            <img class="projects__image" src="./profile.jpg" alt="" />
          </div>
          <div class="projects__details">
            <p class="projects__name">Light yagimi</p>
            <p class="projects__subtitle">death&light</p>
          </div>
        </div>
        <div class="projects__list">
          <div class="projects__card">
            <div className="projects__card-head">
              <FontAwesomeIcon className="projects__card-icon" icon={faBook} />
              <a href="#" class="projects__card-title">
                Fileshare
              </a>
            </div>
            <p class="projects__card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sunt
              doloremque delectus molestias vitae dolorum optio necessitatibus
              nihil.
            </p>
            <div class="projects__card-info">
              <span class="projects__card-color projects__card-color--yellow">
                yellow color
              </span>
              <span class="projects__card-language projects__card-language--javascript">
                javascript
              </span>
            </div>
          </div>
          <div class="projects__card">
            <h4 class="projects__card-title">byakugenjs</h4>
            <p class="projects__card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sunt
              doloremque delectus molestias vitae dolorum optio necessitatibus
              nihil.
            </p>
            <div class="projects__card-info">
              <span class="projects__card-color projects__card-color--blue">
                blue color
              </span>
              <span class="projects__card-language projects__card-language--python">
                python
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
