  import React, { Component } from 'react';
  import { Session } from 'meteor/session'

 const statutconnexion = localStorage.getItem('statutconnexion');

// App component - represents the whole app
export default class Header extends Component {
    handleDeco(event) {
        event.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('statutconnexion');
        document.location.reload(true);
        window.location.href = "/home";
        return false;
    }
    handleGetTypePage() {
        localStorage.setItem('view', 'site');
        console.log('voici la vue front');
    }

    handleGoViewAdmin() {
        localStorage.setItem('view', 'admin');
        window.location.href = "/admin";
        return false;
    }

    render() {
        // si on est connecter en mode admin
        if(statutconnexion == "1"){
          return (
            // admin connecté
            <div id="navbar-menu" onLoad={this.handleGetTypePage.bind(this)}>
              <nav id="menu" className="navbar navbar-expand-lg fixed-top navbar-light">
                <div className="container">
                  <a id="logo" className="navbar-brand mx-auto" href="/">
                    <img src="/images/logo-walpa.png" className="img-fluid" />
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon">
                  </span>
                  </button>
                  <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="/qui-sommes-nous">Qui sommes nous ?</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/analyser-mon-projet">Analyser mon projet</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/faire-un-don">Faire un don</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link bg-light mr-2" href="/admin" onClick={this.handleGoViewAdmin.bind(this)}>Administration</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link link-disconnect" onClick={this.handleDeco.bind(this)} >Deconnexion</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div id="menu-mobile" className="text-center">
                <a href="#">
                  <img  className="img-fluid" width="200px" src="images/logo-walpa.png" className="img-fluid" />
                </a>
                <ul className="list-unstyled">
                  <li>
                    <a href="/qui-sommes-nous">Qui sommes nous ?</a>
                  </li>
                  <li>
                    <a href="/analyser-mon-projet">Analyser mon projet</a>
                  </li>
                  <li>
                    <a href="/faire-un-don">Faire un don</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    <a href="/admin">Administration</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link link-disconnect" onClick={this.handleDeco.bind(this)}>Deconnexion</a>
                  </li>
                </ul>
              </div>
              <div className="overlay_mobile"></div>
              <div id="snackbar">Some text some message..</div>
            </div>
          );
        }else if(statutconnexion == "2"){
          return (
            // utilisateur connecter
            <div id="navbar-menu" onLoad={this.handleGetTypePage.bind(this)}>
              <nav id="menu" className="navbar navbar-expand-lg fixed-top navbar-light">
                <div className="container">
                  <a id="logo" className="navbar-brand mx-auto" href="/">
                    <img src="/images/logo-walpa.png" className="img-fluid" />
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon">
                  </span>
                  </button>
                  <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="/qui-sommes-nous">Qui sommes nous ?</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/analyser-mon-projet">Analyser mon projet</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/faire-un-don">Faire un don</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link bg-light mr-2" href="/profile">Mon compte</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link link-disconnect" onClick={this.handleDeco.bind(this)} >Deconnexion</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div id="menu-mobile" className="text-center">
                <a href="#">
                  <img  className="img-fluid" width="200px" src="images/logo-walpa.png" className="img-fluid" />
                </a>
                <ul className="list-unstyled">
                  <li>
                    <a href="/qui-sommes-nous">Qui sommes nous ?</a>
                  </li>
                  <li>
                    <a href="/analyser-mon-projet">Analyser mon projet</a>
                  </li>
                  <li>
                    <a href="/faire-un-don">Faire un don</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    <a href="/profile">Mon compte</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link link-disconnect" onClick={this.handleDeco.bind(this)}>Deconnexion</a>
                  </li>
                </ul>
              </div>
              <div className="overlay_mobile"></div>
              <div id="snackbar">Some text some message..</div>
            </div>
          );
        } else {
          // Pas connecté
          return (
            <div id="navbar-menu">
                <nav id="menu" className="navbar navbar-expand-lg fixed-top navbar-light">
                    <div className="container">
                        <a id="logo" className="navbar-brand mx-auto" href="/">
                            <img src="/images/logo-walpa.png" className="img-fluid" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                            </span>
                        </button>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/qui-sommes-nous">Qui sommes nous ?</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/analyser-mon-projet">Analyser mon projet</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/faire-un-don">Faire un don</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/connexion">Connexion / Inscription</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div id="menu-mobile" className="text-center">
                    <a href="#">
                        <img  className="img-fluid" width="200px" src="images/logo-walpa.png" className="img-fluid" />
                    </a>
                    <ul className="list-unstyled">
                        <li>
                            <a href="/qui-sommes-nous">Qui sommes nous ?</a>
                        </li>
                        <li>
                            <a href="/analyser-mon-projet">Analyser mon projet</a>
                        </li>
                        <li>
                            <a href="/faire-un-don">Faire un don</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/connexion">Connexion / Inscription</a>
                        </li>
                    </ul>
                </div>
                <div className="overlay_mobile"></div>
                <div id="snackbar">Some text some message..</div>
            </div>
          );
        }
    }
}



window.onscroll = function () {
    growShrinkLogo();
};

function growShrinkLogo() {
    var Logo = document.getElementById("logo");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        Logo.style.width = '120px';
    } else {
        Logo.style.width = '180px';
    }
}
