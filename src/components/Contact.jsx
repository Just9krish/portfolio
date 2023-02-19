export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div class="contact__wrapper">
          {/* <div className="contact__image-wrapper">
            <img src={contactImg} alt="" className="contact__image" />
          </div> */}
          <div class="contact__form-wrapper">
            <h2 className="contact__form-title section-title">
              Drop Me a Message
            </h2>
            <form class="contact__form" action="">
              <div>
                <div class="contact__form-group">
                  <input
                    id="name"
                    class="contact__input"
                    type="text"
                    placeholder="Your Name *"
                    required
                  />
                </div>
                <div class="contact__form-group">
                  <input
                    id="email"
                    class="contact__input"
                    type="email"
                    placeholder="You Email *"
                    required
                  />
                </div>
              </div>
              <div className="">
                <div class="contact__form-group">
                  <textarea
                    id="message"
                    class="contact__input textaria"
                    type="text"
                    placeholder="Your Message *"
                    required
                  />
                </div>
              </div>
              <div class="contact__form-group">
                <button class="cta-btn--contact">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
