import React from "react";

import plus from "../../../assets/images/plus.png";

const button = (props) => {
  return (
    <button className="Button" onClick={props.clicked}>
      <img src={plus} style={{ height: "64px" }} alt="myBurger" />
    </button>
  );
};

export default button;
