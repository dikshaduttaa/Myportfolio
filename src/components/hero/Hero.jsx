import React from 'react'
import Aboutimg from "../../assets/about/Aboutimg.gif";
import styles from "./Hero.module.css"

export default function Hero() {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>
            Hi , I'm Diksha
        </h1>
        <span className={styles.description}>
  I specialize in building user-friendly, responsive, and visually <br />
  appealing web applications. With a strong foundation in HTML, <br />CSS, JavaScript, 
  and React, I turn ideas into functional and elegant <br /> interfaces. 
  Let’s create something amazing together!
</span>

        <a href = "mailto:myemail@email.com" className={styles.contactBtn}>Contact me</a>
    </div>
    <img
        src={Aboutimg}
        alt="Hero image of me"
        className={styles.Aboutimg}
      />
   </section>
  );
}