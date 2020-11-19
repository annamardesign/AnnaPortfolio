import React, { Component } from 'react';
//import FilterList from './filterList.jsx';
import ListGroup from './common/ListGroup.jsx';
import Thumbnail from './components/thumbnail.jsx';
import { projectsData } from './services/projectsData.js';
import { getCategory } from './services/getCategory.js';
import './projects.css';
import './App.css';


export default class Projects extends Component {
  state = {
  projects: [],
  category: []
  }
  componentDidMount() {
    const category = [{ name:"All" },...getCategory()];
    this.setState({ projects:projectsData, category });
  }
  handleCategorySelect = category => {
    this.setState({selectedCategory: category});
  }

  render() {
    const { selectedCategory, projects:projectsData } = this.state;
    const filtered = selectedCategory && selectedCategory.id ? 
    projectsData.filter(p => p.category === selectedCategory.name)
    : projectsData;
    return (
      <div className="page">
        <div className="filter-button-container">
      <ListGroup 
      items={this.state.category} 
      selectedItem={this.state.selectedCategory}
      onItemSelect={this.handleCategorySelect}
      />
      </div>
     <div className = "thumb-container">
      {filtered.map(projectsData => (
        <Thumbnail
            key={projectsData.id}
            link={projectsData.link}
            image={projectsData.image}
            title={projectsData.title}
            category={projectsData.category}
      />
      ))}
    </div>
      </div>
    )
  } 
  
}