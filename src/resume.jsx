import React, { Component } from 'react';
import FingerPrintPanel from "./common/fingerprint.jsx";

export default class Resume extends Component {

    render() {
        
        return (<React.Fragment>
             <div className="page">
              <h3>Inspire</h3>
              <h3>Create</h3>
              <section className="drawing">
              < FingerPrintPanel onMouseMove={ this.handleMouseMove } />
              </section>
            </div> 
            </React.Fragment>
        )
    }
}

