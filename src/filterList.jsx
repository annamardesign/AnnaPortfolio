import React from 'react';
import { projectsData } from './services/projectsData.js';
import './filterList.css';
import FilterButton from './components/filterButton';
import './App.css';


const FilterList = (props) => {
    const filterStates = { all: "All", web: "Web", illustration: "Illustration"}
    const FILTER_MAP = {
        All: () => true,
        Web: () => projectsData.category === filterStates.web,
        Illustration: () => projectsData.category === filterStates.illustration
        };  
    const FILTER_NAMES = Object.keys(FILTER_MAP);
    
    return FILTER_NAMES.map(name => (
        <FilterButton
            className="toggle-btn"
            key={name}
            value={name}
            //isPressed={name === filter}
            onClick = {(e)=> props.handleButtonClick(e)}
        >{name}
        </FilterButton>
    ));
    }
export default FilterList;
 
