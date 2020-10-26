import React from 'react';
import Thumbnail from './components/thumbnail.jsx'; 
import { projectsData } from './services/projectsData';
import { useState } from 'react';
import { useFilter } from './hooks/useFilter.js';
import filterButton from './components/FilterButton.jsx';
import {getCategory} from './services/getCategory.js';
import './App.css';
import './projects.css';


export default function Project(props) {
  useFilter();
  const [filter, setFilter] = useState({
    name: "All",
  });
  const FILTER_MAP = {
    All: () => true,
    Web: () => projectsData.category === "Web",
    Illustration: () => projectsData.category === "Illustration"
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP);
  const filterList = FILTER_NAMES.map(name => (
  <filterButton
    key={name}
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
  />
));

 const filtered = filterButton.isPressed? projectsData.filter(p => p.category === filterButton.name)
 : projectsData;

 const filteredProjects = filtered.map(projectsData => (
  <Thumbnail
  id={projectsData.id}
  link={projectsData.link}
  image={projectsData.image}
  title={projectsData.title}
  category={projectsData.category}
/>
))
  return 
  <div><Thumbnail/></div>   
  
}
