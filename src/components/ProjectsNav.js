import React from "react";
import { Link, NavLink } from "react-router-dom";
const ProjectsNav = () => {
  return (
    <div className="navbar-nav text-right bg-primary py-2">
      <div className="container">
        <Link className="btn" to="/emoji">
          emojiChecker
        </Link>
        <NavLink className="btn" to="/recipeBook">
          recipeBook
        </NavLink>
        <NavLink className="btn" to="/minion">
          minion
        </NavLink>
      </div>
    </div>
  );
};

export default ProjectsNav;
