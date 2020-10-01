import React from "react";
import image from "../../assets/images/kipburger.jpeg";

const post = (props) => {
  console.log(props.post.author);
  return (
    <article className="Post" onClick={props.viewPostHandler}>
      <div className="Post-container">
        <img className="Image" src={image} alt="kipburger" />
        <div className="Heading">
          <h1>{props.post.title}</h1>
          <div className="Info">
            <div className="Author">{props.post.author}</div>
            <div className="Content">{props.post.caption}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default post;
