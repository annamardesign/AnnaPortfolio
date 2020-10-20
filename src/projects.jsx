import React, { Component } from 'react';
import Thumbnail from './components/thumbnail.jsx'; 
import {projectsData} from './services/projectsData';
import './App.css';
import './projects.css';
class Projects extends Component {
   
    render() { 
    
        return ( <React.Fragment>
            <h1>Projects</h1>
            <div className="thumbButtonContainer">
            <button 
            className="thumbButton">All</button>
            <button className="thumbButton">Web</button>
            <button className="thumbButton">Illustration</button>
            </div>
            <div className="thumbContainer">
            {projectsData.map((project, key) => {
          return (
            <div key={key}>
              <Thumbnail
                key={key}
                link={project.link}
                image={project.image}
                title={project.title}
                category={project.category}
              />
            </div>
          );
        })}
      </div>
          </React.Fragment>
        );
    }
}
 
export default Projects;