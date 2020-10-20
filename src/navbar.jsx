import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  
    return (<div className="topnav">
    <NavLink to="/resume" className="logo">Logo</NavLink>
    <NavLink to="/resume" className="navli">Resume</NavLink>
    <NavLink to="/projects" className="navli">Projects</NavLink>
    <NavLink to="/freebies" className="navli">Freebies</NavLink>
    <NavLink to="/contact" className="navli">Contact</NavLink>
    <NavLink to="/socialmedia" className="navli">Social</NavLink>
  </div>  );
}

export default NavBar;