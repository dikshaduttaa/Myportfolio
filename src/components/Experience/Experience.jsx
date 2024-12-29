import React, { useState, useEffect } from "react";
import skills from "../../data/skills.json";
import styles from "./Experience.module.css";

import adobeImg from "../../assets/skills/adobe.png";
import cImg from "../../assets/skills/c.png";
import canvaImg from "../../assets/skills/canva.png";
import cssImg from "../../assets/skills/css.png";
import htmlImg from "../../assets/skills/html.png";
import javaImg from "../../assets/skills/java.png";
import jsImg from "../../assets/skills/javascript.png";
import reactImg from "../../assets/skills/react.png";
import shopifyImg from "../../assets/skills/shopify.png";

const images = {
  "html.png": htmlImg,
  "css.png": cssImg,
  "react.png": reactImg,
  "javascript.png": jsImg,
  "c.png": cImg,
  "java.png": javaImg,
  "shopify.png": shopifyImg,
  "canva.png": canvaImg,
  "adobe.png": adobeImg,
};

function Experience() {
  const [showButton, setShowButton] = useState(false);

  // Handle scroll visibility for the button
  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById("experience");
      const sectionPosition = experienceSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (sectionPosition <= screenHeight / 2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={images[skill.imageSrc]} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
      {showButton && (
        <button className={styles.goToTop} onClick={scrollToTop}>
          ↑
        </button>
      )}
    </section>
  );
}

export default Experience;
