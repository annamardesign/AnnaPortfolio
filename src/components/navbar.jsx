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

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <React.Fragment>
      <div className="navbar" role="navigation">
        <NavLink
          to="/resume"
          className="logo"
          onClick={closeMobileMenu}
          aria-label="logo"
          aria-current="page"
        >
          <Logo aria-label="logo" />
        </NavLink>
        <div
          className="menu-icon"
          onClick={handleClick}
          aria-label="mobile-menu-button"
        >
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
              aria-label="resume"
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
              aria-label="projects"
              className="navli"
              activeClassName="active"
              onClick={closeMobileMenu}
            >
              Projects
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink
              to="/freebies"
              className="navli"
              activeClassName="active"
              onClick={closeMobileMenu}
            >
              Freebies
            </NavLink>
          </li> */}
          <li className="icon">
            <button
              onClick={() =>
                openInNewTab("https://www.twitter.com/annamardesign")
              }
              data-tip="twitter"
              data-for="twitter"
              aria-label="twitter link"
              className="social"
              activeclassname="active"
            >
              <FiTwitter />
            </button>
          </li>
          <ReactTooltip
            id="twitter"
            place="bottom"
            data-offset="{'place': 'left'}"
            type="light"
            effect="solid"
          />
          <li className="icon">
            <button
              onClick={() =>
                openInNewTab("https://www.github.com/annamardesign")
              }
              data-tip="git"
              data-for="git"
              aria-label="git link"
              className="social"
              activeclassname="active"
            >
              <FiGithub />
            </button>
          </li>
          <ReactTooltip
            id="git"
            place="bottom"
            data-offset="{'place': 'left'}"
            type="light"
            effect="solid"
          />
          <li className="icon">
            <button
              onClick={() => openInNewTab("https://www.behance.net/AnnaMarino")}
              data-tip="behance"
              data-for="behance"
              aria-label="behance link"
              className="social"
              activeclassname="active"
            >
              <RiBehanceLine />
            </button>
          </li>
          <ReactTooltip
            id="behance"
            place="bottom"
            data-offset="{'place': 'left'}"
            type="light"
            effect="solid"
          />
          <li className="icon">
            <button
              onClick={() => openInNewTab("https://codepen.io/annamardesign")}
              data-tip="codepen"
              data-for="codepen"
              aria-label="codepen link"
              className="social"
              activeclassname="active"
            >
              <FiCodepen />
            </button>
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
