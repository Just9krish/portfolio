import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function About() {
  const [slide, setSlide] = useState(0);

  function changeSlide(direction) {
    if (direction === "l") {
      setSlide(slide !== 0 ? slide - 1 : 3 - 1);
    }

    if (direction === "r") {
      setSlide(slide === 3 - 1 ? 0 : slide + 1);
    }
  }

  console.log(slide);

  return (
    <section class="showcase" id="showcase">
      <div class="container">
        <h2 class="showcase__title">Showcase</h2>
        <div class="showcase__content">
          <p class="showcase__description">
            These are a few picks for projects. Each page explains the steps I
            take to construct a project, the technology stack I use, what I
            learned, and how I come up with solutions.
          </p>
          <div class="showcase__slider-container">
            <div
              class="showcase__card-container"
              style={{ transform: `translateX(${-100 * slide}vw)` }}
            >
              <div class="showcase__card">
                <div class="showcase__card-img-container">
                  <img class="showcase__card-img" src="./public/profile.jpg" />
                </div>
                <h3 class="showcase__card-title">boxby</h3>
                <p class="showcase__card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  voluptatum perferendis error veritatis repellendus soluta quia
                  delectus aspernatur deserunt, in, autem minus et aperiam
                  illum?
                </p>
                <button class="showcase__card-btn">view project</button>
              </div>
              <div class="showcase__card">
                <div class="showcase__card-img-container">
                  <img
                    class="showcase__card-img"
                    src="./public/profile.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <h3 class="showcase__card-title">boxby</h3>
                <p class="showcase__card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  voluptatum perferendis error veritatis repellendus soluta quia
                  delectus aspernatur deserunt, in, autem minus et aperiam
                  illum?
                </p>
                <button class="showcase__card-btn">view project</button>
              </div>
              <div class="showcase__card">
                <div class="showcase__card-img-container">
                  <img
                    class="showcase__card-img"
                    src="./public/profile.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <h3 class="showcase__card-title">boxby</h3>
                <p class="showcase__card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  voluptatum perferendis error veritatis repellendus soluta quia
                  delectus aspernatur deserunt, in, autem minus et aperiam
                  illum?
                </p>
                <button class="showcase__card-btn">view project</button>
              </div>
            </div>
            <div class="showcase__controls">
              <div
                class="showcase__control showcase__control--left"
                onClick={() => changeSlide("l")}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <div
                class="showcase__control showcase__control--right"
                onClick={() => changeSlide("r")}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
