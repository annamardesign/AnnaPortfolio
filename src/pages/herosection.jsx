import React from 'react';
import Email from '../components/email.jsx';
import Animation from '../components/animation.js';
import { Link } from "react-router-dom";
import './herosection.css';


const Herosection = () => {

    return (   
  <div className="grid-wrapper">
    <div className="background-section"><img src="https://assets-global.website-files.com/5e3b6956c6f4896b188f6a27/5e579b523dfad169bc38d94d_background-hero.png" alt="Yellow blob shapes in background" sizes="(max-width: 991px) 100vw, 95vw" srcset="https://assets-global.website-files.com/5e3b6956c6f4896b188f6a27/5e579b523dfad169bc38d94d_background-hero-p-500.png 500w, https://assets-global.website-files.com/5e3b6956c6f4896b188f6a27/5e579b523dfad169bc38d94d_background-hero-p-800.png 800w, https://assets-global.website-files.com/5e3b6956c6f4896b188f6a27/5e579b523dfad169bc38d94d_background-hero-p-1080.png 1080w, https://assets-global.website-files.com/5e3b6956c6f4896b188f6a27/5e579b523dfad169bc38d94d_background-hero-p-1600.png 1600w, https://assets-global.website-files.com/5e3b6956c6f4896b188f6a27/5e579b523dfad169bc38d94d_background-hero-p-2000.png 2000w, https://assets-global.website-files.com/5e3b6956c6f4896b188f6a27/5e579b523dfad169bc38d94d_background-hero.png 2514w"></img></div>
    <div className="frontend">
     <Animation className="animation"/>
    </div>
    <article className="article">
    <div className="about-me">
     <p class-name="intro-line"> Hi, I'm Anna Marinova and this is my Portfolio as Front-End-Developer. </p>
     <p class-name="intro-line"> Coding interactive layouts, animations and building web apps with <span style={{color:"#ff3e55"}}>HTML5, CSS3, JavaScript, React</span> has become my passion.</p>
     <p class-name="intro-line"> I love to draw digitally and make mosaics on the side. </p>
     </div>
    <ul className="links-wrapper">
        <li className="cv"><Link to="/files/myfile.pdf" style={{fontSize:"1.2rem"}} target="_blank" download>Download CV</Link></li>
        <li className="email"><Email/></li>
     </ul>
    </article>
  </div>
    
     );
}
 
export default Herosection;



