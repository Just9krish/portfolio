import { NavLink, useLocation } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";

export default function Project() {
  const location = useLocation();

  const { name, live, repo, techstack, id, image } = location.state;

  return (
    <>
      <header className="project-header">
        <div>
          <div className="project-header__logo">
            <a
              href="/"
              aria-label="Home page"
              className="project-header__logo-link"
            >
              &lt;amit&gt;
            </a>
          </div>
          <div>
            <NavLink to="/" className="project-header__nav-link">
              <div className="project-header__btn">
                <BsChevronLeft /> back
              </div>
            </NavLink>
          </div>
        </div>
      </header>
      <div className="section">
        <h2 className="section__title">{name}</h2>
        <div className="section__block">
          <p className="section__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo
            nostrum magnam voluptatem minus consequuntur non magni! Provident
            incidunt veritatis corrupti qui, similique mollitia odit repudiandae
            consequuntur architecto maxime? Numquam explicabo iure ab
            repellendus, impedit officiis. Unde repellat nihil quis minima
            soluta aperiam eaque eius?
          </p>
        </div>
        <div className="section__block">
          <div className="section__list-container">
            <div>
              <h4 className="section__list-title">Techstack</h4>
              <ul className="section__list">
                {techstack.map((tech, idx) => (
                  <li className="section__list__item" key={idx}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="section__list-title">Links</h4>
              <ul className="section__list">
                <li className="section__list__item">
                  <a className="section__list__item-link pinkish" href={live}>
                    Live Site
                  </a>
                </li>
                <li className="section__list__item">
                  <a className="section__list__item-link pinkish" href={repo}>
                    Repository
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section__block">
          <div className="section__image-container">
            <img src={image} alt="" className="section__image" />
          </div>
        </div>

        <div className="section__block">
          <h4 className="section__subtitle">What I learned</h4>
          <p className="section__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            sint quas quam! Cum autem modi totam ipsa, hic doloribus voluptas
            maiores id deleniti sapiente sit aspernatur veniam consequatur
            pariatur quaerat earum voluptate praesentium eius odit sint aliquid
            provident natus vel maxime? Minus repellat magni maxime, rem quasi
            quia tempora consequuntur aperiam sunt quisquam quibusdam maiores
            accusamus repellendus, eos dolorum quod in placeat voluptas et
            dolores ipsam sint cum ut id?
          </p>
        </div>

        <div className="section__block">
          <h4 className="section__subtitle">Continued development</h4>
          <p className="section__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sequi
            pariatur ratione, reiciendis quas illo molestias, aliquam nobis fuga
            asperiores id! Delectus culpa libero provident cumque magnam
            molestias fugit debitis eaque et autem. Laudantium officia, corrupti
            recusandae earum, facere pariatur, obcaecati vitae ab minima hic
            libero repellat veritatis. Eum, eveniet.
          </p>
        </div>

        <div className="section__block">
          <h4 className="section__subtitle">Useful resources</h4>
          <ul className="section__resource__list">
            <li className="section__resource__list-item">we3bev</li>
            <li className="section__resource__list-item">we3bev</li>
            <li className="section__resource__list-item">we3bev</li>
          </ul>
        </div>
      </div>
    </>
  );
}
