import React from "react";
import styles from "./Services.module.css";
import Header from "../header/Header";
import { SiConsul } from "react-icons/si";

export default function Services() {
  return (
    <div className={styles.container}>
      <Header>We offer services</Header>
      <div className={`grid grid-cols-1 sm:grid-cols-4 gap-10`}>
        <div className={styles.card}>
          <div>
            <SiConsul className={styles.icon}/>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>Business Consulting</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <button className={styles.cardBtn}>Learn More</button>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <SiConsul className={styles.icon}/>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>Business Consulting</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <button className={styles.cardBtn}>Learn More</button>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <SiConsul className={styles.icon}/>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>Business Consulting</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <button className={styles.cardBtn}>Learn More</button>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <SiConsul className={styles.icon}/>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>Business Consulting</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <button className={styles.cardBtn}>Learn More</button>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <SiConsul className={styles.icon}/>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>Business Consulting</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <button className={styles.cardBtn}>Learn More</button>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <SiConsul className={styles.icon}/>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>Business Consulting</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <button className={styles.cardBtn}>Learn More</button>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <SiConsul className={styles.icon}/>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>Business Consulting</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <button className={styles.cardBtn}>Learn More</button>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <SiConsul className={styles.icon}/>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>Business Consulting</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <button className={styles.cardBtn}>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
