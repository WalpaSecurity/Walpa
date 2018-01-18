  import React, { Component } from 'react';


// App component - represents the whole app
export default class Header extends Component {
    render() {
        return (
          <div id="menu">
            <nav className="navbar navbar-expand-lg fixed-top navbar-light">
              <div className="container">
                <a className="navbar-brand mx-auto" href="/">
                  <img src="images/logo-walpa.png" className="img-fluid" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                </span>
                </button>
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="/team">Qui sommes nous ?</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/projet">Analyser mon projet</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/don">Faire un don</a>
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
              </ul>
            </div>
            <div className="overlay_mobile"></div>
          </div>
    );
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
