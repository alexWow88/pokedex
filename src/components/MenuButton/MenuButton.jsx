import React from "react";
import { Link } from "react-router-dom";
import "./MenuButton.scss";

const MenuButton = ({ text, linkTo }) => {
  return (
    <Link to={linkTo}>
      <button className="menu-button">{text}</button>
    </Link>
  );
};

export default MenuButton;
