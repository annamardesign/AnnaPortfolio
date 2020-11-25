import React from 'react';
import FingerPrintPanel from "./common/fingerprint.jsx";
import DrawingPanel from "./common/draw.jsx";
import Email from './components/email.jsx';
import ReactTooltip from 'react-tooltip';
import { Link } from "react-router-dom";
import './herosection.css';


const Herosection = () => {

    return (   
  <div className="grid-wrapper">
    <div className="background-section"><img src="https://assets-global.website-files.com/5e3b6956c6f4896b188f6a27/5e579b523dfad169bc38d94d_background-hero.png" alt="Yellow blob shapes in background" sizes="(max-width: 991px) 100vw, 95vw" srcset="https://assets-global.website-files.com/5e3b6956c6f4896b188f6a27/5e579b523dfad169bc38d94d_background-hero-p-500.png 500w, https://assets-global.website-files.com/5e3b6956c6f4896b188f6a27/5e579b523dfad169bc38d94d_background-hero-p-800.png 800w, https://assets-global.website-files.com/5e3b6956c6f4896b188f6a27/5e579b523dfad169bc38d94d_background-hero-p-1080.png 1080w, https://assets-global.website-files.com/5e3b6956c6f4896b188f6a27/5e579b523dfad169bc38d94d_background-hero-p-1600.png 1600w, https://assets-global.website-files.com/5e3b6956c6f4896b188f6a27/5e579b523dfad169bc38d94d_background-hero-p-2000.png 2000w, https://assets-global.website-files.com/5e3b6956c6f4896b188f6a27/5e579b523dfad169bc38d94d_background-hero.png 2514w"></img></div>
    <aside className="aside">
     <img src={ require("./images/Anna.png")} alt="Anna Marinova" className="me"/>
      <ul className="links-wrapper">
        <li className="email"><span data-tip="Send me an email" data-for='myemail'><Email/></span></li>
        <ReactTooltip id="myemail" place="bottom" data-event="click" data-offset="{'place': 'left'}" type="light" effect="solid"/>
        <li className="cv"><Link to="/files/myfile.pdf" style={{fontSize:"1.2rem"}} target="_blank" download>Download CV</Link></li>
     </ul>
    </aside>
    <article className="article">
    <h4>About me</h4>
    <div className="about-me">
     <p>Hi, I'm Anna Marinova and the main area of my expertise is front end development. </p>
     <p> Coding interactive layouts, animations and building web apps with <span style={{color:"#ff3e55"}}>HTML5, CSS, JavaScript, React</span> has become my passion.</p>
     <p> I love to draw digitally and make mosaics on the side. </p>
    </div>
      <div className="flex-wrapper">
        <span><FingerPrintPanel /></span>
        <span><DrawingPanel /></span>
      </div>
    </article>
  </div>
    
     );
}
 
export default Herosection;



