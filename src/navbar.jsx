import React, { useEffect, useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { FiTwitter} from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { RiBehanceLine} from 'react-icons/ri';
import { FiCodepen } from 'react-icons/fi';
import { VscThreeBars } from 'react-icons/vsc';
import { TiTimes } from 'react-icons/ti';
import Logo from './logo.jsx';
import "./navbar.css";

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
      if(window.innerWidth <= 960){
          setButton(false) 
      } else { 
          setButton(true);
          }
      }
  
      useEffect(() => {
          showButton()
           window.addEventListener('resize', showButton);
            return (
             window.removeEventListener('resize', showButton))
            
      },[]);
  
    return (<React.Fragment>
    <div className="navbar">
    <div className="navbar-container container"> 
    <NavLink to="/resume" className="logo" onClick={closeMobileMenu} ><Logo /></NavLink>
    <div className="menu-icon" onClick={handleClick}>
         {click? <VscThreeBars className="bars"/> : <TiTimes className="close"/>}
    </div>
    <ul className={click? 'nav-menu active' : 'nav-menu'}>
    <li className='nav-item'>
    <NavLink to="/resume" className="navli" activeClassName="active" onClick={closeMobileMenu}>Resume</NavLink>
    </li>
    <li className='nav-item'>
    <NavLink to="/projects" className="navli" activeClassName="active" onClick={closeMobileMenu}>Projects</NavLink>
    </li>
    <li className='nav-item'>
    <NavLink to="/freebies" className="navli" activeClassName="active" onClick={closeMobileMenu}>Freebies</NavLink>
    </li>
    <li className='nav-item'>
    <NavLink to="/contact" className="navli" activeClassName="active" onClick={closeMobileMenu}>Contact</NavLink>
    </li>
    <li className="icon"><a href="https://www.twitter.com/annamardesign" className="social" activeclassname="active"><FiTwitter /></a></li>
    <li className="icon"><a href="https://www.github.com/annamardesign" className="social" activeclassname="active"><FiGithub /></a></li>
    <li className="icon"><a href="https://www.behance.net/AnnaMarino" className="social" activeclassname="active"><RiBehanceLine /></a></li>
    <li className="icon"><a href="https://www.codepen.io/annamardesigns/pens/" className="social" activeclassname="active"><FiCodepen /></a></li>
    </ul>
  </div>
</div></React.Fragment>  );
}

export default NavBar;