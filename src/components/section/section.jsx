import React from "react";
import styles from "../section/section.module.css";
import { Card } from "../card/Card";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { Carousal } from "../carousal/carousal";
export const Section = ({ title, data, type }) => {
  const [toggle, set_toggle] = useState(true);
  const handletoggle = () => {
    set_toggle((prevstate) => {
      return !prevstate;
    });
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggletext} onClick={handletoggle}>
          {!toggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!toggle ? (
            <div className={styles.wrapper}>
              {data.map((ele) => (
                <Card data={ele} type={type} />
              ))}
            </div>
          ) : (
            <Carousal
              data={data}
              rendercomponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};
