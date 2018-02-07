import React, { Component } from 'react';
import ReactDOM from 'react-dom';

  const token = localStorage.getItem('token');


// App component - represents the whole app
export default class AjouterAdmin extends Component {

    handleAddAdmin(event) {
      event.preventDefault();

      // Find the text field via the React ref
      const emailNewAdmin = ReactDOM.findDOMNode(this.refs.emailNewAdmin).value.trim();
      const nameNewAdmin = ReactDOM.findDOMNode(this.refs.emailNewAdmin).value.trim();
      const passwordNewAdmin = ReactDOM.findDOMNode(this.refs.passwordNewAdmin).value.trim();
      //const password = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

      HTTP.call('POST', 'http://192.168.1.16:5000/api/admin', {
        headers:{
            "Access-Control-Allow-Headers": "Content-Type, Authorization,Accept , Access-Control-Allow-Headers",
            'Content-Type' : "application/json",
            'Authorization' : "Bearer " + token,
            'Accept' : "application/json"

        },
        data: {
          email: emailNewAdmin,
          name: nameNewAdmin,
          password: passwordNewAdmin,
          admin: true,
        }
      }, (error, result) => {
        if (!error) {
          console.log(result);
        }
      });
    }

    render() {
        return (
          <div className="adminContent add-admin">
            <h1>Ajouter un administrateur</h1>
            <form onSubmit={this.handleAddAdmin.bind(this)}>
                <div className="form-group">
                    <label htmlFor="email">Adresse mail</label>
                    <input type="text" className="form-control" id="email" ref="emailNewAdmin" placeholder="Entrez une adresse e-mail"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nom">Nom </label>
                    <input type="text" className="form-control" id="nom" ref="nameNewAdmin" placeholder="Entrez un nom"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password1">Mot de passe</label>
                    <input type="password" className="form-control" id="password1" ref="passwordNewAdmin" placeholder="Saisissez un mot de passe"/>
                </div>
                <input className="btn btn-primary" type="submit" value="Ajouter un administrateur"/>
            </form>
          </div>
    );
    }
}
