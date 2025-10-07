import React from "react";
import { Link, NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h3>This is a header</h3>
      <nav>
        {/* <a href="/">Home</a>
        <a href="/mobiles"> Mobiles</a>
        <a href="/laptops"> Laptops</a> */}

        {/* <Link to="/">Home</Link>
        <Link to="/mobiles"> Mobile</Link>
        <Link to="/laptops"> Laptop</Link> */}

        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles"> Mobile</NavLink>
        <NavLink to="/laptops"> Laptop</NavLink>
        <NavLink to="/users"> Users</NavLink>
        <NavLink to="/users2"> Users2</NavLink>
        <NavLink to="/posts">
        {
          ({isPending})=> (
            <span>Posts {isPending && <h5>Loading users</h5>} </span>
          )
        }
        {/* this is a local spinner (local pending navigaion) */}
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
