import { Data } from "../utils/ProjectsData";
import Project from "./Project";
import { BiBookBookmark, BiCalendarAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";

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
      ejs: "#A91E50",
      scss: "#C6538C",
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
          {repos.slice(0, 6).map((repo) => (
            <div class="projects__card" key={repo.id}>
              <div className="projects__card-head">
                <BiBookBookmark className="projects__card-icon" />
                <a
                  target="_blank"
                  href={repo.html_url}
                  class="projects__card-title"
                >
                  {repo.name}
                </a>
              </div>
              <p class="projects__card-description">{repo.description}</p>
              <div class="projects__card-info">
                <div class="projects__card-language">
                  <span
                    class="projects__card-language--color"
                    style={{ backgroundColor: getColor(repo.language) }}
                  ></span>
                  <span>{repo.language}</span>
                </div>
                <div class="projects__card-date">
                  <BiCalendarAlt />
                  <span>
                    {formatDistanceToNow(new Date(repo.created_at), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
