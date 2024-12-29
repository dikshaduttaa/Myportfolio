import React from 'react';
import styles from "./Study.module.css";

function Study() {
  return (
    <div id="about" className={styles.container}>
      <h3 className={styles.title}>Education</h3>
      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <h4>National Institute of Technology, Kurukshetra</h4>
            <p>Kurukshetra, India</p>
            <p>November 2022 - June 2026</p>
            <p>B.Tech in Information Technology</p>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <h4>National Infotech</h4>
            <p>Birgunj, Nepal</p>
            <p>2020 - 2022</p>
            <p>10+2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Study;
