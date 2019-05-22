import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from "./Navigation";

import "../styles/projects-page.css";

function Projects (props) {
    return (
    <div className="projects-page-wrapper">
        <Navigation />
        {props.projects && (
            <div className="projects-wrapper">
                {props.projects.map(project => {
                    return (
                        <div className="project-wrapper" key={project.id}>
                            <Link to={`/projects/${project.id}`}><h4>{project.name}</h4></Link>
                        </div>
                    )
                })}
            </div>
        )}
    </div>
    );
}
  
export default Projects;