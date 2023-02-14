import React from "react";
import img from "../assets/project-img.jpg";
export default function Project(props) {
  return (
    <div className="project">
      <div className="col-lg-6 col-sm-12">
        <div className="project__text load-hidden">
          <h3 className="project__text-title">{props.obj.name}</h3>
          <div>
            <p className="mb-4">{props.obj.brief}</p>
          </div>
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
      <div className="col-lg-6 col-sm-12">
        <div className="project__image load-hidden">
          <a href="#" target="_blank">
            <div className="thumbnail rounded">
              <img src={props.obj.image} alt="" className="img-fluid" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
