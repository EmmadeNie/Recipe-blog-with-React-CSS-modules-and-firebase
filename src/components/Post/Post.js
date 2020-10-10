import React from "react";
import image from "../../assets/images/kipburger.jpeg";

const post = (props) => {
  
  return (
    <article className="post" onClick={props.viewPostHandler}>
      <div className="post--container">
        <img className="post__image" src={image} alt="kipburger" />
        <div className="post__textbox">
          <h1>{props.post.title}</h1>
          <div className="post__textbox--container">
            <div className="post__textbox--author">{props.post.author}</div>
            <div className="post__textbox--content">{props.post.sequence}</div>
            <div className="post__textbox--content">{props.post.date}</div>
            <div className="post__textbox--content">{props.post.tags.map(tag=>`#${tag} `)}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default post;
