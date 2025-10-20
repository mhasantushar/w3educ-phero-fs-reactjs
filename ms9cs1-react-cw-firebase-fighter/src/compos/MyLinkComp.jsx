import React from "react";
import { NavLink } from "react-router";

const MyLinkComp = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-purple-500 font-semibold" : `${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLinkComp;
