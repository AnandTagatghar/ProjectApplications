import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-nav bg-warning py-2">
      <div className="container">
        <Link className="btn  " to="/">
          Home
        </Link>
        <NavLink className="btn " to="/projects">
          Projects
        </NavLink>
        <NavLink className="btn " to="/about">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
