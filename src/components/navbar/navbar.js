import React from "react";
import styles from "../navbar/navbar.module.css";
import { Logo } from "./logo/logo";
import { Searchbar } from "./searchbar/searchbar";
import { Button } from "./button/Button";
export const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <Logo />
        <Searchbar />
        <Button text={"Give Feedback"} />
      </div>
    </div>
  );
};
