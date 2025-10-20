import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "../index.css";
import AuthContext from "../contexts/AuthContext";

const HeaderComp = () => {
  const { loggedInUser, signOutUserAccount } = use(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Sign In</NavLink>
      </li>
      <li>
        <NavLink to="/signon">Sign On</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      {loggedInUser && (
        <>
          <li>
            <NavLink to="/orders">Orders</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    signOutUserAccount()
      .then(() => {
        alert("Sign out successful");
      })
      .catch((error) => {
        alert(`Sign out failed!
        ${error.code} - ${error.message}`);
      });
  };

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

          {loggedInUser ? (
            <a className="text-xl btn btn-ghost">{loggedInUser.email}</a>
          ) : (
            <Link to="/signin" className="text-xl btnbtn-ghost">
              Sign in
            </Link>
          )}
        </nav>
        <nav className="hidden lg:flex navbar-center">
          <ul className="px-1 menu menu-horizontal">{navLinks}</ul>
        </nav>
        <nav className="navbar-end">
          {loggedInUser ? (
            <a onClick={handleSignOut} className="btn">
              Sign Out
            </a>
          ) : (
            <Link to="/signin" className="btn">
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default HeaderComp;
