import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = ["home", "showcase", "projects", "contact"];

  return (
    <>
      {/* header for mobile */}
      <motion.header
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
        className="header"
      >
        <div className="header__logo" aria-label="Home page">
          &lt;amt&gt;
        </div>
        {!isOpen ? (
          <button
            className="header__menu-button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls="header-menu"
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
              {menus?.map((menu, idx) => (
                <li className="menu__item" key={idx}>
                  <a href={`#${menu}`} onClick={() => setIsOpen(false)}>
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* header for desktop */}

      <motion.header
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
        className="desktop-header"
      >
        <div className="desktop-header__logo">
          <a href="/" aria-label="Home page">
            &lt;amit&gt;
          </a>
        </div>
        <nav className="desktop-header__nav">
          <ul className="desktop-header__menu">
            {menus?.map((menu, idx) => (
              <li className="desktop-header__menu-item" key={idx}>
                <a
                  href={`#${menu}`}
                  className="desktop-header__menu-link"
                  aria-label={`Jump to ${menu} section`}
                >
                  {menu}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.header>
    </>
  );
}
