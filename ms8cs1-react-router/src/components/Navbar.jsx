import React from "react";
import { NavLink, Link } from "react-router";
import ThemeToggle from "./ThemeToggle";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../providers/CartContext";
import { useContext } from "react";

const Navbar = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <nav className="bg-base-100 shadow-sm navbar">
      <div className="navbar-start">
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
            tabIndex={0}
            className="z-1 bg-base-100 shadow mt-3 p-2 rounded-box w-52 menu menu-sm dropdown-content"
          >
            <li>
              {" "}
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about">About</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/cart">
                <ShoppingCart />
              </Link>{" "}
            </li>
          </ul>
        </div>
        <a className="text-xl btn btn-ghost">daisyUI</a>
      </div>
      <div className="hidden lg:flex navbar-center">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "bg-gray-400" : null)}
              to="/"
            >
              Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "bg-gray-400" : null)}
              to="/contact"
            >
              Contact
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "bg-gray-400" : null)}
              to="/about"
            >
              About
            </NavLink>{" "}
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "bg-gray-400" : null)}
              to="/cart"
            >
              <div className="relative">
                <ShoppingCart />
                <span className="-top-2 -right-2 absolute font-bold">
                  {cart.length}
                </span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
