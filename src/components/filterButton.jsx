
import React from 'react';
import './filterButton.css';
import useFilter from '../hooks/useFilter.js';

export default function FilterButton(props) {
  let filterValue = "All"
  function handleButtonClick(e, filteredValue) {
    e.preventDefault();
    if(filteredValue !== null){
      filterValue = filteredValue
    }
  }
  // useFilter(filterValue)

 
  return (
      <button
        type="button"
        aria-pressed={props.isPressed}
        onClick={(e)=> handleButtonClick(e, props.value)}
      >
        {props.value}
      </button>
    );
  }
 