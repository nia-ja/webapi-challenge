import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from "axios";

import Projects from "./components/Projects";
import Actions from "./components/Actions";
import Home from "./components/Home";
import SingleProject from "./components/SingleProject";

class App extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    axios
      .get("https://webapi-sprint-challenge.herokuapp.com/api/projects")
      .then(response => {
        this.setState({ projects: response.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" render={(props) => <Projects {...props} projects={this.state.projects} />} />
        <Route path="/projects/:id" render={(props) => <SingleProject {...props} projects={this.state.projects} />} />
        <Route path="/actions" component={Actions} />
      </div>
    );
  }
}

export default App;
