  import React, { Component } from 'react';


// App component - represents the whole app
export default class Header extends Component {
    render() {
        return (
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                      <div className="menu">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">
                              <img src="images/logo-walpa.png" />
                            </a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">Qui sommes nous ?</a></li>
                                <li><a href="#">Analyser mon projet</a></li>
                                <li><a href="#">Faire un don</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Connexion / inscription</a></li>
                            </ul>
                        </div>
                      </div>
                    </div>
                </nav>
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
