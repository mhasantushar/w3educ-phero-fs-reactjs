import React from "react";
import { NavLink } from "react-router";
import "../../src/index.css";

const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <hr />
    </nav>
  );
};

export default Header;
