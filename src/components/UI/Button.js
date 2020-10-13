import React from "react";
import { FiEdit2, FiCheck, FiX } from "react-icons/fi";



const button = (props) => {
let icon=<FiEdit2 color={"green"}/>;

console.log(props.icon)
switch (props.icon) {
  case "FiEdit2":
    icon = <FiEdit2 color={"green"}/>;
    break;
  case "FiCheck":
    icon = <FiCheck color={"green"}/>;
    break;
  case "FiX":
     icon = <FiX color={"green"}/>;
    break;
}

  return (
    <button className="btn-edit" onClick={props.handleOnClick}>
      <span> {props.text}</span>
      {icon}
    </button>
  );
};

export default button;
