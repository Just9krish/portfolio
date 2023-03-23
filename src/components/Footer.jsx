import { BiEdit } from "react-icons/bi";
import useOnScrollAnimation from "../hooks/useOnScrollAnimation";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <p className="footer__wrapper-description">
            Made with <span className="sr-only">love</span>❤️ and{" "}
            <span className="sr-only">tea</span> ☕ by{" "}
            <a
              className="footer__wrapper-description-link"
              href="https://github.com/just9krish"
              aria-label="github account"
            >
              Amit Vishwakarma
            </a>
            .
          </p>
          <a
            className="footer__wrapper-action"
            href="https://github.com/Just9krish/portfolio"
            aria-label="edit this page"
          >
            <BiEdit className="footer__wrapper-action-icon" />
            Edit this Page
          </a>
        </div>
      </div>
    </footer>
  );
}
