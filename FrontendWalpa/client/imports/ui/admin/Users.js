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
                console.log(res.data);
                this.setState({users: res.data});


                }else{
                  console.log('ça ne fonctionne pas');
                }
            });
    }

    renderUsers = () =>{
        let display = [];
        for (var i = 0; i< this.state.users.length; i++ ){
            const admin = this.state.users[i].admin;
            if(admin == "1"){
                display.push(<tr><td>{i}</td><td><a href="#" >{this.state.users[i].name}</a></td><td>{this.state.users[i].email}</td><td> Administrateur</td><td className="text-center"><a href=""><i className="far fa-trash-alt"></i></a></td></tr>);
            }else {
                display.push(<tr><td>{i}</td><td><a href="#" >{this.state.users[i].name}</a></td><td>{this.state.users[i].email}</td><td>Utilisateur Classique</td><td className="text-center"><a href=""><i className="far fa-trash-alt"></i></a></td></tr>);
            }


        }
        return (
            <tbody>
            {display}
            </tbody>
        )
    }

    render() {
        return (
          <div className="adminContent gestionUsers">
            <h2>Liste des utilisateurs</h2>
            <table className="table table-striped" id="listUser" >
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Email</th>
                  <th scope="col">{"Administrateur"}</th>
                  <th className="text-center" scope="col">{"Supprimer l'utilisateur"}</th>
                </tr>
              </thead>
                {this.renderUsers()}
            </table>
          </div>
    );
    }
}
