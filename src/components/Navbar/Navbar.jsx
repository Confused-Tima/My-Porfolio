import react, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageURL } from "../../utils.js";

export const Navbar = () => {
  const [menuOpen, menuUpdate] = useState(false);
  console.log(menuOpen && false);
  return (
    <nav className="marginContainer">
      <div className="escapeBlur">
        <a className={styles.title}>Portfolio</a>
      </div>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageURL("nav/closeIcon.png")
              : getImageURL("nav/menuIcon.png")
          }
          alt="Menu"
          onClick={() => menuUpdate(prev => !prev)}
        />
        <ul
          className={
            menuOpen
              ? `${styles.menuItems} ${menuOpen && styles.menuOpen}`
              : styles.menuItems
          }
          onClick={() => menuUpdate(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
