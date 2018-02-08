import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HTTP } from 'meteor/http';
import { Session } from 'meteor/session';

// App component - represents the whole app
export default class SuccessGit extends Component {

  

    render() {
        return (
          <div>toto
            <div onClick={this.handleGitConnect.bind(this)} className="btn btn-success">bonjour</div>
          </div>
    );
    }
}
