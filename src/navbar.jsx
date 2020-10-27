import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  
    return (<div className="topnav">
    <NavLink to="/resume" className="logo" >Logo</NavLink>
    <NavLink to="/resume" className="navli" activeClassName="active">Resume</NavLink>
    <NavLink to="/projects" className="navli" activeClassName="active">Projects</NavLink>
    <NavLink to="/freebies" className="navli" activeClassName="active">Freebies</NavLink>
    <NavLink to="/contact" className="navli" activeClassName="active">Contact</NavLink>
    <NavLink to="/socialmedia" className="navli" activeClassName="active">Social</NavLink>
  </div>  );
}

export default NavBar;