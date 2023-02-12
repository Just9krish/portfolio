import React from "react";

export default function Footer() {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a href="#top" className="back-to-top">
          <i class="fas fa-angle-up" aria-hidden="true"></i>
        </a>

        <div className="social-links">
          <a href="#" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-twitter"></i>
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
