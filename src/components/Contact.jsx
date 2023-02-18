import contactImg from "../assets/undraw_hello.svg";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div class="contact__wrapper">
          <div className="contact__image-wrapper">
            <img src={contactImg} alt="" className="contact__image" />
          </div>
          <div class="contact__form-wrapper">
            <h2 className="section-title">Contact</h2>
            <form class="contact__form" action="">
              <div class="contact__form-group">
                <input id="name" class="contact__input" type="text" required />
                <label class="contact__label" for="name">
                  Name
                </label>
              </div>
              <div class="contact__form-group">
                <input
                  id="email"
                  class="contact__input"
                  type="email"
                  required
                />
                <label class="contact__label" for="email">
                  Email
                </label>
              </div>
              <div class="contact__form-group">
                <input
                  id="message"
                  class="contact__input"
                  type="text"
                  required
                />
                <label class="contact__label" for="message">
                  Message
                </label>
              </div>
              <div class="contact__form-group">
                <button class="cta-btn cta-btn--resume contact__btn">
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
