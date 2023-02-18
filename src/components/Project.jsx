export default function Project(props) {
  return (
    <div className="project">
      <div className="project__text load-hidden">
        <h3 className="project__text-title">{props.obj.name}</h3>
        <div>
          <p>{props.obj.brief}</p>
        </div>
        <div>
          <a
            href={props.obj.live}
            target="_blank"
            className="cta-btn cta-btn--hero"
          >
            See live
          </a>
          <a
            href={props.obj.repo}
            target="_blank"
            className="cta-btn cta-btn--main"
          >
            Souce code
          </a>
        </div>
      </div>
      <div className="project__image">
        <img src={props.obj.image} alt="" className="img-fluid" />
      </div>
    </div>
  );
}
