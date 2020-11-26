import React from 'react'; 
import {Link} from 'react-router-dom'; 
import './thumbnail.css';
 
function Thumbnail(props) {
  return (<React.Fragment>
    <div className="project">
    <div className="project-category">{props.category}</div>
      <Link to={props.link}>
        <div className="project-title">{props.title}</div>
      </Link>
      <div className="project-year">{props.year}</div>
    </div>
    <div className="project-image">
    <img src={props.image} alt="Project Image" className="project-cover"/>
  </div>
  </React.Fragment>
  );
}
 
export default Thumbnail;