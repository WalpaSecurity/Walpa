  import React, { Component } from 'react';


// App component - represents the whole app
export default class Profile extends Component {
    render() {
        return (
          <section id="profile">
            <div className="mes-projets container">
              <div className="row">
                <div className="col-lg-3 text-center">
                  <img className="img-fluid d-block mx-auto" width="200px" src="images/user.png" />
                  <p className="h4 my-4 text-uppercase">User User</p>
                </div>
                <div className="col-lg-9">
                  <h1>Historiques des projets</h1>
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
                        <td>
                         <a href="/files.txt">
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
                        <td>
                         <a href="/files2.txt">
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
                        <td>
                         <a href="/files3.txt">
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
                        <td>
                         <a href="/files4.txt">
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
                        <td>
                         <a href="/files5.txt">
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
              </div>

            </div>
          </section>

    );
  }
}
