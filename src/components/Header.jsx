import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = ["home", "showcase", "projects", "contact"];

  return (
    <>
      {/* header for mobile */}
      <header className="header">
        <div className="header__logo">{`<amit>`}</div>
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

      {/* header for desktop */}

      <header class="desktop-header">
        <div class="desktop-header__logo">
          <a href="/" aria-label="Page">
            &lt;amit&gt;
          </a>
        </div>
        <nav class="desktop-header__nav">
          <ul class="desktop-header__menu">
            {menus.map((menu) => (
              <li class="desktop-header__menu-item">
                <a href={`#${menu}`} class="desktop-header__menu-link">
                  {menu}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
