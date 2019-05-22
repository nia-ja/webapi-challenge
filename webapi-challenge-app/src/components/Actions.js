import React, { Component } from 'react';
import axios from "axios";

import "../styles/actions.css";

import Navigation from "./Navigation";

class Actions extends Component {
    state = {
      actions: []
    }
    componentDidMount() {
      axios
        .get("https://webapi-sprint-challenge.herokuapp.com/api/actions")
        .then(response => {
          this.setState({ actions: response.data });
        })
        .catch(err => console.log(err));
    }
    render() {
      return (
        <div className="actions-page-wrapper">
            <Navigation />
            {this.state.actions && (
                <div className="actions-wrapper">
                    {this.state.actions.map(action => {
                        return (
                            <div className="action-wrapper" key={action.id}>
                                <h4>{action.description}</h4>
                                { action.notes && (<p><span>Notes:</span> {action.notes}</p>) }
                                { !action.notes && (<p>No notes for this action</p>)}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
      );
    }
}
  
export default Actions;