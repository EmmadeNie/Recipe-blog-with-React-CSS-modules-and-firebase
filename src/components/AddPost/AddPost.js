import React from "react";
import styles from "./AddPost.module.css";
import Icon from "../../assets/images/plus-white.png";
import image from "../../assets/images/kipburger.jpeg";

const addPost = (props) => {
  return (
    <article className={styles["Post"]} onClick={props.viewPostHandler}>
      <div className={styles["Post-container"]}>
        <img className={styles["Image"]} src={image} alt="kipburger" />
        <div className={styles["Heading"]}>
          <img className={styles["Icon"]} src={Icon} alt="add post" />
          <h1>Add Post</h1>
        </div>
      </div>
    </article>
  );
};

export default addPost;
