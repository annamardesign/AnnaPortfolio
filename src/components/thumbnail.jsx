import React from 'react'; 
import {Link} from 'react-router-dom'; 
import './thumbnail.css';
 
function Thumbnail(props) {
  return (<React.Fragment>
    <div className="project">
    <div className="project-category">{props.category}</div>
    <div className="project-preview">
      <Link to={`/projects/${props.id}`}>
        <div className="project-title">{props.title}<img src={props.image} className="project-cover" alt={props.title}/></div>
      </Link>
    </div>
      <div className="project-year">{props.year}</div>
    </div>
  </React.Fragment>
  );
}
 
export default Thumbnail;