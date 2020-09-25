import React from "react";
import styles from "./Post.module.css";

import image from "../../assets/images/kipburger.jpeg";

const post = (props) => {
  console.log(props.post.author);
  return (
    <article className={styles["Post"]} onClick={props.viewPostHandler}>
      <div className={styles["Post-container"]}>
        <img className={styles["Image"]} src={image} alt="kipburger" />
        <div className={styles["Heading"]}>
          <h1>{props.post.title}</h1>
          <div className={styles["Info"]}>
            <div className={styles["Author"]}>{props.post.author}</div>
            <div className={styles["Content"]}>{props.post.caption}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default post;
