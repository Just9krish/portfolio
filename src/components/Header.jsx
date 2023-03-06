import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">Amit</div>
      {!isOpen ? (
        <button
          className="header__menu-button"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      ) : (
        <button
          className="header__menu-button"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}

      <div className={`header__menu-items ${isOpen ? "active" : ""}`}>
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">Home</li>
            <li className="menu__item">About</li>
            <li className="menu__item">Skills</li>
            <li className="menu__item">Projects</li>
            <li className="menu__item">Blogs</li>
            <li className="menu__item">Contacts</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
