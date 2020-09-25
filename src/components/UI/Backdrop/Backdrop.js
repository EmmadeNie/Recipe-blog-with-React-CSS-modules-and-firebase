import React from "react";
import styles from "./Backdrop.module.css";

const backdrop = (props) => {
  return (
    <div className={styles["Backdrop"]} onClick={props.removeBackdrop}></div>
  );
};

export default backdrop;
