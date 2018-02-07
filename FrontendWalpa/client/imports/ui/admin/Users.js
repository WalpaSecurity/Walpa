  import React, { Component } from 'react';


// App component - represents the whole app
export default class gestionUsers extends Component {
    render() {
        return (
          <div className="adminContent gestionUsers">
            <h1>Liste des utilisateurs</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Email</th>
                  <th scope="col">{"Date d'inscription"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                </tr>
              </tbody>
            </table>
          </div>
    );
    }
}
