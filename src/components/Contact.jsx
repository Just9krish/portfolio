import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="contact__title">Contact!</h2>
        <div class="contact__content">
          <div class="contact__info">
            <p class="contact__description">
              Feel free to reach out me if you have questions or just want to
              connect.
            </p>
            <p>
              <a
                href="mailto:rvamit2648@gmail.com"
                target="_blank"
                class="contact__email-link"
                aria-label="Email"
              >
                rvamit2648@gmail.com
              </a>
            </p>
            <div class="contact__socials">
              <div class="contact__socials-list">
                <a
                  href="https://github.com/just9krish"
                  target="_blank"
                  class="contact__socials-item"
                  aria-label="Github"
                  rel="noopener"
                >
                  <span class="sr-only">Github</span>
                  <BsGithub class="contact__socials-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rvamit2648/"
                  target="_blank"
                  class="contact__socials-item"
                  aria-label="Linkedin"
                  rel="noopener"
                >
                  <span class="sr-only">LinkedIn</span>
                  <FaLinkedinIn class="contact__socials-icon" />
                </a>
                <a
                  href="https://twitter.com/rvamit2648"
                  target="_blank"
                  class="contact__socials-item"
                  aria-label="Twitter"
                  rel="noopener"
                >
                  <span class="sr-only">Twitter</span>
                  <FaTwitter class="contact__socials-icon" />
                </a>
              </div>
            </div>
          </div>
          <div class="contact__form-wrapper">
            <form class="contact__form" action="">
              <h2 class="contact__form-title">Drop Me a Message</h2>
              <div class="contact__form-group">
                <label for="name" class="sr-only">
                  Your Name
                </label>
                <input
                  id="name"
                  class="contact__form-input"
                  type="text"
                  placeholder="Your Name *"
                  required
                />
              </div>
              <div class="contact__form-group">
                <label for="email" class="sr-only">
                  Your Email
                </label>
                <input
                  id="email"
                  class="contact__form-input"
                  type="email"
                  placeholder="Your Email *"
                  required
                />
              </div>
              <div class="contact__form-group">
                <label for="message" class="sr-only">
                  Your Message
                </label>
                <textarea
                  id="message"
                  class="contact__form-input contact__form-textaria"
                  placeholder="Your Message *"
                  required
                />
              </div>
              <div class="contact__form-group">
                <button class="cta-btn cta-btn--contact" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
