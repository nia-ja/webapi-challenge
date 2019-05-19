import React, { Component } from 'react';
import axios from "axios";
import Navigation from "./Navigation";

class SingleProject extends Component {
    state = {
      projects: [],
      actions: [],
      project: []
    }
  
    componentDidMount() {
        const id = Number(this.props.match.params.id);
        console.log(id);
        axios
            .get("http://localhost:5001/api/projects")
            .then(response => {
                this.setState({ projects: response.data });
            })
            .then(() => {
                const project = this.state.projects.filter(project => project.id === id);
                this.setState({ project: project[0]});
            })
            .catch(err => console.log(err));
        axios
            .get(`http://localhost:5001/api/projects/${id}/actions`)
            .then(response => {
                this.setState({ actions: response.data });
            })
            .catch(err => console.log(err));
    }
    render() {
        console.log(this.state.actions);
      return (
        <div className="single-project-page">
            <Navigation />
            <div className="single-project-wrapper">
                {this.state.project && (
                    <div>
                        <h4>{this.state.project.name}</h4>
                        <p><span>Description:</span> {this.state.project.description}</p>
                        <p><span>Actions:</span></p>
                        { this.state.actions.map(action => {
                            return (
                                <div className="action" key={action.id}>
                                    <p>※</p>
                                    <p>{action.description}</p>
                                </div>
                            )
                        })}
                        {(this.state.actions.length === 0) && <p>There's no actions for this project</p>}
                    </div>
                )}
            </div>
        </div>
      );
    }
  }
  
  export default SingleProject;