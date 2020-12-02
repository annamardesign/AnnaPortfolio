import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import NavBar from "./navbar";
import Logo from "./logo";
import Herosection from "./herosection";
import Project from "./project";
import Projects from "./projects";
import Freebies from "./freebies";
import Contact from "./contact";
import './App.css';


const App = () => {
  
  return (
    <React.Fragment>
    <NavBar />
    <main className="container">
      <Switch>
      <Route path="/logo" component={Logo}/>
      <Route path="/resume" component={Herosection}/>
      <Route path="/projects/:id" component={Project}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/freebies" component={Freebies}/>
      <Route path="/contact" component={Contact}/>
      <Redirect from="/" exact to ="/resume"/>
      <Redirect from="/logo" exact to ="/resume"/>
      <Redirect to="/not-found"/>
      </Switch>
    </main>
    </React.Fragment>
  );
}

export default App;
