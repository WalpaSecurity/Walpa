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
                  <td>
                   <a href="">
                    Projet 1
                   </a>
                  </td>
                  <td>{"https://github.com/WalpaSecurity/Walpa.git"}</td>
                  <td>
                    <a href="#">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Alain Jéfaim</td>
                  <td>
                   <a href="">
                    Projet 2
                   </a>
                  </td>
                  <td>{"https://github.com/WalpaSecurity/Walpa.git"}</td>
                  <td>
                    <a href="#">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Legrand Monarque</td>
                  <td>
                   <a href="">
                    Projet 3
                   </a>
                  </td>
                  <td>{"https://github.com/WalpaSecurity/Walpa.git"}</td>
                  <td>
                    <a href="#">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>James Bond</td>
                  <td>
                   <a href="">
                    Projet 4
                   </a>
                  </td>
                  <td>{"https://github.com/WalpaSecurity/Walpa.git"}</td>
                  <td>
                    <a href="#">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    );
    }
}
