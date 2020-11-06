import React, { Component } from 'react';
import FingerPrintPanel from "./common/fingerprint.jsx";
import DrawingPanel from "./common/drawing.jsx";
import DragPanel from "./common/draganddrop.jsx";

export default class Resume extends Component {

    render() {
        
        return (<React.Fragment>
             <div className="page">
              <main className="create">
              < DragPanel className="drag-panel"/>
              < FingerPrintPanel className="fingerprint-panel" onMouseMove={ this.handleMouseMove } />
              < DrawingPanel className="drawing-panel"/>
              </main>
              <sidebar className="about-me-center">
                  <img src={ require("./images/Anna.png")} style={{width:"50%"}}/>
                  <p className="about me">
                  Hi, my name is Anna Marinova and I'm a Front-end Developer who focuses on writing clean, elegant and efficient code.<br></br>
                  I have Professional Degree in Web Design from NET IT Ltd. Web Academy. <br></br>
                  My superpowers are <span style={{color:"#ff3e55"}}>HTML5, CSS, JavaScript, React</span>. I love to draw digitally and make mosaics on the side. </p>
              </sidebar>
              
            </div> </React.Fragment>
        )
    }
}

