import React, { Component } from 'react';

$('body').css({ 'padding-top':'0 !important'});

export default class Sidebar extends Component {

    handleDeco(event) {
        event.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('statutconnexion');
        document.location.reload(true);
        window.location.href = "/home";
        return false;
    }

    handleGetTypePage() {
        localStorage.setItem('view', 'admin');
    }

    handleGoViewFront() {
        localStorage.setItem('view', 'site');
    }

    render() {
        return (
          <div className="sidebar-admin text-center" onLoad={this.handleGetTypePage.bind(this)}>
            <ul className="navbar-nav">
              <li className="p-4">
                  <img src="/images/logo-footer-walpa.png" className="img-fluid" />
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/admin/">{"Tableau d'administration"}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/projets">Projets</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/utilisateurs">Utilisateurs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/dons">Dons</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/add-admin">Ajouter un administrateur</a>
              </li>

            </ul>
            <div className="topbar text-right">
              <a href="" target="_blank" onClick={this.handleGoViewFront.bind(this)}>Voir le site</a>
              <a href="/" onClick={this.handleDeco.bind(this)}><i className="fa fa-user" aria-hidden="true"></i> Déconnexion</a>
            </div>
          </div>

    );
    }
}
