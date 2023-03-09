import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = ["home", "showcase", "projects", "contact"];

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
            {menus.map((menu) => (
              <li className="menu__item">
                <a href={`#${menu}`}>{menu}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
