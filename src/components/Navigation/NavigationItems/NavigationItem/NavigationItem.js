import React from "react";

const navigationItem = (props) => {
  return (
    <li className="nav__items">
      <a
        to={props.link}
        href={props.link}
        className={props.active ? "nav__items-active" : null}
      >
        {props.children}
      </a>
    </li>
  );
};

export default navigationItem;
