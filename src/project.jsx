import React from 'react';
import { projectsData } from './services/projectsData';
import './project.css';

const Project = ({ match, history }) => {
  let project = projectsData.find(({id}) => id === match.params.id)
    return (
    <div className="page">
     <article className="project-case-study">
      <div className="project-title">{project.title}<img src={project.image} className="project-cover" alt={project.title}/></div>
       <div className="objective">
         <h2>Objective{match.params.id}</h2>
         <p>{project.objective}</p>
       </div>  
       <a href={project.url} className="project-url"></a>
    </article>
    <button className="back-btn" onClick={() => history.push('/projects')}>Back</button>
   </div> ); 
}
 
export default Project;





  

