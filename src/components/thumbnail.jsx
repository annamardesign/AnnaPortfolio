import React from 'react'; 
import {Link} from 'react-router-dom'; 
import './thumbnail.css';
 
function Thumbnail(props) {
  return (<React.Fragment>
    <div className="project">
    <div className="project-category">{props.category}</div>
      <Link to={props.link}>
        <div className="project-title">{props.title}</div>
        <img src={props.image} alt="Project Image" className="project-cover"/>
      </Link>
      <div className="project-year">{props.year}</div>
    </div>
  </React.Fragment>
  );
}
 
export default Thumbnail;