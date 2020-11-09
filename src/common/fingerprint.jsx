import React, {Component} from 'react';
import { GiFingerPrint } from "react-icons/gi";
class FingerPrintPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPrints: 0,
      prints:[]
    };
  }
  
  onAddFingerPrint = (e) => {
    this.setState({
      numPrints: this.state.numPrints + 1
    });
    
    let print = this.generatePrint(e.clientX, e.clientY);
    
    this.setState({ prints: this.state.prints.concat(print) });
  };

  generatePrint(x, y) {
    return <GiFingerPrint 
              key={this.state.numPrints} 
              number={this.state.numPrints} 
              style={{ left: x-15, top: y-15, position: "absolute" }} 
              className="finger-print" 
            />;
  }

  render() {
    
    return (
      <div
        className="canvas"
        onClick={this.onAddFingerPrint}
        style={{
          width: '20rem',
          height: '20rem',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: '#222222'
        }}
      >
        {this.state.prints}
        <p style={{ userSelect: "none" }}>Leave your print</p>
      </div>
    );
  }
}
export default FingerPrintPanel;