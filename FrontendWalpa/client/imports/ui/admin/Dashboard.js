  import React, { Component } from 'react';


// App component - represents the whole app
export default class Dashboard extends Component {
    render() {
        return (
          <div className="adminContent dashboard">
            <h1>Tableau de board</h1>
            <hr/>
            <ul>
              <li>Nombre de projet analysé : 10</li>
              <li>{"Nombre d'utilisateurs : 10"}</li>
            </ul>
          </div>
    );
    }
}
