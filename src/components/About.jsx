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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam harum debitis error veniam illo iste officiis.
                Consequatur corrupti voluptate eos nulla voluptates aut
                architecto nihil quo earum magnam, ipsum ipsa.
              </p>
              <p className="about-wrapper__info-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                amet?
              </p>
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
