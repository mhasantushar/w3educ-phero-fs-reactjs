import React from "react";
import { NavLink } from "react-router";
import '../index.css'

const HeaderComp = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Sing In</NavLink>
      </li>
      <li>
        <NavLink to="/signon">Sign On</NavLink>
      </li>
    </>
  );

  return (
    <header>
      <div className="bg-base-100 shadow-sm navbar">
        <nav className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="z-1 bg-base-100 shadow mt-3 p-2 rounded-box w-52 menu menu-sm dropdown-content"
            >
              {navLinks}
            </ul>
          </div>
          <a className="text-xl btn btn-ghost">daisyUI</a>
        </nav>
        <nav className="hidden lg:flex navbar-center">
          <ul className="px-1 menu menu-horizontal">{navLinks}</ul>
        </nav>
        <nav className="navbar-end">
          <a className="btn">Button</a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComp;
