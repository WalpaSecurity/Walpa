import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HTTP } from 'meteor/http';


// App component - represents the whole app
export default class Projet extends Component {
    handleSubmitConnexion(event){
        event.preventDefault();
        const repo = ReactDOM.findDOMNode(this.refs.depot).value.trim();
        console.log(repo);
    }

    render() {
        return (
          <section id="projet" className="text-center text-lg-left">
            <div className="container">
              <h1>Analyser mon projet</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
                <form onSubmit={this.handleSubmitConnexion.bind(this)}>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon3">https://github.com/MonRepo/repo.git</span>
                        <input type="text" className="form-control" ref="depot" id="basic-url" aria-describedby="basic-addon3" />
                        <input className="btn btn-primary" type="submit" value="Etudier mon code"/>
                    </div>
                </form>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
    );
    }
}
