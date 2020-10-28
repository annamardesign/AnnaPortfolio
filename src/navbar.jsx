import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import { FiTwitter} from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { RiBehanceLine} from 'react-icons/ri';
import { FiCodepen } from 'react-icons/fi';
import "./navbar.css";

const NavBar = () => {
  
    return (<div className="topnav">
    <NavLink to="/resume" className="logo" >Logo</NavLink>
    <NavLink to="/resume" className="navli" activeClassName="active">Resume</NavLink>
    <NavLink to="/projects" className="navli" activeClassName="active">Projects</NavLink>
    <NavLink to="/freebies" className="navli" activeClassName="active">Freebies</NavLink>
    <NavLink to="/contact" className="navli" activeClassName="active">Contact</NavLink>
    <ul className="social-container">
    <li className="icon"><a href="https://www.twitter.com/annamardesign" className="social" activeClassName="active"><FiTwitter /></a></li>
    <li className="icon"><a href="https://www.github.com/annamardesign" className="social" activeClassName="active"><FiGithub /></a></li>
    <li className="icon"><a href="https://www.behance.net/AnnaMarino" className="social" activeClassName="active"><RiBehanceLine /></a></li>
    <li className="icon"><a href="https://www.codepen.io/annamardesigns/pens/" className="social" activeClassName="active"><FiCodepen /></a></li>
    </ul>
  </div>  );
}

export default NavBar;