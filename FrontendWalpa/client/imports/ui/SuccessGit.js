import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HTTP } from 'meteor/http';
import { Session } from 'meteor/session';

// App component - represents the whole app
export default class SuccessGit extends Component {

  handleGitConnect(){

    HTTP.call('GET', 'http://192.168.1.200:52900/auth/github/callback', {

    }, (error, result) => {
      if (!error) {
        const users = JSON.parse(result.content);
        console.log(result);
        console.log(users.data);
        console.log("good");
      } else {
        console.log("pas good");
      }
    });
  }

    render() {
        return (
          <div>toto
            <div onClick={this.handleGitConnect.bind(this)} className="btn btn-success">bonjour</div>
          </div>
    );
    }
}
