import React from 'react';
import FilterList from './filterList.jsx';
import FilteredProjects from './filteredProjects.jsx';
import './App.css';

export default function Projects(props) {

  return (
  <div>
      <div className="filter-button-container">
            <FilterList/>
      </div>
    <div className = "thumb-container"><FilteredProjects/></div>
  </div> )  
  
}