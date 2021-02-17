import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { RiBehanceLine } from "react-icons/ri";
import { FiCodepen } from "react-icons/fi";
import { VscThreeBars } from "react-icons/vsc";
import { TiTimes } from "react-icons/ti";
import ReactTooltip from "react-tooltip";
import Logo from "../logo.jsx";
import "./navbar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <React.Fragment>
      <div className="navbar">
        <NavLink to="/resume" className="logo" onClick={closeMobileMenu}>
          <Logo />
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <TiTimes className="close" />
          ) : (
            <VscThreeBars className="bars" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/resume"
              className="navli"
              activeClassName="active"
              onClick={closeMobileMenu}
            >
              Resume
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              className="navli"
              activeClassName="active"
              onClick={closeMobileMenu}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/freebies"
              className="navli"
              activeClassName="active"
              onClick={closeMobileMenu}
            >
              Freebies
            </NavLink>
          </li>
          <li className="icon">
            <a
              href="https://www.twitter.com/annamardesign"
              data-tip="twitter"
              data-for="twitter"
              className="social"
              activeclassname="active"
            >
              <FiTwitter />
            </a>
          </li>
          <ReactTooltip
            id="twitter"
            place="bottom"
            data-offset="{'place': 'left'}"
            type="light"
            effect="solid"
          />
          <li className="icon">
            <a
              href="https://www.github.com/annamardesign"
              data-tip="git"
              data-for="git"
              className="social"
              activeclassname="active"
            >
              <FiGithub />
            </a>
          </li>
          <ReactTooltip
            id="git"
            place="bottom"
            data-offset="{'place': 'left'}"
            type="light"
            effect="solid"
          />
          <li className="icon">
            <a
              href="https://www.behance.net/AnnaMarino"
              data-tip="behance"
              data-for="behance"
              className="social"
              activeclassname="active"
            >
              <RiBehanceLine />
            </a>
          </li>
          <ReactTooltip
            id="behance"
            place="bottom"
            data-offset="{'place': 'left'}"
            type="light"
            effect="solid"
          />
          <li className="icon">
            <a
              href="https://codepen.io/annamardesign"
              data-tip="codepen"
              data-for="codepen"
              className="social"
              activeclassname="active"
            >
              <FiCodepen />
            </a>
          </li>
          <ReactTooltip
            id="codepen"
            place="bottom"
            data-offset="{'place': 'left'}"
            type="light"
            effect="solid"
          />
        </ul>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
