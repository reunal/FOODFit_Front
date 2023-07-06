import React from "react";
import "../../styles/header/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="HeaderContainer">
      <Link to={"/"}>
        <p>Food Fit</p>
      </Link>
    </div>
  );
};

export default Header;
