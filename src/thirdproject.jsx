import React, { Component } from 'react';

const ThirdProject = (props) => {
    return (
    <div className="page">
     <article className="project-case-study">
      <div className="project-title">{props.title}<img src={props.image} className="project-cover" alt={props.title}/></div>
       <div className="objective">
         <h2>Objective</h2>
         <p>{props.objective}</p>
       </div>  
       <a href={props.url} className="project-url"></a>
    </article>
   </div> ); 
}
 
export default ThirdProject;
