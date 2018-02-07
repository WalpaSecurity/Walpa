  import React, { Component } from 'react';


// App component - represents the whole app
export default class gestionUsers extends Component {
    render() {
        return (
          <div className="adminContent add-admin">
            <h1>Ajouter un administrateur</h1>
            <form onSubmit={this.handleSubmitInscription.bind(this)}>
                <div className="form-group">
                    <label htmlFor="email">Adresse mail</label>
                    <input type="text" className="form-control" id="email" ref="emailinscrit" placeholder="Entrez une adresse e-mail"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nom">Nom </label>
                    <input type="text" className="form-control" id="nom" ref="name" placeholder="Entrez un nom"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password1">Mot de passe</label>
                    <input type="password" className="form-control" id="password1" ref="passwordinscrit" placeholder="Saisissez un mot de passe"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirmation mot de passe</label>
                    <input type="password" className="form-control" id="password2" ref="passwordinscrit2" placeholder="Confirmez le mot de passe"/>
                </div>
                <input className="btn btn-primary" type="submit" value="Ajouter un administrateur"/>
            </form>
          </div>
    );
    }
}
