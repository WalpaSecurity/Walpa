import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HTTP } from 'meteor/http';
import { Session } from 'meteor/session';


const token = localStorage.getItem('token');

// App component - represents the whole app
export default class gestionUsers extends Component {

    

    handleDeleteUser(e){
      console.log("on supprime un user");
      console.log(this.props.id);
      console.log(e);

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
      var id = ReactDOM.findDOMNode(this.refs.id).value.trim();
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

    handleGetListUsers(){

        HTTP.call('GET', 'http://192.168.1.16:5000/api/admin', {
                headers:{
                    "Access-Control-Allow-Headers": "Content-Type, Authorization,Accept , Access-Control-Allow-Headers",
                    'Content-Type' : "application/json",
                    'Authorization' : "Bearer " + token,
                    'Accept' : "application/json"

                }
            },
            (error, result) => {
                if (!error) {
                  console.log(result);
                    const res = JSON.parse(result.content);
                    console.log(res.data);
                    //TableauRepo =res.data;

                }else{
                  console.log('ça ne fonctionne pas');
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
                    <button onClick={this.handleDeleteUser.bind(this)} id="1">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                  <td>
                    <form onSubmit={this.handleDeleteUser.bind(this)} >
                      <input type="hidden" name="id" ref="id" value="2" />
                      <input type="submit" value="Supprimer"></input>
                    </form>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                  <td>
                    <form onSubmit={this.handleDeleteUser.bind(this)} >
                      <input type="hidden" name="id" ref="id" value="3" />
                      <input type="submit" value="Supprimer"></input>
                    </form>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                  <td>
                    <form onSubmit={this.handleDeleteUser.bind(this)} >
                      <input type="hidden" name="id" ref="id" value="4" />
                      <input type="submit" value="Supprimer"></input>
                    </form>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                  <td>
                    <form onSubmit={this.handleDeleteUser.bind(this)} >
                      <input type="hidden" name="id" ref="id" value="5" />
                      <input type="submit" value="Supprimer"></input>
                    </form>
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
                    <form onSubmit={this.handleDeleteAdmin.bind(this)} >
                      <input type="hidden" name="id" ref="id" value="1" />
                      <input type="submit" value="Supprimer"></input>
                    </form>
                  </td>
                </tr>
                <tr data-id="2">
                  <td>2</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                  <td>
                    <form onSubmit={this.handleDeleteAdmin.bind(this)} >
                      <input type="hidden" name="id" ref="id" value="2" />
                      <input type="submit" value="Supprimer"></input>
                    </form>
                  </td>
                </tr>
                <tr data-id="3">
                  <td>3</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                  <td>
                    <form onSubmit={this.handleDeleteAdmin.bind(this)} >
                      <input type="hidden" name="id" ref="id" value="3" />
                      <input type="submit" value="Supprimer"></input>
                    </form>
                  </td>
                </tr>
                <tr data-id="4">
                  <td>4</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                  <td>
                    <form onSubmit={this.handleDeleteAdmin.bind(this)} >
                      <input type="hidden" name="id" ref="id" value="4" />
                      <input type="submit" value="Supprimer"></input>
                    </form>
                  </td>
                </tr>
                <tr data-id="5">
                  <td>5</td>
                  <td>Nom</td>
                  <td>Email</td>
                  <td>01/01/2018</td>
                  <td>
                    <form onSubmit={this.handleDeleteAdmin.bind(this)} >
                      <input type="hidden" name="id" ref="id" value="5" />
                      <input type="submit" value="Supprimer"></input>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    );
    }
}
