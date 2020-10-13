import React from "react";
import Backdrop from "./Backdrop";
import Aux from "../../hoc/Auxiliary";

const Modal = (props) => {
  return (
    <Aux>
      <Backdrop removeBackdrop={props.removeBackdrop} />
      <div className="Modal">{props.children}</div>
    </Aux>
  );
};

export default Modal;
