import React, {Component} from 'react';
import { MdBlurOn } from "react-icons/md";

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
              style={{ left: x, top: y+120, position: "absolute", padding:0, width:"0.5em",  height:"0.5em"}} 
              className="drawing" 
            />;
  }

  render() {
    
    return (<React.Fragment>
      <button onClick={this.deleteDrawing} style={{borderRadius:"50%", width:"3rem", height:"3rem"}}>Clear</button>
      <div 
        className="canvas1"
        onMouseMove={this.addDrawing}
        style={{
          width: '28rem',
          height: '28rem',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: '#222222'
        }}
      >
        {this.state.drawing}
        <p style={{ userSelect: "none" }}>Draw</p>
      </div>
      </React.Fragment>);
  }
}
export default DrawingPanel;