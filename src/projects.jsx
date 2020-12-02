import React, { Component } from 'react';
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

  thumbnails = {

  }

  render() {
    const { selectedCategory, projects:projectsData, getRoutes } = this.state;
    const filtered = selectedCategory && selectedCategory.id ? 
    projectsData.filter(p => p.category === selectedCategory.name) : projectsData;
    return (
      <div className="page">
        <div className="flex-wrap">
         <div className="filter-button-container">
          <ListGroup 
           items={this.state.category} 
           selectedItem={this.state.selectedCategory}
           onItemSelect={this.handleCategorySelect}
          />
         </div>
         <div className = "thumb-container">
          {filtered.map(projectsData => (
            <Thumbnail className="thumbnail"
              key={projectsData.id}
              id={projectsData.id}
              url={projectsData.url}
              image={projectsData.image}
              title={projectsData.title} 
              category={projectsData.category}
              year={projectsData.year}
              objective={projectsData.objective}
            >
            </Thumbnail> ))}
         </div>
      </div>
    </div>
    )}
}