import React from "react";
import styles from "./About.module.css";
import Header from "../header/Header";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img
          src="https://preview.colorlib.com/theme/selling/images/about_1.jpg"
          alt=""
        />
        <div className={styles.imgContent}>
          <p className={styles.imgText}>Trusted Merchant</p>
          <span>for 50 years</span>
        </div>
      </div>
      <div className={styles.aboutContent}>
        <Header>About Us</Header>
        <button className={styles.button}>Learn More</button>
      </div>
    </div>
  );
}
