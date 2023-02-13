import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title load-hidden">About me</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__image load-hidden">
              <img
                className="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src={profile}
                alt="Profile Image"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <p className="about-wrapper__info-text">
                Hi, I'm Amit, a full-stack web developer, I am driven by the
                desire to create visually stunning and highly efficient
                websites. My unique blend of technical expertise and creative
                vision allows me to approach each project with a fresh
                perspective, resulting in websites that not only look great but
                also deliver a seamless user experience.
              </p>
              <p className="about-wrapper__info-text">
                Here is list of technologies I've been working with recently:
              </p>
              <ul className="about-wrapper__info-skills">
                <li className="about-wrapper__info-skill">Javascript (ES6+)</li>
                <li className="about-wrapper__info-skill">Typescript</li>
                <li className="about-wrapper__info-skill">React.js</li>
                <li className="about-wrapper__info-skill">Node.js</li>
                <li className="about-wrapper__info-skill">Express.js</li>
                <li className="about-wrapper__info-skill">MongoDB</li>
              </ul>

              <span className="d-flex mt-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--resume"
                  href="assets/resume.pdf"
                >
                  View Resume
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
