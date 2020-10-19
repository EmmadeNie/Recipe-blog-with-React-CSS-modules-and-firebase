import React from "react";
import { FiEdit2, FiCheck, FiX } from "react-icons/fi";



const button = (props) => {
let icon=<FiEdit2 color={"green"}/>;

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
    default :
       icon = <FiEdit2 color={"green"}/>;
    break;
}

let className = props.disabled ? "btn-edit btn-disabled" : "btn-edit"



  return (
    <button className={className} onClick={props.handleOnClick} disabled={props.disabled}>
      <span> {props.text}</span>
      {icon}
    </button>
  );
};

export default button;
