  import React, { Component } from 'react';


// App component - represents the whole app
export default class gestionProjets extends Component {
    render() {
        return (
          <div className="adminContent gestionProjets">
            <h1>Mes projets</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nom du projet</th>
                  <th scope="col">Url</th>
                  <th className="text-center" scope="col">Supprimer le projet</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Projet 1</td>
                  <td>{"https://github.com/WalpaSecurity/Walpa.git"}</td>
                  <td>
                    <a href="#">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Projet 2</td>
                  <td>{"https://github.com/WalpaSecurity/Walpa.git"}</td>
                  <td>
                    <a href="#">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Projet 3</td>
                  <td>{"https://github.com/WalpaSecurity/Walpa.git"}</td>
                  <td>
                    <a href="#">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Projet 4</td>
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
