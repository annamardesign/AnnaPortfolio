import React, {Component} from 'react';
import { BsDot } from "react-icons/bs";
class DragPanel extends Component {
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
            const style = {
              x: this.state.x,
              y: this.state.y
            }
            const children = [];

            for (let i = 0; i < this.state.numDrawing; i += 1) {
              children.push(<BsDot key={i} number={i} style={{style}}/>);
             };
    
            return <div className="canvas" style={{width:"7rem", height:"7rem", borderRadius:"50%", overflow:"hidden", backgroundColor:"#222222"}}
            onClick={this.onAddDrawing}
            onMouseMove={this.handleMouseMove} > {children}
              <p>Move</p>
            </div>
          }
        }

export default DragPanel;