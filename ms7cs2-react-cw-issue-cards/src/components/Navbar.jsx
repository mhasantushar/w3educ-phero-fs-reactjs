import React from "react";

const Navbar = () => {
  return (
    <section className="mb-12">
      <div className="bg-indigo-300 shadow-md">
        <div className="mx-auto navbar container">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="lg:hidden btn btn-ghost"
              >
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
                  <a>Home</a>
                </li>
                <li>
                  <a>Faculty</a>
                </li>
                <li>
                  <a>Students</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <a className="font-bold text-xl btn btn-ghost btn-primary">
              PH University
            </a>
          </div>
          <div className="hidden lg:flex navbar-center">
            <ul className="px-1 menu menu-horizontal">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Faculty</a>
              </li>
              <li>
                <a>Students</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-primary">+ New Assignment</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
