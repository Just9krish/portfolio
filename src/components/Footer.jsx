import { BiEdit } from "react-icons/bi";
import useOnScrollAnimation from "../hooks/useOnScrollAnimation";
import { motion } from "framer-motion";

const sectionVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
  },
};

export default function Footer() {
  const isVisible = useOnScrollAnimation("footer");

  return (
    <motion.footer
      variants={sectionVariants}
      animate={isVisible ? "visible" : "hidden"}
      id="footer"
      className="footer"
    >
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
    </motion.footer>
  );
}
