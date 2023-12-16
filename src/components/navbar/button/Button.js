import React from "react";
import styles from "./Button.module.css";
export const Button = ({ text }) => {
  return (
    <div>
      <button className={styles.button}>{text}</button>
    </div>
  );
};
