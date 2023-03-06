export default function Herosection() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <h1 className="hero__title">
          Amit Vishwakarma
          {/* Hi, my name is
          <span className="hero__title-name text-color-main">
            {" "}
            Amit Vishwakarma
          </span>
          <br />
          I'm the Full Stack Developer. */}
        </h1>
        <p className="hero__discription">
          I'm Full Stack Developer on a quest to constantly expand my skills and
          push the boundaries of what's possible. Let's start scrolling and
          learn more about me.
        </p>
        <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#projects">
          View my work
        </a>
      </div>
    </section>
  );
}
