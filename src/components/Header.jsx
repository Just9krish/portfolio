import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

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
          <BiMenuAltRight />
        </button>
      ) : (
        <button
          className="header__menu-button"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <GrClose />
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
