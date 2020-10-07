import React from "react";
import { FiEdit2, FiCheck } from "react-icons/fi";

const button = (props) => {
  return (
    <button className="btn-edit" onClick={props.handleOnClick}>
      <span> {props.text}</span>
      {props.icon === "FiEdit2" ? (
        <FiEdit2 color={"green"} />
      ) : (
        <FiCheck color={"green"} />
      )}
    </button>
  );
};

export default button;
