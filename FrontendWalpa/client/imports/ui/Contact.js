import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HTTP } from 'meteor/http';

// App component - represents the whole app
export default class Contact extends Component {
    handleSubmitContact(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        const nom = ReactDOM.findDOMNode(this.refs.nom).value.trim();
        const prenom = ReactDOM.findDOMNode(this.refs.prenom).value.trim();
        const telephone = ReactDOM.findDOMNode(this.refs.telephone).value.trim();
        const objet = ReactDOM.findDOMNode(this.refs.objet).value.trim();
        const message = ReactDOM.findDOMNode(this.refs.message).value.trim();

        HTTP.call('POST', 'http://192.168.1.16:5000/contact', {
                data: {
                    firstName: prenom,
                    lastName: nom,
                    email: email,
                    phone: telephone,
                    object: objet,
                    message: message
                }
            },
            (error, result) => {
            if (!error) {
            console.log(result);
            const res = JSON.parse(result.content);
            console.log(res);
            }
        });

    };

    render() {
        return (
          <section id="contact">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 text-center description">
                  <h1>Contactez nous</h1>
                  <p>
                    Vous avez une question ? Une demande particulière ? N{"'"}hésitez pas à nous contacter via le formulaire mis à disposition, nous vous repondrons dans les plus bref délais
                  </p>
                  <br/>
                  <img src="images/logo-walpa.png" alt="" width="150px" />
                  <p className="py-2 font-weight-bold">
                    Walpa Security<br/>
                    6 place Charles Hernu<br/>
                    69100, Villeurbanne<br/>
                    Rhône - France
                  </p>
                </div>
                <div className="col-lg-6">
                  <form onSubmit={this.handleSubmitContact.bind(this)} >
                    <div className="form-group">
                      <label htmlFor="inputMail">Email</label>
                      <input type="email" className="form-control" ref="email" id="inputMail" placeholder="Entrez votre email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputNom">Nom</label>
                      <input type="text" className="form-control" ref="nom" id="inputNom" placeholder="Entrez votre nom" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputPrenom">Prénom</label>
                      <input type="text" className="form-control" ref="prenom" id="inputPrenom" placeholder="Entrez votre prénom" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputTelephone">Téléphone</label>
                      <input type="text" className="form-control" ref="telephone" id="inputTelephone" placeholder="Entrez votre n° de téléphone" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputObjet">Objet</label>
                      <input type="text" className="form-control" ref="objet" id="inputObjet" placeholder="Entrez l'objet du message" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputMessage">Message</label>
                      <textarea className="form-control" id="inputMessage" ref="message" rows="3" placeholder="Entrez votre message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
    );
    }
}
