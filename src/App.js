import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import NavBar from "./navbar";
import Logo from "./logo";
import Resume from "./resume";
import Projects from "./projects";
import Freebies from "./freebies";
import Contact from "./contact";
import SocialMedia from "./socialmedia";
import './App.css';


function App() {
  return (
    <React.Fragment>
    <NavBar />
    <main className="container">
      <Switch>
      <Route path="/logo" component={Logo}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/freebies" component={Freebies}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/socialmedia" component={SocialMedia}/>
      <Redirect from="/" exact to ="/resume"/>
      <Redirect from="/logo"to ="/resume"/>
      <Redirect to="/not-found"/>
      </Switch>
    </main>
    </React.Fragment>
  );
}

export default App;
