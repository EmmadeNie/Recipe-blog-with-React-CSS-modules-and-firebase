import React from "react";
import { FiTag } from "react-icons/fi";

const button = (props) => {
  return (
    <button className="btn-edit">
    <FiTag />
      <a href="/home"> {props.text}   </a>
        
    </button>
  );
};

export default button;
