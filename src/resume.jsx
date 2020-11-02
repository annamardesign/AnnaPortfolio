import React, { Component } from 'react';
import DrawingPanel from "./common/drawing.jsx";

export default class Resume extends Component {

    render() {
        
        return (<React.Fragment>
             <div className="page">
              <h3>Inspire</h3>
              <h3>Create</h3>
              <section className="drawing">
              < DrawingPanel onMouseMove={ this.handleMouseMove } />
              </section>
            </div> 
            </React.Fragment>
        )
    }
}

