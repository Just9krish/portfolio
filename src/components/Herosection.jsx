export default function Herosection() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <h1 className="hero__title">
          Hello, <br />
          My name is Amit.
        </h1>
        <p className="hero__discription">
          I am recent graduate from Mumbai University with a degree in
          Information Technology.
        </p>
        <p className="hero__discription">
          My primary interests lie in building web applications and Restful
          APIs.
        </p>
        <p className="hero__discription">
          I am comfortable working with languages such as JavaScript, HTML, and
          CSS, and I am familiar with web frameworks like React, Node, and
          Express. Additionally, I have experience working with databases like
          MySQL and MongoDB.
        </p>
        <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#projects">
          Get My Resume
        </a>
      </div>
    </section>
  );
}
