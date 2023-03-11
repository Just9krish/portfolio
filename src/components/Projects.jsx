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

  // console.log(repos);

  async function fetchRepo(url) {
    const res = await fetch(url);
    const data = await res.json();
    setRepos(data);
  }

  useEffect(() => {
    fetchRepo("https://api.github.com/users/just9krish/repos?sort=created");
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__content">
          <div className="projects__header">
            <h2 className="projects__title">Projects.</h2>
            <p className="projects__description">
              These are my some project which are fetch from the Github.
            </p>
          </div>
          <a
            href="https://github.com/just9krish"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="projects__item">
              <div>
                <div className="projects__avatar">
                  <img
                    className="projects__image"
                    src="./profile.jpg"
                    alt="Profile picture of the owner"
                  />
                </div>
                <div className="projects__details">
                  <p className="projects__name">Light yagimi</p>
                  <p className="projects__subtitle">death&light</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="projects__list">
          {repos?.slice(0, 6)?.map((repo) => (
            <div className="projects__card" key={repo.id}>
              <div>
                <div className="projects__card-head">
                  <BiBookBookmark className="projects__card-icon" />
                  <a
                    target="_blank"
                    href={repo.html_url}
                    className="projects__card-title"
                  >
                    {repo.name}
                  </a>
                </div>
                <p className="projects__card-description">{repo.description}</p>
              </div>
              <div className="projects__card-info">
                <div className="projects__card-language">
                  <span
                    className="projects__card-language--color"
                    style={{ backgroundColor: getColor(repo.language) }}
                  ></span>
                  <span>{repo.language}</span>
                </div>
                <div className="projects__card-date">
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
