  import React, { Component } from 'react';


// App component - represents the whole app
export default class Dashboard extends Component {
    render() {
        return (
          <div className="dashboard">
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-0">
              <div className="container">
                <a className="navbar-brand font-weight-bold" href="#">Espace administration</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Tableau de bord</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Mes projets</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Mon profil</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Se déconnecter</a>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-primary my-2 my-sm-0" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
    );
    }
}
