import React from "react";
import logo from "../../src/assets/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className="px-3 font-bold">
        Home
      </NavLink>
      <NavLink to="/apps" className="px-3 font-bold">
        Apps
      </NavLink>
      <NavLink to="/my-installation" className="px-3 font-bold">
        My Installation
      </NavLink>
    </>
  );

  return (
    <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 bg-white"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Hero Logo"
            className="w-10 h-10 object-contain"
          />
          <p className="text-xl font-bold text-[#632EE3]">HERO.IO</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to={"https://github.com/"}>
        <button className="flex items-center gap-2 btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
        
          <FaGithub />
          Contribute
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
