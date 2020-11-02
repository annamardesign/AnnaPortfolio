import React, {Component} from 'react'
class DrawingPanel extends Component {
    constructor(props){
        super(props)
        this.state = {
          x: [],
          y: []
        }
    }
    handleMouseMove = (e) => {
        this.setState({ x: e.screenX, y: e.screenY });
    }
    
    draw(props) {
            
        if(this.handleMouseMove === true) {
         return <span/>
        }
    }
        
        
          render() {
            const { x, y } = this.state;
            return <div className="canvas" 
            style={{width:"300px", height:"300px", backgroundColor:"grey"}}
            onMouseMove={this.handleMouseMove}>
              <span style={{x: this.state.x, y: this.state.y, width: "15px", height:"0px", backgroundColor:"red", zIndex:"1"}}><p>Draw here</p></span>
            </div>;
          }
        }

export default DrawingPanel;