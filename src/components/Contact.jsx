import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
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

export default function Contact() {
  const isVisible = useOnScrollAnimation("contact");

  return (
    <motion.section
      variants={sectionVariants}
      animate={isVisible ? "visible" : "hidden"}
      id="contact"
      className="contact"
    >
      <div className="container">
        <h2 className="contact__title">Contact!</h2>
        <div className="contact__content">
          <div className="contact__info">
            <p className="contact__description">
              Feel free to reach out me if you have questions or just want to
              connect.
            </p>
            <p>
              <a
                href="mailto:rvamit2648@gmail.com"
                target="_blank"
                className="contact__email-link"
                aria-label="Email"
              >
                rvamit2648@gmail.com
              </a>
            </p>
            <div className="contact__socials">
              <div className="contact__socials-list">
                <a
                  href="https://github.com/just9krish"
                  target="_blank"
                  className="contact__socials-item"
                  aria-label="Github"
                  rel="noopener"
                >
                  <span className="sr-only">Github</span>
                  <BsGithub className="contact__socials-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rvamit2648/"
                  target="_blank"
                  className="contact__socials-item"
                  aria-label="Linkedin"
                  rel="noopener"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedinIn className="contact__socials-icon" />
                </a>
                <a
                  href="https://twitter.com/rvamit2648"
                  target="_blank"
                  className="contact__socials-item"
                  aria-label="Twitter"
                  rel="noopener"
                >
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="contact__socials-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact__form-wrapper">
            <form
              className="contact__form"
              action="https://formspree.io/f/xpzelrpd"
              method="POST"
            >
              <h2 className="contact__form-title">Drop Me a Message</h2>
              <div className="contact__form-group">
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="off"
                  type="text"
                  placeholder="Your Name *"
                  required
                  className="contact__form-input"
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  autoComplete="off"
                  type="email"
                  placeholder="Your Email *"
                  required
                  className="contact__form-input"
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  autoComplete="off"
                  placeholder="Your Message *"
                  required
                  className="contact__form-input contact__form-textaria"
                />
              </div>
              <div className="contact__form-group">
                <button className="cta-btn cta-btn--contact" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
