
import React from 'react';
import './filterButton.css';
import useFilter from '../hooks/useFilter.jsx';

export default function FilterButton(props) {
  let filterValue = "All"
  const handleButtonClick = (e, filteredValue) => {
    if(filteredValue !== null){
      filterValue = filteredValue
    }
  }
  // useFilter(filterValue)

 
  return (
      <button
        type="button"
        aria-pressed={props.isPressed}
        onClick={(e) => handleButtonClick(e, props.value)}
      >
        {props.value}
      </button>
    );
  }
 