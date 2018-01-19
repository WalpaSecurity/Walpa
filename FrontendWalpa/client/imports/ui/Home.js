  import React, { Component } from 'react';


// App component - represents the whole app
export default class Home extends Component {
    render() {
        return (
          <section id="home">
            <div id="headerHome" className="d-flex align-items-center text-center text-lg-right bg-dark text-light">
              <div className="container">
                <h1>
                  Walpa<br/>
                  <small>Un projet propre, sécurisé<br/>et bien codé</small>
                </h1>
                <a href="/analyser-mon-projet" className="btn btn-primary">Analyser mon projet</a>
              </div>
            </div>

            <div id="presentation" className="d-flex align-items-center py-5">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 pr-lg-5 text-center text-lg-right">
                    <h2 className="mt-0">Qui sommes nous ?</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a href="" className="btn btn-primary">En savoir +</a>
                  </div>
                  <div className="col-lg-6">
                    <img src="images/img1.jpg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div id="blocDons" className="d-flex align-items-center bg-light py-5">
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-3">
                  <img src="images/img1.png" alt="" />
                  </div>
                  <div className="col-lg-7 description">
                    <h2>Aidez nous à nous développer !</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a href="/faire-un-don" className="btn btn-primary">Faire un don</a>
                  </div>
                </div>
              </div>
            </div>

            <div id="competences" className="d-flex align-items-center bg-white py-5">
              <div className="container">
                <h2 className="text-center">Notre expertise</h2>
                <div className="row justify-content-center text-center">
                  <div className="col-lg-3">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                    <h3>Securité</h3>
                  </div>
                  <div className="col-lg-3">
                    <i className="fa fa-keyboard-o" aria-hidden="true"></i>
                    <h3>Développement</h3>
                  </div>
                  <div className="col-lg-3">
                    <i className="fa fa-globe" aria-hidden="true"></i>
                    <h3>Référencement</h3>
                  </div>
                </div>
              </div>
            </div>
            <div id="maps"></div>
          </section>




    );
    }
}
