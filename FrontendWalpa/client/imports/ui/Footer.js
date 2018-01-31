  import React, { Component } from 'react';


// App component - represents the whole app
export default class Footer extends Component {
    render() {
        return (
          <footer className="bg-dark text-light py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4 footer-menu mb-5 mb-lg-0 text-center text-lg-left">
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
                      <a href="#">Mentions Légales</a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-4 mb-5 mb-lg-0 footer-logo">
                  <img src="/images/logo-footer-walpa.png" width="200px" className="img-fluid d-block mx-auto" alt="" />
                </div>
                <div className="ml-auto col-12 col-lg-4 footer-social text-center text-lg-right">
                  <ul className="list-inline">
                   <li className="list-inline-item">
                    <a href="">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                   </li>
                   <li className="list-inline-item">
                     <a href="">
                       <i className="fa fa-twitter" aria-hidden="true"></i>
                     </a>
                   </li>
                   <li className="list-inline-item">
                     <a href="">
                       <i className="fa fa-google-plus" aria-hidden="true"></i>
                     </a>
                   </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>

    );
    }
}
