import React, {Component} from 'react';
import { GiFingerPrint } from "react-icons/gi";
class FingerPrintPanel extends Component {
    constructor(props){
        super(props)
        this.state = {
          x: 0,
          y: 0,
          canvasIsClicked: false,
          numPrints:0
        }
    }
    handleMouseMove = (e) => {
        this.setState({ x: e.screenX, y: e.screenY });
    }
    handleAddFingerPrint = (e) => {
        this.setState({ canvasIsClicked: true })
    }
    onAddFingerPrint = (e) => {
      this.setState({
        numPrints: this.state.numPrints + 10
      });
    }
        
          render() {
            const { x, y, image } = this.state;
            const children = [];
            for (let i = 0; i < this.state.numPrints; i += 1) {
              children.push(<GiFingerPrint key={i} number={i} style={{spaceBetween:"0", overflow:"hidden"}}/>);
            };
            return <div className="canvas" onClick={this.onAddFingerPrint}
            style={{width:"500px", height:"500px", borderRadius:"50%", overflow:"hidden", backgroundColor:"#222222"}}
            onMouseMove={this.handleMouseMove} > {children}
              <p>Leave your print</p>
            </div>
          }
        }

export default FingerPrintPanel;