  import React, { Component } from 'react';
  import { Session } from 'meteor/session'

 const userconnected = localStorage.getItem('statutconnexion');

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

    render() {
        if(userconnected =='2'){
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
                        <a className="nav-link" href="/profile">Mon compte</a>
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
            </div>
          );
        }else {
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
            </div>
          );
        }
    }
    // function displayHeader(){
    //     const element = (
    //         <div id='wow'></div>
    // );
    //     ReactDOM.render(
    //         element,
    //         document.getElementById('header')
    //     );
    // }

}
