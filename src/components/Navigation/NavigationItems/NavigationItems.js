import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./NavigationItems.module.css";

const navigationItems = () => {
  return (
    <ul className={styles["NavigationItems"]}>
      <NavigationItem link="/home" active>
        Home
      </NavigationItem>
      <NavigationItem link="/posts" active>
        Posts
      </NavigationItem>
      <NavigationItem link="/">Contact</NavigationItem>
      <NavigationItem link="/new-post">New Post</NavigationItem>
    </ul>
  );
};

export default navigationItems;
