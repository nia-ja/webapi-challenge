import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Projects from "./components/Projects";
import Actions from "./components/Actions";
import Home from "./components/Home";
import SingleProject from "./components/SingleProject";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/:id" component={SingleProject} />
        <Route path="/actions" component={Actions} />
      </div>
    );
  }
}

export default App;
