import React, {Component} from 'react';
import { BsDot } from "react-icons/bs";
class DrawingPanel extends Component {
    constructor(props){
        super(props)
        this.state = {
          x: 0,
          y: 0,
          mouseIsMoved:false,
          numDrawing:0
        }
    }
    handleMouseMove = (e) => {
        this.setState({ x: e.screenX, y: e.screenY });
    }
    handleAddDrawing = (e) => {
        this.setState({ mouseIsMoved: true })
    }
    onAddDrawing = (e) => {
      this.setState({
        numDrawing: this.state.numDrawing + 1
      });
    }
        
          render() {
            const { x, y } = this.state;
            const children = [];

            for (let i = 0; i < this.state.numDrawing; i += 1) {
              children.push(<BsDot key={i} number={i} style={{spaceBetween:"-30", overflow:"hidden"}}/>);
             };
    
            return <div className="canvas" style={{width:"28rem", height:"28rem", borderRadius:"50%", overflow:"hidden", backgroundColor:"#222222"}}
            onClick={this.onAddDrawing}
            onMouseMove={this.handleMouseMove} > {children}
              <p>Draw</p>
            </div>
          }
        }

export default DrawingPanel;