import React from "react";

import styles from "./Contact.module.css";
import emailIcon from "../../assets/contact/email.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:duttadd99@gmail.com">duttadd99@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <a href="www.linkedin.com/in/diksha-dutta-23286025a">LinkedIn</a>
        </li>
      </ul>
    </footer>
  );
};
