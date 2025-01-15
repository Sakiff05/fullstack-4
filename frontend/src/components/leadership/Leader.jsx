import React from "react";
import styles from "./Leader.module.css";
import Header from "../header/Header";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";

export default function Leader() {
  return (
    <div className={styles.container}>
      <Header>Leadership</Header>
      <div className={`grid grid-cols-1 sm:grid-cols-4 gap-8 items-center`}>
        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <img
              src="https://preview.colorlib.com/theme/selling/images/person_2.jpg"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <p className={styles.name}>John Rooster</p>
            <p className={styles.job}>Co-Founder, President</p>
            <p>
              Nisi at consequatur unde molestiae quidem provident voluptatum
              deleniti quo iste error eos est praesentium distinctio cupiditate
              tempore suscipit inventore deserunt tenetur.
            </p>
            <div className={styles.icons}>
              <FaInstagram className={styles.icon} />
              <FaFacebookF className={styles.icon} />
              <FaPinterestSquare className={styles.icon} />
              <FaSquareXTwitter className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <img
              src="https://preview.colorlib.com/theme/selling/images/person_1.jpg"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <p className={styles.name}>John Rooster</p>
            <p className={styles.job}>Co-Founder, President</p>
            <p>
              Nisi at consequatur unde molestiae quidem provident voluptatum
              deleniti quo iste error eos est praesentium distinctio cupiditate
              tempore suscipit inventore deserunt tenetur.
            </p>
            <div className={styles.icons}>
              <FaInstagram className={styles.icon} />
              <FaFacebookF className={styles.icon} />
              <FaPinterestSquare className={styles.icon} />
              <FaSquareXTwitter className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <img
              src="https://preview.colorlib.com/theme/selling/images/person_3.jpg"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <p className={styles.name}>John Rooster</p>
            <p className={styles.job}>Co-Founder, President</p>
            <p>
              Nisi at consequatur unde molestiae quidem provident voluptatum
              deleniti quo iste error eos est praesentium distinctio cupiditate
              tempore suscipit inventore deserunt tenetur.
            </p>
            <div className={styles.icons}>
              <FaInstagram className={styles.icon} />
              <FaFacebookF className={styles.icon} />
              <FaPinterestSquare className={styles.icon} />
              <FaSquareXTwitter className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <img
              src="https://preview.colorlib.com/theme/selling/images/person_4.jpg"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <p className={styles.name}>John Rooster</p>
            <p className={styles.job}>Co-Founder, President</p>
            <p>
              Nisi at consequatur unde molestiae quidem provident voluptatum
              deleniti quo iste error eos est praesentium distinctio cupiditate
              tempore suscipit inventore deserunt tenetur.
            </p>
            <div className={styles.icons}>
              <FaInstagram className={styles.icon} />
              <FaFacebookF className={styles.icon} />
              <FaPinterestSquare className={styles.icon} />
              <FaSquareXTwitter className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
