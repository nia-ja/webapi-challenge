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
            {this.state.projects && (
                <div className="projects-wrapper">
                    {this.state.projects.map(project => {
                        return (
                            <div className="project-wrapper" key={project.id}>
                                <h4>{project.name}</h4>
                                <p>{project.description}</p>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
      );
    }
  }
  
  export default Projects;