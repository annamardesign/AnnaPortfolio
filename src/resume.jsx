import React, { Component } from 'react';
import FingerPrintPanel from "./common/fingerprint.jsx";
import DrawingPanel from "./common/draw.jsx";


export default class Resume extends Component {

    render() {
        
        return (<React.Fragment>
             <div className="page">
              <main className="create">
              < FingerPrintPanel className="fingerprint-panel" />
              < DrawingPanel className="drawing-panel" />
              </main>
              <section className="about-me-center">
              
                  <img src={ require("./images/Anna.png")} style={{width:"50%"}}/>
                  <div className="text">
                  <p> Hi, my name is Anna Marinova and I'm a Front-end Developer who focuses on writing clean, elegant and efficient code.</p>
                  <p> I have Professional Degree in Web Design from NET IT Ltd. Web Academy. My superpowers are <span style={{color:"#ff3e55"}}>HTML5, CSS, JavaScript, React</span>.</p>
                  <p> I love to draw digitally and make mosaics on the side. </p>
                  </div>
              </section>
              
            </div> </React.Fragment>
        )
    }
}

