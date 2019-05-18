import React, { Component } from 'react';
import axios from "axios";
import Navigation from "./Navigation";


class Projects extends Component {
    state = {
      projects: []
    }
  
    componentDidMount() {
      axios
        .get("http://localhost:5001/api/projects")
        .then(response => {
          this.setState({ projects: response.data });
        })
        .catch(err => console.log(err));
    }
    render() {
      return (
        <div className="projects-page wrapper">
            <Navigation />
          Projects
        </div>
      );
    }
  }
  
  export default Projects;