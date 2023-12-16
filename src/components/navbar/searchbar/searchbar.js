import React from "react";
import styles from "./searchbar.module.css";
import { ReactComponent as SearchIcon } from "../../../assets/Search icon.svg";
export const Searchbar = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.search_wrapper} onSubmit={handlesubmit}>
      <input
        className={styles.searchField}
        placeholder="Search a album of your choice"
      />
      <button type="submit" className={styles.search_button}>
        <SearchIcon />
      </button>
    </form>
  );
};
