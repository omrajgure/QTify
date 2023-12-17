import React from "react";
import styles from "../hero/hero.module.css";
import { ReactComponent as Vibrating_headphone } from "../../assets/vibrating-headphone 1.svg";
import img from "../../assets/vibrating-headphone 1.png";
export const Hero = () => {
  return (
    <div className={styles.hero_div}>
      <div className={styles.hero_inner_splitdiv}>
        <div className={styles.hero_txt}>
          <p>100 Thousand Songs, ad-free</p>
          <p>Over thousands podcast episodes</p>
        </div>
        <div>
          <img src={img} />
        </div>
      </div>
    </div>
  );
};
