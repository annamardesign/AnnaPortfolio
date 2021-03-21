import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Logo from "./logo";
import Herosection from "./pages/herosection";
import Project from "./pages/project";
import Projects from "./pages/projects";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/logo" component={Logo} />
          <Route path="/resume" component={Herosection} />
          <Route path="/projects/:id" component={Project} />
          <Route path="/projects" component={Projects} />
          {/* <Route path="/freebies" component={Freebies} /> */}
          <Redirect from="/" exact to="/resume" />
          <Redirect from="/logo" exact to="/resume" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
