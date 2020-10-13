import React from "react";

const backdrop = (props) => {
  return <div className="Backdrop" onClick={props.removeBackdrop}></div>;
};

export default backdrop;
