import React from "react";
import styles from "./Header.module.css";

export default function Header({ children }) {
  return (
    <div className={styles.header}>
      <p className={styles.p2}>{children}</p>
      <p className={styles.p3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
        consequatur laboriosam ipsam.
      </p>
    </div>
  );
}
