import React from "react";
import styles from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import { Link } from "react-router-dom";

const toolbar = (props) => {
  return (
    <div className={styles["Toolbar"]}>
      <nav>
        <NavigationItems />
      </nav>
      <Link to="/posts"></Link>
      <Link to="/new-post"></Link>
    </div>
  );
};

export default toolbar;
