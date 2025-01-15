import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>About Us</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere
          laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis
          aliquam.
        </p>
      </div>
      <div className={styles.content}>
        <p className={styles.title}>Quick Links</p>
        <ul className={styles.list}>
          <li>About us</li>
          <li>Services</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className={styles.content}>
        <p className={styles.title}>Follow Us</p>
        <div className={styles.icons}>
          <FaInstagram className={styles.icon} />
          <FaFacebookF className={styles.icon} />
          <FaPinterestSquare className={styles.icon} />
          <FaSquareXTwitter className={styles.icon} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.title}>Quick Links</p>
        <ul className={styles.list}>
          <li>About us</li>
          <li>Services</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </footer>
  );
}
