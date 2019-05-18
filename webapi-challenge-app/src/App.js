import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Projects from "./components/Projects";
import Actions from "./components/Actions";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/actions" component={Actions} />
      </div>
    );
  }
}

export default App;
