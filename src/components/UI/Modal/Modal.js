import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary";

const Modal = (props) => {
  console.log(props);
  return (
    <Aux>
      <Backdrop removeBackdrop={props.removeBackdrop} />
      <div className={styles["Modal"]}>{props.children}</div>
    </Aux>
  );
};

export default Modal;
 