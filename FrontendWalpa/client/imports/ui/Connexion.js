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

        HTTP.call('GET', 'https://swapi.co/api/people/1/', {}, (error, result) => {
            if( !error ){
            const res = JSON.parse(result.content);
            // debugger;
             console.log(res);
            // console.log(JSON.parse(result));
            }
        });

        // Clear form

    }

    handleSubmitInscription(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const emailinscrit = ReactDOM.findDOMNode(this.refs.emailinscrit).value.trim();
        const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
        const surname = ReactDOM.findDOMNode(this.refs.surname).value.trim();
        const passwordinscrit = ReactDOM.findDOMNode(this.refs.passwordinscrit).value.trim();
        const passwordinscrit2 = ReactDOM.findDOMNode(this.refs.passwordinscrit2).value.trim();
        const password = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        console.log(emailinscrit);


        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    render() {
        return (
                <div id="home">
                    <div className="container">
                        <div className="row align-items-start justify-content-between">
                            <div className="col-5 connexion">
                                <h2>Connexion</h2>
                                <form onSubmit={this.handleSubmitConnexion.bind(this)} >
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Adresse Mail</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput" ref="email" placeholder="blablabla@blabla.fr"/>
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">Mot de passe</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" ref="password" placeholder="00000000"/>
                                    </div>
                                    <input type="submit" value="Connexion" />
                                </form>
                            </div>
                            <div className="col-5">
                                <h2>Inscription</h2>
                                <form onSubmit={this.handleSubmitInscription.bind(this)}>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Adresse mail</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" ref="emailinscrit" placeholder="blablabla@blabla.fr"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Nom </label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" ref="name" placeholder="What's yo name son ?"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Prénom </label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" ref="surname" placeholder="What's yo surname cunt ?"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Mot de passe</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" ref="passwordinscrit" placeholder="Put here yo mothafucking password"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Confirmation mot de passe</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" ref="passwordinscrit2"placeholder="Put here yo mothafucking password again"/>
                                    </div>
                                    <input type="submit" value="S'inscrire" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

    );
    }
}
