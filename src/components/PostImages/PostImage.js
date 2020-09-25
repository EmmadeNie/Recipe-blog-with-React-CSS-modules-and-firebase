import React from "react";
import image from "../../assets/images/kipburger.jpeg";

const PostImage = (props) => {
  return (
    <div>
      <img src={image} alt="kipburger" />
    </div>
  );
};

export default PostImage;
