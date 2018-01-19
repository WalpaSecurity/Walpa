  import React, { Component } from 'react';


// App component - represents the whole app
export default class Footer extends Component {
    render() {
        return (
          <footer className="bg-dark text-light py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#">Accueil</a>
                    </li>
                    <li>
                      <a href="#">Qui sommes nous ?</a>
                    </li>
                    <li>
                      <a href="#">Analyser mon projet</a>
                    </li>
                    <li>
                      <a href="#">Faire un don</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Connexion / Inscription</a>
                    </li>
                    <li>
                      <a href="#">CGU</a>
                    </li>
                    <li>
                      <a href="#">Mentions Légales</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <img src="images/logo-footer-walpa.png" width="200px" className="img-fluid d-block mx-auto" alt="" />
                </div>
                <div className="ml-auto col-md-2">
                  <form className="" action="index.html" method="post">
                      <input type="text" name="" value="" className="form-control" placeholder="Rechercher" />
                  </form>
                </div>
              </div>
            </div>
          </footer>

    );
    }
}
