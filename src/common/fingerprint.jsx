import React, {Component} from 'react';
import { GiFingerPrint } from "react-icons/gi";
class FingerPrintPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      numPrints: 0
    };
  }

  
  handleClick = (e) => {
    this.setState({ x: e.screenX, y: e.screenY });
  }
  

  onAddFingerPrint = () => {
    this.handleClick();
    this.setState({
      numPrints: this.state.numPrints + 1
    });
  };

    
  render() {
    const { x, y } = this.state;
    const prints = [];
    const position = {
      left: x,
      top: y
    };
    for (let i = 0; i < this.state.numPrints; i += 1) {
      prints.push(
        <GiFingerPrint key={i} number={i} style={position} className="finger" />
      );
    }

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
        {prints}
        <p>Leave your print</p>
      </div>
    );
  }
}

export default FingerPrintPanel;