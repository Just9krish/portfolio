import React from "react";
import img from "../assets/project-img.jpg";
export default function Project(props) {
  return (
    <div className="row">
      <div className="col-lg-4 col-sm--12">
        <div className="project-wrapper__text load-hidden">
          <h3 className="project-wrapper__text-title">{props.obj.name}</h3>
          <div>
            <p className="mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis officiis culpa sapiente perferendis expedita aut?
              Repellendus quam aut magni ipsa, molestiae numquam vitae error,
              labore commodi ad minima reiciendis officiis. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Accusantium exercitationem
              voluptates veritatis ducimus? Ut laudantium aliquam dolor, nihil
              esse, impedit voluptates repudiandae aperiam architecto sunt
              provident voluptatibus error dolorum alias?
            </p>
          </div>
          <a href={props.obj.live} className="cta-btn cta-btn--hero">
            See live
          </a>
          <a href={props.obj.repo} className="cta-btn cta-btn--main">
            Souce code
          </a>
        </div>
      </div>
      <div className="col-lg-8 col-sm-12">
        <div className="project-wrapper__image load-hidden">
          <a href="#">
            <div className="thumbnail rounded">
              <img src={props.obj.image} alt="" className="img-fluid" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
