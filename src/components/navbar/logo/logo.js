import React from "react";
import { ReactComponent as Headphone } from "../../../assets/headphone_icon.svg";
import styles from "./logo.module.css";
export const Logo = () => {
  return (
    <div className={styles.logo_div}>
      <Headphone className={styles.headphone} />
      &nbsp;&nbsp;Q&nbsp;&nbsp;&nbsp;tify
    </div>
  );
};
