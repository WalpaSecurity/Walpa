import React, { Component } from 'react';


// App component - represents the whole app
export default class Contact extends Component {
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
                  <form>
                    <div className="form-group">
                      <label htmlFor="inputMail">Email</label>
                      <input type="email" className="form-control" id="inputMail" placeholder="Entrez votre email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputNom">Nom</label>
                      <input type="text" className="form-control" id="inputNom" placeholder="Entrez votre nom" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputPrenom">Prénom</label>
                      <input type="text" className="form-control" id="inputPrenom" placeholder="Entrez votre prénom" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputTelephone">Téléphone</label>
                      <input type="text" className="form-control" id="inputTelephone" placeholder="Entrez votre n° de téléphone" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputObjet">Objet</label>
                      <input type="text" className="form-control" id="inputObjet" placeholder="Entrez l'objet du message" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputMessage">Message</label>
                      <textarea className="form-control" id="inputMessage" rows="3" placeholder="Entrez votre message"></textarea>
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
