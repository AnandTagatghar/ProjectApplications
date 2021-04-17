import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Emoji from "./emoji";
import Minion from "./Minion";
import ProjectsNav from "./ProjectsNav";
import RecipeBook from "./RecipeBook";

const Projects = () => {
  return (
    <BrowserRouter>
      <ProjectsNav />
      <Route exact path="/projects" component={Emoji} />
      <Route path="/recipeBook" component={RecipeBook} />
      <Route path="/minion" component={Minion} />
    </BrowserRouter>
  );
};

export default Projects;
