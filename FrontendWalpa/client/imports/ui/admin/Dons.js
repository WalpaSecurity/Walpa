  import React, { Component } from 'react';


// App component - represents the whole app
export default class gestionDons extends Component {
    render() {
        return (
          <div className="adminContent gestionDons">
            <h1>Historiques des dons</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nom du donateur</th>
                  <th scope="col">Email</th>
                  <th scope="col">Montant</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Jean Mouloud</td>
                  <td>Email</td>
                  <td>50€</td>
                  <td>10/01/2018</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Jean Mouloud</td>
                  <td>Email</td>
                  <td>50€</td>
                  <td>10/01/2018</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Jean Mouloud</td>
                  <td>Email</td>
                  <td>50€</td>
                  <td>10/01/2018</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Jean Mouloud</td>
                  <td>Email</td>
                  <td>50€</td>
                  <td>10/01/2018</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Jean Mouloud</td>
                  <td>Email</td>
                  <td>50€</td>
                  <td>10/01/2018</td>
                </tr>
              </tbody>
            </table>
          </div>
    );
    }
}
