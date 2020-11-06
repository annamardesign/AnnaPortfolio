import React, {Component} from 'react';
import {useState, useEffect, useCallback} from 'react';
// import update from 'react-addons-update';
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
    if (coordinates !== 0) {
      // setDrawing(true);
      // setMousePosition(coordinates);
    }
  }, []);
  
  let finalPainting 
  const startDrawing = (e: onMouseDown) => { 
    let painting = [];
    // finalPainting = update(painting, {$push: <DrawingPath />}); 
    };
    
    

    if (setDrawing === true) {
    startDrawing();
    }

    useEffect(() => {
     window.addEventListener("mousemove", handleDrawing);
     window.addEventListener("mousedown", startDrawing)
      return () => {
      window.removeEventListener("mousemove", handleDrawing);
      window.removeEventListener("mousedown", startDrawing)
    };
   }, [handleDrawing, startDrawing]);

  return ( <div className="canvas" style={{width:"28rem", height:"28rem", borderRadius:"50%", overflow:"hidden", backgroundColor:"#222222"}}
  onMouseMove={handleDrawing} onMouseDown={startDrawing}>
    <p>Draw</p>
    <svg><path>{finalPainting}</path></svg>
    
  </div> );
}
export default DrawingPanel;
 
