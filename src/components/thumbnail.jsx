import React from "react";
import { Link } from "react-router-dom";
import "./thumbnail.css";

function Thumbnail(props) {
  return (
    <React.Fragment>
      <Link to={`/projects/${props.id}`}>
        <div className="project">
          <div className="project-category">{props.category}</div>
          <div className="project-preview">
            <div className="project-title">
              {props.title}
              <img
                src={props.image}
                className="project-cover"
                alt={props.title}
              />
            </div>
          </div>
          <div className="project-year">{props.year}</div>
        </div>
      </Link>
    </React.Fragment>
  );
}

export default Thumbnail;
