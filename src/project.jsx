import React from 'react';

const Project = ({ match, history }) => {
  
    return (
    <div className="page">
     <article className="project-case-study">
      <div className="project-title">{match.params.title}<img src={match.params.image} className="project-cover" alt={match.params.title}/></div>
       <div className="objective">
         <h2>Objective{match.params.id}</h2>
         <p>{match.params.objective}</p>
       </div>  
       <a href={match.params.url} className="project-url"></a>
    </article>
    <button className="back-btn" onClick={() => history.push('/projects')}>Back</button>
   </div> ); 
}
 
export default Project;





  

