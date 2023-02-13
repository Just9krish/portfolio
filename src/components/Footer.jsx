import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a href="#top" className="back-to-top">
          <FontAwesomeIcon icon={faAngleUp} />
        </a>

        <div className="social-links">
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <hr />
        <p className="footer__text">
          &#169; 2023 - Made by{" "}
          <a href="#" target="_blank">
            just9krish
          </a>
        </p>
      </div>
    </footer>
  );
}
