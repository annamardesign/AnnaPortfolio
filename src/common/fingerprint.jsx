import React, {Component} from 'react';
import { GiFingerPrint } from "react-icons/gi";
class FingerPrintPanel extends Component {
    constructor(props){
        super(props)
        this.state = {
          numPrints:0
        }
    }
    
    onAddFingerPrint = (e) => {
      this.setState({
        numPrints: this.state.numPrints + 10
      });
    }
        
          render() {
           const children = [];
            for (let i = 0; i < this.state.numPrints; i += 1) {
              children.push(<GiFingerPrint key={i} number={i} style={{spaceBetween:"0", overflow:"hidden"}}/>);
            };
          return <div className="canvas" onClick={this.onAddFingerPrint}
            style={{width:"20rem", height:"20rem", borderRadius:"50%", overflow:"hidden", backgroundColor:"#222222"}}
            > {children}
              <p>Leave your print</p>
            </div>
          }
        }

export default FingerPrintPanel;