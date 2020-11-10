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
  
  addFingerPrint = (e) => {
    this.setState({
      numPrints: this.state.numPrints + 1
    });
    
    let print = this.generatePrint(e.pageX, e.pageY);
    
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
  deletePrint = (e) => {
    this.setState({ prints: [] });
   }

  render() {
    
    return (<React.Fragment>
      <button onClick={this.deletePrint} style={{borderRadius:"50%", width:"3rem", height:"3rem"}}>Clear</button>
      <div
        className="canvas"
        onClick={this.addFingerPrint}
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
      </React.Fragment>);
  }
}
export default FingerPrintPanel;