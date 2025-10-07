import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const navItems = [
  { id: 1, navmenu: "Home", navpath: "/" },
  { id: 2, navmenu: "About", navpath: "/about" },
  { id: 3, navmenu: "Services", navpath: "/services" },
  { id: 4, navmenu: "Projects", navpath: "/projects" },
  { id: 5, navmenu: "Blog", navpath: "/blog" },
  { id: 6, navmenu: "Contact", navpath: "/contact" },
];

const Navbar = () => {
  const [navDropdownVisible, setNavDropdownVisible] = useState(false);
  // console.log(navDropdownVisible);

  const navBarItems = navItems.map((route) => (
    <li className="mr-4" key={route.id}>
      <a href={route.navpath}>{route.navmenu}</a>
    </li>
  ));

  return (
    <nav className="flex justify-between items-center bg-gray-200 shadow-md p-4">
      <span
        onClick={() => setNavDropdownVisible(!navDropdownVisible)}
        className="flex items-center gap-2 cursor-pointer">
        {
          navDropdownVisible
            ? (<X className="md:hidden w-full" />) 
            : (<Menu className="md:hidden w-full" />)
        }
        
        <ul className = {`md:hidden absolute bg-amber-100 duration-400
          ${navDropdownVisible ? "top-18" : "-top-50"}
          `}>
          {navBarItems}
        </ul>

        <h3 className="min-w-fit">My Navbar</h3>
      </span>

      <ul className="hidden md:flex">
        {navBarItems}
      </ul>
      <button className="btn btn-primary">Primary</button>
    </nav>
  );
};

export default Navbar;
