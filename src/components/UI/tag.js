import React from "react";
import { FiTag } from "react-icons/fi";

const Tag = (props) => {
  return (
      <a className="tag-item" href="/home"> <FiTag /> {props.text}   </a>
  );
};

export default Tag;
