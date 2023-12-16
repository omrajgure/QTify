import React from "react";
import styles from "../navbar/navbar.module.css";
import { Logo } from "./logo/logo";
import { Searchbar } from "./searchbar/searchbar";
import { Feedback } from "./button/feedback_comp";
export const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <Logo />
        <Searchbar />
        <Feedback />
      </div>
    </div>
  );
};
