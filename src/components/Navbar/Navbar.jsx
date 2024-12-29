import React, { useState } from "react";
import closeIcon from "../../assets/nav/closeIcon.png";
import menuIcon from "../../assets/nav/menuIcon.png";
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>Portfolio</a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={styles.menuItems}>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="/resume.pdf" download className={styles.downloadResume}>
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
