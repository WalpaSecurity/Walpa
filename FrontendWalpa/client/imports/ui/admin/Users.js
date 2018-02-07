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
                  <th scope="col">Nom du client</th>
                  <th scope="col">Nom du projet</th>
                  <th scope="col">Url</th>
                  <th className="text-center" scope="col">Supprimer le projet</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Jean Mouloud</td>
                  <td>
                   <a href="/admin/projet/1">
                    Projet 1
                   </a>
                  </td>
                  <td>{"https://github.com/WalpaSecurity/Walpa.git"}</td>
                  <td>
                    <a href="/admin/projet/2">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Alain Jéfaim</td>
                  <td>
                   <a href="/admin/projet/2">
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
                   <a href="/admin/projet/3">
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
                   <a href="/admin/projet/4">
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
                <tr>
                  <td>5</td>
                  <td>Le violongay</td>
                  <td>
                   <a href="/admin/projet/5">
                    Projet 5
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
