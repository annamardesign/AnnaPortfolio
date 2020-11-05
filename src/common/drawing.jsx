import React, {Component} from 'react';
import {useState, useEffect, useCallback} from 'react';
import DrawingPath from "../components/DrawingPath";

const DrawingPanel = (props) => {
  const {coordinatesX, setCoordinatesX} = useState(0);
  const {coordinatesY, setCoordinatesY} = useState(0);
  const {mousePosition, setMousePosition} = useState(0)
  const {drawing, setDrawing} = useState(false);

  const handleDrawing = useCallback((e: onMouseMove) => {
   const coordinates = (e) => {
    setCoordinatesX(e.screenX)
    setCoordinatesY(e.screenY)
   }
    if (coordinates === true) {
    setDrawing(true);
    setMousePosition(coordinates);
    }
  }, []);
    

  useEffect(() => {
   window.addEventListener("mousemove", handleDrawing);
   return () => {
    window.removeEventListener("mousemove", handleDrawing);
   };
  }, [handleDrawing]);

  if (setDrawing === true) {
    handleDrawing = ({lines}) => { 
     return <svg>
        {lines.map((line, index) => (
          <DrawingPath key={index} line={line} />
        ))}
      </svg>
    };
  }

  return ( <div className="canvas" style={{width:"28rem", height:"28rem", borderRadius:"50%", overflow:"hidden", backgroundColor:"#222222"}}
  onMouseMove={handleDrawing} >
    <p>Draw</p>
    
  </div> );
}
export default DrawingPanel;
 
