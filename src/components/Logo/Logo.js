import React from "react";
import Logo from "../../assets/images/StrokeWht-800px.png";
import styles from "./Logo.module.css";

const logo = (props) => {
  return (
    <div className={styles["Logo"]}>
      <img src={Logo} alt="SugarSnapFoods" />
    </div>
  );
};

export default logo;
