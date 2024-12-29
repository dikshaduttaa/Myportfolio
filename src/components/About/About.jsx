import React from 'react';
import Aboutimg from "../../assets/about/Aboutimg.jpg";
import styles from "./About.module.css";

function About() {
  return (
    <div id="about" className={styles.container}>
      <h3 className={styles.title}>ABOUT</h3>
      <div className={styles.list}>
        <img 
        src={Aboutimg} 
        alt="hero-image" 
        className={styles.image} 
      />
        <ul className={styles.AboutItems}>
          <li className={styles.listItem}>
            <div>
            <h4>Frontend Developer</h4>
<p>
  Passionate about crafting visually appealing and user-friendly websites. 
  Proficient in modern web technologies like HTML, CSS, JavaScript, and React. 
  Experienced in responsive design, optimizing performance, and delivering seamless user experiences.
</p>

            </div>
          </li>
          <li className={styles.listItem}>
            <div>
            <h4>Programmer</h4>
<p>
  Skilled in problem-solving and writing efficient, clean code. 
  Proficient in programming languages like Java, Python, and C. 
  Experienced in data structures, algorithms, and building scalable software solutions. 
  Passionate about learning new technologies and improving coding skills.
</p>

            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
