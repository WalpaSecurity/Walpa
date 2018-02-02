import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HTTP } from 'meteor/http';

// App component - represents the whole app
export default class Connexion extends Component {

    handleSubmitConnexion(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        console.log(email);
        console.log(password);

        HTTP.call('POST', 'http://192.168.1.16:5000/api/login', {
                data: {
                    email: email,
                    password: password
                }
            },
            (error, result) => {
            if (!error) {
            const res = JSON.parse(result.content);
            console.log(res);
            console.log(res.token);
            const token = res.token;
            HTTP.call('POST', 'http://192.168.1.16:5000/api/get-details', {
                headers:{
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": "true",
                    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
                    "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
                    'Content-Type' : "application/json",
                    'Authorization' : "Bearer " + token,
                    'Accept' : "application/json"

                },
                    data: {
                        token: token
                    }
                },
                (error, resultuser) => {
                    if (!error) {
                        console.log(resultuser);
                        const resuser = JSON.parse(resultuser);
                        console.log(resuser);
                    }
            });

        }
    });

        // Clear form

    }

    handleSubmitInscription(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const emailinscrit = ReactDOM.findDOMNode(this.refs.emailinscrit).value.trim();
        const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
        const passwordinscrit = ReactDOM.findDOMNode(this.refs.passwordinscrit).value.trim();
        const passwordinscrit2 = ReactDOM.findDOMNode(this.refs.passwordinscrit2).value.trim();
        //const password = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        HTTP.call('POST', 'http://192.168.1.16:5000/api/register', {
            data: {
                email: emailinscrit,
                name: name,
                password: passwordinscrit,
                c_password: passwordinscrit2
                }
            },
            (error, result) => {
                if (!error) {
                    console.log(result);
                }
        });



        // Clear form
        //ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    render() {
        return (
                <section id="connexion-inscription" className="text-center text-lg-left">
                    <div className="container">
                        <div className="row align-items-start justify-content-center">
                            <div className="col-12 col-md-6 col-lg-4 connexion">
                                <h2>Connexion</h2>
                                <form onSubmit={this.handleSubmitConnexion.bind(this)} >
                                    <div className="form-group">
                                        <label htmlFor="emailConnect">Adresse Mail</label>
                                    <input type="email" className="form-control" id="emailConnect" ref="email" placeholder="Entrez votre e-mail"/>
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="mdp">Mot de passe</label>
                                        <input type="password" className="form-control" id="mdp" ref="password" placeholder="Entrez votre mot de passe"/>
                                    </div>
                                    <input className="btn btn-primary" type="submit" value="Se connecter"/>
                                </form>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 inscription">
                                <h2>Inscription</h2>
                                <form onSubmit={this.handleSubmitInscription.bind(this)}>
                                    <div className="form-group">
                                        <label htmlFor="email">Adresse mail</label>
                                        <input type="text" className="form-control" id="email" ref="emailinscrit" placeholder="blablabla@blabla.fr"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nom">Nom </label>
                                        <input type="text" className="form-control" id="nom" ref="name" placeholder="What's yo name son ?"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password1">Mot de passe</label>
                                        <input type="password" className="form-control" id="password1" ref="passwordinscrit" placeholder="Put here yo mothafucking password"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password2">Confirmation mot de passe</label>
                                        <input type="password" className="form-control" id="password2" ref="passwordinscrit2" placeholder="Put here yo mothafucking password again"/>
                                    </div>
                                    <input className="btn btn-primary" type="submit" value="S'inscrire"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

    );
    }
}
