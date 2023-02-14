export default function Herosection() {
  return (
    <section id="hero" className="jumbotron">
      <div className="container">
        <h1 className="hero-title load-hidden">
          Hi, my name is
          <span className="text-color-main"> Amit Vishwakarma</span>
          <br />
          I'm the MERN stack Developer.
        </h1>
        <p className="hero-cta load-hidden">
          <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">
            Know more
          </a>
        </p>
      </div>
    </section>
  );
}
