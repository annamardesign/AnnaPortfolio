import React, {Component} from 'react';
import { MdBlurOn } from "react-icons/md";
import './btn.css';


class DrawingPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numDrawings: 0,
      drawing:[]
    };
  }
  

  addDrawing = (e) => {
    this.setState({
      numDrawings: this.state.numDrawings + 1
    });
    
    let draw = this.generateDrawing(e.clientX, e.clientY);
    
    this.setState({ drawing: this.state.drawing.concat(draw) });
    
  };

  deleteDrawing = (e) => {
   this.setState({ drawing: [] });
  }

  generateDrawing(x, y) {
    return <MdBlurOn
              key={this.state.numDrawings} 
              number={this.state.numDrawings} 
              style={{ left: x, top: y+250, position: "absolute", padding:0, width:"1rem",  height:"1rem"}} 
              className="drawing" 
            />;
  }

  render() {
    
    return (<React.Fragment>
      <button onClick={this.deleteDrawing} className="round">Clear</button>
      <div 
        className="canvas-drawing"
        onMouseMove={this.addDrawing}
      >
        {this.state.drawing}
        <p style={{ userSelect: "none" }}>Draw</p>
      </div>
      </React.Fragment>);
  }
}
export default DrawingPanel;