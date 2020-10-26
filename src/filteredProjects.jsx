import React from 'react';
import { projectsData } from './services/projectsData.js';
import Thumbnail from './components/thumbnail.jsx'; 
import {useEffect, useState} from 'react';
import './filteredProjects.css';
import './App.css';


const FilteredProjects = (props) => {
    //const filtered = props.filter === "All" 
                        //? projectsData.filter(p => p.category === FilterButton.key)
                        //: projectsData; 
    const [projects, setProjects] = useState(projectsData);
    const [category, setCategory] = useState("All");
    const handleButtonClick = (e) => setCategory(e.target.value);
    let filteredProjects = projects;
                    
    useEffect(() => { 
        if(category !== "All"){
            filteredProjects = projectsData.filter(p => p.category === category);
        }
        setProjects(filteredProjects);
        }, [category])
    
    return filteredProjects.map(projectsData => (
        <Thumbnail
            key={projectsData.id}
            link={projectsData.link}
            image={projectsData.image}
            title={projectsData.title}
            category={projectsData.category}
      />
      ))
      
}
 
export default FilteredProjects;