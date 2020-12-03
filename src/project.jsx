import React from 'react';
import { projectsData } from './services/projectsData';
import './project.css';

const Project = ({ match, history }) => {
  let project = projectsData.find(({id}) => id === match.params.id)
    return (
    <div className="page">
     <article className="project-case-study">
      <div className="project-name">{project.title}<img src={project.image} className="project-img" alt={project.title}/></div>
       <div className="objective">
         <h2 className="objective-title">Objective</h2>
         <p>{project.objective}</p>
         <a href={project.url} className="project-url">Visit web site</a>
       </div>  
       <button className="back-btn" onClick={() => history.push('/projects')}>Back</button>
    </article>
    
    <section className="presentation">
      <img src={project.tablet} className="tablet"></img>
      <img src={project.mobile} className="mobile"></img>
    </section>
   </div> ); 
}
 
export default Project;





  

