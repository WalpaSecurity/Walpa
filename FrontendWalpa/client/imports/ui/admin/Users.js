import React, { Component } from 'react';


const token = localStorage.getItem('token');

// App component - represents the whole app
export default class gestionUsers extends Component {

    handleGetListUsers(){

      HTTP.call('GET', 'http://192.168.1.16:5000/api/admin', {
        headers:{
          "Access-Control-Allow-Headers": "Content-Type, Authorization,Accept , Access-Control-Allow-Headers",
          'Content-Type' : "application/json",
          'Authorization' : "Bearer " + token,
          'Accept' : "application/json"
        }
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

    handleDeleteUser(e){
      e.preventDefault();
      console.log("on supprime un user");
      console.log($(this).data('id'));
      console.log($(this));
      console.log($(this).text());

      HTTP.call('DELETE', 'http://192.168.1.16:5000/api/admin', {
        headers:{
          "Access-Control-Allow-Headers": "Content-Type, Authorization,Accept , Access-Control-Allow-Headers",
          'Content-Type' : "application/json",
          'Authorization' : "Bearer " + token,
          'Accept' : "application/json"
        }
      }, (error, result) => {
        if (!error) {
          console.log("good");
        } else {
          console.log("pas good");
        }
      });
    }
    handleDeleteAdmin(e){
      e.preventDefault();
      console.log("on supprime un admin");
      var id = $(this).closest('tr').data('id');
      console.log(id);

      HTTP.call('DELETE', 'http://192.168.1.16:5000/api/admin', {
        headers:{
          "Access-Control-Allow-Headers": "Content-Type, Authorization,Accept , Access-Control-Allow-Headers",
          'Content-Type' : "application/json",
          'Authorization' : "Bearer " + token,
          'Accept' : "application/json"
        }
      }, (error, result) => {
        if (!error) {
          console.log("good");
        } else {
          console.log("pas good");
        }
      });
    }

    render() {
        return (
          <div className="adminContent gestionUsers" onLoad={this.handleGetListUsers.bind(this)}>
            <h2>Liste des utilisateurs</h2>
            <table className="table table-striped" id="listUser">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Email</th>
                  <th scope="col">{"Date d'inscription"}</th>
                  <th className="text-center" scope="col">{"Supprimer l'utilisateur"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                  <td>
                    <a href="" onClick={this.handleDeleteUser.bind(this)} data-id="1">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                  <td>
                    <a href="" onClick={this.handleDeleteUser.bind(this)} data-id="2">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                  <td>
                    <a href="" onClick={this.handleDeleteUser.bind(this)} data-id="3">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                  <td>
                    <a href="" onClick={this.handleDeleteUser.bind(this)} data-id="4">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                  <td>
                    <a href="" onClick={this.handleDeleteUser.bind(this)} data-id="5">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>


            <hr/>


            <h2>Liste des administrateurs</h2>
            <table className="table table-striped" id="listAdmin">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Email</th>
                  <th scope="col">{"Date d'inscription"}</th>
                  <th className="text-center" scope="col">{"Supprimer l'utilisateur"}</th>
                </tr>
              </thead>
              <tbody>
                <tr data-id="1">
                  <td>1</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                  <td>
                    <a href="" onClick={this.handleDeleteAdmin.bind(this)}>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
                <tr data-id="2">
                  <td>2</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                  <td>
                    <a href="" onClick={this.handleDeleteAdmin.bind(this)}>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
                <tr data-id="3">
                  <td>3</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                  <td>
                    <a href="" onClick={this.handleDeleteAdmin.bind(this)}>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
                <tr data-id="4">
                  <td>4</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                  <td>
                    <a href="" onClick={this.handleDeleteAdmin.bind(this)}>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
                <tr data-id="5">
                  <td>5</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                  <td>
                    <a href="" onClick={this.handleDeleteAdmin.bind(this)}>
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
