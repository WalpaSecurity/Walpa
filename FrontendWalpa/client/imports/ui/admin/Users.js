import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HTTP } from 'meteor/http';
import { Session } from 'meteor/session';


const token = localStorage.getItem('token');
var Users = [];

// App component - represents the whole app
export default class gestionUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    

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

    componentDidMount() {
        console.log('toto');
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
                const res = JSON.parse(result.content);
                this.setState({users: res.data});
                this.renderUser();


                }else{
                  console.log('ça ne fonctionne pas');
                }
            });
    }

    renderUsers = () =>{
        let display = [];

        for (var i = 0; i< this.state.users.length; i++ ){
            display.push(<tr><td>{i}</td><td><a href="#" >{this.state.users[i].name}</a></td><td>{this.state.users[i].email}</td><td>1/1/0001</td><td className="text-center"><a href=""><i className="far fa-trash-alt"></i></a></td></tr>);

        }
        return (
            <tbody>
            {display}
            </tbody>
        )
    }

    render() {
        return (
          <div className="adminContent gestionUsers" onLoad={this.handleGetUsers()} >
            <h2>Liste des utilisateurs</h2>
            <table className="table table-striped" id="listUser" >
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Email</th>
                  <th scope="col">{"Date d'inscription"}</th>
                  <th className="text-center" scope="col">{"Supprimer l'utilisateur"}</th>
                </tr>
              </thead>
                {this.renderUsers()}
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
